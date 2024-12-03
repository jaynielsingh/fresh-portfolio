import { useState } from "preact/hooks";

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav class="bg-slate-900 shadow-md">
      <div class="container mx-auto px-4 flex justify-between items-center h-16">
        {/* Logo */}
        <a href="/" class="text-xl font-bold text-primary">
          Jayniel Singh
        </a>

        {/* Hamburger Button */}
        <button
          class="lg:hidden btn btn-ghost btn-square"
          onClick={() => setMenuOpen(true)}
          aria-label="Open Menu"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            class="h-6 w-6"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M4 6h16M4 12h16M4 18h16"
            />
          </svg>
        </button>

        {/* Desktop Menu */}
        <div class="hidden lg:flex space-x-6">
          <a href="/" class="btn btn-ghost">Home</a>
          <a href="/about" class="btn btn-ghost">About</a>
          <a href="/portfolio" class="btn btn-ghost">Portfolio</a>
          <a href="/gallery" class="btn btn-ghost">Gallery</a>
          <a href="/contact" class="btn btn-primary">Contact</a>
        </div>
      </div>

      {/* Side Menu Overlay */}
      {menuOpen && (
        <div
          class="fixed inset-0 bg-black bg-opacity-50 z-50"
          onClick={() => setMenuOpen(false)}
        >
        </div>
      )}

      {/* Side Menu */}
      <div
        class={`fixed top-0 left-0 h-full w-64 bg-base-100 shadow-lg z-50 transform ${
          menuOpen ? "translate-x-0" : "-translate-x-full"
        } transition-transform duration-300`}
      >
        <div class="flex justify-between items-center px-4 py-4 border-b">
          <a href="/" class="text-xl font-bold text-primary">
            Jayniel Singh
          </a>
          <button
            class="btn btn-ghost btn-square"
            onClick={() => setMenuOpen(false)}
            aria-label="Close Menu"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              class="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          </button>
        </div>

        <ul class="menu p-4 space-y-2">
          <li>
            <a href="/" class="btn btn-ghost w-full">Home</a>
          </li>
          <li>
            <a href="/about" class="btn btn-ghost w-full">About</a>
          </li>
          <li>
            <a href="/services" class="btn btn-ghost w-full">Services</a>
          </li>
          <li>
            <a href="/contact" class="btn btn-primary w-full">Contact</a>
          </li>
        </ul>
      </div>
    </nav>
  );
}
