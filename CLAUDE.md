# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

This is a personal website built with Jekyll and hosted on Netlify. The site serves as Kevin McGillivray's blog, portfolio, and creative writing platform, featuring posts, artwork, and various creative projects.

## Development Commands

### Local Development
```bash
jekyll serve
```
Starts the Jekyll development server at `http://localhost:4000`

### Build
```bash
npm run build
# or directly:
jekyll build
```
Builds the site for production. The built site is output to `_site/` directory.

## Architecture Overview

### Jekyll Structure
- **Layouts**: Found in `_layouts/` - includes specialized layouts like `diver.html`, `noble.html` for different content types
- **Includes**: Found in `_includes/` - reusable components like navigation, forms, and content sections
- **Content Collections**:
  - `_posts/` - Blog posts (markdown files with YAML front matter)
  - `_notes/` - Notes collection (configured in `_config.yml`)
- **Static Assets**:
  - `css/` - SCSS files compiled by Jekyll
  - `js/` - JavaScript files
  - `img/` - Images and media

### Styling System
- Uses SCSS with modular imports in `css/main.scss`
- Custom design system with variables in `_sass/variables.scss`
- Specialized theming for different content types (diver, noble themes)
- Dark mode support using CSS media queries
- Uses Tachyons-inspired utility classes

### Content Organization
- **Main sections**: Home, Archive, About, Paintings & Drawings (external), Newsletter (external)
- **Special content areas**:
  - `word/` - Creative writing projects
  - `sketchbook/` - Art galleries
  - `code/` - Development projects
  - `lane-coaching/` - Coaching content
- **Markdown includes**: Content is often split into reusable markdown files in `_includes/`

### Configuration
- **Jekyll config**: `_config.yml` - site settings, collections, defaults
- **Ruby dependencies**: `Gemfile` (minimal - just Jekyll)
- **Build config**: `netlify.toml` - Netlify deployment settings
- **Package.json**: Contains npm build script that runs Jekyll

### Deployment
- Hosted on Netlify
- Auto-deploys from `master` branch
- Build command: `npm run build` (which runs `jekyll build`)

## Development Notes

- Content uses YAML front matter for metadata and layout specification
- Many pages use custom layouts for different content types
- The site has a rich design system with custom color variables and typography
- Images are often served from Cloudinary CDN
- The site supports multiple languages (language switcher in navigation)