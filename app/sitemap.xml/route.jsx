// app/sitemap.xml/route.js
import { NextResponse } from "next/server";

export async function GET() {
  const baseUrl = "https://errteknalozy.in";

  // Define your static and dynamic page URLs here
  const staticPages = [
    `${baseUrl}/`,
    `${baseUrl}/about`,
    `${baseUrl}/contact`,
    `${baseUrl}/services`,
    `${baseUrl}/projects`,
    `${baseUrl}/projectdetails`,
    `${baseUrl}/login`,
    `${baseUrl}/signup`,
    `${baseUrl}/signup`,
    // Add other static or dynamic pages as needed
  ];

  const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
    <urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
      ${staticPages
        .map((url) => {
          return `
            <url>
              <loc>${url}</loc>
              <lastmod>${new Date().toISOString()}</lastmod>
              <priority>0.8</priority>
            </url>
          `;
        })
        .join("")}
    </urlset>`;

  return new NextResponse(sitemap, {
    headers: {
      "Content-Type": "application/xml",
    },
  });
}
