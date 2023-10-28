export default {
  namespace: 'menu',
  state: {
    menuOption: [{
      key: 'popular',
      text: '热门',
      divider: true
    },]
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