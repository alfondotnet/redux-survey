export default [
        {
          questionText: 'Question 1',
          answer: null,
          possibleAnswers: [1,2,3],
          getScore: function(score) { return score; }
        },
        {
          questionText: 'Question 2',
          answer: null,
          possibleAnswers: [1,2,3],
          getScore: function(score) { return score + 1; }
        }
];
