#!/bin/bash

# Deployment helper script for Ever Gauzy

echo "Ever Gauzy Deployment Helper"
echo "==============================="
echo

echo "This script helps you prepare for deploying Ever Gauzy to different platforms."
echo

echo "FRONTEND DEPLOYMENT (Vercel):"
echo "-----------------------------"
echo "1. The frontend is configured for Vercel deployment via vercel.json"
echo "2. Simply connect your GitHub repository to Vercel"
echo "3. Set the NEXT_PUBLIC_API_URL environment variable in Vercel dashboard"
echo "   Example: https://your-api-domain.com"
echo

echo "BACKEND API DEPLOYMENT:"
echo "-----------------------"
echo "You need to deploy the backend API separately. Options:"
echo
echo "1. RENDER:"
echo "   - Create a new Web Service"
echo "   - Build command: yarn build:api:prod"
echo "   - Start command: yarn start:api:prod"
echo
echo "2. RAILWAY:"
echo "   - Create a new project"
echo "   - Connect your repository"
echo "   - Set environment variables"
echo
echo "3. HEROKU:"
echo "   - Create a new app"
echo "   - Connect GitHub repository"
echo "   - Enable automatic deploys"
echo

echo "ENVIRONMENT VARIABLES NEEDED:"
echo "------------------------------"
echo "Frontend (Vercel):"
echo "  NEXT_PUBLIC_API_URL=https://your-backend-api.com"
echo
echo "Backend (Render/Railway/Heroku):"
echo "  DATABASE_URL=your_database_connection_string"
echo "  JWT_SECRET=your_jwt_secret_key"
echo "  Other database and service specific variables"
echo

echo "For detailed instructions, see DEPLOYMENT.md"