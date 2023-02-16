import React from 'react';
import { ProductFalseDeliveryId } from '@/interfaces';
import { Product } from '@/components/ui';

interface Props {
    header: string;
    products: ProductFalseDeliveryId[];
}

export const ListProducts = ({ products, header }: Props) => {
    
    return (
        <>
            {
                products.map((product, index) => (
                    <Product header={ header } key={index} product={ product } />
                ))
            }
            <br/><br/><br/><br/>
        </>
    )
}
