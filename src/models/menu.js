import { listCategories } from '@/services/menu/menu';

export default {
  namespace: 'menu',
  state: {
    menuOption: []
  },
  effects: {
    *change({ config }, { put }) {
      yield put({
        type: 'save',
        config
      });
    },
    *refreshCategory({ config }, { put }) {
      const { data, code } = yield listCategories({ config });
      if (code !== 0) {
        return;
      }
      yield put({
        type: 'save',
        config: {
          menuOption: data
        }
      })

    }
  },
  reducers: {
    save(state, { config }) {
      return { ...state, ...config };
    },
  }
};