import { startTransition } from 'react';
import { Link } from 'react-router-dom';

const Mind = () => {
    return (
        <div className="App">
            <header className="App-header">
                <p>
                  Mind page
                </p>
                <div onClick={()=>{
                    
                }}>
                    <Link to="/">Dashboard Home</Link>
                <a
                    className="App-link"
                    href="/"
                    rel="noopener noreferrer"
                >
                    Learn React
                </a>
                </div>
            </header>
        </div>
    )
}

export default Mind