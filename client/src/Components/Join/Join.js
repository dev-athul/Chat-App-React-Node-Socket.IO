import React from 'react'
import './Join.css'

export default function () {
    return (
        <>
        <h1 id='athul'>Athul Vijayan</h1>
        <div className='joinOuter bg-bluepink'>
            <h1 className='heading'>Join</h1>
            <form className='joinForm'>
                <input type='text' placeholder="room name" id='room' className='joinInput'></input>
                <input type='text' placeholder="your name" id='name' className='joinInput'></input>
                <button type='submit' id='joinButton' className='joinButton'>Join</button>
            </form>
        </div>
        </>
    )
}
