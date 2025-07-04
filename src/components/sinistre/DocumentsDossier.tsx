
import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { FileText, MessageCircle, Send, Eye, Calendar, Sparkles, User, Bot, Car, Shield, Camera, FileCheck } from "lucide-react";
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
  icon?: string;
  preview?: string;
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
      couleurStatut: "bg-green-100 text-green-800",
      icon: "FileCheck",
      preview: "Constat européen d'accident automobile n°123456\n\nCIRCONSTANCES DE L'ACCIDENT\nDate: 15/03/2024\nHeure: 14h30\nLieu: Intersection Rue de la République / Boulevard Haussmann, Paris\n\nVÉHICULE A (Assuré)\nConducteur: Martin DUPONT\nAssureur: AXA Assurance\nN° de police: 123456789\nVéhicule: Peugeot 308 - AB-123-CD\n\nVÉHICULE B\nConducteur: Sophie MARTIN\nAssureur: Groupama\nN° de police: 987654321\nVéhicule: Renault Clio - EF-456-GH\n\nDÉGÂTS APPARENTS\nVéhicule A: Pare-chocs avant gauche enfoncé, phare gauche cassé\nVéhicule B: Portière droite enfoncée, rétroviseur arraché\n\nOBSERVATIONS\nCollision lors d'un changement de file. Chaussée mouillée."
    },
    {
      id: 2,
      nom: "Photos du véhicule",
      type: "ZIP",
      taille: "15.6 MB",
      dateUpload: "15/03/2024",
      statut: "Validé",
      couleurStatut: "bg-green-100 text-green-800",
      icon: "Camera",
      preview: "RAPPORT PHOTOGRAPHIQUE\nDossier sinistre: SIN-2024-001234\n\nPhotos prises le 15/03/2024 à 15h00\nLieu: Garage Martin - 123 Rue de la Réparation, Paris\n\nLISTE DES PHOTOS:\n\n1. Vue générale du véhicule (avant)\n2. Détail pare-chocs avant gauche\n3. Phare avant gauche cassé\n4. Rayure sur l'aile gauche\n5. Vue d'ensemble côté gauche\n6. Intérieur véhicule (tableau de bord)\n7. Numéro de châssis\n8. Compteur kilométrique (45 678 km)\n\nTOTAL: 24 photos haute résolution\nFormat: JPEG, 4000x3000 pixels\n\nPhotographe: Expert automobile certifié\nN° agrément: EA-2024-001"
    },
    {
      id: 3,
      nom: "Rapport d'expertise",
      type: "PDF",
      taille: "3.2 MB",
      dateUpload: "18/03/2024",
      statut: "Validé",
      couleurStatut: "bg-green-100 text-green-800",
      icon: "FileText",
      preview: "RAPPORT D'EXPERTISE AUTOMOBILE\n\nExpert: Jean-Pierre LEBLANC\nN° agrément: 12345\nDate d'expertise: 18/03/2024\n\nVÉHICULE EXPERTISÉ\nMarque: PEUGEOT\nModèle: 308 ALLURE\nImmatriculation: AB-123-CD\nDate 1ère mise en circulation: 15/06/2020\nKilométrage: 45 678 km\n\nDÉGÂTS CONSTATÉS\n- Pare-chocs avant gauche: remplacement nécessaire\n- Phare avant gauche: remplacement complet\n- Aile avant gauche: débosselage et peinture\n- Grille de calandre: remplacement\n\nESTIMATION DES RÉPARATIONS\nPièces: 2 150,00 €\nMain d'œuvre: 1 800,00 €\nPeinture: 550,00 €\nTOTAL HT: 4 500,00 €\nTVA 20%: 900,00 €\nTOTAL TTC: 5 400,00 €\n\nCONCLUSION: Véhicule réparable économiquement"
    },
    {
      id: 4,
      nom: "Conditions particulières",
      type: "PDF",
      taille: "0.9 MB",
      dateUpload: "10/03/2024",
      statut: "Validé",
      couleurStatut: "bg-green-100 text-green-800",
      icon: "Shield",
      preview: "CONDITIONS PARTICULIÈRES\nContrat d'assurance automobile\n\nSOUSCRIPTEUR\nNom: DUPONT Martin\nAdresse: 456 Avenue des Champs, 75008 Paris\nN° de contrat: 123456789\nDate d'effet: 01/01/2024\nÉchéance: 31/12/2024\n\nVÉHICULE ASSURÉ\nMarque: PEUGEOT\nModèle: 308 ALLURE\nImmatriculation: AB-123-CD\nValeur assurée: 25 000 €\n\nGARANTIES SOUSCRITES\n✓ Responsabilité civile obligatoire\n✓ Dommages tous accidents\n✓ Vol et incendie\n✓ Bris de glaces\n✓ Assistance 24h/24\n✓ Véhicule de remplacement\n\nFRANCHISES\nDommages tous accidents: 300 €\nVol: 500 €\nBris de glaces: 50 €\n\nPRIME ANNUELLE: 1 247,50 €"
    },
    {
      id: 5,
      nom: "Conditions générales",
      type: "PDF",
      taille: "4.1 MB",
      dateUpload: "10/03/2024",
      statut: "Validé",
      couleurStatut: "bg-green-100 text-green-800",
      icon: "FileText",
      preview: "CONDITIONS GÉNÉRALES\nAssurance Automobile AXA\nVersion 2024\n\nTABLE DES MATIÈRES\n\n1. DISPOSITIONS GÉNÉRALES\n   1.1 Objet du contrat\n   1.2 Définitions\n   1.3 Prise d'effet et durée\n\n2. GARANTIES\n   2.1 Responsabilité civile\n   2.2 Dommages au véhicule\n   2.3 Vol et tentative de vol\n   2.4 Incendie et explosion\n\n3. EXCLUSIONS\n   3.1 Exclusions générales\n   3.2 Exclusions particulières\n\n4. OBLIGATIONS EN CAS DE SINISTRE\n   4.1 Déclaration du sinistre\n   4.2 Justificatifs à fournir\n   4.3 Expertise\n\n5. INDEMNISATION\n   5.1 Modalités d'indemnisation\n   5.2 Vétusté et franchise\n   5.3 Recours\n\nDocument de 45 pages\nVersion approuvée par l'ACPR"
    },
    {
      id: 6,
      nom: "Devis garage Dupont",
      type: "PDF",
      taille: "1.1 MB",
      dateUpload: "20/03/2024",
      statut: "En attente",
      couleurStatut: "bg-orange-100 text-orange-800",
      icon: "Car",
      preview: "DEVIS DE RÉPARATION\n\nGARAGE DUPONT & FILS\n123 Rue de la Mécanique\n75010 Paris\nTél: 01 42 XX XX XX\nSIRET: 12345678901234\n\nCLIENT\nNom: DUPONT Martin\nVéhicule: Peugeot 308 - AB-123-CD\nDate: 20/03/2024\n\nTRAVAUX À EFFECTUER\n\nCARROSSERIE\n- Remplacement pare-chocs avant... 450,00 €\n- Remplacement phare avant gauche... 320,00 €\n- Débosselage aile avant gauche... 280,00 €\n- Peinture complète aile avant... 380,00 €\n- Remplacement grille calandre... 150,00 €\n\nMAIN D'ŒUVRE\n- Démontage/remontage... 15h x 65€... 975,00 €\n- Préparation et peinture... 8h x 70€... 560,00 €\n\nSOUS-TOTAL HT: 3 115,00 €\nTVA 20%: 623,00 €\nTOTAL TTC: 3 738,00 €\n\nValidité du devis: 30 jours\nDélai de réparation: 5 jours ouvrés"
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

  const getDocumentIcon = (iconName: string) => {
    const icons = {
      FileCheck,
      Camera,
      FileText,
      Shield,
      Car
    };
    const IconComponent = icons[iconName as keyof typeof icons] || FileText;
    return <IconComponent className="w-3 h-3 text-blue-600" />;
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
                        {getDocumentIcon(doc.icon || 'FileText')}
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
                <div className="h-full bg-white rounded-lg border overflow-hidden">
                  <div className="bg-gray-100 px-4 py-2 border-b flex items-center justify-between">
                    <div className="flex items-center space-x-2">
                      <div className="w-5 h-5 bg-blue-100 rounded flex items-center justify-center">
                        {getDocumentIcon(selectedDocument.icon || 'FileText')}
                      </div>
                      <span className="text-sm font-medium text-gray-700">
                        {selectedDocument.nom}
                      </span>
                    </div>
                    <div className="text-xs text-gray-500">
                      {selectedDocument.type} • {selectedDocument.taille}
                    </div>
                  </div>
                  <div className="p-4 h-full overflow-y-auto bg-white">
                    <div className="font-mono text-sm leading-relaxed whitespace-pre-line text-gray-800">
                      {selectedDocument.preview}
                    </div>
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
