export default function MoodList({ moodEntries, onDelete, onUndo, clearMoods }) {
    return (
        <div className="flex flex-col h-96"> {/* Fixed height container */}
            {moodEntries.length > 0 && (
                <div className="mb-4 flex gap-2">
                    <button
                        onClick={clearMoods}
                        className="flex-1 px-4 py-2 bg-red-500 text-white rounded-lg hover:bg-red-600 transition-colors"
                    >
                        Clear All
                    </button>
                    <button
                        onClick={onUndo}
                        disabled={!onUndo}
                        className="px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 disabled:bg-gray-300 disabled:cursor-not-allowed transition-colors"
                    >
                        Undo
                    </button>
                </div>
            )}

            <div className="space-y-3 overflow-y-auto pr-2">
                {
                    moodEntries.map(entry => (
                        <div
                            key={entry.id}
                            className="p-3 bg-gray-50 rounded-lg shadow-sm flex justify-between items-center"
                        >
                            <div>
                                <div className="text-sm text-gray-600">{entry.date}</div>
                                <div className="text-lg">{entry.emoji} {entry.text}</div>
                            </div>
                            <button
                                onClick={() => onDelete(entry)}
                                className="text-red-500 hover:text-red-600"
                            >
                                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                                    <path fillRule="evenodd" d="M9 2a1 1 0 00-.894.553L7.382 4H4a1 1 0 000 2v10a2 2 0 002 2h8a2 2 0 002-2V6a1 1 0 100-2h-3.382l-.724-1.447A1 1 0 0011 2H9zM7 8a1 1 0 012 0v6a1 1 0 11-2 0V8zm5-1a1 1 0 00-1 1v6a1 1 0 102 0V8a1 1 0 00-1-1z" clipRule="evenodd" />
                                </svg>
                            </button>
                        </div>
                    ))
                }
            </div>
        </div>
    );
};