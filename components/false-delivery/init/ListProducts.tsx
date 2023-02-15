import React, { useContext, useEffect, useState } from 'react';
import { ProductFalseDeliveryId } from '@/interfaces';
import { Product } from '@/components/ui/Product';
import { FalseDeliveryContext } from '@/context/false-delivery';

interface Props {
    header: string
    products: ProductFalseDeliveryId[];
}

export const ListProducts = ({ products, header }: Props) => {
    const { allOrder, selectProducts } = useContext(FalseDeliveryContext);
    
    return (
        <>
            {
                products.map((product, index) => (
                    <Product header={header} key={index} product={product} />
                ))
            }
            <br/><br/>
        </>
    )
}
