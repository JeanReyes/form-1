import React from 'react';
import { Layout } from '@/components/layouts';
import { GetStaticPaths, GetStaticProps } from 'next';
import { FormCase } from '@/interfaces';

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
    // llamado api y verificar los llamados a apis

    return {
        props: {
            typeForm: { type: 'FCOM-other-form-2', value: 'Other form 2'  },
            numberOrder
        },
        revalidate: 60 // segundos para recargar la informacion.
    }
}
