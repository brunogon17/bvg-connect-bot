
import React from 'react';
import { ExternalLink } from 'lucide-react';

interface CaseStudy {
  title: string;
  description: string;
  image: string;
  features: string[];
}

const caseStudies: CaseStudy[] = [
  {
    title: "Automação de Pedidos de Pizza",
    description: "Plataforma completa para pizzarias que permite aos clientes pedirem as promoções do dia, montarem suas próprias pizzas e acompanharem o status da entrega em tempo real.",
    image: "https://images.unsplash.com/photo-1488590528505-98d2b5aba04b?auto=format&fit=crop&w=600&q=80",
    features: ["Cardápio dinâmico", "Montagem personalizada", "Promoções diárias", "Acompanhamento em tempo real"]
  },
  {
    title: "Automação de Pedidos de Comida",
    description: "Sistema para restaurantes que permite aos clientes pedirem o almoço do dia, montarem seu próprio marmitex e agendarem entregas recorrentes para a semana.",
    image: "https://images.unsplash.com/photo-1461749280684-dccba630e2f6?auto=format&fit=crop&w=600&q=80",
    features: ["Cardápio do dia", "Personalização de marmitex", "Entrega programada", "Assinatura semanal"]
  },
  {
    title: "Automação para Carrinho de Compras de Festas",
    description: "Plataforma de e-commerce especializada em itens para festas, permitindo a compra de kits completos, doces, salgados, bolos e decorações com entrega programada.",
    image: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&w=600&q=80",
    features: ["Kits temáticos", "Personalização de itens", "Agendamento de entrega", "Sugestões baseadas no tema"]
  },
  {
    title: "Automação de Borracharia",
    description: "Sistema de gestão para borracharias que permite aos clientes agendarem serviços, como revisões e pequenos reparos, além de receber lembretes de manutenção preventiva.",
    image: "https://images.unsplash.com/photo-1485827404703-89b55fcc595e?auto=format&fit=crop&w=600&q=80",
    features: ["Agendamento online", "Histórico de serviços", "Lembretes de manutenção", "Orçamentos digitais"]
  },
  {
    title: "Automação para Escola de Reforço",
    description: "Plataforma completa para escolas particulares de reforço, com agendamento de aulas, pagamento de mensalidades, compartilhamento de materiais didáticos e acompanhamento de desempenho.",
    image: "https://images.unsplash.com/photo-1498050108023-c5249f4df085?auto=format&fit=crop&w=600&q=80",
    features: ["Agendamento de aulas", "Gestão financeira", "Repositório de materiais", "Relatórios de desempenho"]
  }
];

const CaseStudies: React.FC = () => {
  return (
    <section className="section-padding bg-white">
      <div className="container mx-auto">
        <div className="text-center mb-16">
          <span className="inline-block px-3 py-1 rounded-full bg-bvg-blue/10 text-bvg-blue text-sm font-medium mb-4 animate-on-scroll">
            Casos de Sucesso
          </span>
          <h2 className="text-3xl md:text-4xl font-bold mb-6 animate-on-scroll">
            Nossas Soluções em Ação
          </h2>
          <p className="text-muted-foreground max-w-3xl mx-auto animate-on-scroll">
            Conheça alguns exemplos de como nossas soluções tecnológicas têm ajudado empresas a 
            transformar seus processos e melhorar a experiência de seus clientes.
          </p>
        </div>

        <div className="space-y-16">
          {caseStudies.map((study, index) => (
            <div 
              key={index} 
              className={`flex flex-col ${index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'} gap-8 items-center animate-on-scroll`}
            >
              <div className="w-full md:w-1/2">
                <div className="overflow-hidden rounded-lg">
                  <img 
                    src={study.image} 
                    alt={study.title} 
                    className="w-full h-[300px] object-cover transition-transform hover:scale-105 duration-300"
                  />
                </div>
              </div>
              <div className="w-full md:w-1/2 space-y-4">
                <h3 className="text-2xl font-bold">{study.title}</h3>
                <p className="text-muted-foreground">{study.description}</p>
                <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                  {study.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center">
                      <CheckCircle className="h-5 w-5 text-bvg-blue mr-2 flex-shrink-0" />
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
                <button className="flex items-center text-bvg-blue hover:text-bvg-light-blue transition-colors mt-2">
                  <span className="mr-1">Ver mais detalhes</span>
                  <ExternalLink className="w-4 h-4" />
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CaseStudies;
