import React from 'react';
import { HeaderOrder } from './HeaderOrder';
import { DataFalseDeliveryId } from '@/interfaces';
import { InputCheck } from '@/components/ui';
import { ListProducts } from './ListProducts';
import { initStyle } from './InitFalseDelivery.style';

/** COMPONENTS
 * Order
 * Ckeck
 *  - HeaderOrder
 *  - ListProducts
 *   - Products
 */
interface Props {
    id: string;
    order: DataFalseDeliveryId;
}

export const Order = ({ order }: Props) => {

    const { id, sellerName, subOrder, products } = order;

    return (
        <div>
            <div className="aling-div">  
                { products.length > 1 && <InputCheck disable={ false } name={ id } header={ id } /> }
                <HeaderOrder seller={ sellerName } subOrder={ subOrder }/>
            </div>
            <div>
                <ListProducts header={ id } products={ products }/>
            </div>
            <style jsx>{ initStyle }</style>
        </div>
    )
}
