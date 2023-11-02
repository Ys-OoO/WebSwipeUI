import VideoCoverSelect from '@/components/VideoCoverSelect';
import { uploadVideoFile } from '@/services/video/video';
import { Button, Form, Input, Modal, Select, Upload, message } from 'antd';
import _ from 'lodash';
import { useState } from 'react';
import { useDispatch, useParams, useSelector } from 'umi';

export default function VideoUpload() {
  const disptch = useDispatch();
  const { visible } = useSelector((state) => state.videoUpload);
  const { menuOption } = useSelector((state) => state.menu);
  const params = useParams();
  const categories = _.filter(menuOption, (o) => {
    return o.categoryKey !== 'popular';
  });
  const [form] = Form.useForm();
  const [fileList, setFileList] = useState([]);
  const [loading, setLoading] = useState(false);

  const checkFile = (file, files) => {
    if (file.type !== 'video/mp4') {
      message.info('请上传MP4的格式的视频');
      return Upload.LIST_IGNORE;
    }
    if (fileList.length != 0) {
      message.info('请勿重复上传');
      return Upload.LIST_IGNORE;
    }
    //在此处不向服务器上传
    return false;
  };
  const uploadVideo = async () => {
    //check Form
    const result = await form
      .validateFields()
      .then(async () => {
        setLoading(true);
        const { categories, cover, description, isVertical } = form.getFieldsValue();
        const videoFile = form.getFieldValue('dragger').file;
        //send Request
        const res = await uploadVideoFile({
          file: videoFile,
          categories,
          isVertical,
          ...cover,
          description,
        });
        if (res?.code !== 0) {
          return false;
        }
        return true;
      })
      .catch((err) => console.info(err));
    if (result) {
      clearForm();
      disptch({ type: 'videoUpload/save', config: { visible: false } });
      disptch({ type: 'videoWaterfall/refreshVideoList', config: { category: params.category } });
      message.success('视频上传成功啦🙌~');
    }
    setLoading(false);
  };

  const clearForm = () => {
    form.resetFields();
    //视频组件由fileList控制，因此关闭时需要清空
    setFileList([]);
    disptch({ type: 'videoUpload/save', config: { visible: false } });
  };
  return (
    <Modal
      open={visible}
      onCancel={clearForm}
      footer={[
        <Button loading={loading} type="primary" size="large" onClick={uploadVideo}>
          确认上传
        </Button>,
      ]}
    >
      <Form layout="vertical" name="uploadVideo" form={form} size="large">
        {fileList.length === 0 ? undefined : (
          <>
            <Form.Item label="选择封面" name="cover">
              <VideoCoverSelect file={fileList && fileList[0]?.originFileObj} />
            </Form.Item>
            <Form.Item label="最佳观看方式" name="isVertical">
              <Select placeholder="请选择视频最佳观看方式">
                <Select.Option value={0}>横屏</Select.Option>
                <Select.Option value={1}>竖屏</Select.Option>
              </Select>
            </Form.Item>
          </>
        )}
        <Form.Item label="上传的视频">
          <Form.Item
            name="dragger"
            valuePropName="videoFile"
            rules={[
              {
                required: true,
                message: '请选择视频分类',
              },
            ]}
            noStyle
          >
            <Upload.Dragger
              name="video"
              accept=".mp4"
              multiple={false}
              beforeUpload={checkFile}
              fileList={fileList}
              onChange={({ fileList }) => {
                setFileList(fileList);
              }}
            >
              <p className="ant-upload-text">点击或拖拽视频文件到此区域上传</p>
              <p className="ant-upload-hint">目前仅支持MP4格式!</p>
            </Upload.Dragger>
          </Form.Item>
        </Form.Item>
        <Form.Item
          label="分类"
          name="categories"
          rules={[
            {
              required: true,
              message: '请添加视频',
            },
          ]}
        >
          <Select placeholder="请选择视频分类" allowClear mode="multiple">
            {_.map(categories, (o) => {
              return (
                <Select.Option value={o.categoryKey} key={o.categoryKey}>
                  {o.text}
                </Select.Option>
              );
            })}
          </Select>
        </Form.Item>
        <Form.Item label="描述" name="description">
          <Input placeholder="描述一下你的视频内容~" allowClear />
        </Form.Item>
      </Form>
    </Modal>
  );
}
