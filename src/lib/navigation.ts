export function scrollToSection(id: string) {
  const element = document.querySelector(id);
  if (!element) return;

  element.scrollIntoView({ behavior: "smooth", block: "start" });
}
