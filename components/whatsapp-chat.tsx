"use client"

import { useState } from "react"
import { X, MessageCircle, Send } from "lucide-react"
import { Button } from "@/components/ui/button"

export default function WhatsAppChat() {
  const [isOpen, setIsOpen] = useState(false)
  const [message, setMessage] = useState("")

  const handleSendMessage = () => {
    const encodedMessage = encodeURIComponent(message || "Hi, I saw your website and I'm interested in your services.")
    const whatsappUrl = `https://wa.me/27621478511?text=${encodedMessage}`
    window.open(whatsappUrl, "_blank")
    setMessage("")
    setIsOpen(false)
  }

  return (
    <>
      {/* Chat Widget */}
      {isOpen && (
        <div className="fixed bottom-24 right-4 w-80 bg-white rounded-lg shadow-2xl border z-50 animate-in slide-in-from-bottom-2">
          {/* Header */}
          <div className="bg-[#25D366] text-white p-4 rounded-t-lg flex items-center justify-between">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 bg-white/20 rounded-full flex items-center justify-center">
                <MessageCircle className="w-5 h-5" />
              </div>
              <div>
                <h3 className="font-semibold">Ferinay</h3>
                <p className="text-xs opacity-90">Typically replies instantly</p>
              </div>
            </div>
            <Button
              variant="ghost"
              size="sm"
              onClick={() => setIsOpen(false)}
              className="text-white hover:bg-white/20 h-8 w-8 p-0"
            >
              <X className="w-4 h-4" />
            </Button>
          </div>

          {/* Chat Body */}
          <div className="p-4 space-y-4">
            <div className="bg-gray-100 p-3 rounded-lg">
              <p className="text-sm text-gray-700">👋 Hi there! How can I help you today?</p>
              <p className="text-xs text-gray-500 mt-1">Operating Hours: Mon-Fri 6PM-12AM (SAST)</p>
            </div>

            <div>
              <textarea
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                placeholder="Type your message here..."
                className="w-full p-3 border border-gray-200 rounded-lg resize-none focus:outline-none focus:ring-2 focus:ring-[#25D366] focus:border-transparent"
                rows={3}
              />
            </div>

            <Button onClick={handleSendMessage} className="w-full bg-[#25D366] hover:bg-[#20B858] text-white">
              <Send className="w-4 h-4 mr-2" />
              Send via WhatsApp
            </Button>
          </div>
        </div>
      )}

      {/* Floating Button */}
      <div className="fixed bottom-4 right-4 z-40">
        <Button
          onClick={() => setIsOpen(!isOpen)}
          className="w-14 h-14 rounded-full bg-[#25D366] hover:bg-[#20B858] text-white shadow-lg hover:shadow-xl transition-all duration-200 p-0"
        >
          {isOpen ? <X className="w-6 h-6" /> : <MessageCircle className="w-6 h-6" />}
        </Button>
      </div>
    </>
  )
}
