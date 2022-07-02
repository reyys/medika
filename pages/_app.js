import Menu from '../layout/menu'
import '../styles/globals.css'

function MyApp({ Component, pageProps }) {
  return (
    <div className='flex justify-center items-center'>
      <div className='lg:w-[40%] w-full sm:w-[80%] h-screen mx-auto'>
        <Component {...pageProps} />
        <Menu />
      </div>
    </div>
  )
}

export default MyApp
