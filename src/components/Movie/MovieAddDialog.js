import React from 'react';
import { useForm } from '../../hooks/useForm';
import PropTypes from 'prop-types';

function MovieAddDialog({ closeAddDialog, addNewMovie }) {
  const [{ title, subtitle, description, year }, handleChange] = useForm({
    title: '',
    subtitle: '',
    description: '',
    year: '',
  });

  const handleSubmit = e => {
    e.preventDefault();
    addNewMovie({ title, subtitle, description, year, rating: 0 });
  };

  return (
    <div className="dialog">
      <div className="dialog__close" onClick={closeAddDialog}>
        &#10006;
      </div>
      <form onSubmit={handleSubmit} className="was-validated">
        <div className="form-group">
          <label htmlFor="Title">Title</label>
          <input
            type="text"
            className="form-control is-invalid"
            id="Title"
            name="title"
            onChange={handleChange}
            value={title}
            required
          />
          {title.length === 0 && <div className="invalid-feedback">Please enter a title.</div>}
        </div>
        <div className="form-group">
          <label htmlFor="Subtitle">Subtitle</label>
          <input
            type="text"
            className="form-control is-invalid"
            id="Subtitle"
            name="subtitle"
            onChange={handleChange}
            value={subtitle}
            required
          />
          {subtitle.length === 0 && <div className="invalid-feedback">Please enter a subtitle.</div>}
        </div>
        <div className="form-group">
          <label htmlFor="Description">Description</label>
          <textarea
            type="text"
            className="form-control is-invalid"
            id="Description"
            name="description"
            onChange={handleChange}
            value={description}
            required
          />
          {description.length === 0 && <div className="invalid-feedback">Please enter a description.</div>}
        </div>
        <div className="form-group">
          <label htmlFor="Year">Year</label>
          <input
            type="number"
            className="form-control is-invalid"
            id="Year"
            name="year"
            onChange={handleChange}
            value={year}
            required
          />
          {year === '' && <div className="invalid-feedback">Please enter a year.</div>}
        </div>
        <button
          type="submit"
          className="btn btn-primary"
          disabled={title.length === 0 || subtitle.length === 0 || description.length === 0 || year === ''}
        >
          Submit
        </button>
      </form>
    </div>
  );
}

MovieAddDialog.propTypes = {
  closeAddDialog: PropTypes.func,
  addNewMovie: PropTypes.func,
};

export default MovieAddDialog;
