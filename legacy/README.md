# Sparkle Haven Cleaning — Website

## Files

| File | What it does |
|------|-------------|
| `index.html` | All page content — text, sections, images |
| `style.css`  | All styling — colours, layout, fonts, mobile |
| `main.js`    | All behaviour — nav, gallery, quote form |
| `README.md`  | This guide |

> **Important:** All 4 files must be uploaded together.
> They work as a team — index.html loads style.css and main.js.

---

## How to upload to GitHub Pages

1. Go to **github.com** → New repository → name it `sparkle-haven` → Public
2. Click **Add file → Upload files**
3. Upload all 4 files: `index.html`, `style.css`, `main.js`, `README.md`
4. Click **Commit changes**
5. Go to **Settings → Pages → Source: main / root → Save**
6. Your site is live at: `https://YOUR-USERNAME.github.io/sparkle-haven`

---

## How to update the live site later

1. Go to your GitHub repo
2. Click the file you want to edit (`index.html`, `style.css`, or `main.js`)
3. Click the ✏️ pencil (Edit) icon
4. Make your changes
5. Click **Commit changes**
6. Live within ~60 seconds ✅

---

## Common fixes — what file and what to search for

### Change phone number
**File:** `index.html` → Ctrl+F: `0439 578 719`

### Change business email
**File:** `index.html` → Ctrl+F: `Hello@sparklehavencleaning.com.au`

### Change prices
**File:** `index.html` → Ctrl+F: `$160` or `$230`

### Change colours (gold, navy, dark)
**File:** `style.css` → Ctrl+F: `SECTION 1`
```css
--gold:   #C9A84C;   /* gold accent — change this */
--navy:   #001f3f;   /* medium blue sections */
--dark:   #00111e;   /* darkest background */
--gold-l: #dbb95e;   /* hover gold — slightly lighter */
```

### Change hero headline
**File:** `index.html` → Ctrl+F: `Your Home,`

### Change header style
**File:** `style.css` → Ctrl+F: `SECTION 4`

### Change mobile layout
**File:** `style.css` → Ctrl+F: `SECTION 16`

### Change review scroll speed
**File:** `style.css` → Ctrl+F: `SECTION 11` → edit `45s` (lower = faster)

### Add a new FAQ question
**File:** `index.html` → Ctrl+F: `faq-item` → copy one block and paste below

### Change quote form email destination
1. Go to **formspree.io** and log in
2. Find form ID: `xvzwnjbk`
3. Go to **Settings** → update the email address
4. Verify the new email when Formspree sends a confirmation link
*(No code changes needed)*

### Add a gallery photo
**File:** `main.js` → Ctrl+F: `SECTION 5` → follow instructions in the comments

---

## Business details

| | |
|-|-|
| Phone | 0439 578 719 |
| Business email | Hello@sparklehavencleaning.com.au |
| Quote form sends to | Minh.tran56757@gmail.com |
| Formspree form ID | xvzwnjbk |

## If quotes stop arriving in email

1. Go to **formspree.io** → log in
2. Find form `xvzwnjbk`
3. Make sure `Minh.tran56757@gmail.com` is verified
4. Check spam/junk folder
