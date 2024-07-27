import React, { useEffect, useState } from 'react';
import { getNote, addNoteVersion } from './firestoreUtils';
import { Button } from 'react-bootstrap';

const VersionHistory = ({ noteId, onBack }) => {
    const [note, setNote] = useState(null);

    useEffect(() => {
        const fetchNote = async () => {
            const fetchedNote = await getNote(noteId);
            setNote(fetchedNote);
        };

        fetchNote();
    }, [noteId]);

    const handleRevert = async (version) => {
        // Logic to revert the note to the selected version
        // Ensure you handle updating the note with the selected version's data
    };

    return (
        <div>
            <h2>Version History</h2>
            <Button onClick={onBack}>Back</Button>
            {note && note.history && (
                <ul>
                    {note.history.map((version, index) => (
                        <li key={index}>
                            <p>{version.content}</p>
                            <p>{new Date(version.timestamp).toDateString()}</p>
                            <Button onClick={() => handleRevert(version)}>Revert</Button>
                        </li>
                    ))}
                </ul>
            )}
        </div>
    );
};

export default VersionHistory;
