import React from 'react';

interface Props {
    seller: string;
    subOrder: string;
}

export const HeaderOrder = ({ seller, subOrder }: Props) => {
    return (
        <div>
            Pedido: { subOrder }
            <br/>
            Vendido por: { seller }
            <br/><br/>
        </div>
    )
}
