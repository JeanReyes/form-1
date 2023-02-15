import { ProductFalseDeliveryId } from '@/interfaces';
import React, { useContext, useEffect } from 'react';
import { InputCheck } from './InputCheck';

interface Props {
    product: ProductFalseDeliveryId;
    header: string;
}

export const Product = ({ product, header }: Props) => {
    // console.log(product);
    
    // bloquear
    return (
        <div className='aling-div'>
            <InputCheck value='product' disable={product.enabled ? false : true} header={ header } name={product.id} product={ product }/>
            { JSON.stringify(product) }
        </div>
    )
}
