import * as actionTypes from "./actions";
import axios from "axios";

export const gettingReport = () => (dispatch) => {
  axios
    .get("http://localhost:5000/api/reports")
    .then((res) => {
      console.log(res.data.reports);
      dispatch(getReport(res.data));
    })
    .catch((err) => console.log(err));
};

export const getReport = (data) => {
  return {
    type: actionTypes.GET_REPORT,
    payload: data.reports,
  };
};
