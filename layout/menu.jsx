import React from "react";
import { useRouter } from "next/router";

function Menu() {
  const { pathname } = useRouter();
  console.log(pathname);
  return (
    <>
      {pathname === "/" ? (
        ""
      ) : (
        <div className="w-full fixed bot-0 gap-5 p-5">
          <div className="flex flex-col items-center">
            {pathname === "/presensi" ? (
              <>
                <img className="w-[2rem] h-[2rem]" src="/images/presensiLight.svg" alt="" />
                <div className="font-semibold text-dark-blue">Presensi</div>
              </>
            ) : (
              <>
                <img className="w-[2rem] h-[2rem]" src="/images/presensiDark.svg" alt="" />
                <div className="text-[#CCCCCC]">Presensi</div>
              </>
            )}
          </div>
          <div className="flex flex-col items-center">
            {pathname === "/pengajuan" ? (
              <>
                <img className="w-[2rem] h-[2rem]" src="/images/pengajuanLight.svg" alt="" />
                <div className="font-semibold text-dark-blue">Pengajuan</div>
              </>
            ) : (
              <>
                <img className="w-[2rem] h-[2rem]" src="/images/pengajuanDark.svg" alt="" />
                <div className="text-[#CCCCCC]">Pengajuan</div>
              </>
            )}
          </div>
          <div className="flex flex-col items-center">
            {pathname === "/laporan" ? (
              <>
                <img className="w-[2rem] h-[2rem]" src="/images/laporanLight.svg" alt="" />
                <div className="font-semibold text-dark-blue">Laporan</div>
              </>
            ) : (
              <>
                <img className="w-[2rem] h-[2rem]" src="/images/laporanDark.svg" alt="" />
                <div className="text-neutral">Laporan</div>
              </>
            )}
          </div>
          <div className="flex flex-col items-center">
            {pathname === "/akun" ? (
              <>
                <img className="w-[2rem] h-[2rem]" src="/images/akunLight.svg" alt="" />
                <div className="font-semibold text-dark-blue">Akun</div>
              </>
            ) : (
              <>
                <img className="w-[2rem] h-[2rem]" src="/images/akunDark.svg" alt="" />
                <div className="text-neutral">Akun</div>
              </>
            )}
          </div>
        </div>
      )}
    </>
  );
}

export default Menu;
