// import { useQuiz } from "../contexts/QuizContext";

export default StartScreen;

function StartScreen({ numQuestions, dispatch }) {
  // const { numQuestions, dispatch } = useQuiz();

  return (
    <div className="start">
      <h2>Welcome to the React Quiz</h2>
      <h3>{numQuestions} questions to test your React Mastery</h3>

      <button
        className="btn btn-ui"
        onClick={() => dispatch({ type: "start" })}
      >
        Let's Start
      </button>
    </div>
  );
}
