import React from 'react';
import { useTheme } from './themeContext';
import './style.css';

const App = () => {
    const { theme, toggleTheme } = useTheme();

    return (
        <div style={{
            backgroundColor: theme === 'blue' ? '#0000ff' : '#08090b',
            color: theme === 'blue' ? '#ffffff' : '#ffffff',
        }}>
            <header>
                <h1>Mintlify</h1>
                <button onClick={toggleTheme} className="btn-primary">Toggle Blue Theme</button>
            </header>
            <main>
                <p>Welcome to the Mintlify application!</p>
            </main>
        </div>
    );
};

export default App;