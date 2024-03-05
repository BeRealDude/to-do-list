import './ModalSortingMenu.css'

function ModalSortingMenu({ isOpen, closeAllModalWindows, sortAlphabetBtn }) {

  function close(e) {
    e.target === e.target.closest('.modal-sortingMenu') && closeAllModalWindows()
    }

  return(
    <section className={`modal-sortingMenu ${isOpen && "modal-sortingMenu_opened"}`} onClick={close}>
      <div className="modal-sortingMenu__container">
        <h2 className="modal-sortingMenu__heading">Порядок сортировки</h2>
        <button
            className="modal-sortingMenu__btn"
            onClick={sortAlphabetBtn}
          >
            По алфавиту
          </button>
          <button
            type="button"
            className="modal-sortingMenu__btn"
            // onClick={onClose}
          >
            По дате создания
          </button>

      </div>
    </section>
  );
}

export default ModalSortingMenu;