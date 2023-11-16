import { useState } from 'react'

const AddUserName = ({ onStartQuiz }) => {
  const [name, setName] = useState('')
//   const [submitted, setSubmitted] = useState(false)
  const handleStartQuiz = (e) => {
    e.preventDefault();
    if (name.trim() !== '') {
        console.log('Username:', name)
        onStartQuiz(name)
        // setSubmitted(true)
    }
  }
  return (
    <>
    <form className='add-form' onClick={handleStartQuiz}>
        <div className='form-control'>
            <label>Enter your name:</label>
            <input type='text' placeholder='UserName'  onChange={(e) => setName(e.target.value)}/>
        </div>
        <button type='submit'>Submit</button>
    </form>
    </>
  )
}

export default AddUserName
