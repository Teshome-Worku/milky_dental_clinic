import { Clock } from "lucide-react";
import { siteConfig } from "@/data/content";

export function OpeningHours() {
  return (
    <section className="overflow-hidden rounded-2xl border border-[#E2E8F0] bg-white shadow-sm" aria-labelledby="hours-heading">
      <div className="flex items-center gap-3 border-b border-[#F1F5F9] px-5 py-4">
        <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-xl bg-[#EFF8FF]">
          <Clock className="h-5 w-5 text-[#1DA1F2]" aria-hidden="true" />
        </div>
        <div>
          <h3 id="hours-heading" className="text-sm font-bold text-[#0F172A]">Clinic Hours</h3>
          <p className="text-xs text-[#64748B]">Please call ahead to confirm availability.</p>
        </div>
      </div>
      <dl className="divide-y divide-[#F1F5F9]">
        <div className="flex items-center justify-between gap-4 px-5 py-3">
          <dt className="text-sm text-[#475569]">{siteConfig.hours.weekdays}</dt>
          <dd className="text-right text-sm font-semibold text-[#0F172A]">{siteConfig.hours.morning}</dd>
        </div>
        <div className="flex items-center justify-between gap-4 px-5 py-3">
          <dt className="text-sm text-[#475569]">Afternoon</dt>
          <dd className="text-right text-sm font-semibold text-[#0F172A]">{siteConfig.hours.afternoon}</dd>
        </div>
      </dl>
    </section>
  );
}
