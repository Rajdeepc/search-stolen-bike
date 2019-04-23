import React, { useState, forwardRef } from "react";

const RenderItemDescription = forwardRef((props, ref) => {
  console.log("bike description" + props.itemDescription)
  return (
    <div>
      <h1>Hi i am in item description</h1>
      {props.itemDescription}
    </div>
  )
});

export default RenderItemDescription;