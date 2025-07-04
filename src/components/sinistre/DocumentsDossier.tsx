
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { FileText, Download, Eye, Upload, Calendar } from "lucide-react";

export const DocumentsDossier = () => {
  const documents = [
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
      nom: "Devis garage Dupont",
      type: "PDF",
      taille: "1.1 MB",
      dateUpload: "20/03/2024",
      statut: "En attente",
      couleurStatut: "bg-orange-100 text-orange-800"
    },
    {
      id: 5,
      nom: "Devis garage Martin",
      type: "PDF",
      taille: "0.8 MB",
      dateUpload: "20/03/2024",
      statut: "En attente",
      couleurStatut: "bg-orange-100 text-orange-800"
    }
  ];

  return (
    <div className="space-y-6">
      {/* Section Upload */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center">
            <Upload className="w-5 h-5 mr-2 text-blue-600" />
            Ajouter un document
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="border-2 border-dashed border-gray-300 rounded-lg p-8 text-center hover:border-gray-400 transition-colors">
            <Upload className="w-12 h-12 text-gray-400 mx-auto mb-4" />
            <p className="text-gray-600 mb-2">Glissez-déposez vos fichiers ici ou</p>
            <Button variant="outline">Parcourir les fichiers</Button>
          </div>
        </CardContent>
      </Card>

      {/* Liste des documents */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center">
            <FileText className="w-5 h-5 mr-2 text-purple-600" />
            Documents du dossier
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            {documents.map((doc) => (
              <div key={doc.id} className="flex items-center justify-between p-4 border rounded-lg hover:bg-gray-50 transition-colors">
                <div className="flex items-center space-x-4">
                  <div className="w-10 h-10 bg-blue-100 rounded-lg flex items-center justify-center">
                    <FileText className="w-5 h-5 text-blue-600" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900">{doc.nom}</h4>
                    <div className="flex items-center space-x-4 text-sm text-gray-600">
                      <span>{doc.type} • {doc.taille}</span>
                      <div className="flex items-center">
                        <Calendar className="w-3 h-3 mr-1" />
                        {doc.dateUpload}
                      </div>
                    </div>
                  </div>
                </div>
                <div className="flex items-center space-x-3">
                  <Badge className={doc.couleurStatut} variant="outline">
                    {doc.statut}
                  </Badge>
                  <div className="flex space-x-1">
                    <Button size="sm" variant="ghost">
                      <Eye className="w-4 h-4" />
                    </Button>
                    <Button size="sm" variant="ghost">
                      <Download className="w-4 h-4" />
                    </Button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>
    </div>
  );
};
