import React from "react";
import { useRouter } from "next/router";

function DPMK() {
  const router = useRouter();
  return (
    <div className="h-screen">
      <div className="p-5 flex w-full justify-between items-center bg-gray">
        <div className="flex items-center gap-5">
          <img onClick={() => router.back()} className="cursor-pointer" src="/images/back.svg" alt="" />
          <div>
            <div className="text-dark-blue font-bold">Rincian DPMK</div>
            <div className="text-[#808080]">Dana Pensiun Mitra Krakatau</div>
          </div>
        </div>
        <div>
          <img src="/images/question.svg" alt="" />
        </div>
      </div>
      <div className="p-5">
        <div className="text-center mt-4">
          <div className="font-bold text-[1.25rem]">PT. KRAKATAU MEDIKA</div>
          <div className="text-semi-gray">Dana Pensiun Mitra Krakatau</div>
        </div>
        <div className="mt-12 w-full p-5 rounded-md bg-gray">
          <div className="flex flex-col gap-5">
            <div className="w-full flex justify-between">
              <div>Nama</div>
              <div>Veronica Yulian</div>
            </div>
            <div className="w-full flex justify-between">
              <div>NIK</div>
              <div>1000221</div>
            </div>
            <div className="w-full flex justify-between">
              <div>Account Number</div>
              <div>1000221</div>
            </div>
            <div className="w-full flex justify-between">
              <div>Iuran Karyawan</div>
              <div>1000221</div>
            </div>
            <div className="w-full flex justify-between">
              <div>Iuran Perusahaan</div>
              <div>1000221</div>
            </div>
            <div className="w-full flex justify-between">
              <div>Iuran Karyawan</div>
              <div>1000221</div>
            </div>
            <div className="w-full flex justify-between">
              <div>Saldo Sebelumnya</div>
              <div>1000221</div>
            </div>
          </div>
        </div>
        <div className="mt-2 bg-gray p-5 rounded-md w-full">
          <div className="w-full flex items-center justify-between">
            <div className="font-bold">Saldo Saat Ini</div>
            <div className="font-bold">1000221</div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default DPMK;
