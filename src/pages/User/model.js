export default {
  namespace: 'user',
  state: {
    registerVisible: false
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