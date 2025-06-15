import { useState } from "react";
import InputBox from "./InputBox";
import InvestmentBreakUp from "./InvestmentBreakUp.jsx";
import { calculateInvestmentResults } from "../util/investment.js";
export default function UserInput() {
  const [inputBoxData, setInputBoxData] = useState({});
  function handleInputboxChange(inputBoxNameAndValue) {
    const { inputName, data } = inputBoxNameAndValue;
    setInputBoxData((prevData) => {
      return {
        ...prevData,
        [inputName]: data,
      };
    });
  }

  let finalResult = null;
  {
    if (
      inputBoxData.initialInvestment != undefined &&
      inputBoxData.duration != undefined &&
      inputBoxData.annualInvestment != undefined &&
      inputBoxData.expectedReturn != undefined
    ) {
      const result = calculateInvestmentResults(inputBoxData);
      finalResult = evaluateDataFromResult(result);
      console.log("calculated result =>  " + finalResult);
    }
  }

  function evaluateDataFromResult(calculatedResult) {
    let totIntrest = 0;
    return calculatedResult.map((res) => {
      const { interest } = res;
      totIntrest += interest;

      return {
        ...res,
        totalIntrest: totIntrest,
        investedCapital: inputBoxData.initialInvestment,
      };
    });
  }

  return (
    <>
      <div id="user-input">
        <div className="input-group">
          <InputBox
            label="INITAL INVESTMENT"
            name="initialInvestment"
            onValueChange={handleInputboxChange}
            inputValue={
              inputBoxData.initialInvestment != undefined
                ? inputBoxData.initialInvestment
                : ""
            }
          />
          <InputBox
            label="ANNUAL INVESTMENT"
            name="annualInvestment"
            onValueChange={handleInputboxChange}
            inputValue={
              inputBoxData.annualInvestment != undefined
                ? inputBoxData.annualInvestment
                : ""
            }
          />
        </div>
        <div className="input-group">
          <InputBox
            label="EXPECTED RETURN"
            name="expectedReturn"
            onValueChange={handleInputboxChange}
            inputValue={
              inputBoxData.expectedReturn != undefined
                ? inputBoxData.expectedReturn
                : ""
            }
          />
          <InputBox
            label="DURATION"
            name="duration"
            onValueChange={handleInputboxChange}
            inputValue={
              inputBoxData.duration != undefined ? inputBoxData.duration : ""
            }
          />
        </div>
      </div>
      {finalResult !== null ? (
        <InvestmentBreakUp results={finalResult} />
      ) : (
        <></>
      )}
    </>
  );
}
