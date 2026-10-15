# Contando Juntos 🕒

**Inclusive classroom timer built with HTML, CSS, and JavaScript.**  
Created to make classroom time more visible, predictable, and approachable for children who benefit from clear transitions and sensory choices.

> **Live app:**
> `https://diegoalejandrochc.github.io/contando-juntos/`

---

## 💡 About the project

While volunteering at **Creciendo Juntos**, an inclusive learning center in Peru, I saw that some students became anxious when they lost track of time during lessons and transitions.

I created **Contando Juntos** as a small front-end project exploring how interface design can make time management feel more predictable and encouraging. Instead of relying only on a countdown number, the app combines:

- a large visual progress ring,
- simple “Now → Next” routine cues,
- four easy-to-understand time stages,
- a gentle transition warning,
- optional sound cues,
- optional calm background tones,
- reduced-motion controls,
- Spanish and English interfaces.

The project reflects my interest in technology that is both **practical and empathetic**.

> This app is a classroom support tool, not a medical or therapeutic device. Sensory preferences vary from person to person, so teachers and students should choose the settings that feel comfortable for them.

---

## ✨ Features

### Visual time cues
- Large minute/second countdown
- Circular progress indicator that gradually empties
- Four stages: **Getting started → On our way → Almost finished → Finished**
- Color shift near the end to make an upcoming transition more noticeable without using flashing alerts

### Predictable routines
- “**Now**” and “**Next**” activity labels
- Configurable transition warning (30 seconds, 1 minute, 2 minutes, or 5 minutes)
- Warning timing automatically scales down for short timers

### Sensory controls
- Calm music is **off by default**
- Gentle synthesized chimes for start, warning, and finish
- Adjustable volume
- Reduced-motion mode
- Honors the operating system/browser `prefers-reduced-motion` setting

### Accessibility
- Keyboard controls: `Space` = start/pause, `R` = reset
- Screen-reader status announcements for important milestones only
- Visible focus states
- Large touch targets
- High-contrast text and controls
- No rapid flashing animations
- Responsive layout for desktop, tablet, and mobile

### Privacy
- No account
- No analytics
- No network requests required
- Preferences are stored only in browser `localStorage`

---

## 🎨 Design choices

The visual direction is inspired by the friendly, calm visual language of nonprofit and accessibility-focused education sites: deep teal, soft mint, burgundy, coral, generous white space, rounded cards, and simple shapes.

The timer intentionally avoids a few common patterns:

- **No constant ticking** — repeated sound can be distracting or stressful.
- **No sudden red alarm screen** — the ending is noticeable, but not visually aggressive.
- **No music by default** — sensory input should be opt-in.
- **No fast celebration animation** — completion feedback is positive but controlled.
- **No hidden transition** — the interface shows what is happening now and what comes next.

Because neurodivergent people have different preferences, the app treats customization as part of accessibility rather than assuming one interface works for everyone.

---

## 🧱 Project structure

```text
contando-juntos/
├── index.html
├── styles.css
├── app.js
├── README.md
└── .github/
    └── workflows/
        └── pages.yml
```

There are **no package dependencies** and no build step.

---

## 🚀 Run locally

### Option 1 — simplest
Open `index.html` in a browser.

### Option 2 — local web server
From the project folder, run:

```bash
python -m http.server 8000
```

Then open:

```text
http://localhost:8000
```

Using a local server is recommended when testing browser features such as Wake Lock.

---

## 🌐 Deploy with GitHub Pages

This repository includes a GitHub Actions workflow for Pages.

1. Create a new GitHub repository, for example `contando-juntos`.
2. Upload/push all files in this folder to the repository.
3. On GitHub, go to **Settings → Pages**.
4. Under **Build and deployment → Source**, choose **GitHub Actions**.
5. Push to the `main` branch (or run the workflow manually from the **Actions** tab).
6. GitHub will publish the site and show the public Pages URL after deployment.

Typical URL:

```text
https://YOUR-USERNAME.github.io/contando-juntos/
```

### First push from the command line

```bash
git init
git add .
git commit -m "Build Contando Juntos inclusive classroom timer"
git branch -M main
git remote add origin https://github.com/YOUR-USERNAME/contando-juntos.git
git push -u origin main
```

---

## 🧠 How the timer works

The timer uses an absolute end timestamp instead of subtracting exactly one second on every interval. That makes it more resilient when a browser tab temporarily slows background JavaScript.

The interface derives its visual state from:

```text
remaining time / total time
```

and moves through the following phases:

1. **Start** — calm teal visual treatment
2. **Middle** — progress confirmation
3. **Soon** — transition cue and optional chime
4. **Done** — completion message and optional short melody

All audio is generated with the browser's **Web Audio API**, so the project does not need copyrighted music files or third-party audio hosting.

---

## 🛠️ Customization ideas

You can extend the project with:

- teacher-created routine presets,
- picture/symbol cards for activities,
- a full-screen classroom mode,
- multiple consecutive timers,
- a visual schedule for the entire school day,
- optional custom audio uploaded by a teacher,
- student-specific profiles stored locally,
- Firebase/Supabase only if you later need cloud-synced settings.

If this becomes a real deployed classroom tool, test changes directly with educators and students rather than assuming a particular animation, sound, or color is universally calming.

---

## 📌 Portfolio description

**Contando Juntos – Inclusive Classroom Time-Management App**  
*JavaScript, HTML/CSS, Front-End Development, UI Design*

- Designed a classroom timer to make transitions and remaining time more visible for students who benefit from predictable routines
- Programmed timers, visual cues, optional music, gentle audio feedback, and animations
- Added sensory preferences, bilingual UI, responsive design, keyboard support, and screen-reader announcements
- Structured the project as a dependency-free static site that can be deployed through GitHub Pages

---

## License

You can add an MIT License if you want other people to freely reuse and adapt the code.
