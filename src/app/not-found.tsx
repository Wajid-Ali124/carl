import type { Metadata } from "next";
import NotFoundClient from "@/components/layout/NotFoundClient";

export const metadata: Metadata = {
  title: "Page Not Found | Carl Shawn Watkins",
  description: "The page you are looking for does not exist.",
};

export default function NotFound() {
  return <NotFoundClient />;
}
