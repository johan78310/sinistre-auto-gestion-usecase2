import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { Separator } from "@/components/ui/separator";
import { Header } from "@/components/layout/Header";
import { CriticalityIndicator } from "@/components/sinistre/CriticalityIndicator";
import { EventTimeline } from "@/components/sinistre/EventTimeline";
import { NextBestActions } from "@/components/sinistre/NextBestActions";
import { DossierChat } from "@/components/sinistre/DossierChat";
import { DocumentsDossier } from "@/components/sinistre/DocumentsDossier";
import { Car, User, FileText, Calendar, Megaphone, Home, ExternalLink, ChevronDown, ChevronRight, Users, Factory, BarChart3, FolderOpen, Paperclip } from "lucide-react";

const SinistreSummary = () => {
  const [showInfosSection, setShowInfosSection] = useState(false);
  const [activeSection, setActiveSection] = useState("synthese");

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
      contrats: "-", 
      opportunites: "-", 
      dossiers: "-",
      contratsIcon: { color: "bg-green-500", number: "2" }
    },
    { 
      category: "Habitation", 
      bold: false, 
      contrats: "-", 
      opportunites: "-", 
      dossiers: "-",
      dossiersIcon: { color: "bg-yellow-500", number: "1" }
    },
    { 
      category: "Prév. & dépendance", 
      bold: true, 
      contrats: "-", 
      opportunites: "-", 
      dossiers: "-",
      contratsIcon: { color: "bg-green-500", number: "1" }
    },
    { 
      category: "Santé", 
      bold: false, 
      contrats: "-", 
      opportunites: "-", 
      dossiers: "-"
    },
    { 
      category: "Banque - Crédit", 
      bold: false, 
      contrats: "-", 
      opportunites: "-", 
      dossiers: "-"
    },
    { 
      category: "Epargne & retraite", 
      bold: false, 
      contrats: "-", 
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

  const sections = [
    {
      id: "synthese",
      title: "Synthèse Dossier",
      description: "Vue d'ensemble du dossier avec timeline et actions",
      icon: BarChart3,
      color: "bg-blue-50 border-blue-200 hover:bg-blue-100",
      activeColor: "bg-blue-100 border-blue-300"
    },
    {
      id: "documents",
      title: "Documents du dossier",
      description: "Tous les documents liés au sinistre",
      icon: FolderOpen,
      color: "bg-green-50 border-green-200 hover:bg-green-100",
      activeColor: "bg-green-100 border-green-300"
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      
      <div className="p-6">
        <div className="max-w-7xl mx-auto space-y-6">
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
                    <p className="flex items-center">
                      <Paperclip className="w-4 h-4 mr-2 text-gray-600" />
                      <span className="font-medium">Pièces administratives :</span>
                      <span className="ml-1">0 pièce (0 pièce est cliquable)</span>
                    </p>
                  </div>
                </div>

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

          <Card>
            <CardHeader>
              <div className="flex items-center justify-between">
                <CardTitle className="flex items-center text-lg font-semibold text-gray-800">
                  <Users className="w-5 h-5 mr-2 text-blue-600" />
                  Notifications & relations client, situation du foyer
                </CardTitle>
                <Button
                  variant="ghost"
                  size="sm"
                  onClick={() => setShowInfosSection(!showInfosSection)}
                  className="flex items-center gap-2"
                >
                  {showInfosSection ? (
                    <ChevronDown className="w-4 h-4" />
                  ) : (
                    <ChevronRight className="w-4 h-4" />
                  )}
                  {showInfosSection ? "Masquer" : "Afficher"}
                </Button>
              </div>
            </CardHeader>
            {showInfosSection && (
              <CardContent>
                <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
                  <div className="space-y-3">
                    <h4 className="flex items-center font-medium text-gray-800 mb-3">
                      <Megaphone className="w-4 h-4 mr-2 text-purple-600" />
                      Notifications
                    </h4>
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
                      <p className="flex items-center">
                        <Paperclip className="w-4 h-4 mr-2 text-gray-600" />
                        <span className="font-medium">Pièces administratives :</span>
                        <span className="ml-1">0 pièce (0 pièce est cliquable)</span>
                      </p>
                    </div>
                  </div>

                  <div className="space-y-3">
                    <h4 className="font-medium text-gray-800 mb-3">Relations</h4>
                    <div className="space-y-2 text-sm">
                      <p><span className="font-medium">Foyer :</span> (0)</p>
                      <p>
                        <span className="font-medium">Décisionnel du Foyer :</span>
                        <span className="ml-1">(1) :</span>
                      </p>
                      <div className="mt-2">
                        <div>
                          <Button variant="link" className="p-0 h-auto text-blue-600 hover:text-blue-800 text-sm">
                            Suzanne LANDO
                          </Button>
                          <p className="text-sm">est l'affaire personnelle de M Marc Dubois</p>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="space-y-3">
                    <h4 className="font-medium text-gray-800 mb-3">Situation du foyer</h4>
                    <div className="space-y-4">
                      <div className="overflow-hidden">
                        <Table className="text-xs">
                          <TableHeader>
                            <TableRow className="h-6">
                              <TableHead className="py-1 text-xs"></TableHead>
                              <TableHead className="text-center py-1 text-xs">Contrats</TableHead>
                              <TableHead className="text-center py-1 text-xs">Opp.</TableHead>
                              <TableHead className="text-center py-1 text-xs">Doss.</TableHead>
                            </TableRow>
                          </TableHeader>
                          <TableBody>
                            {foyerData.map((row, index) => (
                              <TableRow key={index} className="h-6">
                                <TableCell className={`py-0.5 text-xs ${row.bold ? "font-bold" : ""}`}>
                                  {row.category.length > 15 ? row.category.substring(0, 15) + '...' : row.category}
                                </TableCell>
                                <TableCell className="text-center py-0.5">
                                  <div className="flex items-center justify-center">
                                    {!row.contratsIcon && <span className="text-xs">{row.contrats}</span>}
                                    {row.contratsIcon && (
                                      <div className={`w-4 h-4 ${row.contratsIcon.color} rounded-full flex items-center justify-center text-white text-xs font-bold`}>
                                        {row.contratsIcon.number}
                                      </div>
                                    )}
                                  </div>
                                </TableCell>
                                <TableCell className="text-center py-0.5">
                                  <div className="flex items-center justify-center">
                                    {!row.opportunitesIcon && <span className="text-xs">{row.opportunites}</span>}
                                    {row.opportunitesIcon && (
                                      <div className={`w-4 h-4 ${row.opportunitesIcon.color} rounded-full flex items-center justify-center text-white text-xs font-bold`}>
                                        {row.opportunitesIcon.number}
                                      </div>
                                    )}
                                  </div>
                                </TableCell>
                                <TableCell className="text-center py-0.5">
                                  <div className="flex items-center justify-center">
                                    {!row.dossiersIcon && <span className="text-xs">{row.dossiers}</span>}
                                    {row.dossiersIcon && (
                                      <div className={`w-4 h-4 ${row.dossiersIcon.color} rounded-full flex items-center justify-center text-white text-xs font-bold`}>
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

                      <div className="space-y-2 text-xs">
                        <p><span className="font-medium">Cotisations -</span> 1689 €</p>
                        <p><span className="font-medium">En cours -</span> -€</p>
                        <p><span className="font-medium">Préqualification Crédit -</span> CP</p>
                        <p><span className="font-medium">Solde -</span> - €</p>
                        <div className="pt-2 border-t">
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
                  </div>
                </div>
              </CardContent>
            )}
          </Card>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
            {sections.map((section) => {
              const IconComponent = section.icon;
              const isActive = activeSection === section.id;
              return (
                <Card 
                  key={section.id}
                  className={`cursor-pointer transition-all duration-200 ${
                    isActive ? section.activeColor : section.color
                  }`}
                  onClick={() => setActiveSection(section.id)}
                >
                  <CardContent className="p-6">
                    <div className="flex items-start space-x-4">
                      <div className={`p-3 rounded-lg ${isActive ? 'bg-white shadow-sm' : 'bg-white/50'}`}>
                        <IconComponent className={`w-6 h-6 ${
                          isActive ? 'text-blue-600' : 'text-gray-600'
                        }`} />
                      </div>
                      <div className="flex-1">
                        <h3 className={`font-semibold text-lg ${
                          isActive ? 'text-gray-900' : 'text-gray-700'
                        }`}>
                          {section.title}
                        </h3>
                        <p className={`text-sm mt-1 ${
                          isActive ? 'text-gray-600' : 'text-gray-500'
                        }`}>
                          {section.description}
                        </p>
                      </div>
                      {isActive && (
                        <div className="w-3 h-3 bg-blue-600 rounded-full"></div>
                      )}
                    </div>
                  </CardContent>
                </Card>
              );
            })}
          </div>
          
          {activeSection === "synthese" && (
            <div className="space-y-6">
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
            </div>
          )}
          
          {activeSection === "documents" && (
            <DocumentsDossier />
          )}
        </div>
      </div>
    </div>
  );
};

export default SinistreSummary;
