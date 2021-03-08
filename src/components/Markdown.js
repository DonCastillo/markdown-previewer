import React from 'react'

const Markdown = (props) => {
    return (
        <div>
            Markdown
            <textarea onChange={props.change}>
                {props.children}
            </textarea>
        </div>
    )
}

export default Markdown;