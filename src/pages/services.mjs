import { icon, SERVICES, ctaBand, B, esc, pageHero, SITE, ORG_ID, callout } from '../lib.mjs';

const crumbs = [{ name: 'Home', path: '/' }, { name: 'Services', path: '/services/' }];

/** Detail for each service: what's included, what you provide, what stays with you. */
const DETAIL = {
  planSetup: {
    intro: 'A new plan starts with paperwork that has to be right the first time. We walk through each step with you and the plan provider you choose, so nothing is missed and the plan begins on solid footing.',
    includes: ['A setup checklist tailored to your business type', 'Help completing the provider’s adoption agreement and forms', 'Guidance on obtaining the plan’s own EIN', 'Opening plan-titled accounts at the institutions you choose', 'A first-year calendar of contribution and filing dates'],
    yours: 'Choosing the plan provider and signing the plan documents. The provider supplies and maintains the plan document itself.',
  },
  recordkeeping: {
    intro: 'Good records are what make a self-directed plan defensible. We keep a running ledger of what goes into and out of the plan, and document what each asset is worth at year-end.',
    includes: ['Contributions logged by type (deferral, Roth, employer) and date', 'Every plan transaction recorded with supporting statements', 'Year-end values documented for each plan asset', 'Records organized for your CPA and for Form 5500-EZ', 'Gaps flagged early, before they become problems'],
    yours: 'Sending statements and documents as they arrive, and getting independent valuations where an asset requires one.',
  },
  filing: {
    intro: 'A one-participant plan generally must file Form 5500-EZ once its assets pass $250,000 at the end of the plan year, and always in its final year. We prepare the return from your plan records.',
    includes: ['A check each year of whether a filing is required', 'Form 5500-EZ prepared from your records', 'A review session before you sign', 'Reminders ahead of the July 31 deadline for calendar-year plans', 'Help with Form 5558 if an extension is needed'],
    yours: 'Reviewing, signing and filing the return. As plan sponsor, you remain responsible for it.',
  },
  ongoing: {
    intro: 'Businesses change, and plans have to keep up. Year-round support means a direct line when something new comes up — a hire, a new investment, a change in income.',
    includes: ['Contribution and deadline reminders through the year', 'Answers to administrative questions as they arise', 'A heads-up when a change may affect the plan, such as a first employee', 'An annual check-in to keep records and scope current', 'Coordination with your CPA or attorney when you ask'],
    yours: 'Every decision about contributions and investments, and advice from licensed professionals where your situation needs it.',
  },
};

export default {
  path: '/services/',
  title: 'Services | Solo & Self-Directed 401(k) Support in Fresno — Rowcrest',
  description: 'Plan setup, records and valuations, Form 5500-EZ preparation and year-round support for Solo and self-directed 401(k) plans, from Rowcrest in Fresno, CA.',
  crumbs,
  schema: SERVICES.map((s) => ({
    '@type': 'Service',
    '@id': `${SITE}/services/#${s.id}`,
    name: s.title,
    description: s.short,
    provider: { '@id': ORG_ID },
    areaServed: B.serviceArea.map((n) => ({ '@type': 'City', name: n })),
  })),
  body: () => {
    const admin = SERVICES.filter((s) => s.group === 'admin');
    const edu = SERVICES.filter((s) => s.group === 'education');
    return `
${pageHero({ kicker: 'Services', title: 'Administrative support for owner-run 401(k) plans', lead: 'Rowcrest handles the paperwork side of Solo and self-directed 401(k) plans for Fresno business owners — at your direction, alongside the plan provider you choose.', crumbs, image: 'records' })}

<section class="section">
  <div class="container">
    ${admin
      .map((s, i) => {
        const d = DETAIL[s.key];
        return `<article class="svc-detail" id="${s.id}" aria-labelledby="${s.id}-h">
      <div class="svc-detail__head">
        ${icon(s.icon, 'svc-detail__icon')}
        <span class="svc-detail__n">0${i + 1}</span>
        <h2 id="${s.id}-h">${s.title}</h2>
        <p class="lead">${d.intro}</p>
      </div>
      <div>
        <h3>What’s included</h3>
        <ul class="ticks">${d.includes.map((x) => `<li>${x}</li>`).join('')}</ul>
        <h3>What stays with you</h3>
        <p>${d.yours}</p>
      </div>
    </article>`;
      })
      .join('')}
  </div>
</section>

<section class="section section--sand" aria-labelledby="edu-h">
  <div class="container">
    <div class="head head--split"><div><p class="kicker">Education &amp; meetings</p><h2 id="edu-h">Understand your plan, not just own it</h2></div><p>Plain-English explanations of the rules — so you can make your own decisions with confidence.</p></div>
    <div class="teasers">
      ${edu.map((s) => `<article class="teaser" id="${s.id}">${icon(s.icon, 'svc-detail__icon')}<h3>${s.title}</h3><p>${
        {
          education: 'What self-direction permits and prohibits, how assets must be titled, who counts as a disqualified person, and the duties that come with running your own plan.',
          solo401k: 'Eligibility, the employee and employer contribution roles, Roth options, catch-up contributions, and when Form 5500-EZ applies.',
          consultation: 'Meet at our Fresno office, Monday through Friday by appointment, to talk through your plan, your records or a question that’s come up.',
        }[s.key]
      }</p></article>`).join('')}
    </div>
  </div>
</section>

<section class="section" aria-labelledby="limits-h">
  <div class="container narrow">
    <p class="kicker">What we don’t do</p>
    <h2 id="limits-h">Clear limits, stated up front</h2>
    <p>Rowcrest provides administrative support and education only. We aren’t a plan fiduciary, trustee, custodian, registered investment adviser or broker-dealer.</p>
    ${callout('<p><strong>We never:</strong> hold, move or invest plan money; recommend or sell investments; or give legal, tax or accounting advice. For those, consult a licensed professional — we’re glad to coordinate with yours. See our <a href="/disclosures/">disclosures</a>.</p>')}
  </div>
</section>

${ctaBand({ heading: 'Not sure which help you need?', text: `Book a visit at our Fresno office and we’ll map it out together. Call ${esc(B.phone)}.`, button: 'Request a Meeting' })}
`;
  },
};
