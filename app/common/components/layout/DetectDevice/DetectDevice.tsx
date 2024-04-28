"use client";

import UseDetectMobile from "@common/hooks/useDetectMobile";
import { ReactNode } from "react";
import DeskTopLayout from "./DeskTopLayout";

interface DetectDeviceProps {
  children: ReactNode;
}

export default function DetectDevice({ children }: DetectDeviceProps) {
  const { isMobile } = UseDetectMobile();
  return isMobile ? children : <DeskTopLayout />;
}
