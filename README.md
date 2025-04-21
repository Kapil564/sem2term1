# React Project with Vite

A modern React application built with Vite, featuring Material-UI, Tailwind CSS, and React Router.

## 🚀 Features

- ⚡️ Fast development with Vite
- 🎨 Styling with Material-UI and Tailwind CSS
- 🔄 React Router for navigation
- 📦 Axios for HTTP requests
- 🧹 ESLint for code quality
- 🔥 Hot Module Replacement (HMR)

## 📸 Site Preview

### Main Product Listing
![Main Product Listing](screenshots/preview1.jpg)

Our main product listing page features:
- Clean and modern product grid layout
- Product cards with images and pricing
- "Add to Cart" and "Favorite" functionality
- Search bar for easy product discovery
- Navigation menu with Cart, Favorites, and Purchased sections

### Shopping Cart Interface
![Shopping Cart](screenshots/preview2.jpg)

The shopping cart interface includes:
- Detailed product listing with images
- Quantity adjustment controls (+ / -)
- Individual product pricing
- Remove option for each item
- Clean, user-friendly layout

These screenshots demonstrate our commitment to a modern, user-friendly shopping experience with intuitive navigation and clear product presentation.

## 📋 Prerequisites

- Node.js (version 18 or higher)
- npm  package manager

## 🛠️ Installation

1. Clone the repository:
```bash
git clone [your-repository-url]
cd project
```

2. Install dependencies:
```bash
npm install
```

## 🚀 Development

To start the development server:

```bash
npm run dev


The application will be available at `http://localhost:5173`

## 🛠️ Tech Stack

- React 19
- Vite 6
- Material-UI 7
- Tailwind CSS 4
- React Router 7
- Axios
- ESLint

## 📁 Project Structure

```
project/
├── .git/                    # Git version control
├── node_modules/            # Dependencies
├── public/                  # Static files
├── src/                     # Source code
│   ├── assets/              # Images, fonts, etc.
│   ├── components/          # React components
│   │   ├── Cart/            # Cart related components
│   │   ├── Dashboard/       # Dashboard components
│   │   ├── Favorites/       # Favorites components
│   │   ├── Footer/          # Footer component
│   │   ├── Navbar/          # Navigation bar
│   │   ├── Search/          # Search functionality
│   │   ├── SignUp/          # Sign up components
│   │   ├── subNavbar/       # Sub-navigation components
│   │   ├── product.js       # Product related functionality
│   │   └── index.js         # Component exports
│   ├── context/             # React Context providers
│   │   ├── CartContext.jsx  # Cart state management
│   │   └── FavoriteContext.jsx # Favorites state management
│   ├── App.jsx              # Main App component
│   ├── App.css              # App styles
│   ├── index.css            # Global styles
│   ├── main.jsx             # Application entry point
│   └── projectdetail.txt    # Project details
├── .gitignore               # Git ignore rules
├── README.md                # Project documentation
├── package.json             # Project dependencies and scripts
├── package-lock.json        # Lock file for dependencies
├── vite.config.js           # Vite configuration
└── eslint.config.js         # ESLint configuration
```

## 🤝 Contributing

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request
