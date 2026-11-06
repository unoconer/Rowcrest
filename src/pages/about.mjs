import { icon, ctaBand, B, esc, pageHero, mediaImg, addressHtml, hoursHtml, phoneHref } from '../lib.mjs';

const crumbs = [{ name: 'Home', path: '/' }, { name: 'About', path: '/about/' }];

const WHO = [
  ['briefcase', 'Consultants & freelancers'],
  ['building', 'Contractors & trades'],
  ['growth', 'Growers & ag businesses'],
  ['shield', 'Clinicians & practices'],
  ['handshake', 'Small firms & partners'],
  ['home', 'Real estate owners'],
];

export default {
  path: '/about/',
  title: 'About Rowcrest | 401(k) Plan Support Office in Fresno, California',
  description: 'Rowcrest is a Fresno, California office providing administrative support and education for Solo and self-directed 401(k) plans. Learn how we work.',
  crumbs,
  pageType: 'AboutPage',
  body: () => `
${pageHero({ kicker: 'About', title: 'Rooted in Fresno, kept in good order', lead: 'Rowcrest provides administrative support and education for Solo and self-directed 401(k) plans, from an office in Fresno, California.', crumbs, image: 'orchard' })}

<section class="section">
  <div class="container split">
    <div class="split__text">
      <p class="kicker">The name</p>
      <h2>Why “Rowcrest”</h2>
      <p class="lead">Drive out of Fresno in any direction and you’ll see it: orchard rows running to the horizon, evenly spaced and carefully tended.</p>
      <p>That order doesn’t happen by accident. It takes planning at the start and steady attention every season after. A self-directed retirement plan is the same — the setup has to be right, the records have to be kept, and the deadlines have to be met, year after year.</p>
      <p>Rowcrest exists to do that tending for business owners who would rather spend their time running their business.</p>
    </div>
    <figure class="split__media">${mediaImg('city', { cls: 'split__img', label: 'Fresno' })}</figure>
  </div>
</section>

<section class="section section--sand" aria-labelledby="who-h">
  <div class="container">
    <div class="head head--split"><div><p class="kicker">Who we work with</p><h2 id="who-h">Owner-run businesses across Fresno</h2></div><p>If you run your own business and have — or want — a Solo or self-directed 401(k), we can help keep it organized.</p></div>
    <ul class="who">${WHO.map(([i, t]) => `<li>${icon(i)}${t}</li>`).join('')}</ul>
  </div>
</section>

<section class="section" aria-labelledby="std-h">
  <div class="container narrow">
    <p class="kicker">How we work</p>
    <h2 id="std-h">Our standards</h2>
    <ul class="standards">
      <li><strong>Clear scope.</strong> We agree up front, in writing, what we handle and what stays with you and your provider.</li>
      <li><strong>Your decisions stay yours.</strong> We aren’t a fiduciary, trustee, custodian, registered investment adviser or broker-dealer, and we don’t give legal or tax advice.</li>
      <li><strong>Plain language.</strong> We explain the rules without jargon, and point you to official sources.</li>
      <li><strong>Privacy.</strong> Your information is handled as described in our <a href="/privacy-policy/">Privacy Policy</a>.</li>
    </ul>
  </div>
</section>

<section class="section section--sand" aria-labelledby="visit-h">
  <div class="container visit">
    <div>
      <p class="kicker">Visit us</p>
      <h2 id="visit-h">Meet at our Fresno office</h2>
      <p class="lead">Office meetings are by appointment, Monday through Friday. Call ahead or send the form and we’ll set a time that works for you.</p>
      <div class="btn-row"><a class="btn btn--accent btn--lg" href="/contact/">Request a Meeting</a><a class="btn btn--outline btn--lg" href="${phoneHref()}">${icon('phone')} ${esc(B.phone)}</a></div>
    </div>
    <div class="crest-card crest-card--flat">
      <p class="crest-card__k">Rowcrest office</p>
      <p class="crest-card__addr">${icon('pin')}<span>${addressHtml()}</span></p>
      <div class="crest-card__row">${icon('clock')}<div>${hoursHtml()}</div></div>
      <p class="crest-card__row">${icon('phone')}<a href="${phoneHref()}">${esc(B.phone)}</a></p>
    </div>
  </div>
</section>

${ctaBand({ heading: 'Let’s put your plan in order.', text: 'New plan or existing one — start with a conversation at our Fresno office.', button: 'Book an Office Visit' })}
`,
};
