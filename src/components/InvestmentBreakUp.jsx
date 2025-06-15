import { formatter } from "../util/investment.js";
function InvestmentBreakUp({ results }) {
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
            <tr>
              <td>{result.year}</td>
              <td>{formatter.format(result.valueEndOfYear)}</td>
              <td>{formatter.format(result.interest)}</td>
              <td>{formatter.format(result.totalIntrest)}</td>
              <td>{formatter.format(result.investedCapital)}</td>
            </tr>
          );
        })}
      </tbody>
    </table>
  );
}

export default InvestmentBreakUp;
