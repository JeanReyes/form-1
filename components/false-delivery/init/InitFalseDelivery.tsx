import React, { useContext } from 'react';
import { initStyle } from './InitFalseDelivery.style';
import { Order } from './Order';
import { DataFalseDeliveryId } from '@/interfaces';
import { FalseDeliveryContext } from '@/context/false-delivery';

interface Props {
    orders: DataFalseDeliveryId []
}

export const InitFalseDelivery = ({ orders }: Props) => {

    const { changeStep, selectProducts } = useContext(FalseDeliveryContext);


    return (
        <>
            {
                orders.map((order, index) => (
                    <Order key={ index } id={ order.id } order={ order }/>
                ))
            }
                <button onClick={() => changeStep('medium')}>seguiente</button>

            {
                selectProducts?.map((arr, index) => (
                    <div key={index}> {JSON.stringify(arr)} <br/> <br/></div>
                ))
            }
        
            <style jsx>{initStyle}</style>
        </>
    )
}
