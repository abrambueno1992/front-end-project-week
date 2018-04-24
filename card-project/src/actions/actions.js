export const ADD_NOTE = 'ADD_NOTE';
export const DELETE_NOTE = 'DELETE_NOTE';

let note = [];
 export const addNote = (note) => {
     return {
         type: ADD_NOTE,
         payload: note
     }
 };

 export const deleteNote = (note) => {
     return {
         type: DELETE_NOTE,
         payload: note
     }
 }