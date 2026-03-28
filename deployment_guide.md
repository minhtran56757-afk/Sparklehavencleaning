# Deployment Plan: Sparkle Haven Cleaning to GitHub Pages

To deploy your Sparkle Haven Cleaning website to GitHub Pages, follow these steps:

## 1. Install `gh-pages`
Open your terminal and run:
```bash
npm install -D gh-pages
```

## 2. Update `vite.config.js`
Modify your `vite.config.js` to include the `base` property. This ensures that assets like images and CSS are loaded correctly from the subpath of your repository.

```javascript
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  base: '/Sparklehavencleaning/', // Add this line
})
```

## 3. Update `package.json`
Add the following scripts and `homepage` field to your `package.json`:

1.  **Add `homepage`**:
    `"homepage": "https://jasdo.github.io/Sparklehavencleaning/",` (Replace `jasdo` with your actual GitHub username if different)
2.  **Add `scripts`**:
    ```json
    "scripts": {
      "predeploy": "npm run build",
      "deploy": "gh-pages -d dist",
      ...
    }
    ```

## 4. Run Deployment
After saving the files, run:
```bash
npm run deploy
```

## 5. Configure GitHub
1.  Go to your GitHub repository: `https://github.com/jasdo/Sparklehavencleaning/settings/pages`
2.  Ensure **Build and deployment > Branch** is set to `gh-pages`.
3.  Refresh the page—your site should be live at the URL shown!
