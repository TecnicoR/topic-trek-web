import React from "react";
import ReactDOM from "react-dom";
import Toast from "./Toast";

const ToastService = {
  success: (message) => {
    showToast(message, "success");
  },

  error: (message) => {
    showToast(message, "error");
  },
};

const showToast = (message, type) => {
  const container = document.createElement("div");
  document.body.appendChild(container);

  const closeToast = () => {
    ReactDOM.unmountComponentAtNode(container);
    container.remove();
  };

  ReactDOM.render(
    <Toast open message={message} type={type} onClose={closeToast} />,
    container
  );
};

export default ToastService;
