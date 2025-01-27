/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
      remotePatterns: [
        {
          protocol: "https",
          hostname: "images.unsplash.com", // For regular Unsplash images
        },
        {
          protocol: "https",
          hostname: "plus.unsplash.com", // For premium Unsplash images
        },
      ],
    },
  };
  
  export default nextConfig;
  