import React from 'react'

export default function About(props) {
    return (
        <div className="container">
            <h1 style={{color:props.switchMode==='light'?'black':'white'}}>About Text Utils</h1>
        </div>
    )
}
