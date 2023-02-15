
import { ProductFalseDeliveryId } from '@/interfaces';
import { FalseDeliveryState, TypeStep } from './';

export type ActionStep = { type: 'upd-step', payload: TypeStep }
| { type: 'add-product', payload: { order: string, product: ProductFalseDeliveryId } }
| { type: 'remove-product', payload: { order: string, product: ProductFalseDeliveryId } }
| { type: 'add-products', payload: { order: string, products: ProductFalseDeliveryId[] } }
| { type: 'remove-products', payload: { order: string, products: ProductFalseDeliveryId[] } }

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
                selectProducts: [ ...state.selectProducts, ...action.payload.products.filter((prod) => { if (!state.selectProducts.includes(prod)) return prod  })]
            }
        case 'remove-products': 
            
            const orders = state.allOrder.filter(order => (order !== action.payload.order))
            const products = state.selectProducts.filter((product) => { if (!action.payload.products.includes(product)) return product })
            
            return {
                ...state,
                allOrder: orders,
                selectProducts: products 
            }
        case 'add-product':
            const prueba = state.selectProducts.filter((prod) => { if (prod.id === action.payload.product.id) return prod  }) 
            console.log("prueba", prueba);
            
            return {
                ...state,
                selectProducts: [...state.selectProducts, action.payload.product] //state.selectProducts.filter((prod) => { if (prod.id !== action.payload.product.id) return prod  }) 
            }
        case 'remove-product': 
            console.log("remove un product");
            
            return {
                ...state,
                selectProducts: state.selectProducts.filter((product) => { if (action.payload.product.id !== product.id) return product })
            }
    
        default: return state;
    }
}