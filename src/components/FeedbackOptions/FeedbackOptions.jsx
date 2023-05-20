import PropTypes from 'prop-types';
import css from './FeedbackOptions.module.css';
export default function FeedbackOptions({ options, onLeaveFeedback }) {
  return (
    <ul className={css.optionList}>
      {options.map(btn => (
        <li key={btn} className={css.optionListItem}>
          <button
            type="button"
            onClick={onLeaveFeedback}
            name={btn}
            className={css.buttonOption}
          >
            {btn}
          </button>
        </li>
      ))}
    </ul>
  );
}
FeedbackOptions.propTypes = {
  options: PropTypes.arrayOf(PropTypes.string),
  onLeaveFeedback: PropTypes.elementType,
};
