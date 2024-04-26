/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "rickandmortyapi.com",
        port: "",
        pathname: "/**",
      },
    ],
  },
};
// module.exports = {
//   images: {
//     remotePatterns: [
//       {
//         protocol: "https",
//         hostname: "rickandmortyapi.com",
//         port: "",
//         pathname: "/**",
//       },
//     ],
//   },
// };
export default nextConfig;