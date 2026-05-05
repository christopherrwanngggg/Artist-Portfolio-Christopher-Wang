import { useRouter } from "next/router";
import PortfolioSidebar from "../../components/PortfolioSidebar";
import Image from "next/image";
import * as React from "react";

import { Layout } from "../../components/Layout";
import { Navbar } from "../../components/Navbar";
import { Footer } from "../../components/Footer";

export default function CharacterPage() {
  const { query } = useRouter();
  const slug = query.slug as string;

  // choose image based on slug
  const imageSrc =
    slug === "momentum-profile"
      ? "/momentum-profile.jpg"
      : "/weight-profile.png";

  return (
    <Layout>
      <Navbar />

      <div className="flex w-full">
        {/* Main content */}
        <div className="flex-1 p-8">
          <h1 className="text-2xl mb-4">{slug}</h1>

          <Image
            src={imageSrc}
            alt="Artwork"
            width={600}
            height={600}
            style={{ objectFit: "contain" }}
          />
        </div>

        {/* Sidebar */}
        <div className="w-64 p-6 border-l">
          <PortfolioSidebar />
        </div>
      </div>

      <Footer />
    </Layout>
  );
}

