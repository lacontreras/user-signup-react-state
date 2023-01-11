import { useReducer } from "react";

const reducer = (previousState = {}, updatedState = {}) => {
  return { ...previousState, ...updatedState };
};

const useSetState = (initialState = {}) => {
  const [state, dispatch] = useReducer(reducer, initialState);

  const setState = (update) => dispatch(updatedState);

  return [state, setState];
};

export default useSetState