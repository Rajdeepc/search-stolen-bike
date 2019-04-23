import React, { useState, forwardRef } from "react";

const RenderItemDescription = props => {
  
  let ItemObj = props.location.myCustomProps ? props.location.myCustomProps.item : {};
  
  return (
    <div>
      <h1>{ItemObj.title}</h1>
      
    </div>
  )
};

export default RenderItemDescription;