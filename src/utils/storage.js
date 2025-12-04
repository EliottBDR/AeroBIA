const STORAGE_KEY = 'aerobia_stats';
const USER_KEY = 'aerobia_user';

export const getUser = () => {
    const user = localStorage.getItem(USER_KEY);
    return user ? JSON.parse(user) : null;
};

export const saveUser = (pseudo, avatar) => {
    const user = { pseudo, avatar };
    localStorage.setItem(USER_KEY, JSON.stringify(user));
    return user;
};

export const getStats = () => {
    const stats = localStorage.getItem(STORAGE_KEY);
    if (!stats) {
        return {
            xp: 0,
            streak: 0,
            lastPlayed: null,
            progress: {} // { "Matière": percentage }
        };
    }
    return JSON.parse(stats);
};

export const saveQuizResult = (score, total, subject) => {
    const stats = getStats();
    const today = new Date().toDateString();

    // Update XP
    stats.xp += score * 10;

    // Update Streak
    if (stats.lastPlayed !== today) {
        const yesterday = new Date();
        yesterday.setDate(yesterday.getDate() - 1);

        if (stats.lastPlayed === yesterday.toDateString()) {
            stats.streak += 1;
        } else {
            stats.streak = 1;
        }
        stats.lastPlayed = today;
    }

    // Update Progress
    // Simple logic: if score > 50%, increase progress by 10% up to 100%
    // This is a simplification. Ideally we'd track specific questions.
    if (!stats.progress[subject]) {
        stats.progress[subject] = 0;
    }

    const currentProgress = stats.progress[subject];
    const performance = score / total;

    if (performance >= 0.5) {
        stats.progress[subject] = Math.min(100, currentProgress + 10);
    }

    localStorage.setItem(STORAGE_KEY, JSON.stringify(stats));
    return stats;
};

export const resetStats = () => {
    localStorage.removeItem(STORAGE_KEY);
};
