import React from "react";
import { useRouter } from "next/router";

function Cuti() {
  const route = useRouter();
  return (
    <div className="w-full">
      <div className="flex items-center gap-5 p-5">
        <img onClick={() => route.back()} className="cursor-pointer" src="/images/back.svg" alt="" />
        <div>
          <div className="font-bold text-[1.25rem]">Formulir Pengajuan</div>
          <div>Pengajuan Cuti</div>
        </div>
      </div>
      <div className="bg-light-blue p-5">
        <div className="flex flex-col gap-5">
          <div>
            <div className="font-bold">Jenis Cuti</div>
            <div className="bg-white relative border-light-gray mt-5 border-[1px] drop-shadow-lg rounded-md">
              <select placeholder="Pilih jenis cuti" className="outline-none w-full p-5" style={{ background: "transparent" }}>
                <option>Pilih jenis cuti</option>
                <option>Cuti 2</option>
                <option>Cuti 3</option>
              </select>
              <img className="absolute right-[3%] top-[50%] translate-y-[-50%]" src="/images/dropdown.svg" alt="" />
            </div>
          </div>
          <div>
            <div className="font-bold">Tanggal Cuti</div>
            <input placeholder="Durasi waktu cuti" className="p-5 bg-white w-full" />
          </div>
          <div>
            <div className="font-bold">Alamat Selama Cuti</div>
            <input placeholder="Alamat" className="p-5 bg-white w-full" />
          </div>
          <div>
            <div className="font-bold">No. HP Selama Cuti</div>
            <input placeholder="No. Handphone" className="p-5 bg-white w-full" />
          </div>
        </div>
      </div>
      <div className="mt-2 bg-light-blue p-5">
        <div className="font-bold">Di setujui oleh</div>
        <input placeholder="Input NIK yang menyetujui" className="bg-white rounded-md w-full p-5" />
      </div>
      <div className="pb-32 p-5">
        <button className="w-full py-5 rounded-md bg-dark-blue flex items-center justify-center text-white">Ajukan Cuti</button>
      </div>
    </div>
  );
}

export default Cuti;
