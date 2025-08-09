'use client';

import { useState, useEffect } from 'react';

export default function Navigation() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
    setIsMenuOpen(false); // メニューを閉じる
  };

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
      isScrolled 
        ? 'bg-black/80 backdrop-blur-md border-b border-white/20' 
        : 'bg-transparent'
    }`}>
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          <div className="text-white font-bold text-xl">
            Keisuke Kubota
          </div>
          
          <div className="hidden md:flex space-x-8">
            <button
              onClick={() => scrollToSection('skills')}
              className="text-white hover:text-blue-400 transition-colors duration-300"
            >
              技術スタック
            </button>
            <button
              onClick={() => scrollToSection('projects')}
              className="text-white hover:text-blue-400 transition-colors duration-300"
            >
              プロジェクト
            </button>
            <button
              onClick={() => scrollToSection('contact')}
              className="text-white hover:text-blue-400 transition-colors duration-300"
            >
              お問い合わせ
            </button>
          </div>
          
          <div className="md:hidden">
            <button 
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="text-white p-2 hover:bg-white/10 rounded-lg transition-colors duration-300"
            >
              {isMenuOpen ? (
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              ) : (
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                </svg>
              )}
            </button>
          </div>
        </div>
        
        {/* モバイルメニュー */}
        <div className={`md:hidden transition-all duration-300 ease-in-out ${
          isMenuOpen 
            ? 'max-h-64 opacity-100 visible' 
            : 'max-h-0 opacity-0 invisible'
        }`}>
          <div className="bg-black/90 backdrop-blur-md rounded-lg mt-4 p-4 border border-white/20">
            <div className="space-y-3">
              <button
                onClick={() => scrollToSection('skills')}
                className="block w-full text-left text-white hover:text-blue-400 transition-colors duration-300 py-2 px-3 rounded-lg hover:bg-white/10"
              >
                技術スタック
              </button>
              <button
                onClick={() => scrollToSection('projects')}
                className="block w-full text-left text-white hover:text-blue-400 transition-colors duration-300 py-2 px-3 rounded-lg hover:bg-white/10"
              >
                プロジェクト
              </button>
              <button
                onClick={() => scrollToSection('contact')}
                className="block w-full text-left text-white hover:text-blue-400 transition-colors duration-300 py-2 px-3 rounded-lg hover:bg-white/10"
              >
                お問い合わせ
              </button>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
}
