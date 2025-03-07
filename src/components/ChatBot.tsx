
import React, { useState, useRef, useEffect } from 'react';
import { MessageCircle, X, Send, Loader2 } from 'lucide-react';
import { toast } from 'sonner';
import { sendChatMessage } from '../utils/api';

interface Message {
  id: string;
  text: string;
  isUser: boolean;
  timestamp: Date;
}

interface ChatBotProps {
  isOpen: boolean;
  onClose: () => void;
  onOpen: () => void;
}

const ChatBot: React.FC<ChatBotProps> = ({ isOpen, onClose, onOpen }) => {
  const [messages, setMessages] = useState<Message[]>([
    {
      id: '1',
      text: 'Olá! Como posso ajudar você hoje?',
      isUser: false,
      timestamp: new Date(),
    },
  ]);
  const [newMessage, setNewMessage] = useState('');
  const [conversationId, setConversationId] = useState<string>(`user_${Date.now()}`);
  const [isSending, setIsSending] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);
  
  useEffect(() => {
    if (messagesEndRef.current) {
      messagesEndRef.current.scrollIntoView({ behavior: 'smooth' });
    }
  }, [messages]);

  const handleSendMessage = async (e?: React.FormEvent) => {
    if (e) e.preventDefault();
    
    if (!newMessage.trim()) return;
    
    const userMessage: Message = {
      id: `msg_${Date.now()}`,
      text: newMessage,
      isUser: true,
      timestamp: new Date(),
    };
    
    setMessages(prev => [...prev, userMessage]);
    setNewMessage('');
    setIsSending(true);
    
    try {
      const response = await sendChatMessage({
        conversationId,
        message: newMessage,
      });
      
      // Add bot response
      setTimeout(() => {
        setMessages(prev => [
          ...prev, 
          {
            id: `msg_${Date.now()}`,
            text: "Obrigado pela sua mensagem! Nossa equipe entrará em contato em breve.",
            isUser: false,
            timestamp: new Date(),
          }
        ]);
        setIsSending(false);
      }, 1000);
    } catch (error) {
      toast.error("Erro ao enviar mensagem. Tente novamente mais tarde.");
      setIsSending(false);
    }
  };

  if (!isOpen) {
    return (
      <button
        onClick={onOpen}
        className="bg-bvg-blue hover:bg-bvg-light-blue text-white rounded-full w-14 h-14 flex items-center justify-center shadow-lg transition-all duration-300 hover:scale-110"
        aria-label="Open chat"
      >
        <MessageCircle size={24} />
      </button>
    );
  }

  return (
    <div className="animate-slide-in-right glass-panel w-full sm:w-96 h-[500px] max-h-[80vh] flex flex-col overflow-hidden">
      <div className="flex items-center justify-between p-4 border-b">
        <h3 className="font-semibold">BVG Technology - Chat</h3>
        <button
          onClick={onClose}
          className="text-gray-500 hover:text-gray-700 focus-ring rounded"
          aria-label="Close chat"
        >
          <X size={20} />
        </button>
      </div>
      
      <div className="flex-1 overflow-y-auto p-4 space-y-4">
        {messages.map(message => (
          <div
            key={message.id}
            className={`flex ${message.isUser ? 'justify-end' : 'justify-start'}`}
          >
            <div
              className={`max-w-[80%] p-3 rounded-lg ${
                message.isUser
                  ? 'bg-bvg-blue text-white rounded-tr-none'
                  : 'bg-gray-100 text-gray-800 rounded-tl-none'
              }`}
            >
              <p className="text-sm">{message.text}</p>
              <span className="text-xs opacity-70 block mt-1">
                {message.timestamp.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}
              </span>
            </div>
          </div>
        ))}
        {isSending && (
          <div className="flex justify-start">
            <div className="bg-gray-100 text-gray-800 p-3 rounded-lg rounded-tl-none max-w-[80%]">
              <div className="flex items-center space-x-2">
                <Loader2 size={16} className="animate-spin" />
                <span className="text-sm">Digitando...</span>
              </div>
            </div>
          </div>
        )}
        <div ref={messagesEndRef} />
      </div>
      
      <form onSubmit={handleSendMessage} className="border-t p-4">
        <div className="flex items-center rounded-full border bg-white overflow-hidden pl-4 pr-1 py-1 focus-within:ring-2 focus-within:ring-bvg-blue focus-within:ring-opacity-50">
          <input
            type="text"
            value={newMessage}
            onChange={(e) => setNewMessage(e.target.value)}
            placeholder="Digite sua mensagem..."
            className="flex-1 outline-none text-sm"
            disabled={isSending}
          />
          <button
            type="submit"
            className={`ml-2 rounded-full p-2 ${
              isSending || !newMessage.trim()
                ? 'bg-gray-200 text-gray-500 cursor-not-allowed'
                : 'bg-bvg-blue text-white hover:bg-bvg-light-blue'
            } transition-colors`}
            disabled={isSending || !newMessage.trim()}
            aria-label="Send message"
          >
            <Send size={18} />
          </button>
        </div>
      </form>
    </div>
  );
};

export default ChatBot;
