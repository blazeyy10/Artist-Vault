# ArtistVault - Performer Profiles & Video Catalog

A modern, responsive, and interactive web application designed to catalog performers/artists and manage their video portfolios, recordings, and titles.

## 🌟 Features

- **Performer Profiles**:
  - Detailed artist page with cover banners, avatars, stage names/aliases, roles, genres, and biographies.
  - Social media and website links (YouTube, Instagram, X/Twitter, Personal sites).
  - Individual video catalog under each performer.
- **Video Management**:
  - Add video titles, category/tags (Live Concert, Music Video, Rehearsals, Stand-up Clips, etc.), durations, release years, links, and descriptions.
  - Link directly to external streaming platforms (YouTube, Vimeo, etc.).
- **Global Video Index**:
  - View all videos across all performers in a single searchable grid.
- **Search & Filtering**:
  - Real-time search across performers, stage names, roles, and video titles.
  - Filter by genre tags with a single click.
- **Data Persistence & Portability**:
  - Automatically saves all your data to your browser's local storage (`localStorage`).
  - **Export to JSON**: Download a backup copy of your performers and videos anytime.
  - **Import from JSON**: Easily restore your catalog or migrate between computers.
  - **Reset to Sample Data**: One-click demo data reset.

## 🚀 How to Run the Website

### Option 1: Double-Click to Open
Simply double-click `index.html` in Finder or your file explorer to open it directly in Chrome, Safari, Edge, or Firefox.

### Option 2: Run a Local Web Server
You can also launch a lightweight local server with Python:

```bash
cd /Users/akshatgupta/.gemini/antigravity/scratch/performer-video-catalog
python3 -m http.server 8080
```
Then visit `http://localhost:8080` in your web browser.

## 📂 File Structure

```
performer-video-catalog/
├── index.html        # Main HTML structure, layout, and modals
├── app.js            # Interactive logic, state management, search, and CRUD operations
├── style.css         # Glassmorphism theme, styling enhancements, and animations
└── README.md         # Documentation and guide
```

## 🌐 Free Deployment Options
This website is 100% static and client-side, making it free and easy to host on:
- **GitHub Pages**: Push this directory to a GitHub repository and enable GitHub Pages in repo settings.
- **Netlify / Vercel / Cloudflare Pages**: Drag and drop the folder or connect via Git.
