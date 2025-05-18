"use client";
import Footer from "@/components/footer";
import Header from "@/components/header";
import { Hero } from "@/components/hero";
import Input from "@/components/input";
import Wallpapers from "@/components/wallpapers";
import { Wallpaper } from "@/types/wallpaper";
import { useEffect, useState } from "react";

export default function Home() {
  const [wallpapers, setWallpapers] = useState<Wallpaper[]>([]);

  const fetchWallpapers = async function () {
    const result = await fetch("/api/get-wallpapers");
    const { data } = await result.json();

    if (data) setWallpapers(data);
  };
  useEffect(() => {
    fetchWallpapers();
  }, []);

  return (
    <div className="w-screnn h-screen">
      {/* 引入头部，壁纸列表，底部，全部装在一个块里 */}
      <Header />
      <Hero />
      <Input setWallpapers={setWallpapers} />
      <Wallpapers wallpapers={wallpapers}  />
      <Footer />
    </div>
  );
}
