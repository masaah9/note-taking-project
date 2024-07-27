import React, { useState } from 'react';
import { addNoteVersion } from './firestoreUtils'; // Adjust the import according to your file structure

const NoteEditor = ({ note, onSave }) => {
    const [content, setContent] = useState(note.content);

    const handleSave = async () => {
        // Add a new version to the note history
        await addNoteVersion(note.id, { content });
        // Optionally call onSave to update the note in the UI or navigate away
        if (onSave) onSave();
    };

    return (
        <div>
      <textarea
          value={content}
          onChange={(e) => setContent(e.target.value)}
      />
            <button onClick={handleSave}>Save</button>
        </div>
    );
};

export default NoteEditor;
