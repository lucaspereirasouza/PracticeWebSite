import React from "react";
import "./css/errorNotification.css";

const ErrorNotification = ({message, onClose }:any) => {
  return (
    <div className="error-notification">
      <p>{message}</p>
      <button onClick={onClose}>X</button>
    </div>
  );
};

export default ErrorNotification;
