
import axios from 'axios';
import { API_ENDPOINTS, BASE_URL } from "../utils/index";


const incidentApi = BASE_URL + API_ENDPOINTS.Incidents;


const callIncidents = (searchValue, fromDate, toDate, proximity, proximityRadius) => {

    return axios.get(incidentApi, {
        params: {
            query: searchValue,
            incident_type: "theft",
            proximity: proximity,
            proximity_square: proximityRadius,
            ...(fromDate ? { occurred_before: fromDate } : {}),
            ...(toDate ? { occurred_before: toDate } : {})
        }
    })
        .catch(error => { return error; })
        .then(response => response.data)
};


export { callIncidents };