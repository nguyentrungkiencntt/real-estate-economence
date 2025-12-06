import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  images: {
    remotePatterns: [
      new URL(
        "https://file4.batdongsan.com.vn/crop/393x222/2025/08/21/20250821234831-d4de_wm.jpg"
      ),
      new URL("https://res.cloudinary.com/dp6cr7ea5/image/upload/**"),
      new URL("https://s.yimg.com/ny/api/res/1.2/**"),
      new URL("https://images.wsj.net/**"),
      new URL("https://i.pinimg.com/**"),
    ],
  },
};

export default nextConfig;
