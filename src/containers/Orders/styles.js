import styled from "styled-components";


export const Container = styled.div` 
   background: #0A0A10;
   //background: blue;
   display: flex;
   flex-direction: column;
   align-items: center;
   gap: 20px;
   width:414 px;
   height:896 px;
;
`;

export const Image = styled.img` 
   width:246px;
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


export const PedidoButton = styled.button`
   width: 342px;
   height: 68px;
   background: #FFFFFF24;
   margin-top: 5px;



   font-family: Roboto;
   border-radius: 8px;
   font-size: 17px;
   font-weight: 900;
   line-height: 3px;
   letter-spacing: 0px;
   text-align: center;
   color:#FFFFFF;
   cursor: pointer;

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

export const Order = styled.li `
   display: flex;
   justify-content: space-around;
   align-items:center;

   width: 342px;
   height: 101px;
   border-radius: 14px;
   margin-bottom: 20px;
   margin-top: 20px;

   background: #FFFFFF40;

   box-shadow: 0px 4px 4px 0px #00000040;

   
   p{
      font-size: 18px;
      font-weight: 300;
      line-height: 21px;
      letter-spacing: 0px;
      text-align: left;
      color: #FFFFFF;

   }

   button{
      background: none;
      border:none;
      cursor: pointer;
   }



`;
