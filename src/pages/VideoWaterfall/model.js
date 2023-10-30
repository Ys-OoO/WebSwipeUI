import { listVideo } from '@/services/video/video';
export default {
  namespace: 'videoWaterfall',
  state: {
    videoList: [],
    visible: false,
    currentVideo: {},
    currentVideoIndex: -1,
  },
  effects: {
    *change({ config }, { put }) {
      yield put({
        type: 'save',
        config
      });
    },
    *refreshVideoList({ config }, { put }) {
      const category = config;
      const { data } = yield listVideo({ tag: category || null });
      yield put({
        type: 'save',
        config: { videoList: data }
      });
    }
  },
  reducers: {
    save(state, { config }) {
      return { ...state, ...config };
    },
  }
};      