import React from 'react'

function App() {

    const submitHandler = (event) => {
        event.preventDefault()
    }
  return (
    <form method='POST'>
        <label>Name : </label>
        <input type='text' /><br />
        <label>email : </label>
        <input type='email' /><br />
        <label>password : </label>
        <input type='password' /><br />
        <button type='submit' onClick={submitHandler}>Submit</button>
    </form>
  )
}

export default App