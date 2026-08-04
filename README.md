# AI-SCH Announcement & Product Site

Static bilingual homepage + announcement JSON feed for **AI-SCH Simulator**.

**Live (after GitHub Pages is enabled):**

- Site: https://chuqing-web.github.io/HarmonyOS-Hardware-AI-Auto-Routing-Simulation-Web/
- API: https://chuqing-web.github.io/HarmonyOS-Hardware-AI-Auto-Routing-Simulation-Web/api/announcement.json

Deploy repository: [chuqing-web/HarmonyOS-Hardware-AI-Auto-Routing-Simulation-Web](https://github.com/chuqing-web/HarmonyOS-Hardware-AI-Auto-Routing-Simulation-Web)

## Enable GitHub Pages

1. Push this folder’s **contents** to the repository **root** (not nested under `Announcement_Page/`).
2. Repo → **Settings** → **Pages** → Source: **Deploy from a branch** → Branch `main` / folder `/ (root)`.
3. Wait 1–2 minutes, then open the site URL above.

## Update an announcement

Edit `api/announcement.json`:

| Field | Notes |
|-------|--------|
| `title_zh` / `title_en` | Localized titles |
| `body_zh` / `body_en` | Localized body |
| `title` / `body` | Mirror Chinese (app compatibility) |
| `imageUrl` | **Absolute** HTTPS URL under `/assets/images/` |
| `linkUrl` | Usually the site root |
| `publishedAt` | Display date |

Replace the image file under `assets/images/` if needed, then commit & push.

## Local preview

```bash
cd Announcement_Page
# Python
python -m http.server 8080
# open http://localhost:8080
```

## App integration

HarmonyOS app reads `api/announcement.json` via `HomeAnnouncementService.endpoint` and prefers Chinese fields. About → website points at this Pages URL.
