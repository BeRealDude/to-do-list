import NotesList from '../NotesList/NotesList';
import SearchForm from '../SearchForm/SearchForm';
import './Notes.css';

function Notes() {
  return (
    <div className="notes">Notes
    <SearchForm />
    <NotesList />
    </div>
  );
}

export default Notes;
