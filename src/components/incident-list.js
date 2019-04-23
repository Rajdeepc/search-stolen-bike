import React, { useState, forwardRef, useEffect } from "react";
import RenderItemDescription from "./incident-item-desc";
import Pagination from 'react-hooks-paginator';

import { Link } from 'react-router-dom';

const IncidentList = forwardRef((props, ref) => {
  const pageLimit = 10;
 
  const [offset, setOffset] = useState(0);
  const [currentPage, setCurrentPage] = useState(1);
  const [currentData, setCurrentData] = useState([]);


  useEffect(() => {
    
   // setData(props.theftList);
    setCurrentData(props.theftList ? props.theftList.slice(offset, offset + pageLimit) : null);
  }, [offset, props.theftList]);
 





  return (
    <div>
      {
        props.errObj && <div>Something Went Wrong</div>
      }
      {
        currentData.length ? <div className="text-right">Total: {props.theftList.length}</div> : null
      }
      {
        props.theftList.length <=0 ?  <div>No Records</div> : null
      }
      
    <ul>
        { currentData ? currentData.map(item => (
          <div className="list-item" key={item.id}>
          <div className="columns">
            <div className="column is-one-quarter">
              <div className="item-img">
              {  item.media.image_url_thumb ? 
                <img
                  src={item.media.image_url_thumb}
                  alt=""
                /> : 
                <img
                  src='/assets/noimageavailable.png'
                  alt=""
                /> 
              }
              </div>
            </div>

            <div className="column">
              <div className="list-item-desc">
              <div className="list-item">
                  <Link to={{
                    pathname:`/bikes/${item.id}`,
                    myCustomProps:{item}
                  }}
                  >
                    {item.title ? item.title : "No Title"}
                  </Link>
                <p className="list-desc">{item.description ? item.description : ''}</p>
                <p className="list-datetheft">
                 <b>Stolen </b> {new Date(item.occurred_at).toLocaleString()}
                </p>
                <p className="list-location"> <b>Location </b>{item.address}</p>
                </div>
              </div>
            </div>
          </div>
        </div>
        )) : <div> No data found</div>}
      </ul>
      <Pagination
        totalRecords={ props.theftList ? props.theftList.length : null}
        pageLimit={10}
        pageNeighbours={1}
        setOffset={setOffset}
        currentPage={currentPage}
        setCurrentPage={setCurrentPage}
        pagePrevText="Next"
        pageNextText="Prev"
      />
    </div>
  );
});

export default IncidentList;