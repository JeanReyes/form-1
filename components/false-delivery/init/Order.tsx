import React from 'react'
import { HeaderOrder } from './HeaderOrder'
import { DataFalseDeliveryId } from '@/interfaces'
import { InputCheck } from '@/components/ui'
import { initStyle } from './InitFalseDelivery.style'
import { ListProducts } from './ListProducts'

/** COMPONENTS
 * Order
 * Ckeck
 *  - HeaderOrder
 *  - ListProducts
 *   - Products
 */
interface Props {
    id: string;
    order: DataFalseDeliveryId
}

export const Order = ({ order }: Props) => {

    const { id, sellerName, subOrder, products } = order;

    return (
        <div>
            <div className="aling-div">
                <InputCheck name={ id } header={ id } />
                <HeaderOrder seller={ sellerName } subOrder={ subOrder }/>
            </div>
            <div>
                <ListProducts header={ id } products={ products }/>
            </div>
            <style jsx>{initStyle}</style>
        </div>
    )
}
