"use client";

export default function Footer() {
  return (
    <footer className="w-full py-6 text-center text-xs text-neutral-500 border-t border-interactive bg-background z-50 backdrop-blur-sm opacty-90">
      © {new Date().getFullYear()} Martin Cavil. Tous droits réservés.
    </footer>
  );
}
