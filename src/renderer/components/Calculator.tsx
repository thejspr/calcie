export default function Calculator({ calcContent }) {
    let calcContentArray = calcContent.split('\n');
    let results = []
    calcContentArray.map((calc, index) => {
      let result;
      let excendedCalc = calc;

      try {
        // Replace $\d with results
        let excendedCalc = calc.replace(/\$\d+/, (match) => {
          return results[match.replace('$', '') - 1];
        })
        result = eval(excendedCalc);
      } catch (e) {
        result = 'Error: ' + e + " | " + excendedCalc;
      }

      results.push(result);
    })

    return <>
      <div className="border w-[166px] h-[250px] font-semibold px-2 py-1">
        {results.map((res, index) => {
          return <div key={index}>{res}</div>
        })}
      </div>
    </>
}
