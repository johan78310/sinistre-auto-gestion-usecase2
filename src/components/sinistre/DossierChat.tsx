
import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";
import { MessageCircle, Send, Sparkles, User, Bot } from "lucide-react";

interface Message {
  id: number;
  type: "bot" | "user";
  content: string;
  timestamp: string;
}

export const DossierChat = () => {
  const [message, setMessage] = useState("");
  const [messages, setMessages] = useState<Message[]>([
    {
      id: 1,
      type: "bot" as const,
      content: `📋 **ANALYSE DU DOSSIER SINISTRE #SIN-2024-001234**

**PROBLÈMES IDENTIFIÉS :**

🔸 **Retard dans l'expertise** - L'expert n'a pas encore fourni le devis définitif (en attente depuis 2 jours)

🔸 **Communication insuffisante** - L'assuré M. Dupont n'a pas été informé de l'avancement depuis l'ouverture du dossier

🔸 **Délai de traitement** - Le dossier approche la limite des 10 jours réglementaires sans validation finale

**PRÉCONISATIONS DE REMÉDIATION :**

✅ **1. Relance immédiate de l'expert** - Contactez l'expert sous 24h pour obtenir le rapport d'expertise et le devis final

✅ **2. Communication proactive avec l'assuré** - Envoyez un mail de mise à jour pour rassurer sur l'avancement et maintenir la relation client

✅ **3. Planification des réparations** - Une fois l'expertise validée, accompagnez l'assuré dans le choix du garage agréé pour accélérer le processus

**Niveau de criticité actuel :** 🟠 MOYEN - Action requise sous 48h`,
      timestamp: "14:30"
    }
  ]);

  const predefinedPrompts = [
    "Quel est l'état d'avancement du dossier ?",
    "Y a-t-il des retards à signaler ?",
    "Résumé des contacts avec l'assuré"
  ];

  const handleSendMessage = () => {
    if (!message.trim()) return;

    // Ajouter le message utilisateur
    const userMessage: Message = {
      id: messages.length + 1,
      type: "user" as const,
      content: message,
      timestamp: new Date().toLocaleTimeString("fr-FR", { hour: '2-digit', minute: '2-digit' })
    };

    // Simuler une réponse de l'IA
    const botResponse: Message = {
      id: messages.length + 2,
      type: "bot" as const,
      content: "Je traite votre demande... Voici les informations disponibles dans le dossier.",
      timestamp: new Date().toLocaleTimeString("fr-FR", { hour: '2-digit', minute: '2-digit' })
    };

    setMessages(prev => [...prev, userMessage, botResponse]);
    setMessage("");
  };

  const handlePredefinedPrompt = (prompt: string) => {
    setMessage(prompt);
  };

  return (
    <Card className="h-full min-h-[600px] flex flex-col">
      <CardHeader>
        <CardTitle className="flex items-center">
          <MessageCircle className="w-5 h-5 mr-2 text-blue-600" />
          Chat avec le Dossier
          <Badge variant="outline" className="ml-2">
            <Sparkles className="w-3 h-3 mr-1" />
            IA
          </Badge>
        </CardTitle>
      </CardHeader>
      
      <CardContent className="flex-1 flex flex-col">
        {/* Zone de messages */}
        <div className="flex-1 overflow-y-auto space-y-4 mb-4 min-h-[300px] max-h-[400px] border rounded-lg p-4 bg-gray-50">
          {messages.map((msg) => (
            <div 
              key={msg.id} 
              className={`flex items-start space-x-3 ${msg.type === 'user' ? 'flex-row-reverse space-x-reverse' : ''}`}
            >
              <div className={`w-8 h-8 rounded-full flex items-center justify-center ${
                msg.type === 'user' ? 'bg-blue-500' : 'bg-green-500'
              }`}>
                {msg.type === 'user' ? (
                  <User className="w-4 h-4 text-white" />
                ) : (
                  <Bot className="w-4 h-4 text-white" />
                )}
              </div>
              <div className={`flex-1 ${msg.type === 'user' ? 'text-right' : ''}`}>
                <div className={`inline-block rounded-lg px-4 py-2 max-w-[80%] ${
                  msg.type === 'user' 
                    ? 'bg-blue-500 text-white' 
                    : 'bg-white border text-gray-900'
                }`}>
                  <p className="text-sm whitespace-pre-line">{msg.content}</p>
                </div>
                <p className="text-xs text-gray-500 mt-1">{msg.timestamp}</p>
              </div>
            </div>
          ))}
        </div>

        {/* Prompts prédéfinis */}
        <div className="space-y-2 mb-4">
          <p className="text-sm font-medium text-gray-700">Suggestions :</p>
          <div className="flex flex-wrap gap-2">
            {predefinedPrompts.map((prompt, index) => (
              <Button
                key={index}
                variant="outline"
                size="sm"
                className="text-xs h-8"
                onClick={() => handlePredefinedPrompt(prompt)}
              >
                {prompt}
              </Button>
            ))}
          </div>
        </div>

        {/* Zone de saisie */}
        <div className="flex space-x-2">
          <Input
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            placeholder="Posez votre question sur le dossier..."
            onKeyPress={(e) => e.key === 'Enter' && handleSendMessage()}
            className="flex-1"
          />
          <Button onClick={handleSendMessage} disabled={!message.trim()}>
            <Send className="w-4 h-4" />
          </Button>
        </div>
      </CardContent>
    </Card>
  );
};
