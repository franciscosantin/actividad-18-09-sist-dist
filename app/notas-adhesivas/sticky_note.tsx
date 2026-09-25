"use client";

import React from 'react';
import { useState } from "react";

const StickyNoteComp = ({ children, title, body, bgColor, validUntil, onDelete, onEditedFields }): {
  children: React.ReactNode;
  title: string;
  body: string;
  bgColor: string;
  validUntil: string;
  onEditedFields: (title: string, body: string, bgColor: string, validUntil: string) => void;
  onDelete: () => void
} => {
  const [editEnabled, setEditEnabled] = useState(false);
  const [edTitle, setTitle] = useState(title);
  const [edBody, setEdBody] = useState(body);
  const [edBgColor, setEdBgColor] = useState(bgColor);
  const [edValidUntil, setEdValidUntil] = useState(validUntil);
  const cardStyle = `bg-${bgColor} flex flex-col items-center gap-6 p-7 rounded-2xl shadow-xl rounded-md border border-white w-md m-auto mb-5`;
  const titleStyle = "text-xl font-bold";
  const btnStyle = "inline-flex items-center justify-center rounded-lg bg-indigo-600 px-4 py-2.5 text-sm font-semibold text-white shadow-sm transition-colors hover:bg-indigo-700 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600 disabled:cursor-not-allowed disabled:opacity-50";
  if (editEnabled) {
    return (
      <>
        <div className={cardStyle}>
          <label className={titleStyle}>
            Titulo: <input value={edTitle} onChange={(v) => setTitle(v.target.value)} />
          </label>
          <label>
            Body: <input value={edBody} onChange={(v) => setEdBody(v.target.value)} />
          </label>
          <label>
            BgColor: <input value={edBgColor} onChange={(v) => setEdBgColor(v.target.value)} />
          </label>
          <label>
            Minutos de validez: <input value={edValidUntil} onChange={(v) => setEdValidUntil(v.target.value)} />
          </label>
          <button className={btnStyle} onClick={() => setEditEnabled(false)}>Cancelar</button>
          <button className={btnStyle} onClick={() => {
            onEditedFields(edTitle, edBody, edBgColor, edValidUntil);
            setEditEnabled(false);
          }}>Guardar</button>
        </div>
      </>
    );
  }
  return (
    <>
      <div className={cardStyle}>
        <h1 className={titleStyle}>{title}</h1>
        <p>{body}</p>
        <span>{`Valido hasta: ${validUntil}`}</span>
        <br/>
        <button className={btnStyle} onClick={onDelete}>Eliminar</button>
        <button className={btnStyle} onClick={() => setEditEnabled(true)}>Editar</button>
      </div>
    </>
  );
};

export default StickyNoteComp;
