import { useReducer } from 'react';
import { DataFalseDeliveryId, ProductFalseDelivery, ProductFalseDeliveryId } from '@/interfaces';
import { FalseDeliveryContext, falseDeliveryReducer } from './';

export type TypeStep = 'init' | 'medium' | 'finish';

export interface FalseDeliveryState {
    step: TypeStep,
    allOrder: string[];
    selectProducts: ProductFalseDeliveryId []
}

const FALSE_DELIVERY_INITIAL_STATE: FalseDeliveryState = {
    step: 'init',
    allOrder: [],
    selectProducts: []
}

interface ProviderProps {
    dataApi: DataFalseDeliveryId[] // colocar tipo por el momento es solo el numero de order
    children: JSX.Element
}

export const FalseDeliveryProvider = ({ children, dataApi }: ProviderProps) => {

   const [ state, dispatch ] = useReducer( falseDeliveryReducer, FALSE_DELIVERY_INITIAL_STATE );

   const changeStep = (value: TypeStep) => {
        dispatch({ type: 'upd-step', payload: value })
   }

   const onQuantityProduct = (quantity: number, name: string) => {
        dispatch({ type: 'upd-quantity', payload: { quantity, name }})
   }

   const onChangeRadioOneProduct = (name: string, header: string) => {
        dispatch({ type: 'uncheck-product', payload: { name, header } })
   }

   const onChangeRadioHeader = (id: string, checked: boolean, header: string, product?: ProductFalseDeliveryId) => {
      // validar que es order o product
      let match = dataApi.find(order => order.id === id);

      if (product) {
         if(checked) { // add
            dispatch({
               type: 'add-product',
               payload: {
                  order: id,
                  product: product
               }
            })
         } else { // remove
            dispatch({
               type: 'remove-product',
               payload: {
                  order: id,
                  header: header,
                  product: product
               }
            })
         } 
      } else {
         if(checked) { // add
            dispatch({
               type: 'add-products',
               payload: {
                  order: id,
                  products: match!.products
               }
            })
         } else { // remove
            dispatch({
               type: 'remove-products',
               payload: {
                  order: id,
                  products: match!.products
               }
            })
         }
      }
  }  
  
   return(
       <FalseDeliveryContext.Provider value={{
            ...state,
            selectProducts: state.selectProducts,
            dataApi,
            changeStep,
            onChangeRadioHeader,
            onQuantityProduct,
            onChangeRadioOneProduct,
       }}>
           { children }
       </FalseDeliveryContext.Provider>
   )
}