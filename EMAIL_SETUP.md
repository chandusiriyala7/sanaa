# Email Configuration Instructions

## Setup Steps

1. **Create `.env.local` file** in the project root directory

2. **Add the following variables:**

```env
# Email Configuration
EMAIL_USER=your-email@gmail.com
EMAIL_PASSWORD=your-app-password-here
EMAIL_TO=admin@sanaaherbal.com
```

3. **For Gmail users:**
   - Go to https://myaccount.google.com/apppasswords
   - Sign in to your Google Account
   - Create a new App Password
   - Use this password (not your regular Gmail password) for `EMAIL_PASSWORD`

4. **Configure the variables:**
   - `EMAIL_USER`: Your Gmail address that will send emails
   - `EMAIL_PASSWORD`: The App Password generated from Google
   - `EMAIL_TO`: Email address to receive order notifications (can be same as EMAIL_USER)

5. **Restart the development server** after creating `.env.local`

## Important Notes

- Never commit `.env.local` to version control
- The `.env.local` file is already in `.gitignore`
- App Passwords are required if you have 2-factor authentication enabled
- For production, use environment variables in your hosting platform
