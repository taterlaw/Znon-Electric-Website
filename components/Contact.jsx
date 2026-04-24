/* Contact + multi-step quote request form */

function Contact({ onNav }) {
  const [step, setStep] = useState(1);
  const [data, setData] = useState({
    type: '',
    scope: [],
    urgency: '',
    address: '',
    sqft: '',
    notes: '',
    name: '',
    email: '',
    phone: '',
    contact_pref: 'phone',
  });
  const [submitted, setSubmitted] = useState(false);
  const [errors, setErrors] = useState({});

  const update = (k, v) => { setData(d => ({ ...d, [k]: v })); setErrors(e => ({ ...e, [k]: null })); };
  const toggleScope = (s) => setData(d => ({
    ...d,
    scope: d.scope.includes(s) ? d.scope.filter(x => x !== s) : [...d.scope, s]
  }));

  const validateStep = () => {
    const e = {};
    if (step === 1) {
      if (!data.type) e.type = 'Pick one';
      if (data.scope.length === 0) e.scope = 'Pick at least one';
      if (!data.urgency) e.urgency = 'How soon?';
    }
    if (step === 2) {
      if (!data.address) e.address = 'Address or neighborhood';
    }
    if (step === 3) {
      if (!data.name) e.name = 'Your name';
      if (!data.email && !data.phone) { e.email = 'Need one or the other'; e.phone = 'Need one or the other'; }
      if (data.email && !/^\S+@\S+\.\S+$/.test(data.email)) e.email = 'Check that email';
    }
    setErrors(e);
    return Object.keys(e).length === 0;
  };

  const next = () => { if (validateStep()) setStep(s => s + 1); };
  const back = () => setStep(s => Math.max(1, s - 1));
  const submit = () => { if (validateStep()) setSubmitted(true); };

  const scopeOptions = data.type === 'Commercial' || data.type === 'Contractor sub'
    ? ['Tenant finish', 'New construction', 'Maintenance', 'LED retrofit', 'Service call', 'Low‑voltage', 'Other']
    : ['Panel upgrade', 'EV charger', 'Lighting', 'Rewire', 'Remodel', 'Troubleshoot', 'Generator / battery', 'Other'];

  if (submitted) {
    return (
      <div className="page-fade" style={{ padding: '80px 0 160px' }}>
        <div className="container">
          <span className="kicker">Got it</span>
          <h1 className="display display-xl mt-24">
            Thanks, {data.name.split(' ')[0]}.<br/>
            <span className="italic" style={{ color: 'var(--maroon)' }}>We'll be in touch.</span>
          </h1>
          <p className="lede mt-32" style={{ maxWidth: '50ch' }}>
            Your request is on our board. Expect a call or email within two business hours, during business hours. If it's an emergency right now, pick up the phone: <a href="tel:5125550117" style={{ color: 'var(--maroon)', borderBottom: '1px solid var(--maroon)' }}>(512) 555‑0117</a>.
          </p>
          <div style={{ border: '1px solid var(--ink)', padding: 32, marginTop: 48, maxWidth: 640 }}>
            <div className="meta">REQUEST SUMMARY · #ZN{Math.floor(Math.random()*9000+1000)}</div>
            <table style={{ width: '100%', marginTop: 20, borderCollapse: 'collapse' }}>
              <tbody>
                {[
                  ['Type', data.type],
                  ['Scope', data.scope.join(', ')],
                  ['Urgency', data.urgency],
                  ['Address', data.address],
                  ['Contact', `${data.name} · ${data.email || data.phone}`],
                ].map(([k, v]) => (
                  <tr key={k} style={{ borderTop: '1px solid var(--grey-line)' }}>
                    <td style={{ padding: '12px 12px 12px 0', fontFamily: 'var(--font-mono)', fontSize: 11, letterSpacing: '0.08em', textTransform: 'uppercase', color: 'var(--ink-soft)', verticalAlign: 'top', width: 100 }}>{k}</td>
                    <td style={{ padding: '12px 0', fontSize: 15 }}>{v}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <div className="row gap-16 wrap mt-32">
            <button className="btn btn-ghost" onClick={() => { setSubmitted(false); setStep(1); setData({ type: '', scope: [], urgency: '', address: '', sqft: '', notes: '', name: '', email: '', phone: '', contact_pref: 'phone' }); }}>
              Submit another
            </button>
            <button className="btn btn-quiet" onClick={() => onNav('home')}>Back to home <Arrow /></button>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="page-fade">
      <section style={{ padding: '40px 0 0' }}>
        <div className="container">
          <div className="row between wrap" style={{ marginBottom: 24 }}>
            <span className="kicker">Get in touch</span>
            <span className="meta">FILE № ZN‑Q / QUOTE REQUEST</span>
          </div>

          <h1 className="display display-xl">
            Tell us about <span className="italic" style={{ color: 'var(--maroon)' }}>the job.</span>
          </h1>

          <p className="lede mt-32" style={{ maxWidth: '50ch' }}>
            Three steps, ninety seconds. We'll write back within two business hours. Prefer to talk? <a href="tel:5125550117" style={{ borderBottom: '1px solid var(--ink)' }}>(512) 555‑0117</a>.
          </p>
        </div>
      </section>

      <section style={{ padding: '60px 0 120px' }}>
        <div className="container">
          <div style={{
            display: 'grid',
            gridTemplateColumns: '1fr 2fr',
            gap: 64,
            alignItems: 'start',
          }}>
            {/* Sidebar */}
            <aside style={{ position: 'sticky', top: 96 }}>
              <div style={{ borderTop: '1px solid var(--ink)', paddingTop: 20 }}>
                <div className="meta">PROGRESS</div>
                <div style={{ display: 'flex', gap: 4, marginTop: 16 }}>
                  {[1,2,3].map(s => (
                    <div key={s} style={{
                      flex: 1,
                      height: 4,
                      background: step >= s ? 'var(--maroon)' : 'var(--grey-line)',
                    }} />
                  ))}
                </div>
                <div className="meta mt-16">STEP {step} OF 3</div>
              </div>

              <div style={{ marginTop: 48 }}>
                {[
                  { n: 1, t: 'The job', d: 'Type, scope, urgency.' },
                  { n: 2, t: 'The place', d: 'Where is it. Any notes.' },
                  { n: 3, t: 'You', d: 'How we reach you back.' },
                ].map(item => (
                  <div key={item.n} style={{
                    padding: '20px 0',
                    borderBottom: '1px solid var(--grey-line)',
                    opacity: step === item.n ? 1 : 0.35,
                  }}>
                    <div className="meta">0{item.n}</div>
                    <div className="display" style={{ fontSize: 22, marginTop: 6 }}>{item.t}</div>
                    <div style={{ fontSize: 13, color: 'var(--ink-soft)', marginTop: 4 }}>{item.d}</div>
                  </div>
                ))}
              </div>

              <div style={{ marginTop: 40, padding: 20, background: 'var(--grey-warm)' }}>
                <div className="meta">OR</div>
                <a href="tel:5125550117" className="display" style={{ fontSize: 26, display: 'block', marginTop: 8 }}>
                  (512) 555‑0117
                </a>
                <div className="meta mt-8">Mon–Sat · 7a–7p</div>
              </div>
            </aside>

            {/* Form */}
            <div>
              {step === 1 && (
                <div className="page-fade">
                  <FormField label="What kind of job?" error={errors.type}>
                    <ChipRow options={['Residential', 'Commercial', 'Contractor sub', 'Emergency / repair']}
                      value={data.type} onChange={v => update('type', v)} />
                  </FormField>

                  <FormField label="What's the scope? (pick any)" error={errors.scope}>
                    <ChipRow options={scopeOptions} value={data.scope} onChange={toggleScope} multi />
                  </FormField>

                  <FormField label="How soon do you need it?" error={errors.urgency}>
                    <ChipRow options={['ASAP / emergency', 'Within 2 weeks', 'Within a month', 'Planning ahead']}
                      value={data.urgency} onChange={v => update('urgency', v)} />
                  </FormField>
                </div>
              )}

              {step === 2 && (
                <div className="page-fade">
                  <FormField label="Address or neighborhood" hint="We'll schedule a free walk‑through if it's inside Austin." error={errors.address}>
                    <Input value={data.address} onChange={v => update('address', v)} placeholder="e.g. 1912 Alameda Dr, Travis Heights" />
                  </FormField>

                  <FormField label="Approximate size" hint="Helps us right‑size the walk. Skip if you don't know.">
                    <Input value={data.sqft} onChange={v => update('sqft', v)} placeholder="e.g. 2,200 sq ft / 12,000 sq ft commercial" />
                  </FormField>

                  <FormField label="Anything we should know?" hint="Old wiring. Weird breaker. Dogs on site. Whatever.">
                    <Textarea value={data.notes} onChange={v => update('notes', v)} placeholder="Optional" />
                  </FormField>
                </div>
              )}

              {step === 3 && (
                <div className="page-fade">
                  <FormField label="Your name" error={errors.name}>
                    <Input value={data.name} onChange={v => update('name', v)} placeholder="First and last" />
                  </FormField>

                  <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 24 }}>
                    <FormField label="Email" error={errors.email}>
                      <Input value={data.email} onChange={v => update('email', v)} placeholder="you@email.com" type="email" />
                    </FormField>
                    <FormField label="Phone" error={errors.phone}>
                      <Input value={data.phone} onChange={v => update('phone', v)} placeholder="(512) 555‑0000" />
                    </FormField>
                  </div>

                  <FormField label="How should we reach back?">
                    <ChipRow options={['Phone call', 'Text', 'Email']}
                      value={data.contact_pref} onChange={v => update('contact_pref', v)} />
                  </FormField>
                </div>
              )}

              <div style={{ display: 'flex', justifyContent: 'space-between', marginTop: 48, paddingTop: 32, borderTop: '1px solid var(--grey-line)' }}>
                <button className="btn btn-quiet" onClick={back} style={{ opacity: step === 1 ? 0.3 : 1, pointerEvents: step === 1 ? 'none' : 'auto' }}>
                  ← Back
                </button>
                {step < 3 ? (
                  <button className="btn btn-primary" onClick={next}>Continue <Arrow /></button>
                ) : (
                  <button className="btn btn-primary" onClick={submit}>Send request <Arrow /></button>
                )}
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

function FormField({ label, hint, error, children }) {
  return (
    <div style={{ marginBottom: 32 }}>
      <label className="meta" style={{ display: 'block', color: 'var(--ink)' }}>{label}</label>
      {hint && <div style={{ fontSize: 13, color: 'var(--ink-soft)', marginTop: 6 }}>{hint}</div>}
      <div style={{ marginTop: 14 }}>{children}</div>
      {error && <div style={{ marginTop: 8, fontFamily: 'var(--font-mono)', fontSize: 11, letterSpacing: '0.08em', textTransform: 'uppercase', color: 'var(--maroon)' }}>{error}</div>}
    </div>
  );
}

function ChipRow({ options, value, onChange, multi }) {
  return (
    <div style={{ display: 'flex', gap: 8, flexWrap: 'wrap' }}>
      {options.map(opt => {
        const active = multi ? value.includes(opt) : value === opt;
        return (
          <button key={opt} onClick={() => onChange(opt)} style={{
            padding: '12px 18px',
            border: '1px solid ' + (active ? 'var(--ink)' : 'var(--grey-line)'),
            background: active ? 'var(--ink)' : 'var(--paper)',
            color: active ? 'var(--paper)' : 'var(--ink)',
            fontSize: 14,
            borderRadius: 999,
            transition: 'all .15s',
          }}>
            {active && multi && '✓ '}{opt}
          </button>
        );
      })}
    </div>
  );
}

function Input({ value, onChange, placeholder, type = 'text' }) {
  return (
    <input type={type} value={value} placeholder={placeholder}
      onChange={(e) => onChange(e.target.value)}
      style={{
        width: '100%',
        padding: '14px 0',
        border: 'none',
        borderBottom: '1px solid var(--ink)',
        background: 'transparent',
        fontFamily: 'var(--font-display)',
        fontSize: 24,
        color: 'var(--ink)',
        outline: 'none',
      }} />
  );
}

function Textarea({ value, onChange, placeholder }) {
  return (
    <textarea value={value} placeholder={placeholder}
      onChange={(e) => onChange(e.target.value)}
      rows={4}
      style={{
        width: '100%',
        padding: '14px 0',
        border: 'none',
        borderBottom: '1px solid var(--ink)',
        background: 'transparent',
        fontFamily: 'var(--font-ui)',
        fontSize: 16,
        color: 'var(--ink)',
        outline: 'none',
        resize: 'vertical',
      }} />
  );
}

Object.assign(window, { Contact });
