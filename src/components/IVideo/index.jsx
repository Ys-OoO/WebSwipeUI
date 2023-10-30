import Player, { useMessageContextRef } from 'griffith';
import { useEffect } from 'react';
import style from './style.less';

export default function IVideo({ url, exposeRef = () => {}, ...props }) {
  const messageContextRef = useMessageContextRef();

  useEffect(() => {
    exposeRef(messageContextRef);
  }, [messageContextRef]);

  return (
    <div className={style.videoPlayer} {...props}>
      <Player
        messageContextRef={messageContextRef}
        shouldObserveResize={true}
        initialObjectFit={'contain'}
        className={style.player}
        locale="zh-Hans"
        // autoplay={true}
        disablePictureInPicture={true}
        hiddenQualityMenu={true}
        sources={{
          hd: {
            play_url: url,
          },
        }}
      />
    </div>
  );
}
