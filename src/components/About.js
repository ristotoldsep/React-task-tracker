import { Link } from 'react-router-dom'; //Going to use LINK instead of a href, to prevent refreshing the page!

const About = () => {
    return (
        <div style={{textAlign: "center"}}>
            <h4>This page was created by: ristotoldsep</h4><br></br>
            <p>Github: <a href="https://github.com/ristotoldsep">ristotoldsep</a></p>
            <br></br>
            <Link to="/">Go back</Link>
        </div>
    )
}

export default About
