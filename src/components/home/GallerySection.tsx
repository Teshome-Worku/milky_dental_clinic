"use client";

import { useCallback, useEffect, useMemo, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import Image from "next/image";
import { ChevronLeft, ChevronRight, X, ZoomIn } from "lucide-react";
import { galleryImages } from "@/data/content";

const categories = [
  "All",
  "Doctor",
  "Clinic",
  "Reception",
  "Treatment Rooms",
  "Patients & Guests",
  "Kids Corner",
  "Exterior",
] as const;

type GalleryCategory = (typeof categories)[number];

export function GallerySection() {
  const [activeCategory, setActiveCategory] = useState<GalleryCategory>("All");
  const [lightboxIndex, setLightboxIndex] = useState<number | null>(null);
  const [touchStartX, setTouchStartX] = useState<number | null>(null);

  const filteredImages = useMemo(
    () =>
      activeCategory === "All"
        ? galleryImages
        : galleryImages.filter((image) => image.category === activeCategory),
    [activeCategory]
  );

  const closeLightbox = useCallback(() => setLightboxIndex(null), []);
  const previousImage = useCallback(() => {
    setLightboxIndex((index) =>
      index === null ? null : (index - 1 + filteredImages.length) % filteredImages.length
    );
  }, [filteredImages.length]);
  const nextImage = useCallback(() => {
    setLightboxIndex((index) =>
      index === null ? null : (index + 1) % filteredImages.length
    );
  }, [filteredImages.length]);

  useEffect(() => {
    if (lightboxIndex === null) return;

    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") closeLightbox();
      if (event.key === "ArrowLeft") previousImage();
      if (event.key === "ArrowRight") nextImage();
    };

    window.addEventListener("keydown", onKeyDown);
    document.body.style.overflow = "hidden";
    return () => {
      window.removeEventListener("keydown", onKeyDown);
      document.body.style.overflow = "";
    };
  }, [closeLightbox, lightboxIndex, nextImage, previousImage]);

  const selectCategory = (category: GalleryCategory) => {
    setActiveCategory(category);
    setLightboxIndex(null);
  };

  const handleTouchEnd = (touchEndX: number) => {
    if (touchStartX === null) return;
    const swipeDistance = touchEndX - touchStartX;
    if (Math.abs(swipeDistance) > 50) {
      swipeDistance > 0 ? previousImage() : nextImage();
    }
    setTouchStartX(null);
  };

  const activeImage = lightboxIndex === null ? null : filteredImages[lightboxIndex];

  return (
    <section
      id="gallery"
      className="section-padding bg-[#F8FAFC]"
      aria-labelledby="gallery-heading"
    >
      <div className="container-custom">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mb-10 text-center lg:mb-12"
        >
          <span className="mb-3 inline-block text-sm font-semibold uppercase tracking-wider text-[#1DA1F2]">
            Clinic Gallery
          </span>
          <h2 id="gallery-heading" className="mb-4 text-3xl font-bold text-[#0F172A] lg:text-4xl">
            Inside Our Clinic
          </h2>
          <p className="mx-auto max-w-2xl text-[#475569]">
            Explore our modern clinic, welcoming spaces, and the people behind your confident smile.
          </p>
        </motion.div>

        <div className="mb-9 -mx-6 overflow-x-auto px-6 pb-3 sm:-mx-8 sm:px-8 lg:mx-0 lg:px-0" aria-label="Gallery categories">
          <div className="flex w-max gap-2.5 lg:mx-auto">
            {categories.map((category) => {
              const isActive = activeCategory === category;
              return (
                <button
                  key={category}
                  type="button"
                  onClick={() => selectCategory(category)}
                  aria-pressed={isActive}
                  className={`rounded-full border px-4 py-2.5 text-sm font-semibold whitespace-nowrap transition-all duration-200 ${
                    isActive
                      ? "border-[#1DA1F2] bg-[#1DA1F2] text-white shadow-[0_8px_20px_rgba(29,161,242,0.24)]"
                      : "border-[#E2E8F0] bg-white text-[#475569] hover:border-[#1DA1F2] hover:text-[#1DA1F2] hover:shadow-[0_6px_16px_rgba(15,23,42,0.08)]"
                  }`}
                >
                  {category}
                </button>
              );
            })}
          </div>
        </div>

        <AnimatePresence mode="wait">
          <motion.div
            key={activeCategory}
            initial={{ opacity: 0, y: 8 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -8 }}
            transition={{ duration: 0.2 }}
            className="columns-1 space-y-4 sm:columns-2 lg:columns-3 xl:columns-4"
          >
            {filteredImages.map((image, index) => (
              <motion.div
                key={image.id}
                initial={{ opacity: 0, y: 16 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.3, delay: Math.min(index, 7) * 0.04 }}
                className="break-inside-avoid"
              >
                <button
                  type="button"
                  onClick={() => setLightboxIndex(index)}
                  className="group relative block w-full overflow-hidden rounded-[20px] soft-shadow"
                  aria-label={`View larger: ${image.title}`}
                >
                  <Image
                    src={image.image}
                    alt={image.alt}
                    width={600}
                    height={450}
                    className="h-auto w-full object-cover transition-transform duration-500 group-hover:scale-105"
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
                  />
                  <div className="absolute inset-0 flex items-center justify-center bg-[#0F172A]/0 transition-colors duration-300 group-hover:bg-[#0F172A]/25">
                    <ZoomIn className="h-8 w-8 text-white opacity-0 transition-opacity duration-300 group-hover:opacity-100" aria-hidden="true" />
                  </div>
                  <span className="absolute bottom-3 left-3 rounded-full bg-white/95 px-3 py-1.5 text-xs font-semibold text-[#1DA1F2] opacity-0 shadow-sm backdrop-blur-sm transition-opacity duration-300 group-hover:opacity-100">
                    {image.category}
                  </span>
                </button>
              </motion.div>
            ))}
          </motion.div>
        </AnimatePresence>
      </div>

      <AnimatePresence>
        {activeImage && lightboxIndex !== null && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            className="fixed inset-0 z-50 flex items-center justify-center bg-black/90 p-4"
            onClick={closeLightbox}
            role="dialog"
            aria-modal="true"
            aria-label={`${activeImage.title} lightbox`}
          >
            <button type="button" onClick={closeLightbox} className="absolute right-4 top-4 z-10 flex h-11 w-11 items-center justify-center rounded-full bg-white/10 text-white transition-colors hover:bg-white/20" aria-label="Close lightbox">
              <X className="h-5 w-5" aria-hidden="true" />
            </button>
            <button type="button" onClick={(event) => { event.stopPropagation(); previousImage(); }} className="absolute left-3 top-1/2 z-10 flex h-11 w-11 -translate-y-1/2 items-center justify-center rounded-full bg-white/10 text-white transition-colors hover:bg-white/20 sm:left-5" aria-label="Previous image">
              <ChevronLeft className="h-6 w-6" aria-hidden="true" />
            </button>

            <motion.div
              key={activeImage.id}
              initial={{ opacity: 0, scale: 0.97 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.97 }}
              transition={{ duration: 0.2 }}
              className="w-full max-w-5xl"
              onClick={(event) => event.stopPropagation()}
              onTouchStart={(event) => setTouchStartX(event.touches[0].clientX)}
              onTouchEnd={(event) => handleTouchEnd(event.changedTouches[0].clientX)}
            >
              <Image src={activeImage.image} alt={activeImage.alt} width={1400} height={1050} className="max-h-[78vh] w-full rounded-2xl object-contain" priority />
              <div className="mt-3 text-center">
                <p className="text-sm font-medium text-white">{activeImage.title}</p>
                <p className="mt-1 text-xs text-white/55">{lightboxIndex + 1} of {filteredImages.length} · {activeImage.category}</p>
              </div>
            </motion.div>

            <button type="button" onClick={(event) => { event.stopPropagation(); nextImage(); }} className="absolute right-3 top-1/2 z-10 flex h-11 w-11 -translate-y-1/2 items-center justify-center rounded-full bg-white/10 text-white transition-colors hover:bg-white/20 sm:right-5" aria-label="Next image">
              <ChevronRight className="h-6 w-6" aria-hidden="true" />
            </button>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
