import SchoolService from 'src/modules/school/schoolService';
import Errors from 'src/modules/shared/error/errors';
import Message from 'src/view/shared/message';
import { getHistory } from 'src/modules/store';
import { i18n } from 'src/i18n';

const prefix = 'SCHOOL_FORM';

const schoolFormActions = {
  INIT_STARTED: `${prefix}_INIT_STARTED`,
  INIT_SUCCESS: `${prefix}_INIT_SUCCESS`,
  INIT_ERROR: `${prefix}_INIT_ERROR`,

  CREATE_STARTED: `${prefix}_CREATE_STARTED`,
  CREATE_SUCCESS: `${prefix}_CREATE_SUCCESS`,
  CREATE_ERROR: `${prefix}_CREATE_ERROR`,

  UPDATE_STARTED: `${prefix}_UPDATE_STARTED`,
  UPDATE_SUCCESS: `${prefix}_UPDATE_SUCCESS`,
  UPDATE_ERROR: `${prefix}_UPDATE_ERROR`,

  doInit: (id) => async (dispatch) => {
    try {
      dispatch({
        type: schoolFormActions.INIT_STARTED,
      });

      let record = {};

      const isEdit = Boolean(id);

      if (isEdit) {
        record = await SchoolService.find(id);
      }

      dispatch({
        type: schoolFormActions.INIT_SUCCESS,
        payload: record,
      });
    } catch (error) {
      Errors.handle(error);

      dispatch({
        type: schoolFormActions.INIT_ERROR,
      });

      getHistory().push('/school');
    }
  },

  doCreate: (values) => async (dispatch) => {
    try {
      dispatch({
        type: schoolFormActions.CREATE_STARTED,
      });

      await SchoolService.create(values);

      dispatch({
        type: schoolFormActions.CREATE_SUCCESS,
      });

      Message.success(
        i18n('entities.school.create.success'),
      );

      getHistory().push('/school');
    } catch (error) {
      Errors.handle(error);

      dispatch({
        type: schoolFormActions.CREATE_ERROR,
      });
    }
  },

  doUpdate: (id, values) => async (dispatch, getState) => {
    try {
      dispatch({
        type: schoolFormActions.UPDATE_STARTED,
      });

      await SchoolService.update(id, values);

      dispatch({
        type: schoolFormActions.UPDATE_SUCCESS,
      });

      Message.success(
        i18n('entities.school.update.success'),
      );

      getHistory().push('/school');
    } catch (error) {
      Errors.handle(error);

      dispatch({
        type: schoolFormActions.UPDATE_ERROR,
      });
    }
  },
};

export default schoolFormActions;
