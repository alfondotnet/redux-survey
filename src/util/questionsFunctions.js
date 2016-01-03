const signAnswer = ans => {
  if (ans === null) {
    return null;
  } else {
    return 1;
  }
}

const sumNotCoercion = (a,b) => {
  if (a === null && b === null) {
    return null;
  } else {
    return a + b;
  }
}

export function countAnswered(list) {
  return list.skip(1).map(q => q.get('answer'))
             .reduce((red,val) => sumNotCoercion(red,signAnswer(val)),
                     signAnswer(list.first().get('answer')));
}

export function countQuestions(list) {
  return list.size;
}

export function onAnswerQuestion(actions, option, questionIndex) {
  actions.answer(questionIndex, option);
}
