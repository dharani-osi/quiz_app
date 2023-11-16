import { useState } from 'react';
import './App.css';
import AddUserName from './components/AddUserName'; 
import Quiz from './components/Quiz';

function App() {
  const [username, setUserName] = useState('');
  const [quizStarted, setQuizStarted] = useState(false);

  const startQuiz = (name) => {
    localStorage.setItem('username', name)
    setUserName(name);
    setQuizStarted(true)
  } 

  return (
    <div className="container">
      {!quizStarted && <AddUserName onStartQuiz={startQuiz}/>}
      {quizStarted && <Quiz username={username} />}
    </div>
  );
}

export default App;
