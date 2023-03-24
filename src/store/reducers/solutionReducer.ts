const initialState: SolutionState = {
  solution: '',
  isTestsStarted: false,
  testSuites: null,
  success: null,
};
export interface SolutionState {
  solution: string;
  isTestsStarted: boolean;
  testSuites: 'all' | 'fixed' | null;
  success: 'all' | 'fixed' | null;
}

export enum SolutionActionsTypes {
  UPDATE_SOLUTION = 'UPDATE_SOLUTION',
  START_TESTS = 'START_TESTS',
  END_TESTS = 'END_TESTS',
  SET_SUCCESS = 'SET_SUCCESS',
}

interface UpdateSolutionAction {
  type: SolutionActionsTypes.UPDATE_SOLUTION;
  solution: string;
}
interface StartTests {
  type: SolutionActionsTypes.START_TESTS;
  testSuites: 'all' | 'fixed';
}
interface EndTests {
  type: SolutionActionsTypes.END_TESTS;
}
interface SetSuccess {
  type: SolutionActionsTypes.SET_SUCCESS;
  success: 'all' | 'fixed' | null;
}

export type SolutionAction = UpdateSolutionAction | StartTests | EndTests | SetSuccess;

export const solutionReducer = (state = initialState, action: SolutionAction): SolutionState => {
  switch (action.type) {
    case SolutionActionsTypes.UPDATE_SOLUTION:
      return { ...state, solution: action.solution };
    case SolutionActionsTypes.START_TESTS:
      return { ...state, isTestsStarted: true, success: null, testSuites: action.testSuites };
    case SolutionActionsTypes.END_TESTS:
      return { ...state, isTestsStarted: false, testSuites: null };
    case SolutionActionsTypes.SET_SUCCESS:
      return { ...state, success: action.success };
    default:
      return state;
  }
};
