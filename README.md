Financial Dashboard Application
This project is a Financial Dashboard Application built using Next.js, following the Next.js official course. It implements key concepts such as dynamic routing, server-side rendering, authentication, and error handling, following the chapters of the course.

Project Features Based on Course Chapters:
Getting Started: Initial setup of the Next.js application with basic configuration and folder structure.
CSS Styling: Applied styling using CSS modules for modular and scoped styling across components.
Optimizing Fonts and Images: Leveraged Next.js’s built-in optimizations for font loading and image handling.
Creating Layouts and Pages: Created reusable layouts and dynamic pages using Next.js routing system.
Navigating Between Pages: Implemented seamless navigation between different sections of the dashboard.
Setting Up Your Database: Connected the application to a database for managing customer and invoice data.
Fetching Data: Integrated server-side data fetching using Next.js API routes.
Static and Dynamic Rendering: Applied both static site generation (SSG) and server-side rendering (SSR) for optimized performance.
Streaming: Utilized React's streaming feature for faster user experiences.
Partial Prerendering: Implemented Next.js's partial prerendering to optimize rendering time for specific pages.
Adding Search and Pagination: Built a search functionality and implemented pagination for customer and invoice listings.
Mutating Data: Enabled data mutation through forms and actions for creating, updating, and deleting data.
Handling Errors: Added comprehensive error handling to ensure the application is resilient and user-friendly.
Improving Accessibility: Applied accessibility improvements, including keyboard navigation and screen reader support.
Adding Authentication: Secured the application with user authentication using NextAuth.js.
Adding Metadata: Added metadata (e.g., Open Graph, SEO) for better sharing and discoverability.
Technology Stack:
Next.js: Utilized for server-side rendering, dynamic routing, and fast front-end development.
NextAuth.js: Implemented for user authentication and session management.
TypeScript: Ensured type safety across the project.
Zod: Used for schema validation in forms and authentication.
PNPM: Package manager for efficient dependency management.
Key Pages and Features:
/login: User authentication page with form validation and secure login.
/dashboard: Displays key financial metrics and insights.
/dashboard/customers: Manages customer information with search and pagination.
/dashboard/invoices: Manages invoices with features to create, edit, and delete entries.
/dashboard/invoices/create: A form to create new invoices.
/dashboard/invoices/[id]/edit: Dynamically edits existing invoices based on URL parameters.
How It Works:
A public home page.
A login page.
Dashboard pages that are protected by authentication.
The ability for users to add, edit, and delete invoices.
How to Run the Project:
Install pnpm globally (if you haven't already):

bash
Copy code
npm install -g pnpm
Navigate to the project directory:

bash
Copy code
cd your-project-directory
Install project dependencies:

bash
Copy code
pnpm install
Start the development server:

bash
Copy code
pnpm run dev
Access the application:

Open your browser and navigate to http://localhost:3000
Deployment:
This application is deployed on Vercel, leveraging the Next.js optimized build and deployment capabilities.

