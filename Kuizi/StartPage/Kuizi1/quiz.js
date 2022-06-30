//this would be the object shape for storing the questions  
 //you can change the questions to your own taste or even add more questions..
 const questions = [
    {
        question: "Sa planet jan ne sistemin diellor?",
        optionA: "6",
        optionB: "9",
        optionC: "5",
        optionD: "8",
       
        correctOption: "optionD"
    },

    {
        question: "Cili eshte shteti me i madh ne bote?",
        optionA: "Canada",
        optionB: "Rusia",
        optionC: "Gjermania",
        optionD: "India",
        correctOption: "optionB"
    },

    {
        question: "Ne cilin vit filloi 'lufta e par boterore'?",
        optionA: "1945",
        optionB: "1999",
        optionC: "1914",
        optionD: "1918",
        correctOption: "optionC"
    },

    {
        question: "Pas cilit veprim  filloi 'lufta e dyt boterore'  ?",
        optionA: "Pas vrasjes se Franc Ferdinantit",
        optionB: "Pas sulmit te Amerikes nga Japonia",
        optionC: "Pas sulmit te Polonis nga Gjermania",
        optionD: "Pas hyrjes ne luft nga Amerika",
        correctOption: "optionC"
    },

    {
        question: "Kush fitoi 'Kupen e Botes'ne vitin 2006 ?",
        optionA: "Spanja",
        optionB: "Holanda",
        optionC: "Brazili",
        optionD: "Italia",
        correctOption: "optionD"
    },

    {
        question: "Ne cilin kontinent gjindet maja me e lart ne bote ?",
        optionA: "Azi",
        optionB: "Europ",
        optionC: "Afrik",
        optionD: "Ameriken Jugore",
        correctOption: "optionA"
    },

    {
        question: "Kush pikturoi 'Mona Lizen'?",
        optionA: "Pikaso",
        optionB: "Mikelangjelo",
        optionC: "Leonardo Da Vinci",
        optionD: "Van Gogu",
        correctOption: "optionC"
    },

    {
        question: "Kush eshte themeluesi i teoris se relativitetit ?",
        optionA: "Albert Einstein",
        optionB: "Isaac Newton",
        optionC: "Nikola Tesla",
        optionD: "Stephen Hawking",
        correctOption: "optionA"
    },

    {
        question: "Sa eshte shuma e kendeve te brendshme te trekendeshit?",
        optionA: "360 shkall",
        optionB: "120 shkall",
        optionC: "90 shkall",
        optionD: "180 shkall",
        correctOption: "optionD"
    },

    {
        question: "Cila eshte galaktika me e aferm me galaktiken ton",
        optionA: "Rruga e qumeshtit",
        optionB: "Andromeda",
        optionC: "Volans",
        optionD: "Virgo",
        correctOption: "optionB"
    },

    {
        question: "Cili eshte shteti me i vogel ne toke?",
        optionA: "Luksemburg",
        optionB: "Montenegro",
        optionC: "Vatikani",
        optionD: "Belgjika",
        correctOption: "optionC"
    },

    {
        question: "Cili eshte mali me i larte ne Kosove ?",
        optionA: "Gjeravica",
        optionB: "Koritniku",
        optionC: "Luboteni",
        optionD: "Maja Zeze",
        correctOption: "optionA"
    },


    {
        question: "Cili esht ashti me i madh ne trupin e njeriut?",
        optionA: "Stapet",
        optionB: "Fenuri",
        optionC: "Kafka",
        optionD: "Gishterinjt",
        correctOption: "optionB"
    },

    {
        question: "Kush shpiku telefonin e pare?",
        optionA: "Alessandro Volta",
        optionB: "Galilei Galilei",
        optionC: "Steve Jbs",
        optionD: "Alexander Graham Bell",
        correctOption: "optionD"
    },

    {
        question: "Si quhet teoria me e famshme per krijimin e universit?",
        optionA: "Big Bang",
        optionB: "Big Boom",
        optionC: "Black Hole",
        optionD: "Dark Matter",
        correctOption: "optionA"
    },

    {
        question: "Ne cilin vit filloi ndertimi i Kulles Eiffel ?",
        optionA: "1787",
        optionB: "1878",
        optionC: "1887",
        optionD: "1778",
        correctOption: "optionC"
    },

    {
        question: "Si quhet pika me e thell ne toke ?",
        optionA: "Bermuda Trench",
        optionB: "Mariana Trench",
        optionC: "New Zeland Sea",
        optionD: "Antartica Hole",
        correctOption: "optionB"
    },

    {
        question: "Cili ishte presidenti i pare Amerikan?",
        optionA: "Abraham Lincoln",
        optionB: "Ronald Regan",
        optionC: "George Washington",
        optionD: "George Bush",
        correctOption: "optionC"
    },

    {
        question: "Cili eshte kryeqyteti i Australis?",
        optionA: "Otawa",
        optionB: "Bruksel",
        optionC: "Wellington",
        optionD: "Canberra",
        correctOption: "optionD"
    },

    {
        question: "Sa ane ka nje hexagon ?",
        optionA: "6",
        optionB: "8",
        optionC: "7",
        optionD: "12",
        correctOption: "optionA"
    },

    {
        question: "Cila eshte shkalla me e ulet e temperatures ne Celsius?",
        optionA: "-345",
        optionB: "-130",
        optionC: "-1300",
        optionD: "-273",
        correctOption: "optionD"
    },

    {
        question: "Cili eshte planeti me i ftohet ne sistemin diellor?",
        optionA: "Jupitari",
        optionB: "Neptuni",
        optionC: "Urani",
        optionD: "Saturni",
        correctOption: "optionB"
    },

    {
        question: "Sa eshtra gjinden ne trupin e njeriut?",
        optionA: "107",
        optionB: "317",
        optionC: "206",
        optionD: "227",
        correctOption: "optionC"
    },

    {
        question: "Ne cilin vite kompania Samsung u formua ?",
        optionA: "1977",
        optionB: "1998",
        optionC: "1938",
        optionD: "1956",
        correctOption: "optionC"
    },

    {
        question: "Ne cilen date dhe vite njeriu i par shkoi ne hene?",
        optionA: "20 Korrik,1969",
        optionB: "14 Prill,1969",
        optionC: "12 Korrik 1969",
        optionD: "26 Qershor 1966",
        correctOption: "optionA"
    },

    {
        question: "Ne cilen date dhe vite njeriu i pare shkoi ne hapesir?",
        optionA: "20 Korrik,1969",
        optionB: "14 Prill,1961",
        optionC: "12 Korrik 1969",
        optionD: "26 Qershor 1966",
        correctOption: "optionB"
    }


]


let shuffledQuestions = [] //empty array to hold shuffled selected questions out of all available questions

function handleQuestions() { 
    //function to shuffle and push 10 questions to shuffledQuestions array
//app would be dealing with 10questions per session
    while (shuffledQuestions.length <= 9) {
        const random = questions[Math.floor(Math.random() * questions.length)]
        if (!shuffledQuestions.includes(random)) {
            shuffledQuestions.push(random)
        }
    }
}


let questionNumber = 1 //holds the current question number
let playerScore = 0  //holds the player score
let wrongAttempt = 0 //amount of wrong answers picked by player
let indexNumber = 0 //will be used in displaying next question

// function for displaying next question in the array to dom
//also handles displaying players and quiz information to dom
function NextQuestion(index) {
    handleQuestions()
    const currentQuestion = shuffledQuestions[index]
    document.getElementById("question-number").innerHTML = questionNumber
    document.getElementById("player-score").innerHTML = playerScore
    document.getElementById("display-question").innerHTML = currentQuestion.question;
    document.getElementById("option-one-label").innerHTML = currentQuestion.optionA;
    document.getElementById("option-two-label").innerHTML = currentQuestion.optionB;
    document.getElementById("option-three-label").innerHTML = currentQuestion.optionC;
    document.getElementById("option-four-label").innerHTML = currentQuestion.optionD;

}


function checkForAnswer() {
    const currentQuestion = shuffledQuestions[indexNumber] //gets current Question 
    const currentQuestionAnswer = currentQuestion.correctOption //gets current Question's answer
    const options = document.getElementsByName("option"); //gets all elements in dom with name of 'option' (in this the radio inputs)
    let correctOption = null

    options.forEach((option) => {
        if (option.value === currentQuestionAnswer) {
            //get's correct's radio input with correct answer
            correctOption = option.labels[0].id
        }
    })

    //checking to make sure a radio input has been checked or an option being chosen
    if (options[0].checked === false && options[1].checked === false && options[2].checked === false && options[3].checked == false) {
        document.getElementById('option-modal').style.display = "flex"
    }

    //checking if checked radio button is same as answer
    options.forEach((option) => {
        if (option.checked === true && option.value === currentQuestionAnswer) {
            document.getElementById(correctOption).style.backgroundColor = "green"
            playerScore++ //adding to player's score
            indexNumber++ //adding 1 to index so has to display next question..
            //set to delay question number till when next question loads
            setTimeout(() => {
                questionNumber++
            }, 1000)
        }

        else if (option.checked && option.value !== currentQuestionAnswer) {
            const wrongLabelId = option.labels[0].id
            document.getElementById(wrongLabelId).style.backgroundColor = "red"
            document.getElementById(correctOption).style.backgroundColor = "green"
            wrongAttempt++ //adds 1 to wrong attempts 
            indexNumber++
            //set to delay question number till when next question loads
            setTimeout(() => {
                questionNumber++
            }, 1000)
        }
    })
}



//called when the next button is called
function handleNextQuestion() {
    checkForAnswer() //check if player picked right or wrong option
    unCheckRadioButtons()
    //delays next question displaying for a second just for some effects so questions don't rush in on player
    setTimeout(() => {
        if (indexNumber <= 9) {
//displays next question as long as index number isn't greater than 9, remember index number starts from 0, so index 9 is question 10
            NextQuestion(indexNumber)
        }
        else {
            handleEndGame()//ends game if index number greater than 9 meaning we're already at the 10th question
        }
        resetOptionBackground()
    }, 1000);
}

//sets options background back to null after display the right/wrong colors
function resetOptionBackground() {
    const options = document.getElementsByName("option");
    options.forEach((option) => {
        document.getElementById(option.labels[0].id).style.backgroundColor = ""
    })
}

// unchecking all radio buttons for next question(can be done with map or foreach loop also)
function unCheckRadioButtons() {
    const options = document.getElementsByName("option");
    for (let i = 0; i < options.length; i++) {
        options[i].checked = false;
    }
}

// function for when all questions being answered
function handleEndGame() {
    let remark = null
    let remarkColor = null

    // condition check for player remark and remark color
    if (playerScore <= 3) {
        remark = "Arritje jo aq e mirë,provo përseri."
        remarkColor = "red"
    }
    else if (playerScore >= 4 && playerScore < 7) {
        remark = "Arritje mesatare,mund të bësh më mirë."
        remarkColor = "orange"
    }
    else if (playerScore >= 7) {
        remark = "Arritje shumë e mirë,Urime."
        remarkColor = "green"
    }
    const playerGrade = (playerScore / 10) * 100

    //data to display to score board
    document.getElementById('remarks').innerHTML = remark
    document.getElementById('remarks').style.color = remarkColor
    document.getElementById('grade-percentage').innerHTML = playerGrade
    document.getElementById('wrong-answers').innerHTML = wrongAttempt
    document.getElementById('right-answers').innerHTML = playerScore
    document.getElementById('score-modal').style.display = "flex"

}

//closes score modal, resets game and reshuffles questions
function closeScoreModal() {
    questionNumber = 1
    playerScore = 0
    wrongAttempt = 0
    indexNumber = 0
    shuffledQuestions = []
    NextQuestion(indexNumber)
    document.getElementById('score-modal').style.display = "none"
}

//function to close warning modal
function closeOptionModal() {
    document.getElementById('option-modal').style.display = "none"
}


