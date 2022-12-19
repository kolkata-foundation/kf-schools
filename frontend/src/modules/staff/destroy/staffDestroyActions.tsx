import listActions from 'src/modules/staff/list/staffListActions';
import StaffService from 'src/modules/staff/staffService';
import Errors from 'src/modules/shared/error/errors';
import { i18n } from 'src/i18n';
import { getHistory } from 'src/modules/store';
import Message from 'src/view/shared/message';

const prefix = 'STAFF_DESTROY';

const staffDestroyActions = {
  DESTROY_STARTED: `${prefix}_DESTROY_STARTED`,
  DESTROY_SUCCESS: `${prefix}_DESTROY_SUCCESS`,
  DESTROY_ERROR: `${prefix}_DESTROY_ERROR`,

  DESTROY_ALL_STARTED: `${prefix}_DESTROY_ALL_STARTED`,
  DESTROY_ALL_SUCCESS: `${prefix}_DESTROY_ALL_SUCCESS`,
  DESTROY_ALL_ERROR: `${prefix}_DESTROY_ALL_ERROR`,

  doDestroy: (id) => async (dispatch) => {
    try {
      dispatch({
        type: staffDestroyActions.DESTROY_STARTED,
      });

      await StaffService.destroyAll([id]);

      dispatch({
        type: staffDestroyActions.DESTROY_SUCCESS,
      });

      Message.success(
        i18n('entities.staff.destroy.success'),
      );

      dispatch(listActions.doFetchCurrentFilter());

      getHistory().push('/staff');
    } catch (error) {
      Errors.handle(error);

      dispatch(listActions.doFetchCurrentFilter());

      dispatch({
        type: staffDestroyActions.DESTROY_ERROR,
      });
    }
  },

  doDestroyAll: (ids) => async (dispatch) => {
    try {
      dispatch({
        type: staffDestroyActions.DESTROY_ALL_STARTED,
      });

      await StaffService.destroyAll(ids);

      dispatch({
        type: staffDestroyActions.DESTROY_ALL_SUCCESS,
      });

      if (listActions) {
        dispatch(listActions.doClearAllSelected());
        dispatch(listActions.doFetchCurrentFilter());
      }

      Message.success(
        i18n('entities.staff.destroyAll.success'),
      );

      getHistory().push('/staff');
    } catch (error) {
      Errors.handle(error);

      dispatch(listActions.doFetchCurrentFilter());

      dispatch({
        type: staffDestroyActions.DESTROY_ALL_ERROR,
      });
    }
  },
};

export default staffDestroyActions;
