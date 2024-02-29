export default Progress;

function Progress({ numQuestions, index, maxPossiblePoints, answer, points }) {
  <header className="progress">
    <progress max={numQuestions} value={index + Number(answer !== null)} />
    <p>
      Question <strong>{index + 1}</strong> /{numQuestions}
    </p>
    <p>
      <strong>{points}</strong> / {maxPossiblePoints}
    </p>
  </header>;
}
