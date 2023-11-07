import { getCurrentUser, login } from '@/services/user/user';
import { Button, Form, Input, Modal } from 'antd';
import { useDispatch, useSelector } from 'umi';

export default function LoginModal() {
  const dispatch = useDispatch();
  const { loginVisible } = useSelector(state => state.user);
  const [form] = Form.useForm();

  const onFinish = async (value) => {
    const res = await login(value);
    if (res.code !== 0) {
      onCancel();
      return;
    }
    const { webSwipeToken } = res?.data;
    localStorage.setItem("webSwipeToken", webSwipeToken);
    const res2 = await getCurrentUser();
    await dispatch({ type: "user/save", config: { currentUser: res2?.data } });
    onCancel();
  }

  const onCancel = () => {
    form.resetFields();
    dispatch({ type: 'user/save', config: { loginVisible: false } });
  }
  return (
    <Modal open={loginVisible}
      footer={null}
      title="登录"
      closeIcon={null}
      onCancel={onCancel}
      zIndex={9999}
    >
      <Form
        name="basic"
        onFinish={onFinish}
        initialValues={null}
        form={form}
      >
        <Form.Item
          label="账号"
          name="username"
          rules={[
            {
              required: true,
              message: 'Please input your username!',
            },
          ]}
        >
          <Input />
        </Form.Item>

        <Form.Item
          label="密码"
          name="password"
          rules={[
            {
              required: true,
              message: 'Please input your password!',
            },
          ]}
        >
          <Input.Password />
        </Form.Item>
        <Form.Item
          wrapperCol={{
            offset: 8,
            span: 16,
          }}
        >
          <Button type="primary" htmlType="submit">
            Submit
          </Button>
        </Form.Item>
      </Form>
    </Modal>
  )
}

