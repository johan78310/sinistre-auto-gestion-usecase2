
import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { AlertTriangle, CheckCircle } from "lucide-react";

interface CriticalityIndicatorProps {
  level: "green" | "orange" | "red";
}

type DeclinaisonType = "orange" | "green" | "red";

const TrafficLight = ({ activeColor, onColorClick }: { 
  activeColor: DeclinaisonType; 
  onColorClick: (color: DeclinaisonType) => void;
}) => {
  return (
    <div className="flex items-center space-x-2">
      <div 
        className={`w-4 h-4 rounded-full border-2 cursor-pointer transition-all hover:scale-110 ${
          activeColor === 'red' ? 'bg-red-500 border-red-500' : 'bg-gray-100 border-gray-300 hover:border-red-300'
        }`}
        onClick={() => onColorClick('red')}
      ></div>
      <div 
        className={`w-4 h-4 rounded-full border-2 cursor-pointer transition-all hover:scale-110 ${
          activeColor === 'orange' ? 'bg-orange-500 border-orange-500' : 'bg-gray-100 border-gray-300 hover:border-orange-300'
        }`}
        onClick={() => onColorClick('orange')}
      ></div>
      <div 
        className={`w-4 h-4 rounded-full border-2 cursor-pointer transition-all hover:scale-110 ${
          activeColor === 'green' ? 'bg-green-500 border-green-500' : 'bg-gray-100 border-gray-300 hover:border-green-300'
        }`}
        onClick={() => onColorClick('green')}
      ></div>
    </div>
  );
};

export const CriticalityIndicator = ({ level }: CriticalityIndicatorProps) => {
  const [activeDeclinaison, setActiveDeclinaison] = useState<DeclinaisonType>("orange");

  const getIndicatorConfig = (declinaison: DeclinaisonType) => {
    switch (declinaison) {
      case "green":
        return {
          icon: CheckCircle,
          color: "text-green-600",
          bgColor: "bg-green-50",
          borderColor: "border-green-200",
          title: "Pas de risque détecté",
          description: ""
        };
      case "orange":
        return {
          icon: null,
          color: "text-orange-600",
          bgColor: "bg-orange-50",
          borderColor: "border-orange-200",
          title: "Risque détecté",
          description: "Plusieurs manquements ont été identifiés entre les délais d'expertises et la fin des réparations"
        };
      case "red":
        return {
          icon: AlertTriangle,
          color: "text-red-600",
          bgColor: "bg-red-50",
          borderColor: "border-red-200",
          title: "Urgent",
          description: ""
        };
    }
  };

  const config = getIndicatorConfig(activeDeclinaison);
  const IconComponent = config.icon;

  const handleColorClick = (color: DeclinaisonType) => {
    setActiveDeclinaison(color);
  };

  return (
    <Card className={`${config.bgColor} ${config.borderColor} border-2`}>
      <CardHeader className="pb-3">
        <CardTitle className="flex items-center text-lg">
          {activeDeclinaison !== "orange" && IconComponent && <IconComponent className={`w-5 h-5 mr-2 ${config.color}`} />}
        </CardTitle>
      </CardHeader>
      <CardContent>
        <div className="space-y-2">
          <div className="flex items-center space-x-3">
            <h3 className={`text-xl font-bold ${config.color}`}>
              {config.title}
            </h3>
            <TrafficLight activeColor={activeDeclinaison} onColorClick={handleColorClick} />
          </div>
          {config.description && (
            <p className="text-gray-700">
              {config.description}
            </p>
          )}
        </div>
      </CardContent>
    </Card>
  );
};
