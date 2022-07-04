import '../styles/globals.css'
import { useRouter } from "next/router";
import Link from 'next/link'

function MyApp({ Component, pageProps }) {
  const { pathname } = useRouter();
  return (
    <div className='flex justify-center items-center'>
      <div className='lg:w-[40%] relative w-full sm:w-[80%] mx-auto bg-white'>
        <Component {...pageProps}></Component>
        {/* FIXED MENU */}
        <div className="fixed w-full sm:w-[80%] lg:w-[40%] bg-white flex items-center justify-between px-5 bottom-0 gap-5 p-5">
          <div className="flex flex-col items-center">
            {pathname === "/presensi" ? (
              <>
                <Link href="/presensi">
                  <div className="flex items-center justify-center flex-col cursor-pointer">
                    <img className="w-[3rem] h-[3rem]" src="/images/presensiLight.svg" alt="" />
                    <div className="font-semibold text-dark-blue">Presensi</div>
                  </div>
                </Link>
              </>
            ) : (
              <>
                <Link href="/presensi">
                  <div className="flex items-center justify-center flex-col cursor-pointer">
                    <img className="w-[3rem] h-[3rem]" src="/images/presensiDark.svg" alt="" />
                    <div className="text-[#CCCCCC]">Presensi</div>
                  </div>
                </Link>
              </>
            )}
          </div>
          <div className="flex flex-col items-center">
            {pathname === "/pengajuan" ? (
              <>
                <Link href="/pengajuan">
                  <div className="flex items-center justify-center flex-col cursor-pointer">
                    <img className="w-[3rem] h-[3rem]" src="/images/pengajuanLight.svg" alt="" />
                    <div className="font-semibold text-dark-blue">Pengajuan</div>
                  </div>
                </Link>
              </>
            ) : (
              <>
                <Link href="/pengajuan">
                  <div className='flex flex-col items-center justify-center cursor-pointer'>
                    <img className="w-[3rem] h-[3rem]" src="/images/pengajuanDark.svg" alt="" />
                    <div className="text-[#CCCCCC]">Pengajuan</div>
                  </div>
                </Link>
              </>
            )}
          </div>
          <div className="flex flex-col items-center">
            {pathname === "/laporan" ? (
              <>
                <Link href="/laporan">
                  <div className="flex items-center justify-center flex-col cursor-pointer">
                    <img className="w-[3rem] h-[3rem]" src="/images/laporanLight.svg" alt="" />
                    <div className="font-semibold text-dark-blue">Laporan</div>
                  </div>
                </Link>
              </>
            ) : (
              <>
                <Link href="/laporan">
                  <div className="flex items-center justify-center flex-col cursor-pointer">
                    <img className="w-[3rem] h-[3rem]" src="/images/laporanDark.svg" alt="" />
                    <div className="text-neutral">Laporan</div>
                  </div>
                </Link>
              </>
            )}
          </div>
          <div className="flex flex-col items-center">
            {pathname === "/akun" ? (
              <>
                <Link href="/akun">
                  <div className="flex items-center justify-center flex-col cursor-pointer">
                    <img className="w-[2rem] h-[2rem]" src="/images/akunLight.svg" alt="" />
                    <div className="font-semibold text-dark-blue">Akun</div>
                  </div>
                </Link>
              </>
            ) : (
              <>
                <Link href="/akun">
                  <div className="flex items-center justify-center flex-col cursor-pointer">

                    <img className="w-[3rem] h-[3rem]" src="/images/akunDark.svg" alt="" />
                    <div className="text-neutral">Akun</div>
                  </div>
                </Link>
              </>
            )}
          </div>
        </div>
      </div>
    </div>
  )
}

export default MyApp
