import React, { Component } from 'react'
// import { Modal, View, Image, Text, StyleSheet } from 'react';

const Modal = ({ handleClose, show, children }) => {
    const showHideClassName = (show ? "modal display-block" : "modal display-none");
  
    return (
      <div className={showHideClassName}>
        <section className="modal-main">
          {children}
          <button className="TaskButton__Completed__false" onClick={handleClose}>close</button>
        </section>
      </div>
    );
  };

export default Modal;