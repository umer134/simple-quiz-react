

function Game({questions, question, step, onCklickVariant}) {
    const percetage = Math.round(step / questions.length * 100)
    return (
      <>
        <div className="progress">
          <div style={{ width: `${percetage}%`  }} className="progress__inner"></div>
        </div>
        <h1>{question.title}</h1>
        <ul>
          {question.variants.map((variant, index) => {
           return <li onClick={() => onCklickVariant(index) } key={index}>{variant}</li>
          })}
        </ul>
      </>
    );
  }

  export default Game;