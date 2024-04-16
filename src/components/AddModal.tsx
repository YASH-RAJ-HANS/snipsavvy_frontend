"use client";
import React, { useState } from "react";

export default function AddModal() {
  const [modal, setModal] = useState(1);
  return (
    <div className="">
      <button onClick={() => setModal(modal + 1)} className=''>add more</button>
      add {modal}
    </div>
  );
}
