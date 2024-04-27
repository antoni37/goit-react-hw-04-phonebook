import { PropTypes } from 'prop-types';
import css from './filter.module.css';

const Filter = props => {
  const updateFilter = event => {
    props.onFilter(event.target.value);
  };

  return (
    <div className={css.filter}>
      <label className={css.label} htmlFor="filter">
        Find contacts by name
      </label>
      <input
        className={css.filterInput}
        type="text"
        name="filter"
        onChange={updateFilter}
        value={props.filter}
      />
    </div>
  );
};

Filter.propTypes = {
  filter: PropTypes.string.isRequired,
  onFilter: PropTypes.func.isRequired,
};

export default Filter;