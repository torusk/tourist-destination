"use client";

import { useEffect, useState, type ReactNode } from "react";
import { useInView } from "react-intersection-observer";
import { motion } from "framer-motion";
import { ArrowDown, MapPin, Camera, Utensils } from "lucide-react";
import Image from "next/image";

interface FeatureCardProps {
  icon: ReactNode;
  title: string;
  description: string;
}

function FeatureCard({ icon, title, description }: FeatureCardProps) {
  return (
    <motion.div
      className="bg-white rounded-lg shadow-lg p-6 text-center"
      initial={{ y: 50, opacity: 0 }}
      whileInView={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.8 }}
      viewport={{ once: true }}
    >
      <div className="text-purple-600 mb-4">{icon}</div>
      <h3 className="text-xl font-bold mb-2">{title}</h3>
      <p>{description}</p>
    </motion.div>
  );
}

interface GalleryItemProps {
  src: string;
  alt: string;
}

function GalleryItem({ src, alt }: GalleryItemProps) {
  return (
    <motion.div
      className="h-64 rounded-lg shadow-lg overflow-hidden"
      initial={{ scale: 0.8, opacity: 0 }}
      whileInView={{ scale: 1, opacity: 1 }}
      transition={{ duration: 0.8 }}
      viewport={{ once: true }}
      whileHover={{ scale: 1.05 }}
    >
      <Image
        src={src || "/placeholder.svg"}
        alt={alt}
        width={400}
        height={300}
        style={{ objectFit: "cover" }}
      />
    </motion.div>
  );
}

export default function Home() {
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <main className="min-h-screen bg-gray-100 snap-y snap-mandatory overflow-y-scroll">
      {/* ヒーローセクション */}
      <section className="relative h-screen overflow-hidden snap-start">
        <motion.div
          className="absolute inset-0"
          style={{ y: scrollY * 0.5 }}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1 }}
        >
          <Image
            src="/images/hero-image.jpg"
            alt="美しい観光地の風景"
            fill
            style={{ objectFit: "cover" }}
            quality={100}
          />
        </motion.div>
        <div className="absolute inset-0 flex flex-col items-center justify-center text-white">
          <motion.h1
            className="text-6xl font-bold mb-4"
            initial={{ y: 50, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8 }}
          >
            楽園を発見
          </motion.h1>
          <motion.p
            className="text-2xl mb-8"
            initial={{ y: 50, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            あなたの夢の目的地がここに
          </motion.p>
          <motion.div
            initial={{ y: 50, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            <ArrowDown className="animate-bounce" size={48} />
          </motion.div>
        </div>
      </section>

      {/* アバウトセクション */}
      <section className="py-20 bg-white snap-start">
        <div className="container mx-auto px-4">
          <motion.h2
            className="text-4xl font-bold mb-8 text-center"
            initial={{ y: 50, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            私たちのオアシスへようこそ
          </motion.h2>
          <div className="flex flex-wrap -mx-4">
            <motion.div
              className="w-full md:w-1/2 px-4 mb-8"
              initial={{ x: -50, opacity: 0 }}
              whileInView={{ x: 0, opacity: 1 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <Image
                src="/images/about-image.jpg"
                alt="観光地の魅力的な風景"
                width={600}
                height={400}
                className="rounded-lg shadow-lg"
              />
            </motion.div>
            <motion.div
              className="w-full md:w-1/2 px-4"
              initial={{ x: 50, opacity: 0 }}
              whileInView={{ x: 0, opacity: 1 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <p className="text-lg mb-4">
                美しさと静けさに満ちた私たちの素晴らしい場所をご体験ください。
                pristineな海岸から豊かな森まで、あらゆる旅行者に何かを提供します。
              </p>
              <p className="text-lg">
                地元の文化に浸り、絶品料理を堪能し、一生の思い出を作りましょう。
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* 特徴セクション */}
      <section className="py-20 bg-gray-100 snap-start">
        <div className="container mx-auto px-4">
          <motion.h2
            className="text-4xl font-bold mb-12 text-center"
            initial={{ y: 50, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            私たちの特徴を発見
          </motion.h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <FeatureCard
              icon={<MapPin size={48} />}
              title="最高のロケーション"
              description="楽園の中心に位置しています"
            />
            <FeatureCard
              icon={<Camera size={48} />}
              title="絶景"
              description="どこを見ても息をのむような景色"
            />
            <FeatureCard
              icon={<Utensils size={48} />}
              title="美食"
              description="地元と国際的な絶品料理"
            />
          </div>
        </div>
      </section>

      {/* ギャラリーセクション */}
      <section
        ref={ref}
        className={`py-20 bg-white snap-start transition-opacity duration-1000 ${
          inView ? "opacity-100" : "opacity-0"
        }`}
      >
        <div className="container mx-auto px-4">
          <motion.h2
            className="text-4xl font-bold mb-12 text-center"
            initial={{ y: 50, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            ギャラリー
          </motion.h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <GalleryItem src="/images/gallery-1.jpg" alt="美しいビーチの風景" />
            <GalleryItem src="/images/gallery-2.jpg" alt="地元の料理" />
            <GalleryItem
              src="/images/gallery-3.jpg"
              alt="アクティビティの様子"
            />
            <GalleryItem src="/images/gallery-4.jpg" alt="自然の景観" />
            <GalleryItem src="/images/gallery-5.jpg" alt="文化体験" />
            <GalleryItem
              src="/images/gallery-6.jpg"
              alt="リラックスできる宿泊施設"
            />
          </div>
        </div>
      </section>

      {/* コールトゥアクション */}
      <section className="py-20 bg-gradient-to-r from-purple-600 to-pink-600 text-white snap-start">
        <div className="container mx-auto px-4 text-center">
          <motion.h2
            className="text-4xl font-bold mb-8"
            initial={{ y: 50, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            冒険の準備はできましたか？
          </motion.h2>
          <motion.p
            className="text-xl mb-8"
            initial={{ y: 50, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
          >
            今すぐ予約して、一生に一度の休暇を体験しましょう！
          </motion.p>
          <motion.button
            className="bg-white text-purple-600 font-bold py-3 px-8 rounded-full hover:bg-gray-100 transition duration-300"
            initial={{ y: 50, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            viewport={{ once: true }}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            今すぐ予約
          </motion.button>
        </div>
      </section>
    </main>
  );
}
