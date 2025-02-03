import { useState } from "react";
import Tabs from "./Tabs";
import Analytics from "./Analytics";
import MoodList from "./MoodList";

export default function MoodTracker() {
    const [moodEntries, setMoodEntries] = useState([]);
    const [selectedMood, setSelectedMood] = useState('');
    const [deletedEntries, setDeletedEntries] = useState([]);
    const [activeTab, setActiveTab] = useState('list');

    const moods = [
        { emoji: '😊', text: 'Happy' },
        { emoji: '😒', text: 'Meh' },
        { emoji: '😢', text: 'Sad' }
    ];

    const handleMoodSelect = (e) => {
        setSelectedMood(e.target.value);
    };

    const addMoodEntry = () => {
        if (selectedMood) {
            const now = new Date();
            const formattedDate = `${now.toLocaleDateString()} ${now.toLocaleTimeString()}`;
            const selectedMoodObj = moods.find(mood => mood.emoji === selectedMood);

            const newEntry = {
                id: Date.now(),
                date: formattedDate,
                emoji: selectedMoodObj.emoji,
                text: selectedMoodObj.text
            };

            setMoodEntries([newEntry, ...moodEntries]);
            setSelectedMood('');
        }
    };

    const deleteMoodEntry = (entry) => {
        setMoodEntries(moodEntries.filter(e => e.id !== entry.id));
        setDeletedEntries([entry, ...deletedEntries]);
    };

    const undoDelete = () => {
        if (deletedEntries.length > 0) {
            const [lastDeleted, ...remainingDeleted] = deletedEntries;
            setMoodEntries([lastDeleted, ...moodEntries]);
            setDeletedEntries(remainingDeleted);
        }
    };

    const clearMoods = () => {
        setDeletedEntries([...moodEntries, ...deletedEntries]);
        setMoodEntries([]);
    };

    return (
        <div className="bg-blue-200 min-h-screen flex items-center justify-center p-6">
            <div className="max-w-md w-full p-6 bg-white rounded-lg shadow-lg">
                <h1 className="text-2xl font-bold mb-6 text-center text-gray-800">Mood Tracker</h1>

                <div className="mb-6">
                    <div className="flex gap-2">
                        <select
                            value={selectedMood}
                            onChange={handleMoodSelect}
                            className="flex-1 p-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                        >
                            <option value="">Select a mood</option>
                            {moods.map(mood => (
                                <option key={mood.text} value={mood.emoji}>
                                    {mood.emoji} {mood.text}
                                </option>
                            ))}
                        </select>

                        <button
                            onClick={addMoodEntry}
                            disabled={!selectedMood}
                            className="px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 disabled:bg-gray-300 disabled:cursor-not-allowed transition-colors"
                        >
                            Add
                        </button>
                    </div>
                </div>

                <Tabs activeTab={activeTab} setActiveTab={setActiveTab} />

                {activeTab === 'list' ? (
                    <MoodList
                        moodEntries={moodEntries}
                        onDelete={deleteMoodEntry}
                        onUndo={deletedEntries.length > 0 ? undoDelete : null}
                        clearMoods={clearMoods}
                    />
                ) : (
                    <Analytics />
                )}
            </div>
        </div>
    );
}