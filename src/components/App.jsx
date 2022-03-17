import React, { useState } from 'react';

const App = () => {

    const [username, setUserName] = useState('');
    const [thoughts, setThoughts] = useState('');
    const [chirps, setChirps] = useState([
        {
            username: 'Maggie: ',
            thoughts: 'Yo Josh!'
        },
        {
            username: 'Josh: ',
            thoughts: 'Today is the Day!'
        },
        {
            username: 'Maggie: ',
            thoughts: 'Today is not the Day Josh.'
        }
    ])

    const myChirpsArr = chirps.map(val => {
        return <li className="list-group-item ">
            <div className='card shadow p-1 bg-white rounded'>
                <div className='card-body'>
                    <h6 className="card-title">{val.username}</h6>
                    <p className="card-text">{val.thoughts}</p>
                </div>
            </div>
        </li>
    })

    const handleBtnClick = e => {
        e.preventDefault();
        console.log(username, thoughts);
        setChirps([...chirps, {
            username: username,
            thoughts: thoughts
        }])
    };

    return (
        <>

            <form className='container mt-3'>
                <div className="col-sm-4 mb-5 border solid black 3px">
                    <div className="card">
                        <div className="card-body">
                            <input placeholder='username' className='container' id="usernameInput" type='text' value={username} onChange={e => setUserName(e.target.value)} />
                            <textarea placeholder='thoughts' className='container mt-2' rows='4' value={thoughts} onChange={e => setThoughts(e.target.value)} />
                            <button className='btn btn-success' onClick={handleBtnClick}>Chirp!</button>
                        </div>
                    </div>
                </div>
            </form>

            <main className="container mt-5">
                <section className="row">
                    <div className="col-sm-4">
                        <ul className="list-group">
                            {myChirpsArr}
                        </ul>
                    </div>
                </section>
            </main>









        </>
    )

}





export default App;