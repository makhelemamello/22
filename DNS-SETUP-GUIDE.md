# DNS Configuration Guide for Custom Domain

## If you're using a custom domain with Netlify:

### For apex domain (yourdomain.com):
- Add an A record pointing to: `75.2.60.5`
- Or use NETLIFY APEX record if your DNS provider supports it

### For subdomain (www.yourdomain.com):
- Add a CNAME record pointing to: `your-site-name.netlify.app`

### Common DNS Providers:

#### Cloudflare:
1. Set DNS to "DNS only" (gray cloud) initially
2. Add A record: `@` → `75.2.60.5`
3. Add CNAME: `www` → `your-site-name.netlify.app`
4. Enable "Full (strict)" SSL/TLS after domain is connected

#### Namecheap:
1. Advanced DNS → Add A record: `@` → `75.2.60.5`
2. Add CNAME: `www` → `your-site-name.netlify.app`

#### GoDaddy:
1. DNS Management → Add A record: `@` → `75.2.60.5`
2. Add CNAME: `www` → `your-site-name.netlify.app`

## Netlify Domain Settings:
1. Go to Site settings → Domain management
2. Add custom domain
3. Verify DNS configuration
4. Enable HTTPS (automatic with Let's Encrypt)
5. Set up redirects if needed

## Troubleshooting Domain Issues:
1. Clear browser cache and cookies
2. Test in incognito/private browsing mode
3. Check DNS propagation (use whatsmydns.net)
4. Verify SSL certificate is active
5. Check for mixed content issues (HTTP vs HTTPS)

## Common Fixes:
- Ensure all resources load over HTTPS
- Check Content Security Policy headers
- Verify viewport meta tag is correct
- Test on multiple devices and browsers
