/** @type {import('next').NextConfig} */
const nextConfig = {
  async headers() {
    return [
      {
        source: "/embed",
        headers: [
          {
            key: "Content-Security-Policy",
            value: "frame-src 'self' https://vehiql-vedant.created.app/",
          },
        ],
      },
    ];
  },
};

export default nextConfig;
// This configuration sets a Content Security Policy header for the /embed route,
// allowing iframes to be embedded only from the specified URL (https://vehiql-vedant.created.app).
// This is useful for security purposes, ensuring that only trusted sources can be embedded in iframes on your site.