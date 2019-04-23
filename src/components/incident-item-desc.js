import React, { useState, forwardRef, useEffect } from "react";
import { getBikeInfo } from "./api";



const RenderItemDescription = props => {

  let ItemObj = props.location.myCustomProps ? props.location.myCustomProps.item : {};
  console.log("Item obj" + JSON.stringify(ItemObj));

  const [bikeInfo, setbikeInfo] = useState({})

  useEffect(() => {
    if (ItemObj.id) {
      getBikeInfo(ItemObj.id)
        .then(response => {
          setbikeInfo(response);
        })
    }


  }, [ItemObj.id])



  return (
    <div className="container">
      <h4 className="title is-4">{ItemObj.type}</h4>
      <h1 className="title is-1">{ItemObj.title}</h1>
      <span><b>Stolen: </b>{bikeInfo.stolen_record ? bikeInfo.stolen_record.date_stolen : ''}</span>
      <b>At:</b> <span>{bikeInfo.stolen_record ? bikeInfo.stolen_record.location : ''}</span>
      <div>
        <img src={ItemObj.media ? ItemObj.media.image_url : null} alt="" />
      </div>
      <div className="columns">
        <div className="column is-half">
          <p><b>Serial:</b> {bikeInfo.serial}</p>
          <p><b>Manufacturer: </b>{bikeInfo.manufacturer_name}</p>
          <p><b>Model:</b> {bikeInfo.frame_model}</p>
          <p><b>Primary colors:</b> {bikeInfo.frame_colors}</p>
          <p><b>Frame Material:</b> {bikeInfo.serial}</p>
        </div>
        <div className="column is-half">
          <p><b>Other serial/registration/sticker:</b> {bikeInfo.serial}</p>
          <p><b>Name:</b> {bikeInfo.name}</p>
          <p><b>Year:</b> {bikeInfo.year}</p>
          <p><b>Frame size:</b> {bikeInfo.frame_size}</p>
        </div>
      </div>
    </div>
  )
};

export default RenderItemDescription;