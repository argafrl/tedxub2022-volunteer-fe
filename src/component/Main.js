import Slider from "react-slick";

import "../css/main.scss"
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import logo from "../assets/images/tedx_putih.png"
import logoHitam from "../assets/images/tedx_hitam.png"
import dividerPaper from "../assets/images/divider-paper.png"
import tanganKiri from "../assets/images/tangan-kiri.png"
import tanganKanan from "../assets/images/tangan-kanan.png"
import burnPaper from "../assets/images/BurnPaper-1.png"

import videoTedx from "../assets/videos/web-landscape.mp4"
import videoTedxVertical from "../assets/videos/web-vertical-1.mp4"
import { useEffect, useState } from "react";
import { CircularProgress, Dialog } from "@mui/material";

const Main = () => {

  const [open, setOpen] = useState('');
  const [width, setWindowWidth] = useState(0);

  const updateDimensions = () => {
    const width = window.innerWidth
    setWindowWidth(width)
  }

  const handleClickOpen = (idx) => {
    setOpen(idx);
  };

  const handleClose = () => {
    setOpen(false);
  };

  useEffect(() => { 

    updateDimensions();

    window.addEventListener("resize", updateDimensions);
    return () => 
    window.removeEventListener("resize",updateDimensions);
  }, [width])

  const getVideoSrc = width => {
    if (width >= 768) return videoTedx;
    return videoTedxVertical;
  };

  const Video = props => {
    const [isVideoLoaded, setIsVideoLoaded] = useState(false);
    const src = getVideoSrc(window.innerWidth);
    const onLoadedData = () => {
      setIsVideoLoaded(true);
    };
    return (
      <div className="container">
        {/* <div className="spinner-wrapper">
            <CircularProgress className="spinner" size={60} />
        </div> */}
        <video
          autoPlay
          loop
          muted
          className="video-tedx"
          playsInline
          
          onLoadedData={onLoadedData}
          style={{ width: "100vw", height: "100vh", objectFit: "cover", opacity: isVideoLoaded ? 1 : 0 }}
        >
          <source src={src} type="video/mp4"/>
        </video>
        {/* <iframe
          width="853"
          height="480"
          src="https://youtube.com/embed/Ib6-PTbnIB4?autoplay=1&controls=0&fs=0&loop=1&modestbranding=1"
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
          title="Embedded youtube"
        /> */}
      </div>
    );
  };

  const teams = [
    {
      nama: "C",
      fullNama: "CURATOR",
      desc: "Bertanggung jawab dalam menentukan siapa yang akan berbicara dan apa yang akan dibicarakan dalam panggung TEDxUniversitasBrawijaya.",
      req: `Menulis esai tentang "Keresahan kalian dalam memaknai kompleksitas modern saat ini" - Minimal 300 kata.`
    },
    {
      nama: "EM",
      fullNama: "EVENT MANAGER",
      desc: `Bertanggung jawab atas “TEDx Experience” untuk para audiens serta merancang dan mengatur segala kebutuhan dan jalannya acara.`,
      req: `Menulis esai tentang “Bagaimana referensi, ide, dan sudut pandang mengenai event yang menarik, cara pengimplementasiannya, dan apa yang membuatmu dan idemu berbeda dengan yang lain” sebanyak 300-500 kata.`
    },
    {
      nama: "EP",
      fullNama: "EXECUTIVE PRODUCER",
      desc: `Bertanggung jawab untuk mengatur perancangan dan keperluan yang dibutuhkan selama rangkaian acara yang berkaitan dengan produksi, logistik, dan teknologi.`,
      req: `Melampirkan rancangan visualiasi stage main event berbentuk letter U. Didalam rancangan tersebut diwajibkan menyertakan logo TEDX Universitas Brawijaya. Visualisasi ini dikumpulkan dalam bentuk deck (PPT) maksimal 5 slide.
      *Pendaftar bisa menggunakan aplikasi pendukung apapun dalam merancang persyaratan ini`
    },
    {
      nama: "S",
      fullNama: "SPONSORSHIP",
      desc: `Bertanggung jawab atas pengelolaan hal-hal finansial dan kerjasama dengan pihak eksternal untuk mendapatkan dana dalam mendukung terpenuhinya kebutuhan acara.`,
      req: `-`
    },
    {
      nama: "CEM",
      fullNama: "COMMUNICATION, EDITORIAL, AND MARKETING",
      desc: `Bertanggung jawab untuk menyusun dan mengatur campaign dan propaganda untuk memenuhi kebutuhan branding dan marketing dalam pemasaran acara kepada publik. `,
      req: `-`
    },
    {
      nama: "VP",
      fullNama: "VIDEO PRODUCTION",
      desc: `Bertanggung jawab untuk memproduksi segala konten video dan motion graphic serta lainnya untuk kepentingan campaign, audio visual, serta sebagai operator kamera saat acara berlangsung.`,
      req: `Portfolio`
    },
    {
      nama: "D",
      fullNama: "DESIGN",
      desc: `Bertanggung jawab dalam produksi desain untuk digital campaign dan kebutuhan-kebutuhan lainnya yang menunjang acara.`,
      req: `Portfolio`
    },
    {
      nama: "W",
      fullNama: "WEBSITE",
      desc: `Bertanggung jawab untuk merancang, mengembangkan, dan mengelola situs web secara berkelanjutan untuk segala informasi yang ada di web seperti development dan maintaining sisi frontend, backend, dan desain UI/UX website TEDxUniversitasBrawijaya`,
      req: `Portfolio`
    },
  ]

  var settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
    initialSlide: 0,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 0,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <div className="main">
      <div className="logo">
        <img className="logo-tedx" src={logo} alt="TEDxUB 2022" />
      </div>

      <div className="video-container">
        <div className="video-box">
          <Video />
        </div>
      </div>

      <div className="divider">
        <img className="divider-paper" src={dividerPaper} alt="Divider" />
      </div>

      <div className="tentang-tedx">
        <h1 className="tentang">TENTANG <span style={{color: "red", fontSize: "200px"}}>TEDx</span></h1>
        <p>
          <span style={{color: "red"}}>TED</span>(Technology, Entertainment and Design) is a nonproﬁt organization devoted to spreading ideas, usually in the form of short, 
          powerful talks (18 minutes or less). TED began in 1984 as a conference where Technology, Entertainment and Design converged, 
          and today covers almost all topics — from science to business to global issues — in more than 100 languages. 
          Meanwhile, independently run TEDx events help share ideas in communities around the world.
        </p>

        <p>
          <span style={{color: "red"}}>TEDx</span> brings the spirit of TED’s mission of ideas worth spreading to local communities around the globe. 
          TEDx events are organized by curious individuals who seek to discover ideas and spark conversations in their own community. 
          TEDx events include live speakers and recorded TED Talks, and are organized independently under a free license granted by TED.
        </p>

        <p>
          If you're eager to know more about TED, please visit:<br />
          <a target="blank" href="https://www.ted.com"><span style={{color: "red"}}>TED: www.ted.com</span><br /></a>
          <a target="blank" href="https://www.ted.com/tedx"><span style={{color: "red"}}>TEDx: www.ted.com/tedx</span></a>
        </p>
      </div>

      <div className="merayakan">
        <img src={burnPaper} alt="Paper" />
        <div className="merayakan-content">
          <h2><span style={{color: "red"}}>TEDx</span>UniversitasBrawijaya 2022</h2>
          <p>
            Manusia dalam era kompleksitas atas modernitas yang tercipta hingga hari ini sejatinya memiliki sistem pengetahuan yang berangkat dari nilai fundamental kesadaran sosial dan karakteristik dari pencermatan keadaan sekitar yang terbangun melalui ekosistem interaksi antara manusia dan lingkungannya sejak awal. Kebijaksanaan lokal ini sering terkesampingkan atau bahkan hilang di tengah gegap gempita produktivitas dunia yang serba berkecepatan. Alih-alih bertanya pesatnya pembangunan disekitar kita, sudahkah kita bertanya apa yang kita cermati dari lingkungan yang berkembang pesat? Bagaimana kondisi diri kita dalam berpikir atas realitas terhadap kesadaran dan keadaan yang ada di luar?
          </p>
          <h3>Merayakan Kembali: Menggeledah Arus, Menilik Ruang</h3>
          <p>
            TEDxUniversitasBrawijaya 2022 kali ini akan membawa penonton melalui perjalanan istirahat dari kejenuhan dan kompleksitas yang telah terbentuk dengan kembali menjelajahi makna nilai kearifan lokal sebagai ruang untuk kembali pada akar, mengambil bekal dalam menjalani era modernitas saat ini. Penelusuran ini sebagai pengingat kepada kita tentang menghayati, mencerna, dan berkesadaran secara total tentang nilai dasar tiap-tiap individu dan sekitarnya yang telah ada. Karena apa yang kita cemaskan pada masa kini, ketidakpastian akan masa depan, akan terjawab dengan kembali menelusuri makna masa lalu.
          </p>
        </div>
      </div>

      <div className="pencarian">
        <h1>PENCARIAN<br /><span style={{color: "red", fontSize: "150px"}}>VOLUNTEER</span></h1>
        <p>
          Dalam menjalankan misi kami untuk menyebarkan “Ideas Worth Spreading”, kami menginginkan kamu, individu-individu dengan faktor “X” untuk bergabung bersama kami dalam TEDxUniversitasBrawijaya dan berkolaborasi memberikan ide dan gagasan untuk “merayakan kembali.”
        </p>
        <div className="carousel">
          <Slider {...settings}>
            {teams.map((team, idx) => (
              <div>

                <button className="background-kotak" onClick={ (e) => handleClickOpen(team.nama)}>
                  <h1>{team.nama}</h1>
                </button>

                <Dialog
                  // fullWidth="true"
                  maxWidth="md"
                  className="dialog"
                  open={open === `${team.nama}`}
                  onClose={handleClose}
                  aria-labelledby="alert-dialog-title"
                  aria-describedby="alert-dialog-description"
                >
                  <button onClick={handleClose}>X</button>
                  {/* <img src={`img/bg-${team.nama}.png`} alt={team.fullNama} /> */}
                  <div className="dialog-content">
                    <h1>{team.fullNama}</h1>
                    <p>{team.desc}</p>
                    <p style={{fontWeight: "bold"}}>Persyaratan khusus:<br />{team.req}</p>
                  </div>
                </Dialog>

              </div>
            ))}
          </Slider>
        </div>


      </div>

      <div className="daftar">
        <h1>DAFTAR <span style={{color: "red"}}>SEGERA</span></h1>
        <h2>Periode Pendaftaran: 6 Juni - 13 Juni 2022</h2>
        <div className="button-registrasi">
          <a target="blank" href="https://forms.gle/Kg2zczmGVzKNvrYB6"><button >FORM REGISTRASI</button></a>
        </div>
        <div className="tangan">
          <img src={tanganKiri} alt="tangan-kiri" className="tangan-kiri" />
          <img src={tanganKanan} alt="tangan-kanan" className="tangan-kanan" />
        </div>
      </div>

      <div className="footer">
        <img src={logoHitam} alt="TEDxUB 2022" />
        <h1>“This independent <span style={{color: "red"}}>TEDx</span> event is operated under license from <span style={{color: "red"}}>TED</span>.”</h1>
      </div>
    </div>
  );
}
 
export default Main;