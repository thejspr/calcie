import PropTypes from 'prop-types';
import { useState } from 'react';

interface CalculatorProps {
  calcContent: string;
}

export default function Calculator({ calcContent }: CalculatorProps) {
  const calcContentArray = calcContent.split('\n');
  const [results] = useState([]);

  calcContentArray.map((calc: string, index: number) => {
    let extendedCalc;
    let result;

    try {
      // Replace $\d with results
      extendedCalc = calc.replace(/\$\d+/, (match) => {
        return String(results[Number(match.replace('$', '')) - 1]);
      });

      if (extendedCalc.includes('to')) {
        // convert currency
        const matches = extendedCalc.match(/(\d+)([A-Za-z]{3}) to ([A-Za-z]{3})/);

        fetch('https://api.exchangerate-api.com/v4/latest/USD')
          .then((response) => response.json())
          .then((data) => {
              let rate = data.rates[matches[3].toUpperCase()] / data.rates[matches[2].toUpperCase()];
              results[index] = (matches[1] * rate).toFixed(2);
        })
        .catch(error => console.error('Error:', error));
      } else {
        // eslint-disable-next-line no-eval
        result = eval(extendedCalc);
        results[index] = result;
      }
    } catch (e) {
      result = `Error: ${e} | ${extendedCalc}`;
      // results.push(result);
    }
  });

  return (
    <div className="border w-[166px] h-[250px] font-semibold px-2 py-1 leading-7">
      {results.map((res, index) => {
        return <div key={`result-${index.toString()}`}>{res}</div>;
      })}
    </div>
  );
}

Calculator.propTypes = {
  calcContent: PropTypes.string.isRequired,
};
