import React from "react";
import { useRouter } from "next/router";
import Image from "next/image";

function TukarDinas() {
  const route = useRouter();
  return (
    <div className="w-full h-screen flex flex-col">
      <div className="flex items-center gap-5 p-5">
        <Image width={25} height={25} onClick={() => route.back()} className="cursor-pointer" src="/images/back.svg" alt="" />
        <div>
          <div className="font-bold text-[1.25rem]">Formulir Pengajuan</div>
          <div>Pengajuan Tukar Dinas</div>
        </div>
      </div>
      <div className="bg-light-blue p-5">
        <div className="flex flex-col gap-5">
          <div>
            <div className="font-bold">Tanggal Tukar Dinas</div>
            <input type="date" className="p-5 bg-white w-full" />
          </div>
          <div>
            <div className="font-bold">NIK / Nama Tukar Karyawan Partner</div>
            <input type="text" className="p-5 bg-white w-full" />
          </div>
          <div>
            <div className="font-bold">Keterangan / Alasan</div>
            <textarea type="text" className="p-5 h-[15rem] bg-white w-full" />
          </div>
        </div>
      </div>

      <div className="p-5 mt-auto">
        <button className="w-full py-5 rounded-md bg-dark-blue flex items-center justify-center text-white">Ajukan Tukar Dinas</button>
      </div>
    </div>
  );
}

export default TukarDinas;
