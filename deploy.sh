#!/bin/bash
# Deploy script for cPanel - React Website

echo "🚀 Starting deployment..."

# Install dependencies
echo "📦 Installing dependencies..."
npm install

# Build the project
echo "🔨 Building project..."
npm run build

# Check if build was successful
if [ ! -d "build" ]; then
    echo "❌ Build failed! build directory not found."
    exit 1
fi

echo "✅ Build completed successfully!"

# Copy build files to public_html
echo "📁 Copying files to public_html..."
cp -r build/* public_html/

# Create .htaccess file for React Router
echo "⚙️ Creating .htaccess file..."
cat > public_html/.htaccess << 'EOF'
Options -MultiViews
RewriteEngine On
RewriteCond %{REQUEST_FILENAME} !-f
RewriteRule ^ index.html [QSA,L]

# Enable Gzip compression
<IfModule mod_deflate.c>
    AddOutputFilterByType DEFLATE text/plain
    AddOutputFilterByType DEFLATE text/html
    AddOutputFilterByType DEFLATE text/xml
    AddOutputFilterByType DEFLATE text/css
    AddOutputFilterByType DEFLATE application/xml
    AddOutputFilterByType DEFLATE application/xhtml+xml
    AddOutputFilterByType DEFLATE application/rss+xml
    AddOutputFilterByType DEFLATE application/javascript
    AddOutputFilterByType DEFLATE application/x-javascript
</IfModule>

# Cache static assets
<IfModule mod_expires.c>
    ExpiresActive on
    ExpiresByType text/css "access plus 1 year"
    ExpiresByType application/javascript "access plus 1 year"
    ExpiresByType image/png "access plus 1 year"
    ExpiresByType image/jpg "access plus 1 year"
    ExpiresByType image/jpeg "access plus 1 year"
    ExpiresByType image/gif "access plus 1 year"
    ExpiresByType image/svg+xml "access plus 1 year"
</IfModule>

# Security headers
<IfModule mod_headers.c>
    Header always set X-Content-Type-Options nosniff
    Header always set X-Frame-Options DENY
    Header always set X-XSS-Protection "1; mode=block"
</IfModule>
EOF

echo "✅ .htaccess file created!"

# Set proper permissions
echo "🔐 Setting permissions..."
chmod 644 public_html/.htaccess
chmod 644 public_html/index.html

echo "🎉 Deployment completed successfully!"
echo "🌐 Your site should be live at: https://73dotts.com" 