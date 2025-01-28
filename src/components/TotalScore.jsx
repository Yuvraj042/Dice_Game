import style from "styled-components";

const TotalScore = ({ score }) => {
  return (
    <ScoreContainer>
      <h1>{score}</h1>
      <p>Total Score</p>
    </ScoreContainer>
  );
};

export default TotalScore;

const ScoreContainer = style.div`
max-width: 200px;
text-align: center;
h1{
font-size: 60px;
line-height: 100px;
}
p{
font-size: 20px;
font-weight: 500px;
}


`;
