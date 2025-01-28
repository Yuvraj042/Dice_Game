import style from "styled-components";

const RoleDice = ({ roleDice, currentDice }) => {
  return (
    <DiceContainer>
      <div className="dice" onClick={roleDice}>
        <img src={`/images/dice_${currentDice}.png`} alt="Dice 1" />
      </div>
      <p>Click on the Dice to roll</p>
    </DiceContainer>
  );
};

export default RoleDice;

const DiceContainer = style.div`
margin-top: 25px;
display: flex;
flex-direction: column;
align-items: center;

.dice{
cursor: pointer;
}
.dice img{
width: 150px;}

p{
font-size: 20px;
}
`;
