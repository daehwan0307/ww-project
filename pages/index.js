import Head from 'next/head'
import Image from 'next/image'
import KakaoLoginButton from '../components/KakaoLoginButton'


export default function Home() {
  return (
    <div className='mt-16'>
      <div className='flex flex-col items-center items-center'>
      <Image src="/favicon.ico" width={200} height={300}/>
      </div>
      
      <div className='flex mt-8 flex-col items-center'>
      <KakaoLoginButton/>
      </div>

      <div className='flex flex-col  mt-4 '>
        <div className='grid grid-cols-2 w-full'>
          <button>
            이메일로 회원가입
          </button>
          <button>
            이메일로 로그인
          </button>
        </div>
      </div>
    
    </div>
  )
}
