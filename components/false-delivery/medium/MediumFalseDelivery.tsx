import React, { useContext, useEffect, useState } from 'react';
import { FalseDeliveryContext } from '@/context/false-delivery';

export const MediumFalseDelivery = () => {

    const { selectProducts, dataApi} = useContext(FalseDeliveryContext);
    const [ productSelectByOrder, setProductSelectByOrder ] = useState<[]>();

    useEffect(() => {
        const arrayOrder = dataApi.map((order) => order.subOrder) // puedo llevarlo al context
        const nuevoArrayProductByOrder = arrayOrder.map((order) => {
            const filter = selectProducts.filter((product) => product.order === order);
            if(filter.length > 0) {
                return { 
                    [order]: filter
                }
            }
        })
        setProductSelectByOrder(nuevoArrayProductByOrder.filter(item => item) as [])     
    }, [])

    return (
        <>
            MediumFalseDelivery
            <br/><br/>
            {
                productSelectByOrder?.map((products, index) => (
                    // llamar a card de sgunda vista
                    <div key={index}>{ JSON.stringify(products) }<br/><br/></div>
                ))
            }
        </>
    )
}
