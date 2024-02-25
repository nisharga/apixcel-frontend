"use client";
import {  Modal } from "antd";
import React, { useState } from "react";

interface IProps {
  btnLabel?: React.ReactNode | string;
  ModalBtnClass?: string; 
  children?: React.ReactNode;
  title?: React.ReactNode;
  modalWidth?: number;
}

const ModalBox: React.FC<IProps> = ({ btnLabel, children, title, modalWidth, ModalBtnClass }) => {
  const [open, setOpen] = useState(false);
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
      >
        {children}
      </Modal>
    </>
  );
};

export default ModalBox;