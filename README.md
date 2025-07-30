# Student Portfolio Website

A modern, responsive student portfolio website with Netlify CMS integration for easy content management.

## Features

- 📱 **Responsive Design** - Works perfectly on all devices
- 🎨 **Modern UI/UX** - Clean and professional design
- ⚡ **Fast Loading** - Optimized for performance
- 🔧 **Easy Content Management** - Netlify CMS integration
- 📝 **Contact Form** - Netlify Forms integration
- 🎯 **SEO Friendly** - Optimized for search engines

## Sections

- **Hero/Home** - Introduction and call-to-action
- **About** - Personal information and statistics
- **Skills** - Technical skills organized by category
- **Projects** - Showcase of your work with links
- **Contact** - Contact form and social links

## Quick Start

### Option 1: Deploy to Netlify (Recommended)

1. Fork this repository
2. Connect your GitHub account to Netlify
3. Deploy from your forked repository
4. Enable Netlify Identity in your site settings
5. Access the admin panel at `yoursite.netlify.app/admin`

### Option 2: Local Development

1. Clone the repository:
   ```bash
   git clone https://github.com/yourusername/student-portfolio.git
   cd student-portfolio
   ```

2. Open `index.html` in your browser or use a local server:
   ```bash
   python -m http.server 8000
   # or
   npx serve .
   ```

3. Visit `http://localhost:8000`

## Customization

### Update Personal Information

1. Edit the content directly in the HTML files, or
2. Use the Netlify CMS admin panel at `/admin` (after deployment)

### Modify Styling

- Edit `styles.css` to customize colors, fonts, and layout
- The design uses CSS Grid and Flexbox for responsive layouts
- Color scheme can be easily changed by updating CSS variables

### Add New Projects

1. Through Netlify CMS: Go to `/admin` → Projects → New Project
2. Manually: Create new `.yml` files in the `_projects` folder

### Customize Skills

- Edit `_data/skills.yml` or use the CMS admin panel
- Skills are organized into Frontend, Backend, and Tools categories

## Content Management

### Using Netlify CMS

1. Navigate to `yoursite.com/admin`
2. Log in with your Netlify Identity credentials
3. Edit content through the user-friendly interface:
   - **Site Settings**: Update name, email, social links
   - **About Section**: Modify personal information
   - **Skills**: Add/remove technical skills
   - **Projects**: Add new projects with images and descriptions

### File Structure

```
├── index.html          # Main HTML file
├── styles.css          # Stylesheet
├── script.js           # JavaScript functionality
├── admin/              # Netlify CMS configuration
│   ├── index.html
│   └── config.yml
├── _data/              # Site data files
│   ├── settings.yml
│   ├── about.yml
│   └── skills.yml
├── _projects/          # Project data files
├── _posts/             # Blog posts (optional)
├── images/             # Image assets
└── netlify.toml        # Netlify configuration
```

## Deployment

### Netlify (Recommended)

1. Push your code to GitHub
2. Connect your repository to Netlify
3. Deploy with these settings:
   - Build command: (leave empty)
   - Publish directory: `.` (root)
4. Enable Netlify Identity for CMS access
5. Configure Git Gateway in Identity settings

### Other Platforms

This is a static website that can be deployed to:
- GitHub Pages
- Vercel
- Surge.sh
- Any static hosting service

## Configuration

### Netlify Identity Setup

1. Go to your Netlify site dashboard
2. Navigate to Identity tab
3. Click "Enable Identity"
4. Go to Settings → Registration → Invite only (recommended)
5. Invite yourself as an admin user
6. Enable Git Gateway in Identity settings

### Contact Form

The contact form uses Netlify Forms and will work automatically once deployed to Netlify. For other hosting providers, you may need to implement your own form handling.

## Customization Tips

### Colors

The site uses a purple gradient theme. To change colors, update these CSS custom properties in `styles.css`:

```css
:root {
  --primary-color: #667eea;
  --secondary-color: #764ba2;
  --accent-color: #f093fb;
}
```

### Fonts

The site uses Inter font from Google Fonts. To change the font:

1. Update the Google Fonts link in `index.html`
2. Change the `font-family` property in CSS

### Layout

The site uses CSS Grid for major layouts and Flexbox for components. Key responsive breakpoints:
- Mobile: < 768px
- Tablet: 768px - 1024px
- Desktop: > 1024px

## Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)

## Performance

- Optimized images (use WebP format when possible)
- Minified CSS and JavaScript
- Lazy loading for images
- Efficient CSS Grid and Flexbox layouts

## Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Test responsiveness
5. Submit a pull request

## License

This project is open source and available under the [MIT License](LICENSE).

## Support

If you have questions or need help:
1. Check the documentation
2. Look at the example content
3. Open an issue on GitHub

---

**Happy coding!** 🚀
