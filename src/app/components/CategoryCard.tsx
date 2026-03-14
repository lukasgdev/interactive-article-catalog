import { LucideIcon } from 'lucide-react';

interface CategoryCardProps {
  name: string;
  count: number;
  icon: LucideIcon;
  isSelected: boolean;
  onClick: () => void;
  color: string;
}

export function CategoryCard({ name, count, icon: Icon, isSelected, onClick, color }: CategoryCardProps) {
  return (
    <button
      onClick={onClick}
      className={`
        relative p-5 rounded-xl border-2 transition-all duration-300 text-left
        ${isSelected 
          ? 'bg-gradient-to-br from-blue-600 to-blue-700 border-blue-700 shadow-lg scale-105' 
          : 'bg-white border-gray-200 hover:border-gray-300 hover:shadow-md'
        }
      `}
    >
      <div className="flex items-start gap-4">
        <div className={`
          p-3 rounded-lg
          ${isSelected ? 'bg-blue-500' : 'bg-gray-100'}
        `}>
          <Icon className={`w-6 h-6 ${isSelected ? 'text-white' : 'text-gray-600'}`} />
        </div>
        
        <div className="flex-1 min-w-0">
          <h3 className={`font-semibold mb-1 ${isSelected ? 'text-white' : 'text-gray-900'}`}>
            {name}
          </h3>
          <p className={`text-sm ${isSelected ? 'text-blue-100' : 'text-gray-600'}`}>
            {count} {count === 1 ? 'artigo' : 'artigos'}
          </p>
        </div>

        {isSelected && (
          <div className="absolute top-3 right-3">
            <div className="w-2 h-2 bg-white rounded-full"></div>
          </div>
        )}
      </div>
    </button>
  );
}