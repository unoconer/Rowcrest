import { icon, SERVICES, faqList, faqSchema, ctaBand, B, esc, mediaImg, heroVideo, phoneHref, SITE, ORG_ID, addressHtml, hoursShort } from '../lib.mjs';

const ADMIN = SERVICES.filter((s) => s.group === 'admin');
const EDU = SERVICES.filter((s) => s.group === 'education');

const faqs = [
  { q: 'What does Rowcrest do?', a: '<p>Rowcrest provides administrative support and education for Solo and self-directed 401(k) plans: setup alongside the provider you choose, plan records and year-end values, Form 5500-EZ preparation, and year-round help. You stay the plan sponsor and make every decision.</p>' },
  { q: 'Where do we meet?', a: '<p>At the Rowcrest office in Fresno, Monday through Friday, by appointment. If you’d rather talk first, we’re happy to start with a phone call.</p>' },
  { q: 'Do you hold or invest my retirement money?', a: '<p>No. Plan assets stay in accounts titled to your plan at the institutions you choose. We never hold, move or invest plan money, and we don’t recommend investments.</p>' },
  { q: 'Is this investment, legal or tax advice?', a: '<p>No. It’s administrative support and general education. For individualized advice, consult a licensed financial professional, CPA or attorney — we’re glad to coordinate with yours.</p>' },
];

const STEPS = [
  ['Book a visit', 'Call or send the form, and we’ll set a time at the Fresno office — or start with a quick phone call.'],
  ['Walk the rows', 'We review your business, any existing plan, and where you want help.'],
  ['Agree the scope', 'In writing: what we handle, what your provider handles, and what stays with you.'],
  ['Keep it current', 'Activity logged, reminders sent, and Form 5500-EZ prepared when it’s due.'],
];

export default {
  path: '/',
  title: 'Rowcrest | Solo & Self-Directed 401(k) Support in Fresno, CA',
  description:
    'Rowcrest helps Fresno business owners run Solo and self-directed 401(k) plans: plan setup, records and valuations, Form 5500-EZ preparation and year-round support.',
  schema: [faqSchema(faqs)],
  bodyClass: 'is-home',
  body: () => `
<section class="hero" aria-labelledby="hero-h">
  <div class="hero__bg" aria-hidden="true">${heroVideo()}<div class="hero__fallback"></div></div>
  <div class="container hero__inner">
    <div class="hero__copy">
      <p class="kicker kicker--light">Fresno · ${esc(B.tagline)}</p>
      <h1 id="hero-h">Your 401(k), kept in <em>orderly rows.</em></h1>
      <p class="hero__lead">Rowcrest helps Fresno business owners and self-employed professionals set up and run Solo and self-directed 401(k) plans — tidy records, Form 5500-EZ on time, and plain answers. Visit us at our Fresno office.</p>
      <div class="btn-row">
        <a class="btn btn--accent btn--lg" href="/contact/">Book an Office Visit</a>
        <a class="btn btn--glass btn--lg" href="${phoneHref()}">${icon('phone')} ${esc(B.phone)}</a>
      </div>
    </div>
    <div class="crest-card" aria-label="Visit the office">
      <p class="crest-card__k">Visit the office</p>
      <p class="crest-card__addr">${icon('pin')}<span>${addressHtml()}</span></p>
      <p class="crest-card__row">${icon('clock')}<span>Mon–Fri · 9:00 AM – 5:00 PM</span></p>
      <p class="crest-card__row">${icon('phone')}<a href="${phoneHref()}">${esc(B.phone)}</a></p>
      <a class="btn btn--dark btn--block" href="/contact/">Request an appointment</a>
    </div>
  </div>
</section>

<section class="section" aria-labelledby="services-h">
  <div class="container">
    <div class="head head--split">
      <div><p class="kicker">Services</p><h2 id="services-h">Plan support, row by row</h2></div>
      <p>Hands-on administrative help for owner-run plans — at your direction, alongside the plan provider you choose. <a href="/services/">See every service in detail</a>.</p>
    </div>
    <div class="row-grid">
      ${ADMIN.map((s, i) => `<a class="row-card teaser-link" href="/services/#${s.id}"><div class="row-card__top">${icon(s.icon, 'row-card__icon')}<span class="row-card__n">0${i + 1}</span></div><h3>${s.title}</h3><p>${s.short}</p></a>`).join('')}
    </div>
    <div class="edu-strip">
      <p class="edu-strip__k">Also included</p>
      ${EDU.map((s) => `<div>${icon(s.icon)}<span><strong>${s.title}</strong> — ${s.short}</span></div>`).join('')}
    </div>
  </div>
</section>

<section class="section section--sand" aria-labelledby="process-h">
  <div class="container split">
    <figure class="split__media">${mediaImg('records', { cls: 'split__img', label: 'Plan records' })}</figure>
    <div class="split__text">
      <p class="kicker">How it works</p>
      <h2 id="process-h">From first visit to a plan that stays current</h2>
      <ol class="steps">${STEPS.map(([t, d], i) => `<li><span class="steps__n">${i + 1}</span><div><h3>${t}</h3><p>${d}</p></div></li>`).join('')}</ol>
    </div>
  </div>
</section>

<section class="section section--ink" aria-labelledby="roles-h">
  <div class="container">
    <div class="head head--split"><div><p class="kicker kicker--light">Who does what</p><h2 id="roles-h">Three roles, clearly divided</h2></div><p>A self-directed plan stays in good standing when everyone knows whose job each task is.</p></div>
    <div class="resp">
      <div class="resp__col"><h3>You, the sponsor</h3><ul><li>Choose the plan and provider</li><li>Decide and deposit contributions</li><li>Make every investment decision</li><li>Review, sign and file returns</li></ul></div>
      <div class="resp__col resp__col--us"><h3>Rowcrest</h3><ul><li>Setup assistance and checklists</li><li>Plan records and year-end values</li><li>Form 5500-EZ preparation</li><li>Reminders and answers all year</li></ul></div>
      <div class="resp__col"><h3>Your provider</h3><ul><li>Plan document and amendments</li><li>Plan accounts or custody, as applicable</li><li>Its own statements and notices</li></ul></div>
    </div>
    <p class="roles-note">${icon('shield')} Rowcrest never holds or invests plan money, doesn’t recommend investments, and isn’t a plan trustee, custodian or fiduciary.</p>
  </div>
</section>

<section class="section" aria-labelledby="learn-h">
  <div class="container">
    <div class="head head--center"><p class="kicker">401(k) basics</p><h2 id="learn-h">Know the ground before you plant</h2><p>Plain-English guides to the rules that matter most. General education, not advice.</p></div>
    <div class="teasers">
      <a class="teaser" href="/401k-basics/#solo-401k"><h3>Solo 401(k)</h3><p>Who qualifies, the two contribution roles, Roth choices, and what hiring changes.</p><span class="teaser__more">Read the basics ${icon('arrow')}</span></a>
      <a class="teaser" href="/401k-basics/#self-directed"><h3>Self-directed 401(k)</h3><p>What a plan may hold beyond a fund menu, and how assets must be titled.</p><span class="teaser__more">Read the basics ${icon('arrow')}</span></a>
      <a class="teaser" href="/401k-basics/#prohibited"><h3>Rules to respect</h3><p>Disqualified persons, prohibited transactions, and the Form 5500-EZ threshold.</p><span class="teaser__more">Read the basics ${icon('arrow')}</span></a>
    </div>
  </div>
</section>

<section class="section section--sand" aria-labelledby="about-h">
  <div class="container split">
    <div class="split__text">
      <p class="kicker">About Rowcrest</p>
      <h2 id="about-h">Rooted in Fresno, organized by nature</h2>
      <p class="lead">The name comes from the orchard rows that define the valley around Fresno — evenly spaced, carefully tended, and built to last. That’s how we think a retirement plan should be kept.</p>
      <p>We work with consultants, contractors, growers, clinicians, tradespeople and small firms, with meetings at our Fresno office by appointment.</p>
      <a class="link-arrow" href="/about/">More about Rowcrest ${icon('arrow')}</a>
    </div>
    <figure class="split__media">${mediaImg('orchard', { cls: 'split__img', label: 'Orchard rows' })}</figure>
  </div>
</section>

<section class="section" aria-labelledby="faq-h">
  <div class="container faq-wrap">
    <div class="faq-wrap__head"><p class="kicker">FAQ</p><h2 id="faq-h">Quick answers</h2><p>More in the <a href="/401k-basics/#faq">full FAQ</a>, or <a href="/contact/">ask us directly</a>.</p></div>
    ${faqList(faqs)}
  </div>
</section>

${ctaBand({ heading: 'Bring your plan questions to the office.', text: `Book a visit with Rowcrest in Fresno — new plan or existing one. ${hoursShort()}.`, button: 'Book an Office Visit' })}
`,
};
