"use client";
import React, { useState } from "react";

export default function AddModal() {
  const [modal, setModal] = useState(1);
  return (
    <div className="bg-white">
      <button onClick={() => setModal(modal + 1)} className='bg-white'>add more</button>
      add {modal}
    </div>
  );
}
