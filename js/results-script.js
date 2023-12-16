document.addEventListener("DOMContentLoaded", () => {
    let resultsText = "My PhiloCompass Results:\n\n";
    const resultsString = new URLSearchParams(window.location.search).get('results');
    const resultsContainer = document.getElementById('results');
    let dichotomyIndex = 0;

    questions.reduce((unique, question) => {
        if (!unique.includes(question.dichotomy)) {
            unique.push(question.dichotomy);
            const resultBit = resultsString.charAt(dichotomyIndex++);
            const dichotomySplit = question.dichotomy.split(" vs. ");
            const dominantSide = resultBit === '0' ? dichotomySplit[0] : dichotomySplit[1];

            const resultCard = document.createElement('div');
            resultCard.className = 'result-card';
            resultCard.innerHTML = `
                <div class="${dominantSide === dichotomySplit[0] ? 'dominant-side' : ''}">${dichotomySplit[0]}</div>
                <div class="${dominantSide === dichotomySplit[1] ? 'dominant-side' : ''}">${dichotomySplit[1]}</div>`;
            resultsContainer.appendChild(resultCard);

            const formattedDichotomy = dichotomySplit.map(side => side === dominantSide ? `**${side}**` : side).join(" vs. ");
            resultsText += `${formattedDichotomy}\n`;
        }
        return unique;
    }, []);

    resultsText += "\nTake the test: " + window.location.origin;

    const shareText = encodeURIComponent(resultsText);

    // Social media sharing
    document.getElementById('share-twitter').href = `https://twitter.com/intent/tweet?text=${shareText}`;
    document.getElementById('share-email').href = `mailto:?subject=PhiloCompass Results&body=${shareText}`;

    // Copy results to clipboard
    document.getElementById('copy-results').addEventListener('click', () => {
        navigator.clipboard.writeText(resultsText);
    });

});
