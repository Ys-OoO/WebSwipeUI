import _ from 'lodash';
import { useEffect, useState } from 'react';
import 'video.js/dist/video-js.css';

export default function VideoCoverSelect({ file, onChange, ...props }) {
  const controlled = 'value' in props;
  const [thisValue, setThisValue] = useState({ fram: 0 });
  const value = controlled ? props.value || { fram: 0 } : thisValue;
  const [previewVideoSrc, setPreviewVideoSrc] = useState('');

  const updateValue = (v) => {
    setThisValue(v);
    if (onChange) onChange(v);
  };

  useEffect(() => {
    console.log(file);
    if (file) {
      const reader = new FileReader();
      reader.onload = (e) => {
        setPreviewVideoSrc(URL.createObjectURL(file));
      };
      reader.readAsDataURL(file);
    }
  }, []);

  useEffect(() => {}, [previewVideoSrc]);

  const calcFram = (e) => {
    //由于无法获取帧率，帧数等，我们暂且认为视频都是30帧
    updateValue({ fram: _.round(e.target.currentTime * 30) });
  };

  return (
    <div data-vjs-player>
      <video
        src={previewVideoSrc}
        muted
        controls
        height={350}
        width={400}
        disablePictureInPicture
        onCanPlay={calcFram}
        onPause={calcFram}
      />
    </div>
  );
}
