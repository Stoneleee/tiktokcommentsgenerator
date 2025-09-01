# TikTok Comment Generator

A modern React component for generating authentic-looking TikTok comment images. Built with Next.js, TypeScript, Tailwind CSS, and shadcn/ui components.

## Features

- ✨ **Customizable Usernames and Avatars**: Upload custom avatars or use generated ones
- 🎨 **Authentic TikTok Design**: Realistic comment bubble styling with verification badges
- 💫 **High-Quality Export**: Download generated comments as PNG or JPG images
- 🌙 **Dark Mode Support**: Built-in dark mode compatibility
- 📱 **Responsive Design**: Works perfectly on desktop and mobile devices
- ⚡ **Real-time Preview**: See your comment changes instantly in the preview

## Tech Stack

- **Framework**: Next.js 15 with App Router
- **Language**: TypeScript
- **Styling**: Tailwind CSS
- **UI Components**: shadcn/ui
- **Icons**: Lucide React
- **State Management**: React Hooks

## Installation

1. Clone the repository:
```bash
git clone <repository-url>
cd tiktokcommentsgenerator
```

2. Install dependencies:
```bash
pnpm install
```

3. Run the development server:
```bash
pnpm dev
```

4. Open [http://localhost:3000/demo](http://localhost:3000/demo) to view the component.

## Usage

### Basic Usage

```tsx
import TikTokCommentGenerator from "@/components/TikTokCommentGenerator";

export default function MyPage() {
  return (
    <div className="min-h-screen bg-background">
      <TikTokCommentGenerator />
    </div>
  );
}
```

### Component Features

The `TikTokCommentGenerator` component includes:

- **Avatar Management**: Upload custom images or generate random avatars
- **Username Input**: Enter custom usernames with character limits
- **Comment Text**: Write comments with real-time character counting
- **Verification Badge**: Toggle blue verification badges
- **Live Preview**: See changes instantly in the TikTok-style preview
- **Download Options**: Export as PNG or JPG formats

### Props

The component doesn't accept any props currently, but you can customize it by modifying the component code.

## File Structure

```
src/
├── components/
│   ├── ui/                    # shadcn/ui components
│   │   ├── button.tsx
│   │   ├── input.tsx
│   │   ├── textarea.tsx
│   │   ├── label.tsx
│   │   ├── switch.tsx
│   │   └── card.tsx
│   └── TikTokCommentGenerator.tsx  # Main component
├── app/
│   └── demo/
│       └── page.tsx           # Demo page
└── lib/
    └── utils.ts               # Utility functions
```

## Customization

### Styling

The component uses Tailwind CSS classes and can be customized by:

1. Modifying the className props in the component
2. Updating the Tailwind configuration
3. Adding custom CSS in your global styles

### Functionality

To add new features:

1. **Download Functionality**: Implement the `handleDownload` function to generate and download images
2. **Avatar Generation**: Enhance the `handleGenerateRandom` function with more avatar options
3. **Comment Templates**: Add predefined comment templates
4. **Bulk Generation**: Implement bulk comment generation features

## Dependencies

### Required Dependencies

```json
{
  "@radix-ui/react-slot": "^1.2.3",
  "@radix-ui/react-label": "^2.1.7",
  "@radix-ui/react-switch": "^1.2.6",
  "class-variance-authority": "^0.7.1",
  "clsx": "^2.1.1",
  "lucide-react": "^0.542.0",
  "next": "15.5.2",
  "react": "19.1.0",
  "react-dom": "19.1.0",
  "tailwind-merge": "^3.3.1"
}
```

## Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Add tests if applicable
5. Submit a pull request

## License

This project is licensed under the MIT License.

## Support

For support and questions, please open an issue on GitHub.

---

**Note**: This component is for educational and demonstration purposes. Please ensure compliance with TikTok's terms of service when using generated content.
