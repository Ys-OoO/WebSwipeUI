import dayjs from 'dayjs';
import 'dayjs/locale/zh-cn';
import { useDispatch } from 'umi';
import style from './style.less';

const relativeTime = require('dayjs/plugin/relativeTime');
const updateLocale = require('dayjs/plugin/updateLocale');
dayjs.extend(relativeTime);
dayjs.extend(updateLocale);

dayjs.updateLocale('zh-cn', {
  relativeTime: {
    future: '%s 后',
    past: '%s 前',
    s: '几秒',
    m: '一分钟',
    mm: '%d 分钟',
    h: '1小时',
    hh: '%d 小时',
    d: '1天',
    dd: '%d 天',
    M: '一个月',
    MM: '%d 个月',
    y: '一年',
    yy: '%d 年',
  },
});

export default function VideoCard({ videoInfo, ...props }) {
  const { src, desc, createUser, createTime } = videoInfo;
  const dispatch = useDispatch();
  const duration = !!createTime ? dayjs(createTime).fromNow() : '最近';
  const userName = createUser ? createUser?.name : '匿名';
  const displayVideo = () => {
    dispatch({
      type: 'videoWaterfall/change',
      config: { visible: true, currentVideo: videoInfo },
    });
  };
  return (
    <div {...props} className={style.cardBox} onClick={displayVideo}>
      <div className={style.cardCover}>
        <img src={src} alt={desc} />
      </div>
      <div className={style.infoBox}>
        <div className={style.desc}>{desc || '该视频作者未进行描述喔~'}</div>
        <div className={style.otherInfo}>
          @ {userName} · {duration}
        </div>
      </div>
    </div>
  );
}
