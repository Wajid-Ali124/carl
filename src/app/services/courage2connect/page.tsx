import type { Metadata } from "next";
import CourageHero from "@/components/services/courage2connect/CourageHero";
import CourageWho from "@/components/services/courage2connect/CourageWho";
import CouragePrograms from "@/components/services/courage2connect/CouragePrograms";
import CourageTransformations from "@/components/services/courage2connect/CourageTransformations";
import CourageTestimonials from "@/components/services/courage2connect/CourageTestimonials";
import CourageFAQ from "@/components/services/courage2connect/CourageFAQ";
import CourageCTA from "@/components/services/courage2connect/CourageCTA";

export const metadata: Metadata = {
  title: "Attorney Leadership Coaching | Courage2Connect™ | Carl Shawn Watkins",
  description: "Courage2Connect™ Coaching by Carl Shawn Watkins offers three specialized programs for attorneys, executives and legal professionals in Greater Philadelphia ready to lead with courage, clarity and authenticity.",
};

export default function Courage2ConnectPage() {
  return (
    <>
      <CourageHero />
      <CourageWho />
      <CouragePrograms />
      <CourageTransformations />
      <CourageTestimonials />
      <CourageFAQ />
      <CourageCTA />
    </>
  );
}
