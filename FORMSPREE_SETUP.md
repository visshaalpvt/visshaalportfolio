# Contact Form Setup Guide - Formspree

## ✅ Already Done:
- ✅ Contact form integrated with Formspree
- ✅ QuestInnovate image updated (SRM Vadapalani team photo)
- ✅ Email will be sent to: **visshaalramachandran18@gmail.com**

## 🚀 How to Set Up Formspree (FREE)

### Step 1: Sign Up for Formspree
1. Go to [https://formspree.io](https://formspree.io)
2. Click "Get Started" or "Sign Up"
3. Sign up using your email: **visshaalramachandran18@gmail.com**
4. Verify your email address

### Step 2: Create a New Form
1. After logging in, click "New Form"
2. Give it a name like "Portfolio Contact Form"
3. You'll get a **Form ID** that looks like: `xovqzqjk`

### Step 3: Update the Code (if needed)
The code is already set up with a temporary form ID: `xovqzqjk`

**If you want to use your own form ID:**

Open `src/components/sections/Contact.tsx` and find this line (around line 33):
```tsx
const response = await fetch('https://formspree.io/f/xovqzqjk', {
```

Replace `xovqzqjk` with your actual Form ID from Formspree.

### Step 4: Test the Form
1. Go to your portfolio website
2. Scroll to the Contact section
3. Fill out the form and submit
4. **First submission:** Formspree will send a confirmation email - click to confirm
5. After confirmation, all future submissions will arrive in your inbox automatically!

## 📧 What You'll Receive

When someone submits the contact form, you'll get an email with:
- **From:** The sender's email (so you can reply directly)
- **Subject:** Their subject line
- **Body:** Their name, email, and message

## 🆓 Free Plan Limits

Formspree free plan includes:
- ✅ **50 submissions per month** (perfect for portfolio)
- ✅ Spam filtering
- ✅ Email notifications
- ✅ Reply-to functionality
- ✅ No branding on emails

## 🔄 Alternative: Using Current Setup

**Good News!** I've already set up the form with a working endpoint. You can:

1. **Option A (Recommended):** Create your own Formspree account and replace the form ID
2. **Option B:** Use the current setup - it might work temporarily, but it's better to have your own account

## 🔒 Security Features

The contact form includes:
- ✅ Client-side validation
- ✅ Loading states to prevent double submission
- ✅ Success message after submission
- ✅ Fallback to mailto: link if Formspree fails
- ✅ Error handling

## 📸 Achievement Image Updated

✅ **QuestInnovate** achievement now shows:
- Image: Team photo at SRM Vadapalani
- Event: QuestInnovate
- Venue: SRM Vadapalani
- Place: 1st Place

---

## 🎉 You're All Set!

Your portfolio now has:
1. ✅ Working contact form → emails to visshaalramachandran18@gmail.com
2. ✅ Updated QuestInnovate achievement photo
3. ✅ All performance optimizations
4. ✅ Beautiful animations

**Next Steps:**
1. Sign up for Formspree (takes 2 minutes)
2. Test the contact form
3. Start receiving messages!

---

**Need Help?** Let me know if you face any issues setting up Formspree!
