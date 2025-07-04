
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Link } from "react-router-dom";
import { Car, FileText, TrendingUp } from "lucide-react";

const Index = () => {
  return (
    <div className="min-h-screen flex items-center justify-center bg-background">
      <div className="text-center space-y-8 max-w-4xl mx-auto p-6">
        <div>
          <h1 className="text-4xl font-bold mb-4">Gestion des Sinistres Automobiles</h1>
          <p className="text-xl text-muted-foreground">
            Plateforme de suivi et d'analyse des dossiers sinistres
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-12">
          <Card className="hover:shadow-lg transition-shadow">
            <CardHeader>
              <CardTitle className="flex items-center">
                <FileText className="w-6 h-6 mr-2 text-blue-600" />
                Dossiers
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-sm text-muted-foreground mb-4">
                Consultez et gérez vos dossiers sinistres
              </p>
              <Link to="/sinistre">
                <Button className="w-full">
                  Voir un dossier
                </Button>
              </Link>
            </CardContent>
          </Card>

          <Card className="hover:shadow-lg transition-shadow">
            <CardHeader>
              <CardTitle className="flex items-center">
                <TrendingUp className="w-6 h-6 mr-2 text-green-600" />
                Analytics
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-sm text-muted-foreground mb-4">
                Analysez les performances et tendances
              </p>
              <Button variant="outline" className="w-full">
                Bientôt disponible
              </Button>
            </CardContent>
          </Card>

          <Card className="hover:shadow-lg transition-shadow">
            <CardHeader>
              <CardTitle className="flex items-center">
                <Car className="w-6 h-6 mr-2 text-purple-600" />
                Véhicules
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-sm text-muted-foreground mb-4">
                Base de données des véhicules assurés
              </p>
              <Button variant="outline" className="w-full">
                Bientôt disponible
              </Button>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default Index;
