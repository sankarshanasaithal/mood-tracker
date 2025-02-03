export default function Tabs({ activeTab, setActiveTab }) {
    const tabs = [
        { id: 'list', label: 'Mood List' },
        { id: 'analytics', label: 'Analytics' }
    ];

    return (
        <div className="flex mb-6 border-b">
            {tabs.map(tab => (
                <button
                    key={tab.id}
                    onClick={() => setActiveTab(tab.id)}
                    className={`px-4 py-2 -mb-px ${activeTab === tab.id
                            ? 'text-blue-600 border-b-2 border-blue-500 font-medium'
                            : 'text-gray-600 hover:text-blue-500'
                        }`}
                >
                    {tab.label}
                </button>
            ))}
        </div>
    );
}