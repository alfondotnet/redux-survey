const questions = [
'question 1',
'question 2',
'question 3'
];

const questionList = questions.map(i => {
        return {
          questionText: i,
          answer: null,
          possibleAnswers: [0,1,2,3],
          getScore: function(score) { return score; }
        }});

export default questionList;
