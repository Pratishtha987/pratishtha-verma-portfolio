# 📧 Email Setup Guide - Resend Integration

## ✅ What's Already Done
- ✅ Resend package installed
- ✅ API route updated with email sending functionality
- ✅ Beautiful HTML email template created
- ✅ Form validation and error handling
- ✅ Success/error messages for users

## 🚀 Quick Setup (5 minutes)

### Step 1: Create Resend Account
1. Go to [resend.com](https://resend.com)
2. Sign up with your email
3. Verify your email address
4. Go to [API Keys](https://resend.com/api-keys)
5. Click "Create API Key"
6. Name it "Portfolio Contact Form"
7. Copy the API key (starts with `re_`)

### Step 2: Create Environment File
Create a file named `.env.local` in your project root:

```bash
# Resend Email Configuration
RESEND_API_KEY=re_your_actual_api_key_here
YOUR_EMAIL=your-email@example.com
```

**Replace:**
- `re_your_actual_api_key_here` with your actual Resend API key
- `your-email@example.com` with your email address

### Step 3: Test the Form
1. Start your development server: `npm run dev`
2. Go to your portfolio contact section
3. Fill out the form
4. Submit it
5. Check your email inbox!

## 📧 What You'll Receive

When someone submits the contact form, you'll get a beautifully formatted email with:

- **Sender's name and email**
- **Their message**
- **Timestamp**
- **Reply-to functionality** (you can reply directly to them)
- **Professional formatting**

## 🔧 Customization Options

### Change the "From" Address
In `app/api/contact/route.ts`, line 30:
```javascript
from: 'Portfolio Contact <onboarding@resend.dev>',
```

You can change this to:
- `'Your Name <your-email@yourdomain.com>'` (if you have a custom domain)
- `'Contact Form <noreply@yourdomain.com>'`

### Customize Email Template
The email template is in the `html` section (lines 33-64). You can modify:
- Colors and styling
- Layout and sections
- Additional information
- Your branding

### Add More Recipients
To send to multiple emails, change line 31:
```javascript
to: [process.env.YOUR_EMAIL, 'another-email@example.com'],
```

## 🛡️ Security Features

- ✅ Email format validation
- ✅ Required field validation
- ✅ Rate limiting (built into Resend)
- ✅ Spam protection
- ✅ Secure API key handling

## 🚨 Troubleshooting

### "Failed to send email" error
1. Check your API key is correct
2. Make sure `.env.local` file exists
3. Restart your development server after adding environment variables
4. Check Resend dashboard for any issues

### Emails not received
1. Check spam folder
2. Verify email address in `.env.local`
3. Check Resend dashboard for delivery status
4. Make sure Resend account is verified

### Development vs Production
- **Development**: Uses `onboarding@resend.dev` as sender
- **Production**: You can use your own domain with Resend

## 📊 Resend Limits (Free Tier)
- 3,000 emails per month
- 100 emails per day
- Perfect for portfolio contact forms!

## 🎉 You're All Set!

Once you complete these steps, your contact form will:
1. ✅ Send you instant email notifications
2. ✅ Look professional and branded
3. ✅ Allow direct replies to senders
4. ✅ Handle errors gracefully
5. ✅ Work on both desktop and mobile

**Need help?** Check the Resend documentation or let me know if you run into any issues!
