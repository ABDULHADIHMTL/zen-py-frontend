import React, { useState, useRef, useEffect } from 'react';
import { X, Send, MessageCircle } from 'lucide-react'; // Using your existing lucide-react

const Chatbot = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState([]);
  const [inputMessage, setInputMessage] = useState('');
  const messagesEndRef = useRef(null);

  // Company information for chatbot responses
  const companyInfo = {
    name: "zen py",
    email: "info@zen-py.com",
    email2: "contact@zen-py.com",
    phone: "+91 8341615422",
    phone2: "+966 530895317", // Added second phone number
    contactPerson: "Mr. Abdul Hadi",
    services: ["Power BI Training", "SAP Solutions", "Web Development", "Data Science", "AI Solutions", "Corporate Training"],
    address: "204, 2nd Floor, Shanthi Enclave, Madhavi Nagar, Kukatpally,Hyderabad - 500 072, Telangana state, India "
  };

  // Enhanced FAQ responses with better matching
  const faqResponses = {
    // Greetings
    "hello": "Hello! 👋 Welcome to zen py. I'm here to help you with information about our services, training programs, and more. How can I assist you today?",
    "hi": "Hi there! 😊 Welcome to zen py. What would you like to know about our services?",
    "hey": "Hey! Great to see you here. How can I help you with zen py today?",
    
    // Services
    "service": `We offer comprehensive technology solutions:

🎯 **Training Programs:**
• Power BI Training & Certification
• SAP Training & Implementation
• Data Science & Analytics Training
• Web Development Training
• AI & Machine Learning Courses

💼 **Professional Services:**
• Custom Software Development
• Data Analytics & BI Solutions
• SAP Implementation & Support
• Website & Mobile App Development
• AI Integration Services

Which area are you most interested in?`,

    "training": `Our training programs are designed for professionals:

📚 **Available Training Programs:**
• **Power BI Training** - Master data visualization (4-6 weeks)
• **SAP Training** - Enterprise resource planning (8-10 weeks)
• **Data Science** - Python, ML, Analytics (10-12 weeks)
• **Web Development** - Full-stack development (12 weeks)
• **Corporate Training** - Customized for teams

Each program includes hands-on projects and certification. Would you like details about a specific course?`,

    "power bi": `**Power BI Training Program Details:**

📊 **What You'll Learn:**
• Data Import & Transformation
• DAX Formulas & Data Modeling
• Interactive Dashboard Creation
• Advanced Visualization Techniques
• Report Publishing & Sharing

⏰ **Duration:** 4-6 weeks
🎓 **Certification:** Yes, upon completion
💼 **Projects:** Real-world case studies

For pricing and batch schedules, please contact ${companyInfo.contactPerson} at ${companyInfo.phone}`,

    "sap": `**SAP Training & Solutions:**

🏢 **SAP Services:**
• SAP Implementation & Customization
• End-to-end SAP Consulting
• User Training & Support
• System Integration
• Maintenance & Updates

📚 **SAP Training Covers:**
• SAP Modules Overview
• Hands-on SAP Navigation
• Business Process Integration
• Custom Reporting
• Best Practices

Contact us for a free consultation!`,

    "data science": `**Data Science & Analytics Training:**

🤖 **Curriculum Includes:**
• Python Programming
• Machine Learning Algorithms
• Data Visualization
• Statistical Analysis
• Big Data Tools
• Real-world Projects

💡 **Career Opportunities:**
• Data Analyst
• Machine Learning Engineer
• Business Intelligence Analyst
• Data Scientist`,

    // Contact information
    "contact": `**Contact zen py:**

📧 Email: ${companyInfo.email}
📞 Phone: ${companyInfo.phone}
📞 **Saudi Arabia Phone:** ${companyInfo.phone2}
📱 **WhatsApp India:** [+91 8341615422](https://wa.me/918341615422)
📱 **WhatsApp Saudi:** [+966 530895317](https://wa.me/966530895317)
👤 Contact Person: ${companyInfo.contactPerson}
📍 Address: ${companyInfo.address}

**Business Hours:**
Monday - Friday: 9:00 AM - 6:00 PM
Saturday: 10:00 AM - 2:00 PM

Would you like to schedule a meeting?`,

    "email": `You can email us at: **${companyInfo.email}**

We typically respond within 2-4 hours during business days. For urgent matters, please call ${companyInfo.phone} (India) or ${companyInfo.phone2} (Saudi Arabia).`,

    "phone": `**Call or WhatsApp us:** 
    **India: **${companyInfo.phone}**
    **Saudi Arabia: **${companyInfo.phone2}**

    📱 **WhatsApp India:** [+91 8341615422](https://wa.me/918341615422)
    📱 **WhatsApp Saudi:** [+966 530895317](https://wa.me/966530895317)

**Available Hours:**
Monday - Friday: 9:00 AM - 6:00 PM

*Click the WhatsApp links for instant messaging!*

We're happy to discuss your requirements!`,

// Add this new response for WhatsApp-specific queries
"whatsapp": `**WhatsApp Contact Options:**

📱 **India WhatsApp:** [+91 8341615422](https://wa.me/918341615422)
- Direct chat for Indian customers
- Quick responses for training inquiries

📱 **Saudi Arabia WhatsApp:** [+966 530895317](https://wa.me/966530895317)
- Dedicated line for Saudi clients
- Arabic/English support available

**Best for:**
• Quick questions
• Training program details
• Price inquiries
• Appointment scheduling

*Click the links above to start chatting instantly!*`,

"email": `You can email us at: **${companyInfo.email}**

We typically respond within 2-4 hours during business days. 

For faster response, you can also:
• WhatsApp India: [+91 8341615422](https://wa.me/918341615422)
• WhatsApp Saudi: [+966 530895317](https://wa.me/966530895317)`,


    // Pricing
    "price": `**Pricing Information:**

Our pricing is customized based on:
• Service type (Training/Development)
• Project complexity & duration
• Team size requirements
• Customization needs

💰 **Training Programs:** Starting from $299
💼 **Development Projects:** Custom quotes

For exact pricing, please contact ${companyInfo.contactPerson} at ${companyInfo.phone} for a free consultation.`,

    "cost": `I understand you're asking about pricing. For accurate cost information tailored to your specific needs, please contact ${companyInfo.contactPerson} directly at ${companyInfo.phone} or email ${companyInfo.email}.`,

    // Company info
    "about": `**About zen py:**

We are a technology solutions provider specializing in:
• IT Training & Certification Programs
• Software Development Services
• Data Analytics & BI Solutions
• Corporate Training Solutions
• Technology Consulting

With years of experience, we help businesses and individuals succeed in the digital landscape.`,

    "help": `I can help you with information about:

🔹 Our training programs (Power BI, SAP, Data Science, etc.)
🔹 Professional services
🔹 Pricing and schedules
🔹 Contact information
🔹 Company details

What would you like to know?`,

    // Default response
    "default": `Thank you for your question about "${inputMessage}". 

For detailed information about this specific topic, I recommend contacting ${companyInfo.contactPerson} directly at ${companyInfo.phone} or email ${companyInfo.email}. They'll provide you with comprehensive assistance tailored to your needs.

Is there anything else I can help you with in the meantime?`
  };

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  // Enhanced response matching function
  const getResponse = (message) => {
    const lowerMessage = message.toLowerCase().trim();
    
    // Priority matching for better accuracy
    const priorityKeywords = {
      'power bi': 'power bi',
      'sap': 'sap',
      'data science': 'data science',
      'machine learning': 'data science',
      'web development': 'training',
      'training': 'training',
      'course': 'training',
      'price': 'price',
      'cost': 'cost',
      'how much': 'price',
      'contact': 'contact',
      'email': 'email',
      'phone': 'phone',
      'call': 'phone',
      'about': 'about',
      'company': 'about',
      'help': 'help',
      'service': 'service',
      'whatsapp': 'whatsapp',
      'message': 'whatsapp',
      'chat': 'whatsapp',
      'text': 'whatsapp',
      'what do you do': 'service'
    };

    // Check priority keywords first
    for (const [keyword, responseKey] of Object.entries(priorityKeywords)) {
      if (lowerMessage.includes(keyword)) {
        return faqResponses[responseKey];
      }
    }

    // Check greetings
    if (['hello', 'hi', 'hey', 'good morning', 'good afternoon'].some(greet => lowerMessage.includes(greet))) {
      return faqResponses['hello'];
    }

    // Default response for unknown queries
    return faqResponses['default'].replace("${inputMessage}", message);
  };

  const handleSendMessage = () => {
    if (inputMessage.trim() === '') return;

    // Add user message
    const userMessage = { text: inputMessage, sender: 'user', timestamp: new Date() };
    setMessages(prev => [...prev, userMessage]);

    // Get and add bot response
    setTimeout(() => {
      const botResponse = { 
        text: getResponse(inputMessage), 
        sender: 'bot', 
        timestamp: new Date() 
      };
      setMessages(prev => [...prev, botResponse]);
    }, 800); // Slight delay for natural feel

    setInputMessage('');
  };

  const handleKeyPress = (e) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      handleSendMessage();
    }
  };

  const startChat = () => {
    setIsOpen(true);
    setMessages([{ 
      text: "Hello! I'm your zen py assistant. 🤖\n\nI can help you with:\n• Training programs & schedules\n• Service information\n• Pricing details\n• Contact information\n• Company details\n\nWhat would you like to know today?", 
      sender: 'bot',
      timestamp: new Date()
    }]);
  };

  const closeChat = () => {
    setIsOpen(false);
    setMessages([]);
  };

  // Quick questions suggestions
  const quickQuestions = [
    "What training programs do you offer?",
    "Tell me about Power BI training",
    "What are your contact details?"
  ];

  return (
    <div className="chatbot-container">
      {/* Chatbot Trigger Button */}
      {!isOpen && (
        <div className="chatbot-trigger animate-bounce">
          <button 
            onClick={startChat}
            className="bg-amber-500 hover:bg-amber-600 text-white rounded-full p-4 shadow-lg transition-all duration-300 hover:scale-110"
            title="Chat with us"
          >
            <MessageCircle size={24} />
          </button>
        </div>
      )}

      {/* Chatbot Modal */}
      {isOpen && (
        <div className="chatbot-modal">
          {/* Header */}
          <div className="chatbot-header">
            <div className="chatbot-title">
              <h3 className="font-bold">zen py Assistant</h3>
              <span className="text-sm opacity-80">Online • Typically replies instantly</span>
            </div>
            <button onClick={closeChat} className="close-button">
              <X size={20} />
            </button>
          </div>

          {/* Messages Area */}
          <div className="chatbot-messages">
            {messages.map((message, index) => (
              <div key={index} className={`message ${message.sender}`}>
                <div className="message-content">
                  {message.text.split('\n').map((line, i) => (
                    <p key={i} className="mb-1">{line}</p>
                  ))}
                </div>
                <span className="message-time">
                  {message.timestamp.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}
                </span>
              </div>
            ))}
            <div ref={messagesEndRef} />
          </div>

          {/* Quick Questions */}
          {messages.length === 1 && (
            <div className="quick-questions">
              <p className="text-sm text-gray-600 mb-2">Quick questions:</p>
              <div className="quick-buttons">
                {quickQuestions.map((question, index) => (
                  <button
                    key={index}
                    onClick={() => {
                      setInputMessage(question);
                      setTimeout(handleSendMessage, 100);
                    }}
                    className="quick-question-btn"
                  >
                    {question}
                  </button>
                ))}
              </div>
            </div>
          )}

          {/* Input Area */}
          <div className="chatbot-input">
            <input
              type="text"
              value={inputMessage}
              onChange={(e) => setInputMessage(e.target.value)}
              onKeyPress={handleKeyPress}
              placeholder="Type your message here..."
              className="message-input"
              maxLength={500}
            />
            <button 
              onClick={handleSendMessage} 
              className="send-button"
              disabled={!inputMessage.trim()}
            >
              <Send size={18} />
            </button>
          </div>
        </div>
      )}

      <style jsx>{`
        .chatbot-container {
          position: fixed;
          bottom: 20px;
          right: 20px;
          z-index: 1000;
        }

        .chatbot-trigger {
          animation: bounce 2s infinite;
        }

        .chatbot-modal {
          width: 380px;
          height: 600px;
          background: white;
          border-radius: 20px;
          box-shadow: 0 20px 60px rgba(0,0,0,0.3);
          display: flex;
          flex-direction: column;
          overflow: hidden;
        }

        .chatbot-header {
          background: linear-gradient(135deg, #1e3c72, #2a5298);
          color: white;
          padding: 20px;
          display: flex;
          justify-content: space-between;
          align-items: center;
        }

        .chatbot-title h3 {
          margin: 0 0 4px 0;
          font-size: 1.3rem;
        }

        .close-button {
          background: rgba(255,255,255,0.2);
          border: none;
          color: white;
          border-radius: 50%;
          width: 32px;
          height: 32px;
          display: flex;
          align-items: center;
          justify-content: center;
          cursor: pointer;
          transition: background 0.3s;
        }

        .close-button:hover {
          background: rgba(255,255,255,0.3);
        }

        .chatbot-messages {
          flex: 1;
          padding: 20px;
          overflow-y: auto;
          background: #f8fafc;
        }

        .message {
          margin-bottom: 16px;
          display: flex;
          flex-direction: column;
        }

        .message.user {
          align-items: flex-end;
        }

        .message.bot {
          align-items: flex-start;
        }

        .message-content {
          max-width: 85%;
          padding: 12px 16px;
          border-radius: 18px;
          line-height: 1.4;
          word-wrap: break-word;
        }

        .message.user .message-content {
          background: #007bff;
          color: white;
          border-bottom-right-radius: 5px;
        }

        .message.bot .message-content {
          background: white;
          color: #333;
          border: 1px solid #e2e8f0;
          border-bottom-left-radius: 5px;
          box-shadow: 0 2px 4px rgba(0,0,0,0.1);
        }

        .message-time {
          font-size: 0.7rem;
          color: #64748b;
          margin-top: 4px;
          padding: 0 8px;
        }

        .quick-questions {
          padding: 0 20px 10px;
          border-top: 1px solid #e2e8f0;
          background: white;
        }

        .quick-buttons {
          display: flex;
          flex-direction: column;
          gap: 8px;
        }

        .quick-question-btn {
          background: #f1f5f9;
          border: 1px solid #e2e8f0;
          border-radius: 12px;
          padding: 8px 12px;
          font-size: 0.8rem;
          text-align: left;
          cursor: pointer;
          transition: all 0.3s;
        }

        .quick-question-btn:hover {
          background: #e2e8f0;
          transform: translateX(4px);
        }

        .chatbot-input {
          padding: 15px 20px;
          border-top: 1px solid #e2e8f0;
          display: flex;
          gap: 10px;
          background: white;
        }

        .message-input {
          flex: 1;
          padding: 12px 16px;
          border: 1px solid #e2e8f0;
          border-radius: 25px;
          outline: none;
          font-size: 0.9rem;
        }

        .message-input:focus {
          border-color: #007bff;
        }

        .send-button {
          background: #007bff;
          color: white;
          border: none;
          border-radius: 50%;
          width: 44px;
          height: 44px;
          display: flex;
          align-items: center;
          justify-content: center;
          cursor: pointer;
          transition: background 0.3s;
        }

        .send-button:hover:not(:disabled) {
          background: #0056b3;
        }

        .send-button:disabled {
          background: #ccc;
          cursor: not-allowed;
        }

        @keyframes bounce {
          0%, 20%, 50%, 80%, 100% {transform: translateY(0);}
          40% {transform: translateY(-8px);}
          60% {transform: translateY(-4px);}
        }

        /* Scrollbar styling */
        .chatbot-messages::-webkit-scrollbar {
          width: 6px;
        }

        .chatbot-messages::-webkit-scrollbar-track {
          background: #f1f1f1;
        }

        .chatbot-messages::-webkit-scrollbar-thumb {
          background: #c1c1c1;
          border-radius: 3px;
        }

        .chatbot-messages::-webkit-scrollbar-thumb:hover {
          background: #a8a8a8;
        }
      `}</style>
    </div>
  );
};

export default Chatbot;