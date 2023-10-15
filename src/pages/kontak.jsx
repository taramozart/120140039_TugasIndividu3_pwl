/* eslint-disable react-hooks/rules-of-hooks */
import { useState } from "react";
import Layout from "../Components/Layout";

const kontak = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [hp, setHP] = useState("");
  const [saran, setSaran] = useState("");
  const [count, setCount] = useState(0);
  const handleSubmit = (e) => {
    e.preventDefault();
    setCount(count + 1);
    console.log("Nama:", name);
    console.log("Email:", email);
    console.log("No HP:", hp);
    console.log("Saran:", saran);

    // Membersihkan input form
    setName("");
    setSaran("");
    setEmail("");
    setHP("");
  };

  return (
    <Layout>
      <div className=" py-[100px] mx-auto container">
        <div className="wrap flex justify-center items-center">
          <div className="left w-[60%]">
            <div className="wrap flex flex-col justify-center items-center">
              <div className="">
              <img src="./Images/kontak.png" alt="" />
              </div>
              <div className="head text-[32px] font-bold">
              Lampung TV - Bukan Sekadar Berita
              </div>
            </div>
          </div>
          <div className="right bg-[#EEE8E8] w-[40%] bg-red\">
            <div className=" p-5 rounded-lg min-h-[20rem]">
              <p className="text-xl font-bold mb-4 text-center">Hubungi Kami </p>
              <form onSubmit={handleSubmit} className="flex flex-col">

                <label htmlFor="Nama">Name</label>
                <input
                  id="Nama"
                  className=" p-1 text-srBlack"
                  type="text"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  placeholder="Masukkan Nama"
                />

                <label htmlFor="Email">Email</label>
                <input
                  id="Email"
                  className=" p-1 text-srBlack"
                  type="text"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Masukkan Email"
                />

                <label htmlFor="HP">No HP</label>
                <input
                  id="HP"
                  className=" p-1 text-srBlack"
                  type="text"
                  value={hp}
                  onChange={(e) => setHP(e.target.value)}
                  placeholder="No. HP"
                />

                <label htmlFor="Saran" className="mt-3">
                  Message
                </label>
                <textarea
                  className=" p-2 text-srBlack"
                  name=""
                  id="Saran"
                  cols="30"
                  rows="5"
                  value={saran}
                  onChange={(e) => setSaran(e.target.value)}
                  placeholder="Masukkan Saran"
                ></textarea>
                <button
                  className="bg-primary text-white px-4 py-2  mt-5 mb-2"
                  type="submit"
                >
                  Submit
                </button>
              </form>
              <p className="text-xl font-light  text-center">
              Jumlah pesan yang masuk : {count}
              </p>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default kontak;
