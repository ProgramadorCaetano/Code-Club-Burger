
import React, { useState, useEffect } from 'react';
import {useHistory} from 'react-router-dom';
//import Img from 'react-image';
import axios from 'axios';


import Burger2 from "../../assets/burger2.png";
import Trash from "../../assets/trash.svg";



import { H1, Container, Image, ContainerItens, PedidoButton, Order } from "./styles";

function Orders() {

    //const newOrders = [];
    const [newOrders, setNewOrders] = useState([]);

    const history = useHistory();

   



//**************************************************************************************************************************** */
    

//***************************************************************************************************************** */

    useEffect(() => {
        async function fetchOrder(){
            const {data:allOrder} = await axios.get("http://localhost:3001/order");
            setNewOrders(allOrder);
        }

        fetchOrder();
       
    }, [])   

//***************************************************************************************************************** */
    async function deleteOrder(orderId){
        await axios.delete(`http://localhost:3001/order/${orderId}`)

        const delOrders = newOrders.filter((order) => order.id !== orderId);
        setNewOrders(delOrders);
    }

    function goBackPage(){
        history.push('/')
    }
//****************************************************************************************************************** */
    return (
        <Container>

            <Image src={Burger2} />

            <H1>Pedido</H1>

            <ContainerItens>

               

                <ul>
                    {newOrders.map(order => (
                        <Order key={order.id}>
                            <p>{order.order}</p> <p>{order.clientName}</p>

                            <button onClick={() => deleteOrder(order.id)}>
                                <img src={Trash} alt="Lata-de-lixo" />
                            </button>

                        </Order>
                    ))

                    }
                </ul>

                <PedidoButton onClick={goBackPage}>Voltar</PedidoButton>

            </ContainerItens>




        </Container>
    )

}
export default Orders