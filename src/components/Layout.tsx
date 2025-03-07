
import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, ChevronRight, Mail, Phone } from 'lucide-react';
import ChatBot from './ChatBot';

interface LayoutProps {
  children: React.ReactNode;
}

const Layout: React.FC<LayoutProps> = ({ children }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isChatOpen, setIsChatOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    setIsMobileMenuOpen(false);
  }, [location.pathname]);

  const navLinks = [
    { name: 'Início', path: '/' },
    { name: 'Sobre', path: '/sobre' },
    { name: 'Contato', path: '/contato' },
  ];

  return (
    <div className="flex flex-col min-h-screen">
      <header 
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          isScrolled 
            ? 'bg-white/80 backdrop-blur-md shadow-sm py-3' 
            : 'bg-transparent py-5'
        }`}
      >
        <div className="container mx-auto px-6 flex justify-between items-center">
          <Link to="/" className="text-2xl font-bold text-gradient">
            BVG Technology
          </Link>

          <nav className="hidden md:flex items-center space-x-8">
            {navLinks.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                className={`text-sm font-medium transition-colors hover:text-bvg-blue ${
                  location.pathname === link.path ? 'text-bvg-blue' : 'text-foreground'
                }`}
              >
                {link.name}
              </Link>
            ))}
          </nav>

          <div className="hidden md:flex items-center space-x-4">
            <Link 
              to="/contato" 
              className="button-primary"
            >
              Fale Conosco
            </Link>
            <button 
              onClick={() => setIsChatOpen(true)}
              className="rounded-full bg-bvg-light/80 p-2 hover:bg-bvg-light border border-border"
              aria-label="Open chat"
            >
              <Mail size={20} className="text-bvg-dark" />
            </button>
          </div>

          <button 
            className="md:hidden focus:outline-none" 
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            aria-label={isMobileMenuOpen ? "Close menu" : "Open menu"}
          >
            {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile menu */}
        <div 
          className={`fixed inset-0 bg-background z-40 transform transition-transform duration-300 ease-in-out ${
            isMobileMenuOpen ? 'translate-x-0' : 'translate-x-full'
          } md:hidden`}
        >
          <div className="flex flex-col h-full p-6">
            <div className="flex justify-between items-center mb-8">
              <span className="text-xl font-bold text-gradient">BVG Technology</span>
              <button 
                onClick={() => setIsMobileMenuOpen(false)}
                aria-label="Close menu"
              >
                <X size={24} />
              </button>
            </div>
            <nav className="flex flex-col space-y-6">
              {navLinks.map((link) => (
                <Link
                  key={link.path}
                  to={link.path}
                  className={`text-lg font-medium transition-colors flex items-center ${
                    location.pathname === link.path ? 'text-bvg-blue' : 'text-foreground'
                  }`}
                >
                  {link.name}
                  <ChevronRight size={16} className="ml-2" />
                </Link>
              ))}
            </nav>
            <div className="mt-auto space-y-4">
              <div className="flex items-center text-sm">
                <Mail size={16} className="mr-2 text-bvg-blue" />
                <a href="mailto:bgvtechnology@gmail.com" className="hover:text-bvg-blue">
                  bgvtechnology@gmail.com
                </a>
              </div>
              <div className="flex items-center text-sm">
                <Phone size={16} className="mr-2 text-bvg-blue" />
                <a href="tel:+531983691000" className="hover:text-bvg-blue">
                  +531 983691000
                </a>
              </div>
              <button
                onClick={() => {
                  setIsChatOpen(true);
                  setIsMobileMenuOpen(false);
                }}
                className="button-primary w-full flex justify-center items-center mt-4"
              >
                <Mail size={16} className="mr-2" />
                Enviar Mensagem
              </button>
            </div>
          </div>
        </div>
      </header>

      <main className="flex-grow pt-24">
        {children}
      </main>

      <footer className="bg-bvg-dark text-white py-12 px-6">
        <div className="container mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div>
              <h3 className="text-xl font-bold mb-4 text-gradient">BVG Technology</h3>
              <p className="text-sm text-gray-300 mb-4">
                Soluções de tecnologia para transformar seu negócio.
              </p>
              <div className="space-y-2">
                <div className="flex items-center text-sm">
                  <Mail size={16} className="mr-2 text-bvg-blue" />
                  <a href="mailto:bgvtechnology@gmail.com" className="text-gray-300 hover:text-bvg-blue">
                    bgvtechnology@gmail.com
                  </a>
                </div>
                <div className="flex items-center text-sm">
                  <Phone size={16} className="mr-2 text-bvg-blue" />
                  <a href="tel:+531983691000" className="text-gray-300 hover:text-bvg-blue">
                    +531 983691000
                  </a>
                </div>
              </div>
            </div>
            
            <div>
              <h3 className="text-lg font-semibold mb-4">Navegação</h3>
              <nav className="flex flex-col space-y-2">
                {navLinks.map((link) => (
                  <Link
                    key={link.path}
                    to={link.path}
                    className="text-sm text-gray-300 hover:text-bvg-blue transition-colors"
                  >
                    {link.name}
                  </Link>
                ))}
              </nav>
            </div>
            
            <div>
              <h3 className="text-lg font-semibold mb-4">Serviços</h3>
              <ul className="space-y-2 text-sm text-gray-300">
                <li>Desenvolvimento Web</li>
                <li>Desenvolvimento de Hardware</li>
                <li>Chatbots com IA</li>
                <li>Automação</li>
                <li>Consultoria Tecnológica</li>
              </ul>
            </div>
            
            <div>
              <h3 className="text-lg font-semibold mb-4">Conecte-se</h3>
              <p className="text-sm text-gray-300 mb-4">
                Receba nossas novidades e atualizações.
              </p>
              <Link 
                to="/contato" 
                className="button-primary inline-block"
              >
                Entre em Contato
              </Link>
            </div>
          </div>
          
          <div className="border-t border-gray-800 mt-12 pt-6 text-sm text-gray-400 flex flex-col md:flex-row justify-between items-center">
            <p>© {new Date().getFullYear()} BVG Technology. Todos os direitos reservados.</p>
            <p className="mt-2 md:mt-0">Desenvolvido com tecnologia de ponta</p>
          </div>
        </div>
      </footer>

      {/* Chat bot */}
      <div className={`fixed bottom-6 right-6 z-50 ${isChatOpen ? 'block' : 'hidden md:block'}`}>
        <ChatBot 
          isOpen={isChatOpen} 
          onClose={() => setIsChatOpen(false)} 
          onOpen={() => setIsChatOpen(true)} 
        />
      </div>
    </div>
  );
};

export default Layout;
