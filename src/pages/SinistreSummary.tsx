import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Header } from "@/components/layout/Header";
import { CriticalityIndicator } from "@/components/sinistre/CriticalityIndicator";
import { EventTimeline } from "@/components/sinistre/EventTimeline";
import { NextBestActions } from "@/components/sinistre/NextBestActions";
import { DossierChat } from "@/components/sinistre/DossierChat";
import { DocumentsDossier } from "@/components/sinistre/DocumentsDossier";
import { Car, User, FileText, Calendar } from "lucide-react";

const SinistreSummary = () => {
  // Données d'exemple - à remplacer par des données réelles
  const dossierData = {
    numeroSinistre: "SIN-2024-001234",
    dateOuverture: "15/03/2024",
    assure: {
      nom: "Martin Dupont",
      telephone: "06 12 34 56 78",
      email: "martin.dupont@email.com",
      adresse: "123 Rue de la Paix, 75001 Paris"
    },
    vehicule: {
      marque: "Peugeot",
      modele: "308",
      immatriculation: "AB-123-CD",
      annee: "2020",
      couleur: "Bleu métallisé"
    },
    criticite: "orange" as const,
    montantEstime: "4 500 €"
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      
      <div className="p-6">
        <div className="max-w-7xl mx-auto space-y-6">
          {/* En-tête du dossier */}
          <Card>
            <CardHeader>
              <div className="flex items-center justify-between">
                <div>
                  <CardTitle className="text-2xl font-bold text-gray-900">
                    Dossier Sinistre #{dossierData.numeroSinistre}
                  </CardTitle>
                  <p className="text-gray-600 mt-1">
                    Ouvert le {dossierData.dateOuverture} • Montant estimé: {dossierData.montantEstime}
                  </p>
                </div>
                <Badge variant="outline" className="px-3 py-1">
                  <FileText className="w-4 h-4 mr-2" />
                  En cours
                </Badge>
              </div>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {/* Informations Assuré */}
                <div className="space-y-3">
                  <div className="flex items-center text-lg font-semibold text-gray-800">
                    <User className="w-5 h-5 mr-2 text-blue-600" />
                    Assuré
                  </div>
                  <div className="space-y-2 text-sm">
                    <p><span className="font-medium">Nom:</span> {dossierData.assure.nom}</p>
                    <p><span className="font-medium">Téléphone:</span> {dossierData.assure.telephone}</p>
                    <p><span className="font-medium">Email:</span> {dossierData.assure.email}</p>
                    <p><span className="font-medium">Adresse:</span> {dossierData.assure.adresse}</p>
                  </div>
                </div>

                {/* Informations Véhicule */}
                <div className="space-y-3">
                  <div className="flex items-center text-lg font-semibold text-gray-800">
                    <Car className="w-5 h-5 mr-2 text-green-600" />
                    Véhicule Sinistré
                  </div>
                  <div className="space-y-2 text-sm">
                    <p><span className="font-medium">Véhicule:</span> {dossierData.vehicule.marque} {dossierData.vehicule.modele}</p>
                    <p><span className="font-medium">Immatriculation:</span> {dossierData.vehicule.immatriculation}</p>
                    <p><span className="font-medium">Année:</span> {dossierData.vehicule.annee}</p>
                    <p><span className="font-medium">Couleur:</span> {dossierData.vehicule.couleur}</p>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Système d'onglets */}
          <Tabs defaultValue="synthese" className="w-full">
            <TabsList className="grid w-full grid-cols-2">
              <TabsTrigger value="synthese">Synthèse Dossier</TabsTrigger>
              <TabsTrigger value="documents">Documents du dossier</TabsTrigger>
            </TabsList>
            
            <TabsContent value="synthese" className="mt-6">
              {/* Zone principale - Deux colonnes */}
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-6">
                {/* Colonne de gauche */}
                <div className="space-y-6">
                  <CriticalityIndicator level={dossierData.criticite} />
                  <EventTimeline />
                </div>

                {/* Colonne de droite */}
                <div>
                  <DossierChat />
                </div>
              </div>

              {/* Prochaines actions - en bas de l'écran */}
              <NextBestActions />
            </TabsContent>
            
            <TabsContent value="documents" className="mt-6">
              <DocumentsDossier />
            </TabsContent>
          </Tabs>
        </div>
      </div>
    </div>
  );
};

export default SinistreSummary;
