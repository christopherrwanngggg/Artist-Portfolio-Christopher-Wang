import { useRouter } from "next/router";
import PortfolioSidebar from "../../components/PortfolioSidebar";

import Image from "next/image";
import * as React from "react";
import { uniqueFunction } from "../../hooks/uniqueFunction";
import { Layout } from "../../components/Layout";
import { Navbar } from "../../components/Navbar";
import { Footer } from "../../components/Footer";
const modelImageLoader = (props: any) => {
  return props.src.toString();
};

export default function CharacterPage() {
  const { query } = useRouter();
  const slug = query.slug;
  const [imageDimensions, setImageDimensions] = React.useState([0, 0]);

  React.useEffect(() => {
    setImageDimensions(uniqueFunction(/* modelImage */) || []); // to get initial image dimensions

    function handleResize(): void {
      setImageDimensions(uniqueFunction(/* modelImage */) || []);
    }
    if (typeof window != "undefined") {
      window.addEventListener("resize", handleResize); // handle resize

      return function cleanupListener() {
        // removing event listener improves efficiency
        window.removeEventListener("resize", handleResize);
      };
    }
  }, [setImageDimensions]);
  return (
    <Layout>
      <Navbar />
      <div className="flex gap-8">
        <PortfolioSidebar />
      
        <div>
          <h1>{slug}</h1>
        <Image
          loader={modelImageLoader}
          src="momentum hero profile colored.jpg"
          alt="Picture of Art"
          objectFit="contain"
          height={imageDimensions[1]}
          width={imageDimensions[0]}
        />
        </div>
      </div>

      <Footer />
      </Layout>
  );
}

