# Vikvar Technologies Launch Checklist

## 1. Content verification

- Confirm legal business name in every location.
- Confirm USA and India office addresses.
- Confirm phone number and email addresses.
- Confirm spelling of service and industry names.
- Remove placeholder testimonials, clients, partners, certifications, metrics, or case-study claims.
- Confirm that every contact form recipient is correct.
- Confirm Privacy and Terms pages match actual business processes.

## 2. Branding

- Replace the temporary letter-based icon with the approved Vikvar SVG mark.
- Generate final favicon and Apple touch icon from the approved logo.
- Check logo contrast in light and dark navigation states.
- Confirm brand name formatting is consistent.

## 3. Media

- Download approved remote images.
- Optimise images to AVIF or WebP.
- Move them into `public/images`.
- Replace remote Unsplash URLs.
- Preserve `MEDIA-LICENSES.md`.
- Check every image crop on desktop and mobile.
- Confirm no visible logos, confidential screens, or misleading business scenes.

## 4. Search and social

- Open `/robots.txt`.
- Open `/sitemap.xml`.
- Open `/opengraph-image`.
- Open `/twitter-image`.
- Open `/manifest.webmanifest`.
- Confirm canonical URLs use `https://vikvartech.com`.
- Test shared links in LinkedIn, WhatsApp, Facebook, and X preview tools.
- Submit the sitemap after production launch.

## 5. Functional testing

- Test every navigation item.
- Test desktop mega menus.
- Test mobile navigation and accordions.
- Test contact form validation, success, and error states.
- Test all email and phone links.
- Test all CTA buttons.
- Test the custom 404 page.
- Test keyboard navigation.
- Test screen-reader labels for forms and navigation.

## 6. Responsive testing

Test at least:

- 360 × 800
- 390 × 844
- 768 × 1024
- 1024 × 768
- 1366 × 768
- 1440 × 900
- 1920 × 1080

Confirm:

- No horizontal scrolling.
- No clipped navigation.
- No unreadable image overlays.
- No overlapping cards.
- Buttons remain easy to tap.
- Footer columns stack correctly.

## 7. Performance

- Run `npm run build`.
- Resolve all build errors and important warnings.
- Run Lighthouse against the production build.
- Review Largest Contentful Paint.
- Review Cumulative Layout Shift.
- Review Interaction to Next Paint.
- Confirm below-the-fold images are lazy loaded.
- Confirm the hero asset is prioritised.
- Remove unused large assets.
- Avoid loading duplicate font families or weights.

## 8. Security

- Disable the `X-Powered-By` header.
- Apply the supplied baseline security headers.
- Verify HTTPS before enabling HSTS.
- Review Content Security Policy after all final domains are known.
- Keep secrets out of Git and frontend code.
- Validate and rate-limit public form endpoints.
- Add spam protection to the production contact form.
- Check dependency audit results before launch.

## 9. Deployment

- Confirm the production Node.js version.
- Confirm hosting supports the selected Next.js output mode.
- Set production environment variables.
- Configure the root domain and `www` redirect.
- Configure HTTPS.
- Confirm DNS records.
- Confirm deployment logs contain no errors.
- Test the live site from a mobile network and a separate device.

## 10. Post-launch

- Create a release tag.
- Record the deployed commit.
- Submit the sitemap.
- Verify analytics only after consent and privacy requirements are addressed.
- Monitor form delivery.
- Check 404 and server logs.
- Re-test the website after DNS and CDN caches settle.
