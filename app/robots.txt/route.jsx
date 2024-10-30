// app/robots.txt/route.js
import { NextResponse } from "next/server";

export async function GET() {
  const content = `
    User-agent: *
    Allow: /
    Sitemap: https://errteknalozy.netlify.app/sitemap.xml
  `;

  return new NextResponse(content, {
    headers: {
      "Content-Type": "text/plain",
    },
  });
}
