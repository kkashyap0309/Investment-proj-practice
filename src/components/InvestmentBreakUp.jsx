import { formatter, calculateInvestmentResults } from "../util/investment.js";

function InvestmentBreakUp({ inputValues }) {
  const results = evaluateDataFromResult(
    calculateInvestmentResults(inputValues)
  );

  function evaluateDataFromResult(calculatedResult) {
    let totIntrest = 0;
    return calculatedResult.map((res) => {
      const { interest } = res;
      totIntrest += interest;

      return {
        ...res,
        totalIntrest: totIntrest,
      };
    });
  }

  return (
    <table id="result">
      <thead>
        <tr>
          <th>Year</th>
          <th>Investment Value</th>
          <th>Intrest(Year)</th>
          <th>Total Intrest</th>
          <th>Invested Capital</th>
        </tr>
      </thead>
      <tbody>
        {results.map((result) => {
          return (
            <tr key = {result.year}>
              <td>{result.year}</td>
              <td>{formatter.format(result.valueEndOfYear)}</td>
              <td>{formatter.format(result.interest)}</td>
              <td>{formatter.format(result.totalIntrest)}</td>
              <td>
                {formatter.format(result.valueEndOfYear - result.totalIntrest)}
              </td>
            </tr>
          );
        })}
      </tbody>
    </table>
  );
}

export default InvestmentBreakUp;
