# Full Stack Web Development — Lab Assignments (1 to 6)

Clean, simple, and minimal implementations strictly covering all requirements from the assignment guidelines.

🌐 **Live GitHub Pages URL:** [https://rudraa999.github.io/fullstack-assignment/](https://rudraa999.github.io/fullstack-assignment/)

---

## 📁 Repository Structure

```
assignment/
├── index.html                   # Central Hub (Root entry point for GitHub Pages)
├── .gitignore                   # Ignores node_modules and system files
├── .github/workflows/deploy.yml # GitHub Actions workflow for automatic deployment
│
├── assignment-1-calculator/     # [Assignment 1] JavaScript Calculator
│   ├── index.html
│   ├── style.css
│   └── script.js
│
├── assignment-2-todo-list/      # [Assignment 2] DOM-based To-Do List
│   ├── index.html
│   ├── style.css
│   └── script.js
│
├── assignment-3-form-validation/# [Assignment 3] JavaScript Form Validation
│   ├── index.html
│   ├── style.css
│   └── script.js
│
├── react-app/                   # Pre-built static React bundle for GitHub Pages
│   ├── index.html
│   └── assets/
│
└── react-assignments/           # React Source Code (Vite)
    ├── package.json
    ├── vite.config.js           # Configured with base: './' for GitHub Pages
    └── src/
        ├── App.jsx              # Tab navigation for Assignments 4, 5 & 6
        └── components/
            ├── ProfileCard/     # [Assignment 4] React Profile Card (Props)
            ├── ControlledForm/  # [Assignment 5] Controlled React Form
            └── CounterApp/      # [Assignment 6] React Counter (useState)
```

---

## 🚀 How to Push to Your GitHub Repository

Run these commands in your PowerShell / Terminal inside `e:\clg\full stack\assignment`:

```bash
git init
git add .
git commit -m "Initial commit: Full stack lab assignments 1-6"
git branch -M main
git remote add origin https://github.com/rudraa999/fullstack-assignment.git
git push -u origin main
```

*(If `origin` already exists, you can run `git remote set-url origin https://github.com/rudraa999/fullstack-assignment.git` instead).*

---

## 🌐 Enabling GitHub Pages

Once pushed:
1. Open [https://github.com/rudraa999/fullstack-assignment](https://github.com/rudraa999/fullstack-assignment) in your browser.
2. Go to **Settings** → **Pages** (in the left sidebar).
3. Under **Build and deployment > Source**:
   - **Option A (Recommended):** Select **"Deploy from a branch"**, choose branch **`main`**, folder **`/ (root)`**, and click **Save**.
   - **Option B (GitHub Actions):** Select **"GitHub Actions"** to let the included `.github/workflows/deploy.yml` deploy automatically.
4. Within 1-2 minutes, your live site will be accessible at:
   👉 **[https://rudraa999.github.io/fullstack-assignment/](https://rudraa999.github.io/fullstack-assignment/)**

---

## 💻 Local Development

### Running Vanilla Assignments (1, 2, 3)
Open `index.html` directly in your browser.

### Running React Assignments (4, 5, 6)
```bash
cd react-assignments
npm install
npm run dev
```

If you make modifications to the React code, rebuild the static assets for GitHub Pages using:
```bash
cd react-assignments
npm run build
```
