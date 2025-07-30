# Deployment Guide

## Quick Deploy to Netlify

### Method 1: Drag and Drop (Fastest)

1. Zip your project folder (final2)
2. Go to [Netlify](https://netlify.com)
3. Drag and drop the zip file to the deploy area
4. Your site will be live instantly!

### Method 2: Git-based Deployment (Recommended)

1. **Initialize Git Repository:**
   ```bash
   git init
   git add .
   git commit -m "Initial commit"
   ```

2. **Push to GitHub:**
   ```bash
   # Create a new repository on GitHub first
   git remote add origin https://github.com/yourusername/your-repo-name.git
   git branch -M main
   git push -u origin main
   ```

3. **Deploy on Netlify:**
   - Go to [Netlify](https://netlify.com)
   - Click "New site from Git"
   - Connect your GitHub account
   - Select your repository
   - Deploy settings:
     - Build command: (leave empty)
     - Publish directory: `.` (root)
   - Click "Deploy site"

4. **Enable Netlify Identity (for CMS):**
   - Go to Site settings → Identity
   - Click "Enable Identity"
   - Go to Settings → Registration → "Invite only"
   - Invite yourself with your email
   - Enable Git Gateway in Identity settings

5. **Access CMS:**
   - Visit `yoursite.netlify.app/admin`
   - Accept the invitation email
   - Set your password
   - Start editing your content!

## Customization Steps

After deployment, customize your portfolio:

1. **Update Personal Information:**
   - Go to `/admin` → Site Settings
   - Update name, email, social links

2. **Modify About Section:**
   - Go to `/admin` → About Section
   - Update your personal description

3. **Add Your Projects:**
   - Go to `/admin` → Projects
   - Add new projects with images and descriptions

4. **Update Skills:**
   - Go to `/admin` → Skills
   - Modify your technical skills

## Local Development

```bash
# Install dependencies
npm install

# Start local server
npm start

# Visit http://localhost:3000
```

## Domain Setup

1. **Custom Domain:**
   - Go to Site settings → Domain management
   - Add custom domain
   - Update DNS records as instructed

2. **SSL Certificate:**
   - Automatically provided by Netlify
   - Force HTTPS in site settings

## Performance Tips

- Optimize images (use WebP format)
- Enable asset optimization in Netlify
- Use Lighthouse to check performance

Your portfolio is now live and ready to showcase your work! 🚀
