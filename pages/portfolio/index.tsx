import { useEffect } from "react";
import { useRouter } from "next/router";

export default function PortfolioIndex() {
  const router = useRouter();

  useEffect(() => {
    router.replace("/portfolio/weight-profile");
  }, [router]);

  return null;
}
