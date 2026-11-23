/* Order journey map: 7 pins along the road, a red songthaew drives along it as you scroll. */
{
const road = document.getElementById('road'), truck = document.getElementById('truck'), pins = document.getElementById('pins');
const steps = [...document.querySelectorAll('#jsteps li')], sec = document.getElementById('journey');
const L = road.getTotalLength(), N = steps.length;
pins.innerHTML = steps.map((_, i) => {
  const p = road.getPointAtLength(L * i / (N - 1));
  return `<g class="pin" data-i="${i}" transform="translate(${p.x.toFixed(1)} ${(p.y - 6).toFixed(1)})">
    <path d="M0 0 C -16 -18 -22 -28 -22 -40 a22 22 0 0 1 44 0 c0 12 -6 22 -22 40z" fill="#FFFDF8" stroke="#3B2416" stroke-width="3"/>
    <circle cx="0" cy="-40" r="15" fill="#E2A33B"/><text x="0" y="-34" text-anchor="middle" font-family="Outfit,Anuphan,sans-serif" font-weight="700" font-size="17" fill="#3B2416">${i + 1}</text></g>`;
}).join('');
const reduce = matchMedia('(prefers-reduced-motion: reduce)').matches;
let last = -1;
function place() {
  const r = sec.getBoundingClientRect(), vh = innerHeight;
  const p = reduce ? 1 : Math.min(1, Math.max(0, (vh * .85 - r.top) / (r.height * .8)));
  const d = L * p, a = road.getPointAtLength(d), b = road.getPointAtLength(Math.min(L, d + 1)), c = road.getPointAtLength(Math.max(0, d - 1));
  let ang = Math.atan2(b.y - c.y, b.x - c.x) * 180 / Math.PI;
  truck.setAttribute('transform', `translate(${a.x.toFixed(1)} ${a.y.toFixed(1)}) rotate(${ang.toFixed(1)})`);
  const cur = Math.min(N - 1, Math.floor(p * (N - 1) + .15));
  if (cur !== last) { last = cur;
    steps.forEach((s, i) => s.classList.toggle('done', i <= cur));
    pins.querySelectorAll('.pin').forEach((g, i) => g.classList.toggle('done', i <= cur)); }
}
addEventListener('scroll', () => requestAnimationFrame(place), { passive: true });
addEventListener('resize', place);
place();
}
