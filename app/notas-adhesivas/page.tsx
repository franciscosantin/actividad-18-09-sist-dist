"use client";

import Image from "next/image";
import StickyNoteComp from "./sticky_note.tsx";
import { useState, useEffect, TextField } from "react";

export default function NotasAdhesivasPage() {
  // { title: "", body: "", bgColor: "white", validUntil: "" }
  const [ loaded, setLoaded ] = useState(false);
  const [ stickyNotes, setStickyNotes ] = useState([]);
  const [ snId, setSnId] = useState(2);
  const [titleInput, setTitleInput] = useState("");
  const [bodyInput, setBodyInput] = useState("");
  const [bgColorInput, setBgColorInput] = useState("");
  const [minutesInput, setMinutesInput] = useState("");
  const onAddStickyNote = () => {
    if (titleInput == "") {
      return;
    }
    const newSN = { id: snId, title: titleInput, body: bodyInput, bgColor: bgColorInput, validUntil: minutesInput };
    setTimeout(() => {
      new Notification(`La nota ${titleInput} cumplió su validez`);
    }, minutesInput * 60 * 1000);
    setSnId(snId + 1);
    setStickyNotes([newSN, ...stickyNotes]);
  };
  useEffect(() => {
    if (!loaded) {
      Notification.requestPermission();
      console.log(Notification.permission);
      const rawSNS = localStorage.getItem("sticky-notes");
      const rawSnId = localStorage.getItem("sticky-note-id");
      setSnId(rawSnId != null ? Number(rawSnId) : 1);
      setStickyNotes(rawSNS != null ? JSON.parse(rawSNS) : []);
      setLoaded(true);
    } else {
      localStorage.setItem("sticky-notes", JSON.stringify(stickyNotes));
      localStorage.setItem("sticky-note-id", snId);
    }
  }, [stickyNotes, loaded]);
  
  const onChangeTitle = (updVal) => {
    setTitleInput(updVal.target.value);
  };
  const onChangeBody = (updVal) => {
    setBodyInput(updVal.target.value);
  };
  const onChangeBgColor = (updVal) => {
    setBgColorInput(updVal.target.value);
  };
  const onChangeMinutes = (updVal) => {
    setMinutesInput(updVal.target.value);
  };

  return (
  <>
      <h1>Sticky notes</h1>
      <label>
        Titulo: <input value={titleInput} onChange={onChangeTitle} />
      </label>
      <label>
        Body: <input value={bodyInput} onChange={onChangeBody} />
      </label>
      <label>
        BGColor: <input value={bgColorInput} onChange={onChangeBgColor} />
      </label>
      <label>
        Minutos: <input value={minutesInput} onChange={onChangeMinutes} />
      </label>
      <button onClick={onAddStickyNote}>Agregar</button>
      <h2>Notas:</h2>
      {(() => {
        if (stickyNotes.length > 0) {
          return stickyNotes.map(sn => (
                <StickyNoteComp key={sn.id} title={sn.title} body={sn.body} bgColor={sn.bgColor} validUntil={sn.validUntil} onDelete={() => {
              const i = stickyNotes.indexOf(sn);
              setStickyNotes([...stickyNotes.slice(0,i), ...stickyNotes.slice(i+1)]);
            }} onEditedFields={(nTitle, nBody, nBgColor, nMinutes) => {
                const i = stickyNotes.indexOf(sn);
                stickyNotes[i] = { id: sn.id, title: nTitle, body: nBody, bgColor: nBgColor, validUntil: nMinutes };
                setStickyNotes(stickyNotes.slice());
              }}/>
          ));
        } else {
          return null;
      }})()}
  </>
  );
};
