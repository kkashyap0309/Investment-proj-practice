import { useState } from "react";
import InputBox from "./InputBox";
import InvestmentBreakUp from "./InvestmentBreakUp.jsx";
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

  let showInvestmentBreakup = false;
  {
    if (
      inputBoxData.initialInvestment != undefined && inputBoxData.initialInvestment > 0 &&
      inputBoxData.duration != undefined &&  inputBoxData.duration > 0 &&
      inputBoxData.annualInvestment != undefined && 
      inputBoxData.expectedReturn != undefined && inputBoxData.expectedReturn > 0
    ) {
      showInvestmentBreakup = true;
    }
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
      {showInvestmentBreakup ? (
        <InvestmentBreakUp inputValues={inputBoxData} />
      ) : (
        <p className="center">Input cannot be less than zero!</p>
      )}
    </>
  );
}
