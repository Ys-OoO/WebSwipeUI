import { register } from '@/services/user/user';
import { Button, Form, Input, Modal, Upload, message } from 'antd';
import { useState } from 'react';
import { useDispatch, useSelector } from 'umi';

export default function RegisterModal() {
  const dispatch = useDispatch();
  const { registerVisible } = useSelector(state => state.user);
  const [fileList, setFileList] = useState([])
  const onFinish = async (value) => {
    const res = await register({
      ...value,
      avatar: fileList[0]?.originFileObj || null
    })
    if (res.code === 0) {
      onCancel();
    }
  }
  const [form] = Form.useForm();
  const beforeUpload = (file) => {
    const isJpgOrPng = file.type === 'image/jpeg' || file.type === 'image/png';
    if (!isJpgOrPng) {
      message.error('You can only upload JPG/PNG file!');
    }
    const isLt2M = file.size / 1024 / 1024 < 2;
    if (!isLt2M) {
      message.error('Image must smaller than 2MB!');
    }
    return isJpgOrPng && isLt2M;
  }
  const onCancel = () => {
    dispatch({ type: 'user/save', config: { registerVisible: false } })
    form.resetFields()
    setFileList([])
  }

  const handleChange = ({ fileList: newFileList }) => setFileList(newFileList);
  return (
    <Modal open={registerVisible} onCancel={onCancel}
      footer={null}
      title="注册账号"
      closeIcon={null}
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

        <Upload
          name="avatar"
          listType="picture-circle"
          className="avatar-uploader"
          fileList={fileList}
          beforeUpload={beforeUpload}
          onChange={handleChange}
        >
          {fileList?.length >= 1 ? undefined : <div>
            <div
              style={{
                marginTop: 8,
              }}
            >
              Upload
            </div>
          </div>}
        </Upload>


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
