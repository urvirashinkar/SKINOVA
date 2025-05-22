import { SkinAnalysis } from '@/lib/data';

interface SkinReportCardProps {
  analysis: SkinAnalysis;
}

const SkinReportCard: React.FC<SkinReportCardProps> = ({ analysis }) => {
  const metrics = [
    { 
      title: 'Skin Type', 
      value: analysis.skinType.value, 
      percentage: analysis.skinType.percentage, 
      description: analysis.skinType.description 
    },
    { 
      title: 'Acne Concerns', 
      value: analysis.acneConcerns.value, 
      percentage: analysis.acneConcerns.percentage, 
      description: analysis.acneConcerns.description 
    },
    { 
      title: 'Hyperpigmentation', 
      value: analysis.hyperpigmentation.value, 
      percentage: analysis.hyperpigmentation.percentage, 
      description: analysis.hyperpigmentation.description 
    },
    { 
      title: 'Hydration Level', 
      value: analysis.hydrationLevel.value, 
      percentage: analysis.hydrationLevel.percentage, 
      description: analysis.hydrationLevel.description 
    },
    { 
      title: 'Fine Lines & Texture', 
      value: analysis.fineLines.value, 
      percentage: analysis.fineLines.percentage, 
      description: analysis.fineLines.description 
    },
  ];

  return (
    <div className="space-y-6">
      <h2 className="text-2xl font-medium font-poppins text-gray-900 mb-4">Analysis Details</h2>
      
      <div className="space-y-4">
        {metrics.map((metric, index) => (
          <div key={index}>
            <h3 className="text-lg font-medium text-olive mb-2">{metric.title}</h3>
            <div className="flex items-center">
              <div className="w-full bg-gray-200 rounded-full h-2.5">
                <div 
                  className="bg-primary h-2.5 rounded-full" 
                  style={{ width: `${metric.percentage}%` }}
                ></div>
              </div>
              <span className="ml-4 font-medium text-gray-800">{metric.value}</span>
            </div>
            <p className="text-sm text-gray-600 mt-1">
              {metric.description}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default SkinReportCard;
