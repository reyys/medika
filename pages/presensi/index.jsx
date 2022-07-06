import Link from "next/link";
import React from "react";
import RenderPresensi from "./renderPresensi";
import * as faceapi from "face-api.js";

function Index() {
  const [initializing, setInitializing] = React.useState(false);
  const [presensi, setPresensi] = React.useState(false);
  const videoRef = React.useRef(null);
  const canvasRef = React.useRef(null);

  const masukPresensi = () => {
    setPresensi(false);
    videoRef.current.pause();
  };

  const handleVerif = () => {
    setPresensi(true);
    videoRef.current.play();
  };

  React.useEffect(() => {
    const loadModels = async () => {
      setInitializing(true);
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

  const handleVideoPlay = () => {
    if (initializing) {
      setInitializing(false);
    }
    setInterval(async () => {
      canvasRef.current.innerHTML = faceapi.createCanvasFromMedia(videoRef.current);
      const displaySize = { width: 600, height: 400 };
      faceapi.matchDimensions(canvasRef.current, displaySize);
      const detections = await faceapi.detectAllFaces(videoRef.current, new faceapi.TinyFaceDetectorOptions()).withFaceLandmarks().withFaceExpressions();
      const resizedDetections = faceapi.resizeResults(detections, displaySize);
      canvasRef.current.getContext("2d").clearRect(0, 0, 600, 400);
      faceapi.draw.drawDetections(canvasRef.current, resizedDetections);
      faceapi.draw.drawFaceLandmarks(canvasRef.current, resizedDetections);
      faceapi.draw.drawFaceExpressions(canvasRef.current, resizedDetections);
    }, 300);
  };

  return (
    <div>
      <div className={` ${presensi ? "block" : "hidden"} absolute top-0 left-0 bottom-0 right-0 w-full h-full z-50`} style={{ background: "rgba(0,0,0,0.4)" }}></div>
      <div className={`${presensi ? "block" : "hidden"} absolute z-[100] top-[50%] left-[50%] flex flex-col justify-center items-center gap-5`} style={{ transform: "translate(-50%,-50%)" }}>
        <video onPlay={handleVideoPlay} muted ref={videoRef} width={600} height={400}></video>
        <canvas className="absolute" ref={canvasRef}></canvas>
        <button onClick={() => masukPresensi()} className="relative z-[999] rounded-md bg-dark-blue w-full text-white p-5">
          Masuk
        </button>
      </div>
      <div className="w-full p-3 flex items-center justify-between px-5">
        <div className="flex gap-5">
          <img src="/images/profileImage.svg" alt="" />
          <div>
            <div className="font-bold text-darkest-blue text-[1.15rem]">VERONICA YULIAN</div>
            <div>Staff Nurse Radiognastic Pratama</div>
          </div>
        </div>
        <Link href="/notifikasi">
          <img className="cursor-pointer" src="/images/notif.svg" alt="" />
        </Link>
      </div>
      <div className="p-5 overflow-hidden bg-dark-blue text-white pb-24 relative">
        <div className="font-bold text-[1.15rem]">Selamat Pagi</div>
        <div className="text-gray mt-2">{presensi ? "Anda Sudah Melakukan Presensi Masuk" : "Silahkan Melakukan Presensi Masuk"}</div>
        <img className="absolute right-0 top-[-20%]" src="images/leaf.svg" alt="" />
      </div>
      <div className="p-5 w-[80%] bg-white rounded-md flex items-center justify-between mx-auto translate-y-[-50%] drop-shadow-lg">
        <div>
          <div className="text-darkest-blue font-bold text-[1.25rem]">Senin 20</div>
          <div className="text-darkest-blue font-bold text-[1.25rem]">Februari 2022</div>
          <div>7:30:12</div>
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
          <tr>
            <td>Tanggal</td>
            <td>Ket.</td>
            <td>Jam Masuk</td>
            <td>Jam Keluar</td>
          </tr>
          <tr>
            <td className="py-4 border-b-[1px] border-gray">Senin 20 Februari 2022</td>
            <td>
              <div className="w-[1rem] h-[1rem] bg-gray rounded-full"></div>
            </td>
            <td>08:00:00</td>
            <td>- - : - - : - -</td>
          </tr>
          <RenderPresensi />
          <RenderPresensi bg="red" />
          <RenderPresensi />
          <RenderPresensi />
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
