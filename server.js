const { createServer } = require('http');
const { parse } = require('url');
const next = require('next');

// Determine if we're in development or production mode
// In cPanel, you'll want to set NODE_ENV=production
const dev = process.env.NODE_ENV !== 'production';

// Initialize the Next.js app
const app = next({ dev });
const handle = app.getRequestHandler();

// Use the PORT environment variable if available, otherwise default to 3000
// cPanel will typically provide a PORT variable
const port = process.env.PORT || 3000;

// Prepare the Next.js app and then start the server
app.prepare().then(() => {
    createServer((req, res) => {
        // Parse the request URL
        const parsedUrl = parse(req.url, true);

        // Let Next.js handle the request
        handle(req, res, parsedUrl);

    }).listen(port, (err) => {
        if (err) throw err;
        console.log(`> Ready on http://localhost:${port}`);
    });
});