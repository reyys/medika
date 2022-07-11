import React from "react";
import { useRouter } from "next/router";

function Lembur() {
  const route = useRouter();
  return (
    <div className="w-full">
      <div className="flex items-center gap-5 p-5">
        <img onClick={() => route.back()} className="cursor-pointer" src="/images/back.svg" alt="" />
        <div>
          <div className="font-bold text-[1.25rem]">Formulir Pengajuan</div>
          <div>Pengajuan Lembur</div>
        </div>
      </div>
      <div className="bg-light-blue p-5">
        <div className="flex flex-col gap-5">
          <div>
            <div className="font-bold">Tanggal Lembur</div>
            <input type="date" className="p-5 bg-white w-full" />
          </div>
          <div>
            <div className="font-bold">Jam Mulai</div>
            <input type="time" className="p-5 bg-white w-full" />
          </div>
          <div>
            <div className="font-bold">Jam Selesai</div>
            <input type="time" className="p-5 bg-white w-full" />
          </div>
          <div>
            <div className="font-bold">Tugas</div>
            <input type="text" className="p-5 bg-white w-full" />
          </div>
          <div>
            <div className="font-bold">Keterangan</div>
            <textarea type="text" className="p-5 bg-white w-full" />
          </div>
        </div>
      </div>

      <div className="p-5">
        <button className="w-full py-5 rounded-md bg-dark-blue flex items-center justify-center text-white">Ajukan Lembur</button>
      </div>
    </div>
  );
}

export default Lembur;
