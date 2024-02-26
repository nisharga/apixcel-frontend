"use client";
import {  Modal } from "antd";
import React, { useState } from "react";

interface IProps {
  btnLabel?: React.ReactNode | string;
  ModalBtnClass?: string; 
  children?: React.ReactNode;
  title?: React.ReactNode;
  modalWidth?: number; 
  setOpen?: any;
  open?: any;
}

const ModalBox: React.FC<IProps> = ({ btnLabel, children, title, modalWidth, ModalBtnClass, setOpen, open }) => {
  
  return (
    <>
      <button
        onClick={() => setOpen(true)}
        className={ModalBtnClass}
      >
        {btnLabel}
      </button>
      <Modal
        centered
        open={open}
        onCancel={() => setOpen(false)}
        title={title || ""}
        width={modalWidth || 400}
        footer={null}   
        closable={false}
      >
        {children}
      </Modal>
    </>
  );
};

export default ModalBox;