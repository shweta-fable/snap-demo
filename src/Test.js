import logo from './logo.svg';
import { Link } from 'react-router-dom';

import { Helmet, HelmetProvider } from 'react-helmet-async';

const Test = () => {
    return (
        <HelmetProvider>
            <div className="App" style={{backgroundColor:'pink'}}>
                <Helmet title="Test">
                    <meta name="description" content="The content you are looking for cannot be found." />
                </Helmet>
                <header className="App-header">
                    <img src={logo} className="App-logo" alt="logo" />
                    <p>
                        <a href='/products'>a Test</a>
                    </p>
                    <Link to="/products">client Dashboard Home</Link>
                    <a
                        className="App-link"
                        href="https://reactjs.org"
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        Learn React
                    </a>
                </header>
            </div>
        </HelmetProvider>
    )
}

export default Test