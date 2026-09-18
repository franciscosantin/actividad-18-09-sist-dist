import React from 'react';

const StickyNoteComp = ({ children, title, body, bgColor, validUntil }): {
  children: React.ReactNode;
  stickyNote: string;
  body: string;
  bgColor: string;
  validUntil: string
} => {
  return (
    <>
      <div className={`bg-${bgColor}`}>
        <h1>{title}</h1>
        <p>{body}</p>
        <span>{`Valido hasta: ${validUntil}`}</span>
      </div>
    </>
  );
}

export default StickyNoteComp;
