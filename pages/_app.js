import React from 'react';
import '../styles/globals.css'
import { useRouter } from "next/router";
import Link from 'next/link'
import Image from 'next/image';

function MyApp({ Component, pageProps }) {
  const { pathname } = useRouter();
  const [presensi, setPresensi] = React.useState(false);
  const [oncam, setOncam] = React.useState(false)
  const [hide, setHide] = React.useState(false)

  return (
    <div className='flex justify-center items-center'>
      <div className='lg:w-[40%] relative w-full sm:w-[80%] mx-auto bg-white custom-shadow'>
        <Component oncam={oncam} setOncam={setOncam} hide={hide} setHide={setHide} presensi={presensi} setPresensi={setPresensi} {...pageProps}></Component>
        {/* FIXED MENU */}
        {pathname === "/presensi" || pathname === "/pengajuan" || pathname === "/laporan" || pathname === "/akun"
          ?
          <div className="fixed w-full sm:w-[80%] lg:w-[40%] bg-white flex items-center justify-between px-5 bottom-0 gap-5 p-5">
            <div className="flex flex-col items-center">
              {pathname === "/presensi" ? (
                <>
                  <Link href="/presensi">
                    <div className="flex items-center justify-center flex-col cursor-pointer">
                      <Image width={40} height={40} src="/images/presensiLight.svg" alt="" />
                      <div className="font-semibold text-dark-blue">Presensi</div>
                    </div>
                  </Link>
                </>
              ) : (
                <>
                  <Link href="/presensi">
                    <div className="flex items-center justify-center flex-col cursor-pointer">
                      <Image width={40} height={40} src="/images/presensiDark.svg" alt="" />
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
                      <Image width={40} height={40} src="/images/pengajuanLight.svg" alt="" />
                      <div className="font-semibold text-dark-blue">Pengajuan</div>
                    </div>
                  </Link>
                </>
              ) : (
                <>
                  <Link href="/pengajuan">
                    <div className='flex flex-col items-center justify-center cursor-pointer'>
                      <Image width={40} height={40} src="/images/pengajuanDark.svg" alt="" />
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
                      <Image width={40} height={40} src="/images/laporanLight.svg" alt="" />
                      <div className="font-semibold text-dark-blue">Laporan</div>
                    </div>
                  </Link>
                </>
              ) : (
                <>
                  <Link href="/laporan">
                    <div className="flex items-center justify-center flex-col cursor-pointer">
                      <Image width={40} height={40} src="/images/laporanDark.svg" alt="" />
                      <div className="text-[#CCCCCC]">Laporan</div>
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
                      <Image width={30} height={30} src="/images/akunLight.svg" alt="" />
                      <div className="font-semibold text-dark-blue">Akun</div>
                    </div>
                  </Link>
                </>
              ) : (
                <>
                  <Link href="/akun">
                    <div className="flex items-center justify-center flex-col cursor-pointer">
                      <Image width={40} height={40} src="/images/akunDark.svg" alt="" />
                      <div className="text-[#CCCCCC]">Akun</div>
                    </div>
                  </Link>
                </>
              )}
            </div>
          </div>
          :
          ""
        }

      </div>
    </div>
  )
}

export default MyApp
