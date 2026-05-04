import type { Metadata } from "next";
import AboutHero from "@/components/about/AboutHero";
import AboutOriginStory from "@/components/about/AboutOriginStory";
import AboutSocialProof from "@/components/about/AboutSocialProof";
import AboutCredentials from "@/components/about/AboutCredentials";
import AboutBrands from "@/components/about/AboutBrands";
import AboutPullQuote from "@/components/about/AboutPullQuote";
import AboutExpertiseCTA from "@/components/about/AboutExpertiseCTA";

export const metadata: Metadata = {
  title: "Carl Shawn Watkins | Leadership Coach for Lawyers & Legal Professionals",
  description: "Carl Shawn Watkins is a vulnerability-in-leadership expert, JD candidate, and founder of two coaching brands serving attorneys, law firms, and executives across the Greater Philadelphia region.",
};

export default function AboutPage() {
  return (
    <>
      <AboutHero />
      <AboutOriginStory />
      <AboutSocialProof />
      <AboutCredentials />
      <AboutBrands />
      <AboutPullQuote />
      <AboutExpertiseCTA />
     
    </>
  );
}
