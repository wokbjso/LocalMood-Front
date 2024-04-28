"use client";

import { QRCodeCanvas } from "qrcode.react";

export default function QRCode() {
  return (
    <section className="w-full flex items-center justify-center flex-col">
      <QRCodeCanvas
        value="https://localmood.co.kr"
        className="border-4 rounded-xl mt-[18px]"
        includeMargin
        fgColor="#393E46"
        size={200}
      />
    </section>
  );
}
