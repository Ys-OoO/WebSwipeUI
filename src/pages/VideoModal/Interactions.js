import { FlexColumn } from "@/components/StyledComponents";
import { act, cancel } from '@/services/user/user';
import { useState } from "react";
import { useDispatch, useSelector } from "umi";

export default function Interactions({ isLike, isCollect, ...props }) {
  const [_isLike, setIsLike] = useState(isLike);
  const [_isCollect, setIsCollect] = useState(isLike);
  const { currentUser } = useSelector(state => state.user);
  const dispatch = useDispatch();
  console.log(currentUser);

  const onLike = async () => {
    if (!currentUser) {
      dispatch({
        type: 'user/save', config: {
          loginVisible: true
        }
      })
      return;
    }
    if (_isLike) {
      await cancel({ interactionType: "thumb_up" })
    } else {
      await act({ interactionType: "thumb_up" })
    }
    setIsLike(!_isLike)
  }

  const onCollect = async () => {
    if (!currentUser) {
      dispatch({
        type: 'user/save', config: {
          loginVisible: true
        }
      })
      return;
    }
    if (_isCollect) {
      await cancel({ interactionType: "collect" })
    } else {
      await act({ interactionType: "collect" })
    }
    setIsCollect(!_isCollect)
  }
  return (
    <FlexColumn style={{ fontSize: 36, marginLeft: 8 }}>
      <div onClick={onLike} style={{ cursor: 'pointer' }}>
        {
          !_isLike ? <i class="far fa-heart" style={{ color: 'white' }}></i> :
            <i class="fas fa-heart" style={{ color: 'red' }}></i>
        }
      </div>
      <div onClick={onCollect} style={{ cursor: 'pointer' }}>
        {
          !_isCollect ? <i class="far fa-star" style={{ color: 'white' }}></i> :
            <i class="fas fa-star" style={{ color: '#ffd85d' }}></i>
        }
      </div>
    </FlexColumn>
  )
}
