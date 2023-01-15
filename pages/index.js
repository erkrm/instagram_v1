import Head from 'next/head';
import Image from 'next/image';
import { Inter } from '@next/font/google';
import Header from '@/components/Header';
import Feed from '@/components/Feed';

const inter = Inter({ subsets: ['latin'] });

export default function Home() {
  return (
    <div className="bg-gray-50 min-h-screen">
      <Head>
        <title>Instagram App</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      {/**HEADER */}
      <Header />
      {/**FEED */}
      <Feed />

      {/**MODAL */}
    </div>
  );
}
