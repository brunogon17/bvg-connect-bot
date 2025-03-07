
import React, { useEffect, useRef } from 'react';
import { ChevronDown, Zap, Code, Cpu, Bot } from 'lucide-react';
import { Link } from 'react-router-dom';

const Hero: React.FC = () => {
  const servicesRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observerOptions = {
      root: null,
      rootMargin: '0px',
      threshold: 0.1
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('animate-fade-up');
          entry.target.classList.remove('opacity-0');
          observer.unobserve(entry.target);
        }
      });
    }, observerOptions);

    const elements = document.querySelectorAll('.animate-on-scroll');
    elements.forEach(el => {
      el.classList.add('opacity-0');
      observer.observe(el);
    });

    return () => {
      elements.forEach(el => observer.unobserve(el));
    };
  }, []);

  const scrollToServices = () => {
    servicesRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className="relative">
      {/* Hero Section */}
      <section className="min-h-[90vh] flex flex-col justify-center relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-bvg-dark/5 to-transparent -z-10"></div>
        
        <div className="container mx-auto px-6 py-12 flex flex-col items-center text-center z-10">
          <span className="inline-block px-3 py-1 rounded-full bg-bvg-blue/10 text-bvg-blue text-sm font-medium mb-8 animate-fade-in">
            Transformando ideias em tecnologia
          </span>
          
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 max-w-4xl leading-tight animate-fade-up">
            Soluções tecnológicas que <span className="text-gradient">transformam</span> o seu negócio
          </h1>
          
          <p className="text-lg text-muted-foreground max-w-2xl mb-10 animate-fade-up" style={{ animationDelay: '0.2s' }}>
            Desenvolvemos aplicações, hardware e soluções de automação com foco em inovação e resultados.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 animate-fade-up" style={{ animationDelay: '0.3s' }}>
            <Link to="/contato" className="button-primary text-center px-8 py-3">
              Fale Conosco
            </Link>
            <Link 
              to="/sobre" 
              className="bg-transparent border border-bvg-dark/20 text-foreground hover:bg-secondary 
                        transition-colors duration-200 rounded-md px-8 py-3 focus-ring text-center"
            >
              Conheça-nos
            </Link>
          </div>
          
          <button 
            onClick={scrollToServices}
            className="absolute bottom-10 left-1/2 transform -translate-x-1/2 animate-bounce mt-24 
                      w-10 h-10 rounded-full border border-bvg-dark/20 flex items-center justify-center 
                      hover:bg-secondary transition-colors duration-200 focus-ring"
            aria-label="Rolar para serviços"
          >
            <ChevronDown />
          </button>
        </div>
      </section>

      {/* Services Section */}
      <section ref={servicesRef} className="section-padding bg-gradient-to-b from-white to-gray-50">
        <div className="container mx-auto">
          <div className="text-center mb-16">
            <span className="inline-block px-3 py-1 rounded-full bg-bvg-blue/10 text-bvg-blue text-sm font-medium mb-4 animate-on-scroll">
              Nossos Serviços
            </span>
            <h2 className="text-3xl md:text-4xl font-bold mb-6 animate-on-scroll">
              Soluções completas em tecnologia
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto animate-on-scroll">
              Da concepção à implementação, oferecemos serviços especializados para impulsionar seu negócio.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="glass-panel p-6 hover-scale animate-on-scroll">
              <div className="w-14 h-14 rounded-full bg-bvg-blue/10 flex items-center justify-center mb-4">
                <Zap size={24} className="text-bvg-blue" />
              </div>
              <h3 className="text-xl font-semibold mb-3">Automação</h3>
              <p className="text-muted-foreground">
                Automatizamos processos para aumentar a eficiência e reduzir custos operacionais.
              </p>
            </div>
            
            <div className="glass-panel p-6 hover-scale animate-on-scroll">
              <div className="w-14 h-14 rounded-full bg-bvg-blue/10 flex items-center justify-center mb-4">
                <Code size={24} className="text-bvg-blue" />
              </div>
              <h3 className="text-xl font-semibold mb-3">Desenvolvimento Web</h3>
              <p className="text-muted-foreground">
                Criamos aplicações web personalizadas e responsivas com as tecnologias mais recentes.
              </p>
            </div>
            
            <div className="glass-panel p-6 hover-scale animate-on-scroll">
              <div className="w-14 h-14 rounded-full bg-bvg-blue/10 flex items-center justify-center mb-4">
                <Cpu size={24} className="text-bvg-blue" />
              </div>
              <h3 className="text-xl font-semibold mb-3">Hardware</h3>
              <p className="text-muted-foreground">
                Desenvolvemos soluções de hardware para integrações específicas e aplicações IoT.
              </p>
            </div>
            
            <div className="glass-panel p-6 hover-scale animate-on-scroll">
              <div className="w-14 h-14 rounded-full bg-bvg-blue/10 flex items-center justify-center mb-4">
                <Bot size={24} className="text-bvg-blue" />
              </div>
              <h3 className="text-xl font-semibold mb-3">Chatbots com IA</h3>
              <p className="text-muted-foreground">
                Implementamos chatbots humanizados utilizando inteligência artificial avançada.
              </p>
            </div>
          </div>
          
          <div className="text-center mt-12">
            <Link to="/sobre" className="text-bvg-blue font-medium hover:underline transition-colors focus-ring rounded-md px-2 py-1">
              Saiba mais sobre nossos serviços →
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Hero;
