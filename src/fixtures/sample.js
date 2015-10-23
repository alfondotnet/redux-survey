const questions = [
'question 1',
'question 2',
'question 3'
];

const questionList = questions.reduce((o, v, i) => {

  o[i] =  {
    questionText: v,
    answer: null,
    possibleAnswers: ['yay','noes'],
    getScore: function(ans) { return (ans === 'yay') ? 1 : 0; }
  };

  return o;

  }, {});

export default questionList;
