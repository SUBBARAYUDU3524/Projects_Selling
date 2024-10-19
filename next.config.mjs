/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    domains: [
      "media.istockphoto.com", // Domain for the external image
      "images.pexels.com", // Add any other domains from which you want to load images
      // Add any other domains as necessary
    ],
  },
};

export default nextConfig;
