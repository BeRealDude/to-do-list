import './ModalWindowConfirm.css';

function ModalWindowConfirm({
  isOpen,
  onClose,
  selectedNote,
  onDelete,
}) {
  function handleSubmit(e) {
    e.preventDefault();
    onDelete(selectedNote);
  }

  return (
    <section className={`modal-confirm ${isOpen && "modal-window_opened"}`}>
      <div className="modal-confirm__container">
        <h2 className="modal-confirm__heading">Заметки</h2>
        <p className="modal-confirm__text">Вы действительно хотите удалить заметку?</p>

        <div className="modal-confirm__border">
        <button
            type="submit"
            className="modal-confirm__btn modal-confirm__btn_delete"
            onClick={handleSubmit}
          >
            Удалить
          </button>
          <button
            type="button"
            className="modal-confirm__btn modal-confirm__btn_cancel"
            onClick={onClose}
          >
            Отменить
          </button>
        </div>
      </div>
    </section>
  );
}

export default ModalWindowConfirm;