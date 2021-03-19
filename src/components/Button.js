// import React from 'react'
import PropTypes from 'prop-types'

/* Used in Header component */
const Button = ({ color, text, onClick }) => {

    return (
        <button 
            onClick={ onClick } 
            style={{backgroundColor: color}} 
            className='btn'
        >
            {text}
        </button>
    )
}

Button.defaultProps = {
    color: 'blue'
}

Button.propTypes = {
    text: PropTypes.string,
    color: PropTypes.string,
}

export default Button
