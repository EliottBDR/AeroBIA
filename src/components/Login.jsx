import React, { useState } from 'react';
import { User, Plane, Cloud, Star, Rocket } from 'lucide-react';
import { saveUser } from '../utils/storage';

const AVATARS = [
    { id: 'pilot', icon: User, label: 'Pilote' },
    { id: 'plane', icon: Plane, label: 'Avion' },
    { id: 'cloud', icon: Cloud, label: 'Nuage' },
    { id: 'star', icon: Star, label: 'Étoile' },
    { id: 'rocket', icon: Rocket, label: 'Fusée' },
];

const Login = ({ onLogin }) => {
    const [pseudo, setPseudo] = useState('');
    const [selectedAvatar, setSelectedAvatar] = useState('pilot');

    const handleSubmit = (e) => {
        e.preventDefault();
        if (pseudo.trim()) {
            const user = saveUser(pseudo, selectedAvatar);
            onLogin(user);
        }
    };

    return (
        <div className="fixed inset-0 bg-slate-900/80 flex items-center justify-center z-50 p-4 backdrop-blur-sm">
            <div className="bg-white rounded-3xl p-8 w-full max-w-md shadow-2xl animate-in fade-in zoom-in duration-300">
                <div className="text-center mb-8">
                    <h2 className="text-3xl font-extrabold text-slate-800 mb-2">Bienvenue !</h2>
                    <p className="text-slate-500">Crée ton profil pour sauvegarder ta progression.</p>
                </div>

                <form onSubmit={handleSubmit} className="space-y-6">
                    <div>
                        <label className="block text-sm font-bold text-slate-700 mb-2">Choisis ton Avatar</label>
                        <div className="flex justify-between gap-2">
                            {AVATARS.map((avatar) => {
                                const Icon = avatar.icon;
                                const isSelected = selectedAvatar === avatar.id;
                                return (
                                    <button
                                        key={avatar.id}
                                        type="button"
                                        onClick={() => setSelectedAvatar(avatar.id)}
                                        className={`p-3 rounded-xl transition-all duration-200 ${isSelected ? 'bg-primary text-white scale-110 shadow-lg' : 'bg-slate-100 text-slate-400 hover:bg-slate-200'}`}
                                    >
                                        <Icon size={24} />
                                    </button>
                                );
                            })}
                        </div>
                    </div>

                    <div>
                        <label className="block text-sm font-bold text-slate-700 mb-2">Ton Pseudo</label>
                        <input
                            type="text"
                            value={pseudo}
                            onChange={(e) => setPseudo(e.target.value)}
                            placeholder="Capitaine..."
                            className="w-full p-4 rounded-xl border-2 border-slate-200 focus:border-primary focus:outline-none font-bold text-lg text-slate-700 placeholder:text-slate-300 transition-colors"
                            required
                        />
                    </div>

                    <button
                        type="submit"
                        className="btn-primary w-full text-lg"
                    >
                        C'est parti !
                    </button>
                </form>
            </div>
        </div>
    );
};

export default Login;
