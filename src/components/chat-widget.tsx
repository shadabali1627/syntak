'use client';

import React, { useState, useRef, useEffect } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import { MessageCircle, X, Send } from 'lucide-react';
import { cn } from '@/lib/utils';
import ReactMarkdown from 'react-markdown';

// Define Message type globally to avoid import issues
export interface Message {
    id: string;
    role: 'user' | 'assistant' | 'system' | 'data';
    content: string;
}

export function ChatWidget() {
    const [isOpen, setIsOpen] = useState(false);
    const messagesEndRef = useRef<HTMLDivElement>(null);
    const inputRef = useRef<HTMLInputElement>(null);

    // Manual State Management
    const [messages, setMessages] = useState<Message[]>([]);
    const [input, setInput] = useState('');
    const [isLoading, setIsLoading] = useState(false);
    const [error, setError] = useState<string | null>(null);

    const handleSend = async (e: React.FormEvent) => {
        e.preventDefault();
        if (!input.trim() || isLoading) return;

        const userMessage: Message = {
            id: Date.now().toString(),
            role: 'user',
            content: input.trim()
        };

        // 1. Optimistically update UI
        setMessages(prev => [...prev, userMessage]);
        setInput('');
        setIsLoading(true);
        setError(null);

        try {
            // 2. Fetch from API
            const response = await fetch('/api/chat', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({
                    messages: [...messages, userMessage] // Send history
                })
            });

            if (!response.ok) {
                const errData = await response.json();
                throw new Error(errData.error || response.statusText);
            }

            if (!response.body) throw new Error('No response body');

            // 3. Prepare for streaming response
            const assistantMessage: Message = {
                id: (Date.now() + 1).toString(),
                role: 'assistant',
                content: ''
            };
            setMessages(prev => [...prev, assistantMessage]);

            const reader = response.body.getReader();
            const decoder = new TextDecoder();
            let done = false;
            let accumulatedContent = '';

            // 4. Read stream
            while (!done) {
                const { value, done: doneReading } = await reader.read();
                done = doneReading;
                const chunkValue = decoder.decode(value, { stream: true });
                accumulatedContent += chunkValue;

                // Update the last message (assistant) with new content
                setMessages(prev => {
                    const newMessages = [...prev];
                    const lastMsg = newMessages[newMessages.length - 1];
                    if (lastMsg.role === 'assistant') {
                        lastMsg.content = accumulatedContent;
                    }
                    return newMessages;
                });
            }

        } catch (err: any) {
            console.error("Chat Error:", err);
            setError(err.message || "Failed to send message");
            // Optionally remove the optimistically added message or show error state
        } finally {
            setIsLoading(false);
        }
    };

    // Auto-scroll to bottom
    useEffect(() => {
        messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
    }, [messages, isOpen]);

    // Focus input on open
    useEffect(() => {
        if (isOpen) {
            setTimeout(() => inputRef.current?.focus(), 100);
        }
    }, [isOpen]);

    return (
        <div className="fixed bottom-6 right-6 z-50 flex flex-col items-end gap-4">
            <AnimatePresence>
                {isOpen && (
                    <motion.div
                        initial={{ opacity: 0, scale: 0.9, y: 20 }}
                        animate={{ opacity: 1, scale: 1, y: 0 }}
                        exit={{ opacity: 0, scale: 0.9, y: 20 }}
                        transition={{ type: 'spring', damping: 25, stiffness: 300 }}
                        className="w-[90vw] max-w-[380px] h-[600px] max-h-[80vh] flex flex-col bg-[#0B0F19] border border-white/10 rounded-2xl shadow-2xl overflow-hidden font-sans"
                    >
                        {/* Header */}
                        <div className="flex items-center justify-between p-4 bg-[#0B0F19] border-b border-white/5 relative z-10">
                            <div className="flex items-center gap-2">
                                <div className="relative">
                                    <div className="w-2.5 h-2.5 rounded-full bg-green-500 animate-pulse" />
                                </div>
                                <span className="text-white font-semibold tracking-wide">Syntak AI</span>
                            </div>
                        </div>

                        {/* Chat Area */}
                        <div className="flex-1 overflow-y-auto p-4 space-y-4 scrollbar-thin scrollbar-thumb-white/10 scrollbar-track-transparent">

                            {/* Welcome Message - Explicitly rendered if no messages */}
                            {(!messages || messages.length === 0) && (
                                <motion.div
                                    initial={{ opacity: 0, y: 10 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    className="flex w-full justify-start"
                                >
                                    <div className="max-w-[85%] p-3 text-sm leading-relaxed shadow-sm relative bg-gray-800 text-white rounded-2xl rounded-tl-sm">
                                        <p>Hello! I am the Syntak AI assistant. How can I transform your digital presence today?</p>
                                    </div>
                                </motion.div>
                            )}

                            {messages.map((message: Message) => (
                                <motion.div
                                    key={message.id}
                                    initial={{ opacity: 0, y: 10 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    className={cn(
                                        "flex w-full",
                                        message.role === 'user' ? "justify-end" : "justify-start"
                                    )}
                                >
                                    <div
                                        className={cn(
                                            "max-w-[85%] p-3 text-sm leading-relaxed shadow-sm relative",
                                            message.role === 'user'
                                                ? "bg-[#E3B576] text-black rounded-2xl rounded-br-sm"
                                                : "bg-gray-800 text-white rounded-2xl rounded-tl-sm"
                                        )}
                                    >
                                        <ReactMarkdown
                                            components={{
                                                p: ({ children }) => <p className="mb-2 last:mb-0">{children}</p>,
                                                ul: ({ children }) => <ul className="list-disc ml-4 mb-2">{children}</ul>,
                                                ol: ({ children }) => <ol className="list-decimal ml-4 mb-2">{children}</ol>,
                                                li: ({ children }) => <li className="mb-1">{children}</li>,
                                                strong: ({ children }) => <strong className="font-bold">{children}</strong>,
                                                a: ({ href, children }) => <a href={href} target="_blank" rel="noopener noreferrer" className="underline">{children}</a>
                                            }}
                                        >
                                            {message.content}
                                        </ReactMarkdown>
                                    </div>
                                </motion.div>
                            ))}

                            {/* Error Display */}
                            {error && (
                                <div className="p-3 bg-red-500/10 border border-red-500/20 text-red-400 text-xs rounded-lg mx-4">
                                    <p className="font-semibold">Error:</p>
                                    <p>{error}</p>
                                </div>
                            )}

                            {isLoading && (
                                <motion.div
                                    initial={{ opacity: 0, y: 10 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    className="flex justify-start w-full"
                                >
                                    <div className="bg-gray-800 p-3 rounded-2xl rounded-tl-sm flex gap-1.5 items-center">
                                        <motion.div
                                            className="w-1.5 h-1.5 bg-gray-400 rounded-full"
                                            animate={{ y: [0, -4, 0] }}
                                            transition={{ duration: 0.6, repeat: Infinity, ease: "easeInOut" }}
                                        />
                                        <motion.div
                                            className="w-1.5 h-1.5 bg-gray-400 rounded-full"
                                            animate={{ y: [0, -4, 0] }}
                                            transition={{ duration: 0.6, repeat: Infinity, ease: "easeInOut", delay: 0.1 }}
                                        />
                                        <motion.div
                                            className="w-1.5 h-1.5 bg-gray-400 rounded-full"
                                            animate={{ y: [0, -4, 0] }}
                                            transition={{ duration: 0.6, repeat: Infinity, ease: "easeInOut", delay: 0.2 }}
                                        />
                                    </div>
                                </motion.div>
                            )}
                            <div ref={messagesEndRef} />
                        </div>

                        {/* Input Area */}
                        <div className="p-4 bg-[#0B0F19] border-t border-white/5">
                            <form
                                onSubmit={handleSend}
                                className="relative flex items-center"
                            >
                                <input
                                    ref={inputRef}
                                    type="text"
                                    value={input}
                                    onChange={(e) => setInput(e.target.value)}
                                    placeholder="Ask anything..."
                                    className="w-full bg-gray-900 text-white text-sm rounded-full pl-4 pr-12 py-3 border border-transparent focus:border-[#E3B576] focus:ring-1 focus:ring-[#E3B576] outline-none transition-all placeholder:text-gray-500"
                                />
                                <button
                                    type="submit"
                                    disabled={!input.trim() || isLoading}
                                    className={cn(
                                        "absolute right-2 p-2 rounded-full transition-colors",
                                        input.trim() ? "text-[#E3B576] hover:bg-white/5" : "text-gray-600 cursor-not-allowed"
                                    )}
                                >
                                    <Send size={18} />
                                </button>
                            </form>
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>

            {/* Launcher */}
            <motion.button
                onClick={() => setIsOpen(!isOpen)}
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                className="w-14 h-14 rounded-full bg-[#E3B576] flex items-center justify-center shadow-lg shadow-[#E3B576]/20 relative z-50 text-black hover:bg-[#d4a25e] transition-colors"
            >
                <AnimatePresence mode="wait" initial={false}>
                    <motion.div
                        key={isOpen ? 'close' : 'open'}
                        initial={{ opacity: 0, rotate: -90, scale: 0.5 }}
                        animate={{ opacity: 1, rotate: 0, scale: 1 }}
                        exit={{ opacity: 0, rotate: 90, scale: 0.5 }}
                        transition={{ duration: 0.2 }}
                    >
                        {isOpen ? <X size={24} /> : <MessageCircle size={24} />}
                    </motion.div>
                </AnimatePresence>
            </motion.button>
        </div>
    );
}
