import PropTypes from 'prop-types'
import React from 'react'

const Button = ({ color, text }) => {
  return (
    <button className='btn' style={{backgroundColor: color}} >
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
    text: PropTypes.string
}

export default Button