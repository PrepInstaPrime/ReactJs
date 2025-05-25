import React from 'react'

export default function List({ names }) {
    return (
        <div>
            <ul>
                {names.map((val,idx) => (
                    <li key={idx}>{val}</li>
                ))}
            </ul>

        </div>
    )
}
