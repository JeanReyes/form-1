import React, { useContext } from 'react';
import { ProductFalseDeliveryId } from '@/interfaces';
import { FalseDeliveryContext } from '@/context/false-delivery';
import { Product } from '@/components/ui/Product';

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
            <br/><br/>
        </>
    )
}
