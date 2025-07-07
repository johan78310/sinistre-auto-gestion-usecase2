import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { ArrowRight, Phone, Mail, FileText, Clock } from "lucide-react";

export const NextBestActions = () => {
  const actions = [
    {
      id: 1,
      title: "Faire un mail à l'assuré",
      description: "Envoyer le rapport d'expertise finalisé",
      priority: "high",
      icon: Mail,
      estimatedTime: "2 min"
    },
    {
      id: 2,
      title: "Appeler l'assuré",
      description: "Point de situation sur le dossier",
      priority: "medium",
      icon: Phone,
      estimatedTime: "10 min"
    },
    {
      id: 3,
      title: "Relancer l'expert",
      description: "Devis en attente depuis 2 jours",
      priority: "low",
      icon: FileText,
      estimatedTime: "5 min"
    }
  ];

  const getPriorityColor = (priority: string) => {
    switch (priority) {
      case "high":
        return "bg-red-100 text-red-800 border-red-200";
      case "medium":
        return "bg-orange-100 text-orange-800 border-orange-200";
      case "low":
        return "bg-green-100 text-green-800 border-green-200";
      default:
        return "bg-gray-100 text-gray-800 border-gray-200";
    }
  };

  const getPriorityLabel = (priority: string) => {
    switch (priority) {
      case "high":
        return "Urgent";
      case "medium":
        return "Moyen";
      case "low":
        return "Faible";
      default:
        return "Normal";
    }
  };

  return (
    <Card>
      <CardHeader>
        <CardTitle className="flex items-center">
          <ArrowRight className="w-5 h-5 mr-2 text-indigo-600" />
          Prochaines Actions
        </CardTitle>
      </CardHeader>
      <CardContent>
        <div className="space-y-4">
          {actions.map((action) => {
            const IconComponent = action.icon;
            return (
              <div key={action.id} className="border rounded-lg p-4 hover:bg-gray-50 transition-colors">
                <div className="flex items-start justify-between">
                  <div className="flex items-start space-x-3 flex-1">
                    <div className="w-8 h-8 bg-indigo-100 rounded-full flex items-center justify-center">
                      <IconComponent className="w-4 h-4 text-indigo-600" />
                    </div>
                    <div className="flex-1 min-w-0">
                      <h4 className="text-sm font-semibold text-gray-900 mb-1">
                        {action.title}
                      </h4>
                      <p className="text-sm text-gray-600 mb-2">
                        {action.description}
                      </p>
                      <div className="flex items-center space-x-2">
                        <Badge 
                          className={`text-xs ${getPriorityColor(action.priority)}`}
                          variant="outline"
                        >
                          {getPriorityLabel(action.priority)}
                        </Badge>
                        <div className="flex items-center text-xs text-gray-500">
                          <Clock className="w-3 h-3 mr-1" />
                          {action.estimatedTime}
                        </div>
                      </div>
                    </div>
                  </div>
                  <Button size="sm" variant="outline" className="ml-2">
                    Faire
                  </Button>
                </div>
              </div>
            );
          })}
        </div>
      </CardContent>
    </Card>
  );
};
