
import React, { useState, useRef } from 'react';
import {useHistory} from 'react-router-dom';
//import Img from 'react-image';
import axios from 'axios';


import Burger from "../../assets/burger.png";

//import H1 from '../../components/Title/style'

import { H1, Container, Image, ContainerItens, PedidoLabel, PedidoInput, ClienteLabel, ClienteInput, PedidoButton } from "./styles";

function Home() {

    //const newOrders = [];
    const [newOrders, setNewOrders] = useState([]);
    const history = useHistory()

    const inputOrder = useRef()
    const inputClient = useRef()




//**************************************************************************************************************************** */
    async function addNewOrder() {
       
        const {data: newOrder} = await axios.post("http://localhost:3001/order",{
            order: inputOrder.current.value,
            clientName: inputClient.current.value,
        });

        setNewOrders([...newOrders, newOrder,])  

        history.push('/order')

       
    }

//***************************************************************************************************************** */

    

//***************************************************************************************************************** */
   
//****************************************************************************************************************** */
    return (
        <Container>

            <Image src={Burger} />

            <H1>Faça seu pedido</H1>

            <ContainerItens>

                <PedidoLabel>Pedido</PedidoLabel>
                <PedidoInput ref={inputOrder} placeholder="Informe o pedido" />

                <ClienteLabel>Nome do Cliente</ClienteLabel>
                <ClienteInput ref={inputClient} placeholder="Nome do cliente" />

                <PedidoButton onClick={addNewOrder}>Pedido</PedidoButton>

                

               

            </ContainerItens>




        </Container>
    )

}
export default Home