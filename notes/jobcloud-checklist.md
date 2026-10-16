# JobCloud case study: open items before publishing

Page: `projects/jobcloud.html` (AI assistant for jobs.ch).
Status: **not ready to publish.** Every screenshot is still a placeholder, and the claims below are unconfirmed.

## Claims to verify

- [ ] **~68% figure:** source, timeframe, and exact definition of "vague, empty, or overly broad first-time queries".
- [ ] **6.7% and 10.5% figures:** source, definitions, and timeframe for first-visit and return-visit application starts. Then replace the page note "Source: internal analysis" with the confirmed source.
- [x] **Ownership:** clarified. I designed the experience end to end, with the focus on the UI and shaping the assistant's responses (Scope section updated 14 Oct 2026). Still check the Team fact and the remaining "I" / "we" sentences read consistently with this.
- [ ] **Scope diagram:** confirm that all four stages (capture intent, deliver useful results, save intent / create an alert, build continuity over time) were part of the design, since the page now presents them as designed end to end. Decision 3 still calls some result actions "proposed".
- [ ] **Migros example:** did "I want a job at Migros" / "What kind of role would you like there?" appear in a real test, in the prototype, or only as an illustration? It is labelled "Illustrative example" on the page until confirmed.
- [ ] **Round 1 → Round 2:** the exact Round 1 findings and exactly what changed between rounds.
- [ ] **Round 2 expectations:** which were raised by participants and which were identified by the design team ("What testing taught me" and visual 9).
- [ ] **Result actions:** which next actions were present in the tested prototype and which were only proposed. Decision 3 currently describes refine, keep-me-posted, and explore-information as "proposed".
- [ ] **New flow (visual 5):** remove any of the five steps that was not in the tested prototype.

## Screenshots needed

Save real screens into `assets/jobcloud/`, replace each placeholder `<div class="shot …">` with an `<img>`, and write alt text from what the screen actually shows. Check every screen for personal or confidential data that needs blurring or anonymising first.

Numbers match the "Image N" labels shown on the page, in reading order.

| Image | Where on the page | Screen needed |
|---|---|---|
| 1 | Below the title card | Removed 16 Oct 2026; the Starting point section (job search page with the AI Assistant tab) now follows the title card |
| 2 | Research and iteration, left panel | Round 1 guided filter modal |
| 3 | Research and iteration, right panel | Round 2 dedicated assistant conversation |
| 4 | How the new flow works, step 01 | Open prompt |
| 5 | How the new flow works, step 02 | User describes a goal or experience |
| 6 | How the new flow works, step 03 | Assistant asks a focused clarification |
| 7 | How the new flow works, step 04 | Follow-up questions narrow the search (placed: location question, 16 Oct 2026) |
| 8 | How the new flow works, step 05 | Job results and next actions |
| 9 | Decision 1, left | Round 1 modal (may be the same file as image 2) |
| 10 | Decision 1, right | Round 2 opening screen (may be the same file as image 1) |
| 11 | Decision 3 | Results screen. Add up to three annotations: job results, the refine option, and save/alert only if it is shown in the prototype |

## Anonymisation

- [ ] Check every screenshot for names, CVs, email addresses, internal URLs, and unreleased business data.

## Screenshots placed 16 Oct 2026

- [x] **Version:** confirmed 16 Oct 2026: all shared screenshots and the screen recording show the Round 2 prototype.
- [ ] **Result actions:** the next-actions screenshot (Image 11) shows refine, keep me posted, broaden, which fits best, career change and salary. Decision 3 still calls these "proposed". Update the wording if they were in the tested prototype.
- [ ] **Job cards:** Image 8 shows real employers and a job reference (Humanis AG [A015449], yellowshark, Swissphone Wireless AG). Fine if public listings; otherwise blur.
- [x] **Round 1 and Image 10:** placed 16 Oct 2026. Image 2 is step 1 of the Round 1 modal, Image 9 shows all four modal steps, Image 10 reuses the Round 2 opening screen. Every placeholder is now filled.
- Conversation history sidebar and rename/delete menu placed 16 Oct 2026 after "How the new flow works" (card text: "Earlier conversations stay within reach."). Still unused: edit-a-previous-answer.
- "Starting point" section added 16 Oct 2026 below the top image, from Hana's own wording: the platform kept the familiar search and added the agentic approach as a secondary way in, via a new AI Assistant tab in the central navigation. Visual: full Round 2 job search page with the tab (entry-page.png), full width like the top image.
