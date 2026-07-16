"use client";

import { useEffect, useState } from "react";
import { Clock } from "lucide-react";

// Schedule — easy to edit
const SCHEDULE: Record<number, { label: string; open: string; close: string } | null> = {
  0: null, // Sunday — closed
  1: { label: "Monday",    open: "09:00", close: "18:00" },
  2: { label: "Tuesday",   open: "09:00", close: "18:00" },
  3: { label: "Wednesday", open: "09:00", close: "18:00" },
  4: { label: "Thursday",  open: "09:00", close: "18:00" },
  5: { label: "Friday",    open: "09:00", close: "18:00" },
  6: { label: "Saturday",  open: "09:00", close: "14:00" },
};

const displayHours: { label: string; hours: string }[] = [
  { label: "Mon – Fri", hours: "9:00 AM – 6:00 PM" },
  { label: "Saturday",  hours: "9:00 AM – 2:00 PM" },
  { label: "Sunday",    hours: "Closed" },
];

function parseTime(timeStr: string): { h: number; m: number } {
  const [h, m] = timeStr.split(":").map(Number);
  return { h, m };
}

function isOpenNow(): boolean {
  const now = new Date();
  const day = now.getDay();
  const hours = SCHEDULE[day];
  if (!hours) return false;
  const { h: oh, m: om } = parseTime(hours.open);
  const { h: ch, m: cm } = parseTime(hours.close);
  const nowMins = now.getHours() * 60 + now.getMinutes();
  const openMins = oh * 60 + om;
  const closeMins = ch * 60 + cm;
  return nowMins >= openMins && nowMins < closeMins;
}

function getTodayInfo(): { label: string; hours: string } {
  const day = new Date().getDay();
  const sched = SCHEDULE[day];
  if (!sched) return { label: "Sunday", hours: "Closed Today" };
  const { h: oh, m: om } = parseTime(sched.open);
  const { h: ch, m: cm } = parseTime(sched.close);
  const fmt = (h: number, m: number) => {
    const suffix = h >= 12 ? "PM" : "AM";
    const h12 = h % 12 || 12;
    return `${h12}:${String(m).padStart(2, "0")} ${suffix}`;
  };
  return { label: sched.label, hours: `${fmt(oh, om)} – ${fmt(ch, cm)}` };
}

export function OpeningHours() {
  const [open, setOpen] = useState(false);
  const [todayInfo, setTodayInfo] = useState({ label: "", hours: "" });

  useEffect(() => {
    setOpen(isOpenNow());
    setTodayInfo(getTodayInfo());
    const interval = setInterval(() => {
      setOpen(isOpenNow());
      setTodayInfo(getTodayInfo());
    }, 60_000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="bg-white rounded-2xl shadow-sm border border-[#E2E8F0] overflow-hidden">
      {/* Header */}
      <div className="flex items-center gap-3 px-5 py-4 border-b border-[#F1F5F9]">
        <div className="w-9 h-9 bg-[#EFF8FF] rounded-xl flex items-center justify-center flex-shrink-0">
          <Clock className="w-5 h-5 text-[#1DA1F2]" aria-hidden="true" />
        </div>
        <h3 className="font-bold text-[#0F172A] text-sm">Clinic Hours</h3>
        {/* Live open/closed badge */}
        <div
          className={`ml-auto inline-flex items-center gap-1.5 text-xs font-bold px-3 py-1 rounded-full ${
            open
              ? "bg-green-50 text-green-700 border border-green-200"
              : "bg-red-50 text-red-600 border border-red-200"
          }`}
          aria-live="polite"
          aria-label={open ? "Clinic is open now" : "Clinic is currently closed"}
        >
          <span
            className={`w-2 h-2 rounded-full ${open ? "bg-green-500 animate-pulse" : "bg-red-400"}`}
            aria-hidden="true"
          />
          {open ? "Open Now" : "Closed Now"}
        </div>
      </div>

      {/* Today's hours */}
      <div className="px-5 py-3 bg-[#F8FAFC] border-b border-[#F1F5F9]">
        <p className="text-xs text-[#94a3b8] mb-0.5">Today · {todayInfo.label}</p>
        <p className={`text-sm font-bold ${open ? "text-green-700" : "text-[#0F172A]"}`}>
          {todayInfo.hours}
        </p>
      </div>

      {/* Weekly schedule */}
      <ul className="divide-y divide-[#F1F5F9]">
        {displayHours.map(({ label, hours }) => (
          <li key={label} className="flex items-center justify-between px-5 py-3">
            <span className="text-sm text-[#475569]">{label}</span>
            <span
              className={`text-sm font-semibold ${
                hours === "Closed" ? "text-red-500" : "text-[#0F172A]"
              }`}
            >
              {hours}
            </span>
          </li>
        ))}
      </ul>
    </div>
  );
}
