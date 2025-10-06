import { Linkedin } from "lucide-react";
import biglogo from '../assets/biglogo.png'

export default function Footer() {
  return (
    <footer className="w-full bg-slate-900 py-16 px-4 sm:px-6 lg:px-8 rounded-t-3xl">
      <div className="max-w-7xl mx-auto">

        <div className="flex justify-center mb-8">
          <div className="relative">
            <div className="w-32 h-32 rounded-full border-2 border-dashed border-yellow-600/40 flex items-center justify-center">
            <a href="#home">
               <img src={biglogo} alt="" />
            </a>
            </div>
          </div>
        </div>

        <p className="text-gray-300 text-center text-base sm:text-lg mb-8">
          Empowering innovation with cutting edge technology solutions
        </p>

        <div className="flex items-center justify-center gap-3 mb-12">
          <span className="text-gray-400 text-sm mr-2">Connect With Us</span>
          <a
            href="https://www.linkedin.com/"
            target="blank"
            className="w-10 h-10 bg-gray-700 hover:bg-blue-600 rounded flex items-center justify-center transition-all duration-300 hover:scale-110"
            aria-label="LinkedIn"
          >
            <Linkedin className="w-5 h-5 text-white" />
          </a>

          <a
            href="https://x.com/?lang=en"
             target="blank"
            className="w-10 h-10 bg-gray-700 hover:bg-gray-600 rounded flex items-center justify-center transition-all duration-300 hover:scale-110"
            aria-label="X (Twitter)"
          >
            <svg
              className="w-5 h-5 text-white"
              fill="currentColor"
              viewBox="0 0 24 24"
            >
              <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
            </svg>
          </a>

          <a
            href="https://www.google.com/"
            target="blank"
            className="w-10 h-10 bg-gray-700 hover:bg-red-600 rounded flex items-center justify-center transition-all duration-300 hover:scale-110"
            aria-label="Google"
          >
            <svg
              className="w-5 h-5 text-white"
              fill="currentColor"
              viewBox="0 0 24 24"
            >
              <path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" />
              <path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" />
              <path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z" />
              <path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" />
            </svg>
          </a>
        </div>
        <div className="border-t border-gray-700 mb-6"></div>

        <p className="text-gray-400 text-center text-sm">
          © 2025 Next Generation Digital Architects. All rights reserved.
        </p>
      </div>
    </footer>
  );
}