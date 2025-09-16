# EmailJS Setup Guide for Contact Form

## Step 1: Create EmailJS Account
1. Go to https://www.emailjs.com/
2. Sign up for a free account (allows 200 emails/month)
3. Verify your email address

## Step 2: Create Email Service
1. In EmailJS dashboard, go to "Email Services"
2. Click "Add New Service"
3. Choose your email provider (Gmail recommended):
   - Select "Gmail"
   - Click "Connect Account"
   - Sign in with your Gmail account (kirthickumarportfolio@gmail.com)
   - Allow EmailJS permissions
4. Copy the Service ID (e.g., "service_xxxxxxx")

## Step 3: Create Email Template
1. Go to "Email Templates" in dashboard
2. Click "Create New Template"
3. Use this template content:

**Subject:** New message from {{from_name}} - {{subject}}

**Body:**
```
You have received a new message from your portfolio contact form:

From: {{from_name}}
Email: {{from_email}}
Subject: {{subject}}

Message:
{{message}}

---
Sent via Portfolio Contact Form
```

4. Click "Save" and copy the Template ID (e.g., "template_xxxxxxx")

## Step 4: Get Public Key
1. Go to "Account" section in EmailJS dashboard
2. Find "Public Key" (e.g., "xxxxxxxxxxxxxxx")
3. Copy this key

## Step 5: Update Configuration
Open `/src/config/emailjs.ts` and replace the placeholder values:

```typescript
export const emailjsConfig = {
  serviceId: 'service_xxxxxxx',     // Your Service ID
  templateId: 'template_xxxxxxx',   // Your Template ID  
  publicKey: 'xxxxxxxxxxxxxxx'      // Your Public Key
};
```

## Step 6: Test the Form
1. Start your development server: `npm run dev`
2. Go to the Contact page
3. Fill out the form and click "Send Message"
4. Check your email (kirthickumarportfolio@gmail.com) for the message

## Security Notes
- EmailJS is safe for frontend use
- Your email is not exposed to users
- Free tier: 200 emails/month
- Paid plans available for higher volume

## Troubleshooting
- Make sure all IDs are correct
- Check browser console for errors
- Verify Gmail account is connected
- Test with a simple message first

## Alternative Solutions
If you prefer other methods:
1. **Formspree**: https://formspree.io/ (simpler setup)
2. **Netlify Forms**: If hosting on Netlify
3. **Custom backend**: PHP/Node.js server with SMTP

Your contact form is now ready to receive real emails!
