
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { AlertTriangle, CheckCircle, Clock } from "lucide-react";

interface CriticalityIndicatorProps {
  level: "green" | "orange" | "red";
}

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
          icon: Clock,
          color: "text-orange-600",
          bgColor: "bg-orange-50",
          borderColor: "border-orange-200",
          emoji: "🟠",
          title: "Attention",
          description: "Risque détecté (retard, problème météo, garage saturé...)"
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
          <IconComponent className={`w-5 h-5 mr-2 ${config.color}`} />
          Niveau de Criticité
        </CardTitle>
      </CardHeader>
      <CardContent>
        <div className="space-y-2">
          <h3 className={`text-xl font-bold ${config.color}`}>
            {config.title}
          </h3>
          <p className="text-gray-700">
            {config.description}
          </p>
        </div>
      </CardContent>
    </Card>
  );
};
