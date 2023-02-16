import React, { useContext } from 'react';
import { DataFalseDeliveryId } from '@/interfaces';
import { FalseDeliveryContext } from '@/context/false-delivery';
import { Order } from './Order';
import { initStyle } from './InitFalseDelivery.style';

interface Props {
    orders: DataFalseDeliveryId [];
}

export const InitFalseDelivery = ({ orders }: Props) => {

    const { changeStep } = useContext(FalseDeliveryContext);


    return (
        <>
            {
                orders.map((order, index) => (
                    <Order key={ index } id={ order.id } order={ order }/>
                ))
            }
            <button onClick={() => changeStep('medium')}>seguiente</button>
            <style jsx>{initStyle}</style>
        </>
    )
}
