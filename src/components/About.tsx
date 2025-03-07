
import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Award, Target, Cpu, Users, CheckCircle, ChevronRight } from 'lucide-react';

const About: React.FC = () => {
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

  return (
    <div className="pt-10">
      {/* Vision and Mission */}
      <section className="section-padding bg-white">
        <div className="container mx-auto">
          <div className="text-center mb-16">
            <span className="inline-block px-3 py-1 rounded-full bg-bvg-blue/10 text-bvg-blue text-sm font-medium mb-4 animate-on-scroll">
              Quem Somos
            </span>
            <h1 className="text-3xl md:text-4xl font-bold mb-6 animate-on-scroll">
              Sobre a BVG Technology
            </h1>
            <p className="text-muted-foreground max-w-3xl mx-auto animate-on-scroll">
              Somos uma empresa especializada em soluções tecnológicas inovadoras,
              focados em transformar desafios em oportunidades através da tecnologia.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div className="space-y-6 animate-on-scroll">
              <div className="flex items-start">
                <div className="mr-4 mt-1">
                  <Award className="h-8 w-8 text-bvg-blue" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-2">Nossa Missão</h3>
                  <p className="text-muted-foreground">
                    Desenvolver soluções tecnológicas que transformam negócios,
                    automatizam processos e melhoram a experiência dos usuários,
                    sempre com foco em qualidade, inovação e resultados.
                  </p>
                </div>
              </div>
              
              <div className="flex items-start">
                <div className="mr-4 mt-1">
                  <Target className="h-8 w-8 text-bvg-blue" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-2">Nossa Visão</h3>
                  <p className="text-muted-foreground">
                    Ser referência em desenvolvimento tecnológico, reconhecida pela
                    capacidade de entregar soluções inovadoras que impulsionam o
                    crescimento e a transformação digital dos nossos clientes.
                  </p>
                </div>
              </div>
            </div>
            
            <div className="glass-panel p-8 animate-on-scroll">
              <h3 className="text-xl font-semibold mb-4">Nossa Abordagem</h3>
              <p className="text-muted-foreground mb-6">
                Combinamos expertise técnica com uma profunda compreensão dos desafios
                de negócios para criar soluções personalizadas que realmente fazem a diferença.
              </p>
              
              <ul className="space-y-3">
                {[
                  'Desenvolvimento ágil e focado em resultados',
                  'Comunicação transparente durante todo o processo',
                  'Soluções escaláveis que crescem com seu negócio',
                  'Foco em experiências de usuário excepcionais',
                  'Compromisso com qualidade e inovação constante'
                ].map((item, index) => (
                  <li key={index} className="flex items-center">
                    <CheckCircle className="h-5 w-5 text-bvg-blue mr-2 flex-shrink-0" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Expertise Areas */}
      <section className="section-padding bg-gray-50">
        <div className="container mx-auto">
          <div className="text-center mb-16">
            <span className="inline-block px-3 py-1 rounded-full bg-bvg-blue/10 text-bvg-blue text-sm font-medium mb-4 animate-on-scroll">
              Nossa Expertise
            </span>
            <h2 className="text-3xl md:text-4xl font-bold mb-6 animate-on-scroll">
              Áreas de Especialização
            </h2>
            <p className="text-muted-foreground max-w-3xl mx-auto animate-on-scroll">
              Oferecemos uma gama completa de serviços tecnológicos para atender às necessidades específicas do seu negócio.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="glass-panel p-6 hover-scale animate-on-scroll">
              <div className="w-14 h-14 rounded-full bg-bvg-blue/10 flex items-center justify-center mb-4">
                <Code className="h-6 w-6 text-bvg-blue" />
              </div>
              <h3 className="text-xl font-semibold mb-3">Desenvolvimento Web</h3>
              <p className="text-muted-foreground mb-4">
                Criamos aplicações web modernas, intuitivas e responsivas, utilizando as tecnologias mais
                avançadas do mercado. Desde sites institucionais até complexos sistemas web.
              </p>
              <ul className="space-y-2 text-sm">
                <li className="flex items-center">
                  <ChevronRight className="h-4 w-4 text-bvg-blue mr-1" />
                  <span>Aplicações React e TypeScript</span>
                </li>
                <li className="flex items-center">
                  <ChevronRight className="h-4 w-4 text-bvg-blue mr-1" />
                  <span>Desenvolvimento frontend e backend</span>
                </li>
                <li className="flex items-center">
                  <ChevronRight className="h-4 w-4 text-bvg-blue mr-1" />
                  <span>APIs e integrações de sistemas</span>
                </li>
              </ul>
            </div>
            
            <div className="glass-panel p-6 hover-scale animate-on-scroll">
              <div className="w-14 h-14 rounded-full bg-bvg-blue/10 flex items-center justify-center mb-4">
                <Cpu className="h-6 w-6 text-bvg-blue" />
              </div>
              <h3 className="text-xl font-semibold mb-3">Hardware e Automação</h3>
              <p className="text-muted-foreground mb-4">
                Desenvolvemos soluções de hardware personalizadas e sistemas de automação
                para melhorar eficiência operacional e resolver desafios específicos.
              </p>
              <ul className="space-y-2 text-sm">
                <li className="flex items-center">
                  <ChevronRight className="h-4 w-4 text-bvg-blue mr-1" />
                  <span>Dispositivos IoT e sensores</span>
                </li>
                <li className="flex items-center">
                  <ChevronRight className="h-4 w-4 text-bvg-blue mr-1" />
                  <span>Automação industrial e comercial</span>
                </li>
                <li className="flex items-center">
                  <ChevronRight className="h-4 w-4 text-bvg-blue mr-1" />
                  <span>Integrações de hardware customizadas</span>
                </li>
              </ul>
            </div>
            
            <div className="glass-panel p-6 hover-scale animate-on-scroll">
              <div className="w-14 h-14 rounded-full bg-bvg-blue/10 flex items-center justify-center mb-4">
                <Bot className="h-6 w-6 text-bvg-blue" />
              </div>
              <h3 className="text-xl font-semibold mb-3">Inteligência Artificial</h3>
              <p className="text-muted-foreground mb-4">
                Implementamos soluções de inteligência artificial para automatizar processos,
                analisar dados e melhorar a interação com seus clientes.
              </p>
              <ul className="space-y-2 text-sm">
                <li className="flex items-center">
                  <ChevronRight className="h-4 w-4 text-bvg-blue mr-1" />
                  <span>Chatbots humanizados</span>
                </li>
                <li className="flex items-center">
                  <ChevronRight className="h-4 w-4 text-bvg-blue mr-1" />
                  <span>Sistemas de análise preditiva</span>
                </li>
                <li className="flex items-center">
                  <ChevronRight className="h-4 w-4 text-bvg-blue mr-1" />
                  <span>Processamento de linguagem natural</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section-padding bg-bvg-dark text-white">
        <div className="container mx-auto">
          <div className="text-center max-w-3xl mx-auto animate-on-scroll">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Pronto para transformar seu negócio?
            </h2>
            <p className="text-gray-300 mb-8">
              Entre em contato conosco e descubra como nossas soluções tecnológicas
              podem impulsionar seu crescimento e eficiência.
            </p>
            <Link 
              to="/contato" 
              className="bg-bvg-blue text-white hover:bg-bvg-light-blue transition-colors 
                       duration-200 rounded-md px-8 py-3 inline-block focus-ring"
            >
              Fale Conosco
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;
