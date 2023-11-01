import IVideo from '@/components/IVideo';
import { FlexColumn, FlexRow } from '@/components/StyledComponents';
import dayjs from 'dayjs';
import { MDBIcon, MDBModal, MDBModalBody, MDBModalContent, MDBModalDialog } from 'mdb-react-ui-kit';
import { useEffect, useRef } from 'react';
import { useDispatch, useSelector } from 'umi';
import style from './style.less';

export default function VideoModal() {
  const dispatch = useDispatch();
  const { visible, currentVideo, currentVideoIndex, videoList } = useSelector(
    (state) => state.videoWaterfall,
  );
  const { videoUrl, description, createAt, createUser } = currentVideo;
  const modalRef = useRef();
  const time = dayjs(createAt).format('YYYY-MM-DD');
  const onCancel = () => {
    dispatch({
      type: 'videoWaterfall/change',
      config: { visible: false, currentVideo: {}, currentVideoIndex: -1 },
    });
  };

  useEffect(() => {
    modalRef?.current && modalRef.current.focus();
  }, []);

  const onKeyDown = (e) => {
    e.preventDefault();
    if (_.isEmpty(currentVideo)) {
      return;
    }
    if (e.code === 'ArrowDown') {
      let index = currentVideoIndex;
      if (index < 0) {
        return;
      }
      if (index === videoList.length - 1) {
        index = -1;
      }
      index += 1;
      dispatch({
        type: 'videoWaterfall/change',
        config: {
          currentVideo: videoList[index],
          currentVideoIndex: index,
        },
      });
    } else if (e.code === 'ArrowUp') {
      let index = currentVideoIndex;
      if (index === 0) {
        index = videoList.length;
      }
      dispatch({
        type: 'videoWaterfall/change',
        config: {
          currentVideo: videoList[index - 1],
          currentVideoIndex: index - 1,
        },
      });
    }
  };

  return (
    <MDBModal show={visible} tabIndex="-1" onKeyDown={onKeyDown} modalRef={modalRef}>
      <MDBModalDialog size="fullscreen">
        <MDBModalContent className={style.modalContent}>
          <MDBModalBody>
            <MDBIcon far icon="times-circle" className={style.closeIcon} onClick={onCancel} />
            <FlexColumn>
              <FlexRow>
                <IVideo url={videoUrl} />
                {/* TODO 点赞 关注... */}
                <div className={style.actions}></div>
              </FlexRow>
              <div className={style.infoBox}>
                <div className={style.otherInfo}>
                  @ {createUser || '匿名'} · {time}
                </div>
                <div className={style.desc}>{description || '该视频作者未进行描述喔~'}</div>
              </div>
            </FlexColumn>
          </MDBModalBody>
        </MDBModalContent>
      </MDBModalDialog>
    </MDBModal>
  );
}
