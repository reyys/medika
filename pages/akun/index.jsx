import React from "react";
import Link from "next/link";
import Image from "next/image";

function index() {
  return (
    <div>
      <div className="p-5">
        <div className="text-[1.25rem] font-bold">Akun</div>
        <div>Lorem ipsum dolor sit amet, consectetur adipiscing elit</div>
      </div>
      <div className="p-5 bg-gray">
        <div className="font-semibold mb-4">Profil Karyawan</div>
        <Link href="/akun/pribadi">
          <div className="cursor-pointer flex items-center py-3 border-b-[1px] border-light-gray gap-5">
            <Image width={25} height={25} src="/images/pribadi.svg" alt="" />
            <div>Pribadi</div>
          </div>
        </Link>
        <Link href="/akun/datakeluarga">
          <div className="cursor-pointer flex items-center py-3 border-b-[1px] border-light-gray gap-5">
            <Image width={25} height={25} src="/images/dataKeluarga.svg" alt="" />
            <div>Data Keluarga</div>
          </div>
        </Link>
        <div className="flex items-center py-3 border-b-[1px] border-light-gray gap-5">
          <Image width={25} height={25} src="/images/pendidikan.svg" alt="" />
          <div>Pendidikan</div>
        </div>
        <div className="flex items-center py-3 border-b-[1px] border-light-gray gap-5">
          <Image width={25} height={25} src="/images/kesehatan.svg" alt="" />
          <div>Alamat</div>
        </div>
        <div className="flex items-center py-3 border-b-[1px] border-light-gray gap-5">
          <Image width={25} height={25} src="/images/pengalaman.svg" alt="" />
          <div>Pengalaman Kerja</div>
        </div>
      </div>
      <div className="mt-2 p-5 bg-gray">
        <div className="font-semibold mb-5">IHC RSKM</div>
        <Link href="/akun/medical">
          <div className="cursor-pointer flex items-center gap-5 py-3 border-b[-1px] border-light-gray">
            <Image width={25} height={25} src="/images/medical.svg" alt="" />
            <div>Medical Checkup</div>
          </div>
        </Link>
        <div className="flex items-center gap-5 py-3 border-b[-1px] border-light-gray">
          <Image width={25} height={25} src="/images/employee.svg" alt="" />
          <div>Employee Book</div>
        </div>
      </div>
      {/* Tentang Aplikasi  */}
      <div className="mt-2 mb-24 p-5 bg-gray">
        <div className="font-semibold mb-5">Tentang Aplikasi</div>
        <div className="flex items-center gap-5 py-3 border-b[-1px] border-light-gray">
          <Image width={25} height={25} src="/images/pin.svg" alt="" />
          <div>Ganti PIN</div>
        </div>
        <div className="flex items-center gap-5 py-3 border-b[-1px] border-light-gray">
          <Image width={25} height={25} src="/images/faq.svg" alt="" />
          <div>FAQ</div>
        </div>
        <div className="flex items-center gap-5 py-3 border-b[-1px] border-light-gray">
          <Image width={25} height={25} src="/images/logout.svg" alt="" />
          <div>Log Out</div>
        </div>
      </div>
    </div>
  );
}

export default index;
