import React, { useState } from 'react';
import NoteDetail from './NoteDetail';
// Other imports

const App = () => {
    const [selectedNoteId, setSelectedNoteId] = useState(null);
    const [view, setView] = useState('list'); // or 'detail'

    const handleBack = () => {
        setView('list'); // Go back to the note list
    };

    const handleViewHistory = () => {
        setView('history'); // Switch to version history view
    };

    return (
        <div>
            {view === 'list' && (
                <NotesList onSelectNote={setSelectedNoteId} onViewDetail={() => setView('detail')} />
            )}
            {view === 'detail' && selectedNoteId && (
                <NoteDetail
                    noteId={selectedNoteId}
                    onBack={handleBack}
                    onViewHistory={() => setView('history')}
                />
            )}
            {view === 'history' && selectedNoteId && (
                <VersionHistory noteId={selectedNoteId} onBack={handleBack} />
            )}
        </div>
    );
};

export default App;
