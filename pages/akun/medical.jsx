import React from "react";
import { useRouter } from "next/router";

function Medical() {
  const router = useRouter();
  return (
    <div className="h-screen">
      <div className="p-5 bg-gray">
        <div className="flex w-full justify-between items-center">
          <div className="flex items-center gap-5">
            <img onClick={() => router.back()} className="cursor-pointer" src="/images/back.svg" alt="" />
            <div>
              <div className="text-[1.25rem] font-bold">Medical Checkup</div>
              <div>Lorem Ipsum Dolor</div>
            </div>
          </div>
          <img src="/images/question.svg" alt="" />
        </div>
      </div>
      <div className="p-5">
        <div className="py-5 border-b-[1px] border-light-gray">Riwayat Pengobatan</div>
        <div className="py-5 border-b-[1px] border-light-gray">Riwayat Medical Checkup</div>
        <div className="py-5 border-b-[1px] border-light-gray">Kupon MCU</div>
      </div>
    </div>
  );
}

export default Medical;
