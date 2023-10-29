import VideoModal from '@/pages/VideoModal';
import _ from 'lodash';
import { useEffect, useRef, useState } from 'react';
import { useParams, useSelector } from 'umi';
import 'wc-waterfall';
import VideoCard from './VideoCard/VideoCard';

const cardWidth = 260;
const gap = 20;

export default function VideoWaterfall() {
  //TODO 获取videoList
  const params = useParams();
  const { videoList } = useSelector((state) => state.videoWaterfall);
  const containerRef = useRef();
  const [column, setColumn] = useState(0);

  useEffect(() => {
    if (containerRef.current) {
      setColumn(_.floor(containerRef.current.offsetWidth / (cardWidth + gap)));
    }

    const getCurrentWidth = () => {
      setColumn(_.floor(containerRef.current.offsetWidth / (cardWidth + gap)));
    };

    window.addEventListener('resize', getCurrentWidth);

    return () => {
      window.removeEventListener('resize', getCurrentWidth);
    };
  }, []);

  return (
    <>
      <wc-waterfall gap={gap} cols={column} ref={containerRef}>
        {_.map(videoList, (video, index) => {
          return <VideoCard videoInfo={video} key={index} style={{ height: video.height }} />;
        })}
      </wc-waterfall>
      <VideoModal />
    </>
  );
}
