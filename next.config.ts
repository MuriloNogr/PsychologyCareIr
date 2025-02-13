import { NextConfig } from "next";

const nextConfig: NextConfig = {
    output: "export",
    images: {
        unoptimized: true,
    },
    basePath: "/PsychologyCareIr",
    assetPrefix: "/psychologycare/",
};

export default nextConfig;
