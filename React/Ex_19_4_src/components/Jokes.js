import React from 'react'

export default function Jokes(props) {
    const displayJokes = () =>{
        console.log('props:', props.jokes);
        return props.jokes.map(joke =>{
            return <div>
                {joke}
            </div>
        });
    }
    return (
        <div>
            {displayJokes()}
        </div>
    )
}
