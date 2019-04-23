import React, { useState, useEffect, useRef } from "react";
import IncidentList  from "./incident-list";
import { callIncidents } from "./api";


const SearchList = () => {
  const [searchValue, setsearchValue] = useState("");
  const [incidentList, setincidentList] = useState([]);
  const [errMsg, seterrMsg] = useState('');
  const [fromDate, setfromDate] = useState("");
  const [toDate, settoDate] = useState("");
  const [proximity, setproximity] = useState("Berlin");
  const [proximityRadius, setproximityRadius] = useState("100");



  const handleChangeSearch = event => {
    setsearchValue(event.target.value);
  };

  const handleFromDate = event => {
    setfromDate(event.target.value);
  };

  const handleToDate = event => {
    settoDate(event.target.value);
  };

  const handleProximityRadiusSearch = event => {
    setproximityRadius(event.target.value);
  };

  const handleProximitySearch = event => {
    setproximity(event.target.value);
  };

  const getTimefromDate = dateInput => {
    let d = new Date(dateInput);
    return d.getTime();
  };

  const getIncidentData = () => {
    let fromDateValueFormatted = getTimefromDate(fromDate);
    let toDateValueFormatted = getTimefromDate(toDate);
    callIncidents(searchValue, fromDateValueFormatted, toDateValueFormatted, proximity, proximityRadius)
    .then(data => {
      console.log("data from both api" + JSON.stringify(data))
      setincidentList(data);
    })
    .catch(err => {
      seterrMsg(errMsg);
    });

  }

  useEffect(() => {
    getIncidentData();
  },[searchValue, fromDate, toDate, proximity, proximityRadius])

  const childRef = useRef();

  return (
    <div>
      <div className="SearchFormWrapper">
        <div className="columns">
          <div className="column">
            <div>
              <input
                className="input"
                type="text"
                placeholder="Search case descriptions"
                onChange={handleChangeSearch}
                value={searchValue}
              />
            </div>

            <div className="columns">
              <div className="column is-3">
                
                  
                        <input
                          className="input"
                          type="date"
                          placeholder="from"
                          onChange={handleFromDate}
                          value={fromDate}
                        />
                      
              </div>
              <div className="column is-3">
                
                  
                        <input
                          className="input"
                          type="date"
                          placeholder="to"
                          onChange={handleToDate}
                          value={toDate}
                        />
                      
              </div>
              <div className="column is-3">
                
                        <input
                          className="input"
                          type="text"
                          onChange={handleProximityRadiusSearch}
                          value={proximityRadius}
                        />
                      
              </div>
              <div className="column is-3">
                
                        <input
                          className="input"
                          type="text"
                          onChange={handleProximitySearch}
                          value={proximity}
                        />
                      
              </div>
            </div>
          </div>
          <div className="column">
            <div className="control">
              <button className="button is-primary" onClick={getIncidentData}>
                Submit
              </button>
            </div>
          </div>
        </div>
        {/* <RenderGridItem ref={childRef} /> */}
      </div>

        <div className="renderList">
        <IncidentList theftList={incidentList} errObj={errMsg} ref={childRef} />
      </div>
    </div>
  );
};

export default SearchList;
