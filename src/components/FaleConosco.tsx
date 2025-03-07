
import React, { useState } from 'react';
import { Send, Loader2 } from 'lucide-react';
import { toast } from 'sonner';
import { sendContactForm } from '../utils/api';

interface FormData {
  name: string;
  city: string;
  description: string;
  additionalInfo: string;
}

const FaleConosco: React.FC = () => {
  const [formData, setFormData] = useState<FormData>({
    name: '',
    city: '',
    description: '',
    additionalInfo: '',
  });
  
  const [isSubmitting, setIsSubmitting] = useState(false);
  
  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };
  
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    // Simple validation
    if (!formData.name || !formData.description) {
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
        city: '',
        description: '',
        additionalInfo: '',
      });
    } catch (error) {
      toast.error('Erro ao enviar mensagem. Tente novamente mais tarde.');
    } finally {
      setIsSubmitting(false);
    }
  };
  
  return (
    <section className="section-padding bg-white">
      <div className="container mx-auto">
        <div className="text-center mb-16">
          <span className="inline-block px-3 py-1 rounded-full bg-bvg-blue/10 text-bvg-blue text-sm font-medium mb-4 animate-in">
            Fale Conosco
          </span>
          <h1 className="text-3xl md:text-4xl font-bold mb-6 animate-in">
            Como Podemos Ajudar?
          </h1>
          <p className="text-muted-foreground max-w-2xl mx-auto animate-in">
            Preencha o formulário abaixo e nos conte sobre seu projeto ou desafio. 
            Nossa equipe entrará em contato para discutir como podemos ajudar.
          </p>
        </div>

        <div className="max-w-2xl mx-auto">
          <form onSubmit={handleSubmit} className="glass-panel p-8 animate-in">
            <div className="space-y-6">
              <div>
                <label htmlFor="name" className="block text-sm font-medium mb-2">
                  Nome Completo <span className="text-red-500">*</span>
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
                <label htmlFor="city" className="block text-sm font-medium mb-2">
                  Cidade
                </label>
                <input
                  type="text"
                  id="city"
                  name="city"
                  value={formData.city}
                  onChange={handleChange}
                  className="w-full px-4 py-2 rounded-md border border-border focus:border-bvg-blue focus:ring-2 focus:ring-bvg-blue/20 outline-none transition-all"
                />
              </div>
              
              <div>
                <label htmlFor="description" className="block text-sm font-medium mb-2">
                  Descrição do Problema <span className="text-red-500">*</span>
                </label>
                <textarea
                  id="description"
                  name="description"
                  value={formData.description}
                  onChange={handleChange}
                  rows={4}
                  className="w-full px-4 py-2 rounded-md border border-border focus:border-bvg-blue focus:ring-2 focus:ring-bvg-blue/20 outline-none transition-all"
                  required
                ></textarea>
                <p className="text-sm text-muted-foreground mt-1">
                  Descreva brevemente o problema ou projeto que você precisa de ajuda.
                </p>
              </div>
              
              <div>
                <label htmlFor="additionalInfo" className="block text-sm font-medium mb-2">
                  Informações Adicionais
                </label>
                <textarea
                  id="additionalInfo"
                  name="additionalInfo"
                  value={formData.additionalInfo}
                  onChange={handleChange}
                  rows={4}
                  className="w-full px-4 py-2 rounded-md border border-border focus:border-bvg-blue focus:ring-2 focus:ring-bvg-blue/20 outline-none transition-all"
                ></textarea>
                <p className="text-sm text-muted-foreground mt-1">
                  Forneça quaisquer detalhes adicionais que possam nos ajudar a entender melhor sua necessidade.
                </p>
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
            </div>
          </form>
        </div>
      </div>
    </section>
  );
};

export default FaleConosco;
