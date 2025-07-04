
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const Index = () => {
  return (
    <div className="min-h-screen flex items-center justify-center bg-background">
      <div className="text-center space-y-6">
        <h1 className="text-6xl font-bold text-gray-900">Solaris</h1>
        <Link to="/sinistre">
          <Button size="lg">
            Voir la synthèse Sinistre
          </Button>
        </Link>
      </div>
    </div>
  );
};

export default Index;
