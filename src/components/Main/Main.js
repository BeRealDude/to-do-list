import Notes from '../Notes/Notes';
import './Main.css';

function Main({ addNote, notes, selectedNote, entryData, openEntryData }) {
  return (
    <main className="main">
    <Notes
    addNote={addNote}
    notes={notes}
    selectedNote={selectedNote}
    entryData={entryData}
    openEntryData={openEntryData}
    // openFormEntryData={openFormEntryData}
    />
    </main>
  );
}

export default Main;
