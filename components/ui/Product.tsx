import { ProductFalseDeliveryId } from '@/interfaces';
import React, { useContext, useEffect } from 'react';
import { InputCheck } from './InputCheck';

interface Props {
    product: ProductFalseDeliveryId;
    header: string;
}

export const Product = ({ product, header }: Props) => {

    return (
        <div className='aling-div'>
            <InputCheck header={ header } name={product.id} product={product}/>
            { JSON.stringify(product) }
        </div>
    )
}
