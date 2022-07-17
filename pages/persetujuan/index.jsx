import { useRouter } from "next/router";
import React from "react";
import Image from "next/image";

function Persetujuan() {
  const router = useRouter();
  return (
    <div className="w-full h-screen">
      <div className="p-5">
        <div className="flex gap-5 items-center">
          <Image width={25} height={25} onClick={() => router.back()} className="cursor-pointer" src="images/back.svg" alt="" />
          <div>
            <div className="font-bold text-[1.25rem]">Perlu Persetujuan</div>
            <div>Pengajuan Tukar Dinas</div>
          </div>
        </div>
      </div>
      <div className="p-5 bg-light-blue">
        <div className="text-semi-blue">Status Pengajuan</div>
        <div className="flex gap-3 items-center p-2 mt-3 w-full rounded-full border-[1px] border-semi-red bg-light-red">
          <Image width={25} height={25} src="images/warning.svg" alt="" />
          <div className="text-[#4F4F4F]">Permintaan Tukar Dinas sedang menunggu untuk disetujui</div>
        </div>
      </div>
      <div className="mt-3 p-5 bg-light-blue flex flex-col gap-2">
        <div>
          <div className="font-semibold text-dark-blue">Tanggal Pengajuan Tukar Dinas</div>
          <input className="mt-3 w-full p-4 rounded-md" value={"16/19/23"}></input>
        </div>
        <div>
          <div className="font-semibold text-dark-blue">NIK Yang Mengajukan</div>
          <input className="mt-3 w-full p-4 rounded-md" value={"12220001 Veronica Yulian"}></input>
        </div>
        <div>
          <div className="font-semibold text-dark-blue">Perubahan Waktu Kerja</div>
          <input className="mt-3 w-full p-4 rounded-md" value={"/Jam"}></input>
        </div>
        <div>
          <div className="font-semibold text-dark-blue">Alasan Tukar Dinas</div>
          <textarea className="mt-3 w-full p-4 rounded-md" value={"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras tincidunt in pretium eros, fusce dignissim tincidunt sit aenean. Varius porttitor sed id risus. "} />
        </div>
      </div>
    </div>
  );
}

export default Persetujuan;
