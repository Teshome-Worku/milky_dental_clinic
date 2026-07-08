import type { Metadata } from "next";
import Link from "next/link";
import { Home, ArrowLeft } from "lucide-react";

export const metadata: Metadata = {
  title: "Page Not Found | Dr. Milky Dental Clinic",
  description: "The page you are looking for could not be found.",
  robots: { index: false, follow: false },
};

export default function NotFound() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-[#F8FAFC] px-4">
      <div className="text-center max-w-md">
        {/* Tooth icon */}
        <div className="w-20 h-20 bg-[#e8f4fd] rounded-3xl flex items-center justify-center mx-auto mb-6">
          <svg
            viewBox="0 0 40 40"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className="w-10 h-10"
            aria-hidden="true"
          >
            <path
              d="M20 6C15 6 10 10 10 15C10 18 11 20.5 12.5 22.5C14 24.5 14.5 27 14.5 30C14.5 32 15.5 34 17 34C18.5 34 19 32 19.5 30C20 28 20 28 20 28C20 28 20 28 20.5 30C21 32 21.5 34 23 34C24.5 34 25.5 32 25.5 30C25.5 27 26 24.5 27.5 22.5C29 20.5 30 18 30 15C30 10 25 6 20 6Z"
              fill="#1DA1F2"
              opacity="0.4"
            />
          </svg>
        </div>

        <p className="text-8xl font-bold text-[#1DA1F2] mb-4">404</p>
        <h1 className="text-2xl font-bold text-[#0F172A] mb-3">
          Page Not Found
        </h1>
        <p className="text-[#475569] mb-8">
          The page you are looking for doesn&apos;t exist or has been moved.
          Let&apos;s get you back to the right place.
        </p>

        <div className="flex flex-col sm:flex-row gap-3 justify-center">
          <Link
            href="/"
            className="btn-primary"
            aria-label="Go back to homepage"
          >
            <Home className="w-4 h-4" aria-hidden="true" />
            Back to Home
          </Link>
          <Link
            href="/#contact"
            className="btn-secondary"
            aria-label="Contact us"
          >
            <ArrowLeft className="w-4 h-4" aria-hidden="true" />
            Contact Us
          </Link>
        </div>
      </div>
    </div>
  );
}
