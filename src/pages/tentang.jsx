import Card from "../Components/Card";
import Layout from "../Components/Layout";


const tentang = () => {
  return (
    <Layout>
      <div className="landing flex w-full h-screen justify-center items-center gap-16">
        <div className="left flex flex-col leading-8 p-8 bg-[#E4AFAF] w-[517px] h-[480px] border-slate-300 rounded-lg border-[3px] ">
          <div className="head text-[22px] font-bold text-center">Visi & Misi</div>
            <div className="font-semibold text-[20px] pl-4">Visi</div>
              <div className="pl-4 font-semibold">Memberikan informasi terpercaya berdasarkan fakta.</div>
                <div className="pl-4 font-semibold text-[20px]">Misi</div>
                  <div className="pl-4 font-semibold">
                  1. Menyajikan berita yang akurat dan objektif yang dapat diandalkan masyarakat.<br />
                  2. Menjunjung tinggi integrita dan etika jurnalisme. <br />
                  3. Menyajikan berita yang informatif dan berdampak positing bagi masyarakat. <br />
                  4. Menyajikan berita dengan cara yang menarik dan mudah dipahami masyarakat.<br />
                  </div>
      </div>

       <div>
       <div className="right flex flex-col p-8 bg-[#EEE8E8]  w-[517px] h-[481px] border-slate-300 rounded-lg border-[3px] ">
        <div className="head text-[22px] font-bold pl-4">
          Lampung TV - Bukan Sekadar Berita
        </div>
          <div className="leading-8 px-4 " >
            <div className="text-rose-900 font-semibold">www.lampungtelevisi.com</div >
              <div className="font-semibold pt-4 pb-6">
                Pemimpin Redaksi: Syamsul B. Nasution.<br />
                Pemimpin Perusahaan: Willy Lesmana Putra.<br />
                Keuangan: Prasetyo. <br />
                Studio: Nunung Budiono, Freshi Kavita Sandy.<br />
              </div>
            </div>
              <div className="flex  px-6 py-3 bg-[#813636] opacity-75 w-[446px] h-[158px] rounded-lg text-white font-semibold leading-8" >
                Diterbitkan oleh PT Lampung Televisi<br />
                Email: adm.lampungtv@gmail.com <br />
                WA Redaksi: 0811-720-6393<br />
                Alamat: Jalan Perwira No. 3, Bandarlampung.<br />
              </div>
          </div>
        </div>
      </div>
      
    </Layout>
  )
}

export default tentang