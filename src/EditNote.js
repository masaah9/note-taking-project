import React, { useState } from 'react';
import { useNotes } from './NotesContext';

const EditNote = ({ note, onClose }) => {
    const [title, setTitle] = useState(note.title);
    const [content, setContent] = useState(note.content);
    const { editNote } = useNotes();

    const handleSubmit = (e) => {
        e.preventDefault();
        editNote(note.id, {
            title,
            content,
            updatedAt: new Date()
        });
        onClose();
    };

    return (
        <form onSubmit={handleSubmit}>
            <input
                type="text"
                value={title}
                onChange={(e) => setTitle(e.target.value)}
                placeholder="Title"
                required
            />
            <textarea
                value={content}
                onChange={(e) => setContent(e.target.value)}
                placeholder="Content"
                required
            />
            <button type="submit">Save Changes</button>
            <button type="button" onClick={onClose}>Cancel</button>
        </form>
    );
};

export default EditNote;
