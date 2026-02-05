/**
 * FILE NAMING CONVENTIONS
 * ====================================
 * This file documents the standardized naming conventions used throughout the project
 * for consistent, error-free file organization and easy navigation.
 */

// ========== FRONTEND (client/src) ==========

/*
COMPONENTS: PascalCase.jsx
- Reusable UI components
- Example: Button.jsx, Footer.jsx, CertificationCard.jsx
- Every component file starts with uppercase letter
- All components are named descriptively

Components/
├── Button.jsx                    ✓ (Reusable button)
├── CertificationCard.jsx         ✓ (Displays single certificate)
├── Footer.jsx                    ✓ (App footer)
├── Hero.jsx                      ✓ (Hero section)
├── Layout.jsx                    ✓ (Main layout wrapper)
├── Navbar.jsx                    ✓ (Navigation bar)
├── ProjectCard.jsx               ✓ (Project card)
├── ProjectShowcase.jsx           ✓ (Project showcase container)
├── SkillsGrid.jsx                ✓ (Skills display)
└── Timeline.jsx                  ✓ (Timeline component)
*/

/*
PAGES: PascalCase.jsx
- Full page components (route endpoints)
- Example: About.jsx, Home.jsx, Contact.jsx
- Every page file starts with uppercase letter

Pages/
├── About.jsx                     ✓ (About page)
├── Blogs.jsx                     ✓ (Blogs listing page)
├── Contact.jsx                   ✓ (Contact page)
├── Home.jsx                      ✓ (Home page)
├── Projects.jsx                  ✓ (Projects page)
├── SignIn.jsx                    ✓ (Sign in page)
├── SignUp.jsx                    ✓ (Sign up page)
└── admin/
    ├── AdminDashboard.jsx        ✓ (Admin dashboard)
    └── AdminLogin.jsx            ✓ (Admin login)
*/

/*
DATA FILES: camelCase.js
- Static data arrays/objects
- Example: projects.js, experiences.js, certificates.js
- Lowercase first letter, descriptive names
- No spaces in names

Data/
├── blogs.js                      ✓ (Blog entries array)
├── certificates.js               ✓ (Certificates array)
├── detailedProjects.js           ✓ (Extended project details)
├── experiences.js                ✓ (Work experiences array)
└── projects.js                   ✓ (Basic projects array)
*/

/*
CONTEXT/PROVIDERS: PascalCase.jsx
- React context providers and hooks
- Example: ThemeProvider.jsx, AppProvider.jsx
- Every provider ends with "Provider" suffix
- Uses PascalCase

Context/
├── AppProvider.jsx               ✓ (App-wide context)
└── ThemeProvider.jsx             ✓ (Theme management)
*/

/*
CONFIGURATION: lowercase.js
- Config files and utilities
- Example: env.js, constants.js, helpers.js
- Lowercase, descriptive names
- Grouped in logical folders

Config/
├── env.js                        ✓ (Environment variables)

Utils/
├── logger.js                     ✓ (Logging utility)
└── [other utilities]
*/

/*
STYLES: index.css
- Global and component styles
- Main stylesheet: index.css
- No separate CSS files per component (using CSS-in-JS or inline)

Styles/
└── index.css                     ✓ (Main stylesheet)
*/

/*
ASSETS: lowercase.format
- Images, certificates, fonts
- All lowercase filenames
- Organized by type (images/, certificates/, fonts/)

Assets/
├── images/                       ✓ (PNG, JPG files)
│   └── Innocent.png
├── certificates/                 ✓ (PDF, PNG files)
│   ├── C++ by Sololearn 2022.pdf
│   ├── JavaScript by sololearn 2022.pdf
│   └── professional foundations by alx africa 2025.png
└── fonts/                        ✓ (Font files if used)
*/

// ========== BACKEND (Backend/src) ==========

/*
CONTROLLERS: camelCaseController.js
- Request handlers for routes
- Example: authController.js, projectsController.js
- Format: [feature]Controller.js
- Lowercase start, ends with "Controller"

Controllers/
├── authController.js             ✓ (Authentication logic)
├── blogsController.js            ✓ (Blog management)
└── projectsController.js         ✓ (Project management)
*/

/*
SERVICES: camelCaseService.js
- Business logic and data operations
- Example: authService.js, projectsService.js
- Format: [feature]Service.js
- Lowercase start, ends with "Service"

Services/
├── authService.js                ✓ (Auth operations)
├── blogsService.js               ✓ (Blog operations)
└── projectsService.js            ✓ (Project operations)
*/

/*
MODELS: camelCaseModel.js
- Database schemas and models
- Example: projectModel.js, userModel.js
- Format: [feature]Model.js
- Lowercase start, ends with "Model"

Models/
└── projectModel.js               ✓ (Project schema)
*/

/*
ROUTES: lowercase.js or feature-name.js
- API endpoint definitions
- Example: auth.js, projects.js
- Lowercase, typically resource name
- Format: [feature].js or [feature]-routes.js

Routes/
├── auth.js                       ✓ (Authentication routes)
├── blogs.js                      ✓ (Blog routes)
├── cms.js                        ✓ (CMS routes)
├── index.js                      ✓ (Router setup)
└── projects.js                   ✓ (Project routes)
*/

/*
MIDDLEWARES: camelCaseMiddleware.js or descriptive.js
- Express middleware functions
- Example: authMiddleware.js, errorHandler.js
- Format: [purpose]Middleware.js or [purpose].js

Middlewares/
├── authMiddleware.js             ✓ (Authentication checks)
└── errorHandler.js               ✓ (Error handling)
*/

/*
DATABASE: camelCaseClient.js or camelCaseConfig.js
- Database connection and configuration
- Example: mongoClient.js, dbConnection.js

DB/
└── mongoClient.js                ✓ (MongoDB connection)
*/

/*
UTILITIES: lowercase.js
- Helper functions and utilities
- Example: logger.js, validators.js, helpers.js

Utils/
└── logger.js                     ✓ (Logging utility)
*/

// ========== ROOT LEVEL ==========

/*
CONFIG FILES: 
├── .env                          ✓ (Environment variables - DO NOT COMMIT)
├── .env.example                  ✓ (Template for env - FOR VERSION CONTROL)
├── .gitignore                    ✓ (Git ignore rules)
├── README.md                     ✓ (Project documentation)
├── package.json                  ✓ (Dependencies)
├── vite.config.js                ✓ (Vite configuration)
├── vercel.json                   ✓ (Vercel deployment config)
└── tsconfig.json                 ✓ (TypeScript config if using TS)
*/

// ========== NAMING RULES SUMMARY ==========

/*
✓ ALWAYS USE:
- PascalCase for React Components, Pages, Providers (FileName.jsx)
- camelCase for data files, utilities, services (fileName.js)
- camelCase for API controllers, services, models (fileNameService.js)
- lowercase for routes, middlewares (lowercase.js)
- Descriptive names (not abbreviations)
- Clear purpose suffixes: Controller, Service, Model, Provider, Middleware

✗ NEVER USE:
- kebab-case for component files (Component-Name.jsx ✗)
- inconsistent case (MyComponent.jsx vs myComponent.jsx ✗)
- abbreviations (CertCard.jsx ✗ → CertificationCard.jsx ✓)
- generic names without context (Component.jsx ✗ → FeatureComponent.jsx ✓)
- underscores in filenames (my_file.js ✗ → myFile.js ✓)
- spaces in filenames (my file.js ✗)
*/

// ========== IMPORTS PATTERN ==========

/*
CORRECT IMPORT STYLES:

Frontend:
import Button from '../components/Button';
import { certificates } from '../data/certificates';
import { SOCIAL, CONTACT_EMAIL } from '../config/env';
import { theme } from '../context/ThemeProvider';

Backend:
const express = require('express');
const authController = require('../controllers/authController');
const { authService } = require('../services/authService');
const authRouter = require('../routes/auth');
*/

// ========== FILE PATH ORGANIZATION ==========

/*
FRONTEND STRUCTURE:
client/src/
├── App.jsx                       (Main app component)
├── main.jsx                      (Entry point)
├── index.css                     (Global styles)
├── assets/                       (Images, certificates, fonts)
├── components/                   (Reusable UI components)
├── config/                       (Configuration files)
│   └── env.js                    (Environment setup)
├── context/                      (React context providers)
├── data/                         (Static data files)
├── pages/                        (Page components/routes)
└── utils/                        (Helper functions)

BACKEND STRUCTURE:
Backend/src/
├── index.js                      (Server entry point)
├── controllers/                  (Request handlers)
├── db/                           (Database connection)
├── middlewares/                  (Express middleware)
├── models/                       (Database schemas)
├── routes/                       (API endpoints)
├── services/                     (Business logic)
└── utils/                        (Helper utilities)
*/

export default {
  frontend: {
    components: 'PascalCase.jsx',
    pages: 'PascalCase.jsx',
    dataFiles: 'camelCase.js',
    providers: 'PascalCaseProvider.jsx',
    config: 'camelCase.js',
    utils: 'camelCase.js',
  },
  backend: {
    controllers: 'camelCaseController.js',
    services: 'camelCaseService.js',
    models: 'camelCaseModel.js',
    routes: 'lowercase.js',
    middlewares: 'camelCaseMiddleware.js | descriptive.js',
    utils: 'camelCase.js',
    db: 'camelCaseClient.js',
  },
};
