import { API_ENDPOINTS } from '../utils/httpservice';
import { GET_CYCLE_LIST_SUCCESS,GET_CYCLE_LIST_FAILURE,SET_LOADING } from '../types/search.action.types';
import axios from 'axios';


const getCycleTheftIncidents = (pageNo,query,fromDate,toDate) => dispatch => {
  debugger;
  
  const per_page_item = 10;
  const baseEndPoint = API_ENDPOINTS.Incidents;
  const builtURL = baseEndPoint + `?page=${pageNo}&per_page=${per_page_item}&query=${query}&occurred_before=${fromDate}&occurred_after=${toDate}`;
  dispatch({
    type: SET_LOADING,
    payload: {
      loading: true
    }
  });
    axios.get(builtURL)
      .then(res => {
        if(res.data){
          dispatch({
            type: GET_CYCLE_LIST_FAILURE,
            payload : data.errors
          })
        } else {
          dispatch({
            type: SET_LOADING,
            loading: false
        });
        dispatch({
          type: GET_CYCLE_LIST_SUCCESS,
          payload: {
            incidentList: data.incidents
          }
        });
      }
      });
};


export {getCycleTheftIncidents}