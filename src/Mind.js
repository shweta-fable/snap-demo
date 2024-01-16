import { startTransition } from 'react';
import { Link } from 'react-router-dom';
import { Helmet, HelmetProvider } from 'react-helmet-async';

const Mind = () => {
    return (
        <HelmetProvider>
            <div className="App">
                <Helmet title="Minds">
                    <meta name="description" content="The content you are looking for minds be found." />
                </Helmet>
                <header className="App-header">
                    <p>
                        Mind page
                    </p>
                    <div onClick={() => {

                    }}>
                        <Link to="/">Dashboard Home</Link>
                        <a
                            className="App-link"
                            href="/"
                            rel="noopener noreferrer"
                        >
                            Minds page
                        </a>
                    </div>
                </header>
            </div>
        </HelmetProvider>
    )
}

export default Mind