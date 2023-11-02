import { VideoPlayer } from '@videojs-player/react';
import { useEffect, useState } from 'react';
import 'video.js/dist/video-js.css';
import style from './style.less';
export default function IVideo({ url, ...props }) {
  const [src, setSrc] = useState(url);
  useEffect(() => {
    setSrc(url);
  }, [url]);

  return (
    <div data-vjs-player {...props} style={{ flex: 1 }}>
      <VideoPlayer
        sources={[{ src: url }]}
        controls
        autoplay
        disablePictureInPicture={true}
        className={style.videoPlayer}
        height={window.innerHeight * 0.8}
      ></VideoPlayer>
    </div>
  );
}
