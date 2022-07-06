import React from "react";
import { useRouter } from "next/router";

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
          <img src="/images/edit.svg" alt="" />
        </div>
      </div>
      <div className="p-5">
        <div className="flex gap-5 items-center">
          <img src="/images/photo.png" alt="" />
          <div className="flex flex-col gap-3 w-full">
            <div>
              <div>NIK</div>
              <div className="w-full bg-gray p-3 rounded-md">1000221</div>
            </div>
            <div>
              <div>TBM</div>
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
