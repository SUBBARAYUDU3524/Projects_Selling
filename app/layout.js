import { Inter } from "next/font/google";
import "./globals.css";
import SplashLayout from "./components/SplashLayout";
import ThemeContext, { ThemeProvider } from "./ThemeContext";
import { UserProvider } from "./UserContext";

const inter = Inter({ subsets: ["latin"] });

// Define metadata for the page
export const metadata = {
  title: "ErrTeknalozy | Your Source for Tech Solutions",
  description:
    "Explore ErrTeknalozy for innovative tech solutions and resources tailored to modern development needs.",
  keywords:
    "ErrTeknalozy, web development projects for sale, app development resources, buy web applications, purchase mobile app templates, affordable web development services, custom software solutions, project management tools, e-commerce development projects, responsive website templates, digital marketing resources, website design for startups, professional web applications, software development projects, mobile app design services, online learning platforms, technology project buying guide, best web development practices, application development solutions, innovative web projects",
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
