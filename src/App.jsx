import { useEffect, useRef, useState } from "react";
import Lenis from "lenis";

/* ==================================================================
   TEMPAT EDIT — semua teks & data ada di blok ini.
   Ganti isinya, halaman langsung ikut berubah.
   ================================================================== */

const CO = {
  nama: "MONTERA",
  legal: "PT Montera Strategic Group",
  logo: "/logo/montera.png",          // taruh file logo di public/logo/montera.png
  logoPutih: "/logo/montera-putih.png", // versi putih untuk footer (opsional)
  tagline: "Strategic Group",
  heroLine: "One team.",
  heroLineBold: "One standard.",
  heroNote:
    "Personal care, handled end to end — one team, one system, one way of working.",
  berdiri: "2015",
  kota: "Tangerang, Indonesia",
  alamat: "Rukan Crown No. K18, Greenlake City, Tangerang",
  maps: "https://maps.app.goo.gl/mT2yGWuFJr8JXfK76?g_st=aw",
  email: "vj.1508@gmail.com",     // GANTI
  wa: "https://wa.me/6281290009626", // GANTI
  ig: "https://www.instagram.com/prepare_idn/", // GANTI
};

const VALUES = [
  {
    ikon: "integrity",
    judul: "INTEGRITY",
    isi: "The numbers we report are the numbers we see. There is no second version for management.",
  },
  {
    ikon: "agile",
    judul: "AGILE",
    isi: "Marketplaces change every quarter. What survives is not the biggest, but the quickest to adjust.",
  },
  {
    ikon: "happiness",
    judul: "HAPPINESS",
    isi: "People who enjoy the work do better work. That is not a perk, it is a requirement.",
  },
  {
    ikon: "kaizen",
    judul: "KAIZEN",
    isi: "Every process we run today was improved last week, and will be improved again.",
  },
];

const BRANDS = [
  {
    nama: "Skinlyfe",
    kategori: "Everyday personal care",
    warna: "#E8558E",
    logo: "/logo/skinlyfe.png",
    produk: "/brand/skinlyfe-product.jpg",   // ganti dengan foto produk asli
    isi: "Underarm cream, body cream and mouthspray. BPOM registered, made in a CPKB certified.",
    url: "https://shopee.co.id/skinlyfeofficial",
  },
  {
    nama: "Prepare",
    kategori: "Daily detail care",
    warna: "#4A5BD4",
    logo: "/logo/prepare.png",
    produk: "/brand/prepare-product.jpg",    // ganti dengan foto produk asli
    isi: "Eye cream, nail serum and foot spray. The small steps most routines quietly skip.",
    url: "https://shopee.co.id/prepareofficialstore",
  },
];

const EVENTS = [
  {
    judul: "Office Celebrations",
    isi: "Birthdays and small wins get marked in the middle of the workday. Someone brings food, everyone stops for a while.",
    foto: "/event/l.jpg",
  },
  {
    judul: "Creating Moments",
    isi: "We take the team out of the office for a day on the river. Rafting, and a group photo nobody looks serious in.",
    foto: "/event/moment.jpg",
  },
  {
    judul: "Halloween at the Office",
    isi: "The dress code goes out the window for a day. Costumes get judged by the loudest reaction, not the biggest budget.",
    foto: "/event/hallowen.jpg",
  },
  {
    judul: "Movie Day",
    isi: "The office closes early and the whole team walks into the cinema together. No agenda, no slides.",
    foto: "/event/knowme.jpg",
  },
];

const GALLERY = ["/event/galery1.jpg", "/event/galery2.jpg", "/event/galery3.jpg", "/event/galery4.jpg", "/event/galery5.jpg", "/event/galery6.jpg"]; // isi path foto, contoh: "/event/1.jpg"

const PEOPLE = [
  {
    nama: "Vikram JS",        // CHANGE
    role: "Founder & CEO",
    foto: "tim/vikram.jpg",                   // contoh: "/tim/vikram.jpg"
    isi: [
      "I believe sustainable growth is built through consistency, dedication, and a strong sense of purpose. At Montera, we continue to learn, adapt, and grow together as a team.",
    ],
  },
  {
    nama: "Kartini",        // CHANGE
    role: "Head of Operations",
    foto: "tim/kartini.jpg",
    isi: [
      "Strong growth comes from strong teamwork and a commitment to continuous improvement. I believe in building a working environment where everyone can develop, contribute, and move forward together.",
    ],
  },
  {
    nama: "Adila",
    role: "Marketing & Ads",
    foto: "tim/dila.jpg",
    isi: ["I focus on creating meaningful connections through effective communication and thoughtful strategies. Understanding our audience allows us to communicate with clarity and purpose."],
  },
  {
    nama: "Rou",
    role: "Clipper & Video Editor",
    foto: "tim/rou.jpg",
    isi: ["I focus on transforming ideas and moments into concise, engaging content. My goal is to create clips that communicate clearly, capture attention, and leave a lasting impression.."],
  },
  {
    nama: "Shintya",
    role: "Packaging & Customer Service",
    foto: "tim/shintya.jpg",
    isi: ["RI believe professionalism is reflected in the details. I focus on maintaining quality in every process while ensuring every customer interaction is handled with care and professionalism."],
  },
  {
    nama: "Junita",
    role: "Content creator & Social Media",
    foto: "tim/junita.jpg",
    isi: ["I focus on creating engaging content that communicates ideas clearly and naturally. Through social media, I aim to build meaningful connections and maintain an authentic presence."],
  },
];

/* Ajakan bergabung — section penutup sebelum footer */
const KARIR = {
  judul: "We Are Hiring!",
  isi: "Wanna Join?",
  tombol: "See open roles ↓",
  url: "https://glints.com/id/companies/prepare/2b5f5bc0-34bd-4ac9-93b2-bb44ecc6ed6e",
  kota: "Tangerang, just west of Jakarta.",
};

/* ================================================================== */

function Reveal({ children, delay = 0, as: Tag = "div", ...rest }) {
  const ref = useRef(null);
  const [tampil, setTampil] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const io = new IntersectionObserver(
      ([e]) => {
        if (e.isIntersecting) {
          setTampil(true);
          io.disconnect();
        }
      },
      { threshold: 0.12, rootMargin: "0px 0px -40px 0px" }
    );
    io.observe(el);
    return () => io.disconnect();
  }, []);

  return (
    <Tag
      ref={ref}
      className={`rv ${tampil ? "in" : ""} ${rest.className || ""}`}
      style={{ transitionDelay: `${delay}ms`, ...(rest.style || {}) }}
    >
      {children}
    </Tag>
  );
}

/* Logo: pakai file kalau ada, kalau belum tampil wordmark teks */
function Logo({ src, className, alt = CO.legal, tinggi }) {
  const [gagal, setGagal] = useState(false);
  if (!src || gagal) {
    return (
      <div className={className}>
        <div className="mark-fallback" style={tinggi ? { fontSize: tinggi } : null}>
          {CO.nama}
        </div>
      </div>
    );
  }
  return <img src={src} alt={alt} className={className} onError={() => setGagal(true)} />;
}

/* Ombak pemisah — bagian terisi di bawah, tepi atasnya melengkung turun */
function Wave({ fill, className }) {
  return (
    <svg className={className} viewBox="0 0 1000 100" preserveAspectRatio="none" aria-hidden="true">
      <path
        fill={fill}
        d="M0,0 C 220,62 400,82 520,82 C 660,82 830,54 1000,4 L1000,100 L0,100 Z"
      />
    </svg>
  );
}

/* Garis kontur — versi tipis dari motif yang sama, jadi latar section Visi */
function Contour({ className }) {
  const garis = Array.from({ length: 9 }, (_, i) => {
    const o = i * 26;
    return `M0 ${140 + o} C 160 ${70 + o}, 320 ${210 + o}, 500 ${120 + o} S 820 ${40 + o}, 1000 ${150 + o} S 1300 ${230 + o}, 1440 ${110 + o}`;
  });
  return (
    <svg className={className} viewBox="0 0 1440 500" fill="none" aria-hidden="true">
      {garis.map((d, i) => (
        <path key={i} d={d} stroke="#4520A6" strokeWidth="1.6" />
      ))}
    </svg>
  );
}

function Ikon({ nama }) {
  const p = { fill: "none", stroke: "currentColor", strokeWidth: 1.9, strokeLinecap: "round", strokeLinejoin: "round" };
  const isi = {
    integrity: <><path d="M12 3l7 3v6c0 4.2-2.9 7.7-7 9-4.1-1.3-7-4.8-7-9V6l7-3z" {...p} /><path d="M9 12.2l2.1 2.1L15.4 10" {...p} /></>,
    agile: <><path d="M4 17l4-9 4 5 4-8 4 12" {...p} /><circle cx="8" cy="8" r="1.6" {...p} /></>,
    happiness: <><circle cx="12" cy="12" r="8.4" {...p} /><path d="M8.4 14.2c1 1.3 2.2 2 3.6 2s2.6-.7 3.6-2" {...p} /><path d="M9 9.6v.6M15 9.6v.6" {...p} /></>,
    kaizen: <><path d="M6 14l6-6 6 6" {...p} /><path d="M6 19l6-6 6 6" {...p} /></>,
  };
  return <svg width="34" height="34" viewBox="0 0 24 24">{isi[nama]}</svg>;
}
/* Ikon kontak di footer */
function IkonKontak({ nama }) {
  const isi = {
    mail: <path d="M3 6.5A1.5 1.5 0 0 1 4.5 5h15A1.5 1.5 0 0 1 21 6.5v11a1.5 1.5 0 0 1-1.5 1.5h-15A1.5 1.5 0 0 1 3 17.5v-11Zm1.8.5 7.2 5.4L19.2 7H4.8Z" />,
    wa: <path d="M12 2a10 10 0 0 0-8.7 15L2 22l5.2-1.3A10 10 0 1 0 12 2Zm5.4 14.1c-.2.6-1.2 1.2-1.7 1.2-.5.1-1 .1-1.6-.1a12 12 0 0 1-4.6-3.1 9.4 9.4 0 0 1-1.8-2.7c-.2-.6-.1-1.3.2-1.8.2-.3.5-.6.8-.7h.6c.2 0 .4 0 .5.3l.8 1.8c0 .2 0 .3-.1.5l-.4.5c-.1.2-.2.3 0 .5a8 8 0 0 0 3.5 2.9c.2.1.4 0 .5-.1l.7-.8c.2-.2.3-.2.5-.1l1.7.9c.2.1.3.2.3.4 0 .2 0 .4-.1.5Z" />,
    ig: <><rect x="3.2" y="3.2" width="17.6" height="17.6" rx="5" fill="none" stroke="currentColor" strokeWidth="1.8" /><circle cx="12" cy="12" r="4" fill="none" stroke="currentColor" strokeWidth="1.8" /><circle cx="17.2" cy="6.8" r="1.2" /></>,
    pin: <path d="M12 2a7 7 0 0 0-7 7c0 5 7 13 7 13s7-8 7-13a7 7 0 0 0-7-7Zm0 9.5A2.5 2.5 0 1 1 12 6.5a2.5 2.5 0 0 1 0 5Z" />,
  };
  return (
    <svg className="ikon-kontak" width="17" height="17" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
      {isi[nama]}
    </svg>
  );
}

const NAV = [
  { t: "About", h: "#about" },
  { t: "Vision", h: "#vision" },
  { t: "Culture", h: "#culture" },
  { t: "Life at Montera", h: "#life" },
  { t: "Career", h: "#career" },
];

export default function App() {
  const [solid, setSolid] = useState(false);
  const [buka, setBuka] = useState(false);
    useEffect(() => {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

    const lenis = new Lenis({
      duration: 1.15,          // makin besar makin "berat" dan mengalir
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      smoothWheel: true,
      touchMultiplier: 1.6,
    });

    let id;
    const jalan = (waktu) => {
      lenis.raf(waktu);
      id = requestAnimationFrame(jalan);
    };
    id = requestAnimationFrame(jalan);

    // klik menu tetap meluncur halus
    const klik = (e) => {
      const a = e.target.closest('a[href^="#"]');
      if (!a) return;
      const target = document.querySelector(a.getAttribute("href"));
      if (!target) return;
      e.preventDefault();
      lenis.scrollTo(target, { offset: -84 });
    };
    document.addEventListener("click", klik);

    return () => {
      cancelAnimationFrame(id);
      document.removeEventListener("click", klik);
      lenis.destroy();
    };
  }, []);
  const strip = useRef(null);

  useEffect(() => {
    const onScroll = () => setSolid(window.scrollY > 60);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  /* Galeri jalan sendiri, berhenti saat disentuh — seperti carousel referensi */
  useEffect(() => {
    const el = strip.current;
    if (!el) return;
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    let henti = false;
    const stop = () => (henti = true);
    const lanjut = () => (henti = false);
    ["pointerenter", "pointerdown", "focusin"].forEach((e) => el.addEventListener(e, stop));
    ["pointerleave", "focusout"].forEach((e) => el.addEventListener(e, lanjut));
    const t = setInterval(() => {
      if (henti) return;
      const habis = el.scrollLeft + el.clientWidth >= el.scrollWidth - 4;
      el.scrollTo({ left: habis ? 0 : el.scrollLeft + el.clientWidth * 0.42, behavior: "smooth" });
    }, 2600);
    return () => {
      clearInterval(t);
      ["pointerenter", "pointerdown", "focusin"].forEach((e) => el.removeEventListener(e, stop));
      ["pointerleave", "focusout"].forEach((e) => el.removeEventListener(e, lanjut));
    };
  }, []);

  const initial = (n) =>
    n.split(" ").filter(Boolean).slice(0, 2).map((x) => x[0]).join("").toUpperCase();

  return (
    <>
      {/* ---------------- NAV ---------------- */}
      <header className={`nav ${solid ? "solid" : ""}`}>
        <div className="wrap nav-in">
          <a className="brandmark" href="#atas">
            <img src={CO.logo} alt="" onError={(e) => (e.currentTarget.style.display = "none")} />
            <span className="word">{CO.nama}</span>
          </a>

          <nav className={`nav-links ${buka ? "open" : ""}`}>
            {NAV.map((n) => (
              <a key={n.h} href={n.h} onClick={() => setBuka(false)}>{n.t}</a>
            ))}
            <a className="nav-cta" href="#brands" onClick={() => setBuka(false)}>Our brands</a>
          </nav>

          <button className="burger" onClick={() => setBuka((v) => !v)} aria-label="Menu" aria-expanded={buka}>
            <span /><span /><span />
          </button>
        </div>
      </header>

      {/* ---------------- HERO ---------------- */}
      <section className="hero" id="atas">
        <div className="wrap hero-in">
          <Logo src={CO.logo} className="mark" alt={CO.legal} />
          <div className="wordmark">{CO.nama}</div>
          <div className="mark-sub">{CO.tagline}</div>
         <h1>
  <span className="hero-l1">{CO.heroLine}</span>
  <b className="hero-l2">{CO.heroLineBold}</b>
</h1>
          <p className="hero-note">{CO.heroNote}</p>
        </div>
       {/*<div className="scroll-hint"><i /></div>*/}
        <Wave className="hero-wave" fill="var(--violet-deep)" />
      </section>

      {/* ------- CERITA: sambutan + tentang + kutipan, satu section ------- */}
      <section className="story" id="about">
        <div className="ghost-wrap">
          <img
            className="ghost-mark"
            src={CO.logoPutih}
            alt=""
            aria-hidden="true"
            onError={(e) => (e.currentTarget.style.display = "none")}
          />
        </div>

        <div className="wrap story-head">
          <Reveal as="h2">
  <span className="satukan">Welcome to <b>{CO.nama}</b></span>{" "}
  <span className="satukan">— one family</span>
</Reveal>
          <Reveal as="p" delay={120}>
            Building something that lasts, not something that trends
          </Reveal>
        </div>

        <div className="wrap">
          <div className="panel">
            <Reveal className="panel-about">
             <div className="thumb thumb-team"><img src="/event/about.jpg" alt="Montera team" /></div>
              <div>
                <div className="eyebrow">About us</div>
                <h3>Founded in {CO.berdiri}</h3>
                <p className="lead">Started small, grown through a long stretch of ups and downs.</p>
                <p className="body">
                  {CO.legal} runs <b>Skinlyfe</b> and <b>Prepare</b> across official Shopee and
                  TikTok Shop channels — sharing one operations team, one warehouse and one
                  record-keeping system.
                </p>
                <p className="body">
                  Our office is in {CO.kota} — a good place to build a career.
                </p>
              </div>
            </Reveal>

            <Reveal className="panel-quote" delay={120}>
              <div>
                <h3>We are not big, and not small either</h3>
                <p className="sub">Big or small is relative anyway</p>
              </div>
              <div>
                <p>One thing we believe without reservation: how you think decides how far the work can go.</p>
                <p className="kicker">“Focus on long term goals.”</p>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* ---------------- VISI ---------------- */}
      <section className="vision" id="vision">
        <div className="chip chip-vision">Our Vision</div>
        <Contour className="map" />
        <div className="wrap vision-in">
          <Reveal as="h3">Building a legacy that matters to the people around us</Reveal>
          <Reveal delay={100}>
            <p>We are building a company that <b>grows from one generation to the next.</b></p>
            <p>Solving real problems our customers have, and contributing something back to the country.</p>
            <p>So that the families and communities we leave behind inherit a life worth enjoying.</p>
            <p className="close">Come build that legacy with us.</p>
          </Reveal>
        </div>
      </section>

      {/* ---------------- BUDAYA ---------------- */}
      <section className="culture" id="culture">
        <div className="wrap">
          <Reveal as="h2">Culture is the most important asset at Montera</Reveal>
          <Reveal as="p" className="sub" delay={100}>
            We have spent years building the team on these four, and we are proud of the result.
          </Reveal>
        </div>
        <div className="wrap">
          <div className="values">
            {VALUES.map((v, i) => (
              <Reveal className="value" key={v.judul} delay={i * 90}>
                <div className="ic"><Ikon nama={v.ikon} /></div>
                <h4>{v.judul}</h4>
                <p>{v.isi}</p>
              </Reveal>
            ))}
          </div>
        </div>

        <div className="wrap">
          <Reveal className="ribbon">
            <span>“People who succeed always intend to be better than they were yesterday.”</span>
          </Reveal>
        </div>
      </section>

      {/* ---------------- BRAND ---------------- */}
      <section className="brands" id="brands">
        <div className="chip chip-brands">Brands</div>
        <div className="wrap">
          <div className="brand-row">
            {BRANDS.map((b, i) => (
              <Reveal key={b.nama} delay={i * 120}>
                <a className="brand-card" href={b.url} target="_blank" rel="noopener noreferrer">
                  <img className="brand-logo" src={b.logo} alt={b.nama} />
                  <div className="brand-cat" style={{ color: b.warna }}>{b.kategori}</div>
                  <div className="brand-shot">
                    <img src={b.produk} alt={`${b.nama} products`} loading="lazy" />
                  </div>
                  <p className="brand-desc">{b.isi}</p>
                  <span className="brand-go" style={{ color: b.warna }}>Visit the official store →</span>
                </a>
              </Reveal>
            ))}
          </div>
          <Reveal as="p" className="tagline-center">Let’s be happy &amp; grow together</Reveal>
        </div>
      </section>

      {/* ---------------- EVENTS ---------------- */}
      <section className="events" id="life">
        <div className="chip chip-events">Life at work</div>
        <div className="wrap">
          <div className="event-list">
            {EVENTS.map((e, i) => (
              <Reveal className="event" key={e.judul} delay={i * 90}>
                <div>
                  <h4>{e.judul}</h4>
                  <p>{e.isi}</p>
                </div>
                <div className="thumb">
                  {e.foto ? <img src={e.foto} alt={e.judul} /> : "photo"}
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* ---------------- GALERI ---------------- */}
      <section className="gallery">
        <div className="wrap">
          <Reveal as="h2">Our Latest Events</Reveal>
          <Reveal as="p" className="sub" delay={90}>
            From training and camps to sharing sessions and trips abroad
          </Reveal>
        </div>
        <div className="wrap">
          <div className="strip" ref={strip}>
            {GALLERY.map((g, i) => (
              <div className="shot" key={i}>
                {g ? <img src={g} alt={`Photo ${i + 1}`} /> : `photo ${i + 1}`}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ---------------- ORANG ---------------- */}
      <section className="people">
        <svg className="tilt" viewBox="0 0 1000 100" preserveAspectRatio="none" aria-hidden="true">
          <path fill="#FFFFFF" d="M0,6V0h1000v100L0,6z" />
        </svg>
        <div className="wrap">
          <Reveal as="h2">The People Behind It</Reveal>
          <div className="person-grid">
            {PEOPLE.map((o, i) => (
              <Reveal className="person" key={i} delay={i * 130}>
                <div className="avatar">
                  {o.foto ? <img src={o.foto} alt={o.nama} /> : initial(o.nama)}
                </div>
                <h4>{o.nama}</h4>
                <div className="role">{o.role}</div>
                {o.isi.map((t, k) => <p key={k}>{t}</p>)}
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* ---------------- KARIR ---------------- */}
      <section className="karir" id="career">
        <div className="wrap karir-in">
          <Reveal as="h2">{KARIR.judul}</Reveal>
          <Reveal as="p" delay={90}>{KARIR.isi}</Reveal>
          <Reveal delay={160}>
            <a className="karir-btn" href={KARIR.url} target="_blank" rel="noopener noreferrer">{KARIR.tombol}</a>
            <div className="karir-kota">{KARIR.kota}</div>
          </Reveal>
        </div>
      </section>

      {/* ---------------- FOOTER ---------------- */}
      <footer className="foot">
        <div className="wrap">
          <div className="foot-grid">
            <div>
              <img src={CO.logoPutih} alt={CO.legal} onError={(e) => (e.currentTarget.style.display = "none")} />
              <p style={{ marginTop: 16, fontSize: 15, maxWidth: "34ch" }}>
                {CO.legal} — home to Skinlyfe and Prepare.
              </p>
            </div>
            <div>
              <h5>Pages</h5>
              <ul>
                {NAV.map((n) => <li key={n.h}><a href={n.h}>{n.t}</a></li>)}
              </ul>
            </div>
            <div>
              <h5>Contact</h5>
<ul className="kontak">
  <li><a href={`mailto:${CO.email}`}><IkonKontak nama="mail" />{CO.email}</a></li>
  <li><a href={CO.wa} target="_blank" rel="noopener noreferrer"><IkonKontak nama="wa" />WhatsApp</a></li>
  <li><a href={CO.ig} target="_blank" rel="noopener noreferrer"><IkonKontak nama="ig" />Instagram</a></li>
  <li><a href={CO.maps} target="_blank" rel="noopener noreferrer"><IkonKontak nama="pin" />{CO.alamat}</a></li>
</ul>
            </div>
          </div>
          <div className="foot-bottom">
  © {new Date().getFullYear()} {CO.legal}. All rights reserved. · {CO.kota}
</div>
        </div>
      </footer>
    </>
  );
}
