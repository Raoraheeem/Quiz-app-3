const questions =[
    {
        id:1,
        questionText:"How many days are there in a week?",
        answerOptions:[
            {
                answerText:"2", isCorrect:false},
            {
            answerText:"4", isCorrect:false},
            {answerText:"6", isCorrect:false},
            {answerText:"7", isCorrect:true}
        
        ]
    },
    { 
        id:2,
        questionText:"How many hours are in a day?",
        answerOptions:[
            {answerText:"12", isCorrect:false},
            {answerText:"24", isCorrect:true},
            {answerText:"6", isCorrect:false},
            {answerText:"7", isCorrect:false}
        
        ]
    },
    {
        id:3,
        questionText:"How many minutes are there in an hour?",
        answerOptions:[
            {answerText:"22", isCorrect:false},
            {answerText:"24", isCorrect:false},
            {answerText:"60", isCorrect:true},
            {answerText:"70", isCorrect:false}
        
        ]
    }
    ,
    {
        id:4,
        questionText:"Who is CEO of Facebook?",
        answerOptions:[
            {answerText:"Elon Musk", isCorrect:false},
            {answerText:"Mark zeckerberg", isCorrect:true},
            {answerText:"Tony Stark", isCorrect:false},
            {answerText:"Bill Gate", isCorrect:false}
        
        ]
    }
    ,
    {
        id:5,
        questionText:"Who is CEO of Tesla?",
        answerOptions:[
            {answerText:"Elon Musk", isCorrect:true},
            {answerText:"Mark zeckerberg", isCorrect:false},
            {answerText:"Tony Stark", isCorrect:false},
            {answerText:"Bill Gate", isCorrect:false}
        
        ]
    }
]

export default questions;