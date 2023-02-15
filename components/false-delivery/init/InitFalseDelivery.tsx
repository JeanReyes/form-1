import React from 'react';
import { initStyle } from './InitFalseDelivery.style';
import { Order } from './Order';
import { DataFalseDeliveryId } from '@/interfaces';

interface Props {
    orders: DataFalseDeliveryId []
}

export const InitFalseDelivery = ({ orders }: Props) => {

    return (
        <>
            {
                orders.map((order, index) => (
                    <Order key={ index } id={ order.id } order={ order }/>
                ))
            }
            <style jsx>{initStyle}</style>
        </>
    )
}
