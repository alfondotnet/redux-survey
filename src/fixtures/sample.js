const questions = [
'Are do dumb?',
'Ya wanna get down with me babe?',
'Huh?'
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
