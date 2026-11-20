# Merge the brief's content into the restored pages (keep the old design)

## Where things stand now
- Pages the restore didn't touch keep all the brief's work: the AI SEO/GEO page, the 9 service pages, the industry pages, the blog, About Us, How We Work, Editorial Standards, Our Work, FAQ and Contact.
- The 8 restored pages (Home, Services, SEO Specialist, SEO Consultant, Packages, SEO Sri Lanka guide, Google Ads Sri Lanka, Google Maps) have their old design and sections back. The new rules still apply on them: the only public price is the consultation from LKR 50,000, and there are no fake reviews or guarantees.
- What the restore dropped from those 8 pages is the brief's extra content: the new sample deliverables, the newer FAQ answers, keyword headings like "SEO consultant Sri Lanka", the "Get SEO right before you build" message and the newer internal links.

## What I'll do
For each of the 8 pages, keep every current section and its design. Then **add** the missing brief content as extra sections in the same visual style:
1. Home: the "Get SEO right before you build" message, links to the new company pages, and the newer FAQ answers.
2. Services: link cards to the 9 service pages and the AI SEO/GEO page.
3. SEO Specialist and SEO Consultant: put the keywords back in the main headings, plus the sample deliverables and the newer FAQs.
4. Packages: the clear "consultation from LKR 50,000, everything else is a custom quote" explanation and the newer FAQs.
5. SEO Sri Lanka guide: any brief sections that are missing, so the page stays over 2,500 words.
6. Google Ads and Google Maps: the newer FAQs and the "sample" deliverables, keeping the Google-themed look and the video.
7. FAQ answers are merged, not duplicated, and each page has a single FAQ schema block.

Nothing currently on these pages gets removed.

## Checks
- Every page still has one H1, one FAQ schema block and no prices other than the consultation.
- Screenshots on desktop and mobile to confirm the old design is unchanged.
- Tests pass.

## Technical details
- Take the brief's content from the shared core-pages and service-page-content data modules and render it with the restored pages' existing styling.
- Merge each page's FAQ answers into its single FAQPage JSON-LD block.
