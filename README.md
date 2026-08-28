# Montera Strategic Group — Company Profile

## Run
```
npm install
npm run dev
```
Open http://localhost:5173

## Replace the photos
Background photos live in `public/bg/`. The files there now are placeholders —
overwrite them with real photos, same filenames, and the site picks them up:

| File                  | Section                    |
|-----------------------|----------------------------|
| `bg/hero.jpg`         | Opening screen             |
| `bg/about.jpg`        | Welcome + Founded in 2015  |
| `bg/quote.jpg`        | "We are not big" band      |
| `bg/culture.jpg`      | Culture / four values      |
| `bg/events.jpg`       | Life at work               |
| `bg/people.jpg`       | The People Behind It       |
| `bg/career.jpg`       | Hiring section             |

Ideal size 1600x1000 or larger, landscape. The colour overlay sits on top, so a
busy photo still reads fine — the photo mainly adds texture and depth.

Vision, Brands and Latest Events stay plain white on purpose. Do not add photos
there; the white gives the eye a rest between the coloured sections.

Brand cards:
- `public/logo/skinlyfe.png`, `public/logo/prepare.png` — brand logos, shown as
  circles at the top of each card. Use square images; they get cropped to a circle.
- `public/brand/skinlyfe-product.jpg`, `public/brand/prepare-product.jpg` —
  product shots inside the cards. Placeholders for now; overwrite with real
  photos, landscape 4:3 works best.

Other images:
- `public/logo/montera.png` — violet logo
- `public/logo/montera-putih.png` — white logo (navbar overlay + footer)
- `public/tim/*.jpg` — team portraits, referenced in `PEOPLE` in src/App.jsx
- `public/event/*.jpg` — event photos, referenced in `EVENTS` and `GALLERY`

## Editing text
Everything is in the block at the top of `src/App.jsx` — `CO`, `VALUES`,
`BRANDS`, `EVENTS`, `PEOPLE`, `KARIR`.

## Colours
Defined at the top of `src/index.css`.
- `--violet #4520A6` — from the Montera logo, the primary colour
- `--peri #7C8AE8` — Prepare periwinkle
- `--pink #E8558E` — Skinlyfe, used only on its brand card

## Parallax
Photos are pinned with `background-attachment: fixed`, desktop only
(`min-width: 1025px`). iOS Safari does not handle fixed backgrounds correctly,
so on phones the photos scroll normally. That rule is at the bottom of
`src/index.css`.

## Deploy
Building for GitHub Pages? Change `base` in `vite.config.js` from `'./'` to
`'/your-repo-name/'` first, then `npm run build` and deploy the `dist/` folder.
# Company_profile_montera
