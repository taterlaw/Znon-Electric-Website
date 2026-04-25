/* Residential + Commercial service detail pages */

function ServicePage({ variant, onNav }) {
  const data = variant === 'residential' ? {
    kicker: 'For homeowners',
    title: 'Residential',
    titleItalic: 'electrical',
    lede: 'From a flickering kitchen light to a full‑house rewire on a 1940s Travis Heights bungalow — we\'ve probably seen your problem before, and we\'ve definitely fixed it.',
    heroLabel: 'Ceiling fixture installation · Hyde Park remodel',
    heroTag: 'RESIDENTIAL',
    heroImg: 'residential-images/residential-ceiling-fixture1.webp',
    heroImgFilter: 'grayscale(100%)',
    fileNo: 'ZN‑R / RESIDENTIAL SERVICES',
    scope: [
      { n: '01', t: 'Panel upgrades & service changes', d: '100A → 200A upgrades, meter swaps, sub‑panels. Permitted and inspected.' },
      { n: '02', t: 'EV charger installation', d: 'Level 2 chargers, Tesla wall connectors, 240V dedicated circuits. Same‑day in many cases.' },
      { n: '03', t: 'Whole‑home rewires', d: 'Knob‑and‑tube and aluminum replacement. Coordinated with drywall and insulation.' },
      { n: '04', t: 'Lighting design & install', d: 'Recessed cans, under‑cabinet, landscape, smart switches. Design input on request.' },
      { n: '05', t: 'Remodels & additions', d: 'Kitchens, primary suites, ADUs. Rough‑in through trim. We talk to your GC.' },
      { n: '06', t: 'Troubleshooting & repair', d: 'Dead outlets, tripping breakers, weird smells. Flat‑rate diagnostic visits.' },
      { n: '07', t: 'Generators & battery backup', d: 'Generac, Kohler, Tesla Powerwall. Whole‑home and partial‑load transfer.' },
      { n: '08', t: 'Smoke & CO systems', d: 'Hardwired interconnected detection. Code‑compliant replacement programs.' },
    ],
    pricing: [
      { t: 'Service call (diagnostic)', p: '$149', d: 'First hour, applied to repair' },
      { t: 'Standard outlet / switch', p: 'from $175', d: 'Existing circuit, same location' },
      { t: 'EV charger install', p: 'from $1,450', d: 'Up to 30ft from panel' },
      { t: '200A service upgrade', p: 'from $3,800', d: 'Includes permit & inspection' },
      { t: 'Whole‑home rewire', p: 'by walk', d: 'Scope‑dependent, typically 4–10 days' },
      { t: 'After‑hours emergency', p: '$225/hr', d: '2‑hour minimum, nights + weekends' },
    ],
    testimonial: {
      q: 'Our 1952 house had three different decades of wiring stacked on top of each other. Znon walked us through what had to go, what could stay, and priced the whole thing up front. No surprises at the end.',
      name: 'Alicia & Ben M.',
      role: 'Homeowners · Travis Heights',
    },
  } : {
    kicker: 'For businesses, builders & GCs',
    title: 'Commercial',
    titleItalic: 'electrical',
    lede: 'Tenant finish‑outs, ground‑up build‑outs, maintenance contracts, and sub work for Austin\'s general contractors. We read plans. We pull permits. We hit milestone dates.',
    heroLabel: 'Commercial job site · Austin',
    heroTag: 'COMMERCIAL',
    heroImg: 'commercial-images/austin-city-skyline.jpg',
    fileNo: 'ZN‑C / COMMERCIAL SERVICES',
    scope: [
      { n: '01', t: 'Tenant finish‑outs', d: 'Restaurants, retail, offices, medical. Design‑build or plan‑and‑spec.' },
      { n: '02', t: 'Ground‑up new construction', d: 'Rough‑in, underground, service feeds, final trim. Subbing for licensed GCs.' },
      { n: '03', t: 'Sub work for general contractors', d: 'Reliable, bondable, plays nice with other trades. Ask our references.' },
      { n: '04', t: 'Service & maintenance contracts', d: 'Scheduled PMs for property managers, restaurant groups, multi‑site retail.' },
      { n: '05', t: 'LED & lighting retrofits', d: 'Savings analysis, rebate paperwork, phased install with no downtime.' },
      { n: '06', t: 'Data, low‑voltage, AV rough', d: 'Cat6, coax, speaker, conduit runs. Coordinated with IT integrators.' },
      { n: '07', t: 'Parking lot & site lighting', d: 'Pole lights, photocells, controllers. Boom‑truck access.' },
      { n: '08', t: 'Emergency repair & storm response', d: '24/7 dispatch for commercial tenants. Priority for maintenance clients.' },
    ],
    pricing: [
      { t: 'Maintenance contract', p: 'from $250/mo', d: 'Monthly PMs + priority response' },
      { t: 'Plan & spec bid', p: 'no charge', d: '72‑hour turnaround on commercial plans' },
      { t: 'T&M service call', p: '$135/hr', d: 'Two‑hour minimum' },
      { t: 'LED retrofit', p: 'by audit', d: 'Includes rebate paperwork' },
      { t: 'Emergency commercial', p: '$210/hr', d: 'Nights, weekends, holidays' },
      { t: 'Boom‑truck mobilization', p: '$350', d: 'Up to 45ft, site lighting + signage' },
    ],
    testimonial: {
      q: 'We\'ve pulled Znon on eleven projects — four customs, six remodels, one weird little brewery. They price fair, they schedule honest, they don\'t leave a mess.',
      name: 'Daniel Reyes',
      role: 'Principal · Reyes Build Co.',
    },
  };

  const [openFaq, setOpenFaq] = useState(0);

  const faqs = variant === 'residential' ? [
    { q: 'Do you pull permits?', a: 'Yes. Anything that requires one — we file, we schedule the inspection, and we don\'t close the wall until green‑tagged. It\'s in the quote.' },
    { q: 'Can I just hire you to look at something weird?', a: 'Absolutely. A $149 diagnostic visit covers the first hour. If we do the repair that same day, that $149 comes off the repair price.' },
    { q: 'How fast can you come out?', a: 'Non‑emergency: usually within 3–5 business days. Emergencies inside Austin city limits: typically under 2 hours during business hours, after hours by dispatch.' },
    { q: 'Are you licensed and insured?', a: 'Master electrician, TECL #26841. $2M general liability + workers\' comp. Certificate on request.' },
  ] : [
    { q: 'Will you bid plan‑and‑spec work?', a: 'Yes, at no cost. Send plans via email or your project portal — Procore, BuildingConnected, whatever you\'re on. 72‑hour turnaround on most commercial scopes.' },
    { q: 'Do you carry bonds?', a: 'Bonded to $500k standing; higher on request. Certificate of insurance and W‑9 ready to go on file.' },
    { q: 'Can you staff multiple jobs at once?', a: 'We run 3–4 concurrent commercial jobs typical. Eleven licensed electricians on the crew plus apprentices. Schedule is honest.' },
    { q: 'Maintenance contract scope?', a: 'Customized. Monthly walk, quarterly thermal scan of panels, priority dispatch, discounted T&M rates on anything outside the PM scope.' },
  ];

  return (
    <div className="page-fade">
      {/* HERO */}
      <section style={{ padding: '40px 0 0' }}>
        <div className="container">
          <div className="row between wrap" style={{ marginBottom: 24 }}>
            <span className="kicker">{data.kicker}</span>
            <span className="meta">FILE № {data.fileNo}</span>
          </div>

          <h1 className="display display-xl">
            {data.title} <span className="italic" style={{ color: 'var(--maroon)' }}>{data.titleItalic}</span>
          </h1>

          <div className="hero-2col" style={{
            display: 'grid',
            gridTemplateColumns: '1.3fr 1fr',
            gap: 48,
            marginTop: 40,
            alignItems: 'end',
          }}>
            <p className="lede" style={{ margin: 0 }}>{data.lede}</p>
            <div className="row gap-12 wrap">
              <a className="btn btn-primary" href="#" onClick={(e) => { e.preventDefault(); onNav('contact'); }}>
                Request a quote <Arrow />
              </a>
              <a className="btn btn-ghost" href="tel:5125550117">
                (512) 555‑0117
              </a>
            </div>
          </div>

          <div style={{ marginTop: 56 }}>
            <Ph
              tag={data.heroTag}
              label={data.heroLabel}
              src={data.heroImg}
              imgFilter={data.heroImgFilter}
              dark
              style={{ height: 'min(480px, 44vw)' }}
            />
          </div>
        </div>
      </section>

      {/* SCOPE */}
      <section className="section">
        <div className="container">
          <div className="section-head">
            <span className="kicker">Scope of work</span>
            <h2 className="display display-l" style={{ margin: 0 }}>
              What we'll <span className="italic" style={{ color: 'var(--maroon)' }}>take on.</span>
            </h2>
          </div>

          <div className="scope-grid" style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(2, 1fr)',
            gap: 0,
            borderTop: '1px solid var(--ink)',
          }}>
            {data.scope.map((s, i) => (
              <div key={i} style={{
                display: 'grid',
                gridTemplateColumns: '60px 1fr',
                gap: 24,
                padding: '28px 24px',
                borderBottom: '1px solid var(--grey-line)',
                borderRight: i % 2 === 0 ? '1px solid var(--grey-line)' : 'none',
              }}>
                <span className="meta" style={{ color: 'var(--maroon)' }}>{s.n}</span>
                <div>
                  <div className="display" style={{ fontSize: 22, lineHeight: 1.1 }}>{s.t}</div>
                  <p style={{ marginTop: 10, fontSize: 14, color: 'var(--ink-soft)', lineHeight: 1.5 }}>{s.d}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* PRICING TABLE */}
      <section style={{ background: 'var(--grey-warm)', padding: '100px 0' }}>
        <div className="container">
          <div className="section-head" style={{ borderBottomColor: 'var(--ink)' }}>
            <span className="kicker">Honest pricing</span>
            <h2 className="display display-l" style={{ margin: 0 }}>
              A short, <span className="italic" style={{ color: 'var(--maroon)' }}>honest</span> price sheet.
            </h2>
          </div>

          <table className="pricing-table" style={{
            width: '100%',
            borderCollapse: 'collapse',
            fontSize: 15,
          }}>
            <thead>
              <tr style={{ borderBottom: '1px solid var(--ink)' }}>
                <th style={{ textAlign: 'left', padding: '16px 0', fontFamily: 'var(--font-mono)', fontSize: 11, letterSpacing: '0.1em', textTransform: 'uppercase', fontWeight: 400 }}>Line item</th>
                <th style={{ textAlign: 'left', padding: '16px 0', fontFamily: 'var(--font-mono)', fontSize: 11, letterSpacing: '0.1em', textTransform: 'uppercase', fontWeight: 400 }}>Price</th>
                <th style={{ textAlign: 'left', padding: '16px 0', fontFamily: 'var(--font-mono)', fontSize: 11, letterSpacing: '0.1em', textTransform: 'uppercase', fontWeight: 400 }}>Notes</th>
              </tr>
            </thead>
            <tbody>
              {data.pricing.map((p, i) => (
                <tr key={i} style={{ borderBottom: '1px solid var(--grey-line)' }}>
                  <td style={{ padding: '20px 0', fontFamily: 'var(--font-display)', fontSize: 22 }}>{p.t}</td>
                  <td style={{ padding: '20px 0', fontFamily: 'var(--font-display)', fontSize: 22, color: 'var(--maroon)' }}>{p.p}</td>
                  <td style={{ padding: '20px 0', color: 'var(--ink-soft)' }}>{p.d}</td>
                </tr>
              ))}
            </tbody>
          </table>

          <p className="meta mt-24" style={{ maxWidth: '60ch' }}>
            † Prices good for Austin city limits. Materials billed at cost + 15%. Written quote supersedes this sheet; your estimate is always the final word.
          </p>
        </div>
      </section>

      {/* TESTIMONIAL */}
      <section className="section">
        <div className="container">
          <div className="testi-grid" style={{
            border: '1px solid var(--ink)',
            padding: '64px 48px',
            display: 'grid',
            gridTemplateColumns: '1fr 2fr',
            gap: 48,
          }}>
            <div className="col gap-16">
              <span className="meta">TESTIMONIAL</span>
              <Ph style={{ width: 120, height: 120, borderRadius: '50%' }} />
              <div>
                <div style={{ fontFamily: 'var(--font-display)', fontSize: 22 }}>{data.testimonial.name}</div>
                <div className="meta mt-8">{data.testimonial.role}</div>
              </div>
            </div>
            <blockquote className="display" style={{
              margin: 0,
              fontSize: 'clamp(24px, 2.6vw, 38px)',
              lineHeight: 1.25,
              fontStyle: 'italic',
            }}>
              "{data.testimonial.q}"
            </blockquote>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="section" style={{ paddingTop: 0 }}>
        <div className="container">
          <div className="section-head">
            <span className="kicker">Questions we get</span>
            <h2 className="display display-l" style={{ margin: 0 }}>
              Straight <span className="italic" style={{ color: 'var(--maroon)' }}>answers.</span>
            </h2>
          </div>

          <div style={{ borderTop: '1px solid var(--ink)' }}>
            {faqs.map((f, i) => (
              <div key={i} style={{ borderBottom: '1px solid var(--ink)' }}>
                <button onClick={() => setOpenFaq(openFaq === i ? -1 : i)} style={{
                  width: '100%',
                  padding: '28px 0',
                  display: 'flex',
                  justifyContent: 'space-between',
                  alignItems: 'center',
                  textAlign: 'left',
                  gap: 24,
                }}>
                  <span className="display" style={{ fontSize: 'clamp(22px, 2.4vw, 32px)' }}>{f.q}</span>
                  <Plus open={openFaq === i} />
                </button>
                <div style={{
                  overflow: 'hidden',
                  maxHeight: openFaq === i ? 300 : 0,
                  transition: 'max-height .35s ease',
                }}>
                  <p style={{ paddingBottom: 28, maxWidth: '65ch', fontSize: 16, color: 'var(--ink-soft)', lineHeight: 1.6, margin: 0 }}>
                    {f.a}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CROSS-LINK */}
      <section style={{ padding: '60px 0 120px' }}>
        <div className="container">
          <a href="#" className="cross-link" onClick={(e) => { e.preventDefault(); onNav(variant === 'residential' ? 'commercial' : 'residential'); }}
            style={{
              display: 'grid',
              gridTemplateColumns: '1fr auto',
              alignItems: 'center',
              padding: '40px 0',
              borderTop: '1px solid var(--ink)',
              borderBottom: '1px solid var(--ink)',
            }}>
            <div>
              <div className="meta">NEXT</div>
              <div className="display display-m mt-8" style={{ margin: 0 }}>
                {variant === 'residential' ? 'Commercial services' : 'Residential services'}
                <span className="italic" style={{ color: 'var(--maroon)' }}> →</span>
              </div>
            </div>
            <Arrow size={28} />
          </a>
        </div>
      </section>

    </div>
  );
}

Object.assign(window, { ServicePage });
