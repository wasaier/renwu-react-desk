import { getProject, getProjectCategory, getProjectDetail } from '@/service/project';
import { Effect, Reducer, Subscription } from 'umi';
import { Project } from './types/Project';
import { ProjectCategory } from './types/ProjectCategory';

export interface ExamModelState {
  name: string;
  project: Project|null;
  projectList: Project[];
  categoryList: ProjectCategory[];
}

export interface ExamModelType {
  namespace: 'exam';
  state: ExamModelState;
  effects: {
    queryProject: Effect;
    queryDetail: Effect;
    queryCategory: Effect;
  };
  reducers: {
    save: Reducer<ExamModelState>;
  };
  subscriptions: { setup: Subscription };
}

const ExamModel: ExamModelType = {
  namespace: 'exam',

  state: {
    name: '',
    project: null,
    projectList: [],
    categoryList: []
  },

  effects: {
    *queryProject({payload}, { call, put }) {
      const { categoryId } = payload;
      const res = yield call(getProject, { categoryId });
      const list = res.data.data.list || []
      yield put({
        type: 'save',
        payload: {
          projectList: list,
          project: list.length ? list[0] : null
        }
      })
    },
    *queryDetail({payload}, { call, put }) {
      const { projectId } = payload;
      const res = yield call(getProjectDetail, { projectId });
      const data = res.data.data
      yield put({
        type: 'save',
        payload: {
          project: data
        }
      })
    },
    *queryCategory({payload}, {call, put }) {
      payload;
      const res = yield call(getProjectCategory);
      yield put({
        type: 'save',
        payload: {
          categoryList: res.data.data.list
        }
      })
    }
  },

  reducers: {
    save(state, action) {
      return {
        ...state,
        ...action.payload,
      };
    },
  },

  subscriptions: {
    setup({ dispatch, history }) {
      // return history.listen(({ pathname }) => {
      //   if (pathname === '/exam') {
      //     dispatch({
      //       type: 'queryCategory',
      //     });
      //   }
      // });
    },
  },
};

export default ExamModel;