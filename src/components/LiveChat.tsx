import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { MessageCircle, X, Send, User, Bot, Minimize2 } from 'lucide-react';

const LiveChat = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isMinimized, setIsMinimized] = useState(false);
  const [messages, setMessages] = useState([
    {
      id: 1,
      type: 'bot',
      message: 'Hi! I\'m here to help you learn more about Devlabs training programs. How can I assist you today?',
      timestamp: new Date()
    }
  ]);
  const [inputValue, setInputValue] = useState('');

  const quickReplies = [
    'Tell me about courses',
    'What are your prices?',
    'Schedule a consultation',
    'Contact support'
  ];

  const handleSendMessage = () => {
    if (!inputValue.trim()) return;

    const newMessage = {
      id: messages.length + 1,
      type: 'user',
      message: inputValue,
      timestamp: new Date()
    };

    setMessages(prev => [...prev, newMessage]);
    setInputValue('');

    // Simulate bot response
    setTimeout(() => {
      const botResponse = {
        id: messages.length + 2,
        type: 'bot',
        message: 'Thanks for your message! Our training experts will get back to you shortly. In the meantime, you can browse our programs or schedule a free consultation.',
        timestamp: new Date()
      };
      setMessages(prev => [...prev, botResponse]);
    }, 1000);
  };

  const handleQuickReply = (reply: string) => {
    setInputValue(reply);
  };

  return (
    <>
      {/* Chat Button */}
      <motion.button
        onClick={() => setIsOpen(!isOpen)}
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
        className={`fixed bottom-6 right-6 z-50 w-16 h-16 bg-gradient-to-r from-[#73c2fb] to-[#0f52ba] text-white rounded-full shadow-2xl flex items-center justify-center transition-all duration-300 ${
          isOpen ? 'rotate-180' : 'hover:shadow-3xl'
        }`}
      >
        {isOpen ? <X className="w-8 h-8" /> : <MessageCircle className="w-8 h-8" />}
      </motion.button>

      {/* Chat Widget */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: 20, scale: 0.9 }}
            animate={{ 
              opacity: 1, 
              y: 0, 
              scale: 1,
              height: isMinimized ? 60 : 480
            }}
            exit={{ opacity: 0, y: 20, scale: 0.9 }}
            transition={{ duration: 0.3, type: 'spring', damping: 25 }}
            className="fixed bottom-24 right-6 z-40 w-80 bg-white rounded-2xl shadow-2xl border border-gray-200 overflow-hidden"
          >
            {/* Header */}
            <div className="bg-gradient-to-r from-[#73c2fb] to-[#0f52ba] p-4 flex items-center justify-between">
              <div className="flex items-center space-x-3">
                <div className="w-10 h-10 bg-white/20 rounded-full flex items-center justify-center">
                  <Bot className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h3 className="font-semibold text-white">Devlabs Assistant</h3>
                  <p className="text-xs text-white/80">Online • Typically replies instantly</p>
                </div>
              </div>
              
              <div className="flex items-center space-x-2">
                <motion.button
                  onClick={() => setIsMinimized(!isMinimized)}
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.9 }}
                  className="w-8 h-8 bg-white/20 rounded-full flex items-center justify-center hover:bg-white/30 transition-colors"
                >
                  <Minimize2 className="w-4 h-4 text-white" />
                </motion.button>
                <motion.button
                  onClick={() => setIsOpen(false)}
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.9 }}
                  className="w-8 h-8 bg-white/20 rounded-full flex items-center justify-center hover:bg-white/30 transition-colors"
                >
                  <X className="w-4 h-4 text-white" />
                </motion.button>
              </div>
            </div>

            {!isMinimized && (
              <>
                {/* Messages */}
                <div className="h-64 overflow-y-auto p-4 space-y-4 bg-gray-50">
                  {messages.map((msg) => (
                    <motion.div
                      key={msg.id}
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      className={`flex items-start space-x-2 ${
                        msg.type === 'user' ? 'flex-row-reverse space-x-reverse' : ''
                      }`}
                    >
                      <div className={`w-8 h-8 rounded-full flex items-center justify-center flex-shrink-0 ${
                        msg.type === 'user' 
                          ? 'bg-[#0f52ba] text-white' 
                          : 'bg-gradient-to-r from-[#73c2fb] to-[#0f52ba] text-white'
                      }`}>
                        {msg.type === 'user' ? <User className="w-4 h-4" /> : <Bot className="w-4 h-4" />}
                      </div>
                      
                      <div className={`flex-1 max-w-xs ${msg.type === 'user' ? 'text-right' : ''}`}>
                        <div className={`inline-block p-3 rounded-2xl text-sm ${
                          msg.type === 'user'
                            ? 'bg-[#0f52ba] text-white rounded-br-sm'
                            : 'bg-white text-gray-800 rounded-bl-sm shadow-sm border border-gray-100'
                        }`}>
                          {msg.message}
                        </div>
                        <p className="text-xs text-gray-500 mt-1">
                          {msg.timestamp.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}
                        </p>
                      </div>
                    </motion.div>
                  ))}
                </div>

                {/* Quick Replies */}
                <div className="p-3 bg-gray-50 border-t border-gray-200">
                  <div className="grid grid-cols-2 gap-2">
                    {quickReplies.map((reply, index) => (
                      <motion.button
                        key={index}
                        onClick={() => handleQuickReply(reply)}
                        whileHover={{ scale: 1.02 }}
                        whileTap={{ scale: 0.98 }}
                        className="text-xs bg-white border border-gray-200 rounded-lg p-2 hover:border-[#73c2fb] hover:text-[#0f52ba] transition-all duration-200"
                      >
                        {reply}
                      </motion.button>
                    ))}
                  </div>
                </div>

                {/* Input */}
                <div className="p-4 bg-white border-t border-gray-200">
                  <div className="flex items-center space-x-2">
                    <input
                      type="text"
                      value={inputValue}
                      onChange={(e) => setInputValue(e.target.value)}
                      onKeyPress={(e) => e.key === 'Enter' && handleSendMessage()}
                      placeholder="Type your message..."
                      className="flex-1 px-3 py-2 border border-gray-300 rounded-full text-sm focus:outline-none focus:ring-2 focus:ring-[#73c2fb] focus:border-transparent"
                    />
                    <motion.button
                      onClick={handleSendMessage}
                      whileHover={{ scale: 1.1 }}
                      whileTap={{ scale: 0.9 }}
                      className="w-10 h-10 bg-gradient-to-r from-[#73c2fb] to-[#0f52ba] text-white rounded-full flex items-center justify-center hover:shadow-lg transition-all duration-200"
                    >
                      <Send className="w-4 h-4" />
                    </motion.button>
                  </div>
                </div>
              </>
            )}
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default LiveChat;