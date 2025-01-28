import { useState } from "react";
import style from "styled-components";

const NumberSelectors = ({ error, setError, selectNum, setSelectNum }) => {
  const arrNum = [1, 2, 3, 4, 5, 6];

  const numberSelectorHandler = (i) => {
    setSelectNum(i);
    setError("");
  };

  return (
    <NumberSelectorContainer>
      <p className="error">{error}</p>
      <div className="flex">
        {arrNum.map((i) => (
          <Box
            isSelected={i === selectNum}
            key={i}
            onClick={() => numberSelectorHandler(i)}
          >
            {i}
          </Box>
        ))}
      </div>
      <p>Select Number</p>
    </NumberSelectorContainer>
  );
};

export default NumberSelectors;

const NumberSelectorContainer = style.div`
display: flex;
flex-direction: column;
align-items: end;

.flex{
display: flex;
gap: 20px;
}
p{
font-size: 24px;
font-weight: 700px;
}
.error{
color: red;

}

`;

const Box = style.div`
border: 1px solid black;
width: 72px;
height: 72px;
display: grid;
place-items: center;
font-size: 24px;
font-weight: 700;
background-color: ${(props) => (props.isSelected ? "black" : "white")};
color: ${(props) => (props.isSelected ? "white" : "black")};
`;
