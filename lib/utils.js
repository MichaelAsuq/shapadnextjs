// lib/utils.js

// Function to generate slugs for projects
export const generateSlug = (title) => {
    return title?.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/^-|-$/g, '').trim();
};

// Function to fetch projects from Google Sheets

export const fetchProjects = async () => {

    const API_KEY = process.env.GOOGLE_SHEETS_API_KEY;
    const SPREADSHEET_ID = process.env.GOOGLE_SHEETS_SPREADSHEET_ID;
    const RANGE = 'shapad!A1:Z1000';

    if (!API_KEY || !SPREADSHEET_ID) {
        throw new Error('Missing Google Sheets configuration');
    }

    try {
        const res = await fetch(`https://sheets.googleapis.com/v4/spreadsheets/${SPREADSHEET_ID}/values/${RANGE}?key=${API_KEY}`);

        if (!res.ok) {
            throw new Error('Failed to fetch data');
        }

        const data = await res.json();
        const rows = data.values || [];
        const headers = rows[0];

        return rows.slice(1).map(row => {
            let obj = {};
            row.forEach((value, index) => {
                obj[headers[index]] = value;
            });
            return obj;
        });
    } catch (error) {
        console.error('Error fetching projects:', error);
        return [];
    }
};

// Generate static params for all projects
export const generateProjectStaticParams = async () => {
    const projects = await fetchProjects();
    return projects.map((project) => ({
        slug: generateSlug(project.product_title),
    }));
};