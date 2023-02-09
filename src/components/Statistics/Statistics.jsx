export function Statistics({ good, neutral, bad, total, percentage }) {
  return (
    <ul>
      <li>
        <p>Good: {good}</p>
      </li>
      <li>
        <p>Neutral: {neutral}</p>
      </li>
      <li>
        <p>Bad: {bad}</p>
      </li>
      <li>
        <p>Total: {total}</p>
      </li>
      <li>
        <p>
          Positive feedback: {Math.round(isNaN(percentage) ? 0 : percentage)}%
        </p>
      </li>
    </ul>
  );
}
