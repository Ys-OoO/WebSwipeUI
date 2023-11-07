import VideoModal from '@/pages/VideoModal';
import VideoCard from '@/pages/VideoWaterfall/VideoCard/VideoCard';
import { getInteractionVideos, getUploadVideos } from '@/services/video/video';
import _ from 'lodash';
import { useEffect, useState } from "react";
import { useSelector } from 'umi';
import 'wc-waterfall';

export default function OwnVideoList({ currentTab }) {
  const { currentVideo } = useSelector(state => state.videoWaterfall)
  const [videoList, setVideoList] = useState([])

  useEffect(() => {
    async function fetchVideoList() {
      if (currentTab === 'published') {
        const res = await getUploadVideos();
        if (res?.code !== 0) {
          return []
        }
        setVideoList(res?.data || [])
      }
      if (currentTab === 'like') {
        const res = await getInteractionVideos({ interactionType: "thumb_up" });
        if (res?.code !== 0) {
          return []
        }
        setVideoList(res?.data || [])
      }
      if (currentTab === 'collected') {
        const res = await getInteractionVideos({ interactionType: "collect" });
        if (res?.code !== 0) {
          return []
        }
        setVideoList(res?.data || [])
      }
    }
    fetchVideoList();
  }, [])

  return (
    <div style={{ overflow: 'scroll', maxHeight: '65vh' }}>
      <wc-waterfall gap={10} cols={6}>
        {_.map(videoList, (video, index) => {
          return (
            <VideoCard
              videoInfo={video}
              key={index}
              style={{ maxHeight: 400 }}
            />
          );
        })}
      </wc-waterfall>
      {_.isEmpty(currentVideo) ? <></> : <VideoModal />}
    </div>
  )
}
