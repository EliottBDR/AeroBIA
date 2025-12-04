import React, { useEffect, useState } from 'react';
import { Trophy, Flame, Target } from 'lucide-react';
import { getStats } from '../utils/storage';

const Stats = () => {
    const [stats, setStats] = useState({
        xp: 0,
        streak: 0,
        progress: {}
    });

    useEffect(() => {
        setStats(getStats());
    }, []);

    const subjects = ['Météorologie', 'Aérodynamique et Mécanique du Vol', 'Histoire de l\'Aéronautique', 'Navigation, Sécurité et Réglementation', 'Étude des Aéronefs'];

    return (
        <div className="space-y-6">
            <h2 className="text-2xl font-bold text-slate-800">Tes Statistiques</h2>

            <div className="grid grid-cols-2 gap-4">
                <div className="card border-amber-200 bg-amber-50">
                    <div className="flex items-center gap-2 mb-2 text-amber-600">
                        <Flame size={20} />
                        <span className="font-bold uppercase text-xs">Série</span>
                    </div>
                    <p className="text-3xl font-extrabold text-amber-600">{stats.streak}</p>
                    <p className="text-xs text-amber-600/80">jours</p>
                </div>
                <div className="card border-blue-200 bg-blue-50">
                    <div className="flex items-center gap-2 mb-2 text-blue-600">
                        <Trophy size={20} />
                        <span className="font-bold uppercase text-xs">XP Total</span>
                    </div>
                    <p className="text-3xl font-extrabold text-blue-600">{stats.xp}</p>
                    <p className="text-xs text-blue-600/80">points</p>
                </div>
            </div>

            <div className="card">
                <div className="flex items-center gap-2 mb-4 text-slate-400">
                    <Target size={20} />
                    <span className="font-bold uppercase text-xs">Progression par matière</span>
                </div>

                <div className="space-y-4">
                    {subjects.map((subject) => {
                        const progress = stats.progress[subject] || 0;
                        return (
                            <div key={subject}>
                                <div className="flex justify-between text-sm font-bold text-slate-600 mb-1">
                                    <span className="truncate pr-4">{subject}</span>
                                    <span>{progress}%</span>
                                </div>
                                <div className="w-full h-3 bg-slate-100 rounded-full overflow-hidden">
                                    <div
                                        className="h-full bg-primary rounded-full transition-all duration-500"
                                        style={{ width: `${progress}%` }}
                                    />
                                </div>
                            </div>
                        );
                    })}
                </div>
            </div>
        </div>
    );
};

export default Stats;
