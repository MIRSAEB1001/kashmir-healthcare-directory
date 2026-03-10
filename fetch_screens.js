const https = require('https');
const fs = require('fs');
const path = require('path');

const screens = [
    { name: 'HomePage', url: 'https://contribution.usercontent.google.com/download?c=CgthaWRhX2NvZGVmeBJ8Eh1hcHBfY29tcGFuaW9uX2dlbmVyYXRlZF9maWxlcxpbCiVodG1sXzkzZDVjZmQ0ZDQ4MDQyMzI4NWFhZjZjMmVlNzIxMzg2EgsSBxD6_9ON_xkYAZIBJAoKcHJvamVjdF9pZBIWQhQxMTI3Nzc2Mzc3MzcxNTMyNzczOA&filename=&opi=89354086' },
    { name: 'SearchResultsPage', url: 'https://contribution.usercontent.google.com/download?c=CgthaWRhX2NvZGVmeBJ8Eh1hcHBfY29tcGFuaW9uX2dlbmVyYXRlZF9maWxlcxpbCiVodG1sXzViZDE0ZjNlM2QxYTQ2MDg4YmFhZDhmODk0ODNkY2Q0EgsSBxD6_9ON_xkYAZIBJAoKcHJvamVjdF9pZBIWQhQxMTI3Nzc2Mzc3MzcxNTMyNzczOA&filename=&opi=89354086' },
    { name: 'MapViewPage', url: 'https://contribution.usercontent.google.com/download?c=CgthaWRhX2NvZGVmeBJ8Eh1hcHBfY29tcGFuaW9uX2dlbmVyYXRlZF9maWxlcxpbCiVodG1sXzAxNzVmMTU5NjA1NzQ2NjdiZTllMTliNzk1YzNlNDQzEgsSBxD6_9ON_xkYAZIBJAoKcHJvamVjdF9pZBIWQhQxMTI3Nzc2Mzc3MzcxNTMyNzczOA&filename=&opi=89354086' },
    { name: 'DoctorProfilePage', url: 'https://contribution.usercontent.google.com/download?c=CgthaWRhX2NvZGVmeBJ8Eh1hcHBfY29tcGFuaW9uX2dlbmVyYXRlZF9maWxlcxpbCiVodG1sXzE1NGIyZWIxMWY2ZTQ4NTFiNmRkZTdkMjM1MzcxZGY4EgsSBxD6_9ON_xkYAZIBJAoKcHJvamVjdF9pZBIWQhQxMTI3Nzc2Mzc3MzcxNTMyNzczOA&filename=&opi=89354086' },
    { name: 'ClinicProfilePage', url: 'https://contribution.usercontent.google.com/download?c=CgthaWRhX2NvZGVmeBJ8Eh1hcHBfY29tcGFuaW9uX2dlbmVyYXRlZF9maWxlcxpbCiVodG1sXzc1ODkwZWQ5NDdmNDQzMDJhMDU0MzhmYWFlZDkyYjYzEgsSBxD6_9ON_xkYAZIBJAoKcHJvamVjdF9pZBIWQhQxMTI3Nzc2Mzc3MzcxNTMyNzczOA&filename=&opi=89354086' },
    { name: 'AddDoctorPage', url: 'https://contribution.usercontent.google.com/download?c=CgthaWRhX2NvZGVmeBJ8Eh1hcHBfY29tcGFuaW9uX2dlbmVyYXRlZF9maWxlcxpbCiVodG1sXzM5OTk2ODkwODEzYjQ0NTc4M2VhMTBiNWVmNTdjN2E1EgsSBxD6_9ON_xkYAZIBJAoKcHJvamVjdF9pZBIWQhQxMTI3Nzc2Mzc3MzcxNTMyNzczOA&filename=&opi=89354086' },
    { name: 'AddClinicPage', url: 'https://contribution.usercontent.google.com/download?c=CgthaWRhX2NvZGVmeBJ8Eh1hcHBfY29tcGFuaW9uX2dlbmVyYXRlZF9maWxlcxpbCiVodG1sX2U2OWY0OTE3ZGQzMjRiMTk4M2I5ZDAyMWVhMDY3NzFlEgsSBxD6_9ON_xkYAZIBJAoKcHJvamVjdF9pZBIWQhQxMTI3Nzc2Mzc3MzcxNTMyNzczOA&filename=&opi=89354086' },
    { name: 'AddLabPage', url: 'https://contribution.usercontent.google.com/download?c=CgthaWRhX2NvZGVmeBJ8Eh1hcHBfY29tcGFuaW9uX2dlbmVyYXRlZF9maWxlcxpbCiVodG1sXzMyNTc3ODUwYmVlNjQ0MjZhNGY5Yzk1YjQyNzMxOGEyEgsSBxD6_9ON_xkYAZIBJAoKcHJvamVjdF9pZBIWQhQxMTI3Nzc2Mzc3MzcxNTMyNzczOA&filename=&opi=89354086' },
    { name: 'EditDoctorProfilePage', url: 'https://contribution.usercontent.google.com/download?c=CgthaWRhX2NvZGVmeBJ8Eh1hcHBfY29tcGFuaW9uX2dlbmVyYXRlZF9maWxlcxpbCiVodG1sX2JhY2EyZDk3ZTA0ZTRiOThhNjRmNzUzYjIyNzEwNmI3EgsSBxD6_9ON_xkYAZIBJAoKcHJvamVjdF9pZBIWQhQxMTI3Nzc2Mzc3MzcxNTMyNzczOA&filename=&opi=89354086' },
    { name: 'EditClinicProfilePage', url: 'https://contribution.usercontent.google.com/download?c=CgthaWRhX2NvZGVmeBJ8Eh1hcHBfY29tcGFuaW9uX2dlbmVyYXRlZF9maWxlcxpbCiVodG1sXzUyMmU3ODk5MmJlZTRjOGQ4ZDI3MTFmOGIzNmNkMDc3EgsSBxD6_9ON_xkYAZIBJAoKcHJvamVjdF9pZBIWQhQxMTI3Nzc2Mzc3MzcxNTMyNzczOA&filename=&opi=89354086' },
    { name: 'EditLabProfilePage', url: 'https://contribution.usercontent.google.com/download?c=CgthaWRhX2NvZGVmeBJ8Eh1hcHBfY29tcGFuaW9uX2dlbmVyYXRlZF9maWxlcxpbCiVodG1sX2E1MTNkZWIwNWRkNTRmZDhiOThiYzM4NjJkODdlNWE0EgsSBxD6_9ON_xkYAZIBJAoKcHJvamVjdF9pZBIWQhQxMTI3Nzc2Mzc3MzcxNTMyNzczOA&filename=&opi=89354086' },
    { name: 'DashboardPage', url: 'https://contribution.usercontent.google.com/download?c=CgthaWRhX2NvZGVmeBJ8Eh1hcHBfY29tcGFuaW9uX2dlbmVyYXRlZF9maWxlcxpbCiVodG1sXzkxYWU4MDQ2N2FhODQ5MzdhZGRhODAyMDk5YTZiMWJlEgsSBxD6_9ON_xkYAZIBJAoKcHJvamVjdF9pZBIWQhQxMTI3Nzc2Mzc3MzcxNTMyNzczOA&filename=&opi=89354086' },
    { name: 'RegistrationConfirmationPage', url: 'https://contribution.usercontent.google.com/download?c=CgthaWRhX2NvZGVmeBJ8Eh1hcHBfY29tcGFuaW9uX2dlbmVyYXRlZF9maWxlcxpbCiVodG1sXzQ0Yjk3NmNlMTMxOTQ4MGNhNjY0NzY1MmVhMDg5NjE3EgsSBxD6_9ON_xkYAZIBJAoKcHJvamVjdF9pZBIWQhQxMTI3Nzc2Mzc3MzcxNTMyNzczOA&filename=&opi=89354086' },
];

function download(url) {
    return new Promise((resolve, reject) => {
        https.get(url, (res) => {
            let data = '';
            res.on('data', chunk => data += chunk);
            res.on('end', () => resolve(data));
        }).on('error', reject);
    });
}

function processHtmlToJsx(html) {
    // Remove markdown code blocks
    html = html.replace(/^\`\`\`html\s*/, '').replace(/\s*\`\`\`$/, '');

    // Extract body content
    const bodyMatch = html.match(/<body[^>]*>([\s\S]*?)<\/body>/i);
    let body = bodyMatch ? bodyMatch[1] : html;

    body = body.replace(/<script\b[^<]*(?:(?!<\/script>)<[^<]*)*<\/script>/gi, '');
    body = body.replace(/<style[^>]*>[\s\S]*?<\/style>/gi, '');
    body = body.replace(/<meta[^>]*>/gi, '');
    body = body.replace(/<link[^>]*>/gi, '');

    // Basic JSX conversions
    body = body.replace(/class=/g, 'className=');
    body = body.replace(/for=/g, 'htmlFor=');
    body = body.replace(/<!--[\s\S]*?-->/g, '');

    // Transform inline styles to JSX object
    body = body.replace(/style="([^"]*)"/g, (match, p1) => {
        let styleObj = {};
        p1.split(';').forEach(s => {
            const index = s.indexOf(':');
            if (index > -1) {
                let k = s.substring(0, index).trim();
                let v = s.substring(index + 1).trim();
                k = k.replace(/-([a-z])/g, (m, c) => c.toUpperCase());
                styleObj[k] = v;
            }
        });
        return `style={{${Object.entries(styleObj).map(([k, v]) => `${k}: "${v}"`).join(', ')}}}`;
    });

    // Close common unclosed tags
    body = body.replace(/<(img|input|br|hr)([^>]*?)(?<!\/)>/ig, '<$1$2 />');

    // Fix common SVG attribute issues
    body = body.replace(/fill-rule=/g, 'fillRule=');
    body = body.replace(/clip-rule=/g, 'clipRule=');
    body = body.replace(/stroke-width=/g, 'strokeWidth=');
    body = body.replace(/stroke-linecap=/g, 'strokeLinecap=');
    body = body.replace(/stroke-linejoin=/g, 'strokeLinejoin=');
    body = body.replace(/tabindex=/g, 'tabIndex=');

    return body;
}

async function run() {
    for (const screen of screens) {
        console.log(`Downloading ${screen.name}...`);
        try {
            const html = await download(screen.url);
            let jsxContent = processHtmlToJsx(html);

            const componentStr = `import React from 'react';
import { Link } from 'react-router-dom';
import '../index.css';

function ${screen.name}() {
    return (
        <div className="min-h-screen bg-white font-manrope">
            {/* STITCH GENERATED CONTENT */}
            ${jsxContent}
        </div>
    );
}

export default ${screen.name};
`;

            const filePath = path.join(__dirname, 'frontend', 'src', 'pages', `${screen.name}.jsx`);
            fs.writeFileSync(filePath, componentStr);
            console.log(`Saved ${screen.name}.jsx`);
        } catch (err) {
            console.error(`Failed to process ${screen.name}:`, err);
        }
    }
}

run();
