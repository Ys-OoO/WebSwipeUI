import { getCurrentUser, logout } from "@/services/user/user";

export default {
  namespace: 'user',
  state: {
    registerVisible: false,
    loginVisible: false,
    currentUser: {}
  },
  effects: {
    *change({ config }, { put }) {
      yield put({
        type: 'save',
        config
      });
    },
    *refreshCurrentUser({ _ }, { put }) {
      const res = yield getCurrentUser();
      if (res.code) {
        return;
      }
      yield put({
        type: "save",
        config: {
          currentUser: res.data
        }
      })
    },
    *logout({ _ }, { put }) {
      const res = yield logout();
      if (res.code) {
        return;
      }
      console.log(res);

      yield put({
        type: "save",
        config: {
          currentUser: {}
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