import React from 'react';
import { Layout } from '@/components/layouts';
import { FormCase } from '@/interfaces';
import { GetStaticPaths, GetStaticProps } from 'next';

interface Props {
    typeForm: FormCase;
    numberOrder: string
}

const FalseDelivery = ({ typeForm, numberOrder }: Props) => {
    return (
        <Layout
            title={typeForm}
        >
            <h1>order { numberOrder }</h1>
        </Layout>
    )
}

export default FalseDelivery;

export const getStaticPaths: GetStaticPaths = async () => { 

    return {
        paths: [],
        fallback: 'blocking'  // 'blocking' = para que pueda aceptar mas solicituides / false se restringe solo a los paths.
    }
}

export const getStaticProps: GetStaticProps = async ({ params }) => {
    const { numberOrder } = params as { numberOrder: string };
    // llamado api y verificar si existen los datos

    return {
        props: {
            typeForm: { type: 'FCOM-other-form-3', value: 'Other form 3'  },
            numberOrder
        },
        revalidate: 60 // segundos para recargar la informacion.
    }
}
