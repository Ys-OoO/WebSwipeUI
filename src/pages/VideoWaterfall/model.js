export default {
  namespace: 'videoWaterfall',
  state: {
    videoList: [
      { key: 1, height: 200 },
      { key: 2, height: 130 },
      { key: 3, height: 50 },
      { key: 4, height: 80 },
      { key: 5, height: 120 },
      { key: 6, height: 200 },
      { key: 7, height: 200 },
      { key: 8, height: 200 },
      { key: 9, height: 300 },
      { key: 10, height: 100 },
      { key: 11, height: 220 },
      { key: 12, height: 180 },
      { key: 13, height: 20 },
      { key: 14, height: 40 },
      { key: 15, height: 90 },
      { key: 16, height: 80 },

    ]
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