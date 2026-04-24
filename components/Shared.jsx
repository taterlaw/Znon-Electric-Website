/* Shared components for Znon Electric site */

const { useState, useEffect, useRef } = React;

// ---------- Placeholder ----------
function Ph({ label, tag, dark, style, className = '', children }) {
  return (
    <div className={`ph ${dark ? 'ph-dark' : ''} ${className}`} style={style}>
      {tag && <span className="ph-tag">{tag}</span>}
      {label && <span className="ph-label">{label}</span>}
      {children}
    </div>
  );
}

// ---------- Arrow ----------
function Arrow({ size = 14, style }) {
  return (
    <svg className="arrow" width={size} height={size} viewBox="0 0 14 14" fill="none" style={style}>
      <path d="M1 7h12M8 2l5 5-5 5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="square"/>
    </svg>
  );
}

// ---------- Plus / minus ----------
function Plus({ open }) {
  return (
    <svg width="16" height="16" viewBox="0 0 16 16" style={{ transition: 'transform .2s', transform: open ? 'rotate(45deg)' : 'none' }}>
      <path d="M8 2v12M2 8h12" stroke="currentColor" strokeWidth="1.5" />
    </svg>
  );
}

// ---------- Top nav ----------
function TopBar({ page, onNav }) {
  const [menuOpen, setMenuOpen] = useState(false);
  const items = [
    { id: 'home', label: 'Home' },
    { id: 'residential', label: 'Residential' },
    { id: 'commercial', label: 'Commercial' },
    { id: 'portfolio', label: 'Our Work' },
    { id: 'contact', label: 'Contact' },
  ];

  useEffect(() => {
    document.body.style.overflow = menuOpen ? 'hidden' : '';
    return () => { document.body.style.overflow = ''; };
  }, [menuOpen]);

  const go = (id) => { setMenuOpen(false); onNav(id); };

  return (
    <header className="topbar">
      <div className="topbar-inner">
        <a className="brand" href="#" onClick={(e) => { e.preventDefault(); go('home'); }}>
          <span className="brand-mark">Z</span>
          <span className="brand-name" style={{ marginLeft: -4 }}>non</span>
          <span className="brand-sub">Electric · Austin TX</span>
        </a>
        <nav className="nav-links nav-desktop">
          {items.map(it => (
            <a key={it.id} href="#" className={`nav-link ${page === it.id ? 'active' : ''}`}
              onClick={(e) => { e.preventDefault(); go(it.id); }}>
              {it.label}
            </a>
          ))}
        </nav>
        <a className="nav-cta nav-desktop" href="#" onClick={(e) => { e.preventDefault(); go('contact'); }}>
          <span className="dot" /> Request a quote
        </a>
        <button className="nav-burger" onClick={() => setMenuOpen(m => !m)} aria-label="Menu">
          <span style={{ transform: menuOpen ? 'translateY(5px) rotate(45deg)' : 'none' }} />
          <span style={{ opacity: menuOpen ? 0 : 1 }} />
          <span style={{ transform: menuOpen ? 'translateY(-5px) rotate(-45deg)' : 'none' }} />
        </button>
      </div>

      {menuOpen && (
        <div className="mobile-menu">
          {items.map(it => (
            <a key={it.id} href="#"
              className={`mobile-menu-link ${page === it.id ? 'active' : ''}`}
              onClick={(e) => { e.preventDefault(); go(it.id); }}>
              <span>{it.label}</span>
              <Arrow size={18} />
            </a>
          ))}
          <a className="btn btn-primary" style={{ margin: '24px 20px', justifyContent: 'space-between' }}
            href="#" onClick={(e) => { e.preventDefault(); go('contact'); }}>
            Request a quote <Arrow />
          </a>
          <a className="btn btn-ghost" style={{ margin: '0 20px', justifyContent: 'space-between' }}
            href="tel:5125550117">
            (512) 555‑0117 <Arrow />
          </a>
        </div>
      )}
    </header>
  );
}

// ---------- Footer ----------
function Footer({ onNav }) {
  return (
    <footer className="footer">
      <div className="footer-inner">
        <div style={{ paddingBottom: 48, borderBottom: '1px solid rgba(247,245,242,0.15)', marginBottom: 48 }}>
          <p className="footer-big" style={{ fontStyle: 'italic', maxWidth: '18ch' }}>
            Wired right.<br/>The first time.
          </p>
          <div className="row gap-16 wrap">
            <a className="btn btn-primary" href="#" onClick={(e) => { e.preventDefault(); onNav('contact'); }}>
              Request a quote <Arrow />
            </a>
            <a className="btn" style={{ color: 'var(--paper)', border: '1px solid rgba(247,245,242,0.3)' }} href="tel:5125550117">
              (512) 555‑0117
            </a>
          </div>
        </div>
        <div className="footer-top">
          <div className="footer-col">
            <h4>Znon Electric</h4>
            <p style={{ fontSize: 14, lineHeight: 1.55, color: 'rgba(247,245,242,0.75)', margin: 0, maxWidth: 36 + 'ch' }}>
              Licensed master electricians serving Austin, Round Rock, Pflugerville and the greater metro since 2004. Family‑owned. Insured. TECL #26841.
            </p>
          </div>
          <div className="footer-col">
            <h4>Services</h4>
            <a href="#" onClick={(e) => { e.preventDefault(); onNav('residential'); }}>Residential</a>
            <a href="#" onClick={(e) => { e.preventDefault(); onNav('commercial'); }}>Commercial</a>
            <a href="#" onClick={(e) => { e.preventDefault(); onNav('portfolio'); }}>Our Work</a>
            <a href="#" onClick={(e) => { e.preventDefault(); onNav('contact'); }}>Emergency calls</a>
          </div>
          <div className="footer-col">
            <h4>Company</h4>
            <a href="#">About</a>
            <a href="#">For contractors</a>
            <a href="#">Reviews</a>
            <a href="#">Careers</a>
          </div>
          <div className="footer-col">
            <h4>Contact</h4>
            <a href="mailto:service@z-non.com">service@z-non.com</a>
            <a href="tel:5125550117">(512) 555‑0117</a>
            <a href="#">Mon–Sat · 7a–7p</a>
            <a href="#">After‑hours dispatch</a>
          </div>
        </div>
        <div className="footer-bottom">
          <span>© 2026 Znon Electric LLC</span>
          <span>TECL #26841 · Bonded · Insured</span>
          <span>Austin, TX</span>
        </div>
      </div>
    </footer>
  );
}

// ---------- Marquee ticker ----------
function Ticker({ items, maroon }) {
  const content = (
    <span className="row gap-32" style={{ padding: '0 16px' }}>
      {items.map((t, i) => (
        <React.Fragment key={i}>
          <span style={{
            fontFamily: 'var(--font-mono)',
            fontSize: 12,
            letterSpacing: '0.12em',
            textTransform: 'uppercase',
          }}>{t}</span>
          <span style={{ opacity: 0.4 }}>✦</span>
        </React.Fragment>
      ))}
    </span>
  );
  return (
    <div style={{
      background: maroon ? 'var(--maroon)' : 'var(--ink)',
      color: 'var(--paper)',
      borderTop: '1px solid ' + (maroon ? 'var(--maroon-deep)' : 'var(--ink)'),
      borderBottom: '1px solid ' + (maroon ? 'var(--maroon-deep)' : 'var(--ink)'),
      overflow: 'hidden',
      padding: '12px 0',
      whiteSpace: 'nowrap',
    }}>
      <div style={{
        display: 'inline-flex',
        animation: 'tickerScroll 40s linear infinite',
      }}>
        {content}{content}{content}
      </div>
    </div>
  );
}

Object.assign(window, { Ph, Arrow, Plus, TopBar, Footer, Ticker });
