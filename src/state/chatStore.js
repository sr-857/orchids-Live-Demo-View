import { create } from 'zustand'
import { persist } from 'zustand/middleware'

export const useChatStore = create(
  persist(
    (set, get) => ({
      messages: [],
      isOpen: false,
      isTyping: false,
      hasGreeted: false,

      setIsOpen: (isOpen) => set({ isOpen }),
      
      addMessage: (message) => set((state) => ({ 
        messages: [...state.messages, { ...message, id: Date.now(), timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }) }] 
      })),

      sendMessage: async (content) => {
        if (!content.trim()) return;

        const { addMessage } = get();
        
        // Add user message
        addMessage({ role: 'user', content });

        set({ isTyping: true });

        // Simulate AI response
        setTimeout(() => {
          try {
            const aiResponse = getAiResponse(content);
            addMessage({ role: 'ai', content: aiResponse });
          } catch (error) {
            addMessage({ role: 'ai', content: "Something went wrong. Please try again." });
          } finally {
            set({ isTyping: false });
          }
        }, 1500);
      },

      setHasGreeted: (hasGreeted) => set({ hasGreeted }),
      
      clearHistory: () => set({ messages: [] }),
    }),
    {
      name: 'astra-chat-storage',
      partialize: (state) => ({ messages: state.messages, hasGreeted: state.hasGreeted }),
    }
  )
)

function getAiResponse(query) {
  const lowerQuery = query.toLowerCase();
  
  if (lowerQuery.includes('hello') || lowerQuery.includes('hi')) {
    return "Hello! How can I assist you with AstraGuard's security features today?";
  }
  if (lowerQuery.includes('price') || lowerQuery.includes('cost')) {
    return "AstraGuard offers flexible pricing for startups and enterprises. You can start with our free trial to explore all features.";
  }
  if (lowerQuery.includes('security') || lowerQuery.includes('threat')) {
    return "AstraGuard provides real-time neural threat detection, shielding your LLM applications from injections, jailbreaks, and PII leaks.";
  }
  if (lowerQuery.includes('docs') || lowerQuery.includes('documentation')) {
    return "You can find our detailed technical documentation at: https://github.com/sr-857/AstraGuard/blob/main/docs/TECHNICAL.md";
  }
  
  return "That's an interesting question. AstraGuard is designed to provide enterprise-grade security for AI models. Would you like to know more about our threat detection capabilities?";
}
