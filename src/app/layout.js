"use client";

import { useState } from "react";
import "./globals.css";

export default function RootLayout({ children }) {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <html lang="es">
      <body>
        <header>
          <h1>El Blog de Michelle</h1>
        </header>
        <main>{children}</main>
        <footer>
          <p>Desarrollado por Michelle Pérez © 2024</p>
          <a href="https://github.com/MichellePerezS" target="_blank" rel="noopener noreferrer">
            <img src="/images/personaje-github.png" alt="GitHub" />
          </a>
        </footer>
      </body>
    </html>
  );
}