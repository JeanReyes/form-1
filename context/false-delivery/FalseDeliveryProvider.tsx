import { useReducer } from 'react';
import { DataFalseDelivery } from '@/interfaces';
import { FalseDeliveryContext, falseDeliveryReducer } from './';

export type TypeStep = 'init' | 'medium' | 'finish';

export interface FalseDeliveryState {
   step: TypeStep
}

const FALSE_DELIVERY_INITIAL_STATE: FalseDeliveryState = {
   step: 'init'
}

interface ProviderProps {
   dataApi: DataFalseDelivery[] // colocar tipo por el momento es solo el numero de order
   children: JSX.Element
}

export const FalseDeliveryProvider = ({ children, dataApi }: ProviderProps) => {

   const [ state, dispatch ] = useReducer( falseDeliveryReducer, FALSE_DELIVERY_INITIAL_STATE );

   const changeStep = (value: TypeStep) => {
      dispatch({ type: 'upd-step', payload: value })
   }

   return(
       <FalseDeliveryContext.Provider value={{
            ...state,
            dataApi,
            changeStep,
       }}>
           { children }
       </FalseDeliveryContext.Provider>
   )
}