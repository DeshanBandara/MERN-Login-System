import React from "react";
import Style from './style.css'

function Home() {
    return(
        //<h2>Home Page Component</h2>
        <div>

            <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
                <div className="container">
                    <a className="navbar-brand" href="#">Your Logo</a>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarNav">
                        <ul className="navbar-nav ml-auto">
                            <li className="nav-item active">
                                <a className="nav-link" href="#">Home </a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="#">About</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="#">Services</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="#">Contact</a>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>

            <div>
                <main>
                    <h1 className="tx">Welcome to the Home Page</h1>
                </main>
            </div>

            <div>
                <footer className="footer text-center">
                    <div className="container">
                        <p>Deshan&copy; 2023 My first MERN project</p>
                        <p>sudheeradeshan1013@gmail.com</p>
                    </div>
                </footer>
            </div>
        </div>

        

    
        
        
    

    
    
    )
}

export default Home;