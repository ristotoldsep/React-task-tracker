// WE DON'T NEED TO IMPORT REACT ANYMORE FOR EVERY COMPONENT!
import PropTypes from 'prop-types'
import Button from "./Button";
import { useLocation } from 'react-router-dom'; //To remove the Open button on about page

const Header = ({ title, onAdd, showAdd }) => {
    const location = useLocation();

    return (
        <header className='header'>
            <h1>{title}</h1>
            {location.pathname === '/' && <Button 
                onClick={ onAdd } 
                color={showAdd ? 'red' : 'green'} 
                text={showAdd ? 'Close': 'Open'} 
            />} 
        </header>
    )
}

Header.defaultProps = {
    title: 'Task Tracker'
}

Header.propTypes = {
    title: PropTypes.string.isRequired
}

/* const headingStyle = {
    color: 'red',
    backgroundColor: 'yellow'
} */


export default Header

