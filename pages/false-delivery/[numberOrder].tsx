import React from 'react';
import { Layout } from '@/components/layouts';
import { GetStaticPaths, GetStaticProps } from 'next';
import { FormCase, DataFalseDelivery } from '@/interfaces';
import { FalseDeliveryProvider } from '@/context/false-delivery';
import { FalseDelivery } from '@/components/false-delivery';

interface Props {
    typeForm: FormCase;
    dataContract: DataFalseDelivery[];
}

const FalseDeliveryHome = ({ typeForm, dataContract }: Props) => {
    return (
        <FalseDeliveryProvider dataApi={ dataContract }>
            <Layout
                title={ typeForm }
            >
                <FalseDelivery/>
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
    const { numberOrder } = params as { numberOrder: string };

    // llamado api y verificar los llamados a apis
    const apiFake: DataFalseDelivery[] = [ // ejemplo respuesta api
        {
            "subOrder": "wena",
            "sellerName": "Falabella",
            "products": [
                {
                    "image": "http://asdasdasd.com",
                    "name": "lavadora",
                    "formatedPrice": "$300.000",
                    "brand": "samsung",
                    "quantity": 3,
                    "enabled": true            
                }
            ]
        }
    ]

    return {
        props: {
            typeForm: { type: 'FCOM-false-delevery', value: 'Falsa Entrega' },
            dataContract: apiFake
        },
        revalidate: 60 // segundos para recargar la informacion.
    }
}
