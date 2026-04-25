/* Portfolio page — filterable grid of past projects */

function Portfolio({ onNav }) {
  const [filter, setFilter] = useState('all');
  const [selected, setSelected] = useState(null);

  const projects = [
    { id: 1, title: 'Clarksville service upgrade', cat: 'residential', scope: '200A panel swap', year: '2026', loc: 'Clarksville', days: '2', size: 'span 6', img: 'residential-images/residential-kitchen-living-room2.webp', photoLabel: 'Kitchen & living room · Clarksville' },
    { id: 2, title: 'East 6th tenant finish', cat: 'commercial', scope: 'Restaurant build‑out', year: '2026', loc: 'East 6th', days: '18', size: 'span 6' },
    { id: 3, title: 'Mueller custom home', cat: 'contractor', scope: 'Rough‑in · trim', year: '2025', loc: 'Mueller', days: '14', size: 'span 4' },
    { id: 4, title: 'Westlake EV charger', cat: 'residential', scope: 'Level 2 · Powerwall', year: '2025', loc: 'Westlake', days: '1', size: 'span 4', img: 'residential-images/residential-EV-powerwall-installed.avif', photoLabel: 'EV Powerwall installed · Westlake' },
    { id: 5, title: 'South Congress retail', cat: 'commercial', scope: 'LED retrofit', year: '2025', loc: 'S. Congress', days: '5', size: 'span 4' },
    { id: 6, title: 'Travis Heights rewire', cat: 'residential', scope: 'Whole‑home rewire', year: '2025', loc: 'Travis Heights', days: '9', size: 'span 6', img: 'residential-images/residential-closet1.webp', imgFilter: 'sepia(25%) contrast(1.1)', photoLabel: 'Closet lighting · Travis Heights' },
    { id: 7, title: 'Reyes Build · Tarrytown', cat: 'contractor', scope: 'Custom home sub', year: '2025', loc: 'Tarrytown', days: '22', size: 'span 6' },
    { id: 8, title: 'Rainey St. bar build‑out', cat: 'commercial', scope: 'Bar · kitchen · sound', year: '2024', loc: 'Rainey St.', days: '16', size: 'span 4' },
    { id: 9, title: 'Hyde Park ADU', cat: 'residential', scope: 'ADU electrical', year: '2024', loc: 'Hyde Park', days: '6', size: 'span 4', img: 'residential-images/residential-kitchen1.webp', photoLabel: 'Kitchen electrical · Hyde Park' },
    { id: 10, title: 'Domain office fit‑out', cat: 'commercial', scope: 'Office tenant finish', year: '2024', loc: 'The Domain', days: '11', size: 'span 4' },
  ];

  const filtered = filter === 'all' ? projects : projects.filter(p => p.cat === filter);

  const cats = [
    { id: 'all', label: 'All projects', count: projects.length },
    { id: 'residential', label: 'Residential', count: projects.filter(p => p.cat === 'residential').length },
    { id: 'commercial', label: 'Commercial', count: projects.filter(p => p.cat === 'commercial').length },
    { id: 'contractor', label: 'Contractor partners', count: projects.filter(p => p.cat === 'contractor').length },
  ];

  return (
    <div className="page-fade">
      <section style={{ padding: '40px 0 0' }}>
        <div className="container">
          <div className="row between wrap" style={{ marginBottom: 24 }}>
            <span className="kicker">Selected work · 2024–2026</span>
            <span className="meta">FILE № ZN‑P / PORTFOLIO</span>
          </div>

          <h1 className="display display-xl">
            Our <span className="italic" style={{ color: 'var(--maroon)' }}>work.</span>
          </h1>

          <p className="lede mt-32">
            A slice of recent jobs across the metro — residential remodels, commercial finish‑outs, and sub work for the GCs we show up for regularly. Tap a project for details.
          </p>

          {/* Filter bar */}
          <div className="portfolio-filter" style={{
            display: 'flex',
            gap: 0,
            marginTop: 64,
            borderTop: '1px solid var(--ink)',
            borderBottom: '1px solid var(--ink)',
            flexWrap: 'wrap',
          }}>
            {cats.map((c, i) => (
              <button key={c.id} onClick={() => setFilter(c.id)}
                style={{
                  flex: '1 1 200px',
                  padding: '24px 20px',
                  textAlign: 'left',
                  borderRight: i < cats.length - 1 ? '1px solid var(--grey-line)' : 'none',
                  background: filter === c.id ? 'var(--maroon)' : 'transparent',
                  color: filter === c.id ? 'var(--paper)' : 'var(--ink)',
                  transition: 'all .2s',
                }}>
                <div className="meta" style={{ color: 'inherit', opacity: 0.7 }}>
                  {String(c.count).padStart(2, '0')} PROJECTS
                </div>
                <div className="display" style={{ fontSize: 28, marginTop: 8 }}>{c.label}</div>
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Grid */}
      <section style={{ padding: '40px 0 120px' }}>
        <div className="container">
          <div className="portfolio-grid" style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(12, 1fr)',
            gap: 16,
          }}>
            {filtered.map((p, i) => (
              <div key={p.id}
                onClick={() => setSelected(p)}
                style={{
                  gridColumn: p.size,
                  cursor: 'pointer',
                  transition: 'transform .25s ease',
                }}
                onMouseEnter={(e) => e.currentTarget.style.transform = 'translateY(-4px)'}
                onMouseLeave={(e) => e.currentTarget.style.transform = 'none'}
              >
                <Ph
                  tag={p.cat.toUpperCase()}
                  label={p.photoLabel || (p.scope + ' · ' + p.loc)}
                  src={p.img}
                  imgFilter={p.imgFilter}
                  dark={i % 3 === 1}
                  style={{ height: 300 }}
                />
                <div style={{
                  display: 'grid',
                  gridTemplateColumns: '1fr auto',
                  gap: 16,
                  padding: '18px 0',
                  borderBottom: '1px solid var(--ink)',
                  alignItems: 'end',
                }}>
                  <div>
                    <div className="display" style={{ fontSize: 22, lineHeight: 1.1 }}>{p.title}</div>
                    <div className="meta mt-8">{p.year} · {p.days} DAYS ON SITE</div>
                  </div>
                  <Arrow size={18} />
                </div>
              </div>
            ))}
          </div>

          {filtered.length === 0 && (
            <div style={{ padding: 80, textAlign: 'center', color: 'var(--ink-soft)' }}>
              No projects in that category.
            </div>
          )}
        </div>
      </section>

      {/* Modal */}
      {selected && (
        <div onClick={() => setSelected(null)} style={{
          position: 'fixed',
          inset: 0,
          background: 'rgba(26,22,20,0.75)',
          zIndex: 200,
          display: 'grid',
          placeItems: 'center',
          padding: 40,
          animation: 'fadeUp .25s ease',
        }}>
          <div onClick={(e) => e.stopPropagation()} style={{
            background: 'var(--paper)',
            maxWidth: 960,
            width: '100%',
            maxHeight: '90vh',
            overflow: 'auto',
            border: '1px solid var(--ink)',
          }}>
            <div style={{ padding: '24px 32px', borderBottom: '1px solid var(--grey-line)', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
              <span className="meta">PROJECT № {String(selected.id).padStart(3, '0')}</span>
              <button onClick={() => setSelected(null)} style={{ fontFamily: 'var(--font-mono)', fontSize: 11, letterSpacing: '0.1em', textTransform: 'uppercase' }}>
                Close ×
              </button>
            </div>
            <Ph tag={selected.cat.toUpperCase()} label={selected.photoLabel || (selected.scope + ' · ' + selected.loc)} src={selected.img} imgFilter={selected.imgFilter} style={{ height: 400 }} dark />
            <div style={{ padding: 40 }}>
              <h2 className="display display-m" style={{ margin: 0 }}>{selected.title}</h2>
              <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: 24, marginTop: 32, paddingTop: 24, borderTop: '1px solid var(--grey-line)' }}>
                <div><div className="meta">TYPE</div><div style={{ fontFamily: 'var(--font-display)', fontSize: 22, marginTop: 8, textTransform: 'capitalize' }}>{selected.cat}</div></div>
                <div><div className="meta">YEAR</div><div style={{ fontFamily: 'var(--font-display)', fontSize: 22, marginTop: 8 }}>{selected.year}</div></div>
                <div><div className="meta">LOCATION</div><div style={{ fontFamily: 'var(--font-display)', fontSize: 22, marginTop: 8 }}>{selected.loc}</div></div>
                <div><div className="meta">ON SITE</div><div style={{ fontFamily: 'var(--font-display)', fontSize: 22, marginTop: 8 }}>{selected.days} days</div></div>
              </div>
              <p className="lede mt-32">
                {selected.scope}. Coordinated with the GC and other trades, permitted through the City of Austin, inspected and green‑tagged on first pass. Two‑year workmanship warranty, standard on every job.
              </p>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

Object.assign(window, { Portfolio });
