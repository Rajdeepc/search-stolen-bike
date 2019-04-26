import React, { useState, forwardRef,useRef, useEffect } from "react";
import { getBikeInfo } from "./api";
import Gmap from './renderMap';



const RenderItemDescription = props => {
  let ItemObj = props.location.myCustomProps
    ? props.location.myCustomProps.item
    : {};
  console.log("Item obj" + JSON.stringify(ItemObj));

  const [bikeInfo, setbikeInfo] = useState({});

  useEffect(() => {
    if (ItemObj.id) {
      getBikeInfo(ItemObj.id).then(response => {
        console.log("bike info obj" + JSON.stringify(response));
        setbikeInfo(response);
      });
    }
  }, [ItemObj.id]);

  return (
    <div className="container">
      <div className="ItemInfo">
      <h4 className="stolentitle">
          STOLEN
        </h4>
        <h2 class="title is-2">
          {ItemObj.title ? ItemObj.title : "No Title"}
        </h2>
      </div>
      <div className="bikeInfoContainer">
        <span>
          <b>Stolen: </b>
          {bikeInfo.stolen_record
            ? new Date(bikeInfo.stolen_record.date_stolen).toLocaleDateString()
            : "Unknown"}
        </span>
        <b> At:</b>{" "}
        <span>
          {bikeInfo.stolen_record ? bikeInfo.stolen_record.location : "Unknown"}
        </span>
        <div className="bikeImg">
          <img src={ItemObj.media ? ItemObj.media.image_url : null} alt="" />
        </div>
        <p>{bikeInfo.description}</p>
        <div className="columns">
          <div className="column is-half">
            <p>
              <b>Serial:</b> {bikeInfo.serial ? bikeInfo.serial : "Unknown"}
            </p>
            <p>
              <b>Manufacturer: </b>
              {bikeInfo.manufacturer_name
                ? bikeInfo.manufacturer_name
                : "Unknown"}
            </p>
            <p>
              <b>Model:</b>{" "}
              {bikeInfo.frame_model ? bikeInfo.frame_model : "Unknown"}
            </p>
            <p>
              <b>Primary colors:</b>{" "}
              {bikeInfo.frame_colors ? bikeInfo.frame_colors : "Unknown"}
            </p>
            <p>
              <b>Frame Material:</b>{" "}
              {bikeInfo.frame_material ? bikeInfo.frame_material : "Unknown"}
            </p>
          </div>
          <div className="column is-half">
            <p>
              <b>Other serial/registration/sticker:</b>{" "}
              {bikeInfo.serial ? bikeInfo.serial : "Unknown"}
            </p>
            <p>
              <b>Name:</b> {bikeInfo.name ? bikeInfo.name : "Unknown"}
            </p>
            <p>
              <b>Year:</b> {bikeInfo.year ? bikeInfo.year : "Unknown"}
            </p>
            <p>
              <b>Frame size:</b>{" "}
              {bikeInfo.frame_size ? bikeInfo.frame_size : "Unknown"}
            </p>
          </div>
        </div>
      </div>
   
      <div className="theftInformation">
      <h3>THEFT DETAILS</h3>
            <div className="columns">
                <div className="column is-4">
                <Gmap lat={bikeInfo.stolen_record ? bikeInfo.stolen_record.latitude : 0} lng={bikeInfo.stolen_record ? bikeInfo.stolen_record.longitude : 0}/>
                </div>
                <div className="column is-8">
                    <label><b>Location</b></label>
                    <p>{ItemObj.address}</p>
                    <label><b>Date Stolen</b></label>
                    <p>{new Date(ItemObj.properties ? ItemObj.properties.occurred_at : null).toLocaleDateString()}</p>
                </div>
            </div>
      </div>
    </div>
  );
};

export default RenderItemDescription;
