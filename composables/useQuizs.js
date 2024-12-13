export default function(){
    const getQuizs = async () => {
        try {
            const quizs = await queryContent('quizs').find()
            return quizs
        } catch (error) {
            console.error('Error fetching quizzes:', error)
            throw error
        }
    }

    return {
        getQuizs
    };
}