import { Layout } from '@/components/layouts';
import { Inter } from '@next/font/google';

const inter = Inter({ subsets: ['latin'] });


export default function Home() {
    return (
        <Layout>
            <h1> pagina por defecto </h1>
        </Layout>
    )
}
