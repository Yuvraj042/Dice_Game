import style from "styled-components";
const Rules = () => {
  return (
    <RulesContainer>
      <h2>How to play dice game</h2>
      <div className="text">
        <p>Select any number</p>
        <p>Click on Dice</p>
        <p>
          after click on dice if selected number is equal to dice number you
          will get same point as dice
        </p>
        <p>if you get wrong guess, then 2 point will be deducted </p>
      </div>
    </RulesContainer>
  );
};

export default Rules;

const RulesContainer = style.div`
max-width: 800px;
margin: 0 auto;
background-color: #fbf1f1;
padding: 20px;
border-radius: 10px;
h2{
font-size:24px;
font-weight:bold;
}
.text{
margin-top: 24px;
}
`;
