import { useState } from 'react';
import { MemoryRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';
import Calculator from './components/Calculator';

function Hello() {
  const testCalc = [
    '1+1',
    '2-3',
    '4/2',
    '5*20',
    '$1*2',
    '10DKK to EUR',
    '10EUR to DKK',
    '123usd to eur'
  ];

  const [calcContent, setCalcContent] = useState(testCalc.join('\n'));

  return (
    <div>
      <h1 className="bg-blue-400 text-center text-white py-3">
        Welcome to Calcie!
      </h1>
      <div className="flex p-4">
        <div>
          <h2 className="text-black py-3">Input calculations below</h2>
          <textarea
            cols={40}
            rows={10}
            className="border px-2 py-1 leading-7"
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
      <div className="px-4">
        <h4 className="text-xl">Documentation</h4>
        <p>
          Reference previous results with <code>$1, $2, etc.</code>
        </p>
      </div>
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
