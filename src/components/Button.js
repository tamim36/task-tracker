import PropTypes from 'prop-types'
import React from 'react'

const Button = ({ color, text, onClickProp }) => {
  return (
    <button onClick={onClickProp}
    className='btn' 
    style={{backgroundColor: color}} >
        {text}
    </button>
  )
}

Button.defaultProps = {
    color: 'steelblue',
    text: 'Button'
}

Button.propTypes = {
    color: PropTypes.string,
    text: PropTypes.string,
    onClick: PropTypes.func
}

export default Button