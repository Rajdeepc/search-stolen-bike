import React, { useState, forwardRef } from "react";

const RenderItemDescription = props => {
  console.log("bike description" + JSON.stringify(props.location.myCustomProps.item));
  
  let ItemObj = props.location.myCustomProps.item;
  
  return (
    <div>
      <h1>{ItemObj.title}</h1>
      
    </div>
  )
};

export default RenderItemDescription;