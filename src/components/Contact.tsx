
import React, { useState } from 'react';
import { Mail, Phone, Send, Loader2 } from 'lucide-react';
import { toast } from 'sonner';
import { sendContactForm } from '../utils/api';

interface FormData {
  name: string;
  email: string;
  phone: string;
  subject: string;
  message: string;
}

const Contact: React.FC = () => {
  const [formData, setFormData] = useState<FormData>({
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: '',
  });
  
  const [isSubmitting, setIsSubmitting] = useState(false);
  
  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };
  
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    // Simple validation
    if (!formData.name || !formData.email || !formData.message) {
      toast.error('Por favor, preencha todos os campos obrigatórios.');
      return;
    }
    
    setIsSubmitting(true);
    
    try {
      await sendContactForm(formData);
      
      toast.success('Mensagem enviada com sucesso! Entraremos em contato em breve.');
      
      // Reset form
      setFormData({
        name: '',
        email: '',
        phone: '',
        subject: '',
        message: '',
      });
    } catch (error) {
      toast.error('Erro ao enviar mensagem. Tente novamente mais tarde.');
    } finally {
      setIsSubmitting(false);
    }
  };
  
  return (
    <div className="pt-10">
      <section className="section-padding bg-white">
        <div className="container mx-auto">
          <div className="text-center mb-16">
            <span className="inline-block px-3 py-1 rounded-full bg-bvg-blue/10 text-bvg-blue text-sm font-medium mb-4 animate-in">
              Contato
            </span>
            <h1 className="text-3xl md:text-4xl font-bold mb-6 animate-in">
              Entre em Contato
            </h1>
            <p className="text-muted-foreground max-w-2xl mx-auto animate-in">
              Estamos prontos para ouvir suas necessidades e ajudar a encontrar a melhor solução tecnológica para sua empresa.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-10">
            <div className="col-span-1">
              <div className="space-y-8">
                <div className="glass-panel p-6 animate-in">
                  <div className="flex items-start">
                    <div className="mr-4 mt-1">
                      <Mail className="h-6 w-6 text-bvg-blue" />
                    </div>
                    <div>
                      <h3 className="text-lg font-semibold mb-2">Email</h3>
                      <a 
                        href="mailto:bgvtechnology@gmail.com" 
                        className="text-muted-foreground hover:text-bvg-blue transition-colors"
                      >
                        bgvtechnology@gmail.com
                      </a>
                    </div>
                  </div>
                </div>
                
                <div className="glass-panel p-6 animate-in">
                  <div className="flex items-start">
                    <div className="mr-4 mt-1">
                      <Phone className="h-6 w-6 text-bvg-blue" />
                    </div>
                    <div>
                      <h3 className="text-lg font-semibold mb-2">Telefone</h3>
                      <a 
                        href="tel:+531983691000" 
                        className="text-muted-foreground hover:text-bvg-blue transition-colors"
                      >
                        +531 983691000
                      </a>
                    </div>
                  </div>
                </div>
                
                <div className="bg-bvg-dark text-white p-6 rounded-lg animate-in">
                  <h3 className="text-xl font-semibold mb-4">Horário de Atendimento</h3>
                  <div className="space-y-2">
                    <div className="flex justify-between">
                      <span>Segunda - Sexta:</span>
                      <span>08:00 - 18:00</span>
                    </div>
                    <div className="flex justify-between">
                      <span>Sábado:</span>
                      <span>09:00 - 13:00</span>
                    </div>
                    <div className="flex justify-between">
                      <span>Domingo:</span>
                      <span>Fechado</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="col-span-1 lg:col-span-2">
              <form onSubmit={handleSubmit} className="glass-panel p-8 animate-in">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium mb-2">
                      Nome <span className="text-red-500">*</span>
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      className="w-full px-4 py-2 rounded-md border border-border focus:border-bvg-blue focus:ring-2 focus:ring-bvg-blue/20 outline-none transition-all"
                      required
                    />
                  </div>
                  
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium mb-2">
                      Email <span className="text-red-500">*</span>
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      className="w-full px-4 py-2 rounded-md border border-border focus:border-bvg-blue focus:ring-2 focus:ring-bvg-blue/20 outline-none transition-all"
                      required
                    />
                  </div>
                  
                  <div>
                    <label htmlFor="phone" className="block text-sm font-medium mb-2">
                      Telefone
                    </label>
                    <input
                      type="tel"
                      id="phone"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      className="w-full px-4 py-2 rounded-md border border-border focus:border-bvg-blue focus:ring-2 focus:ring-bvg-blue/20 outline-none transition-all"
                    />
                  </div>
                  
                  <div>
                    <label htmlFor="subject" className="block text-sm font-medium mb-2">
                      Assunto
                    </label>
                    <select
                      id="subject"
                      name="subject"
                      value={formData.subject}
                      onChange={handleChange}
                      className="w-full px-4 py-2 rounded-md border border-border focus:border-bvg-blue focus:ring-2 focus:ring-bvg-blue/20 outline-none transition-all"
                    >
                      <option value="">Selecione um assunto</option>
                      <option value="Desenvolvimento Web">Desenvolvimento Web</option>
                      <option value="Hardware e Automação">Hardware e Automação</option>
                      <option value="Chatbots e IA">Chatbots e IA</option>
                      <option value="Consultoria">Consultoria</option>
                      <option value="Outro">Outro</option>
                    </select>
                  </div>
                </div>
                
                <div className="mb-6">
                  <label htmlFor="message" className="block text-sm font-medium mb-2">
                    Mensagem <span className="text-red-500">*</span>
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    rows={6}
                    className="w-full px-4 py-2 rounded-md border border-border focus:border-bvg-blue focus:ring-2 focus:ring-bvg-blue/20 outline-none transition-all"
                    required
                  ></textarea>
                </div>
                
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className={`flex items-center justify-center w-full sm:w-auto px-8 py-3 rounded-md text-white font-medium transition-all
                            ${isSubmitting ? 'bg-bvg-blue/70 cursor-not-allowed' : 'bg-bvg-blue hover:bg-bvg-light-blue'}`}
                >
                  {isSubmitting ? (
                    <>
                      <Loader2 className="w-5 h-5 mr-2 animate-spin" />
                      Enviando...
                    </>
                  ) : (
                    <>
                      <Send className="w-5 h-5 mr-2" />
                      Enviar Mensagem
                    </>
                  )}
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>
      
      {/* FAQ Section */}
      <section className="section-padding bg-gray-50">
        <div className="container mx-auto">
          <div className="text-center mb-16">
            <span className="inline-block px-3 py-1 rounded-full bg-bvg-blue/10 text-bvg-blue text-sm font-medium mb-4">
              FAQ
            </span>
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Perguntas Frequentes
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Encontre respostas para as perguntas mais comuns sobre nossos serviços.
            </p>
          </div>
          
          <div className="max-w-3xl mx-auto space-y-6">
            {[
              {
                question: "Quanto tempo leva para desenvolver uma aplicação web?",
                answer: "O tempo de desenvolvimento varia de acordo com a complexidade do projeto. Projetos simples podem levar de 2 a 4 semanas, enquanto projetos mais complexos podem levar alguns meses. Durante nossa consulta inicial, forneceremos uma estimativa de tempo mais precisa para seu projeto específico."
              },
              {
                question: "Vocês oferecem suporte após o lançamento do projeto?",
                answer: "Sim, oferecemos planos de suporte e manutenção contínuos para garantir que sua solução permaneça atualizada e funcionando perfeitamente. Nossos planos incluem atualizações de segurança, correções de bugs e pequenas melhorias."
              },
              {
                question: "Qual a diferença entre os chatbots tradicionais e os com IA?",
                answer: "Chatbots tradicionais seguem roteiros predefinidos e só conseguem responder a consultas específicas programadas. Nossos chatbots com IA utilizam processamento de linguagem natural avançado para entender o contexto das conversas, aprender com interações anteriores e fornecer respostas mais naturais e personalizadas."
              },
              {
                question: "Vocês desenvolvem soluções personalizadas de hardware?",
                answer: "Sim, desenvolvemos hardware personalizado para atender às necessidades específicas do seu negócio. Nossos especialistas podem projetar e implementar desde dispositivos IoT simples até sistemas de automação complexos, sempre com foco na integração perfeita com seus sistemas existentes."
              }
            ].map((faq, index) => (
              <div key={index} className="glass-panel p-6">
                <h3 className="text-lg font-semibold mb-2">{faq.question}</h3>
                <p className="text-muted-foreground">{faq.answer}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;
