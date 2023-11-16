import { useState, useEffect } from "react"
import Score from "./Score";

const Quiz = ({ username }) => {
  const questions = [
        {
            "category": "Geography",
            "type": "multiple",
            "difficulty": "hard",
            "question": "What is the name of one of the Neo-Aramaic languages spoken by the Jewish population from Northwestern Iraq?",
            "correct_answer": "Lishana Deni",
            "incorrect_answers": [
                "Hulaul&aacute;",
                "Lishan Didan",
                "Chaldean Neo-Aramaic"
            ],
            "options": [
                "Hulaul&aacute;",
                "Lishan Didan",
                "Lishana Deni",
                "Chaldean Neo-Aramaic"
            ]
        },
        {
            "category": "Entertainment: Video Games",
            "type": "multiple",
            "difficulty": "medium",
            "question": "What was the first interactive movie video game?",
            "correct_answer": "Astron Belt",
            "incorrect_answers": [
                "Dragon&#039;s Lair",
                "Cube Quest",
                "M.A.C.H. 3"
            ],
            "options": [
                "Cube Quest",
                "M.A.C.H. 3",
                "Astron Belt",
                "Dragon&#039;s Lair"
            ]
        },
        {
            "category": "Entertainment: Video Games",
            "type": "multiple",
            "difficulty": "medium",
            "question": "In Need For Speed: Most Wanted (2005), how many people are there to defeat on the blacklist?",
            "correct_answer": "15",
            "incorrect_answers": [
                "5",
                "10",
                "20"
            ],
            "options": [
                "10",
                "20",
                "5",
                "15"
            ]
        },
        {
            "category": "Entertainment: Video Games",
            "type": "multiple",
            "difficulty": "hard",
            "question": "What is the 4th boss in the 1997 video game &quot;Crash Bandicoot 2: Cortex Strikes Back&quot;?",
            "correct_answer": "Dr. N. Gin",
            "incorrect_answers": [
                "Dr. Neo Cortex",
                "Komodo Brothers",
                "Tiny Tiger"
            ],
            "options": [
                "Dr. Neo Cortex",
                "Tiny Tiger",
                "Komodo Brothers",
                "Dr. N. Gin"
            ]
        },
        {
            "category": "Entertainment: Cartoon & Animations",
            "type": "multiple",
            "difficulty": "easy",
            "question": "In The Simpsons, which war did Seymour Skinner serve in the USA Army as a Green Beret?",
            "correct_answer": "Vietnam War",
            "incorrect_answers": [
                "World War 2",
                "World War 1",
                "Cold War"
            ],
            "options": [
                "Vietnam War",
                "World War 2",
                "Cold War",
                "World War 1"
            ]
        },
        // Question 6
        {
            "category": "Science",
            "type": "multiple",
            "difficulty": "medium",
            "question": "What is the chemical symbol for the element iron?",
            "correct_answer": "Fe",
            "incorrect_answers": [
                "Ir",
                "Io",
                "In"
            ],
            "options": [
                "Fe",
                "Ir",
                "Io",
                "In"
            ]
        },
        // Question 7
        {
            "category": "History",
            "type": "multiple",
            "difficulty": "easy",
            "question": "Which famous document begins with the words, 'When in the course of human events...'?",
            "correct_answer": "The Declaration of Independence",
            "incorrect_answers": [
                "The Magna Carta",
                "The Emancipation Proclamation",
                "The Gettysburg Address"
            ],
            "options": [
                "The Declaration of Independence",
                "The Magna Carta",
                "The Emancipation Proclamation",
                "The Gettysburg Address"
            ]
        },
        // Question 8
        {
            "category": "Literature",
            "type": "multiple",
            "difficulty": "medium",
            "question": "Which classic novel begins with the famous line, 'Call me Ishmael.'?",
            "correct_answer": "Moby-Dick",
            "incorrect_answers": [
                "Pride and Prejudice",
                "Great Expectations",
                "To Kill a Mockingbird"
            ],
            "options": [
                "Moby-Dick",
                "Pride and Prejudice",
                "Great Expectations",
                "To Kill a Mockingbird"
            ]
        },
        // Question 9
        {
            "category": "Sports",
            "type": "multiple",
            "difficulty": "easy",
            "question": "In which sport would you perform a slam dunk?",
            "correct_answer": "Basketball",
            "incorrect_answers": [
                "Tennis",
                "Soccer",
                "Volleyball"
            ],
            "options": [
                "Basketball",
                "Tennis",
                "Soccer",
                "Volleyball"
            ]
        },
        // Question 10
        {
            "category": "Music",
            "type": "multiple",
            "difficulty": "hard",
            "question": "Who composed the classical music piece 'The Four Seasons'?",
            "correct_answer": "Antonio Vivaldi",
            "incorrect_answers": [
                "Wolfgang Amadeus Mozart",
                "Ludwig van Beethoven",
                "Johann Sebastian Bach"
            ],
            "options": [
                "Antonio Vivaldi",
                "Wolfgang Amadeus Mozart",
                "Ludwig van Beethoven",
                "Johann Sebastian Bach"
            ]
        },
        // Question 11
        {
            "category": "Movies",
            "type": "multiple",
            "difficulty": "medium",
            "question": "Which film won the Academy Award for Best Picture in 2020?",
            "correct_answer": "Parasite",
            "incorrect_answers": [
                "1917",
                "Joker",
                "Once Upon a Time in Hollywood"
            ],
            "options": [
                "Parasite",
                "1917",
                "Joker",
                "Once Upon a Time in Hollywood"
            ]
        },
        // Question 12
        {
            "category": "Geography",
            "type": "multiple",
            "difficulty": "easy",
            "question": "What is the capital city of France?",
            "correct_answer": "Paris",
            "incorrect_answers": [
                "London",
                "Rome",
                "Berlin"
            ],
            "options": [
                "Paris",
                "London",
                "Rome",
                "Berlin"
            ]
        },
        // Question 13
        {
            "category": "Food",
            "type": "multiple",
            "difficulty": "easy",
            "question": "Which type of pasta is shaped like small rice grains?",
            "correct_answer": "Orzo",
            "incorrect_answers": [
                "Penne",
                "Fusilli",
                "Linguine"
            ],
            "options": [
                "Orzo",
                "Penne",
                "Fusilli",
                "Linguine"
            ]
        },
        // Question 14
        {
            "category": "Technology",
            "type": "multiple",
            "difficulty": "medium",
            "question": "What does the abbreviation 'PDF' stand for?",
            "correct_answer": "Portable Document Format",
            "incorrect_answers": [
                "Personal Data File",
                "Printable Document Form",
                "Public Domain File"
            ],
            "options": [
                "Portable Document Format",
                "Personal Data File",
                "Printable Document Form",
                "Public Domain File"
            ]
        },
        // Question 15
        {
            "category": "Animals",
            "type": "multiple",
            "difficulty": "easy",
            "question": "What is the largest species of penguin?",
            "correct_answer": "Emperor Penguin",
            "incorrect_answers": [
                "King Penguin",
                "Adélie Penguin",
                "Gentoo Penguin"
            ],
            "options": [
                "Emperor Penguin",
                "King Penguin",
                "Adélie Penguin",
                "Gentoo Penguin"
            ]
        },
        // Question 16
        {
            "category": "Art",
            "type": "multiple",
            "difficulty": "medium",
            "question": "Who painted the Mona Lisa?",
            "correct_answer": "Leonardo da Vinci",
            "incorrect_answers": [
                "Vincent van Gogh",
                "Pablo Picasso",
                "Michelangelo"
            ],
            "options": [
                "Leonardo da Vinci",
                "Vincent van Gogh",
                "Pablo Picasso",
                "Michelangelo"
            ]
        },
        // Question 17
        {
            "category": "Mythology",
            "type": "multiple",
            "difficulty": "hard",
            "question": "In Norse mythology, who is the hammer-wielding god associated with thunder, lightning, storms, oak trees, strength, the protection of mankind, and also hallowing and fertility?",
            "correct_answer": "Thor",
            "incorrect_answers": [
                "Loki",
                "Odin",
                "Freyr"
            ],
            "options": [
                "Thor",
                "Loki",
                "Odin",
                "Freyr"
            ]
        },
        // Question 18
        {
            "category": "Science Fiction",
            "type": "multiple",
            "difficulty": "medium",
            "question": "Which famous science fiction author wrote the novel 'Dune'?",
            "correct_answer": "Frank Herbert",
            "incorrect_answers": [
                "Isaac Asimov",
                "Arthur C. Clarke",
                "Philip K. Dick"
            ],
            "options": [
                "Frank Herbert",
                "Isaac Asimov",
                "Arthur C. Clarke",
                "Philip K. Dick"
            ]
        },
        // Question 19
        {
            "category": "History",
            "type": "multiple",
            "difficulty": "medium",
            "question": "Which ancient wonder is believed to have been the tallest man-made structure in the world?",
            "correct_answer": "The Great Pyramid of Giza",
            "incorrect_answers": [
                "The Colossus of Rhodes",
                "The Hanging Gardens of Babylon",
                "The Lighthouse of Alexandria"
            ],
            "options": [
                "The Great Pyramid of Giza",
                "The Colossus of Rhodes",
                "The Hanging Gardens of Babylon",
                "The Lighthouse of Alexandria"
            ]
        },
        // Question 20
        {
            "category": "Entertainment: Music",
            "type": "multiple",
            "difficulty": "medium",
            "question": "Which legendary musician is known as the 'King of Pop'?",
            "correct_answer": "Michael Jackson",
            "incorrect_answers": [
                "Elvis Presley",
                "Prince",
                "David Bowie"
            ],
            "options": [
                "Michael Jackson",
                "Elvis Presley",
                "Prince",
                "David Bowie"
            ]
        }
  ]
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [score, setScore] = useState(0)
  const [selectedOption, setSelectedOption] = useState(null);
  const [userResponses, setUserResponses] = useState(Array(questions.length).fill(null));
  const [quizCompleted, setQuizCompleted] = useState(false)

  useEffect(() => {
    const storedResponses = localStorage.getItem('userResponses');
    if (storedResponses) {
      setUserResponses(JSON.parse(storedResponses));
    }
  }, []);

  useEffect(() => {
    localStorage.setItem('userResponses', JSON.stringify(userResponses));
  }, [userResponses]);
  
  const handleOptionChange = (option) => {
    setSelectedOption(option);
  };
 
  const handleNextClick = () => {
    if (selectedOption === questions[currentQuestion].correct_answer) {
      setScore(score + 1);
    }
    const updatedResponses = [...userResponses];
    updatedResponses[currentQuestion] = selectedOption;
    setUserResponses(updatedResponses);
    console.log(userResponses)
    const nextResponse = (currentQuestion < questions.length - 1) ? userResponses[currentQuestion + 1] : userResponses[currentQuestion]
    console.log(nextResponse)
    setSelectedOption(nextResponse || null);
 
    if (currentQuestion < questions.length - 1) {
      setCurrentQuestion(currentQuestion + 1);
    } else {
      const isConfirmed = window.confirm('Are you sure you want to submit the test?')
      if(isConfirmed) {
        setQuizCompleted(true)
      }
      else{
        setCurrentQuestion(currentQuestion);
      }
    }
  };
 
  const handlePreviousClick = () => {
    if (currentQuestion > 0) {
      setCurrentQuestion(currentQuestion - 1);
      const updatedResponses = [...userResponses];
      updatedResponses[currentQuestion] = selectedOption;
      setUserResponses(updatedResponses);  
      const previousResponse = userResponses[currentQuestion - 1];
      setSelectedOption(previousResponse || null);
    }
  };

  const handleRestartClick = () => {
    setQuizCompleted(false)
    setCurrentQuestion(0)
    setScore(0)
    setSelectedOption(null)
    setUserResponses(Array(questions.length).fill(null))
  }

  return (
    <div>
      <header className='header'>
        <h1>{quizCompleted ? 'Result' : 'Quiz'}</h1>
        <h2>Hi {username}</h2>
      </header>
        <div>
            { quizCompleted && <><Score score={score} totalQuestions={questions.length} />
              <button onClick={handleRestartClick}>Restart test</button></>
            }

            {!quizCompleted && <><h3>Question #{currentQuestion + 1} </h3>
            <h2>{questions[currentQuestion].question}</h2>
            <ul>
                {questions[currentQuestion].options.map((option, index) => (
                <li key={index}>
                    <input
                    type="radio"
                    id={index}
                    value={option}
                    checked={option === selectedOption}
                    onChange={() => handleOptionChange(option)}
                    />
                    <label htmlFor={index}>{option}</label>
                </li>
                ))}
            </ul>
            <button onClick={handlePreviousClick} disabled={currentQuestion === 0}>
                Previous
            </button>
            <button onClick={handleNextClick}>
                {currentQuestion < questions.length - 1 ? 'Next' : 'Finish'}
            </button>
            </>}
        </div>
    </div>
  )
}

export default Quiz
