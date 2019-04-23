
import axios from 'axios';
import { API_ENDPOINTS, BASE_URL } from "../utils/index";


const incidentApi = BASE_URL + API_ENDPOINTS.Incidents;
const getMarkersApi = BASE_URL + API_ENDPOINTS.Locations;


const callIncidents = (searchValue, fromDate, toDate, proximity, proximityRadius) => {
    // const getIncidentData = axios.get(incidentApi, {
    //     params: {
    //         query: searchValue,
    //         incident_type: "theft",
    //         proximity: proximity,
    //         proximity_square: proximityRadius,
    //         ...(fromDate ? { occurred_before: fromDate } : {}),
    //         ...(toDate ? { occurred_before: toDate } : {})
    //             }
    //         })
    //     .catch(error => { return error; })
    //     .then(response => response.data);
    // return getIncidentData;
    let response1 = [];
    let response2 = [];
    const params = {
                query: searchValue,
                incident_type: "theft",
                proximity: proximity,
                proximity_square: proximityRadius,
                ...(fromDate ? { occurred_before: fromDate } : {}),
                ...(toDate ? { occurred_before: toDate } : {})
       }
    Promise.all([
        axios.get(incidentApi,params),
        axios.get(getMarkersApi,params)
    ]).then(allResponses => {
            response1 = allResponses[0].data.incidents;
            response2 = allResponses[1].data.features;
            let expectedArray = response1.map(a => Object.assign(a, response2.find(b => b.properties.id == a.id)));
            console.log(expectedArray);
            return expectedArray;
    });
    
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