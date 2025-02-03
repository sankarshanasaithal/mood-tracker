export default function MoodTracker () {
    return (
        <div className="bg-blue-200 min-h-screen flex items-center justify-center p-6">
            <div className="max-w-md w-full p-6 bg-white rounded-lg shadow-lg">
                <h1 className="text-2xl font-bold mb-6 text-center">Mood Tracker</h1>
                
                <div className="mb-6">
                    <div className="flex gap-2">
                        <select className="flex-1 p-2 border rounded-lg">
                            <option value="">Select a mood</option>
                            <option value="happy">😊 Happy</option>
                            <option value="meh">😒 Neutral</option>
                            <option value="sad">😢 Sad</option>
                        </select>
                        
                        <button className="px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 hover:cursor-pointer transition-colors">
                            Add
                        </button>
                    </div>
                </div>

                <div className="mb-4">
                    <button className="w-full px-4 py-2 bg-red-500 text-white rounded-lg hover:bg-red-600 hover:cursor-pointer transition-colors">
                        Clear All
                    </button>
                </div>

                <div className="space-y-3">
                    <div className="p-3 bg-gray-50 rounded-lg shadow-sm">
                        <div className="text-sm text-gray-600">2/3/2025 6:30:59</div>
                        <div className="text-lg">😊 Happy</div>
                    </div>

                    <div className="p-3 bg-gray-50 rounded-lg shadow-sm">
                        <div className="text-sm text-gray-600">2/3/2025 6:29:45</div>
                        <div className="text-lg">😒 Neutral</div>
                    </div>

                    <div className="p-3 bg-gray-50 rounded-lg shadow-sm">
                        <div className="text-sm text-gray-600">2/3/2025 6:28:30</div>
                        <div className="text-lg">😢 Sad</div>
                    </div>
                </div>
            </div>
        </div>
    );
}
