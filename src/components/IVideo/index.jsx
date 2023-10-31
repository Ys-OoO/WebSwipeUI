// import Player, { useMessageContextRef } from 'griffith';
// import { useEffect } from 'react';

export default function IVideo({ url, exposeRef = () => {}, ...props }) {
  // const messageContextRef = useMessageContextRef();

  // useEffect(() => {
  //   exposeRef(messageContextRef);
  // }, [messageContextRef]);

  return (
    <div {...props}>
      {/* <Player
        messageContextRef={messageContextRef}
        shouldObserveResize={true}
        initialObjectFit={'contain'}
        locale="zh-Hans"
        autoplay={true}
        disablePictureInPicture={true}
        hiddenQualityMenu={true}
        sources={{
          hd: {
            play_url: url,
          },
        }}
      /> */}
    </div>
  );
}
