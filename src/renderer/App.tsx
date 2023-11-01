import { useState } from 'react';
import { MemoryRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';
import Calculator from './components/Calculator';

function Hello() {
  const [calcContent, setCalcContent] = useState('1+1\n2-3\n4/2\n5*20\n$1+2');

  return (
    <div>
      <h1 className="bg-blue-400 text-center text-white py-3">
        Welcome to Calcie!
      </h1>
      <div className="flex">
        <div>
          <h2 className="text-black py-3">Input calculations below</h2>
          <textarea
            cols={40}
            rows={10}
            className="border px-2 py-1"
            placeholder="Input mafs here"
            value={calcContent}
            onChange={(e) => setCalcContent(e.target.value)}
          />
        </div>
        <div>
          <h2 className="text-black py-3">Results</h2>
          <Calculator calcContent={calcContent} />
        </div>
      </div>
      <h4 className="text-xl">Documentation</h4>
      <p>
        Reference previous results with <code>$1, $2, etc.</code>
      </p>
    </div>
  );
}

export default function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Hello />} />
      </Routes>
    </Router>
  );
}
