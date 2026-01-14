import React, { useState } from 'react';
import { 
  DashboardView, 
  RoadmapDetailView, 
  PracticeView, 
  RepositoryView, 
  NumericalMethodView, 
  DiscreteMathView 
} from './components/Views';
import { BottomNav, Sidebar } from './components/Navigation';

// Types for navigation
export type ViewState = 'dashboard' | 'roadmap' | 'practice' | 'repository' | 'numerical' | 'discrete';

const App: React.FC = () => {
  const [currentView, setCurrentView] = useState<ViewState>('dashboard');

  // Helper to render current view
  const renderView = () => {
    switch (currentView) {
      case 'dashboard':
        return <DashboardView onChangeView={setCurrentView} />;
      case 'roadmap':
        return <RoadmapDetailView onBack={() => setCurrentView('dashboard')} onChangeView={setCurrentView} />;
      case 'practice':
        return <PracticeView onBack={() => setCurrentView('roadmap')} />;
      case 'repository':
        return <RepositoryView />;
      case 'numerical':
        return <NumericalMethodView onBack={() => setCurrentView('dashboard')} />;
      case 'discrete':
        return <DiscreteMathView onBack={() => setCurrentView('dashboard')} />;
      default:
        return <DashboardView onChangeView={setCurrentView} />;
    }
  };

  return (
    <div className="flex h-screen w-full bg-background text-e6edf3 overflow-hidden">
      {/* Desktop Sidebar */}
      <Sidebar currentView={currentView} onChangeView={setCurrentView} />

      {/* Main Content Area */}
      <div className="flex-1 flex flex-col relative h-full overflow-hidden">
        <div className="flex-1 overflow-y-auto scroll-smooth">
          <div className="max-w-7xl mx-auto w-full pb-24 md:pb-8">
            {renderView()}
          </div>
        </div>
        
        {/* Mobile Bottom Nav */}
        <BottomNav currentView={currentView} onChangeView={setCurrentView} />
      </div>
    </div>
  );
};

export default App;