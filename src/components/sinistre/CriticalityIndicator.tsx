
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { AlertTriangle, CheckCircle } from "lucide-react";

interface CriticalityIndicatorProps {
  level: "green" | "orange" | "red";
}

const TrafficLight = ({ activeColor }: { activeColor: "green" | "orange" | "red" }) => {
  return (
    <div className="flex items-center space-x-1 bg-gray-800 rounded-lg p-2">
      <div className={`w-3 h-3 rounded-full ${activeColor === 'red' ? 'bg-red-500' : 'bg-gray-600'}`}></div>
      <div className={`w-3 h-3 rounded-full ${activeColor === 'orange' ? 'bg-orange-500' : 'bg-gray-600'}`}></div>
      <div className={`w-3 h-3 rounded-full ${activeColor === 'green' ? 'bg-green-500' : 'bg-gray-600'}`}></div>
    </div>
  );
};

export const CriticalityIndicator = ({ level }: CriticalityIndicatorProps) => {
  const getIndicatorConfig = () => {
    switch (level) {
      case "green":
        return {
          icon: CheckCircle,
          color: "text-green-600",
          bgColor: "bg-green-50",
          borderColor: "border-green-200",
          emoji: "🟢",
          title: "Tout va bien",
          description: "Pas d'action nécessaire"
        };
      case "orange":
        return {
          icon: null,
          color: "text-orange-600",
          bgColor: "bg-orange-50",
          borderColor: "border-orange-200",
          emoji: "",
          title: "Risque détecté",
          description: "Plusieurs manquements ont été identifiés entre les délais d'expertises et la fin des réparations"
        };
      case "red":
        return {
          icon: AlertTriangle,
          color: "text-red-600",
          bgColor: "bg-red-50",
          borderColor: "border-red-200",
          emoji: "🔴",
          title: "Urgent",
          description: "Intervention immédiate requise"
        };
    }
  };

  const config = getIndicatorConfig();
  const IconComponent = config.icon;

  return (
    <Card className={`${config.bgColor} ${config.borderColor} border-2`}>
      <CardHeader className="pb-3">
        <CardTitle className="flex items-center text-lg">
          <span className="text-2xl mr-3">{config.emoji}</span>
          {level === "orange" ? (
            <TrafficLight activeColor="orange" />
          ) : (
            IconComponent && <IconComponent className={`w-5 h-5 mr-2 ${config.color}`} />
          )}
          <span className="ml-2">Niveau de Criticité</span>
        </CardTitle>
      </CardHeader>
      <CardContent>
        <div className="space-y-2">
          {level === "orange" ? (
            <div className="flex items-center space-x-3">
              <TrafficLight activeColor="orange" />
              <h3 className={`text-xl font-bold ${config.color}`}>
                {config.title}
              </h3>
            </div>
          ) : (
            <h3 className={`text-xl font-bold ${config.color}`}>
              {config.title}
            </h3>
          )}
          <p className="text-gray-700">
            {config.description}
          </p>
        </div>
      </CardContent>
    </Card>
  );
};
