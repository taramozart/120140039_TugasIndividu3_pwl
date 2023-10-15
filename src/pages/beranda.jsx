import Card from "../Components/Card";
import Layout from "../Components/Layout";

const beranda = () => {
  return (
    <Layout>
{/* landing page */}
<div className="landing flex w-full h-screen justify-center items-center gap-6">
        <Card
          title="Maling Sapi Bangunrejo, Lampung Tengah Diringkus di Mesuji"
          img="./Images/F1.png"
        >
          BANDARLAMPUNG (22/7/2023) – Kebakaran menghanguskan dua kamar kos di
          Jalan Pulau Buton, Jagabaya, Wayhalim, Bandarlampung, Senin 24 Juli
          2023 pukul 14.00 WIB. Api diduga bersumber...
        </Card>
        <Card
          title="Lift Maut Az-Zahra Bandar Lampung Naik ke Tahap Penyidikan "
          img="./Images/F2.png"
        >
          GEDONGTATAAN (22/7/2023) – Tiga kendaraan tabrakan beruntun di Jalan Lintas Barat Sumatera depan Taman Sidototo, Desa Kebagusan, Gedongtataan, Pesawaran, Senin 24 Juli 2023 pukul 09.30...
        </Card>
        <Card
          title="Karyawan Warung Ayam Geprek Kotabumi Kemalingan Ponsel"
          img="./Images/F3.png"
        >
          BANDARLAMPUNG (23/7/2023) - Negeri jiran Malaysia meminta Polres Pesawaran dan Polda Lampung mengurusi kepulangan salah seorang warganya karena bersuamikan penganggur di Dusun...
        </Card>
      </div>
      {/* landing page */}
    </Layout>
  );
};

export default beranda;
