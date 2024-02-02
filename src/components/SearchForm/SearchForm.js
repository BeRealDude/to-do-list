import './SearchForm.css';

function SearchForm() {
  return (
    <section className="form-container">
      <form
      className="form"
      name="form"
      id="form"
      noValidate>
        <input
        className="form__input"
        // value={ ""|| ""}
        // onChange={handleChange}
        // onClick={onClickHandler}
        // onBlur={onOnBlur}
        type="text"
        name="form-search"
        id="form-search"
        required
        placeholder="Поиск"
        />
        <button className='form__btn'>F</button>
      </form>
    </section>
  );
}

export default SearchForm;
