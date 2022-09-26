import * as Tone from 'tone'
import { useState } from 'react';
import { createRoot } from 'react-dom/client';

const synth = new Tone.Synth().toDestination();
       
let notes = ['c4', 'd4', 'e4', 'f4', 'g4', 'a4', 'b4', 'c5']

let notesKeys = {'a': 'c4' , 's':'d4', 'd':'e4', 'f':'f4',
                     'g':'g4', 'h':'a4', 'j':'b4', 'k':'c5'}

notes.forEach(  note =>  document.getElementById(note)
    .addEventListener('mousedown', () => synth.triggerAttackRelease(note, "8n"))
)

function noteSound(event){
    synth.triggerAttackRelease(notesKeys[event.key.toLowerCase()], "8n")
}

document.getElementById('body').addEventListener('keypress', noteSound)



function Teclas() {
    return <>
        { notes.map(note => <button onClick={() => synth.triggerAttackRelease(note, "8n")} id={note}>{note}</button> ) }
        </>
  }
  
  const root = createRoot(document.getElementById('root'));
  root.render(<Teclas />);