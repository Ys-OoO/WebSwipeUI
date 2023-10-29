import IVideo from '@/components/IVideo';
import { FlexColumn, FlexRow } from '@/components/StyledComponents';
import { MDBModal, MDBModalBody, MDBModalContent, MDBModalDialog } from 'mdb-react-ui-kit';
import { useDispatch, useSelector } from 'umi';
import style from './style.less';

export default function VideoModal() {
  const dispatch = useDispatch();
  const { visible, currentVideo } = useSelector((state) => state.videoWaterfall);

  const onCancel = () => {
    dispatch({
      type: 'videoWaterfall/change',
      config: { visible: false, currentVideo: {} },
    });
  };
  return (
    <MDBModal show={visible} tabIndex="-1">
      <MDBModalDialog size="fullscreen">
        <MDBModalContent className={style.modalContent}>
          <MDBModalBody>
            <FlexColumn>
              <FlexRow>
                <IVideo />
                {/* TODO 点赞 关注... */}
                <div className={style.actions}></div>
              </FlexRow>
              <div className={style.infoBox}>
                <div className={style.otherInfo}>{/* @ {userName} · {duration} */}@ xxx</div>
                <div className={style.desc}>{'该视频作者未进行描述喔~'}</div>
              </div>
            </FlexColumn>
          </MDBModalBody>
        </MDBModalContent>
      </MDBModalDialog>
    </MDBModal>
  );
}
