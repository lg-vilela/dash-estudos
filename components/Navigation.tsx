import React from 'react';
import { ViewState } from '../App';

interface BottomNavProps {
  currentView: ViewState;
  onChangeView: (view: ViewState) => void;
}

const navItems = [
  { id: 'dashboard', icon: 'dashboard', label: 'Início' },
  { id: 'roadmap', icon: 'map', label: 'Trilha' }, 
  { id: 'numerical', icon: 'function', label: 'Numérico' }, 
  { id: 'repository', icon: 'menu_book', label: 'Biblioteca' },
];

export const BottomNav: React.FC<BottomNavProps> = ({ currentView, onChangeView }) => {
  return (
    <nav className="fixed bottom-0 left-0 right-0 z-50 glass border-t border-surfaceHighlight pb-6 pt-3 md:hidden">
      <div className="flex justify-around items-center px-2">
        {navItems.map((item) => {
          const isActive = currentView === item.id || (item.id === 'roadmap' && currentView === 'discrete');
          return (
            <button
              key={item.id}
              onClick={() => onChangeView(item.id as ViewState)}
              className={`flex flex-col items-center gap-1 transition-all duration-300 ${
                isActive ? 'text-primary scale-110' : 'text-slate-500 hover:text-slate-300'
              }`}
            >
              <span className={`material-symbols-outlined ${isActive ? 'fill-1' : ''}`}>
                {item.icon}
              </span>
              <span className="text-[10px] font-bold tracking-wide">{item.label}</span>
            </button>
          );
        })}
      </div>
    </nav>
  );
};

export const Sidebar: React.FC<BottomNavProps> = ({ currentView, onChangeView }) => {
  return (
    <aside className="hidden md:flex w-72 flex-col border-r border-surfaceHighlight bg-surface/30 backdrop-blur-xl h-full flex-shrink-0 z-50">
      <div className="p-6 border-b border-surfaceHighlight flex items-center gap-3">
         <div className="size-10 flex items-center justify-center bg-primary/10 rounded-xl text-primary border border-primary/20 shadow-[0_0_15px_rgba(20,156,184,0.3)]">
            <span className="material-symbols-outlined text-2xl">terminal</span>
         </div>
         <div>
            <h1 className="font-display font-bold text-xl tracking-tight text-white">Study Terminal</h1>
            <p className="text-[10px] text-primary font-mono uppercase tracking-widest">v2.0.4 - Alpha</p>
         </div>
      </div>
      
      <nav className="flex-1 p-4 space-y-2 overflow-y-auto">
        <p className="px-4 text-xs font-bold text-slate-500 uppercase tracking-widest mb-2 mt-2">Menu Principal</p>
        {navItems.map((item) => {
             const isActive = currentView === item.id || (item.id === 'roadmap' && currentView === 'discrete');
             return (
               <button
                 key={item.id}
                 onClick={() => onChangeView(item.id as ViewState)}
                 className={`w-full flex items-center gap-4 px-4 py-3 rounded-xl transition-all duration-200 group ${
                   isActive 
                     ? 'bg-primary/10 text-primary border border-primary/20 shadow-lg shadow-primary/5' 
                     : 'text-slate-400 hover:bg-surfaceHighlight hover:text-white border border-transparent'
                 }`}
               >
                  <span className={`material-symbols-outlined ${isActive ? 'fill-1' : ''}`}>
                    {item.icon}
                  </span>
                  <span className="text-sm font-bold tracking-wide">{item.label}</span>
                  {isActive && <div className="ml-auto size-2 bg-primary rounded-full shadow-[0_0_8px_rgba(20,156,184,0.8)]"></div>}
               </button>
             );
        })}

        <div className="mt-8">
           <p className="px-4 text-xs font-bold text-slate-500 uppercase tracking-widest mb-2">Acesso Rápido</p>
           <button onClick={() => onChangeView('practice')} className="w-full flex items-center gap-4 px-4 py-2.5 rounded-lg text-slate-400 hover:text-white hover:bg-surfaceHighlight transition-colors">
               <span className="material-symbols-outlined text-sm">history_edu</span>
               <span className="text-sm">Últimos Exercícios</span>
           </button>
           <button className="w-full flex items-center gap-4 px-4 py-2.5 rounded-lg text-slate-400 hover:text-white hover:bg-surfaceHighlight transition-colors">
               <span className="material-symbols-outlined text-sm">bookmark</span>
               <span className="text-sm">Salvos</span>
           </button>
        </div>
      </nav>
      
      <div className="p-4 border-t border-surfaceHighlight bg-surface/50">
        <div className="flex items-center gap-3 p-2 rounded-xl hover:bg-surfaceHighlight cursor-pointer transition-colors border border-transparent hover:border-surfaceHighlight">
            <div className="size-10 rounded-full bg-gradient-to-tr from-primary to-accent shadow-lg"></div>
            <div className="text-sm overflow-hidden">
                <p className="font-bold text-white truncate">Dev Student</p>
                <p className="text-xs text-primary font-mono">Pro Plan Active</p>
            </div>
            <span className="material-symbols-outlined text-slate-500 ml-auto">settings</span>
        </div>
      </div>
    </aside>
  );
};

export const Header: React.FC<{ 
  title: string; 
  subtitle?: string; 
  onBack?: () => void;
  rightAction?: React.ReactNode 
}> = ({ title, subtitle, onBack, rightAction }) => {
  return (
    <header className="sticky top-0 z-30 bg-background/80 backdrop-blur-md border-b border-surfaceHighlight md:static md:bg-transparent md:border-none md:pt-8 md:px-8 md:pb-0">
      <div className="flex items-center p-4 md:p-0 justify-between">
        <div className="flex items-center gap-3">
          {onBack && (
            <button 
              onClick={onBack}
              className="size-10 flex items-center justify-center rounded-full hover:bg-surfaceHighlight transition-colors text-slate-300 md:bg-surface md:border md:border-surfaceHighlight"
            >
              <span className="material-symbols-outlined">arrow_back_ios_new</span>
            </button>
          )}
          {/* Hide logo icon on desktop if sidebar is present, but keep text */}
          <div className={`size-10 flex items-center justify-center bg-primary/10 rounded-xl text-primary border border-primary/20 md:hidden ${onBack ? 'hidden' : ''}`}>
             <span className="material-symbols-outlined">terminal</span>
          </div>
          <div>
            <h2 className="text-lg md:text-3xl font-bold font-display leading-tight text-white">{title}</h2>
            {subtitle && (
              <p className="text-xs md:text-sm text-primary font-bold uppercase tracking-widest">{subtitle}</p>
            )}
          </div>
        </div>
        <div className="flex items-center gap-2">
           {rightAction}
           <button className="relative p-2 rounded-full hover:bg-surfaceHighlight transition-colors text-slate-400 md:bg-surface md:border md:border-surfaceHighlight md:size-10 md:flex md:items-center md:justify-center">
             <span className="material-symbols-outlined">notifications</span>
             <span className="absolute top-2 right-2 md:top-2.5 md:right-3 flex h-2 w-2 rounded-full bg-primary animate-pulse"></span>
           </button>
        </div>
      </div>
    </header>
  );
};