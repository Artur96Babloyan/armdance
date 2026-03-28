# Arm Dance Show Ballet

A beautiful Next.js website for an Armenian dance school, featuring traditional Armenian cultural styling inspired by Armenian carpets and heritage.

## Features

- **Home Page**: Hero section with background image, features showcase, and contact form
- **Review Page**: Form for students to submit reviews and feedback
- **About Us Page**: Information about the school, Armenian dance culture, and mission
- **Armenian-Inspired Design**: Color scheme and styling based on Armenian carpets and traditional patterns
- **Responsive Design**: Fully responsive and mobile-friendly
- **Modern UI/UX**: Beautiful, user-friendly interface with smooth animations

## Tech Stack

- **Next.js 16** - React framework with App Router
- **TypeScript** - Type-safe development
- **Tailwind CSS** - Utility-first CSS framework
- **React 19** - Latest React features

## Getting Started

### Installation

```bash
npm install
```

### Development

Run the development server:

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser to see the result.

### Build

Build the production version:

```bash
npm run build
```

### Start Production Server

```bash
npm start
```

## Project Structure

```
armdanceshowbalet/
├── app/
│   ├── about/
│   │   └── page.tsx          # About Us page
│   ├── review/
│   │   └── page.tsx          # Review submission page
│   ├── layout.tsx            # Root layout with navigation
│   ├── page.tsx              # Home page
│   └── globals.css           # Global styles with Armenian theme
├── components/
│   └── Navigation.tsx        # Navigation component
└── public/
    └── logo.jpg              # Logo and background image
```

## Design Features

### Color Palette
- **Armenian Red** (#8b0000, #8B0000) - Primary color inspired by traditional Armenian carpets
- **Armenian Gold/Amber** (#d4af37, #D4AF37) - Accent color representing richness and heritage
- **Deep Red** - Various shades for depth and elegance
- **Cream/Beige** - Background colors for warmth

### Styling Elements
- Armenian carpet-inspired patterns and borders
- Traditional color combinations
- Decorative geometric patterns
- Rich, warm color palette
- Elegant typography with shadows

## Pages

### Home Page (`/`)
- Hero section with full-screen background image
- Features section highlighting school benefits
- Contact form integrated into the page
- Call-to-action buttons

### Review Page (`/review`)
- Review submission form
- Rating system (1-5 stars)
- Success message after submission
- Beautiful form styling

### About Us Page (`/about`)
- Mission statement
- Information about Armenian dance culture
- School history and values
- Cultural significance of Armenian dance

## Customization

### Update Logo/Image
Replace `public/logo.jpg` with your own image. The image is used for:
- Navigation logo
- Favicon
- Background images

### Modify Colors
Edit `app/globals.css` to adjust the Armenian color scheme:
- `--armenian-red`
- `--armenian-gold`
- `--armenian-blue`
- `--armenian-green`

### Update Content
Edit the respective page files in `app/` directory to update content.

## Learn More

- [Next.js Documentation](https://nextjs.org/docs)
- [Tailwind CSS Documentation](https://tailwindcss.com/docs)
- [Armenian Dance Culture](https://en.wikipedia.org/wiki/Armenian_dance)

## License

This project is created for Arm Dance Show Ballet.
