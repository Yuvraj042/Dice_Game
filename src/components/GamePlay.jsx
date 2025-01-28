import style from "styled-components";

import NumberSelectors from "./NumberSelectors";
import TotalScore from "./TotalScore";
import RoleDice from "./RoleDice";
import { useState } from "react";
import Rules from "./Rules";

const GamePlay = () => {
  const [score, setScore] = useState(0);
  const [selectNum, setSelectNum] = useState();
  const [currentDice, setCurrentDice] = useState(1);
  const [error, setError] = useState("");
  const [showRules, setShowRules] = useState(false);

  const generateRandomNumber = (min, max) => {
    return Math.floor(Math.random() * (max - min)) + min;
  };

  const roleDice = () => {
    if (!selectNum) {
      setError("You have not selected any Number");
      return;
    }
    const randomNumber = generateRandomNumber(1, 7);
    setCurrentDice((prev) => randomNumber);

    if (selectNum === randomNumber) {
      setScore((prev) => prev + randomNumber);
    } else {
      setScore((prev) => prev - 2);
    }
    setSelectNum(null);
  };

  const resetScore = () => {
    setScore(0);
  };

  return (
    <MainContainer>
      <div className="top_section">
        <TotalScore score={score} />
        <NumberSelectors
          error={error}
          setError={setError}
          selectNum={selectNum}
          setSelectNum={setSelectNum}
        />
      </div>
      <RoleDice currentDice={currentDice} roleDice={roleDice} />
      <div className="btns">
        <button onClick={resetScore} className="btn">
          Reset Score
        </button>
        <button onClick={() => setShowRules((prev) => !prev)} className="btn">
          {showRules ? "Hide" : "Show"} Rules
        </button>
      </div>
      {showRules && <Rules />}
    </MainContainer>
  );
};
export default GamePlay;

const MainContainer = style.main`
padding-top: 70px;
.top_section{
display: flex;
justify-content: space-around;
align-items: end;
}
.btns{
display: flex;
flex-direction: column;
align-items: center;
justify-content: center;
gap: 10px;
padding: 10px 18px;
min-width:220px;
}
.btn{
min-width: 220px;
padding: 5px 18px;



}

`;
