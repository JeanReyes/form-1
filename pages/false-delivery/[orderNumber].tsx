import React from 'react';
import { Layout } from '@/components/layouts';
import { GetStaticPaths, GetStaticProps } from 'next';
import { FormCase, DataFalseDeliveryId } from '@/interfaces';
import { FalseDeliveryProvider } from '@/context/false-delivery';
import { FalseDelivery } from '@/components/false-delivery';
import { apiFake } from '@/api/false-delivery';

interface Props {
    orderNumber: string;
    typeForm: FormCase;
    dataContract: DataFalseDeliveryId[];
}

const FalseDeliveryHome = ({ orderNumber, typeForm, dataContract }: Props) => {
    return (
        <FalseDeliveryProvider dataApi={ dataContract }>
            <Layout
                title={ typeForm }
            >
                <>
                    ORDER: {orderNumber}
                    <FalseDelivery/>
                </>
            </Layout>
        </FalseDeliveryProvider>
    )
}

export default FalseDeliveryHome;

export const getStaticPaths: GetStaticPaths = async () => { 

    return {
        paths: [],
        fallback: 'blocking'  // 'blocking' = para que pueda aceptar mas solicituides / false se restringe solo a los paths.
    }
}

export const getStaticProps: GetStaticProps = async ({ params }) => {
    const { orderNumber } = params as { orderNumber: string };

    // llamado api y verificar los llamados a apis
    

    return {
        props: {
            orderNumber,
            typeForm: { type: 'FCOM-false-delevery', value: 'Falsa Entrega' },
            dataContract: apiFake()
        },
        revalidate: 60 // segundos para recargar la informacion.
    }
}
