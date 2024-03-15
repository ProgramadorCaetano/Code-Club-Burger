import styled from "styled-components";



export const Container = styled.div` 
   background: #0A0A10;
  // background: blue;
   display: flex;
   flex-direction: column;
   align-items: center;
   gap: 20px;
   width:414 px;
   height:896 px;
;
`;

export const Image = styled.img` 
   width:342px;
   height: 354px;
   margin-top: 30px;
   
`;

export const H1 = styled.h1` 
   color:white;
   margin-left: 101px;
   margin-right: 100px;
   width:213 px;
   height: 33px;
   font-size: 28px;
   
`;

export const ContainerItens = styled.div`
   
   display: flex;
   flex-direction: column;
   margin-bottom: 56px;
   
   
`;

export const PedidoLabel = styled.p`
   width: 55px;
   height: 22px;
   margin-left: 10px;
   
   font-family: Roboto;
   font-size: 18px;
   font-weight: 700;
   line-height: 22px;
   letter-spacing: -0.40799999237060547px;
   text-align: left;

   
   
`;

export const PedidoInput = styled.input`
   width: 342px;
   height: 58px;
   border-radius: 8px;
   margin-bottom: 42px;

   background: #FFFFFF40;

   box-shadow: 0px 4px 4px 0px #00000040;

   font-family: Roboto;
   font-size: 18px;
   font-weight: 300;
   line-height: 21px;
   letter-spacing: 0px;
   text-align: left;
   padding: 15px;
   color:#FFFFFF;

`;

export const ClienteLabel = styled.p`
   width: 129px;
   height: 22px;
   font-size: 18px;
   margin-left: 10px;

   font-family: Roboto;
   font-size: 18px;
   font-weight: 700;
   line-height: 22px;
   letter-spacing: -0.40799999237060547px;
   text-align: left;

`;

export const ClienteInput = styled.input`
   width: 342px;
   height: 58px;
   border-radius: 8px;
   margin-bottom: 42px;

   background: #FFFFFF40;

box-shadow: 0px 4px 4px 0px #00000040;

font-family: Roboto;
font-size: 18px;
font-weight: 300;
line-height: 21px;
letter-spacing: 0px;
text-align: left;
padding: 15px;
color:#FFFFFF;
`;

export const PedidoButton = styled.button`
   width: 342px;
   height: 68px;
   background: #D93856;

   font-family: Roboto;
   border-radius: 8px;
   font-size: 17px;
   font-weight: 900;
   line-height: 3px;
   letter-spacing: 0px;
   text-align:center;
   color:#FFFFFF;
   cursor:pointer;
   display: flex;
   align-items: center;
   justify-content: center;

   &:hover{
      opacity: 0.8;
   }
   &:active{
      opacity:0.5; 
   }

`;

