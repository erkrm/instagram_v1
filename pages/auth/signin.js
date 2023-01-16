import { getProviders, signIn } from 'next-auth/react';
import Header from '@/components/Header';

export default function signin({ providers }) {
  return (
    <>
      <Header />
      <div className="flex justify-center space-x-7 mt-20">
        <img
          className="hidden object-cover rotate-6 md:inline-flex md:w-58"
          src="https://h5s5g2i6.stackpathcdn.com/wp-content/uploads/2022/08/pic03.png"
          alt="instagram"
        />
        <div className="">
          {Object.values(providers).map((provider) => (
            <div key={provider.name} className="flex flex-col items-center">
              <img
                className="w-32 object-cover"
                src="https://www.caranoia.com/wp-content/uploads/2021/02/Logo-Instagram.png"
                alt="instagram"
              />
              <p className="text-sm italic my-10 text-center">
                This app is created for learning purposes
              </p>
              <button
                onClick={() => signIn(provider.id, { callbackUrl: '/' })}
                className="bg-red-500 rounded-lg p-3 text-white hover:bg-red-700 whitespace-nowrap"
              >
                Sign in with {provider.name}
              </button>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}

export async function getServerSideProps(context) {
  const providers = await getProviders();
  return {
    props: { providers },
  };
}
