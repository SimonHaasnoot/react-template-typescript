import React from 'react';
import { Footer } from './navigation/Footer';
import Header from './navigation/Header';

export const App: React.FC = () => {
    return (
        <div className="app">
            <Header />

            <div className="container">
                <h1>I am an h1 element</h1>
                <p>I am a paragraph</p>

                <h2>I am an h2 element</h2>
                <p>I am a paragraph</p>

                <h3>I am an h3 element</h3>
                <p>I am a paragraph</p>

                <h4>I am an h4 element</h4>
                <p>I am a paragraph</p>

                <h5>I am an h5 element</h5>
                <p>I am a paragraph</p>

                <a href="http://localhost:3000">I am a link</a>

                <ul>
                    <li>I am a list item</li>
                    <li>I am a list item</li>
                    <li>I am a list item</li>
                </ul>
            </div>

            <Footer />
        </div>
    );
};

export default App;
