import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Plane, BarChart2, Home, User, Cloud, Star, Rocket } from 'lucide-react';
import { getUser } from '../utils/storage';
import Login from './Login';

const AVATAR_ICONS = {
    pilot: User,
    plane: Plane,
    cloud: Cloud,
    star: Star,
    rocket: Rocket
};

const Layout = ({ children }) => {
    const location = useLocation();
    const [user, setUser] = useState(null);

    useEffect(() => {
        const storedUser = getUser();
        if (storedUser) {
            setUser(storedUser);
        }
    }, []);

    const isActive = (path) => location.pathname === path;
    const AvatarIcon = user ? AVATAR_ICONS[user.avatar] : User;

    return (
        <div className="min-h-screen flex flex-col max-w-md mx-auto bg-white border-x border-slate-200 shadow-xl relative">
            {!user && <Login onLogin={setUser} />}

            {/* Header */}
            <header className="p-4 border-b border-slate-100 flex items-center justify-between sticky top-0 bg-white/80 backdrop-blur-sm z-10">
                <h1 className="text-xl font-extrabold text-slate-400 tracking-widest uppercase">Aéro<span className="text-primary">BIA</span></h1>
                {user && (
                    <div className="flex items-center gap-2 bg-slate-50 px-3 py-1 rounded-full border border-slate-100">
                        <span className="font-bold text-slate-600 text-sm">{user.pseudo}</span>
                        <div className="bg-primary/10 p-1 rounded-full text-primary">
                            <AvatarIcon size={16} />
                        </div>
                    </div>
                )}
            </header>

            {/* Main Content */}
            <main className="flex-1 p-4 pb-24">
                {children}
            </main>

            {/* Bottom Navigation */}
            <nav className="fixed bottom-0 w-full max-w-md bg-white border-t border-slate-200 p-2 flex justify-around items-center z-10">
                <Link to="/" className={`p-3 rounded-xl flex flex-col items-center gap-1 transition-colors ${isActive('/') ? 'text-primary bg-blue-50' : 'text-slate-400 hover:bg-slate-50'}`}>
                    <Home size={24} strokeWidth={isActive('/') ? 3 : 2} />
                    <span className="text-xs font-bold uppercase">Accueil</span>
                </Link>
                <Link to="/stats" className={`p-3 rounded-xl flex flex-col items-center gap-1 transition-colors ${isActive('/stats') ? 'text-primary bg-blue-50' : 'text-slate-400 hover:bg-slate-50'}`}>
                    <BarChart2 size={24} strokeWidth={isActive('/stats') ? 3 : 2} />
                    <span className="text-xs font-bold uppercase">Stats</span>
                </Link>
            </nav>
        </div>
    );
};

export default Layout;
