import React from "react";
import { useRouter } from "next/router";

function Pinjaman() {
  const router = useRouter();
  return (
    <div>
      <div className="p-5 flex w-full justify-between items-center bg-gray">
        <div className="flex items-center gap-5">
          <img onClick={() => router.back()} className="cursor-pointer" src="/images/back.svg" alt="" />
          <div>
            <div className="text-dark-blue font-bold">Pinjaman</div>
            <div className="text-[#00162A]">Lorem Ipsum Dolor</div>
          </div>
        </div>
        <div>
          <img src="/images/question.svg" alt="" />
        </div>
      </div>
      <div className="p-6">
        <div className="py-5 border-b-[1px] border-[#F2F2F2]">Pinjaman BJB</div>
        <div className="py-5 border-b-[1px] border-[#F2F2F2]">POT LIMIT WAKTU Kelebihan Bayar</div>
        <div className="py-5 border-b-[1px] border-[#F2F2F2]">Pinjaman BJB</div>
        <div className="py-5 border-b-[1px] border-[#F2F2F2]">Pinjaman BJB</div>
      </div>
    </div>
  );
}

export default Pinjaman;
