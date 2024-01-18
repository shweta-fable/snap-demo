import { lazy, startTransition } from 'react';
import { Link } from 'react-router-dom';
import { Helmet, HelmetProvider } from 'react-helmet-async';

const Another = lazy(()=> import('./Another'))

const Mind = () => {
    return (
        <HelmetProvider>
            <div className="App" style={{backgroundColor:'yellow'}}>
                <Helmet title="Minds">
                    <meta name="description" content="The content you are looking for minds be found." />
                </Helmet>
                <header className="App-header">
                    <p>
                        Mind page
                    </p>
                    <div onClick={() => {

                    }}>
                        <Link to="/">client Dashboard Home</Link>
                        <a
                            className="App-link"
                            href="/"
                            rel="noopener noreferrer"
                        >
                             a Minds page
                        </a>
                    </div>
                </header>
                <div>
                    <Another />
                </div>
            </div>
        </HelmetProvider>
    )
}

export default Mind