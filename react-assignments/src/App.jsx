import React, { useState } from 'react';
import ProfileCardDemo from './components/ProfileCard/ProfileCardDemo';
import ControlledForm from './components/ControlledForm/ControlledForm';
import CounterApp from './components/CounterApp/CounterApp';
import './App.css';

function App() {
  const [activeTab, setActiveTab] = useState('a4');

  return (
    <div className="app-container">
      {/* Clean Light Header & Navigation */}
      <header className="header">
        <h1>React Lab Assignments</h1>
        <nav className="nav-tabs">
          <button
            className={`tab-btn ${activeTab === 'a4' ? 'active' : ''}`}
            onClick={() => setActiveTab('a4')}
          >
            Assignment 4: Profile Card (Props)
          </button>
          <button
            className={`tab-btn ${activeTab === 'a5' ? 'active' : ''}`}
            onClick={() => setActiveTab('a5')}
          >
            Assignment 5: Controlled Form
          </button>
          <button
            className={`tab-btn ${activeTab === 'a6' ? 'active' : ''}`}
            onClick={() => setActiveTab('a6')}
          >
            Assignment 6: Counter (useState)
          </button>
        </nav>
      </header>

      {/* Main Tab Content */}
      <main className="content">
        {activeTab === 'a4' && <ProfileCardDemo />}
        {activeTab === 'a5' && <ControlledForm />}
        {activeTab === 'a6' && <CounterApp />}
      </main>

      <footer className="footer">
        <a href="../index.html">← Back to Assignments Hub</a>
      </footer>
    </div>
  );
}

export default App;
