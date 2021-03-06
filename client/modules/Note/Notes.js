import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import Note from './Note';
import Edit from '../../components/Edit';
import { deleteNoteRequest, updateNoteRequest } from './NoteActions';

import styles from './Note.css';

const Notes = ({ notes,laneId,currentLane, dispatch , ...props}) => {
  console.log('laneId', laneId, currentLane)
  return (
    <ul className={styles.notes}  >
      {notes.map((note) => 
        <Note 
          laneId= {laneId}
          allNotes={notes}
          currentLane={currentLane}
          id={note.id} 
          key={note.id}
          editing={note.editing}
        >
        <Edit 
          editing={note.editing}
          value={note.name}
          onValueClick={() => {
            dispatch(updateNoteRequest(laneId, note.id, {editing: true}))
          }}
          onEdit={(updateNote) => {
            dispatch(updateNoteRequest(laneId, note.id, updateNote))
          }}
          onDelete={() =>{
            dispatch(deleteNoteRequest(laneId, note.id))
          }}
        />
        </Note>
      )}
    </ul>
  );
};

Notes.propTypes = {
  notes: PropTypes.array
};


export default connect(null)(Notes)