# 🔑 ENVIRONMENT VARIABLES CONFIGURATION

**For Vercel Deployment**

---

## Quick Summary

Your portfolio uses **Formspree** for contact form email notifications.

### Current Status
✅ **Works WITHOUT environment variables** - Uses hardcoded form ID  
✅ **Enhanced WITH environment variables** - Best practice approach

---

## If You Want to Use Environment Variables

### In Vercel Dashboard

1. Go to your Vercel project
2. Navigate to: **Settings** → **Environment Variables**
3. Add these two variables:

| Key | Value | Environments |
|-----|-------|---|
| `VITE_FORMSPREE_ID` | `maqnrovo` | Production, Preview, Development |
| `VITE_FORMSPREE_EMAIL` | `visshaalramachandran18@gmail.com` | Production, Preview, Development |

4. Click "Save"
5. Redeploy (or deployment will use these on next push)

---

## If You DON'T Want to Use Environment Variables

✅ **Just deploy as-is!** The contact form will work perfectly.

The code automatically falls back to:
- Form ID: `maqnrovo`
- Email: Emails go to `visshaalramachandran18@gmail.com`

---

## Local Development

If developing locally, create a `.env.local` file (don't commit):

```env
VITE_FORMSPREE_ID=maqnrovo
VITE_FORMSPREE_EMAIL=visshaalramachandran18@gmail.com
```

Then run:
```bash
npm run dev
```

---

## What These Variables Do

### `VITE_FORMSPREE_ID`
- Your Formspree form identifier
- Current value: `maqnrovo`
- Used to construct the endpoint: `https://formspree.io/f/{VITE_FORMSPREE_ID}`

### `VITE_FORMSPREE_EMAIL`
- Where contact form emails are sent
- Current value: `visshaalramachandran18@gmail.com`
- This is just for reference, Formspree handles the actual routing

---

## Why Use Environment Variables?

✅ **Security**: Form ID not visible in source code  
✅ **Flexibility**: Change form ID without code changes  
✅ **Best Practice**: Industry standard approach  
✅ **Deployment**: Different values for different environments (if needed)  

---

## Getting a New Formspree Form ID

If you want to create your own Formspree account:

1. Go to https://formspree.io
2. Sign up with your email
3. Create a new form
4. Copy the Form ID (e.g., `abc123xyz`)
5. Update `VITE_FORMSPREE_ID` in Vercel to your new ID

---

## Testing the Form

After deployment, test the contact form:

1. Go to Contact section
2. Fill in all fields
3. Click "Send"
4. Check your email (check spam folder too)
5. You should receive the message

---

## Troubleshooting

**Form not working?**
- Check Formspree dashboard: https://formspree.io
- Verify form is activated
- Check spam folder
- Test with form ID: `maqnrovo`

**Wrong email receiving submissions?**
- Go to Formspree settings
- Update the recipient email address
- OR update `VITE_FORMSPREE_ID` to point to your own form

---

## Summary for Vercel

**Absolute Minimum:** Deploy as-is, it works! ✅  
**Best Practice:** Add 2 environment variables to Vercel (5 min setup) ✅  

Either way, your contact form will work perfectly. 🚀
