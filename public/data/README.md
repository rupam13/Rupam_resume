# 📋 How to Add Projects to Your Portfolio

## 🎯 File Structure

You have **2 active project files** (DO NOT create new files):

```
public/data/
├── projects-ai.json          ← AI projects only
├── projects-servicenow.json  ← ServiceNow projects only
└── project.sample.json       ← TEMPLATE - Use this to copy structure
```

---

## ✅ How to Add a New Project

### Step 1: Determine the Category
- **AI projects** → Edit `projects-ai.json`
- **ServiceNow projects** → Edit `projects-servicenow.json`

### Step 2: Copy the Sample Structure
1. Open `project.sample.json`
2. Copy ONE project object from it
3. Open the appropriate file (ai or servicenow)
4. Add it to the `projects` array

### Step 3: Customize Your Project

Use this template structure:

```json
{
  "title": "Your Project Name",
  "slug": "your-project-slug",
  "category": "ai",
  "theme": "dark",
  "tags": ["copilot-studio", "agentic-ai"],
  "description": "What your project does...",
  "thumbnail": "https://image-url.com/image.png",
  "linkedinEmbed": "https://www.linkedin.com/embed/feed/update/urn:li:ugcPost:YOUR_ID?compact=1",
  "live": "https://your-live-project-url.com",
  "components": [
    {
      "type": "text",
      "text": "Description paragraph"
    },
    {
      "type": "list",
      "items": ["Feature 1", "Feature 2"]
    }
  ]
}
```

---

## 📝 Field Definitions

| Field | Required | Type | Notes |
|-------|----------|------|-------|
| `title` | ✅ | string | Your project name |
| `slug` | ✅ | string | URL-friendly name (lowercase, hyphens) |
| `category` | ✅ | "ai" \| "servicenow" | Match the file you're editing |
| `theme` | ✅ | "dark" \| "light" | Visual theme for project page |
| `tags` | ✅ | array | Valid tags only (see Valid Tags below) |
| `description` | ✅ | string | Short description |
| `thumbnail` | ✅ | URL | Image to show in project card |
| `linkedinEmbed` | ❌ | URL | LinkedIn post embed URL (optional) |
| `live` | ❌ | URL | Live project URL (optional) |
| `components` | ✅ | array | Project content sections |

---

## 🏷️ Valid Tags

You can only use these tags (no custom tags):

```
copilot-studio, agentic-ai, ivr, servicenow, mcp
react, javascript, node, three, websockets, redis
postgresql, kubernetes, next, html, css, ogl, glsl, gray
```

---

## 🔄 Real-Time vs Manual Changes

### ✨ **Changes ARE Real-Time**

1. **You edit the JSON file on GitHub** (in browser)
2. **You commit the change** (GitHub's web editor)
3. **Portfolio fetches automatically** (within seconds)
4. **Your website updates immediately** ✅

**No manual deploy needed!** The portfolio loads JSON files directly from GitHub.

---

## 📚 Example: Adding an AI Project

### Current `projects-ai.json`:
```json
{
  "projects": [
    {
      "title": "AI-Powered Voice Agent",
      "slug": "ai-voice-agent",
      ...
    }
  ]
}
```

### Add a new AI project (just add to the array):
```json
{
  "projects": [
    {
      "title": "AI-Powered Voice Agent",
      "slug": "ai-voice-agent",
      ...
    },
    {
      "title": "Your New AI Project",
      "slug": "your-new-project",
      "category": "ai",
      "theme": "dark",
      "tags": ["copilot-studio", "agentic-ai"],
      "description": "New project description",
      "thumbnail": "https://...",
      "linkedinEmbed": "",
      "components": [...]
    }
  ]
}
```

✅ Commit → Portfolio updates instantly!

---

## 🚫 Common Mistakes

❌ **DON'T** create new files like `projects-myproject.json`
✅ **DO** add to existing `projects-ai.json` or `projects-servicenow.json`

❌ **DON'T** use custom tags
✅ **DO** use only the valid tags listed above

❌ **DON'T** set category to "general"
✅ **DO** set category to "ai" or "servicenow"

❌ **DON'T** forget to update the slug for each project
✅ **DO** use unique lowercase slugs with hyphens

---

## ✅ Quick Checklist

Before committing:
- [ ] File is `projects-ai.json` OR `projects-servicenow.json`
- [ ] Category matches the file name
- [ ] All required fields are filled
- [ ] Slug is unique and lowercase
- [ ] Tags are from the valid list
- [ ] JSON is valid (no syntax errors)
- [ ] Thumbnail URL is accessible
- [ ] Component structure is correct

---

## 🎉 Result

After you commit:
- Your project appears in the portfolio immediately
- Correct category URL: `/ai/project/your-slug` or `/servicenow/project/your-slug`
- Shows in project grid with thumbnail and description
- No rebuild, no manual deploy needed!
