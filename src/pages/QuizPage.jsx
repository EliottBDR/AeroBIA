import React from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import QuizComponent from '../components/QuizComponent';
import questions from '../data/questions.json';

const QuizPage = () => {
    const { subjectId } = useParams();
    const navigate = useNavigate();

    // Filter questions based on subjectId (simple mapping)
    // In a real app, use proper IDs. Here we map the URL param to the JSON 'matiere' field roughly.
    const subjectMap = {
        'meteo': 'Météorologie',
        'aero': 'Aérodynamique',
        'histoire': 'Histoire',
        'nav': 'Navigation',
        'aeronefs': 'Aéronefs'
    };

    const subjectName = subjectMap[subjectId];

    // Redirect if subject is invalid
    React.useEffect(() => {
        if (!subjectName) {
            navigate('/');
        }
    }, [subjectName, navigate]);

    const filteredQuestions = React.useMemo(() => {
        if (!subjectName) return [];
        return Array.isArray(questions) ? questions.filter(q =>
            q && q.matiere && q.matiere.toLowerCase().includes(subjectName.toLowerCase())
        ) : [];
    }, [subjectName]);

    const quizQuestions = filteredQuestions;

    const handleComplete = (score, total) => {
        // Save progress here (localStorage)
        console.log(`Finished with ${score}/${total}`);
        navigate('/');
    };

    return (
        <div className="h-[calc(100vh-80px)]">
            {/* Adjust height to account for layout padding if needed, 
          but QuizComponent handles its own scrolling/layout */}
            <QuizComponent
                key={subjectId}
                questions={quizQuestions}
                onComplete={handleComplete}
            />
        </div>
    );
};

export default QuizPage;
