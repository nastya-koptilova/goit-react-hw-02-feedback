import PropTypes from 'prop-types';

export function Feedback({ stats, onLeaveFeedback }) {
  return (
    <div>
      {stats.map(feedback => (
        <button
          key={feedback}
          id={feedback}
          type="button"
          onClick={onLeaveFeedback}
        >
          {feedback}
        </button>
      ))}
    </div>
  );
}

Feedback.propTypes = {
  stats: PropTypes.array.isRequired,
  onLeaveFeedback: PropTypes.func.isRequired,
};
