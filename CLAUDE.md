# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

This is a static website project with a simple structure:
- `index.html` - Main landing page
- `about.html` - About page
- `css/` - Stylesheets (includes reset.css and styles.css)
- `js/` - JavaScript files (main.js)

## Development

This is a static HTML/CSS/JS website with no build process. To view the site, simply open the HTML files in a web browser or use a local development server:

```bash
# Using Python 3
python -m http.server 8000

# Using Node.js (if http-server is installed globally)
npx http-server

# Using PHP
php -S localhost:8000
```

## Architecture

The project follows a traditional static website structure with separation of concerns:
- HTML files in the root directory
- CSS in `css/` directory with a reset and custom styles
- JavaScript in `js/` directory
