
import { ProductFalseDeliveryId } from '@/interfaces';
import { FalseDeliveryState, TypeStep } from './';

export type ActionStep = { type: 'upd-step', payload: TypeStep }
| { type: 'add-products', payload: { order: string, products: ProductFalseDeliveryId[] } }
| { type: 'remove-products', payload: { order: string, products: ProductFalseDeliveryId[] } }
| { type: 'add-product', payload: { order: string, product: ProductFalseDeliveryId } }
| { type: 'remove-product', payload: { order: string, header: string, product: ProductFalseDeliveryId } }
| { type: 'upd-quantity', payload: { quantity: number, name: string }}
| { type: 'uncheck-product', payload: { name: string, header: string }}

export const falseDeliveryReducer = (state: FalseDeliveryState, action: ActionStep): FalseDeliveryState => {
    switch(action.type) {
        case 'upd-step': 
            return {
                ...state,
                step: action.payload
            }
        case 'add-products':
            return {
                ...state,
                allOrder: [ ...state.allOrder, action.payload.order ],
                selectProducts: [ ...state.selectProducts, ...action.payload.products.filter((prod) => { if (!state.selectProducts.includes(prod) && prod.enabled) return prod })]
            }
        case 'remove-products': 
            return {
                ...state,
                allOrder: state.allOrder.filter(order => (order !== action.payload.order)),
                selectProducts: state.selectProducts.filter((product) => { if (!action.payload.products.includes(product)) return product })
            }
        case 'add-product':
            return {
                ...state,
                selectProducts: [...state.selectProducts, action.payload.product]
            }
        case 'remove-product': 
            return {
                ...state,
                allOrder: state.allOrder.filter(header => header !== action.payload.header),
                selectProducts: state.selectProducts.filter((product) => { if (action.payload.product.id !== product.id) return product })
            }
        case 'upd-quantity':
            const newQuantity = state.selectProducts.filter((product) => {
                if (product.id === action.payload.name) {
                    product.quantity = action.payload.quantity;
                }
                return product
            });

            return {
                ...state,
                selectProducts: newQuantity
            }
        case 'uncheck-product': {
            return {
                ...state,
                allOrder: state.allOrder.filter(header => header !== action.payload.header),
                selectProducts: state.selectProducts.filter((product) => { if (action.payload.name !== product.id) return product })
            }
        }
    
        default: return state;
    }
}