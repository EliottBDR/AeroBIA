import React, { useState, useEffect, useMemo } from 'react';
import { Check, X, Heart, ArrowRight, Home } from 'lucide-react';
import { Link } from 'react-router-dom';
import ProgressBar from './ProgressBar';
import { saveQuizResult } from '../utils/storage';

const QuizComponent = ({ questions, onComplete }) => {
    const [currentIndex, setCurrentIndex] = useState(0);
    const [selectedAnswer, setSelectedAnswer] = useState(null);
    const [isValidated, setIsValidated] = useState(false);
    const [hearts, setHearts] = useState(3);
    const [score, setScore] = useState(0);
    const [isFinished, setIsFinished] = useState(false);

    const [shuffledQuestions, setShuffledQuestions] = useState([]);

    // Fisher-Yates shuffle function
    const shuffleArray = (array) => {
        const newArray = [...array];
        for (let i = newArray.length - 1; i > 0; i--) {
            const j = Math.floor(Math.random() * (i + 1));
            [newArray[i], newArray[j]] = [newArray[j], newArray[i]];
        }
        return newArray;
    };

    // Shuffle questions on mount or when questions prop changes
    useEffect(() => {
        if (questions && questions.length > 0) {
            const shuffled = shuffleArray(questions);
            setShuffledQuestions(shuffled);
            setCurrentIndex(0);
            setScore(0);
            setHearts(3);
            setIsFinished(false);
            setIsValidated(false);
            setSelectedAnswer(null);
        }
    }, [questions]);

    const currentQuestion = shuffledQuestions[currentIndex];

    // Shuffle choices for current question
    const shuffledChoices = useMemo(() => {
        if (!currentQuestion || !currentQuestion.choix) return [];
        const choices = currentQuestion.choix.map((c, i) => ({ text: c, originalIndex: i }));
        return shuffleArray(choices);
    }, [currentQuestion]);

    const handleSelect = (originalIndex) => {
        if (!isValidated) {
            setSelectedAnswer(originalIndex);
        }
    };

    const handleValidate = () => {
        if (selectedAnswer === null) return;

        setIsValidated(true);
        const isCorrect = selectedAnswer === currentQuestion.reponse_correcte;

        if (isCorrect) {
            setScore(score + 1);
        } else {
            setHearts(hearts - 1);
        }
    };

    const handleNext = () => {
        if (hearts === 0) {
            setIsFinished(true);
            return;
        }

        if (currentIndex < shuffledQuestions.length - 1) {
            setCurrentIndex(currentIndex + 1);
            setSelectedAnswer(null);
            setIsValidated(false);
        } else {
            setIsFinished(true);
        }
    };

    useEffect(() => {
        if (hearts === 0) {
            setIsFinished(true);
        }
    }, [hearts]);

    // Loading state
    if (!questions || questions.length === 0) {
        return <div className="p-8 text-center text-slate-500">Chargement des questions...</div>;
    }

    // Error state
    if (!currentQuestion) {
        // If we have questions but no current question, we might be initializing
        return <div className="p-8 text-center text-slate-500">Préparation du quiz...</div>;
    }

    if (isFinished) {
        return (
            <div className="flex flex-col items-center justify-center h-full space-y-6 text-center animate-in fade-in slide-in-from-bottom-4 duration-500">
                <div className="text-6xl mb-4">
                    {hearts > 0 ? '🎉' : '💔'}
                </div>
                <h2 className="text-2xl font-bold text-slate-800">
                    {hearts > 0 ? 'Leçon terminée !' : 'Plus de vies !'}
                </h2>
                <div className="bg-slate-100 p-6 rounded-2xl w-full max-w-xs">
                    <div className="flex justify-between items-center mb-2">
                        <span className="font-bold text-slate-500">Score</span>
                        <span className="font-bold text-xl text-primary">{score} / {questions.length}</span>
                    </div>
                    <div className="flex justify-between items-center">
                        <span className="font-bold text-slate-500">Précision</span>
                        <span className="font-bold text-xl text-secondary">{Math.round((score / questions.length) * 100)}%</span>
                    </div>
                </div>
                <button
                    onClick={() => {
                        saveQuizResult(score, questions.length, questions[0].matiere);
                        onComplete(score, questions.length);
                    }}
                    className="btn-primary w-full max-w-xs"
                >
                    CONTINUER
                </button>
            </div>
        );
    }

    const isCorrect = selectedAnswer === currentQuestion.reponse_correcte;

    return (
        <div className="flex flex-col h-full max-w-md mx-auto">
            {/* Top Bar */}
            <div className="flex items-center gap-4 mb-6">
                <Link to="/" className="text-slate-400 hover:bg-slate-100 p-2 rounded-full">
                    <Home size={24} />
                </Link>
                <ProgressBar current={currentIndex} total={questions.length} />
                <div className="flex items-center gap-1 text-danger font-bold text-lg">
                    <Heart fill="currentColor" size={24} />
                    <span>{hearts}</span>
                </div>
            </div>

            {/* Question */}
            <div className="flex-1 overflow-y-auto pb-32">
                <h2 className="text-xl font-bold text-slate-700 mb-8 leading-relaxed">
                    {currentQuestion.question}
                </h2>

                <div className="space-y-3">
                    {shuffledChoices.map((choiceObj, index) => {
                        const originalIndex = choiceObj.originalIndex;
                        let stateClass = "border-slate-200 hover:bg-slate-50";

                        if (selectedAnswer === originalIndex) {
                            stateClass = "border-primary bg-blue-50 text-primary shadow-[0_2px_0_0_#3b82f6]";
                        }

                        if (isValidated) {
                            if (originalIndex === currentQuestion.reponse_correcte) {
                                stateClass = "border-secondary bg-emerald-50 text-secondary shadow-[0_2px_0_0_#10b981]";
                            } else if (selectedAnswer === originalIndex) {
                                stateClass = "border-danger bg-red-50 text-danger shadow-[0_2px_0_0_#ef4444]";
                            } else {
                                stateClass = "border-slate-200 opacity-50";
                            }
                        }

                        return (
                            <button
                                key={index}
                                disabled={isValidated}
                                onClick={() => handleSelect(originalIndex)}
                                className={`w-full p-4 rounded-xl border-2 text-left font-semibold transition-all duration-200 flex items-center justify-between group ${stateClass}`}
                            >
                                <span>{choiceObj.text}</span>
                                {selectedAnswer === originalIndex && !isValidated && (
                                    <div className="w-4 h-4 rounded-full border-2 border-primary bg-primary" />
                                )}
                            </button>
                        );
                    })}
                </div>
            </div>

            {/* Bottom Action Bar */}
            <div className={`fixed bottom-0 left-0 right-0 p-4 border-t-2 z-50 ${isValidated ? (isCorrect ? 'bg-emerald-100 border-emerald-200' : 'bg-red-100 border-red-200') : 'bg-white border-slate-200'}`}>
                <div className="max-w-md mx-auto">
                    {isValidated ? (
                        <div className="mb-4 flex gap-4 animate-in slide-in-from-bottom-2">
                            <div className={`p-2 rounded-full h-fit ${isCorrect ? 'bg-white text-secondary' : 'bg-white text-danger'}`}>
                                {isCorrect ? <Check size={32} /> : <X size={32} />}
                            </div>
                            <div>
                                <h3 className={`font-bold text-xl mb-1 ${isCorrect ? 'text-secondary' : 'text-danger'}`}>
                                    {isCorrect ? 'Excellent !' : 'Pas tout à fait...'}
                                </h3>
                                <p className={`${isCorrect ? 'text-emerald-800' : 'text-red-800'}`}>
                                    {currentQuestion.explication}
                                </p>
                            </div>
                        </div>
                    ) : null}

                    <button
                        onClick={isValidated ? handleNext : handleValidate}
                        disabled={selectedAnswer === null}
                        className={`w-full font-bold py-3 px-6 rounded-xl transition-all duration-200 shadow-[0_4px_0_0_rgba(0,0,0,0.1)] active:shadow-none active:translate-y-[4px] uppercase tracking-wider
              ${isValidated
                                ? (isCorrect ? 'bg-secondary text-white shadow-emerald-700' : 'bg-danger text-white shadow-red-700')
                                : (selectedAnswer !== null ? 'bg-secondary text-white shadow-emerald-700' : 'bg-slate-200 text-slate-400 shadow-slate-300 cursor-not-allowed')
                            }
            `}
                    >
                        {isValidated ? 'Continuer' : 'Valider'}
                    </button>
                </div>
            </div>
        </div>
    );
};

export default QuizComponent;
