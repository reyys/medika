import Link from "next/link";
import React from "react";
import * as faceapi from "face-api.js";
import axios from "axios";

const token = typeof window !== "undefined" ? JSON.parse(window.localStorage.getItem("token")) : "";

function Index({ presensi, setPresensi }) {
  const videoRef = React.useRef(null);
  const canvasRef = React.useRef(null);
  const dateContainer = React.useRef(null);
  const [thisDate, setThisDate] = React.useState();

  const [presensiData, setPresensiData] = React.useState("");

  React.useEffect(() => {
    const getData = async () => {
      if (token !== "") {
        const res = await axios.get("http://api.waktukerja.com/api/presensi/laporan", {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        });
        setPresensiData(res.data.data);
      }
    };
    getData();
  }, [token]);

  React.useEffect(() => {
    const loadModels = async () => {
      Promise.all([
        faceapi.nets.tinyFaceDetector.loadFromUri("/models"),
        faceapi.nets.faceLandmark68Net.loadFromUri("/models"),
        faceapi.nets.faceRecognitionNet.loadFromUri("/models"),
        faceapi.nets.faceExpressionNet.loadFromUri("/models"),
      ]).then(startVideo);
    };
    loadModels();
  }, []);

  const startVideo = async () => {
    navigator.getUserMedia(
      { video: {} },
      (stream) => (videoRef.current.srcObject = stream),
      (err) => console.log(err)
    );
  };

  const startAgain = () => {
    videoRef.current.play();
    handleVideoPlay();
  };

  const handleVideoPlay = () => {
    setInterval(async () => {
      canvasRef.current.innerHTML = faceapi.createCanvas(videoRef.current);
      const displaySize = { width: 300, height: 400 };
      faceapi.matchDimensions(canvasRef.current, displaySize);
      const detections = await faceapi.detectAllFaces(videoRef.current, new faceapi.TinyFaceDetectorOptions()).withFaceLandmarks().withFaceExpressions();
      const resizedDetections = faceapi.resizeResults(detections, displaySize);
      canvasRef.current.getContext("2d").clearRect(0, 0, 300, 400);
      faceapi.draw.drawDetections(canvasRef.current, resizedDetections);
      faceapi.draw.drawFaceLandmarks(canvasRef.current, resizedDetections);
      faceapi.draw.drawFaceExpressions(canvasRef.current, resizedDetections);
      if (detections[0].alignedRect.score > 0.8) {
        videoRef.current.pause();
        clearInterval(handleVideoPlay);
      }
    }, 300);
  };

  //Waktu
  const currentTime = new Date();
  const hours = currentTime.getHours();

  React.useEffect(() => {
    setInterval(() => {
      let date = new Date();
      let hours = date.getHours();
      let minutes = date.getMinutes();
      let seconds = date.getSeconds();
      setThisDate(`${hours}:${minutes}:${seconds}`);
    }, 1000);
  }, [thisDate]);

  //Date
  const tanggalIni = currentTime.getDate();

  //DAY
  const days = ["Minggu", "Senin", "Selasa", "Rabu", "Kamis", "Jumat", "Sabtu"];
  const getDayNumber = currentTime.getDay();
  const hariIni = days[getDayNumber];

  //MONTH
  const months = ["Januari", "Februari", "Maret", "April", "Mei", "Juni", "Juli", "Agustus", "September", "Oktober", "November", "Desember"];
  const getMonthNumber = currentTime.getMonth();
  const bulanIni = months[getMonthNumber];

  //Year
  const tahunIni = currentTime.getFullYear();

  //Detect Condition
  const welcomeDetect = () => {
    if (hours >= 0 && hours < 10) {
      return "Selamat Pagi";
    }
    if (hours >= 10 && hours <= 15) {
      return "Selamat Siang";
    }
    if (hours > 15 && hours <= 18) {
      return "Selamat Sore";
    }
    if (hours > 18 && hours <= 24) {
      return "Selamat Malam";
    }
  };

  const masukPresensi = () => {
    setPresensi(false);
    videoRef.current.pause();
  };

  const handleVerif = () => {
    setPresensi(true);
    videoRef.current.play();
  };

  return (
    <div>
      <div className={` ${presensi === true ? "block" : "hidden"} absolute top-0 left-0 bottom-0 right-0 w-full h-full z-50`} style={{ background: "rgba(0,0,0,0.4)" }}></div>
      <div className={`${presensi === true ? "block" : "hidden"} absolute z-[100] top-[50%] left-[50%] flex flex-col justify-center items-center gap-5`} style={{ transform: "translate(-50%,-50%)" }}>
        <video onPlay={handleVideoPlay} muted ref={videoRef}></video>
        <canvas className="absolute" ref={canvasRef}></canvas>
        <div className="flex gap-5 items-center w-full">
          <button onClick={() => startAgain()} className="cursor-pointer relative z-[999] rounded-md bg-light-gray w-full text-black p-5">
            Ulang
          </button>
          <button onClick={() => masukPresensi()} className="cursor-pointer relative z-[999] rounded-md bg-dark-blue w-full text-white p-5">
            Kirim
          </button>
        </div>
      </div>
      <div className="w-full p-3 flex items-center justify-between px-5">
        <div className="flex gap-5">
          <img src="/images/profileImage.svg" alt="" />
          <div>
            <div className="font-bold text-darkest-blue text-[1.15rem]">MSEFI.06@GMAIL.COM</div>
            <div>Staff Nurse Radiognastic Pratama</div>
          </div>
        </div>
        <Link href="/notifikasi">
          <img className="cursor-pointer" src="/images/notif.svg" alt="" />
        </Link>
      </div>
      <div className="p-5 overflow-hidden bg-dark-blue text-white pb-24 relative">
        <div className="font-bold text-[1.15rem]">{welcomeDetect()}</div>
        <div className="text-gray mt-2">{presensi ? "Anda Sudah Melakukan Presensi Masuk" : "Silahkan Melakukan Presensi Masuk"}</div>
        <img className="absolute right-0 top-[-20%]" src="images/leaf.svg" alt="" />
      </div>
      <div className="p-5 w-[80%] bg-white rounded-md flex items-center justify-between mx-auto translate-y-[-50%] drop-shadow-lg">
        <div>
          <div className="text-darkest-blue font-bold text-[1.25rem]">
            {hariIni} {tanggalIni}
          </div>
          <div className="text-darkest-blue font-bold text-[1.25rem]">
            {bulanIni} {tahunIni}
          </div>
          <div ref={dateContainer}>{thisDate}</div>
        </div>
        <button
          onClick={() => {
            presensi ? "" : handleVerif();
          }}
          className="flex items-center p-3 gap-5 bg-dark-blue"
        >
          <img src="/images/bellMasuk.svg" />
          <div className="text-[#ffffff]">
            {presensi ? (
              <div className="flex items-center gap-5">
                <span>Verified</span>
                <span>✔</span>
              </div>
            ) : (
              "Masuk"
            )}
          </div>
        </button>
      </div>
      <div className="px-5 py-5 flex items-center justify-between bg-light-blue">
        <div>
          <div className="font-bold text-dark-blue text-[1.25rem]">Riwayat Presensi</div>
          <div>Cek Riwayat Kehadiranmu</div>
        </div>
        <div className="p-2 rounded-md bg-dark-blue">
          <img src="/images/searchIcon.svg" alt="" />
        </div>
      </div>

      <div className="p-6">
        <table className="w-full">
          <tbody>
            <tr>
              <td>Tanggal</td>
              <td>Ket.</td>
              <td>Jam Masuk</td>
              <td>Jam Keluar</td>
            </tr>
            {presensiData !== "" &&
              presensiData.map((x) => {
                return (
                  <tr key={x.id} className="border-b-[1px] border-gray">
                    <td className="py-3">{x.precense_date}</td>
                    <td>
                      {x.approve_status === 1 && <div className="w-[1rem] h-[1rem] bg-green rounded-full"></div>}
                      {x.approve_status === 0 && <div className="w-[1rem] h-[1rem] bg-gray rounded-full"></div>}
                      {x.approve_status === -1 && <div className="w-[1rem] h-[1rem] bg-semi-red rounded-full"></div>}
                    </td>
                    <td>{x.checkin}</td>
                    <td>{x.checkout === null ? "- - : - - : - -" : x.checkout}</td>
                  </tr>
                );
              })}
          </tbody>
        </table>
        <div className="w-full mt-3 text-semi-blue justify-between flex items-center">
          <div>{`<<`} Sebelumnya</div>
          <div>Setelahnya {`>>`} </div>
        </div>
      </div>

      <div className="p-5 pb-32">
        <div>Keterangan Warna</div>
        <div className="flex items-center gap-5 mt-6">
          <div className="flex items-center gap-2">
            <div className="bg-green w-[1rem] h-[1rem] rounded-full"></div>
            <div>Active</div>
          </div>
          <div className="flex items-center gap-2">
            <div className="bg-gray w-[1rem] h-[1rem] rounded-full"></div>
            <div>Active</div>
          </div>
          <div className="flex items-center gap-2">
            <div className="bg-semi-red w-[1rem] h-[1rem] rounded-full"></div>
            <div>Active</div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Index;
