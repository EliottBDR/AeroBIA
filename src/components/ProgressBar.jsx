import React from 'react';

const ProgressBar = ({ current, total }) => {
    const percentage = Math.round((current / total) * 100);

    return (
        <div className="w-full h-4 bg-slate-200 rounded-full overflow-hidden">
            <div
                className="h-full bg-secondary transition-all duration-500 ease-out rounded-full"
                style={{ width: `${percentage}%` }}
            />
        </div>
    );
};

export default ProgressBar;
