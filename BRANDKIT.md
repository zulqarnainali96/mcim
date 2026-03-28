# Brand Kit Documentation

This project includes a comprehensive brand kit system located in `src/brandkit.ts`.

## Color Palette

### Primary Colors
- **Navy Dark**: `#0A1628` - Main background color for hero sections
- **Navy Light**: `#152238` - Secondary backgrounds and cards
- **Navy Darker**: `#050B14` - Deep shadows and accents

### Accent Colors
- **Cyan**: `#00D9C0` - Primary CTA buttons and highlights
- **Cyan Light**: `#33E3D0` - Hover states
- **Cyan Dark**: `#00B89F` - Active states
- **Blue**: `#0066FF` - Secondary actions and highlights
- **Blue Light**: `#3385FF` - Hover states
- **Blue Dark**: `#0052CC` - Active states

### Neutral Colors
- **White**: `#FFFFFF`
- **Gray Scale**: 50-900 range for various UI elements
- Use gray-50 through gray-200 for light backgrounds
- Use gray-600 through gray-900 for text on light backgrounds

## Typography

### Font Family
- Primary: System font stack with fallbacks
- `-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif`

### Font Sizes
- **xs**: 0.75rem (12px)
- **sm**: 0.875rem (14px)
- **base**: 1rem (16px)
- **lg**: 1.125rem (18px)
- **xl**: 1.25rem (20px)
- **2xl**: 1.5rem (24px)
- **3xl**: 1.875rem (30px)
- **4xl**: 2.25rem (36px)
- **5xl**: 3rem (48px)
- **6xl**: 3.75rem (60px)
- **7xl**: 4.5rem (72px)

### Font Weights
- **Normal**: 400
- **Medium**: 500
- **Semibold**: 600
- **Bold**: 700

### Line Heights
- **Tight**: 1.2 (for headings)
- **Normal**: 1.5 (for body text)
- **Relaxed**: 1.75 (for large body text)

## Component Library

### Button Component
Located in `src/components/Button.tsx`

**Variants:**
- `primary` - Cyan background with navy text
- `secondary` - Blue background with white text
- `outline` - Transparent with cyan border

**Sizes:**
- `sm` - Small button
- `md` - Medium button (default)
- `lg` - Large button

### Section Component
Located in `src/components/Section.tsx`

**Variants:**
- `light` - Light gray background
- `dark` - Navy background with white text

**Container Sizes:**
- `sm`, `md`, `lg`, `xl`, `2xl` - Responsive container widths

### Card Components
Located in `src/components/Card.tsx`

- `Card` - Basic card with optional hover effect
- `FeatureCard` - Feature card with icon, title, and description

## Design Principles

1. **Contrast**: Always ensure sufficient contrast between text and backgrounds
2. **Spacing**: Use consistent spacing with the 8px grid system
3. **Hierarchy**: Use font sizes and weights to create clear visual hierarchy
4. **Responsive**: All components should work on mobile, tablet, and desktop
5. **Accessibility**: Maintain WCAG AA standards for color contrast

## Usage

Import the brand kit in your components:

\`\`\`typescript
import { brandKit } from './brandkit';

// Use colors
backgroundColor: brandKit.colors.primary.navy
color: brandKit.colors.accent.cyan

// Use typography
fontSize: brandKit.typography.fontSize['2xl']
fontWeight: brandKit.typography.fontWeight.bold
\`\`\`

## Customization

To modify the brand kit, edit `src/brandkit.ts`. All changes will automatically propagate throughout the application.
