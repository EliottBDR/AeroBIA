import React from 'react';
import { Link } from 'react-router-dom';
import { Cloud, Wind, BookOpen, Navigation, Clock, Award } from 'lucide-react';

const Home = () => {
    const modules = [
        { id: 'meteo', title: 'Météorologie', icon: Cloud, color: 'bg-blue-100 text-blue-600', border: 'border-blue-200' },
        { id: 'aero', title: 'Aérodynamique', icon: Wind, color: 'bg-emerald-100 text-emerald-600', border: 'border-emerald-200' },
        { id: 'histoire', title: 'Histoire', icon: Clock, color: 'bg-amber-100 text-amber-600', border: 'border-amber-200' },
        { id: 'nav', title: 'Navigation', icon: Navigation, color: 'bg-purple-100 text-purple-600', border: 'border-purple-200' },
        { id: 'aeronefs', title: 'Aéronefs', icon: BookOpen, color: 'bg-rose-100 text-rose-600', border: 'border-rose-200' },
    ];

    return (
        <div className="relative overflow-hidden min-h-full">
            {/* Animated Background Clouds */}
            <div className="absolute top-10 left-0 w-full opacity-20 pointer-events-none z-0">
                <Cloud size={64} className="text-blue-300 absolute top-0 left-0 cloud-animation-slow" />
                <Cloud size={48} className="text-blue-200 absolute top-20 left-0 cloud-animation" style={{ animationDelay: '-10s' }} />
                <Cloud size={80} className="text-blue-400 absolute top-40 left-0 cloud-animation-fast" style={{ animationDelay: '-5s' }} />
            </div>

            <div className="relative z-10 space-y-8">
                <div className="text-center space-y-2 mt-4">
                    <h2 className="text-3xl font-extrabold text-slate-800">Prêt à décoller ?</h2>
                    <p className="text-slate-500 font-medium">Choisis ton module de révision</p>
                </div>

                <div className="grid gap-4">
                    {modules.map((module) => {
                        const Icon = module.icon;
                        return (
                            <Link
                                key={module.id}
                                to={`/quiz/${module.id}`}
                                className={`group relative overflow-hidden p-4 rounded-2xl border-2 ${module.border} bg-white hover:bg-slate-50 transition-all duration-300 shadow-sm hover:shadow-md active:scale-95`}
                            >
                                <div className="flex items-center gap-4">
                                    <div className={`p-3 rounded-xl ${module.color} transition-transform group-hover:scale-110 duration-300`}>
                                        <Icon size={24} />
                                    </div>
                                    <div className="flex-1">
                                        <h3 className="font-bold text-slate-700 text-lg group-hover:text-primary transition-colors">{module.title}</h3>
                                        <p className="text-xs text-slate-400 font-semibold uppercase tracking-wider">Module BIA</p>
                                    </div>
                                    <div className="text-slate-300 group-hover:translate-x-1 transition-transform duration-300">
                                        <Wind size={20} />
                                    </div>
                                </div>
                            </Link>
                        );
                    })}
                </div>

                <div className="bg-gradient-to-r from-blue-500 to-cyan-400 p-6 rounded-3xl text-white shadow-lg shadow-blue-200 relative overflow-hidden group">
                    <div className="absolute top-0 right-0 p-4 opacity-10 group-hover:scale-110 transition-transform duration-500">
                        <Award size={120} />
                    </div>
                    <div className="relative z-10">
                        <h3 className="font-bold text-xl mb-1">Objectif Mention TB !</h3>
                        <p className="text-blue-50 text-sm mb-4">Révise régulièrement pour maintenir ta série.</p>
                        <Link to="/stats" className="inline-block bg-white text-blue-600 font-bold py-2 px-4 rounded-xl text-sm hover:bg-blue-50 transition-colors">
                            Voir ma progression
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Home;
