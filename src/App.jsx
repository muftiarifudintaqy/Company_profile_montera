import { useEffect, useRef, useState } from "react";

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
  maps: "https://maps.google.com/?q=Rukan+Crown+K18+Greenlake+City+Tangerang",
  email: "halo@monteragroup.id",     // GANTI
  wa: "https://wa.me/6281234567890", // GANTI
  ig: "https://instagram.com/montera.group", // GANTI
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
    judul: "Learning & Development",
    isi: "Regular training for every division, from performance marketing to warehouse operations. The company covers the cost, and it happens on work hours.",
    foto: "", // contoh: "/event/ldp.jpg"
  },
  {
    judul: "Creating Moments",
    isi: "Annual trips, gatherings and team celebrations. What people remember about a job is usually not the job itself.",
    foto: "",
  },
  {
    judul: "Montera Gives",
    isi: "Regular community work at shelters and around the office. A routine, not a ceremony.",
    foto: "",
  },
  {
    judul: "Know Me Better",
    isi: "Cross-division sessions, so the warehouse knows who is behind the ads and the other way around.",
    foto: "",
  },
];

const GALLERY = ["", "", "", "", "", ""]; // isi path foto, contoh: "/event/1.jpg"

const PEOPLE = [
  {
    nama: "Vikram JS",        // CHANGE
    role: "Founder & CEO",
    foto: "tim/vikram.jpg",                   // contoh: "/tim/vikram.jpg"
    isi: [
      "Replace this with a short note in their own words — why Montera was built and where it is heading.",
      "Two or three paragraphs is plenty. Keep it plain, not corporate.",
    ],
  },
  {
    nama: "Kartini",        // CHANGE
    role: "Head of Operations",
    foto: "tim/kartini.jpg",
    isi: [
      "Replace this with a note from the team member — joining, what changed, what they learned.",
    ],
  },
  {
    nama: "Adila",
    role: "Marketing & Ads",
    foto: "tim/dila.jpg",
    isi: ["Replace this paragraph."],
  },
  {
    nama: "Rou",
    role: "Creative & Content",
    foto: "tim/rou.jpg",
    isi: ["Replace this paragraph."],
  },
  {
    nama: "Shintya",
    role: "Customer Service",
    foto: "tim/shintya.jpg",
    isi: ["Replace this paragraph."],
  },
  {
    nama: "Junita",
    role: "Content creator & Social Media",
    foto: "tim/junita.jpg",
    isi: ["Replace this paragraph."],
  },
];

/* Ajakan bergabung — section penutup sebelum footer */
const KARIR = {
  judul: "Looking for a bigger challenge and room to grow?",
  isi: "We hire year round across marketing, creative, warehouse and IT.",
  tombol: "Send an application",
  url: "mailto:halo@monteragroup.id?subject=Lamaran%20-%20Posisi", // GANTI
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

const NAV = [
  { t: "About", h: "#about" },
  { t: "Vision", h: "#vision" },
  { t: "Culture", h: "#culture" },
  { t: "Brands", h: "#brands" },
  { t: "Life at Montera", h: "#life" },
];

export default function App() {
  const [solid, setSolid] = useState(false);
  const [buka, setBuka] = useState(false);
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
            <a className="nav-cta" href="#brand" onClick={() => setBuka(false)}>Our brands</a>
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
            {CO.heroLine} <b>{CO.heroLineBold}</b>
          </h1>
          <p className="hero-note">{CO.heroNote}</p>
        </div>
        <div className="scroll-hint"><span>Scroll</span><i /></div>
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
            Welcome to <b>{CO.nama}</b> — one family
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
      <section className="karir">
        <div className="wrap karir-in">
          <Reveal as="h2">{KARIR.judul}</Reveal>
          <Reveal as="p" delay={90}>{KARIR.isi}</Reveal>
          <Reveal delay={160}>
            <a className="karir-btn" href={KARIR.url}>{KARIR.tombol}</a>
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
              <ul>
                <li><a href={`mailto:${CO.email}`}>{CO.email}</a></li>
                <li><a href={CO.wa} target="_blank" rel="noopener noreferrer">WhatsApp</a></li>
                <li><a href={CO.ig} target="_blank" rel="noopener noreferrer">Instagram</a></li>
                <li><a href={CO.maps} target="_blank" rel="noopener noreferrer">{CO.alamat}</a></li>
              </ul>
            </div>
          </div>
          <div className="foot-bottom">
            <span>{CO.legal}</span>
            <span>{CO.kota}</span>
            <span>© {new Date().getFullYear()}</span>
          </div>
        </div>
      </footer>
    </>
  );
}
