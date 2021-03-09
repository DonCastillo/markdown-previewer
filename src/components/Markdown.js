import React from 'react'

const Markdown = (props) => {
    return (
        <div className="container">
            Markdown
            <textarea 
                onChange={props.change} 
                value={props.children}>
            </textarea>
        </div>
    )
}

export default Markdown;