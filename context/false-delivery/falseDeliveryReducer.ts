
import { ProductFalseDeliveryId } from '@/interfaces';
import { FalseDeliveryState, TypeStep } from './';

export type ActionStep = { type: 'upd-step', payload: TypeStep }
| { type: 'add-products', payload: { order: string, products: ProductFalseDeliveryId[] } }
| { type: 'remove-products', payload: { order: string, products: ProductFalseDeliveryId[] } }
| { type: 'add-product', payload: { order: string, product: ProductFalseDeliveryId } }
| { type: 'remove-product', payload: { order: string, header: string, product: ProductFalseDeliveryId } }

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
                // selectProducts: [ ...state.selectProducts, ...action.payload.products.filter((prod) => { if (!state.selectProducts.includes(prod) ) return prod  })]
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
                selectProducts: [...state.selectProducts, action.payload.product] //state.selectProducts.filter((prod) => { if (prod.id !== action.payload.product.id) return prod  }) 
            }
        case 'remove-product': 
            return {
                ...state,
                allOrder: state.allOrder.filter(header => header !== action.payload.header),
                selectProducts: state.selectProducts.filter((product) => { if (action.payload.product.id !== product.id) return product })
            }
    
        default: return state;
    }
}