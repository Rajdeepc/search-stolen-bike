import { GET_CYCLE_LIST_SUCCESS,GET_CYCLE_LIST_FAILURE,SET_LOADING } from '../types/search.action.types';

const INITIAL_STATE = {
    getList:[],
    getListSuccess: false,
    getListError:{}
  };

  const SearchReducer = (state = INITIAL_STATE, action) => {
    switch (action.type) {
      case SET_LOADING:
      return {
          ...state,
          loading: payload.data,
      }
      case GET_CYCLE_LIST_SUCCESS:
      return {
          ...state,
          getListSuccess:true,
          getList: action.payload
      }
      case GET_CYCLE_LIST_FAILURE:
      return {
          ...state,
          getListSuccess:false,
          getListError: action.payload
      }
      default:
        return state;
    }
  };
  export default SearchReducer;