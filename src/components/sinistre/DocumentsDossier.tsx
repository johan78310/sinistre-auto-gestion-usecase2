
import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { FileText, MessageCircle, Send, Eye, Calendar, Sparkles, User, Bot } from "lucide-react";
import { ResizablePanelGroup, ResizablePanel, ResizableHandle } from "@/components/ui/resizable";

interface Document {
  id: number;
  nom: string;
  type: string;
  taille: string;
  dateUpload: string;
  statut: string;
  couleurStatut: string;
  url?: string;
}

interface Message {
  id: number;
  type: "bot" | "user";
  content: string;
  timestamp: string;
}

export const DocumentsDossier = () => {
  const [selectedDocument, setSelectedDocument] = useState<Document | null>(null);
  const [message, setMessage] = useState("");
  const [messages, setMessages] = useState<Message[]>([
    {
      id: 1,
      type: "bot" as const,
      content: "Sélectionnez un document pour commencer à l'analyser. Je peux vous aider à extraire des informations spécifiques.",
      timestamp: "14:30"
    }
  ]);

  const documents: Document[] = [
    {
      id: 1,
      nom: "Constat amiable",
      type: "PDF",
      taille: "2.4 MB",
      dateUpload: "15/03/2024",
      statut: "Validé",
      couleurStatut: "bg-green-100 text-green-800"
    },
    {
      id: 2,
      nom: "Photos du véhicule",
      type: "ZIP",
      taille: "15.6 MB",
      dateUpload: "15/03/2024",
      statut: "Validé",
      couleurStatut: "bg-green-100 text-green-800"
    },
    {
      id: 3,
      nom: "Rapport d'expertise",
      type: "PDF",
      taille: "3.2 MB",
      dateUpload: "18/03/2024",
      statut: "Validé",
      couleurStatut: "bg-green-100 text-green-800"
    },
    {
      id: 4,
      nom: "Conditions particulières",
      type: "PDF",
      taille: "0.9 MB",
      dateUpload: "10/03/2024",
      statut: "Validé",
      couleurStatut: "bg-green-100 text-green-800"
    },
    {
      id: 5,
      nom: "Conditions générales",
      type: "PDF",
      taille: "4.1 MB",
      dateUpload: "10/03/2024",
      statut: "Validé",
      couleurStatut: "bg-green-100 text-green-800"
    },
    {
      id: 6,
      nom: "Devis garage Dupont",
      type: "PDF",
      taille: "1.1 MB",
      dateUpload: "20/03/2024",
      statut: "En attente",
      couleurStatut: "bg-orange-100 text-orange-800"
    }
  ];

  const predefinedPrompts = [
    "Résume les points clés de ce document",
    "Quels sont les montants mentionnés ?",
    "Y a-t-il des dates importantes ?",
    "Identifie les responsabilités"
  ];

  const handleDocumentSelect = (doc: Document) => {
    setSelectedDocument(doc);
    // Réinitialiser le chat avec un message contextuel
    setMessages([
      {
        id: 1,
        type: "bot" as const,
        content: `Document "${doc.nom}" sélectionné. Je peux maintenant répondre à vos questions sur ce document.`,
        timestamp: new Date().toLocaleTimeString("fr-FR", { hour: '2-digit', minute: '2-digit' })
      }
    ]);
  };

  const handleSendMessage = () => {
    if (!message.trim()) return;

    const userMessage: Message = {
      id: messages.length + 1,
      type: "user" as const,
      content: message,
      timestamp: new Date().toLocaleTimeString("fr-FR", { hour: '2-digit', minute: '2-digit' })
    };

    const botResponse: Message = {
      id: messages.length + 2,
      type: "bot" as const,
      content: selectedDocument 
        ? `Analyse du document "${selectedDocument.nom}" en cours... Voici les informations trouvées.`
        : "Veuillez d'abord sélectionner un document à analyser.",
      timestamp: new Date().toLocaleTimeString("fr-FR", { hour: '2-digit', minute: '2-digit' })
    };

    setMessages(prev => [...prev, userMessage, botResponse]);
    setMessage("");
  };

  const handlePredefinedPrompt = (prompt: string) => {
    setMessage(prompt);
  };

  return (
    <div className="h-[calc(100vh-12rem)]">
      <ResizablePanelGroup direction="horizontal" className="min-h-full">
        {/* Liste des documents - 1/5 de l'écran */}
        <ResizablePanel defaultSize={20} minSize={15} maxSize={25}>
          <Card className="h-full">
            <CardHeader className="pb-3">
              <CardTitle className="text-lg flex items-center">
                <FileText className="w-4 h-4 mr-2 text-purple-600" />
                Documents
              </CardTitle>
            </CardHeader>
            <CardContent className="p-0">
              <div className="space-y-1 max-h-[calc(100vh-16rem)] overflow-y-auto">
                {documents.map((doc) => (
                  <div
                    key={doc.id}
                    className={`p-3 mx-3 rounded-lg cursor-pointer transition-colors border ${
                      selectedDocument?.id === doc.id
                        ? 'bg-blue-50 border-blue-200'
                        : 'hover:bg-gray-50 border-transparent'
                    }`}
                    onClick={() => handleDocumentSelect(doc)}
                  >
                    <div className="flex items-start space-x-2">
                      <div className="w-6 h-6 bg-blue-100 rounded flex items-center justify-center flex-shrink-0">
                        <FileText className="w-3 h-3 text-blue-600" />
                      </div>
                      <div className="min-w-0 flex-1">
                        <h4 className="font-medium text-sm text-gray-900 truncate">
                          {doc.nom}
                        </h4>
                        <div className="text-xs text-gray-600 space-y-1">
                          <div>{doc.type} • {doc.taille}</div>
                          <div className="flex items-center">
                            <Calendar className="w-2 h-2 mr-1" />
                            {doc.dateUpload}
                          </div>
                          <Badge className={`${doc.couleurStatut} text-xs px-1 py-0`} variant="outline">
                            {doc.statut}
                          </Badge>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </ResizablePanel>

        <ResizableHandle withHandle />

        {/* Visionneuse PDF - 2/5 de l'écran */}
        <ResizablePanel defaultSize={40} minSize={30} maxSize={50}>
          <Card className="h-full">
            <CardHeader className="pb-3">
              <CardTitle className="text-lg flex items-center">
                <Eye className="w-4 h-4 mr-2 text-green-600" />
                {selectedDocument ? selectedDocument.nom : "Visionneuse PDF"}
              </CardTitle>
            </CardHeader>
            <CardContent className="h-[calc(100%-4rem)]">
              {selectedDocument ? (
                <div className="h-full bg-gray-100 rounded-lg flex items-center justify-center border-2 border-dashed border-gray-300">
                  <div className="text-center space-y-4">
                    <FileText className="w-16 h-16 text-gray-400 mx-auto" />
                    <div>
                      <h3 className="text-lg font-semibold text-gray-700">
                        {selectedDocument.nom}
                      </h3>
                      <p className="text-sm text-gray-500">
                        Visionneuse PDF - {selectedDocument.type} • {selectedDocument.taille}
                      </p>
                    </div>
                    <p className="text-xs text-gray-400 max-w-xs">
                      La visionneuse PDF sera intégrée ici pour afficher le contenu du document sélectionné.
                    </p>
                  </div>
                </div>
              ) : (
                <div className="h-full bg-gray-50 rounded-lg flex items-center justify-center">
                  <div className="text-center space-y-4">
                    <FileText className="w-12 h-12 text-gray-300 mx-auto" />
                    <p className="text-gray-500">Sélectionnez un document pour le visualiser</p>
                  </div>
                </div>
              )}
            </CardContent>
          </Card>
        </ResizablePanel>

        <ResizableHandle withHandle />

        {/* Chat contextuel - 2/5 de l'écran */}
        <ResizablePanel defaultSize={40} minSize={30} maxSize={50}>
          <Card className="h-full flex flex-col">
            <CardHeader className="pb-3">
              <CardTitle className="text-lg flex items-center">
                <MessageCircle className="w-4 h-4 mr-2 text-blue-600" />
                Chat Document
                <Badge variant="outline" className="ml-2 text-xs">
                  <Sparkles className="w-2 h-2 mr-1" />
                  IA
                </Badge>
              </CardTitle>
            </CardHeader>
            
            <CardContent className="flex-1 flex flex-col p-3">
              {/* Zone de messages */}
              <div className="flex-1 overflow-y-auto space-y-3 mb-3 p-3 bg-gray-50 rounded-lg">
                {messages.map((msg) => (
                  <div 
                    key={msg.id} 
                    className={`flex items-start space-x-2 ${msg.type === 'user' ? 'flex-row-reverse space-x-reverse' : ''}`}
                  >
                    <div className={`w-6 h-6 rounded-full flex items-center justify-center ${
                      msg.type === 'user' ? 'bg-blue-500' : 'bg-green-500'
                    }`}>
                      {msg.type === 'user' ? (
                        <User className="w-3 h-3 text-white" />
                      ) : (
                        <Bot className="w-3 h-3 text-white" />
                      )}
                    </div>
                    <div className={`flex-1 ${msg.type === 'user' ? 'text-right' : ''}`}>
                      <div className={`inline-block rounded-lg px-3 py-2 max-w-[85%] text-sm ${
                        msg.type === 'user' 
                          ? 'bg-blue-500 text-white' 
                          : 'bg-white border text-gray-900'
                      }`}>
                        {msg.content}
                      </div>
                      <p className="text-xs text-gray-500 mt-1">{msg.timestamp}</p>
                    </div>
                  </div>
                ))}
              </div>

              {/* Prompts prédéfinis */}
              <div className="space-y-2 mb-3">
                <p className="text-xs font-medium text-gray-700">Suggestions :</p>
                <div className="grid grid-cols-2 gap-1">
                  {predefinedPrompts.map((prompt, index) => (
                    <Button
                      key={index}
                      variant="outline"
                      size="sm"
                      className="text-xs h-7 px-2"
                      onClick={() => handlePredefinedPrompt(prompt)}
                      disabled={!selectedDocument}
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
                  placeholder={selectedDocument ? "Questionnez le document..." : "Sélectionnez d'abord un document"}
                  onKeyPress={(e) => e.key === 'Enter' && handleSendMessage()}
                  className="flex-1 text-sm"
                  disabled={!selectedDocument}
                />
                <Button 
                  onClick={handleSendMessage} 
                  disabled={!message.trim() || !selectedDocument}
                  size="sm"
                >
                  <Send className="w-3 h-3" />
                </Button>
              </div>
            </CardContent>
          </Card>
        </ResizablePanel>
      </ResizablePanelGroup>
    </div>
  );
};
