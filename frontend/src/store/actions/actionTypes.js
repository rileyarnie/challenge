import * as actionTypes from "./actions";
import axios from "axios";

export const startingServers = () => (dispatch) => {



    
  return {
    type: actionTypes.START_SERVERS,
  };
};

export const startServers = () => {
  return {
    type: actionTypes.START_SERVERS,
  };
};

export const stopServers = () => {
  return {
    type: actionTypes.REPORT_SERVERS,
  };
};
export const reportServers = () => {
  return {
    type: actionTypes.REPORT_SERVERS,
  };
};
