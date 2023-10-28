import _ from 'lodash';
import { useEffect, useMemo, useRef, useState } from 'react';
import { useParams, useSelector } from 'umi';
import VideoCard from './VideoCard/VideoCard';
import style from './style.less';

/**
 * 定宽260 间距20 的卡片瀑布流
 *
 */
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

  const positionList = useMemo(() => {
    const currentHeight = new Array(column).fill(0);
    const resPositionList = [];
    for (let index = 0; index < videoList.length; index++) {
      const position = {};
      //第一排元素顺序放置
      if (index <= column) {
        position.top = 0;
        position.left = (cardWidth + gap) * index;
        resPositionList.push(position);
        currentHeight[index] = videoList[index].height;
      } else {
        let minIndex = 0;
        let minHeight = currentHeight[minIndex];
        //获取当前最小高度 以及 索引
        _.forEach(currentHeight, (height, idx) => {
          if (height < minHeight) {
            minHeight = height;
            minIndex = idx;
          }
        });
        position.top = currentHeight[minIndex] + gap;
        position.left = cardWidth * minIndex + gap;
        resPositionList.push(position);
        //更新当前高度
        currentHeight[minIndex] += videoList[index].height + gap;
      }
    }
    return resPositionList;
  }, [column]);

  return (
    <div style={style.warterfallBox} ref={containerRef}>
      {_.map(videoList, (video, index) => {
        return <VideoCard src={video?.src} key={index} position={{}} />;
      })}
    </div>
  );
}
