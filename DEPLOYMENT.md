# Ever Gauzy - Deployment Guide

## Vercel Deployment (Frontend Only)

This project is configured to deploy the frontend to Vercel. The backend API needs to be deployed separately.

### Steps to Deploy Frontend to Vercel:

1. Push your code to a GitHub repository
2. Connect the repository to Vercel
3. Vercel will automatically detect the build settings from `vercel.json`
4. Set environment variables in Vercel dashboard:
   - `NEXT_PUBLIC_API_URL` - The URL of your deployed backend API

### Deploying the Backend API Separately

Since Vercel only serves static files, you'll need to deploy the NestJS API separately:

#### Option 1: Using Render
1. Create a new Web Service on Render
2. Point it to your repository
3. Set build command: `yarn build:api:prod`
4. Set start command: `yarn start:api:prod`

#### Option 2: Using Railway
1. Create a new project on Railway
2. Connect your GitHub repository
3. Railway will automatically detect it's a Node.js project
4. Set environment variables as needed

#### Option 3: Using Heroku
1. Create a new app on Heroku
2. Connect your GitHub repository
3. Enable automatic deploys
4. Set buildpack to Node.js

### Environment Variables

For the frontend (set in Vercel):
- `NEXT_PUBLIC_API_URL` - The URL of your backend API (e.g., https://your-api.herokuapp.com)

For the backend (set in your hosting platform):
- Database connection variables
- JWT secrets
- Other environment-specific configurations

### Custom Domain

After deployment, you can add a custom domain in the Vercel dashboard under your project settings.