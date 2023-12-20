let answers = new Array(questions.length).fill(null);
let userId = generateRandomUserId();
let shuffledIndices = shuffleIndices(questions.length);

document.addEventListener("DOMContentLoaded", () => {
    loadQuestion(0);
});

function shuffleIndices(length) {
    let indices = Array.from({ length: length }, (_, i) => i);
    for (let i = indices.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [indices[i], indices[j]] = [indices[j], indices[i]];
    }
    return indices;
}

async function loadQuestion(currentIndex) {
    if (currentIndex >= shuffledIndices.length) {
        try {
            await sendDataToGoogleSheet();
            showResults();
        } catch (error) {
            console.error('Error sending data:', error);
            // Handle error or show a message to the user
        }
        return;
    }

    // Update progress bar
    const totalQuestions = questions.length;
    const progressPercentage = (currentIndex / totalQuestions) * 100;
    document.getElementById('progress-bar').style.width = progressPercentage + '%';

    const questionIndex = shuffledIndices[currentIndex];
    const question = questions[questionIndex];
    const questionContainer = document.getElementById('question-text');
    questionContainer.textContent = question.text;

    const optionsContainer = document.getElementById('answer-options');
    optionsContainer.innerHTML = '';

    question.options.forEach((option, optionIndex) => {
        const button = document.createElement('button');
        button.textContent = option;
        button.onclick = () => handleAnswer(questionIndex, optionIndex, currentIndex + 1);
        optionsContainer.appendChild(button);
    });
}


// function loadQuestion(currentIndex) {
//     if (currentIndex >= shuffledIndices.length) {
//         sendDataToGoogleSheet();
//         // showResults();
//         return;
//     }

//     const questionIndex = shuffledIndices[currentIndex];
//     const question = questions[questionIndex];
//     const questionContainer = document.getElementById('question-text');
//     questionContainer.textContent = question.text;

//     const optionsContainer = document.getElementById('answer-options');
//     optionsContainer.innerHTML = '';

//     question.options.forEach((option, optionIndex) => {
//         const button = document.createElement('button');
//         button.textContent = option;
//         button.onclick = () => handleAnswer(questionIndex, optionIndex, currentIndex + 1);
//         optionsContainer.appendChild(button);
//     });
// }

function handleAnswer(questionIndex, selectedOptionIndex, nextIndex) {
    answers[questionIndex] = selectedOptionIndex;
    loadQuestion(nextIndex);
}

function showResults() {
    let resultsTally = {};

    questions.forEach((question, index) => {
        if (!resultsTally[question.dichotomy]) {
            resultsTally[question.dichotomy] = [0, 0]; // Initialize tally for each dichotomy
        }
        resultsTally[question.dichotomy][answers[index]]++;
    });

    let resultsString = '';
    Object.keys(resultsTally).forEach(dichotomy => {
        const [leftCount, rightCount] = resultsTally[dichotomy];
        resultsString += leftCount >= rightCount ? '0' : '1'; // '0' for left, '1' for right
    });

    window.location.href = 'results.html?results=' + resultsString;
}


// function sendDataToGoogleSheet() {
//     var data = {
//         'userId': userId,
//         'answers': answers
//     };

//     var options = {
//         method: 'post',
//         mode: 'no-cors',
//         headers: { 'Content-Type': 'application/json' },
//         body: JSON.stringify(data)
//     };

//     fetch('https://script.google.com/macros/s/AKfycbzs8zmdc5K705ueImBJjsAKts4zrWDFuloI3W8PkGTn4y5pVg2TNeYV_KswlQMTHV2l/exec', options)
//         .then(() => console.log("Data sent successfully"))  // Adjusted to not expect a JSON response
//         .catch(error => console.error('Error:', error));

// }

function sendDataToGoogleSheet() {
    return new Promise((resolve, reject) => {
        var data = {
            'userId': userId,
            'answers': answers
        };

        var options = {
            method: 'post',
            mode: 'no-cors',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(data)
        };

        fetch('https://script.google.com/macros/s/AKfycbzs8zmdc5K705ueImBJjsAKts4zrWDFuloI3W8PkGTn4y5pVg2TNeYV_KswlQMTHV2l/exec', options)
            .then(() => {
                console.log("Data sent successfully");
                resolve();
            })
            .catch(error => {
                console.error('Error:', error);
                reject(error);
            });
    });
}


function generateRandomUserId() {
    return Math.random().toString(36).slice(2, 9);
}
