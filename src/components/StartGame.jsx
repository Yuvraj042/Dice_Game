import style from "styled-components";

const StartGame = ({ toggle }) => {
  return (
    <Container>
      <div>
        <img src="./images/dices 1.png" />
      </div>
      <div className="content">
        <h1>Dice Game</h1>
        <Button onClick={toggle}>Play Now</Button>
      </div>
    </Container>
  );
};
export default StartGame;

const Container = style.div`
  max-width: 1180px;
  height: 100vh;
  display: flex;
  margin: 0 auto;
  align-items: center;

  .content{
  h1{
    font-size:96px;
    white-space: nowrap;
  }
  }

  @media (max-width: 768px) {
    flex-direction: row;
    text-align: left;

    .content {
      h1 {
        font-size: 50px;
      }
    }
      img{
        width: 100%;
      }
  }
      @media (max-width: 1199px) {
      img{
        min-width: 100%;
      }
        .content {
      h1 {
        font-size: 3rem;
      }
      }
`;
const Button = style.button`
background-color: #1f1f1f;
color: white;
padding: 10px 18px;
min-width:220px;
border: none;
border-radius: 5px;
font-size: 16px;
border: 1px solid transparent;
transition: 0.4s background ease-in;
cursor: pointer;
&:hover{
background-color: #fff;
border: 1px solid black;
color: black;
transition: 0.3s background ease-in;
}
 @media (max-width: 768px) {
    min-width: 140px;
    font-size: 12px;
  }
`;
