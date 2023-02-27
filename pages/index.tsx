import Head from "next/head";
import { NextPage } from "next";
import { Inter } from "@next/font/google";
import styles from "@/styles/Home.module.css";
import { MainLayout } from "@/components/layouts";
import { Header } from "@/components/common";
import { NextPageWithLayout } from "@/models/common";

const inter = Inter({ subsets: ["latin"] });

const Home: NextPageWithLayout = () => {
  return (
    <div>
      <h1>HomePage</h1>
    </div>
  );
};
Home.Layout = MainLayout;

export default Home;
