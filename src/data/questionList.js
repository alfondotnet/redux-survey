// getScore MUST be a pure function

const questions = [
'question 1',
'This is another loooooooooooooong question',
'QuEstion 3, éxample',
'another'
];

const questionList = questions.reduce((o, v, i) => {

  o[i] =  {
    questionText: v,
    answer: null,
    possibleAnswers: [0,1,2,3],
    getScore: function(ans) { return ans; }
  };

  return o;

  }, {});

export default questionList;
