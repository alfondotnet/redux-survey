
const horowitzQuestions = [
'Unexplained fevers, sweats, chills, or flushing',
'Unexplained weight change; loss or gain',
'Fatigue, tiredness',
'Unexplained hair loss',
'Swollen glands',
'Sore throat',
'Testicular or pelvic pain',
'Unexplained menstrual irregularity',
'Unexplained breast milk production; breast pain',
'Irritable bladder or bladder dysfunction',
'Sexual dysfunction or loss of libido',
'Upset stomach',
'Change in bowel function (constipation or diarrhea)',
'Chest pain or rib soreness',
'Shortness of breath or cough',
'Heart palpitations, pulse skips, heart block',
'History of a heart murmur or valve prolapse',
'Joint pain or swelling',
'Stiffness of the neck or back',
'Muscle pain or cramps',
'Twitching of the face or other muscles',
'Headaches',
'Neck cracks or neck stiffness',
'Tingling, numbness, burning, or stabbing sensations',
'Facial paralysis (Bell’s palsy)',
'Eyes/vision: double, blurry',
'Ears/hearing: buzzing, ringing, ear pain',
'Increased motion sickness, vertigo',
'Light-headedness, poor balance, difficulty walking',
'Tremors',
'Confusion, difficulty thinking',
'Difficulty with concentration or reading',
'Forgetfulness, poor short-term memory',
'Disorientation: getting lost; going to wrong places',
'Difficulty with speech or writing',
'Mood swings, irritability, depression',
'Disturbed sleep: too much, too little, early awakening',
'Exaggerated symptoms or worse hangover from alcohol'
];



const questionList = horowitzQuestions.map(i => {
        return {
          questionText: i,
          answer: null,
          possibleAnswers: [0,1,2,3],
          getScore: function(score) { return score; }
        }});

export default questionList;
