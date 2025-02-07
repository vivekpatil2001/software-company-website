/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: [
      'www.xoriant.com',
      'dynamicmedia.accenture.com',
      'img.freepik.com',
      'image.freepik.com', // Add this line
      'images.unsplash.com',
      'media.istockphoto.com',
      'cdn-icons-png.flaticon.com',
      'd34u8crftukxnk.cloudfront.net',
      'res.cloudinary.com'
      
    ],
    remotePatterns: [
      {
        hostname: 'images.unsplash.com',
        pathname: '**'
      }
    ]
  }
};

export default nextConfig;
