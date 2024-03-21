"use client";
import { useEffect, useState } from "react";
import Image from "next/image";

export default function HeroCover() {
  const [height, setHeight] = useState("100vh"); // 默认高度为100vh
  const [isScrolled, setIsScrolled] = useState(true);
  useEffect(() => {
    const updateState = () => {
      // 当滚动位置接近顶部时，设置高度为100vh，否则为50vh
      setIsScrolled(window.scrollY < 100 ? true : false);
    };

    // 监听滚动事件
    window.addEventListener('scroll', updateState);

    // 组件卸载时移除监听器
    return () => window.removeEventListener('scroll', updateState);
  }, []);


  return (
    <div>
      <div className={`transition-all duration-300 flex justify-center items-end 
      bg-[url("https://cdn.sanity.io/images/k367mo80/production/79f490e34e95a13f3047aaa2ee6cde86f1783e35-2000x1333.jpg")] bg-cover bg-center bg-no-repeat
      ${isScrolled ? "h-[60vh] lg:h-[100vh]" : "lg:container lg:max-w-[1280px] lg:px-0 lg:mt-[260px] h-[60vh] lg:rounded"} `}>
        <div className="lg:p-12 gap-2 text-center text-white font-light" >
          <div className="text-5xl mb-4">
            Tripper Press
          </div>
          <div className="">少年没有乌托邦 心向远方自明朗</div>
        </div>
      </div>
    </div>
  )
}