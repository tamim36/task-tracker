import ProptTypes from 'prop-types'
import Button from './Button'

const Header = ({ title }) => {
  return (
    <header className='header'>
        <h1>
            { title }
        </h1>
        <Button text={'Add'} color={'green'} />
        <Button />
    </header>
  )
}

Header.defaultProps = {
    title: 'Task Tracker',
}

Header.proptTypes = {
    title: ProptTypes.string.isRequired,
}

// css in js
// const headingStyle = {
//     color: 'red',
//     backgroundColor: 'black',
// }

export default Header