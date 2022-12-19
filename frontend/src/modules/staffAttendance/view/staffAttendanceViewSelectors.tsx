import { createSelector } from 'reselect';

const selectRaw = (state) => state.staffAttendance.view;

const selectRecord = createSelector(
  [selectRaw],
  (raw) => raw.record,
);

const selectLoading = createSelector([selectRaw], (raw) =>
  Boolean(raw.loading),
);

const staffAttendanceViewSelectors = {
  selectLoading,
  selectRecord,
  selectRaw,
};

export default staffAttendanceViewSelectors;
