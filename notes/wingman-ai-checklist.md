# Wingman AI case study: open items before publishing

Page: `projects/wingman-ai.html`. Source: Hana's earlier portfolio page and the feature screenshots she shared on 18 Oct 2026 (originals in `Wingman visuals/`, not in git).

## Confirmed by Hana (18 Oct 2026)

- She may show the project publicly, including drone names and specs.
- The screens are real app UI (camera backgrounds are placeholder photos inside the real UI).
- The previous tablet UI was too small to use, placements weren't optimised for holding the controller, and new features had to be added.
- The drone is used to monitor facilities, indoors and outdoors.
- Blue = safe zone on the distance sensor.
- Testing: the team had the devices and a facility where obstacles could be set up to fly the drone.
- The redesign was implemented in the app. No usage numbers available.
- She and the Lead Product Designer worked on it together; no clear split.

## Written from assumption or interpretation (please check)

- [ ] **Why Steam Deck:** not stated on the page as a company reason. The text only describes what the device is (smaller screen, held in both hands, physical controls). If you remember the real reason, add it.
- [ ] **Distance bands:** the old page showed 0–0.5 m red, 0.5–1 m orange, 1.5+ m blue, leaving 1–1.5 m undefined. The page now says 0–0.5 m red, 0.5–1.5 m orange, more than 1.5 m blue. Confirm with what was built if you can.
- [ ] **Hit sensor vs distance sensor:** the page treats the hit sensor as the directional glow (left, right, top, bottom) of the distance sensor. Correct if they were separate features.
- [ ] **Target tracking and map view captions:** written from what the screenshots show (tracking box with distance; Auto/Manual mode badges; camera feed in a round preview; satellite layer).
- [ ] **Results:** kept qualitative ("in the app today", "more visible and legible", "internal testing"). No numbers on purpose.
- [ ] **Status fact:** "Design implemented in the app". Adjust if only part of it shipped.

## Fixed

- [x] Typo "R2 Dxrone" on the new home screen corrected to "R2 Drone" in the image (18 Oct 2026). Fix it in Figma too if the file is reused.

## Not used yet

- Map views 3–5 (drop pin, offline drone, FPV with mini-map), notification styles overview, notification toasts, gallery photos tab, drone dropdown and more menu.
- Home screen carousel slide from the old page.

## Before publishing

- [x] Theme: black and white from the app's neutral scale (Hana, 18 Oct 2026); homepage row hovers to near-black. Dates on the homepage row corrected to 2024–2025.
- [ ] Give the "Next project" boxes each project's colours once themes exist (see CLAUDE.md).
