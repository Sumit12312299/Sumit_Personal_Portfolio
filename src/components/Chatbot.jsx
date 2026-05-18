import React, { useState, useEffect, useRef } from 'react';
import { MessageSquare, Send, X, Bot, Sparkles, User, HelpCircle } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

const Chatbot = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState([
    {
      id: 1,
      sender: 'bot',
      text: "Hey! I'm the SKY AI Assistant. How can I help you explore Sumit's portfolio today?",
      time: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })
    }
  ]);
  const [input, setInput] = useState('');
  const [isTyping, setIsTyping] = useState(false);
  const messagesEndRef = useRef(null);

  const suggestionChips = [
    { label: "🚀 Tell me about yourself", query: "who are you" },
    { label: "💻 Technical Skills", query: "what are your skills" },
    { label: "📁 Key Projects", query: "tell me about your projects" },
    { label: "✉️ How to Contact", query: "how can i contact you" }
  ];

  useEffect(() => {
    if (messagesEndRef.current) {
      messagesEndRef.current.scrollIntoView({ behavior: 'smooth' });
    }
  }, [messages, isTyping]);

  const handleSend = (textToSend) => {
    const query = textToSend || input;
    if (!query.trim()) return;

    // Add user message
    const userMsg = {
      id: Date.now(),
      sender: 'user',
      text: query,
      time: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })
    };

    setMessages(prev => [...prev, userMsg]);
    if (!textToSend) setInput('');
    setIsTyping(true);

    // Simulate AI thinking delay for realistic interaction
    setTimeout(() => {
      const responseText = getBotResponse(query);
      const botMsg = {
        id: Date.now() + 1,
        sender: 'bot',
        text: responseText,
        time: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })
      };
      setMessages(prev => [...prev, botMsg]);
      setIsTyping(false);
    }, 800);
  };

  const getBotResponse = (query) => {
    const lowerQuery = query.toLowerCase();

    // Match keywords for personalized answers
    if (lowerQuery.includes('hello') || lowerQuery.includes('hi') || lowerQuery.includes('hey') || lowerQuery.includes('greetings')) {
      return "Hi there! Friendly virtual helper here. How can I assist you with Sumit's portfolio?";
    }
    
    if (lowerQuery.includes('who are you') || lowerQuery.includes('about yourself') || lowerQuery.includes('yourself') || lowerQuery.includes('about sumit') || lowerQuery.includes('who is sumit')) {
      return "Sumit Kumar (aka SKY) is a talented Software Engineer based in Bangalore, India. He builds exceptional, low-latency, and highly responsive web applications. He's passionate about full-stack engineering, interactive UI designs, and problem-solving.";
    }

    if (lowerQuery.includes('skills') || lowerQuery.includes('technologies') || lowerQuery.includes('stack') || lowerQuery.includes('languages') || lowerQuery.includes('what do you know')) {
      return "Sumit has a robust set of skills across: \n\n• **Frontend**: React.js, JavaScript (ES6+), Tailwind CSS, Redux Toolkit, HTML5 & CSS3\n• **Backend**: Node.js, Express.js, MongoDB, Django, Python, SQL, RESTful APIs\n• **Tools**: Git & GitHub, Docker, Postman, Linux\n• **Core Concepts**: Data Structures, Algorithms, OOPs, and System Design.";
    }

    if (lowerQuery.includes('project') || lowerQuery.includes('portfolio') || lowerQuery.includes('work') || lowerQuery.includes('apps')) {
      if (lowerQuery.includes('parking') || lowerQuery.includes('management')) {
        return "The **Premium Parking Management System** is a full-stack Django application. It features a real-time interactive map of parking spots, secure QR-based E-Ticket generation, and automated extension/cancellation flows. [View Github Repo](https://github.com/Sumit12312299/Parking_Management_System)";
      }
      if (lowerQuery.includes('resume') || lowerQuery.includes('analyzer') || lowerQuery.includes('ai')) {
        return "The **AI Resume Analyzer** is an intelligent React-based app. It uses the Gemini API to parse resumes against job descriptions, returning custom feedback, keyword additions, and ATS compatibility scores. [View Github Repo](https://github.com/Sumit12312299/AI_Resume_Analyzer)";
      }
      if (lowerQuery.includes('chat') || lowerQuery.includes('messaging')) {
        return "The **Real-time Chat Application** is a low-latency messaging platform built with React, Socket.io, Node.js, Express, and Redis for high-speed in-memory database caching. It supports typing indicators, read receipts, and custom private rooms.";
      }
      return "Sumit has built three key showcase projects:\n\n1. **Premium Parking Management System** (Django, Python, QR API)\n2. **AI Resume Analyzer** (React, Gemini LLM API, Framer Motion)\n3. **Real-time Chat Application** (React, Socket.io, Node, Redis)\n\nWhich project would you like to know more about?";
    }

    if (lowerQuery.includes('contact') || lowerQuery.includes('email') || lowerQuery.includes('phone') || lowerQuery.includes('reach') || lowerQuery.includes('hire') || lowerQuery.includes('talk')) {
      return "You can get in touch with Sumit directly through these details:\n\n📧 **Email**: contact@sumitkumar.dev\n📞 **Phone**: +91 98765 43210\n📍 **Location**: Bangalore, India\n\nYou can also drop a message using the Contact form in the Contact section!";
    }

    if (lowerQuery.includes('resume') || lowerQuery.includes('cv') || lowerQuery.includes('download')) {
      return "You can download Sumit's complete detailed PDF resume directly by heading down to the **Resume** section or scrolling to the bottom of the page and clicking the 'Download Resume' button.";
    }

    if (lowerQuery.includes('theme') || lowerQuery.includes('website') || lowerQuery.includes('built') || lowerQuery.includes('look')) {
      return "This portfolio is built using React, Vite, and Framer Motion for premium 3D interactions and animations. The aesthetic is a high-end Glassmorphic Dark Cyberpunk theme featuring glowing neon elements, smooth scroll mechanics, and a fully interactive layout.";
    }

    return "I'm not fully sure about that query, but I can tell you all about Sumit's skills, projects, contact details, or resume! Try clicking one of the quick suggestions above.";
  };

  return (
    <>
      {/* Floating Toggle Button */}
      <motion.button
        className="chatbot-toggle"
        onClick={() => setIsOpen(!isOpen)}
        initial={{ scale: 0, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ type: 'spring', stiffness: 260, damping: 20 }}
        whileHover={{ scale: 1.1, rotate: 5 }}
        whileTap={{ scale: 0.9 }}
        aria-label="Toggle chat assistant"
      >
        {isOpen ? <X size={26} /> : <MessageSquare size={26} />}
        <span className="chatbot-ping"></span>
      </motion.button>

      {/* Chat Window Container */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            className="chatbot-window glass-panel"
            initial={{ opacity: 0, y: 50, scale: 0.9 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 50, scale: 0.9 }}
            transition={{ type: 'spring', duration: 0.5 }}
          >
            {/* Header */}
            <div className="chatbot-header">
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.8rem' }}>
                <div className="chatbot-avatar">
                  <Bot size={22} className="text-gradient" />
                </div>
                <div>
                  <h4 style={{ margin: 0, fontSize: '1rem', fontWeight: 600, color: 'var(--text-primary)', display: 'flex', alignItems: 'center', gap: '4px' }}>
                    SKY AI Assistant <Sparkles size={14} style={{ color: 'var(--accent-primary)' }} />
                  </h4>
                  <span style={{ fontSize: '0.75rem', color: 'var(--accent-primary)', display: 'flex', alignItems: 'center', gap: '4px' }}>
                    <span className="chatbot-status-dot"></span> Online
                  </span>
                </div>
              </div>
              <button className="chatbot-close" onClick={() => setIsOpen(false)} aria-label="Close Chat">
                <X size={18} />
              </button>
            </div>

            {/* Messages Area */}
            <div className="chatbot-messages-container">
              {messages.map((msg) => (
                <div
                  key={msg.id}
                  className={`chatbot-message-wrapper ${msg.sender === 'user' ? 'user' : 'bot'}`}
                >
                  <div className={`chatbot-message-bubble ${msg.sender === 'user' ? 'user' : 'bot'}`}>
                    <p style={{ margin: 0, whiteSpace: 'pre-wrap' }}>
                      {msg.text.split(/(\[[^\]]+\]\([^)]+\))/g).map((part, index) => {
                        const match = part.match(/\[([^\]]+)\]\(([^)]+)\)/);
                        if (match) {
                          return (
                            <a
                              key={index}
                              href={match[2]}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="chat-link"
                            >
                              {match[1]}
                            </a>
                          );
                        }
                        return part;
                      })}
                    </p>
                    <span className="chatbot-message-time">{msg.time}</span>
                  </div>
                </div>
              ))}

              {isTyping && (
                <div className="chatbot-message-wrapper bot">
                  <div className="chatbot-message-bubble bot typing">
                    <span className="dot"></span>
                    <span className="dot"></span>
                    <span className="dot"></span>
                  </div>
                </div>
              )}
              <div ref={messagesEndRef} />
            </div>

            {/* Suggestion Chips */}
            <div className="chatbot-suggestions">
              {suggestionChips.map((chip, idx) => (
                <button
                  key={idx}
                  className="chatbot-suggestion-chip"
                  onClick={() => handleSend(chip.query)}
                >
                  {chip.label}
                </button>
              ))}
            </div>

            {/* Input Form */}
            <form
              className="chatbot-input-form"
              onSubmit={(e) => {
                e.preventDefault();
                handleSend();
              }}
            >
              <input
                type="text"
                placeholder="Ask something..."
                value={input}
                onChange={(e) => setInput(e.target.value)}
                className="chatbot-input"
              />
              <button type="submit" className="chatbot-submit" aria-label="Send message">
                <Send size={18} />
              </button>
            </form>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Styled block containing all required styles to perfectly fit the aesthetic */}
      <style>{`
        .chatbot-toggle {
          position: fixed;
          bottom: 2rem;
          right: 2rem;
          width: 60px;
          height: 60px;
          border-radius: 50%;
          background: var(--gradient-text);
          color: #050505;
          border: none;
          display: flex;
          align-items: center;
          justify-content: center;
          cursor: pointer;
          box-shadow: 0 0 20px rgba(0, 240, 255, 0.4);
          z-index: 999;
          transition: all 0.3s ease;
        }

        .chatbot-ping {
          position: absolute;
          top: 0;
          right: 0;
          height: 12px;
          width: 12px;
          border-radius: 50%;
          background-color: var(--accent-primary);
          border: 2px solid var(--bg-color);
          animation: pulse 1.5s infinite;
        }

        @keyframes pulse {
          0% { transform: scale(0.95); box-shadow: 0 0 0 0 rgba(0, 240, 255, 0.7); }
          70% { transform: scale(1); box-shadow: 0 0 0 6px rgba(0, 240, 255, 0); }
          100% { transform: scale(0.95); box-shadow: 0 0 0 0 rgba(0, 240, 255, 0); }
        }

        .chatbot-window {
          position: fixed;
          bottom: 6.5rem;
          right: 2rem;
          width: 380px;
          height: 520px;
          z-index: 999;
          display: flex;
          flex-direction: column;
          padding: 0 !important;
          overflow: hidden;
          background: rgba(10, 10, 10, 0.85) !important;
          border: 1px solid rgba(0, 240, 255, 0.2) !important;
          box-shadow: 0 10px 40px rgba(0, 0, 0, 0.6) !important;
        }

        @media (max-width: 480px) {
          .chatbot-window {
            width: calc(100% - 2rem);
            right: 1rem;
            bottom: 6rem;
            height: 480px;
          }
          .chatbot-toggle {
            bottom: 1.5rem;
            right: 1.5rem;
          }
        }

        .chatbot-header {
          display: flex;
          justify-content: space-between;
          align-items: center;
          padding: 1.2rem;
          border-bottom: 1px solid var(--glass-border);
          background: rgba(255, 255, 255, 0.02);
        }

        .chatbot-avatar {
          width: 36px;
          height: 36px;
          border-radius: 50%;
          background: rgba(0, 240, 255, 0.1);
          border: 1px solid rgba(0, 240, 255, 0.3);
          display: flex;
          align-items: center;
          justify-content: center;
        }

        .chatbot-status-dot {
          width: 8px;
          height: 8px;
          border-radius: 50%;
          background: #00ff66;
          display: inline-block;
          box-shadow: 0 0 8px #00ff66;
        }

        .chatbot-close {
          background: transparent;
          border: none;
          color: var(--text-secondary);
          cursor: pointer;
          transition: color 0.3s;
          padding: 4px;
        }

        .chatbot-close:hover {
          color: var(--text-primary);
        }

        .chatbot-messages-container {
          flex: 1;
          overflow-y: auto;
          padding: 1.2rem;
          display: flex;
          flex-direction: column;
          gap: 1rem;
        }

        .chatbot-messages-container::-webkit-scrollbar {
          width: 4px;
        }

        .chatbot-messages-container::-webkit-scrollbar-thumb {
          background: rgba(0, 240, 255, 0.2);
          border-radius: 2px;
        }

        .chatbot-message-wrapper {
          display: flex;
          width: 100%;
        }

        .chatbot-message-wrapper.bot {
          justify-content: flex-start;
        }

        .chatbot-message-wrapper.user {
          justify-content: flex-end;
        }

        .chatbot-message-bubble {
          max-width: 80%;
          padding: 0.8rem 1rem;
          border-radius: 16px;
          font-size: 0.9rem;
          line-height: 1.4;
          position: relative;
        }

        .chatbot-message-bubble.bot {
          background: rgba(255, 255, 255, 0.04);
          border: 1px solid var(--glass-border);
          color: var(--text-primary);
          border-top-left-radius: 4px;
        }

        .chatbot-message-bubble.user {
          background: linear-gradient(135deg, rgba(112, 0, 255, 0.2), rgba(0, 240, 255, 0.2));
          border: 1px solid rgba(0, 240, 255, 0.3);
          color: var(--text-primary);
          border-top-right-radius: 4px;
        }

        .chatbot-message-time {
          display: block;
          font-size: 0.7rem;
          color: var(--text-secondary);
          text-align: right;
          margin-top: 4px;
          opacity: 0.6;
        }

        /* Typing Dots Animation */
        .chatbot-message-bubble.typing {
          display: flex;
          align-items: center;
          gap: 4px;
          padding: 0.8rem 1.2rem;
        }

        .chatbot-message-bubble.typing .dot {
          width: 6px;
          height: 6px;
          border-radius: 50%;
          background: var(--text-secondary);
          animation: bounce 1.4s infinite ease-in-out both;
        }

        .chatbot-message-bubble.typing .dot:nth-child(1) { animation-delay: -0.32s; }
        .chatbot-message-bubble.typing .dot:nth-child(2) { animation-delay: -0.16s; }

        @keyframes bounce {
          0%, 80%, 100% { transform: scale(0); }
          40% { transform: scale(1); }
        }

        .chatbot-suggestions {
          display: flex;
          flex-wrap: wrap;
          gap: 0.4rem;
          padding: 0.8rem 1.2rem;
          border-top: 1px solid rgba(255, 255, 255, 0.04);
          background: rgba(0, 0, 0, 0.2);
        }

        .chatbot-suggestion-chip {
          background: rgba(0, 240, 255, 0.05);
          border: 1px solid rgba(0, 240, 255, 0.15);
          color: var(--accent-primary);
          font-size: 0.78rem;
          padding: 0.35rem 0.75rem;
          border-radius: 20px;
          cursor: pointer;
          transition: all 0.3s ease;
          font-family: var(--font-body);
        }

        .chatbot-suggestion-chip:hover {
          background: rgba(0, 240, 255, 0.15);
          border-color: var(--accent-primary);
          box-shadow: 0 0 10px rgba(0, 240, 255, 0.25);
          transform: translateY(-1px);
        }

        .chatbot-input-form {
          display: flex;
          padding: 0.8rem 1.2rem;
          gap: 0.5rem;
          border-top: 1px solid var(--glass-border);
          background: rgba(255, 255, 255, 0.01);
        }

        .chatbot-input {
          flex: 1;
          background: rgba(255, 255, 255, 0.04);
          border: 1px solid var(--glass-border);
          border-radius: 20px;
          padding: 0.6rem 1.2rem;
          color: var(--text-primary);
          font-family: var(--font-body);
          font-size: 0.9rem;
          outline: none;
          transition: all 0.3s ease;
        }

        .chatbot-input:focus {
          border-color: rgba(0, 240, 255, 0.4);
          background: rgba(255, 255, 255, 0.07);
          box-shadow: 0 0 8px rgba(0, 240, 255, 0.15);
        }

        .chatbot-submit {
          width: 38px;
          height: 38px;
          border-radius: 50%;
          background: var(--gradient-text);
          color: #050505;
          border: none;
          display: flex;
          align-items: center;
          justify-content: center;
          cursor: pointer;
          transition: all 0.3s ease;
        }

        .chatbot-submit:hover {
          box-shadow: 0 0 12px rgba(0, 240, 255, 0.4);
          transform: scale(1.05);
        }

        .chat-link {
          color: var(--accent-primary);
          text-decoration: underline;
          transition: color 0.3s;
          font-weight: 500;
        }

        .chat-link:hover {
          color: #fff;
        }
      `}</style>
    </>
  );
};

export default Chatbot;
