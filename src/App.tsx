import React from 'react';
import logo from './logo.svg';

const App: React.FC = () => {
    return (
        <div className="m-auto antialiased font-sans font-serif font-mono text-center">
            <header className="bg-gray-900 min-h-screen flex flex-col items-center justify-center text-white text-2xl">
                <img src={logo} className="App-logo" alt="logo" />
                <p>
                    Edit <code>src/App.tsx</code> and save to reload.
                </p>
                <a className="text-blue-300" href="https://reactjs.org" target="_blank" rel="noopener noreferrer">
                    Learn Taiwlind with React TypeScript
                </a>
            </header>
        </div>
    );
};

export default App;
