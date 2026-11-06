import { faqList, faqSchema, ctaBand, B, esc, pageHero, guideLayout, callout, phoneHref } from '../lib.mjs';

const crumbs = [{ name: 'Home', path: '/' }, { name: '401(k) Basics', path: '/401k-basics/' }];

const SECTIONS = [
  ['solo-401k', 'Solo 401(k)'],
  ['contributions', 'Two contribution roles'],
  ['self-directed', 'Self-directed 401(k)'],
  ['prohibited', 'Prohibited transactions'],
  ['form-5500-ez', 'Form 5500-EZ'],
  ['faq', 'FAQ'],
];

const faqs = [
  { q: 'What does Rowcrest do?', a: '<p>Rowcrest provides administrative support and education for Solo and self-directed 401(k) plans: setup alongside the provider you choose, plan records and year-end values, Form 5500-EZ preparation, and year-round help. You remain the plan sponsor and make every decision.</p>' },
  { q: 'Where is the Rowcrest office?', a: '<p>In Fresno, California. Meetings are Monday through Friday, 9:00 AM to 5:00 PM, by appointment. See the <a href="/contact/">contact page</a> for details.</p>' },
  { q: 'Who can open a Solo 401(k)?', a: '<p>Generally a business with self-employment or business income and no eligible employees other than the owners and their spouses. Sole proprietors, LLCs, partnerships and corporations can all qualify; hiring eligible employees can change that.</p>' },
  { q: 'Can a Solo 401(k) be self-directed?', a: '<p>Yes, if the plan document allows it. “Solo” describes who is covered; “self-directed” describes what the plan may invest in. Many owner-only plans are both.</p>' },
  { q: 'What can a self-directed 401(k) hold?', a: '<p>Whatever the plan document permits and federal law doesn’t prohibit — commonly real estate, private loans, private company interests, qualifying bullion and public securities. Collectibles are not allowed, and dealings with disqualified persons are prohibited.</p>' },
  { q: 'Do you pick or recommend investments?', a: '<p>No. Investment decisions are yours. We keep the plan’s paperwork in order and explain the rules that apply.</p>' },
  { q: 'Do you hold my retirement money?', a: '<p>No. Plan assets stay in accounts titled to your plan at the institutions you choose. We never hold, move or invest plan money.</p>' },
  { q: 'When is Form 5500-EZ required?', a: '<p>Generally for any year a one-participant plan’s total assets exceed $250,000 at the end of the plan year, and always for the plan’s final year. For calendar-year plans it’s generally due July 31, extendable with Form 5558.</p>' },
  { q: 'Is this investment, legal or tax advice?', a: '<p>No. It’s administrative support and general education. For individualized advice, consult a licensed financial professional, CPA or attorney.</p>' },
  { q: 'How do I get started?', a: `<p>Call <a href="${phoneHref()}">${esc(B.phone)}</a> or send the <a href="/contact/">meeting request form</a>.</p>` },
];

export default {
  path: '/401k-basics/',
  title: 'Solo & Self-Directed 401(k) Basics and FAQ | Rowcrest, Fresno',
  description: 'Plain-English basics of Solo and self-directed 401(k) plans: eligibility, contribution roles, prohibited transactions and Form 5500-EZ, plus answers to common questions.',
  crumbs,
  pageType: 'WebPage',
  schema: [faqSchema(faqs)],
  body: () => `
${pageHero({ kicker: '401(k) basics', title: 'Solo and self-directed 401(k), in plain English', lead: 'The essentials owner-run plans have to get right. General education only — your CPA or attorney can apply it to your situation.', crumbs })}

<section class="section section--tight-top">
${guideLayout(
  SECTIONS,
  `
  <h2 id="solo-401k">Solo 401(k)</h2>
  <p>A Solo 401(k) — also called a one-participant 401(k) — is a 401(k) plan covering a business owner with no employees, or the owner and their spouse. It works like any 401(k), but with only owners participating, administration is far simpler.</p>
  <ul>
    <li>Sole proprietors, single-member LLCs, partnerships and corporations can all sponsor one.</li>
    <li>Eligibility generally ends once the business has eligible employees other than owners and spouses.</li>
    <li>The plan needs its own plan document, usually provided by the plan provider, and often its own EIN.</li>
  </ul>

  <h2 id="contributions">Two contribution roles</h2>
  <p>In a Solo 401(k), you contribute in two capacities:</p>
  <ul>
    <li><strong>As the employee:</strong> elective deferrals, pre-tax or Roth if the plan allows, up to the annual limit — plus catch-up contributions from age 50.</li>
    <li><strong>As the employer:</strong> profit-sharing contributions, generally up to 25% of W-2 compensation, or a similar share of net self-employment earnings for unincorporated businesses.</li>
  </ul>
  ${callout('<p>Contribution limits change most years. Confirm current figures at <a href="https://www.irs.gov/retirement-plans/one-participant-401k-plans" rel="noopener" target="_blank">IRS.gov</a> or with your CPA before you contribute.</p>')}

  <h2 id="self-directed">Self-directed 401(k)</h2>
  <p>A self-directed 401(k) is any 401(k) whose plan document lets the plan invest beyond a fixed fund menu. “Self-directed” describes what the plan may hold, not who is covered — so a Solo 401(k) can also be self-directed.</p>
  <ul>
    <li>Depending on the plan, assets may include real estate, private loans, private company interests, qualifying precious metals and public securities.</li>
    <li>Collectibles — such as art, antiques, gems and most coins — are not permitted.</li>
    <li>Every asset is titled to the plan, and all income and expenses flow only through plan accounts.</li>
  </ul>

  <h2 id="prohibited">Prohibited transactions</h2>
  <p>Federal law bars a plan from dealing with <em>disqualified persons</em> — including you, your spouse, your parents and children, and businesses you control. In practice, that generally means:</p>
  <ul>
    <li>No buying from, selling to or borrowing from the plan.</li>
    <li>No personal use of plan assets — for example, staying in a plan-owned property.</li>
    <li>No paying plan expenses with personal money, or personal expenses with plan money.</li>
  </ul>
  ${callout('<p><strong>The penalties are steep.</strong> A prohibited transaction generally triggers a 15% excise tax for each year it continues, rising to 100% if it isn’t corrected. See <a href="https://www.irs.gov/retirement-plans/plan-participant-employee/retirement-topics-prohibited-transactions" rel="noopener" target="_blank">IRS — Prohibited Transactions</a>.</p>', 'warn')}

  <h2 id="form-5500-ez">Form 5500-EZ</h2>
  <p>A one-participant plan generally must file Form 5500-EZ for any plan year in which its total assets exceed $250,000 at year-end, and for its final plan year regardless of size. For calendar-year plans, the return is generally due July 31, with an extension available on Form 5558. Late filing can bring significant penalties, so it pays to know your plan’s value every December 31.</p>

  <h2 id="faq">Frequently asked questions</h2>
  ${faqList(faqs)}
  <p class="source">Official sources: <a href="https://www.irs.gov/retirement-plans/one-participant-401k-plans" rel="noopener" target="_blank">IRS — One-Participant 401(k) Plans</a>; <a href="https://www.irs.gov/retirement-plans/form-5500-corner" rel="noopener" target="_blank">IRS — Form 5500 Corner</a>. This page is general education, not advice. See our <a href="/disclosures/">disclosures</a>.</p>
  `,
)}
</section>

${ctaBand({ heading: 'Have a question about your own plan?', text: 'Bring it to our Fresno office — we’ll walk through the rules that apply.', button: 'Book an Office Visit' })}
`,
};
