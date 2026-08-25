# MyTutor — website

A static HTML/CSS/JS build of the MyTutor design. No build step — open
`index.html` in a browser, or serve the folder with any static file server.

## Pages
- `index.html` — Home
- `login.html` / `register.html` — Auth (register has a Student/Tutor toggle)
- `find-tutor.html` — Tutor listing with live filters
- `tutor-profile.html` — Tutor detail page (reads `?id=` from the URL)
- `about.html` / `contact.html`

## Add your own logo
Drop a square image (transparent PNG recommended, at least 128×128px)
into `assets/` and name it exactly:

```
assets/logo.png
```

It's already wired into every header and footer on every page. If the
file isn't there, the site quietly falls back to the default orange
icon — nothing breaks either way.

## The hero image (home page)
The big photo at the top of the home page is a plain image tag:

```html
<img src="assets/hero-image.jpg" alt="...">
```

Just replace `assets/hero-image.jpg` with your own photo or
illustration any time — same size ratio (roughly 4:4.3, portrait)
works best. The three floating badges ("4.9 Rating", "120+ Tutors",
"24/7 Support") are separate elements layered on top in the HTML, not
part of the image, so any photo you drop in will look right under
them automatically.

## Add real photos for tutors, reviewers, and testimonials
Every person on the site — tutors, their reviewers, and the home page
testimonials — is a plain `<img src="...">` tag pointing at a file
under `assets/`:

- `assets/tutors/<name>.jpg` — tutor photos (hero strip, featured
  tutors, tutor list, and their profile page all use the same file)
- `assets/reviewers/<name>.jpg` — the people leaving reviews on a
  tutor's profile page
- `assets/testimonials/<name>.jpg` — the student quotes on the home
  page

None of those image files exist yet, so right now every avatar shows
a plain neutral placeholder icon (the same pattern as the logo). To
add a real photo, just save an image with the matching filename into
the right folder — for example `assets/tutors/daniel-hosana.jpg` — and
it appears everywhere that person shows up. Square images, 300×300px
or larger, work best. Nothing else needs editing, and nothing breaks
if a photo is missing.

**Tutor cards, the tutor list, and profile pages are generated from
`js/data.js`** (so filtering and the individual profile pages work).
If you want to change who's listed, edit the `TUTORS` array there —
each entry has a `photo` field with the exact path to use.

**The home page's featured tutors and testimonials are plain static
HTML** — open `index.html` and search for "FEATURED TUTORS" or
"TESTIMONIALS" to edit names, quotes, or photo paths directly.

## Notes
- Colors, type, and spacing all live in `css/style.css` under CSS
  variables at the top (`:root`), so a brand color change is a
  one-line edit.
- Scroll animations and the scroll-to-top button are progressive
  enhancement — the site still works and looks complete with JS off.
