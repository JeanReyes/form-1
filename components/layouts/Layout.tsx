import React from 'react';
import Head from 'next/head';
import { FormCase } from '@/interfaces';

interface Props {
    children: JSX.Element;
    title?: FormCase;
}

//TODO: determinar estilos generales

export const Layout = ({ children, title }: Props) => {
   
    return (
        <>
            <Head>
                <title>{ title?.value }</title>
            </Head>
            <main>
                { children }
            </main>
        </>
    )
}
