import { useDispatch } from 'react-redux';
import { bindActionCreators } from 'redux';
import ActionCreators from '../store/ActionCreators';

export default function useActions() {
  const dispatch = useDispatch();
  return bindActionCreators(ActionCreators, dispatch);
}
