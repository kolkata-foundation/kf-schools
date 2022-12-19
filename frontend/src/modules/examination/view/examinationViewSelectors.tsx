import { createSelector } from 'reselect';

const selectRaw = (state) => state.examination.view;

const selectRecord = createSelector(
  [selectRaw],
  (raw) => raw.record,
);

const selectLoading = createSelector([selectRaw], (raw) =>
  Boolean(raw.loading),
);

const examinationViewSelectors = {
  selectLoading,
  selectRecord,
  selectRaw,
};

export default examinationViewSelectors;
