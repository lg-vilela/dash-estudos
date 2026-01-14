import React, { useState } from 'react';
import { ViewState } from '../App';
import { Header } from './Navigation';
import { 
  LineChart, 
  Line, 
  ResponsiveContainer, 
  XAxis, 
  YAxis, 
  Tooltip as RechartsTooltip 
} from 'recharts';

// --- DASHBOARD VIEW ---
export const DashboardView: React.FC<{ onChangeView: (v: ViewState) => void }> = ({ onChangeView }) => {
  return (
    <>
      <Header title="Study Terminal" subtitle="Dashboard Principal" />
      <main className="p-4 space-y-6 md:p-8 md:space-y-8">
        
        {/* Top Grid: Sprint + Focus */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
            {/* Daily Sprint - Spans 2 cols on LG */}
            <div className="lg:col-span-2 bg-surface border border-surfaceHighlight rounded-2xl p-5 md:p-8 shadow-lg relative overflow-hidden group">
              <div className="absolute top-0 right-0 p-3 opacity-10 group-hover:opacity-20 transition-opacity">
                <span className="material-symbols-outlined text-6xl md:text-9xl">sprint</span>
              </div>
              <div className="flex justify-between items-end mb-6 relative z-10">
                <div>
                  <p className="text-slate-400 text-[10px] md:text-xs font-bold uppercase tracking-[0.2em] mb-2">Sprint Diária</p>
                  <h3 className="text-2xl md:text-4xl font-bold font-display text-white">4/12 Exercícios</h3>
                </div>
                <div className="text-right">
                  <span className="text-primary font-bold text-xl md:text-3xl font-mono">33%</span>
                </div>
              </div>
              <div className="w-full bg-surfaceHighlight h-3 md:h-4 rounded-full overflow-hidden mb-6">
                <div className="h-full bg-primary rounded-full shadow-[0_0_15px_rgba(20,156,184,0.6)] w-1/3 transition-all duration-1000"></div>
              </div>
              <div className="flex gap-3 overflow-x-auto no-scrollbar md:flex-wrap">
                <span className="px-4 py-1.5 bg-primary/20 text-primary border border-primary/30 text-[10px] md:text-xs font-bold rounded-full cursor-pointer hover:bg-primary/30 transition-colors">PRÉ-CÁLCULO</span>
                <span className="px-4 py-1.5 bg-surfaceHighlight text-slate-400 border border-white/5 text-[10px] md:text-xs font-bold rounded-full cursor-pointer hover:text-white transition-colors">LÓGICA</span>
                <span className="px-4 py-1.5 bg-surfaceHighlight text-slate-400 border border-white/5 text-[10px] md:text-xs font-bold rounded-full cursor-pointer hover:text-white transition-colors">FÍSICA</span>
              </div>
            </div>

            {/* Current Focus - Spans 1 col */}
            <div className="bg-surface border-l-4 border-primary rounded-r-xl p-5 md:p-8 border-y border-r border-surfaceHighlight flex flex-col justify-center">
                <div className="flex justify-between items-start mb-6">
                  <div>
                    <h4 className="font-bold text-white text-lg">Plano de 4 Semanas</h4>
                    <p className="text-xs text-slate-400 mt-1">Módulo 04: Introdução à Trigonometria</p>
                  </div>
                  <span className="px-2 py-1 bg-primary/10 text-primary text-[10px] font-bold rounded border border-primary/20">INTENSIVO</span>
                </div>
                
                <div className="space-y-6 relative pl-2">
                  <div className="absolute left-[13px] top-2 bottom-2 w-px bg-surfaceHighlight"></div>
                  
                  <div className="flex gap-4 items-center opacity-50">
                    <div className="z-10 size-6 rounded-full bg-surfaceHighlight border border-slate-600 flex items-center justify-center shrink-0">
                      <span className="material-symbols-outlined text-xs">check</span>
                    </div>
                    <div>
                      <p className="text-[10px] font-bold text-slate-500">SEMANA 3</p>
                      <p className="text-sm font-bold truncate">Exponenciais e Logaritmos</p>
                    </div>
                  </div>

                  <div className="flex gap-4 items-center">
                    <div className="z-10 size-6 rounded-full bg-background border-2 border-primary flex items-center justify-center shadow-[0_0_10px_rgba(20,156,184,0.4)] shrink-0">
                      <div className="size-2 bg-primary rounded-full"></div>
                    </div>
                    <div>
                      <p className="text-[10px] font-bold text-primary">SEMANA 4 • ATUAL</p>
                      <p className="text-sm font-bold text-white">Círculo Trigonométrico</p>
                      <p className="text-xs text-slate-400 mt-1 truncate">Seno, Cosseno e Tangente.</p>
                    </div>
                  </div>
                </div>
            </div>
        </div>

        {/* Roadmap Grid */}
        <div>
          <div className="flex justify-between items-center mb-4">
            <h3 className="text-xl font-bold font-display text-white">Roadmap de Estudos</h3>
            <span className="text-xs md:text-sm text-primary font-bold cursor-pointer hover:underline">VER TODOS</span>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {/* Card 1: Pre-Calc */}
            <div 
              onClick={() => onChangeView('roadmap')}
              className="bg-surface border border-surfaceHighlight rounded-xl p-5 cursor-pointer hover:border-primary/50 transition-all hover:-translate-y-1 hover:shadow-xl group"
            >
              <div className="h-32 rounded-lg bg-gradient-to-br from-primary/20 to-surfaceHighlight mb-4 flex items-center justify-center border border-white/5 group-hover:from-primary/30 transition-all">
                 <span className="material-symbols-outlined text-5xl text-primary drop-shadow-[0_0_10px_rgba(20,156,184,0.5)]">function</span>
              </div>
              <h4 className="font-bold text-lg text-white">O Alicerce</h4>
              <p className="text-sm text-slate-500 mb-4">Pré-Cálculo & Geometria Analítica</p>
              <div className="w-full bg-surfaceHighlight h-2 rounded-full overflow-hidden">
                <div className="h-full bg-primary w-[85%]"></div>
              </div>
            </div>

            {/* Card 2: Discrete Math */}
            <div 
              onClick={() => onChangeView('discrete')}
              className="bg-surface border border-surfaceHighlight rounded-xl p-5 cursor-pointer hover:border-accent/50 transition-all hover:-translate-y-1 hover:shadow-xl group"
            >
              <div className="h-32 rounded-lg bg-gradient-to-br from-accent/20 to-surfaceHighlight mb-4 flex items-center justify-center border border-white/5 group-hover:from-accent/30 transition-all">
                 <span className="material-symbols-outlined text-5xl text-accent drop-shadow-[0_0_10px_rgba(47,129,247,0.5)]">schema</span>
              </div>
              <h4 className="font-bold text-lg text-white">Matemática do Programador</h4>
              <p className="text-sm text-slate-500 mb-4">Discreta, Lógica & Grafos</p>
              <div className="w-full bg-surfaceHighlight h-2 rounded-full overflow-hidden">
                <div className="h-full bg-accent w-[40%]"></div>
              </div>
            </div>
            
             {/* Card 3: Numerical */}
             <div 
              onClick={() => onChangeView('numerical')}
              className="bg-surface border border-surfaceHighlight rounded-xl p-5 cursor-pointer hover:border-success/50 transition-all hover:-translate-y-1 hover:shadow-xl group"
            >
              <div className="h-32 rounded-lg bg-gradient-to-br from-success/20 to-surfaceHighlight mb-4 flex items-center justify-center border border-white/5 group-hover:from-success/30 transition-all">
                 <span className="material-symbols-outlined text-5xl text-success drop-shadow-[0_0_10px_rgba(35,134,54,0.5)]">terminal</span>
              </div>
              <h4 className="font-bold text-lg text-white">Mundo Real</h4>
              <p className="text-sm text-slate-500 mb-4">Cálculo Numérico & Algoritmos</p>
              <div className="w-full bg-surfaceHighlight h-2 rounded-full overflow-hidden">
                <div className="h-full bg-success w-[10%]"></div>
              </div>
            </div>
          </div>
        </div>
      </main>

      {/* FAB - Adjusted position for desktop */}
      <button className="fixed bottom-24 right-6 md:bottom-10 md:right-10 size-14 md:size-16 rounded-2xl bg-primary text-white shadow-[0_0_20px_rgba(20,156,184,0.4)] flex items-center justify-center z-30 transition-transform active:scale-90 border border-white/20 hover:scale-110 hover:shadow-[0_0_30px_rgba(20,156,184,0.6)]">
        <span className="material-symbols-outlined text-3xl md:text-4xl">timer</span>
      </button>
    </>
  );
};

// --- ROADMAP DETAIL VIEW (PRE-CALCULUS) ---
export const RoadmapDetailView: React.FC<{ onBack: () => void, onChangeView: (v: ViewState) => void }> = ({ onBack, onChangeView }) => {
  return (
    <>
      <Header 
        title="Pré-Cálculo" 
        subtitle="O Alicerce" 
        onBack={onBack} 
        rightAction={
          <button className="bg-primary/10 p-2 md:px-4 md:py-2 md:rounded-lg rounded-full text-primary flex items-center gap-2 hover:bg-primary/20 transition-colors">
            <span className="material-symbols-outlined text-sm">share</span>
            <span className="hidden md:inline text-sm font-bold">Compartilhar</span>
          </button>
        }
      />
      <main className="p-4 space-y-6 md:p-8 md:space-y-8">
        
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Left Column: Progress & Resources */}
            <div className="space-y-6">
                {/* Progress Card */}
                <div className="bg-surface border border-surfaceHighlight rounded-xl p-6 shadow-lg">
                    <div className="flex justify-between items-end mb-4">
                        <div>
                        <p className="text-slate-400 text-xs font-bold uppercase">Progresso Geral</p>
                        <h3 className="text-3xl font-bold font-display text-white">85%</h3>
                        </div>
                        <div className="flex gap-1 mb-1">
                        <div className="h-1.5 w-6 rounded-full bg-primary"></div>
                        <div className="h-1.5 w-6 rounded-full bg-primary"></div>
                        <div className="h-1.5 w-6 rounded-full bg-primary"></div>
                        <div className="h-1.5 w-6 rounded-full bg-surfaceHighlight"></div>
                        </div>
                    </div>
                    <div className="w-full bg-surfaceHighlight h-2 rounded-full overflow-hidden mb-4">
                        <div className="h-full bg-primary w-[85%] shadow-[0_0_10px_rgba(20,156,184,0.5)]"></div>
                    </div>
                    <div className="flex items-center gap-2 text-xs text-slate-400 bg-surfaceHighlight/50 p-2 rounded-lg border border-white/5">
                        <span className="material-symbols-outlined text-sm text-primary">calendar_today</span>
                        <span>Iniciado em 12 Set • Resta 1 semana</span>
                    </div>
                </div>

                {/* Resources */}
                <div className="hidden lg:block">
                    <h3 className="text-sm font-bold uppercase tracking-widest text-slate-500 mb-3">Recursos Externos</h3>
                    <div className="flex flex-col gap-3">
                        <a href="https://pt.khanacademy.org/math/precalculus" target="_blank" rel="noreferrer" className="bg-surface border border-surfaceHighlight p-4 rounded-xl hover:border-primary/50 transition-all hover:bg-surfaceHighlight group flex items-center gap-4">
                            <div className="size-10 bg-green-500/10 rounded-lg flex items-center justify-center border border-green-500/20">
                                <span className="material-symbols-outlined text-green-500">school</span>
                            </div>
                            <div>
                                <span className="text-sm font-bold text-white group-hover:text-primary block">Khan Academy</span>
                                <p className="text-xs text-slate-500">Excelente para base e exercícios.</p>
                            </div>
                        </a>
                        <a href="https://www.youtube.com/@CanaldoGrings" target="_blank" rel="noreferrer" className="bg-surface border border-surfaceHighlight p-4 rounded-xl hover:border-primary/50 transition-all hover:bg-surfaceHighlight group flex items-center gap-4">
                            <div className="size-10 bg-red-500/10 rounded-lg flex items-center justify-center border border-red-500/20">
                                <span className="material-symbols-outlined text-red-500">play_circle</span>
                            </div>
                            <div>
                                <span className="text-sm font-bold text-white group-hover:text-primary block">Canal do Grings</span>
                                <p className="text-xs text-slate-500">Didático para universitários.</p>
                            </div>
                        </a>
                    </div>
                </div>
            </div>

            {/* Center/Right: Timeline */}
            <div className="lg:col-span-2 relative pl-4 md:pl-0">
                <div className="absolute left-[27px] md:left-[29px] top-0 bottom-0 w-0.5 bg-gradient-to-b from-primary via-primary to-surfaceHighlight z-0"></div>
                
                <div className="space-y-8 relative z-10">
                    {/* Week 1 */}
                    <div className="relative pl-12 md:pl-16 opacity-70 hover:opacity-100 transition-opacity">
                        <div className="absolute left-0 md:left-[5px] top-0 size-12 bg-primary rounded-full flex items-center justify-center text-background font-bold border-4 border-background shadow-lg">
                            <span className="material-symbols-outlined">check</span>
                        </div>
                        <h4 className="font-bold text-white text-lg mb-2">Semana 1: Álgebra Básica</h4>
                        <div className="bg-surface border border-surfaceHighlight rounded-xl p-5 text-sm text-slate-400">
                            <p>Manipulação de expressões, fatoração e produtos notáveis.</p>
                        </div>
                    </div>

                    {/* Week 2 */}
                    <div className="relative pl-12 md:pl-16">
                        <div className="absolute left-0 md:left-[5px] top-0 size-12 bg-primary rounded-full flex items-center justify-center text-background font-bold border-4 border-background shadow-[0_0_20px_rgba(20,156,184,0.6)]">
                            <span className="material-symbols-outlined">play_arrow</span>
                        </div>
                        <div className="flex justify-between items-center mb-4">
                            <h4 className="font-bold text-white text-xl">Semana 2: Funções</h4>
                            <span className="text-xs font-bold bg-primary/20 text-primary px-3 py-1 rounded border border-primary/20 animate-pulse">ATIVO</span>
                        </div>
                        
                        <div className="bg-surface border border-primary/40 rounded-xl p-6 shadow-xl">
                            {/* Developer Analogy */}
                            <div className="bg-surfaceHighlight/50 border border-primary/20 rounded-lg p-3 mb-4 font-mono text-sm">
                            <span className="text-slate-500">// Analogia de Engenharia:</span><br/>
                            <span className="text-primary font-bold">Funções Matemáticas == Métodos</span><br/>
                            <span className="text-slate-400">Inputs(x) são parâmetros, Output(y) é o return.</span>
                            </div>

                            <ul className="grid gap-3">
                                <li className="flex justify-between items-center group cursor-pointer bg-surfaceHighlight/20 p-3 rounded-lg hover:bg-surfaceHighlight transition-colors" onClick={() => onChangeView('practice')}>
                                    <div className="flex items-center gap-3">
                                    <div className="size-6 border-2 border-primary rounded flex items-center justify-center">
                                        <span className="material-symbols-outlined text-primary text-xs">check</span>
                                    </div>
                                    <span className="text-sm font-medium text-white group-hover:text-primary transition-colors">Domínio & Imagem</span>
                                    </div>
                                    <span className="material-symbols-outlined text-slate-500 text-sm">info</span>
                                </li>
                                <li className="flex justify-between items-center group cursor-pointer bg-surfaceHighlight/20 p-3 rounded-lg hover:bg-surfaceHighlight transition-colors" onClick={() => onChangeView('practice')}>
                                    <div className="flex items-center gap-3">
                                    <div className="size-6 border-2 border-slate-600 rounded flex items-center justify-center"></div>
                                    <span className="text-sm font-medium text-white group-hover:text-primary transition-colors">Função Quadrática</span>
                                    </div>
                                    <button className="text-[10px] font-bold text-primary uppercase bg-primary/10 px-3 py-1.5 rounded hover:bg-primary hover:text-white transition-colors">Praticar</button>
                                </li>
                            </ul>
                        </div>
                    </div>

                    {/* Week 3 */}
                    <div className="relative pl-12 md:pl-16 opacity-50">
                        <div className="absolute left-0 md:left-[5px] top-0 size-12 bg-surfaceHighlight rounded-full border-4 border-background flex items-center justify-center">
                             <span className="material-symbols-outlined text-slate-500">lock</span>
                        </div>
                        <h4 className="font-bold text-slate-400 text-lg mb-2">Semana 3: Exponenciais & Logaritmos</h4>
                        <div className="bg-surface border border-surfaceHighlight rounded-xl p-5">
                             <p className="text-sm text-slate-500">Conteúdo bloqueado. Complete o módulo anterior para acessar.</p>
                        </div>
                    </div>
                </div>
            </div>

             {/* Mobile Resources fallback */}
             <div className="lg:hidden">
                <h3 className="text-sm font-bold uppercase tracking-widest text-slate-500 mb-3">Recursos Externos</h3>
                <div className="grid grid-cols-2 gap-3">
                    <a href="https://pt.khanacademy.org/math/precalculus" target="_blank" rel="noreferrer" className="bg-surface border border-surfaceHighlight p-3 rounded-xl hover:border-primary/50 transition-colors group">
                        <div className="flex items-center gap-2 mb-2">
                            <span className="material-symbols-outlined text-green-500">school</span>
                            <span className="text-xs font-bold group-hover:text-primary">Khan Academy</span>
                        </div>
                        <p className="text-[10px] text-slate-500">Excelente para base e exercícios.</p>
                    </a>
                    <a href="https://www.youtube.com/@CanaldoGrings" target="_blank" rel="noreferrer" className="bg-surface border border-surfaceHighlight p-3 rounded-xl hover:border-primary/50 transition-colors group">
                        <div className="flex items-center gap-2 mb-2">
                            <span className="material-symbols-outlined text-red-500">play_circle</span>
                            <span className="text-xs font-bold group-hover:text-primary">Canal do Grings</span>
                        </div>
                        <p className="text-[10px] text-slate-500">Didático para universitários.</p>
                    </a>
                </div>
            </div>
        </div>
      </main>
    </>
  );
};

// --- PRACTICE VIEW (INTERACTIVE) ---
export const PracticeView: React.FC<{ onBack: () => void }> = ({ onBack }) => {
  const [sliderVal, setSliderVal] = useState(50);
  const [selectedOption, setSelectedOption] = useState<string | null>('A');

  return (
    <>
      <Header title="Semana 2: Funções" onBack={onBack} rightAction={
          <button className="flex items-center gap-2 text-primary hover:text-white transition-colors">
              <span className="hidden md:inline text-sm font-bold">Ajuda & Teoria</span>
              <span className="material-symbols-outlined">help</span>
          </button>
      } />
      
      <div className="p-4 space-y-6 md:p-8 md:grid md:grid-cols-2 md:gap-8 md:space-y-0 h-[calc(100vh-140px)] md:h-auto overflow-y-auto">
        
        {/* Left Col: Context */}
        <div className="space-y-6 flex flex-col">
            {/* Progress Bar */}
            <div className="flex flex-col gap-2">
                <div className="flex justify-between text-xs font-bold uppercase text-primary tracking-widest">
                    <span>Progresso Prático</span>
                    <span>4 de 10</span>
                </div>
                <div className="h-2 w-full bg-surfaceHighlight rounded-full">
                    <div className="h-full bg-primary w-[40%] shadow-[0_0_10px_rgba(20,156,184,0.5)]"></div>
                </div>
            </div>

            {/* Problem Card */}
            <div className="bg-surface border border-surfaceHighlight rounded-2xl p-6 shadow-lg flex-1">
                <span className="text-xs font-bold text-primary bg-primary/10 px-3 py-1.5 rounded uppercase tracking-wider border border-primary/20">Tópico: Parábolas</span>
                <h3 className="text-2xl font-bold text-white mt-4 mb-4">Encontre o Vértice</h3>
                <p className="text-slate-300 text-base leading-relaxed mb-6">
                    Dada a função <code className="bg-surfaceHighlight px-2 py-0.5 rounded text-primary font-mono border border-white/10">f(x) = x² - 4x + 3</code>, identifique as coordenadas exatas do vértice <span className="italic font-serif text-lg text-white px-1">(h, k)</span>.
                </p>
                
                {/* Programmer Tip */}
                <div className="bg-primary/5 border border-primary/20 rounded-xl p-4 flex gap-4">
                    <div className="size-8 bg-primary/10 rounded-lg flex items-center justify-center shrink-0">
                        <span className="material-symbols-outlined text-primary text-sm">terminal</span>
                    </div>
                    <div>
                        <p className="text-[10px] font-bold text-primary uppercase mb-1">Dica de Programador</p>
                        <p className="text-sm text-slate-400 italic">
                            "Pense nisso como uma função JS retornando um valor: <br/>
                            <code className="text-primary font-mono not-italic block mt-1 bg-black/20 p-1 rounded">const getVertex = (a, b) => -b / (2 * a);</code>"
                        </p>
                    </div>
                </div>
            </div>
            
             {/* Options Grid (Desktop only - moves here for better layout) */}
             <div className="hidden md:grid grid-cols-2 gap-4">
                 {['(2, -1)', '(-2, 1)', '(0, 3)', '(4, 3)'].map((opt, idx) => {
                    const label = String.fromCharCode(65 + idx); // A, B, C...
                    const isSelected = selectedOption === label;
                    return (
                    <button 
                        key={label}
                        onClick={() => setSelectedOption(label)}
                        className={`p-4 rounded-xl border-2 flex items-center justify-between transition-all group ${
                        isSelected 
                            ? 'border-primary bg-primary/10 shadow-[0_0_15px_rgba(20,156,184,0.2)]' 
                            : 'border-surfaceHighlight bg-surface hover:border-slate-500'
                        }`}
                    >
                        <span className={`text-xs font-bold uppercase size-6 rounded flex items-center justify-center ${isSelected ? 'bg-primary text-background' : 'bg-surfaceHighlight text-slate-500 group-hover:text-white'}`}>{label}</span>
                        <span className="text-lg font-bold font-mono text-white">{opt}</span>
                    </button>
                    )
                })}
             </div>
        </div>

        {/* Right Col: Interactive */}
        <div className="space-y-4">
            <div>
                <div className="flex justify-between items-center mb-2">
                    <h3 className="text-xs font-bold uppercase text-slate-500">Gráfico Interativo</h3>
                    <div className="flex gap-2">
                        <span className="text-[10px] bg-surfaceHighlight px-2 py-0.5 rounded font-mono border border-white/5">h: 2.0</span>
                        <span className="text-[10px] bg-surfaceHighlight px-2 py-0.5 rounded font-mono border border-white/5">k: -1.0</span>
                    </div>
                </div>
                <div className="aspect-square md:aspect-video bg-[#0f1519] rounded-xl border border-surfaceHighlight relative overflow-hidden flex items-center justify-center shadow-2xl">
                    {/* Grid Background */}
                    <div className="absolute inset-0 opacity-20" 
                        style={{ 
                            backgroundImage: 'linear-gradient(#30363d 1px, transparent 1px), linear-gradient(90deg, #30363d 1px, transparent 1px)', 
                            backgroundSize: '20px 20px' 
                        }}>
                    </div>
                    {/* Axis */}
                    <div className="absolute w-full h-px bg-slate-600"></div>
                    <div className="absolute h-full w-px bg-slate-600"></div>
                    
                    {/* Parabola SVG */}
                    <svg viewBox="0 0 100 100" className="absolute w-full h-full overflow-visible">
                        <path 
                        d="M 20 10 Q 50 110 80 10" 
                        fill="none" 
                        stroke="#149cb8" 
                        strokeWidth="1.5"
                        vectorEffect="non-scaling-stroke"
                        />
                        <circle cx="50" cy="60" r="1.5" fill="#149cb8" className="animate-pulse">
                            <animate attributeName="r" values="1.5;2.5;1.5" dur="2s" repeatCount="indefinite" />
                        </circle>
                    </svg>
                    
                    {/* Floating Label */}
                    <div className="absolute top-[65%] bg-surface border border-surfaceHighlight px-3 py-1.5 rounded-lg text-xs font-bold shadow-lg flex items-center gap-2">
                        <div className="size-2 bg-primary rounded-full"></div>
                        Vértice (2, -1)
                    </div>
                </div>
                
                {/* Slider */}
                <div className="mt-4 bg-surface border border-surfaceHighlight rounded-xl p-4">
                    <div className="flex justify-between text-xs mb-3 font-bold text-slate-500">
                        <span>Ajustar Coeficiente b</span>
                        <span className="text-primary font-mono bg-primary/10 px-2 py-0.5 rounded">-4.0</span>
                    </div>
                    <input 
                        type="range" 
                        min="0" max="100" 
                        value={sliderVal} 
                        onChange={(e) => setSliderVal(parseInt(e.target.value))}
                        className="w-full h-1.5 bg-surfaceHighlight rounded-lg appearance-none cursor-pointer accent-primary"
                    />
                </div>
            </div>

            {/* Options Mobile (Hidden Desktop) */}
            <div className="grid grid-cols-2 gap-3 pb-24 md:hidden">
            {['(2, -1)', '(-2, 1)', '(0, 3)', '(4, 3)'].map((opt, idx) => {
                const label = String.fromCharCode(65 + idx); // A, B, C...
                const isSelected = selectedOption === label;
                return (
                <button 
                    key={label}
                    onClick={() => setSelectedOption(label)}
                    className={`p-4 rounded-xl border-2 flex flex-col items-center justify-center transition-all ${
                    isSelected 
                        ? 'border-primary bg-primary/10' 
                        : 'border-transparent bg-surface hover:border-slate-600'
                    }`}
                >
                    <span className={`text-xs font-bold mb-1 uppercase ${isSelected ? 'text-primary' : 'text-slate-500'}`}>Opção {label}</span>
                    <span className="text-lg font-bold font-mono">{opt}</span>
                </button>
                )
            })}
            </div>

             {/* Desktop Action Area */}
             <div className="hidden md:flex gap-4 pt-4">
                 <button className="flex-1 py-4 rounded-xl bg-surfaceHighlight text-slate-300 font-bold hover:bg-slate-700 transition-colors">
                     Pular Exercício
                 </button>
                 <button className="flex-[2] py-4 rounded-xl bg-primary text-background font-bold shadow-[0_0_15px_rgba(20,156,184,0.4)] hover:brightness-110 transition-all transform hover:scale-[1.02]">
                     Confirmar Resposta
                 </button>
             </div>
        </div>
      </div>
      
      {/* Mobile Bottom Action */}
      <div className="md:hidden fixed bottom-0 left-0 right-0 bg-glass border-t border-surfaceHighlight p-4 flex gap-4 z-50 backdrop-blur-xl">
         <button className="flex-1 py-3 rounded-xl bg-surfaceHighlight text-slate-300 font-bold hover:bg-slate-700">Pular</button>
         <button className="flex-[2] py-3 rounded-xl bg-primary text-background font-bold shadow-[0_0_15px_rgba(20,156,184,0.4)] hover:brightness-110">Enviar</button>
      </div>
    </>
  );
};

// --- REPOSITORY VIEW (FORMULAS) ---
export const RepositoryView: React.FC = () => {
  return (
    <>
      <Header title="Biblioteca" subtitle="Ciência da Computação" />
      
      {/* Search - Responsive */}
      <div className="px-4 py-3 md:px-8 md:py-6 sticky top-0 z-20 bg-background/95 backdrop-blur border-b border-surfaceHighlight">
         <div className="max-w-4xl mx-auto w-full">
            <div className="flex gap-4 items-center">
                <div className="relative flex-1">
                    <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                    <span className="material-symbols-outlined text-slate-500">search</span>
                    </div>
                    <input 
                    type="text" 
                    className="block w-full p-3 pl-10 text-sm text-white border border-surfaceHighlight rounded-xl bg-surface focus:ring-primary focus:border-primary placeholder-slate-500 transition-all shadow-sm" 
                    placeholder="Buscar fórmulas, teoremas ou código..." 
                    />
                    <div className="absolute inset-y-0 right-0 flex items-center pr-3">
                    <kbd className="hidden md:inline-block px-2 py-0.5 text-xs font-mono text-slate-400 bg-surfaceHighlight rounded border border-slate-600">⌘K</kbd>
                    </div>
                </div>
                {/* Desktop Filters */}
                <div className="hidden md:flex gap-2">
                     {['Todos', 'Cálculo', 'G.A.', 'Discreta', 'Algoritmos'].map((f, i) => (
                        <button key={f} className={`px-4 py-2.5 text-xs font-bold rounded-lg border transition-all ${i === 0 ? 'bg-primary border-primary text-background' : 'bg-surface border-surfaceHighlight text-slate-400 hover:text-white hover:border-slate-500'}`}>
                            {f}
                        </button>
                     ))}
                </div>
            </div>
            
            {/* Mobile Filters */}
            <div className="flex md:hidden gap-2 mt-3 overflow-x-auto no-scrollbar">
                <span className="px-4 py-1.5 bg-primary text-background text-xs font-bold rounded-full shadow shadow-primary/30">Todos</span>
                <span className="px-4 py-1.5 bg-surface border border-surfaceHighlight text-slate-300 text-xs font-bold rounded-full">Cálculo</span>
                <span className="px-4 py-1.5 bg-surface border border-surfaceHighlight text-slate-300 text-xs font-bold rounded-full">G.A.</span>
                <span className="px-4 py-1.5 bg-surface border border-surfaceHighlight text-slate-300 text-xs font-bold rounded-full">Discreta</span>
            </div>
         </div>
      </div>

      <main className="p-4 space-y-8 md:p-8 max-w-7xl mx-auto">
         <h2 className="text-xl font-bold font-display text-white">Fórmulas em Destaque</h2>
         
         <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {/* Card 1: Power Rule */}
            <div className="bg-surface border border-surfaceHighlight rounded-xl overflow-hidden hover:border-primary/50 transition-all hover:shadow-lg group flex flex-col">
                <div className="bg-gradient-to-r from-surface to-surfaceHighlight p-8 flex justify-center items-center border-b border-white/5 h-40">
                <span className="text-4xl font-serif italic text-primary group-hover:scale-110 transition-transform">f'(x) = n · x<sup>n-1</sup></span>
                </div>
                <div className="p-6 flex flex-col flex-1">
                <div className="flex justify-between items-start mb-3">
                    <h3 className="font-bold text-lg text-white">Derivada da Potência</h3>
                    <span className="px-2 py-0.5 bg-primary/10 text-primary text-[10px] font-bold rounded uppercase">Cálculo I</span>
                </div>
                <p className="text-sm text-slate-400 mb-6 flex-1">Fundamental para encontrar taxas de variação instantânea em funções polinomiais.</p>
                
                <div className="bg-[#0d1117] border-l-4 border-primary p-4 rounded-r-lg mb-4 font-mono">
                    <div className="flex items-center gap-2 mb-2">
                        <span className="material-symbols-outlined text-primary text-sm">terminal</span>
                        <span className="text-[10px] font-bold text-primary uppercase">Dica de Programador</span>
                    </div>
                    <code className="text-xs text-slate-300 block">
                        # Python (SymPy)<br/>
                        diff(x**n, x)
                    </code>
                </div>
                <button className="w-full py-2.5 bg-surfaceHighlight text-sm font-bold rounded-lg hover:bg-slate-700 transition-colors text-white">Ver Teoria Completa</button>
                </div>
            </div>

            {/* Card 2: Bayes */}
            <div className="bg-surface border border-surfaceHighlight rounded-xl overflow-hidden hover:border-warning/50 transition-all hover:shadow-lg group flex flex-col">
                <div className="bg-gradient-to-r from-surface to-surfaceHighlight p-8 flex justify-center items-center border-b border-white/5 h-40">
                <span className="text-2xl font-serif italic text-white group-hover:scale-105 transition-transform">P(A|B) = <span className="inline-block text-center border-b border-white leading-none pb-1">P(B|A)P(A)</span> / P(B)</span>
                </div>
                <div className="p-6 flex flex-col flex-1">
                <div className="flex justify-between items-start mb-3">
                    <h3 className="font-bold text-lg text-white">Teorema de Bayes</h3>
                    <span className="px-2 py-0.5 bg-warning/10 text-warning text-[10px] font-bold rounded uppercase">Estatística</span>
                </div>
                <p className="text-sm text-slate-400 mb-6 flex-1">Essencial para classificação em Machine Learning (Naive Bayes).</p>
                
                <div className="bg-[#0d1117] border-l-4 border-warning p-4 rounded-r-lg mb-4 font-mono">
                    <div className="flex items-center gap-2 mb-2">
                        <span className="material-symbols-outlined text-warning text-sm">terminal</span>
                        <span className="text-[10px] font-bold text-warning uppercase">Uso em Código</span>
                    </div>
                    <code className="text-xs text-slate-300 block">
                        from sklearn.naive_bayes import GaussianNB
                    </code>
                </div>
                <button className="w-full py-2.5 bg-surfaceHighlight text-sm font-bold rounded-lg hover:bg-slate-700 transition-colors text-white">Ver Teoria Completa</button>
                </div>
            </div>

            {/* Constants Grid (Replaces Card 3 slot) */}
            <div className="space-y-4 flex flex-col">
                <div className="bg-surface border border-surfaceHighlight p-6 rounded-xl flex-1 hover:border-slate-500 transition-colors">
                    <div className="flex justify-between items-start">
                        <div>
                             <p className="text-xs font-bold text-slate-500 uppercase tracking-wider">Círculo / Trig</p>
                             <p className="text-3xl font-bold text-primary mt-2">π ≈ 3.14159</p>
                        </div>
                        <span className="text-2xl font-serif text-slate-600">π</span>
                    </div>
                    <p className="text-xs font-mono text-slate-500 mt-2 bg-black/20 inline-block px-2 py-1 rounded">math.pi</p>
                </div>
                <div className="bg-surface border border-surfaceHighlight p-6 rounded-xl flex-1 hover:border-slate-500 transition-colors">
                    <div className="flex justify-between items-start">
                        <div>
                             <p className="text-xs font-bold text-slate-500 uppercase tracking-wider">Número de Euler</p>
                             <p className="text-3xl font-bold text-primary mt-2">e ≈ 2.71828</p>
                        </div>
                         <span className="text-2xl font-serif text-slate-600">e</span>
                    </div>
                    <p className="text-xs font-mono text-slate-500 mt-2 bg-black/20 inline-block px-2 py-1 rounded">math.e</p>
                </div>
                <div className="bg-surface border border-surfaceHighlight p-6 rounded-xl flex items-center justify-between hover:border-slate-500 transition-colors">
                    <div>
                        <p className="text-xs font-bold text-slate-500 uppercase tracking-wider">Identidade Trigonométrica</p>
                        <p className="text-xl font-serif italic text-white mt-2">sin²(x) + cos²(x) = 1</p>
                    </div>
                    <span className="material-symbols-outlined text-primary text-3xl opacity-50">function</span>
                </div>
            </div>
         </div>
      </main>
    </>
  );
};

// --- NUMERICAL METHOD VIEW (NEWTON-RAPHSON) ---
export const NumericalMethodView: React.FC<{ onBack: () => void }> = ({ onBack }) => {
  return (
    <>
      <Header title="Cálculo Numérico" onBack={onBack} />
      
      <main className="p-4 space-y-6 md:p-8 md:space-y-8">
        
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
            {/* Tabs */}
            <div className="bg-surface border border-surfaceHighlight p-1.5 rounded-xl flex w-full md:w-auto">
                {['Raízes de Funções', 'Interpolação', 'Integração Num.'].map((tab, i) => (
                    <button key={tab} className={`flex-1 md:flex-none md:px-6 py-2 text-xs font-bold uppercase rounded-lg transition-all ${i===0 ? 'bg-background text-primary shadow' : 'text-slate-500 hover:text-white'}`}>
                    {tab}
                    </button>
                ))}
            </div>
            
            <div className="flex items-center gap-3">
                 <button className="text-xs font-bold text-slate-400 hover:text-white flex items-center gap-1">
                     <span className="material-symbols-outlined text-sm">history</span> Histórico
                 </button>
                 <button className="bg-primary/10 text-primary px-3 py-1.5 rounded-lg text-xs font-bold border border-primary/20 hover:bg-primary/20 transition-colors">
                     Nova Simulação
                 </button>
            </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Left Col: Visualizer */}
            <div className="lg:col-span-2 space-y-6">
                <div className="flex justify-between items-end">
                    <div>
                        <span className="text-primary text-xs font-bold uppercase tracking-widest">Método Iterativo</span>
                        <h2 className="text-3xl md:text-4xl font-bold font-display text-white leading-none mt-2">Newton-Raphson</h2>
                    </div>
                    <span className="px-3 py-1.5 bg-success/10 text-success border border-success/20 text-xs font-bold rounded flex items-center gap-2">
                        <span className="size-2 bg-success rounded-full animate-pulse"></span>
                        CONVERGINDO
                    </span>
                </div>

                {/* Graph Card */}
                <div className="bg-surface border border-surfaceHighlight rounded-2xl overflow-hidden shadow-2xl">
                    <div className="p-4 border-b border-surfaceHighlight flex justify-between items-center bg-surface/50">
                        <span className="text-xs font-bold uppercase text-slate-500 tracking-wider">Visualização Gráfica</span>
                        <div className="flex gap-2">
                            <span className="text-[10px] font-mono text-slate-500">Zoom: 100%</span>
                            <span className="material-symbols-outlined text-sm text-slate-500 cursor-pointer hover:text-white">settings</span>
                        </div>
                    </div>
                    
                    <div className="aspect-square md:aspect-[16/9] bg-[#0a0e12] relative flex items-center justify-center p-8">
                        {/* Grid Lines */}
                        <div className="absolute inset-0 grid grid-cols-12 grid-rows-6 opacity-10 pointer-events-none">
                            {Array.from({length: 72}).map((_, i) => <div key={i} className="border border-primary/20"></div>)}
                        </div>
                        
                        <div className="relative w-full h-full max-w-lg md:max-w-none">
                            {/* Recharts or SVG here. Using raw SVG for custom math look */}
                            <svg viewBox="0 0 200 200" className="w-full h-full overflow-visible" preserveAspectRatio="xMidYMid meet">
                                {/* Axis */}
                                <line x1="0" y1="100" x2="200" y2="100" stroke="#30363d" strokeWidth="1" />
                                <line x1="100" y1="0" x2="100" y2="200" stroke="#30363d" strokeWidth="1" />
                                
                                {/* Curve f(x) = x^2 - 2 (shifted for view) */}
                                <path d="M 40 180 Q 100 20 160 180" fill="none" stroke="#13ecc8" strokeWidth="2" vectorEffect="non-scaling-stroke" />
                                
                                {/* Tangent Line */}
                                <line x1="160" y1="150" x2="90" y2="75" stroke="#d29922" strokeDasharray="4" strokeWidth="1.5" opacity="0.8" />
                                
                                {/* Points */}
                                <circle cx="130" cy="118" r="3" fill="#d29922" />
                                <circle cx="100" cy="85" r="3" fill="#ffffff" />
                                
                                {/* Dashed projection */}
                                <line x1="130" y1="118" x2="130" y2="100" stroke="#d29922" strokeDasharray="2" opacity="0.5" />
                            </svg>

                            {/* Legend Overlay */}
                            <div className="absolute top-4 right-4 bg-background/90 backdrop-blur p-4 rounded-lg border border-surfaceHighlight text-xs font-mono text-primary shadow-xl">
                                <div className="flex items-center gap-2 mb-1">
                                    <div className="w-3 h-0.5 bg-[#13ecc8]"></div>
                                    <span className="text-white">f(x) = x² - 2</span>
                                </div>
                                <div className="flex items-center gap-2 mb-2">
                                    <div className="w-3 h-0.5 bg-[#d29922] border-t border-dashed border-[#d29922]"></div>
                                    <span className="text-slate-400">Tangente</span>
                                </div>
                                <div className="border-t border-white/10 pt-2 text-slate-300">
                                    x₀ = <span className="text-white">2.0000</span><br/>
                                    x₁ = <span className="text-white">1.5000</span>
                                </div>
                            </div>
                        </div>
                    </div>
                    
                    <div className="p-6 bg-surfaceHighlight/20 border-t border-surfaceHighlight flex justify-between items-center backdrop-blur-sm">
                        <div className="flex gap-8">
                            <div>
                                <p className="text-[10px] text-slate-500 uppercase font-bold mb-1">Iteração Atual</p>
                                <p className="text-2xl font-bold text-white font-mono">#04</p>
                            </div>
                            <div>
                                <p className="text-[10px] text-slate-500 uppercase font-bold mb-1">Erro Relativo</p>
                                <p className="text-2xl font-bold text-primary font-mono">1.24e-5</p>
                            </div>
                        </div>
                        <div className="flex gap-3">
                             <button className="bg-surface hover:bg-surfaceHighlight text-white px-4 py-2 rounded-lg font-bold text-sm border border-surfaceHighlight transition-colors">
                                 Passo a Passo
                             </button>
                            <button className="bg-primary hover:bg-primary/80 text-background px-6 py-2 rounded-lg font-bold text-sm flex items-center gap-2 transition-colors shadow-lg shadow-primary/20">
                                <span className="material-symbols-outlined text-sm">play_arrow</span>
                                SIMULAR
                            </button>
                        </div>
                    </div>
                </div>
            </div>

            {/* Right Col: Theory & Code */}
            <div className="space-y-6">
                {/* Info Grid */}
                <div className="grid grid-cols-2 lg:grid-cols-1 gap-4">
                    <div className="bg-surface border border-surfaceHighlight p-6 rounded-xl hover:border-primary/30 transition-colors">
                        <h3 className="text-xs font-bold text-primary uppercase mb-4 flex items-center gap-2">
                            <span className="material-symbols-outlined text-sm">calculate</span> Equação de Recorrência
                        </h3>
                        <div className="text-center py-4 bg-black/20 rounded-lg">
                            <p className="font-serif italic text-xl text-white">x<sub>n+1</sub> = x<sub>n</sub> - <span className="inline-block border-b border-white px-1 mb-1">f(x<sub>n</sub>)</span></p>
                            <p className="font-serif italic text-xl text-white"><span className="inline-block px-1">f'(x<sub>n</sub>)</span></p>
                        </div>
                    </div>
                    <div className="bg-surface border border-surfaceHighlight p-6 rounded-xl text-center flex flex-col justify-center hover:border-primary/30 transition-colors">
                        <h3 className="text-xs font-bold text-primary uppercase mb-2 flex items-center justify-center gap-2">
                            <span className="material-symbols-outlined text-sm">speed</span> Complexidade
                        </h3>
                        <p className="text-3xl font-bold text-white font-display">O(log n)</p>
                        <p className="text-[10px] text-slate-500 uppercase tracking-widest mt-1">Convergência Quadrática</p>
                    </div>
                </div>

                {/* Code Snippet */}
                <div className="bg-[#0d1117] border border-surfaceHighlight rounded-xl p-5 font-mono text-xs relative overflow-hidden group h-full">
                    <div className="flex gap-1.5 mb-4 border-b border-white/5 pb-3 items-center">
                        <div className="size-2.5 rounded-full bg-red-500/80"></div>
                        <div className="size-2.5 rounded-full bg-yellow-500/80"></div>
                        <div className="size-2.5 rounded-full bg-green-500/80"></div>
                        <span className="ml-auto text-slate-500 text-[10px]">implementation.py</span>
                    </div>
                    <div className="text-slate-300 leading-loose">
                        <span className="text-purple-400">def</span> <span className="text-blue-400">newton_raphson</span>(f, df, x0, tol):<br/>
                        &nbsp;&nbsp;<span className="text-slate-500"># Start iteration</span><br/>
                        &nbsp;&nbsp;x = x0<br/>
                        &nbsp;&nbsp;<span className="text-purple-400">while</span> <span className="text-yellow-300">abs</span>(f(x)) {'>'} tol:<br/>
                        &nbsp;&nbsp;&nbsp;&nbsp;<span className="text-slate-500"># Update x using tangent</span><br/>
                        &nbsp;&nbsp;&nbsp;&nbsp;x = x - f(x) / df(x)<br/>
                        &nbsp;&nbsp;&nbsp;&nbsp;<span className="text-blue-300">print</span>(f<span className="text-green-300">"Current x: &#123;x&#125;"</span>)<br/>
                        &nbsp;&nbsp;<span className="text-purple-400">return</span> x
                    </div>
                    <div className="absolute inset-x-0 bottom-0 h-12 bg-gradient-to-t from-[#0d1117] to-transparent flex items-end justify-center pb-3">
                        <button className="text-primary font-bold text-xs flex items-center gap-1 hover:underline">
                            Copiar Código <span className="material-symbols-outlined text-xs">content_copy</span>
                        </button>
                    </div>
                </div>
            </div>
        </div>
      </main>
    </>
  );
};

// --- DISCRETE MATH VIEW ---
export const DiscreteMathView: React.FC<{ onBack: () => void }> = ({ onBack }) => {
   return (
      <>
         <Header title="Matemática Discreta" subtitle="Fundamentos da Computação" onBack={onBack} />
         <main className="p-4 space-y-8 md:p-8 md:space-y-12 max-w-6xl mx-auto">
            
            {/* Hero Stats */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <div className="md:col-span-2 bg-gradient-to-br from-surface to-surfaceHighlight border border-surfaceHighlight p-6 md:p-8 rounded-2xl flex justify-between items-center shadow-lg">
                    <div>
                        <p className="text-primary text-xs font-bold uppercase tracking-widest mb-2">Trilha Principal</p>
                        <h2 className="text-white font-bold text-2xl md:text-4xl font-display mb-1">Fundamentos de Lógica</h2>
                        <p className="text-slate-400 text-sm">Módulo 2 de 5 • 12 Aulas restantes</p>
                    </div>
                    <div className="text-right hidden md:block">
                        <div className="size-20 rounded-full border-4 border-primary/30 flex items-center justify-center relative">
                            <span className="text-2xl font-bold text-white">40%</span>
                            <div className="absolute inset-0 border-4 border-primary rounded-full border-l-transparent border-b-transparent rotate-45"></div>
                        </div>
                    </div>
                </div>
                
                <div className="bg-surface border border-surfaceHighlight p-6 rounded-2xl flex flex-col justify-center gap-4">
                     <div className="flex items-center gap-3">
                         <div className="size-10 bg-accent/10 rounded-lg flex items-center justify-center text-accent">
                             <span className="material-symbols-outlined">emoji_events</span>
                         </div>
                         <div>
                             <p className="text-sm font-bold text-white">Conquistas</p>
                             <p className="text-xs text-slate-500">3 Desbloqueadas</p>
                         </div>
                     </div>
                     <div className="w-full h-px bg-surfaceHighlight"></div>
                     <div className="flex gap-2">
                         <div className="size-8 rounded bg-yellow-500/20 border border-yellow-500/50" title="Lógica Master"></div>
                         <div className="size-8 rounded bg-purple-500/20 border border-purple-500/50" title="Recursão"></div>
                         <div className="size-8 rounded bg-surfaceHighlight border border-white/5 opacity-50"></div>
                     </div>
                </div>
            </div>

            <div className="relative">
               {/* Vertical Line */}
               <div className="absolute left-[20px] md:left-1/2 md:-ml-0.5 top-0 bottom-0 w-0.5 bg-gradient-to-b from-primary via-primary to-surfaceHighlight"></div>

               <div className="space-y-12">
                   {/* Module 1 - Completed */}
                   <div className="relative pl-12 md:pl-0 md:grid md:grid-cols-2 md:gap-12 md:items-center group">
                      <div className="absolute left-0 md:left-1/2 md:-ml-4 top-0 md:top-1/2 md:-mt-4 size-10 md:size-8 bg-primary rounded-full flex items-center justify-center text-background border-4 border-background z-10 shadow-lg">
                         <span className="material-symbols-outlined text-sm font-bold">done</span>
                      </div>
                      
                      {/* Left side text on Desktop */}
                      <div className="md:text-right">
                         <h3 className="text-xl font-bold text-white mb-2 md:mb-1 group-hover:text-primary transition-colors">Lógica Proposicional</h3>
                         <p className="text-sm text-slate-400 mb-2">Tabelas Verdade, Tautologias e Equivalências.</p>
                         <span className="text-[10px] font-bold text-primary bg-primary/10 px-2 py-1 rounded inline-block">CONCLUÍDO</span>
                      </div>

                      {/* Right side Card on Desktop */}
                      <div className="mt-4 md:mt-0">
                         <div className="bg-surface border border-surfaceHighlight rounded-xl overflow-hidden shadow-lg hover:border-primary/50 transition-all opacity-80 hover:opacity-100 group-hover:translate-x-1">
                            <div className="h-32 bg-cover bg-center relative" style={{ backgroundImage: 'linear-gradient(to top, #161b22, transparent), url(https://picsum.photos/400/200?blur=2)' }}>
                                <div className="absolute bottom-2 left-2 flex items-center gap-2 text-xs text-slate-300 bg-black/50 px-2 py-1 rounded backdrop-blur-sm">
                                    <span className="material-symbols-outlined text-sm text-accent">alt_route</span>
                                    Circuitos Digitais
                                </div>
                            </div>
                         </div>
                      </div>
                   </div>

                   {/* Module 2 - Active */}
                   <div className="relative pl-12 md:pl-0 md:grid md:grid-cols-2 md:gap-12 md:items-center">
                      <div className="absolute left-0 md:left-1/2 md:-ml-4 top-0 md:top-1/2 md:-mt-4 size-10 md:size-8 bg-background border-4 border-primary rounded-full flex items-center justify-center z-10 shadow-[0_0_20px_rgba(20,156,184,0.6)]">
                         <div className="size-3 bg-primary rounded-full animate-pulse"></div>
                      </div>

                      {/* Swapped order for visual balance on desktop timeline */}
                      <div className="hidden md:block">
                          <div className="bg-surface border border-primary/50 rounded-xl overflow-hidden shadow-2xl transform hover:scale-[1.02] transition-transform duration-300">
                             <div className="h-40 bg-cover bg-center relative" style={{ backgroundImage: 'linear-gradient(to top, #161b22, transparent), url(https://picsum.photos/401/200)' }}>
                                <span className="absolute top-2 right-2 text-[10px] font-bold text-white bg-primary px-3 py-1 rounded shadow-lg">EM ANDAMENTO</span>
                             </div>
                             <div className="p-6">
                                <ul className="space-y-3 text-sm text-slate-400">
                                   <li className="flex gap-3 items-center text-primary font-bold"><span className="material-symbols-outlined text-sm">check_circle</span> Indução Fraca</li>
                                   <li className="flex gap-3 items-center text-white"><span className="material-symbols-outlined text-sm">radio_button_unchecked</span> Indução Forte</li>
                                </ul>
                                <button className="w-full mt-6 bg-primary text-background font-bold py-3 rounded-lg flex justify-center items-center gap-2 hover:brightness-110 transition-all">
                                   Continuar Aula <span className="material-symbols-outlined text-sm">arrow_forward</span>
                                </button>
                             </div>
                          </div>
                      </div>

                      <div className="md:text-left">
                          <h3 className="text-2xl font-bold text-white mb-2 text-primary md:text-white">Indução e Recursão</h3>
                          <div className="flex items-center gap-2 mb-4 text-xs text-slate-400 md:bg-surfaceHighlight md:p-2 md:rounded-lg md:inline-flex border border-transparent md:border-surfaceHighlight">
                             <span className="material-symbols-outlined text-sm text-primary">speed</span>
                             Conexão: Análise de Algoritmos O(n)
                          </div>
                          <p className="text-slate-400 text-sm leading-relaxed mb-4 hidden md:block">
                              Aprenda a provar a corretude de laços de repetição e fórmulas recursivas. Base essencial para Design de Algoritmos.
                          </p>
                          
                          {/* Mobile Card Version */}
                          <div className="md:hidden bg-surface border border-primary/50 rounded-xl overflow-hidden shadow-xl mt-4">
                             <div className="h-24 bg-cover bg-center" style={{ backgroundImage: 'linear-gradient(to top, #161b22, transparent), url(https://picsum.photos/401/200)' }}></div>
                             <div className="p-4">
                                <span className="text-[10px] font-bold text-white bg-primary px-2 py-1 rounded">EM ANDAMENTO</span>
                                <button className="w-full mt-4 bg-primary text-background font-bold py-2 rounded-lg flex justify-center items-center gap-2">
                                   Continuar <span className="material-symbols-outlined text-sm">arrow_forward</span>
                                </button>
                             </div>
                          </div>
                      </div>
                   </div>

                   {/* Module 3 - Locked */}
                   <div className="relative pl-12 md:pl-0 md:grid md:grid-cols-2 md:gap-12 md:items-center opacity-50 grayscale hover:grayscale-0 hover:opacity-70 transition-all">
                      <div className="absolute left-0 md:left-1/2 md:-ml-4 top-0 md:top-1/2 md:-mt-4 size-10 md:size-8 bg-surfaceHighlight rounded-full flex items-center justify-center border-4 border-background z-10">
                         <span className="material-symbols-outlined text-sm text-slate-500">lock</span>
                      </div>
                      
                      <div className="md:text-right">
                         <h3 className="text-xl font-bold text-white mb-1">Teoria dos Grafos</h3>
                         <p className="text-sm text-slate-500">Caminhos, Árvores e Redes.</p>
                      </div>

                      <div className="mt-4 md:mt-0">
                          <div className="bg-surface border border-surfaceHighlight rounded-xl p-6 h-32 flex items-center justify-center border-dashed">
                             <div className="flex flex-col items-center gap-2">
                                 <span className="material-symbols-outlined text-3xl text-slate-600">hub</span>
                                 <span className="text-xs font-bold text-slate-600 uppercase">Bloqueado</span>
                             </div>
                          </div>
                      </div>
                   </div>
               </div>
            </div>
         </main>
      </>
   );
};