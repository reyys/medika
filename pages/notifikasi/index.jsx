import React from "react";
import { useRouter } from "next/router";
import Link from "next/link";
import Image from "next/image";
function Notifikasi() {
  const router = useRouter();
  return (
    <div className="p-5 h-screen sm:h-auto">
      <div className="flex items-center gap-5">
        <Image width={25} height={25} onClick={() => router.back()} className="cursor-pointer" src="/images/back.svg" alt="" />
        <div className="font-bold text-[1.25rem]">Notifikasi</div>
      </div>
      <div className="p-5 overflow-x-auto max-h-full flex gap-5 items-center">
        <div className="whitespace-nowrap gap-4 text-dark-blue font-bold">{`Semua (10)`}</div>
        <div>Pengumuman</div>
        <div className="whitespace-nowrap">Pengajuan Anda</div>
        <Link href="/persetujuan">
          <div className="whitespace-nowrap">Persetujuan Anda</div>
        </Link>
      </div>
      <div className="p-5">
        <div className="flex items-center gap-5">
          <Image width={25} height={25} src="/images/pengumuman.svg" alt="" />
          <div className="font-semibold">Pengumuman</div>
        </div>
      </div>
      <div className="p-5 bg-light-blue">
        <div>10 Februari 2022</div>
        <div className="text-semi-blue">Anda mendapat perintah perjalanan dinas dan sedang menunggu proses persetujuan</div>
      </div>
      <div className="p-5">
        <div>10 Februari 2022</div>
        <div className="text-semi-blue">Anda mendapat perintah perjalanan dinas dan sedang menunggu proses persetujuan</div>
      </div>
      {/* Pengajuan Anda  */}
      <div className="p-5">
        <div className="flex items-center gap-5">
          <Image width={25} height={25} src="/images/pengajuanAnda.svg" alt="" />
          <div className="font-semibold">Pengajuan Anda</div>
        </div>
      </div>
      <div className="p-5">
        <div>10 Februari 2022</div>
        <div>
          {`[Pengajuan Tukar Dinas]`}
          <br></br>
          NIK 1000221 telah menyetujui pengajuan anda.
        </div>
      </div>
      <div className="p-5">
        <div className="flex items-center gap-5">
          <Image width={25} height={25} src="/images/persetujuan.svg" alt="" />
          <div className="font-semibold">Perlu Persetujuan</div>
        </div>
      </div>
      <Link href="/persetujuan">
        <div className="p-5 pb-24 cursor-pointer">
          <div>10 Februari 2022</div>
          <div>
            {`[Pengajuan Tukar Dinas]`}
            <br></br>
            NIK 1000221 telah menyetujui pengajuan anda.
          </div>
        </div>
      </Link>
    </div>
  );
}

export default Notifikasi;
