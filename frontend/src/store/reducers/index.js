import * as actionTypes from "../actions/actions";

const initialState = {
  method: "",
  startTime: 0,
  stopTime: 0,
  reportTime: 0,
  startNumber: 0,
  stopNumber: 0,
  totalStarted: [0],
  totalStopped: [0],
  totalNumberRunning: 0,
  reports: [],
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.GET_REPORT:
      return { ...state, reports: action.payload};
    default:
      return state;
  }
};

export default reducer;
