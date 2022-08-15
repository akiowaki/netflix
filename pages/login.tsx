import { signInAnonymously } from 'firebase/auth';
import Head from 'next/head';
import Image from 'next/image'
import { useState } from 'react';
import { useForm, SubmitHandler } from "react-hook-form";
import useAuth from '../hooks/useAuth';

interface Inputs {
    email:string
    password:string
}

function Login() {
    const [login,setLogin]=useState(false)
    const{ signIn,signUp} =useAuth()

    const { 
        register,
        handleSubmit,
        watch,
        formState: { errors }
    } = useForm<Inputs>();

  const onSubmit: SubmitHandler<Inputs> = async({email,password}) => {
    if(login){
        await signIn(email,password)
    }else{
       await signUp(email,password)
    }
    }

return (
        <div className="relative flex h-screen w-screen flex-col bg-black md:items-center md:justify-center md:bg-transparent">
        <Head>
        <title>Netflix</title>
        <meta name="description" content="awsome netflix app!" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Image
        src="https://rb.gy/p2hphi"
        layout="fill"
        className="-z-10 !hidden opacity-60 sm:!inline"
        objectFit="cover"
      />
      {/* Netflix ロゴ */}
      <img
        src="https://rb.gy/ulxxee"
        className="absolute left-4 top-4 cursor-pointer object-contain md:left-10 md:top-6"
        width={150}
        height={150}
      />

      <form className="relative mt-24 space-y-8 rounded bg-black/75 py-10 px-6 md:mt-0 md:max-w-md md:px-14"
       onSubmit={handleSubmit(onSubmit)}
       >
        <h1 className="text-3xl font-semibold">サインイン</h1>
    <div className='space-y-4'>
        <label className='inline-block w-full'>
            <input type="email" placeholder='E-メール' className='input'
             {...register("email",{required: true})}
              />
               {errors.email && (
              <p className="p-1 text-[13px] font-light  text-orange-500">
                有効なメールアドレスを入力してください。
              </p>
            )}
      
        </label>
        <label className='inline-block w-full'>
        <input type="password" placeholder='パスワード' className='input'
        {...register("password",{required: true})}
        />
        {errors.password && (
              <p className="p-1 text-[13px] font-light  text-orange-500">
                4字以上60字以内の有効なパスワードを入力してください。
              </p>
            )}
        </label>
    </div>

    <button className='w-full rounded bg-[#e50914] py-3 font-semibold'
    onClick={()=>setLogin(true)}
    >
        サインイン
    </button>

    <div className='text-[gray]'>
        まだ登録してない？{' '}
        <button type="submit" className='text-white hover:underline'
        onClick={()=>setLogin(false)}
        >
            ユーザー登録する
        </button>
    </div>
      </form>


        </div>
    );
}

export default Login;