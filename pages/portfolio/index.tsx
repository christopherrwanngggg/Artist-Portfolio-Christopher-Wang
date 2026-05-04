import { Layout } from "../../components/Layout";
import { Navbar } from "../../components/Navbar";
import { Showcase } from "../../components/Showcase";
import { Footer } from "../../components/Footer";
import { motion } from "framer-motion";
import Head from "next/head";
import { data } from "../../mock/mock";
import { useEffect } from "react";
import { useRouter } from "next/router";

export default function PortfolioIndex() {
  const router = useRouter();

  useEffect(() => {
    router.replace("/portfolio/weight-bearer");
  }, []);

  return null;
}
