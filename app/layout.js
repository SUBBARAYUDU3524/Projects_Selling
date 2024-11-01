import { Inter } from "next/font/google";
import "./globals.css";
import SplashLayout from "./components/SplashLayout";
import { ThemeProvider } from "./ThemeContext";
import { UserProvider } from "./UserContext";
import Head from "next/head";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "ErrTeknalozy | Your Source for Tech Solutions",
  description:
    "Explore ErrTeknalozy for innovative tech solutions and resources tailored to modern development needs.",
  keywords:
    "ErrTeknalozy,error technology,error , technology, web development projects for sale, app development resources, buy web applications, purchase mobile app templates, affordable web development services, custom software solutions, project management tools, e-commerce development projects, responsive website templates, digital marketing resources, website design for startups, professional web applications, software development projects, mobile app design services, online learning platforms, technology project buying guide, best web development practices, application development solutions, innovative web projects",
  openGraph: {
    type: "website",
    url: "https://errteknalozy.netlify.app",
    title: "ErrTeknalozy | Your Source for Tech Solutions",
    description:
      "Explore ErrTeknalozy for innovative tech solutions and resources tailored to modern development needs.",
    images: [
      {
        url: "https://errteknalozy.netlify.app/og-image.jpg",
        width: 800,
        height: 600,
        alt: "ErrTeknalozy - Your Source for Tech Solutions",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    site: "@yourTwitterHandle", // Replace with your Twitter handle if available
    title: "ErrTeknalozy | Your Source for Tech Solutions",
    description:
      "Explore innovative tech solutions and resources at ErrTeknalozy.",
    image: "https://errteknalozy.netlify.app/twitter-image.jpg",
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <Head>
        {/* Standard Meta Tags */}
        <title>{metadata.title}</title>
        <meta name="description" content={metadata.description} />
        <meta name="keywords" content={metadata.keywords} />

        {/* Google Site Verification Meta Tag */}
        <meta
          name="google-site-verification"
          content="FNgjZTzXM-Bza4KINhZYNEyLL"
        />

        {/* Open Graph Meta Tags */}
        <meta property="og:type" content={metadata.openGraph.type} />
        <meta property="og:url" content={metadata.openGraph.url} />
        <meta property="og:title" content={metadata.openGraph.title} />
        <meta
          property="og:description"
          content={metadata.openGraph.description}
        />
        <meta property="og:image" content={metadata.openGraph.images[0].url} />

        {/* Twitter Card Meta Tags */}
        <meta name="twitter:card" content={metadata.twitter.card} />
        <meta name="twitter:site" content={metadata.twitter.site} />
        <meta name="twitter:title" content={metadata.twitter.title} />
        <meta
          name="twitter:description"
          content={metadata.twitter.description}
        />
        <meta name="twitter:image" content={metadata.twitter.image} />

        {/* Link to the new favicon */}
        <link
          rel="icon"
          href="/public/favicon.ico"
          sizes="any"
          type="image/png"
        />

        {/* Structured Data (JSON-LD for SEO) */}
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "WebSite",
            url: "https://errteknalozy.netlify.app",
            name: "ErrTeknalozy",
            description: metadata.description,
            potentialAction: {
              "@type": "SearchAction",
              target:
                "https://errteknalozy.netlify.app/search?query={search_term_string}",
              "query-input": "required name=search_term_string",
            },
          })}
        </script>
      </Head>

      <body className={inter.className}>
        <UserProvider>
          <ThemeProvider>
            <SplashLayout>{children}</SplashLayout>
          </ThemeProvider>
        </UserProvider>
      </body>
    </html>
  );
}
