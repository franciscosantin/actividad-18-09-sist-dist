"use client";

import Image from "next/image";
import StickyNoteComp from "./sticky_note.tsx";
import { useState, useEffect, TextField } from "react";

export default function NotasAdhesivasPage() {
  // { title: "", body: "", bgColor: "white", validUntil: "" }
  const [ stickyNotes, setStickyNotes ] = useState([{ title: "Prueba 1", body: "Lorem Ipsum", bgColor: "brown", validUntil: "2026-09-18 16:30:00" }]);
  const [titleInput, setTitleInput] = useState("");
  const [bodyInput, setBodyInput] = useState("");
  const [bgColorInput, setBgColorInput] = useState("");
  const [minutesInput, setMinutesInput] = useState("");
  const mapToStickyComp = (sn) => {
    return (
      <>
        <StickyNoteComp title={sn.title} body={sn.body} bgColor={sn.bgColor} validUntil={sn.validUntil}/>
      </>
    );
  }
  const onAddStickyNote = () => {
    if (titleInput == "") {
      return;
    }
    const newSN = { title: titleInput, body: bodyInput, bgColor: bgColorInput, validUntil: minutesInput };
    setStickyNotes([newSN, ...stickyNotes]);
  };
  useEffect(() => {
    if (stickyNotes.length == 0) {
      // const rawSNS = localStorage.getItem("sticky-notes");
      // setStickyNotes();
    }
  }, [stickyNotes])
  
  const onChangeTitle = (updVal) => {
    setTitleInput(updVal);
  };

  return (
  <>
      <h1>Sticky notes</h1>
      <label>
        Titulo: <input onChange={onChangeTitle} />
      </label>
      <label>
        Body: <input onChange={onChangeTitle} />
      </label>
      <label>
        BGColor: <input onChange={onChangeTitle} />
      </label>
      <label>
        Minutos: <input onChange={onChangeTitle} />
      </label>
      <button onClick={onAddStickyNote}>Agregar</button>
      <h2>Notas:</h2>
      {stickyNotes.map(sn => 
              <StickyNoteComp key={sn.title} title={sn.title} body={sn.body} bgColor={sn.bgColor} validUntil={sn.validUntil}/>
    )
      }
  </>
  );
};
