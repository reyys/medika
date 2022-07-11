import React from "react";
import { useRouter } from "next/router";
import Link from "next/link";

function Edit() {
  const router = useRouter();
  return (
    <div>
      <div className="p-5 bg-gray">
        <div className="flex w-full justify-between items-center">
          <div className="flex items-center gap-5">
            <img onClick={() => router.back()} className="cursor-pointer" src="/images/back.svg" alt="" />
            <div>
              <div className="text-[1.25rem] font-bold">Profil Karyawan</div>
              <div>Edit</div>
            </div>
          </div>
          <Link href="/akun/edit">
            <img className="cursor-pointer" src="/images/edit.svg" alt="" />
          </Link>
        </div>
      </div>
      <div className="p-5">
        <div className="flex gap-5 items-center">
          <div className="flex flex-col gap-3 w-full">
            <div>
              <div>NIK</div>
              <input placeholder="1000221" className="w-full bg-gray p-3 rounded-md" />
            </div>
            <div>
              <div>TMB</div>
              <input placeholder="2005 - 01 -01" type="date" className="w-full bg-gray p-3 rounded-md" />
            </div>
          </div>
        </div>
        <div className="mt-3">
          <div>Nama</div>
          <input type="text" placeholder="Masukkan Nama Baru" className="mt-3 p-5 bg-gray w-full rounded-md" />
        </div>
        <div className="mt-3">
          <div>Tanggal Lahir</div>
          <input type="date" className="mt-3 p-5 bg-gray w-full rounded-md" />
        </div>
        <div className="mt-3">
          <div>No. Telepon</div>
          <input type="number" placeholder="Masukkan No Telepon Baru" className="mt-3 p-5 bg-gray w-full rounded-md" />
        </div>
        <div className="mt-3">
          <div>Email</div>
          <input type="email" placeholder="Masukkan Email Baru" className="mt-3 p-5 bg-gray w-full rounded-md" />
        </div>
        <div className="mt-3">
          <div>NPWP</div>
          <input placeholder="12.123.123.1.123.000" className="mt-3 p-5 bg-gray w-full rounded-md" />
        </div>
        <div className="mt-3">
          <div>PTKP</div>
          <input placeholder="K.2" className="mt-3 p-5 bg-gray w-full rounded-md" />
        </div>
        <div className="mt-3">
          <div>Jamsostek</div>
          <input placeholder="00K12345678" className="mt-3 p-5 bg-gray w-full rounded-md" />
        </div>
        <div className="mt-3">
          <div>Jabatan</div>
          <input placeholder="Staff Nurse Radiodiagnostic Pratama" className="mt-3 p-5 bg-gray w-full rounded-md" />
        </div>
        <div className="w-full pb-6">
          <button className="w-full text-white bg-dark-blue py-5 rounded-md mt-12">Ubah</button>
        </div>
      </div>
    </div>
  );
}

export default Edit;
