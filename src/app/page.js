import Image from "next/image";
import HomeBanner from "@/components/homePage/HomeBanner";
import FeatureSection from "@/components/homePage/FeatureSection";
export const metadata = {
  title: "Home:Work Manger",
  description: "Generated by create next app",
};

export default function Home() {
  return (
   <div>
    <HomeBanner/>
    <FeatureSection/>
   </div>
  );
}
