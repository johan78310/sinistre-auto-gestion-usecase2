
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Calendar, FileText, Wrench, Phone, CheckCircle, AlertTriangle, X } from "lucide-react";

export const EventTimeline = () => {
  const events = [
    {
      id: 1,
      date: "15/01/2025 09:30",
      title: "Ouverture du dossier",
      description: "Déclaration de sinistre reçue",
      icon: FileText,
      status: "completed",
      color: "bg-blue-500"
    },
    {
      id: 2,
      date: "18/02/2025 14:15",
      title: "Expertise programmée",
      description: "RDV fixé avec l'expert",
      icon: Calendar,
      status: "completed",
      color: "bg-green-500"
    },
    {
      id: 3,
      date: "25/02/2025 18:12",
      title: "Expertise annulée",
      description: "Carence du lésé",
      icon: X,
      status: "completed",
      color: "bg-red-500"
    },
    {
      id: 4,
      date: "05/03/2025 11:07",
      title: "Expertise programmée",
      description: "RDV fixé avec l'expert",
      icon: Calendar,
      status: "completed",
      color: "bg-green-500"
    },
    {
      id: 5,
      date: "06/04/2025 16:30",
      title: "Relance Expert",
      description: "Délai dépôt rapport dépassé",
      icon: AlertTriangle,
      status: "completed",
      color: "bg-orange-500"
    },
    {
      id: 6,
      date: "18/04/2025 10:00",
      title: "Expertise réalisée",
      description: "Rapport d'expertise validé",
      icon: CheckCircle,
      status: "completed",
      color: "bg-green-500"
    },
    {
      id: 7,
      date: "En cours",
      title: "Réparation",
      description: "Fin de réparations prévues le 23/04/2025",
      icon: Wrench,
      status: "in-progress",
      color: "bg-blue-500"
    }
  ];

  return (
    <Card>
      <CardHeader>
        <CardTitle className="flex items-center">
          <Calendar className="w-5 h-5 mr-2 text-purple-600" />
          Timeline des Événements
        </CardTitle>
      </CardHeader>
      <CardContent>
        <div className="space-y-4">
          {events.map((event, index) => {
            const IconComponent = event.icon;
            return (
              <div key={event.id} className="flex items-start space-x-4">
                <div className="flex flex-col items-center">
                  <div className={`w-10 h-10 rounded-full ${event.color} flex items-center justify-center`}>
                    <IconComponent className="w-5 h-5 text-white" />
                  </div>
                  {index < events.length - 1 && (
                    <div className="w-0.5 h-8 bg-gray-300 mt-2"></div>
                  )}
                </div>
                <div className="flex-1 min-w-0">
                  <div className="flex items-center justify-between">
                    <h4 className="text-sm font-semibold text-gray-900">
                      {event.title}
                    </h4>
                    <Badge 
                      variant={event.status === "completed" ? "default" : 
                              event.status === "in-progress" ? "secondary" : "outline"}
                      className="text-xs"
                    >
                      {event.status === "completed" ? "Terminé" :
                       event.status === "in-progress" ? "En cours" : "En attente"}
                    </Badge>
                  </div>
                  <p className="text-sm text-gray-600 mt-1">
                    {event.description}
                  </p>
                  <p className="text-xs text-gray-500 mt-1">
                    {event.date}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </CardContent>
    </Card>
  );
};
