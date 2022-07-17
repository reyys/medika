import React from "react";
import { useRouter } from "next/router";
import Image from "next/image";

function Datakeluarga() {
  const router = useRouter();
  return (
    <div>
      <div className="p-5 bg-gray">
        <div className="flex w-full justify-between items-center">
          <div className="flex items-center gap-5">
            <Image width={25} height={25} onClick={() => router.back()} className="cursor-pointer" src="/images/back.svg" alt="" />
            <div>
              <div className="text-[1.25rem] font-bold">Profil Karyawan</div>
              <div>Data Keluarga</div>
            </div>
          </div>
          <Image width={25} height={25} src="/images/edit.svg" alt="" />
        </div>
      </div>
      <div className="p-5">
        <div>
          <div className="mt-3 flex flex-col gap-3">
            <div>Nama Suami/Istri</div>
            <div className="w-full bg-gray p-5 rounded-md">TONI FERDINAN</div>
          </div>
          <div className="mt-3 flex flex-col gap-3">
            <div>Tanggal Lahir Suami/Istri</div>
            <div className="w-full bg-gray p-5 rounded-md">10 April 1979</div>
          </div>
        </div>
        <div className="w-full h-[1px] my-6 bg-light-gray"></div>
        {/* ANAK KE 1  */}
        <div>
          <div className="mt-3 flex flex-col gap-3">
            <div>Nama Anak ke-1</div>
            <div className="w-full bg-gray p-5 rounded-md">Ricardo Ruli Daniel Ferdi</div>
          </div>
          <div className="mt-3 flex flex-col gap-3">
            <div>Tanggal Lahir Anak ke-1</div>
            <div className="w-full bg-gray p-5 rounded-md">10 April 1979</div>
          </div>
        </div>
        <div className="w-full h-[1px] my-6 bg-light-gray"></div>
        {/* ANAK KE 2  */}
        <div className="pb-24">
          <div className="mt-3 flex flex-col gap-3">
            <div>Nama Anak ke-2</div>
            <div className="w-full bg-gray p-5 rounded-md">Ricardo Ruli Daniel Ferdi</div>
          </div>
          <div className="mt-3 flex flex-col gap-3">
            <div>Tanggal Lahir Anak ke-2</div>
            <div className="w-full bg-gray p-5 rounded-md">10 April 1979</div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Datakeluarga;
