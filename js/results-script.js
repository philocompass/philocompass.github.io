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

document.getElementById('share-as-image').addEventListener('click', () => {
    const canvas = document.getElementById('resultsCanvas');
    const ctx = canvas.getContext('2d');

    // Set canvas size
    canvas.width = 1300; // Double the original width
    canvas.height = 2600; // Double the original height

    // Define styles and positions
    const width = canvas.width;
    const height = canvas.height;
    const boxGap = 10; // Gap between boxes
    const boxRadius = 20; // Radius for rounded corners
    const boxWidth = (width - 40 - boxGap) / 2; // Width of each box
    const boxHeight = 100; // Height of each box
    let yPosition = 110; // Starting Y position for dichotomy boxes

    // Function to draw a rounded rectangle
    function drawRoundedRect(x, y, w, h, r) {
        ctx.beginPath();
        ctx.moveTo(x + r, y);
        ctx.arcTo(x + w, y, x + w, y + h, r);
        ctx.arcTo(x + w, y + h, x, y + h, r);
        ctx.arcTo(x, y + h, x, y, r);
        ctx.arcTo(x, y, x + w, y, r);
        ctx.closePath();
    }

    // Process resultsString to draw each dichotomy
    const resultsString = new URLSearchParams(window.location.search).get('results');
    let dichotomyIndex = 0;

    questions.reduce((unique, question) => {
        if (!unique.includes(question.dichotomy)) {
            unique.push(question.dichotomy);

            const resultBit = resultsString.charAt(dichotomyIndex++);
            const dichotomySplit = question.dichotomy.split(" vs. ");
            const dominantSide = resultBit === '0' ? dichotomySplit[0] : dichotomySplit[1];

            // Draw boxes and text for each side of dichotomy
            dichotomySplit.forEach((side, index) => {
                const boxX = 20 + (boxWidth + boxGap) * index;
                const boxY = yPosition;

                ctx.fillStyle = side === dominantSide ? '#a8d5ba' : '#f5f5f5'; // Color
                drawRoundedRect(boxX, boxY, boxWidth, boxHeight, boxRadius);
                ctx.fill();

                ctx.font = side === dominantSide ? 'bold 40px Roboto' : '40px Roboto';
                ctx.fillStyle = side === dominantSide ? '#ffffff' : '#000000'; // Text color
                const textWidth = ctx.measureText(side).width;
                const textX = boxX + (boxWidth - textWidth) / 2;
                const textY = boxY + boxHeight / 2 + 15; // Center text vertically
                ctx.fillText(side, textX, textY);
            });

            yPosition += boxHeight + 20;
        }
        return unique;
    }, []);

    // Draw header
    ctx.fillStyle = '#a8bed5';
    ctx.fillRect(0, 0, width, 80);
    ctx.font = '48px Roboto';
    ctx.fillStyle = '#ffffff';
    const headerText = 'My PhiloCompass Results';
    const headerTextWidth = ctx.measureText(headerText).width;
    ctx.fillText(headerText, (width - headerTextWidth) / 2, 60);

    // Draw footer
    ctx.fillStyle = '#a8bed5';
    ctx.fillRect(0, height - 80, width, 80);
    ctx.fillStyle = '#ffffff';
    const footerText = 'philocompass.github.io';
    const footerTextWidth = ctx.measureText(footerText).width;
    ctx.fillText(footerText, (width - footerTextWidth) / 2, height - 20);

    // Open image in a new tab
    const image = canvas.toDataURL('image/png');
    const imageWindow = window.open('');
    imageWindow.document.write('<img src="' + image + '" alt="PhiloCompass Results" style="max-width: 100%; height: auto;">');
});
