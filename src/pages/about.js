// Step 1: Import React
import React from "react";
import { Link } from "gatsby";

const pageContainer = {
    width: 1200,
    minHeight: 500,
    
}

/*
export default function About()
{
    return(
        <div>
            <h1>About Us</h1>
            <Link to="/">Back to Home</Link>
        </div>
    )

}
*/

// Step 2: Define your component
const AboutPage = () => {

    return(
        <main style={pageContainer}>
        <title>About Me</title>
        <h1>About Me</h1>
        <p>Hi there! I'm the proud creator of this site, which I built with Gatsby.</p>
        <Link to="/">Back to Home</Link>
        </main>
    )
}

// Step 3: Export your component
export default AboutPage