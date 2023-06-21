"use client";

import React from "react";
import useInfoModal from "@/hooks/useInfoModal";
import InfoModal from "@/components/InfoModal";

const HomeInfoModal = () => {
  const { isOpen, closeModal } = useInfoModal();
  return <InfoModal visible={isOpen} onClose={closeModal} />;
};

export default HomeInfoModal;
