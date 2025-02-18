"use client";

import { useEffect, useState, type ReactNode } from "react";
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
  punchline: string;
  comment: string;
}

function GalleryItem({ src, alt, punchline, comment }: GalleryItemProps) {
  return (
    <motion.div
      className="relative h-screen w-full overflow-hidden"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 0.8 }}
      viewport={{ once: true }}
    >
      <Image
        src={src || "/placeholder.svg"}
        alt={alt}
        fill
        style={{ objectFit: "cover" }}
      />
      <div className="absolute inset-0 flex flex-col items-center justify-center text-white text-center">
        <h2 className="text-4xl font-bold mb-4 shadow-text">{punchline}</h2>
        <p className="text-xl max-w-lg shadow-text">{comment}</p>
      </div>
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
          {/* 動画を追加 */}
          <video
            autoPlay
            muted
            loop
            playsInline
            className="absolute inset-0 w-full h-full object-cover"
          >
            <source src="/videos/hero-video.mp4" type="video/mp4" />
            Your browser does not support the video tag.
          </video>
        </motion.div>
        <div className="absolute inset-0 flex flex-col items-center justify-center text-white">
          <motion.h1
            className="text-6xl font-bold mb-4 shadow-text"
            initial={{ y: 50, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8 }}
          >
            楽園を発見
          </motion.h1>
          <motion.p
            className="text-2xl mb-8 shadow-text"
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
      <section className="relative h-screen overflow-hidden snap-start">
        <div className="absolute inset-0">
          <Image
            src="/images/about-image.jpg"
            alt="観光地の魅力的な風景"
            fill
            style={{ objectFit: "cover" }}
          />
        </div>
        <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center">
          <div className="container mx-auto px-4 text-white">
            <motion.h2
              className="text-4xl font-bold mb-8 text-center shadow-text"
              initial={{ y: 50, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              私たちのオアシスへようこそ
            </motion.h2>
            <motion.div
              className="max-w-2xl mx-auto text-center"
              initial={{ y: 50, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              viewport={{ once: true }}
            >
              <p className="text-lg mb-4 shadow-text">
                美しさと静けさに満ちた私たちの素晴らしい場所をご体験ください。
                pristineな海岸から豊かな森まで、あらゆる旅行者に何かを提供します。
              </p>
              <p className="text-lg shadow-text">
                地元の文化に浸り、絶品料理を堪能し、一生の思い出を作りましょう。
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* ギャラリーセクション */}
      <GalleryItem
        src="/images/gallery-1.jpg"
        alt="美しいビーチの風景"
        punchline="息をのむような美しさ"
        comment="青い海と白い砂浜が織りなす絶景をお楽しみください"
      />
      <GalleryItem
        src="/images/gallery-2.jpg"
        alt="地元の料理"
        punchline="味覚の冒険"
        comment="地元の新鮮な食材を使った絶品料理をご堪能ください"
      />
      <GalleryItem
        src="/images/gallery-3.jpg"
        alt="アクティビティの様子"
        punchline="アドレナリン全開"
        comment="エキサイティングなアクティビティで冒険心を満たしましょう"
      />
      <GalleryItem
        src="/images/gallery-4.jpg"
        alt="自然の景観"
        punchline="大自然の懐に抱かれて"
        comment="壮大な自然の中で、心身ともにリフレッシュ"
      />
      <GalleryItem
        src="/images/gallery-5.jpg"
        alt="文化体験"
        punchline="伝統との出会い"
        comment="地元の文化に触れ、新しい発見の旅へ"
      />
      <GalleryItem
        src="/images/gallery-6.jpg"
        alt="リラックスできる宿泊施設"
        punchline="至福のくつろぎ"
        comment="快適な空間で、心地よい滞在をお約束します"
      />

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
