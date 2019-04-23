import React, { useState, forwardRef } from "react";

export const RenderItemDescription = forwardRef((props, ref) => {
  console.log("bike description" + props.itemDescription)
  return (
    <div>
      {props.itemDescription}
    </div>
  )
});
