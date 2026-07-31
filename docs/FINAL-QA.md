# Final QA Checklist

## Build

```bash
node scripts/release-audit.mjs
npm run build
git status
```

Required result:

- Build succeeds
- Git working tree is clean
- No secret warning
- No missing required-file warning

## Desktop

Test at:

- 1366 × 768
- 1440 × 900
- 1920 × 1080

Verify:

- Header and utility bar
- Logo size
- Mega menus
- Hero height
- Hero buttons
- Service cards
- Scroll animations
- Case-study links
- Resources links
- Global section
- CTA and footer
- Back-to-top control

## Mobile

Test at:

- 360 × 800
- 390 × 844
- 412 × 915

Verify:

- No horizontal scrolling
- Mobile menu opens and closes
- Submenus expand
- Buttons are easy to tap
- Hero text does not clip
- Logo remains readable
- Cards stack correctly
- Footer columns stack
- Back-to-top button does not cover content

## Accessibility

- Navigate with Tab only
- Check visible focus
- Open menus using keyboard
- Confirm form labels
- Confirm image alt text
- Confirm colour contrast
- Test reduced-motion setting
- Confirm one clear H1 per page

## Content

- Verify company name
- Verify email
- Verify phone
- Verify USA address
- Verify India address
- Verify LinkedIn URL
- Remove unapproved testimonials, clients, metrics and certifications
- Review Privacy and Terms

## SEO and sharing

Open:

- `/robots.txt`
- `/sitemap.xml`
- `/opengraph-image`
- `/twitter-image`
- `/manifest.webmanifest`

Check the production URL using:

- LinkedIn Post Inspector
- Facebook Sharing Debugger
- Google Rich Results Test
- Google Search Console after launch

## Production

- HTTPS active
- Domain redirect correct
- Health endpoint responds
- Contact form delivers
- Error states are visible
- Custom 404 works
- Security headers present
- No console errors
