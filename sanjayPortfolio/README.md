# Sanjay Kumar Sulaniya — Portfolio

A responsive single-page portfolio built with React 18, Vite, Tailwind CSS, Radix UI primitives, and Framer Motion.

## Run locally

```bash
npm install
npm run dev
```

Create a production build with `npm run build`, then preview it using `npm run preview`.

## Customize the content

- Personal details, skills, experience, education, and social links: `src/data/content.js`
- Project cards and image URLs: `src/data/projects.js`
- Resume download: replace `public/resume.pdf` with your PDF (or update `resume` in `src/data/content.js`).
- Theme toggle: saved automatically in local storage.
- Replace placeholder email, profile links, location, degree, and dates with your details before publishing.

The project cards use sample projects and image URLs. Update each project's title, description, tags, image, live demo, and GitHub link in `src/data/projects.js`.

## Configure the contact form

The form uses EmailJS. Copy `.env.example` to `.env` and add the credentials from your EmailJS account:

```env
VITE_EMAILJS_SERVICE_ID=your_service_id
VITE_EMAILJS_TEMPLATE_ID=your_template_id
VITE_EMAILJS_PUBLIC_KEY=your_public_key
```

Configure your EmailJS template with `from_name`, `reply_to`, and `message` fields. Set the template's **To Email** value to `{{to_email}}`; the form passes Sanjay's address (`sanjaysulaniya42@gmail.com`) as that value. Then restart the Vite server. Without EmailJS credentials, the form opens the visitor's email app with a prefilled message addressed to Sanjay; the visitor must press Send there.

## Deploy

### Vercel

Import the repository in Vercel. Use `npm run build` as the build command and `dist` as the output directory. Add the three EmailJS variables in the project's Environment Variables settings.

### Netlify

Import the repository in Netlify. Use `npm run build` as the build command and `dist` as the publish directory. Add the EmailJS variables under Site configuration → Environment variables.

## Stack

React 18 · Vite · JavaScript · Tailwind CSS · Radix UI · Framer Motion · Lucide React · React Icons · react-type-animation · EmailJS
