#!/bin/bash
# Setup script for manual Git deployment to cPanel

echo "🚀 Setting up Git deployment for cPanel..."

# Instructions for manual setup
echo "
📋 MANUAL SETUP INSTRUCTIONS:

1. Login to your cPanel
2. Go to File Manager
3. Navigate to public_html
4. Delete all files (backup first!)
5. In Terminal/SSH, run these commands:

cd public_html
git init
git remote add origin https://github.com/devdragon75/react-website.git
git pull origin main
chmod +x deploy.sh
./deploy.sh

6. Set up auto-deploy hook:
   Create file: .git/hooks/post-receive
   Content:
   #!/bin/bash
   cd /home1/a73dogj1/public_html
   git pull origin main
   ./deploy.sh

7. Make hook executable:
   chmod +x .git/hooks/post-receive

8. Test deployment:
   git add .
   git commit -m 'Test deployment'
   git push origin main

Your site will be live at: https://73dotts.com
"

echo "✅ Setup instructions generated!"
echo "📁 Check the instructions above for manual setup steps." 