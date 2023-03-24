import { ActionCreator } from 'redux';
import { SolutionAction, SolutionActionsTypes } from '../reducers/solutionReducer';

export const updateSolution: ActionCreator<SolutionAction> = (solution: string) => ({
  type: SolutionActionsTypes.UPDATE_SOLUTION,
  solution,
});

export const startTesting: ActionCreator<SolutionAction> = (testSuites: 'all' | 'fixed') => ({
  type: SolutionActionsTypes.START_TESTS,
  testSuites,
});

export const endTesting: ActionCreator<SolutionAction> = () => ({
  type: SolutionActionsTypes.END_TESTS,
});

export const setSuccess: ActionCreator<SolutionAction> = (value: 'all' | 'fixed' | null) => ({
  type: SolutionActionsTypes.SET_SUCCESS,
  success: value,
});
