import React, { useEffect } from "react";

const SuccessMessageAlert = ({ message, data, onClose }) => {
  useEffect(() => {
    if (message) {
      alert(`${message} Dengan Data: ${JSON.stringify(data)}`);
      onClose();
    }
  }, [message, data, onClose]);

  return null;
};

export default SuccessMessageAlert;
