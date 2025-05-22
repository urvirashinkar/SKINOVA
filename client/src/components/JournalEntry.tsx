import { JournalEntry as JournalEntryType } from '@/lib/data';

interface JournalEntryProps {
  entry: JournalEntryType;
  onEdit?: (id: number) => void;
  onDelete?: (id: number) => void;
}

const JournalEntry: React.FC<JournalEntryProps> = ({ entry, onEdit, onDelete }) => {
  const getMoodIcon = (mood: string) => {
    switch (mood) {
      case 'sad':
        return <i className="fas fa-sad-tear mr-2"></i>;
      case 'neutral':
        return <i className="fas fa-meh mr-2"></i>;
      case 'happy':
        return <i className="fas fa-smile mr-2"></i>;
      case 'amazing':
        return <i className="fas fa-grin-stars mr-2"></i>;
      default:
        return <i className="fas fa-meh mr-2"></i>;
    }
  };

  const getMoodText = (mood: string) => {
    switch (mood) {
      case 'sad':
        return 'Not Great';
      case 'neutral':
        return 'Neutral';
      case 'happy':
        return 'Feeling Good';
      case 'amazing':
        return 'Amazing';
      default:
        return 'Neutral';
    }
  };

  return (
    <div className="bg-white p-5 rounded-xl shadow-sm border border-primary/10 mb-4">
      <div className="flex justify-between items-start mb-3">
        <div>
          <h3 className="font-medium text-gray-900">{entry.date}</h3>
          <div className="flex items-center text-olive">
            {getMoodIcon(entry.mood)}
            <span>{getMoodText(entry.mood)}</span>
          </div>
        </div>
        <div className="flex space-x-2">
          {onEdit && (
            <button 
              className="text-gray-500 hover:text-olive"
              onClick={() => onEdit(entry.id)}
              aria-label="Edit entry"
            >
              <i className="fas fa-edit"></i>
            </button>
          )}
          {onDelete && (
            <button 
              className="text-gray-500 hover:text-error"
              onClick={() => onDelete(entry.id)}
              aria-label="Delete entry"
            >
              <i className="fas fa-trash-alt"></i>
            </button>
          )}
        </div>
      </div>
      <p className="text-gray-600 text-sm">
        {entry.notes}
      </p>
      {entry.photoUrl && (
        <img 
          src={entry.photoUrl} 
          alt="Skin journal photo" 
          className="mt-3 rounded-lg w-full h-auto"
        />
      )}
    </div>
  );
};

export default JournalEntry;
