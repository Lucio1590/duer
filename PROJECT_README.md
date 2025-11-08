# Duer - Skill-Based Marketplace & Contest Platform

A mobile-first React application built with TypeScript, Vite, and Tailwind CSS where users can earn coins through their skills, create contests, and participate in a marketplace.

## 🚀 Features

### Core Functionality
- **Contest System**: Create and participate in contests for app development, design, websites, and more
- **Betting Platform**: Place bets on future events with coin stakes
- **Marketplace**: Buy and sell services, products, and expertise
- **Coin Economy**: Earn and spend coins throughout the platform

### User Interface
- **Mobile-First Design**: Optimized for 100% mobile usage
- **Bottom Navigation**: Easy access to main sections (Home, Marketplace, Create, Bets, Profile)
- **Side Menu**: Quick access to profile, settings, and user-specific pages
- **Card Components**: Beautiful card-based UI for contests, bets, and marketplace items

## 📁 Project Structure

```
src/
├── components/          # Reusable UI components
│   ├── BottomNavigation.tsx
│   ├── Layout.tsx
│   ├── SideMenu.tsx
│   ├── ContestCard.tsx
│   ├── BetCard.tsx
│   └── MarketplaceCard.tsx
├── context/            # React Context for state management
│   └── AppContext.tsx
├── hooks/              # Custom React hooks
│   └── useApp.ts
├── mock/               # Mock data system
│   ├── index.ts
│   ├── users.ts
│   ├── contests.ts
│   ├── bets.ts
│   └── marketplace.ts
├── pages/              # Page components
│   ├── Home.tsx
│   ├── CreateContest.tsx
│   ├── Bets.tsx
│   └── Marketplace.tsx
├── types/              # TypeScript type definitions
│   └── index.ts
├── App.tsx             # Main app component
├── App.css             # Tailwind CSS imports
└── main.tsx            # App entry point
```

## 🛠️ Tech Stack

- **React 19** - UI framework
- **TypeScript** - Type safety
- **Vite** - Build tool
- **Tailwind CSS v4** with `@tailwindcss/vite` - Styling
- **React Router DOM** - Routing

## 📦 Installation

```bash
# Install dependencies
npm install

# Run development server
npm run dev

# Build for production
npm run build

# Preview production build
npm run preview
```

## 🎨 Component Documentation

### Card Components

#### ContestCard
Displays contest information including:
- Title and description
- Creator information
- Prize amount
- Participant count
- Deadline with urgency indicators
- Category badge
- Status indicator

#### BetCard
Shows bet details:
- Title and description
- Odds and stake
- Creator info
- Participant count
- Deadline
- Category

#### MarketplaceCard
Marketplace item display:
- Title and description
- Price in coins
- Seller information
- Item type (service/product/expertise)
- Status (available/sold/pending)
- Category

### Layout Components

#### Layout
Main layout wrapper featuring:
- App header with menu button
- Side menu drawer
- Content area with routing
- Bottom navigation bar

#### BottomNavigation
Fixed bottom navigation with:
- Home
- Marketplace
- Create (elevated central button)
- Bets
- Profile (placeholder)

#### SideMenu
Slide-out menu containing:
- User profile info
- Coin balance
- Navigation links (Profile, My Contests, My Bets, Settings)
- Help & About sections
- Sign out button

## 🗂️ Mock Data System

The app uses a JSON-based mock data system with the following entities:

### User
```typescript
{
  id: string
  name: string
  email: string
  coins: number
  avatar?: string
  expertise: string[]
  createdAt: Date
}
```

### Contest
```typescript
{
  id: string
  title: string
  description: string
  category: 'app' | 'design' | 'website' | 'other'
  prize: number
  creator: User
  participants: number
  deadline: Date
  status: 'open' | 'in-progress' | 'completed' | 'cancelled'
  requirements: string[]
  createdAt: Date
}
```

### Bet
```typescript
{
  id: string
  title: string
  description: string
  category: string
  odds: number
  stake: number
  creator: User
  participants: number
  deadline: Date
  status: 'open' | 'closed' | 'settled'
  createdAt: Date
}
```

### MarketplaceItem
```typescript
{
  id: string
  title: string
  description: string
  type: 'service' | 'product' | 'expertise'
  price: number
  seller: User
  category: string
  status: 'available' | 'sold' | 'pending'
  createdAt: Date
}
```

## 🔧 Context Provider

The `AppProvider` manages global state for:
- Current user and coin balance
- Contests list
- Bets list
- Marketplace items
- CRUD operations for all entities

### Usage
```typescript
import { useApp } from '../context/AppContext';

const { currentUser, contests, addContest } = useApp();
```

## 🎯 Key Features Implementation

### Creating a Contest
1. Navigate to Create page via central "+" button
2. Fill in contest details (title, description, category, prize, deadline, requirements)
3. Submit to add to contest feed
4. Coins are managed through the context

### Browsing Content
- **Home Page**: Tabbed interface showing contests, bets, and marketplace items
- **Marketplace Page**: Dedicated view for marketplace items with stats
- **Bets Page**: Separate tabs for available bets and betting history

### Mobile-Optimized
- Responsive design with max-width constraints
- Touch-friendly UI elements
- Bottom navigation for thumb accessibility
- Side menu drawer for additional features
- Sticky headers for better navigation

## 🎨 Design System

### Colors
- Primary: Indigo (`bg-indigo-600`)
- Success: Green
- Warning: Yellow
- Danger: Red
- Neutral: Gray scale

### Typography
- Headers: Bold, larger sizes
- Body: Regular weight
- Small text: 0.7rem - 0.9rem for labels

### Spacing
- Consistent padding: `p-4` for containers
- Gap utilities for flex/grid layouts
- Bottom padding on main content for navigation clearance

## 🚧 Future Enhancements

The current implementation provides the foundation. Potential additions:
- User authentication
- Real-time updates
- Payment integration
- Contest submission system
- Bet resolution mechanism
- User ratings and reviews
- Search and filtering
- Notifications
- Social features (comments, likes)

## 📱 Running the App

The app is currently running at: **http://localhost:5175/**

Navigate using:
- Bottom navigation bar for main sections
- Hamburger menu (top left) for side menu
- Central "+" button to create contests

## 👥 Mock Users

The system includes 4 mock users:
1. John Startup (5000 coins) - Web Development, UI/UX Design
2. Sarah Designer (3500 coins) - Graphic Design, Branding
3. Mike Developer (4200 coins) - Full Stack, Mobile Apps
4. Emma Marketing (2800 coins) - Digital Marketing, Content Creation

Current user: John Startup

---

Built with ❤️ using React, TypeScript, and Tailwind CSS
