
import { createSelector } from 'reselect';

const selectDirectory = state => state.directory;

export const selecDirectorySections = createSelector(
	[selectDirectory],
	directory => directory.sections
);