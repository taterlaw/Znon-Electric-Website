/* Home page */

function Home({ onNav }) {
  const [hoverService, setHoverService] = useState(null);

  const services = [
    { n: '01', title: 'Residential', sub: 'New builds, remodels, panels & repairs', tag: 'HOMES' },
    { n: '02', title: 'Commercial', sub: 'Build‑outs, tenant finish, maintenance', tag: 'BUSINESSES' },
    { n: '03', title: 'For Contractors', sub: 'Sub work for GCs, builders, designers', tag: 'PARTNERS' },
    { n: '04', title: 'Emergency', sub: 'After‑hours dispatch, 7 days', tag: '24/7' },
  ];

  const stats = [
    { k: '22', v: 'Years in Austin' },
    { k: '4,800+', v: 'Jobs completed' },
    { k: '11', v: 'Licensed electricians' },
    { k: '98%', v: 'Repeat & referral' },
  ];

  const trust = [
    'TECL #26841',
    'Family‑owned since 2004',
    'Licensed · bonded · insured',
    'Austin · Round Rock · Pflugerville',
    'Residential + Commercial',
  ];

  return (
    <div className="page-fade">

      {/* HERO */}
      <section style={{ padding: '40px 0 0' }}>
        <div className="container">
          <div className="row between center wrap" style={{ marginBottom: 24 }}>
            <span className="kicker">Austin, Texas · Est. 2004</span>
            <span className="meta">FILE № ZN‑2026.04 / HOMEPAGE</span>
          </div>

          <h1 className="display display-xxl" style={{ marginTop: 0 }}>
            Electrical you<br/>
            <span className="italic" style={{ color: 'var(--maroon)' }}>don't have to </span>
            think about.
          </h1>

          <div className="hero-2col" style={{
            display: 'grid',
            gridTemplateColumns: '1.2fr 1fr',
            gap: 48,
            marginTop: 48,
            alignItems: 'end',
          }}>
            <p className="lede" style={{ margin: 0 }}>
              Znon Electric is a family‑run shop of licensed master electricians
              serving Austin homes, businesses, and the contractors who build them.
              We show up when we say we will, do the work to code, and leave the
              site cleaner than we found it. That's the whole pitch.
            </p>
            <div className="col gap-16" style={{ alignItems: 'flex-start' }}>
              <div className="row gap-12 wrap">
                <a className="btn btn-primary" href="#" onClick={(e) => { e.preventDefault(); onNav('contact'); }}>
                  Request a quote <Arrow />
                </a>
                <a className="btn btn-ghost" href="#" onClick={(e) => { e.preventDefault(); onNav('portfolio'); }}>
                  See our work
                </a>
              </div>
              <span className="meta">Typical response · under 2 hours</span>
            </div>
          </div>

          {/* Hero image band */}
          <div style={{ marginTop: 64, position: 'relative' }}>
            <Ph
              src="company-images/trucks-old-logo.png"
              label="Znon Electric trucks"
              dark
              className="ph-hero"
              style={{ height: 'min(520px, 48vw)' }}
            />
            {/* Overlaid spec card */}
            <div className="hero-spec-card" style={{
              position: 'absolute',
              bottom: 20,
              right: 20,
              background: 'var(--paper)',
              border: '1px solid var(--ink)',
              padding: '18px 22px',
              maxWidth: 320,
            }}>
              <div className="meta" style={{ marginBottom: 8 }}>NOW BOOKING · APR 2026</div>
              <div style={{ fontFamily: 'var(--font-display)', fontSize: 22, lineHeight: 1.1 }}>
                Panel upgrades, EV chargers, service calls — 2‑week lead time.
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* TRUST MARQUEE */}
      <div style={{ marginTop: 80 }}>
        <Ticker items={trust} />
      </div>

      {/* SERVICES */}
      <section className="section">
        <div className="container">
          <div className="section-head">
            <span className="kicker">What we do</span>
            <h2 className="display display-l" style={{ margin: 0 }}>
              Four ways we <span className="italic" style={{ color: 'var(--maroon)' }}>show up.</span>
            </h2>
          </div>

          <div>
            {services.map((s, i) => (
              <a key={s.n} href="#" className="service-row service-row-mobile"
                onMouseEnter={() => setHoverService(i)}
                onMouseLeave={() => setHoverService(null)}
                onClick={(e) => { e.preventDefault(); onNav(s.title === 'Residential' ? 'residential' : s.title === 'Commercial' ? 'commercial' : 'contact'); }}
                style={{
                  display: 'grid',
                  gridTemplateColumns: '80px 1fr 1fr auto',
                  alignItems: 'center',
                  gap: 32,
                  padding: '32px 0',
                  borderTop: i === 0 ? '1px solid var(--ink)' : 'none',
                  borderBottom: '1px solid var(--ink)',
                  background: hoverService === i ? 'var(--maroon)' : 'transparent',
                  color: hoverService === i ? 'var(--paper)' : 'var(--ink)',
                  transition: 'all .25s ease',
                  paddingLeft: hoverService === i ? 24 : 0,
                  paddingRight: hoverService === i ? 24 : 0,
                }}>
                <span className="meta" style={{ color: 'inherit', opacity: 0.7 }}>{s.n}</span>
                <span className="display display-m service-title" style={{ fontSize: 'clamp(32px, 4vw, 56px)' }}>{s.title}</span>
                <span className="service-sub" style={{ fontSize: 15, opacity: 0.85 }}>{s.sub}</span>
                <span className="row gap-12 center">
                  <span className="meta" style={{ color: 'inherit', opacity: 0.7 }}>{s.tag}</span>
                  <Arrow size={20} style={{ opacity: hoverService === i ? 1 : 0.5 }} />
                </span>
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* STATS */}
      <section style={{ background: 'var(--grey-warm)', padding: '80px 0' }}>
        <div className="container">
          <div className="row between wrap" style={{ alignItems: 'flex-end', marginBottom: 40 }}>
            <span className="kicker">By the numbers</span>
            <span className="meta">AS OF Q2 2026</span>
          </div>
          <div className="stats-grid" style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(4, 1fr)',
            gap: 32,
          }}>
            {stats.map((s, i) => (
              <div key={i} style={{
                borderTop: '1px solid var(--ink)',
                paddingTop: 20,
              }}>
                <div className="display" style={{ fontSize: 'clamp(44px, 5.5vw, 80px)' }}>
                  {s.k}
                </div>
                <div className="meta" style={{ marginTop: 12 }}>{s.v}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FEATURED WORK */}
      <section className="section">
        <div className="container">
          <div className="section-head">
            <span className="kicker">Selected work</span>
            <h2 className="display display-l" style={{ margin: 0 }}>
              Recent jobs across <span className="italic" style={{ color: 'var(--maroon)' }}>the metro.</span>
            </h2>
          </div>

          <div className="work-grid" style={{
            display: 'grid',
            gridTemplateColumns: '2fr 1fr 1fr',
            gridTemplateRows: '340px 260px',
            gap: 16,
          }}>
            <Ph tag="RESIDENTIAL" label="Kitchen & living room · Clarksville" src="residential-images/residential-kitchen-living-room1.webp" style={{ gridRow: 'span 2', height: '100%' }} />
            <Ph tag="COMMERCIAL" label="Tenant finish · E. 6th Street" src="commercial-images/commericial-office-meeting-room.jpg" style={{ height: '100%' }} dark />
            <Ph tag="RESIDENTIAL" label="Outdoor recessed lighting · Mueller" src="residential-images/residential-outdoor-recess-lighting1.webp" style={{ height: '100%' }} dark />
            <Ph tag="RESIDENTIAL" label="EV Powerwall installed · Westlake" src="residential-images/residential-EV-powerwall-installed.avif" style={{ height: '100%' }} dark />
            <Ph tag="COMMERCIAL" label="LED retrofit · South Congress" src="commercial-images/austin-bar-outside1.jpg" style={{ height: '100%' }} dark />
          </div>

          <div className="row between wrap mt-32">
            <span className="meta">5 OF 46 RECENT PROJECTS</span>
            <a className="btn btn-quiet" href="#" onClick={(e) => { e.preventDefault(); onNav('portfolio'); }}>
              View full portfolio <Arrow />
            </a>
          </div>
        </div>
      </section>

      {/* TESTIMONIAL */}
      <section style={{ background: 'var(--maroon)', color: 'var(--paper)', padding: '100px 0' }}>
        <div className="container">
          <div className="testi-grid" style={{
            display: 'grid',
            gridTemplateColumns: '1fr 2fr',
            gap: 48,
            alignItems: 'start',
          }}>
            <div className="col gap-16">
              <span className="meta" style={{ color: 'rgba(247,245,242,0.7)' }}>CLIENT · GC PARTNER</span>
              <div className="row gap-12 center">
                <Ph style={{ width: 56, height: 56, borderRadius: '50%' }} />
                <div>
                  <div style={{ fontFamily: 'var(--font-display)', fontSize: 22 }}>Daniel Reyes</div>
                  <div className="meta" style={{ color: 'rgba(247,245,242,0.7)' }}>Principal · Reyes Build Co.</div>
                </div>
              </div>
            </div>
            <blockquote className="display" style={{
              margin: 0,
              fontSize: 'clamp(28px, 3vw, 48px)',
              lineHeight: 1.15,
              fontStyle: 'italic',
            }}>
              "We've pulled Znon on eleven projects — four custom homes,
              six remodels, one weird little brewery. They price fair, they
              schedule honest, they don't leave a mess. You want that kind
              of sub on speed‑dial."
            </blockquote>
          </div>
        </div>
      </section>

      {/* PROCESS */}
      <section className="section">
        <div className="container">
          <div className="section-head">
            <span className="kicker">How a job runs</span>
            <h2 className="display display-l" style={{ margin: 0 }}>
              No surprises, no <span className="italic" style={{ color: 'var(--maroon)' }}>funny math.</span>
            </h2>
          </div>

          <div className="process-grid" style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(4, 1fr)',
            gap: 0,
          }}>
            {[
              { n: '01', t: 'You call', d: 'Tell us the scope. We\'ll ask a few questions and schedule a walk.' },
              { n: '02', t: 'We quote', d: 'Written estimate, itemized. No mystery line items. Good for 30 days.' },
              { n: '03', t: 'We work', d: 'Licensed crew, tarped floors, daily cleanup. Permitted when it should be.' },
              { n: '04', t: 'You\'re set', d: 'Final walkthrough. Labels on the panel. Two‑year workmanship warranty.' },
            ].map((p, i) => (
              <div key={i} style={{
                borderLeft: '1px solid var(--ink)',
                borderRight: i === 3 ? '1px solid var(--ink)' : 'none',
                padding: '24px 24px 40px',
              }}>
                <div className="meta">{p.n}</div>
                <div className="display" style={{ fontSize: 32, marginTop: 24 }}>{p.t}</div>
                <p style={{ marginTop: 16, fontSize: 14, color: 'var(--ink-soft)', lineHeight: 1.5 }}>{p.d}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

    </div>
  );
}

Object.assign(window, { Home });
