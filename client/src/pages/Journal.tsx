import { useState } from 'react';
import JournalEntry from '@/components/JournalEntry';
import { journalEntriesData, skinTips } from '@/lib/data';

const Journal: React.FC = () => {
  const [entries, setEntries] = useState(journalEntriesData);
  const [selectedMood, setSelectedMood] = useState<string | null>(null);
  const [showAllEntries, setShowAllEntries] = useState(false);
  
  const handleMoodSelection = (mood: string) => {
    setSelectedMood(mood === selectedMood ? null : mood);
  };
  
  const handleDeleteEntry = (id: number) => {
    setEntries(entries.filter(entry => entry.id !== id));
  };
  
  const displayedEntries = showAllEntries ? entries : entries.slice(0, 2);
  
  // Get today's date in YYYY-MM-DD format for the date input default value
  const today = new Date().toISOString().split('T')[0];

  return (
    <div className="max-w-4xl mx-auto">
      <div className="text-center mb-10">
        <h1 className="text-3xl font-semibold font-poppins mb-3 text-gray-900">Skin Journal</h1>
        <p className="text-gray-600 max-w-2xl mx-auto">Track your skin's progress over time and note how it responds to your new routine.</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-10">
        <div className="col-span-1 md:col-span-2 bg-white p-6 rounded-xl shadow-md border border-primary/20">
          <h2 className="text-xl font-medium font-poppins text-gray-900 mb-4">New Journal Entry</h2>
          
          <div className="mb-4">
            <label className="block text-gray-700 text-sm font-medium mb-2" htmlFor="entry-date">Date</label>
            <input 
              type="date" 
              id="entry-date" 
              defaultValue={today}
              className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent"
            />
          </div>
          
          <div className="mb-4">
            <label className="block text-gray-700 text-sm font-medium mb-2">How's your skin feeling today?</label>
            <div className="flex space-x-4 mb-3">
              <button 
                className={`mood-btn p-2 rounded-full transition-colors ${selectedMood === 'sad' ? 'bg-primary/20' : 'hover:bg-primary/10'}`}
                onClick={() => handleMoodSelection('sad')}
              >
                <i className={`fas fa-sad-tear text-2xl ${selectedMood === 'sad' ? 'text-skin' : 'text-gray-400'}`}></i>
              </button>
              <button 
                className={`mood-btn p-2 rounded-full transition-colors ${selectedMood === 'neutral' ? 'bg-primary/20' : 'hover:bg-primary/10'}`}
                onClick={() => handleMoodSelection('neutral')}
              >
                <i className={`fas fa-meh text-2xl ${selectedMood === 'neutral' ? 'text-skin' : 'text-gray-400'}`}></i>
              </button>
              <button 
                className={`mood-btn p-2 rounded-full transition-colors ${selectedMood === 'happy' ? 'bg-primary/20' : 'hover:bg-primary/10'}`}
                onClick={() => handleMoodSelection('happy')}
              >
                <i className={`fas fa-smile text-2xl ${selectedMood === 'happy' ? 'text-skin' : 'text-gray-400'}`}></i>
              </button>
              <button 
                className={`mood-btn p-2 rounded-full transition-colors ${selectedMood === 'amazing' ? 'bg-primary/20' : 'hover:bg-primary/10'}`}
                onClick={() => handleMoodSelection('amazing')}
              >
                <i className={`fas fa-grin-stars text-2xl ${selectedMood === 'amazing' ? 'text-skin' : 'text-gray-400'}`}></i>
              </button>
            </div>
          </div>
          
          <div className="mb-4">
            <label className="block text-gray-700 text-sm font-medium mb-2" htmlFor="journal-notes">Notes</label>
            <textarea 
              id="journal-notes" 
              rows={4} 
              className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent" 
              placeholder="How's your skin feeling today? Any changes? Products used?"
            ></textarea>
          </div>
          
          <div className="mb-4">
            <label className="block text-gray-700 text-sm font-medium mb-2">Add a photo (optional)</label>
            <div className="border-2 border-dashed border-gray-300 rounded-lg p-6 text-center hover:bg-gray-50 transition-colors cursor-pointer">
              <i className="fas fa-camera text-gray-400 text-2xl mb-2"></i>
              <p className="text-gray-500 text-sm">Click to upload a photo of your skin</p>
            </div>
          </div>
          
          <div className="mt-6">
            <button className="bg-primary hover:bg-olive text-white font-medium py-2 px-6 rounded-lg transition-colors shadow-sm hover:shadow">
              Save Entry
            </button>
          </div>
        </div>

        <div className="bg-white p-6 rounded-xl shadow-md border border-primary/20">
          <h2 className="text-xl font-medium font-poppins text-gray-900 mb-4">Progress Tracker</h2>
          
          <img 
            src="https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&h=400" 
            alt="Skin progress tracker visualization" 
            className="w-full h-auto rounded-lg mb-4"
          />
          
          <div className="space-y-2 text-sm text-gray-600">
            <div className="flex items-center">
              <span className="w-3 h-3 rounded-full bg-primary mr-2"></span>
              <span>Hydration Level</span>
            </div>
            <div className="flex items-center">
              <span className="w-3 h-3 rounded-full bg-olive mr-2"></span>
              <span>Texture Improvement</span>
            </div>
            <div className="flex items-center">
              <span className="w-3 h-3 rounded-full bg-success mr-2"></span>
              <span>Overall Satisfaction</span>
            </div>
          </div>
        </div>
      </div>

      <div className="mb-10">
        <h2 className="text-xl font-medium font-poppins text-gray-900 mb-4">Past Entries</h2>
        
        {displayedEntries.map(entry => (
          <JournalEntry 
            key={entry.id} 
            entry={entry} 
            onDelete={handleDeleteEntry}
          />
        ))}
        
        {entries.length > 2 && (
          <div className="text-center mt-6">
            <button 
              className="text-olive hover:text-primary inline-flex items-center"
              onClick={() => setShowAllEntries(!showAllEntries)}
            >
              <span>{showAllEntries ? 'Show Less' : 'View More Entries'}</span>
              <i className={`fas fa-chevron-${showAllEntries ? 'up' : 'down'} ml-2`}></i>
            </button>
          </div>
        )}
      </div>
      
      <div className="bg-primary/10 p-6 rounded-xl">
        <h3 className="font-poppins font-medium text-xl mb-3 text-gray-900">Skin Tips</h3>
        <ul className="space-y-2 text-gray-700">
          {skinTips.map((tip, index) => (
            <li key={index} className="flex items-start">
              <i className="fas fa-leaf text-success mt-1 mr-3"></i>
              <span>{tip}</span>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Journal;
