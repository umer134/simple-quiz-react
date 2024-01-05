import { useState } from 'react';
import './App.scss';
import Game from './components/Game.jsx';
import Result from './components/Result.jsx'

const questions = [
  {
    title: 'React - это...',
    variants: ['библиотека JS', 'фреймворк JS', 'среда разработки'],
    correct: 0,
  },
  {
    title: 'Компонент - это...',
    variants: ['приложение', 'часть страницы или приложения', 'часть кода'],
    correct: 1,
  },
  {
    title: 'Что такое JSX?',
    variants: [
      'библиотека JavaScript',
      'Это функция',
      'HTML в котором можно писать JS-скрипт',
    ],
    correct: 2,
  },
];


function App() {
  const [step, setStep] = useState(0)
  const [correct, setCorrect] = useState(0)
  const question = questions[step]

  const onCklickVariant = (index) => {
    // console.log(index)
    setStep(step + 1)

    if(index === question.correct){
      setCorrect(correct + 1)
    }
  }

  return (
    <div className="App">
      {
        step !== questions.length
         ? 
        <Game questions={questions} 
        step={step}
        question={question} 
        onCklickVariant={onCklickVariant} /> 
        :
        <Result questions={questions}  correct={correct} />
      }
      
    </div>
  );
}

export default App;
