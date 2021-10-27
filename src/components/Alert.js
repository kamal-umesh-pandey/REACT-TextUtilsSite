import React from "react";

export default function Alert(props) {
  const capitalize = (text) => {
    return text.charAt(0).toUpperCase() + text.slice(1);
  };
  return (
    // <div className={`alert alert-${props.}`} role="alert">
    //   A simple primary alert—check it out!
    // </div>
    <div style={{height: '50px'}}>
    {props.alert && 
      <div
        className={`alert alert-${props.alert.type} alert-dismissible fade show`}
        role="alert"
      >
        <strong>{capitalize(props.alert.type)}</strong>:{" "}
        {capitalize(props.alert.mssge)}
      </div> }
      </div>
    
  );
}