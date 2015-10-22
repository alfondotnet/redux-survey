const questions = [
'question 1',
'question 2',
'question 3'
];

const questionList = questions.map(i => {
        return {
          questionText: i,
          answer: null,
          possibleAnswers: ['yay','noes'],
          getScore: function(ans) { return (ans === 'yay') ? 1 : 0; }
        }});

export default questionList;
