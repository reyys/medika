import React from "react";
import { useRouter } from "next/router";
import Link from "next/link";

function Pribadi() {
  const router = useRouter();
  return (
    <div>
      <div className="p-5 bg-gray">
        <div className="flex w-full justify-between items-center">
          <div className="flex items-center gap-5">
            <img onClick={() => router.back()} className="cursor-pointer" src="/images/back.svg" alt="" />
            <div>
              <div className="text-[1.25rem] font-bold">Profil Karyawan</div>
              <div>Pribadi</div>
            </div>
          </div>
          <Link href="/akun/edit">
            <img className="cursor-pointer" src="/images/edit.svg" alt="" />
          </Link>
        </div>
      </div>
      <div className="p-5">
        <div className="flex gap-5 items-center">
          <div className="relative">
            <img className="w-[10rem]" src="/images/photo.png" alt="" />
            <svg className="absolute right-[2%] bottom-[2%] text-[2rem]" xmlns="http://www.w3.org/2000/svg" aria-hidden="true" role="img" width="1em" height="1em" preserveAspectRatio="xMidYMid meet" viewBox="0 0 24 24">
              <path
                fill="white"
                d="m7 17.013l4.413-.015l9.632-9.54c.378-.378.586-.88.586-1.414s-.208-1.036-.586-1.414l-1.586-1.586c-.756-.756-2.075-.752-2.825-.003L7 12.583v4.43zM18.045 4.458l1.589 1.583l-1.597 1.582l-1.586-1.585l1.594-1.58zM9 13.417l6.03-5.973l1.586 1.586l-6.029 5.971L9 15.006v-1.589z"
              />
              <path fill="white" d="M5 21h14c1.103 0 2-.897 2-2v-8.668l-2 2V19H8.158c-.026 0-.053.01-.079.01c-.033 0-.066-.009-.1-.01H5V5h6.847l2-2H5c-1.103 0-2 .897-2 2v14c0 1.103.897 2 2 2z" />
            </svg>
          </div>
          <div className="flex flex-col gap-3 w-full">
            <div>
              <div>NIK</div>
              <div className="w-full bg-gray p-3 rounded-md">1000221</div>
            </div>
            <div>
              <div>TMB</div>
              <div className="w-full bg-gray p-3 rounded-md">2005 - 01 -01</div>
            </div>
          </div>
        </div>
        <div className="mt-3">
          <div>Nama</div>
          <div className="mt-3 p-5 bg-gray w-full rounded-md">Veronica Yuliana, Amd.Kep</div>
        </div>
        <div className="mt-3">
          <div>Tanggal Lahir</div>
          <div className="mt-3 p-5 bg-gray w-full rounded-md">23-07-1979</div>
        </div>
        <div className="mt-3">
          <div>No. Telepon</div>
          <div className="mt-3 p-5 bg-gray w-full rounded-md">087771361883</div>
        </div>
        <div className="mt-3">
          <div>Email</div>
          <div className="mt-3 p-5 bg-gray w-full rounded-md">veronica_ferdiana@yahoo.co.id</div>
        </div>
        <div className="mt-3">
          <div>NPWP</div>
          <div className="mt-3 p-5 bg-gray w-full rounded-md">12.123.123.1.123.000</div>
        </div>
        <div className="mt-3">
          <div>PTKP</div>
          <div className="mt-3 p-5 bg-gray w-full rounded-md">K.2</div>
        </div>
        <div className="mt-3">
          <div>Jamsostek</div>
          <div className="mt-3 p-5 bg-gray w-full rounded-md">00K12345678</div>
        </div>
        <div className="mt-3 pb-24">
          <div>Jabatan</div>
          <div className="mt-3 p-5 bg-gray w-full rounded-md">Staff Nurse Radiodiagnostic Pratama</div>
        </div>
      </div>
    </div>
  );
}

export default Pribadi;
