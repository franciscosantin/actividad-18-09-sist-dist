import React from 'react';

const StickyNoteComp = ({ children, title, body, bgColor, validUntil, onDelete }): {
  children: React.ReactNode;
  title: string;
  body: string;
  bgColor: string;
  validUntil: string;
  onDelete: () => void
} => {
  return (
    <>
      <div className={`bg-${bgColor}`}>
        <h1>{title}</h1>
        <p>{body}</p>
        <span>{`Valido hasta: ${validUntil}`}</span>
        <br/>
        <button onClick={onDelete}>Eliminar</button>
      </div>
    </>
  );
};

export default StickyNoteComp;
