
import axios from 'axios';
import { API_ENDPOINTS, BASE_URL } from "../utils/index";


const incidentApi = BASE_URL + API_ENDPOINTS.Incidents;
const getMarkersApi = BASE_URL + API_ENDPOINTS.Locations;


const callIncidents = async (searchValue, fromDate, toDate, proximity, proximityRadius) => {
    let responseFromIncidentApi = [];
    let responseFromLocationApi = [];
    const params = {
                query: searchValue,
                incident_type: "theft",
                proximity: proximity,
                proximity_square: proximityRadius,
                ...(fromDate ? { occurred_before: fromDate } : {}),
                ...(toDate ? { occurred_before: toDate } : {})
       }

    let getIncidentApi = axios.get(incidentApi,params);
    let getMarkerApi = axios.get(getMarkersApi,params);

    let fromIncidentApi = await getIncidentApi;
    let fromLocationApi = await getMarkerApi;

    responseFromIncidentApi  = fromIncidentApi.data.incidents;
    responseFromLocationApi  = fromLocationApi.data.features;

    let finaArrayWithMarkers = responseFromIncidentApi.map(a => Object.assign(a, responseFromLocationApi.find(b => b.properties.id == a.id)));
     return finaArrayWithMarkers;
}


// const getItemsWithMarkers = (compareArray,itemId) => {
//     let arrayToMap = [];
//     let promiseArr = [];
//     compareArray.map((item) => {
//         promiseArr.push(callIncidents(item.id))
//     });
//     Promise.all(promiseArr).then((data) => {
//         arrayToMap = data;
//     });
// }


export { callIncidents };