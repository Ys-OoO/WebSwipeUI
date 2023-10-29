export default {
  namespace: 'videoWaterfall',
  state: {
    videoList: [
      { key: 1, height: 450 },
      { key: 2, height: 300 },
      { key: 3, height: 350 },
      { key: 4, height: 200 },
      { key: 5, height: 450 },
      { key: 6, height: 450 },
    ],
    visible: false,
    currentVideo: {}
  },
  effects: {
    *change({ config }, { put }) {
      yield put({
        type: 'save',
        config
      });
    }

  },
  reducers: {
    save(state, { config }) {
      return { ...state, ...config };
    },
  }
};      