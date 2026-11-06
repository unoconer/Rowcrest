// Brand mark — a crest shield: harvest sun over converging orchard rows.
/** Logo mark SVG. `id` must be unique per page instance. */
export function markSvg(id = 'rc', cls = 'brand__mark') {
  return `<svg class="${cls}" viewBox="0 0 48 48" aria-hidden="true" focusable="false"><defs><linearGradient id="${id}" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stop-color="#355A40"/><stop offset="1" stop-color="#1C2A21"/></linearGradient></defs><path d="M24 2.5 42.5 8.6V23c0 11.2-7.6 18.6-18.5 22.5C13.1 41.6 5.5 34.2 5.5 23V8.6Z" fill="url(#${id})" stroke="#E2B04A" stroke-opacity=".55" stroke-width="1"/><path d="M16.8 20.8a7.2 7.2 0 0 1 14.4 0Z" fill="#E2B04A"/><path d="M11 21.4h26" stroke="#F4ECD8" stroke-width="2" stroke-linecap="round"/><path d="M20.4 25.4 12.6 35.6M23.1 25.4l-2.5 13.2M24.9 25.4l2.5 13.2M27.6 25.4l7.8 10.2" stroke="#BCD6A6" stroke-width="2.2" stroke-linecap="round"/></svg>`;
}

export const markFile = () =>
  markSvg('g', 'mark').replace('<svg class="mark"', '<svg xmlns="http://www.w3.org/2000/svg"').replace(' aria-hidden="true" focusable="false"', '');
