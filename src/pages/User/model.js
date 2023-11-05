export default {
  namespace: 'user',
  state: {
    registerVisible: false,
    loginVisible: false,
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