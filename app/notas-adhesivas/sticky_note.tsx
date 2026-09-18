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
  if (editEnabled) {
    return (
      <>
        <div className={`bg-${bgColor}`}>
          <label>
            Titulo: <input value={edTitle} onChange={(v) => setTitle(v.target.value)} />
          </label>
          <label>
            Body: <input value={edBody} onChange={(v) => setEdBody(v.target.value)} />
          </label>
          <label>
            BgColor: <input value={edBgColor} onChange={(v) => setEdBgColor(v.target.value)} />
          </label>
          <label>
            Valid Until: <input value={edValidUntil} onChange={(v) => setEdValidUntil(v.target.value)} />
          </label>
          <button onClick={() => setEditEnabled(false)}>Cancelar</button>
          <button onClick={() => {
            onEditedFields(edTitle, edBody, edBgColor, edValidUntil);
            setEditEnabled(false);
          }}>Guardar</button>
        </div>
      </>
    );
  }
  return (
    <>
      <div className={`bg-${bgColor}`}>
        <h1>{title}</h1>
        <p>{body}</p>
        <span>{`Valido hasta: ${validUntil}`}</span>
        <br/>
        <button onClick={onDelete}>Eliminar</button>
        <button onClick={() => setEditEnabled(true)}>Editar</button>
      </div>
    </>
  );
};

export default StickyNoteComp;
