import Head from 'next/head';


function Login() {
    return (
        <div>
        <Head>
        <title>Netflix</title>
        <meta name="description" content="awsome netflix app!" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <img
        src="https://rb.gy/ulxxee"
        className="absolute left-4 top-4 cursor-pointer object-contain md:left-10 md:top-6"
        width={150}
        height={150}
      />
        </div>
    );
}

export default Login;