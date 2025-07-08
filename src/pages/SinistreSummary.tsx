import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { Header } from "@/components/layout/Header";
import { CriticalityIndicator } from "@/components/sinistre/CriticalityIndicator";
import { EventTimeline } from "@/components/sinistre/EventTimeline";
import { NextBestActions } from "@/components/sinistre/NextBestActions";
import { DossierChat } from "@/components/sinistre/DossierChat";
import { DocumentsDossier } from "@/components/sinistre/DocumentsDossier";
import { Car, User, FileText, Calendar, Megaphone, Home, ExternalLink, ChevronDown, ChevronRight, Users } from "lucide-react";

const SinistreSummary = () => {
  const [showNotifications, setShowNotifications] = useState(false);
  const [showFoyerSituation, setShowFoyerSituation] = useState(false);

  // Données d'exemple - à remplacer par des données réelles
  const dossierData = {
    numeroSinistre: "170492218073",
    numeroPortefeuille: "0006052544",
    dateOuverture: "06 janvier 2025",
    assure: {
      nom: "Marc DUBOIS",
      age: "50 ans - 28/06/1975",
      telephone: "06 55 23 47 00",
      email: "marc.dubois@email.com",
      adresse: "7 avenue des Coquelicots - Montigny le Bretonneux 78300"
    },
    vehicule: {
      marque: "Peugeot",
      modele: "308 - 1.6 BlueHDi 120ch – Berline",
      immatriculation: "AB-123-CD",
      annee: "2020"
    },
    criticite: "orange" as const,
    montantEstime: "4 500 €"
  };

  const foyerData = [
    { 
      category: "Auto/Moto", 
      bold: true, 
      contrats: "2", 
      opportunites: "-", 
      dossiers: "-",
      contratsIcon: { color: "bg-green-500", number: "2" }
    },
    { 
      category: "Habitation", 
      bold: false, 
      contrats: "1", 
      opportunites: "-", 
      dossiers: "1",
      dossiersIcon: { color: "bg-yellow-500", number: "1" }
    },
    { 
      category: "Prév. & dépendance", 
      bold: true, 
      contrats: "-", 
      opportunites: "2", 
      dossiers: "-",
      contratsIcon: { color: "bg-green-500", number: "1" }
    },
    { 
      category: "Santé", 
      bold: false, 
      contrats: "1", 
      opportunites: "-", 
      dossiers: "-"
    },
    { 
      category: "Banque - Crédit", 
      bold: false, 
      contrats: "-", 
      opportunites: "1", 
      dossiers: "-"
    },
    { 
      category: "Epargne & retraite", 
      bold: false, 
      contrats: "1", 
      opportunites: "-", 
      dossiers: "-"
    },
    { 
      category: "Famille - Loisir", 
      bold: false, 
      contrats: "-", 
      opportunites: "-", 
      dossiers: "-"
    },
    { 
      category: "Autre", 
      bold: true, 
      contrats: "-", 
      opportunites: "-", 
      dossiers: "-",
      opportunitesIcon: { color: "bg-orange-500", number: "1" }
    },
  ];

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
                  <p className="text-gray-600 text-sm mt-1">
                    N° Portefeuille {dossierData.numeroPortefeuille}
                  </p>
                </div>
                <Badge variant="outline" className="px-3 py-1">
                  <FileText className="w-4 h-4 mr-2" />
                  En cours
                </Badge>
              </div>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {/* Informations Assuré */}
                <div className="space-y-3">
                  <div className="flex items-center text-lg font-semibold text-gray-800">
                    <User className="w-5 h-5 mr-2 text-blue-600" />
                    Assuré
                  </div>
                  <div className="space-y-2 text-sm">
                    <p><span className="font-medium">Nom:</span> {dossierData.assure.nom}</p>
                    <p><span className="font-medium">Âge:</span> {dossierData.assure.age}</p>
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
                  </div>
                </div>

                {/* Autres Sinistres en cours */}
                <div className="space-y-3">
                  <div className="flex items-center text-lg font-semibold text-gray-800">
                    <Home className="w-5 h-5 mr-2 text-orange-600" />
                    Autres Sinistres en cours
                  </div>
                  <div className="space-y-2 text-sm">
                    <p><span className="font-medium">Sinistre habitation:</span> n°00000187879898</p>
                    <p><span className="font-medium">Survenu le:</span> 10/04/25</p>
                    <p><span className="font-medium">Dommages:</span> de type xyz</p>
                    <p><span className="font-medium">N° contrat:</span> 0000068772R5373</p>
                    <p><span className="font-medium">Assuré:</span> Marc DUBOIS</p>
                    <div className="flex flex-col gap-2 mt-3">
                      <Button 
                        variant="link" 
                        className="p-0 h-auto text-blue-600 hover:text-blue-800 justify-start"
                      >
                        <ExternalLink className="w-3 h-3 mr-1" />
                        Plus de détail
                      </Button>
                      <Button 
                        size="sm" 
                        variant="outline"
                        className="text-xs"
                      >
                        Afficher le sinistre
                      </Button>
                    </div>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Blocs Notifications et Situation du foyer côte à côte */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            {/* Bloc Notifications */}
            <Card>
              <CardHeader>
                <div className="flex items-center justify-between">
                  <CardTitle className="flex items-center text-lg font-semibold text-gray-800">
                    <Megaphone className="w-5 h-5 mr-2 text-purple-600" />
                    Notifications et Informations Client
                  </CardTitle>
                  <Button
                    variant="ghost"
                    size="sm"
                    onClick={() => setShowNotifications(!showNotifications)}
                    className="flex items-center gap-2"
                  >
                    {showNotifications ? (
                      <ChevronDown className="w-4 h-4" />
                    ) : (
                      <ChevronRight className="w-4 h-4" />
                    )}
                    {showNotifications ? "Masquer" : "Afficher"}
                  </Button>
                </div>
              </CardHeader>
              {showNotifications && (
                <CardContent>
                  <div className="space-y-2 text-sm">
                    <p className="flex items-center">
                      <span className="font-medium">Dernier avis client:</span> 
                      <span className="ml-1">5/5</span>
                      <div className="w-2 h-2 bg-green-500 rounded-full ml-2"></div>
                    </p>
                    <p><span className="font-medium">Connexion Espace client:</span> inconnu</p>
                    <p><span className="font-medium">Connexion App AXA Mobile:</span> inconnu</p>
                    <p><span className="font-medium">Dernière mise à jour:</span> 20/05/25 par Compagnie</p>
                    <p><span className="font-medium">Délégation CSE Sinistres:</span> oui</p>
                    <p><span className="font-medium">Option zéro papier activée:</span> 3 contrats</p>
                  </div>
                </CardContent>
              )}
            </Card>

            {/* Bloc Situation du foyer */}
            <Card>
              <CardHeader>
                <div className="flex items-center justify-between">
                  <CardTitle className="flex items-center text-lg font-semibold text-gray-800">
                    <Users className="w-5 h-5 mr-2 text-blue-600" />
                    Situation du foyer
                  </CardTitle>
                  <Button
                    variant="ghost"
                    size="sm"
                    onClick={() => setShowFoyerSituation(!showFoyerSituation)}
                    className="flex items-center gap-2"
                  >
                    {showFoyerSituation ? (
                      <ChevronDown className="w-4 h-4" />
                    ) : (
                      <ChevronRight className="w-4 h-4" />
                    )}
                    {showFoyerSituation ? "Masquer" : "Afficher"}
                  </Button>
                </div>
              </CardHeader>
              {showFoyerSituation && (
                <CardContent>
                  <div className="grid grid-cols-1 xl:grid-cols-3 gap-6">
                    {/* Tableau */}
                    <div className="xl:col-span-2">
                      <Table>
                        <TableHeader>
                          <TableRow className="h-8">
                            <TableHead className="w-1/2 py-2"></TableHead>
                            <TableHead className="text-center py-2">Contrats</TableHead>
                            <TableHead className="text-center py-2">Opportunités</TableHead>
                            <TableHead className="text-center py-2">Dossiers</TableHead>
                          </TableRow>
                        </TableHeader>
                        <TableBody>
                          {foyerData.map((row, index) => (
                            <TableRow key={index} className="h-8">
                              <TableCell className={`py-1 ${row.bold ? "font-bold" : ""}`}>
                                {row.category}
                              </TableCell>
                              <TableCell className="text-center py-1">
                                <div className="flex items-center justify-center gap-2">
                                  {!row.contratsIcon && row.contrats}
                                  {row.contratsIcon && (
                                    <div className={`w-5 h-5 ${row.contratsIcon.color} rounded-full flex items-center justify-center text-white text-xs font-bold`}>
                                      {row.contratsIcon.number}
                                    </div>
                                  )}
                                </div>
                              </TableCell>
                              <TableCell className="text-center py-1">
                                <div className="flex items-center justify-center gap-2">
                                  {!row.opportunitesIcon && row.opportunites}
                                  {row.opportunitesIcon && (
                                    <div className={`w-5 h-5 ${row.opportunitesIcon.color} rounded-full flex items-center justify-center text-white text-xs font-bold`}>
                                      {row.opportunitesIcon.number}
                                    </div>
                                  )}
                                </div>
                              </TableCell>
                              <TableCell className="text-center py-1">
                                <div className="flex items-center justify-center gap-2">
                                  {!row.dossiersIcon && row.dossiers}
                                  {row.dossiersIcon && (
                                    <div className={`w-5 h-5 ${row.dossiersIcon.color} rounded-full flex items-center justify-center text-white text-xs font-bold`}>
                                      {row.dossiersIcon.number}
                                    </div>
                                  )}
                                </div>
                              </TableCell>
                            </TableRow>
                          ))}
                        </TableBody>
                      </Table>
                    </div>

                    {/* Informations financières */}
                    <div className="space-y-3 text-sm">
                      <div className="space-y-2">
                        <p><span className="font-medium">Cotisations -</span> 1689 €</p>
                        <p><span className="font-medium">En cours -</span> 0€</p>
                        <p><span className="font-medium">Préqualification Crédit -</span> CP</p>
                        <p><span className="font-medium">Solde -</span> 0 €</p>
                      </div>
                      <div className="pt-3 border-t">
                        <p className="text-xs text-gray-600 mb-2">Accès consultation</p>
                        <Button 
                          variant="link" 
                          className="p-0 h-auto text-blue-600 hover:text-blue-800 text-xs"
                        >
                          <ExternalLink className="w-3 h-3 mr-1" />
                          Vision consolidée
                        </Button>
                      </div>
                    </div>
                  </div>
                </CardContent>
              )}
            </Card>
          </div>

          {/* Système d'onglets */}
          <Tabs defaultValue="synthese" className="w-full">
            <TabsList className="grid w-full grid-cols-2">
              <TabsTrigger value="synthese">Synthèse Dossier</TabsTrigger>
              <TabsTrigger value="documents">Documents du dossier</TabsTrigger>
            </TabsList>
            
            <TabsContent value="synthese" className="mt-6">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-6">
                <div className="space-y-6">
                  <CriticalityIndicator level={dossierData.criticite} />
                  <EventTimeline />
                </div>
                <div>
                  <DossierChat />
                </div>
              </div>
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
