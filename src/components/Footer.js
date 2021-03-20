import { Link } from 'react-router-dom'; //Going to use LINK instead of a href, to prevent refreshing the page!

const Footer = () => {
    return (
        <footer>
            <p>Copyright &copy; 2021</p>
            <Link to="/about">About</Link>
        </footer>
    )
}

export default Footer
