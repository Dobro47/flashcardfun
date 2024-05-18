const term = document.querySelector('.term');
const translation = document.querySelector('.translation');
const checkButton = document.querySelector('.check');
const nextButton = document.querySelector('.next');


function genText() {
    let words = {
        Hello: "Ciao - A popular greeting that can be used for both hello & goodbye",
        Goodbye: "Ciao",
        Yes: "Si",
        No: "No",
        Please: "Per favore",
        ["Thank you"]: "Grazie",
        Aperitivo: "pre-dinner drinks & snacks",
        Stazione: "train station",
        ["How much does it cost?"]: "Quanto costa",
        ["You're welcome"]: "Prego",
        Cheers: "Salute!",
        ["Excuse me (for attention)"]: "Scusi",
        Buonasera: "good evening",
        Buonanotte: "goodnight- and can be used in both formal and informal settings",
        ["I dont understand"]: "Non capisco",
        Salve: "A formal greeting for hello",
        ["Grazie mille"]: "thank you so much",
        Buongiorno: "means good day or morning",
        Bello: "beautiful (masculine)",
        ["I'm sorry"]: "Mi Dispiace",
        Buona: "good (feminine)",
        Birra: "beer",
        ["Il conto"]: "the check or bill",
        Vino: "wine",
        ["Via/Strada"]:"street",
        ["Do you speak English?"]: "Parli inglese?",
        ["Can you help me, please?"]: "Mi aiuti, per favore?",
        ["Can you speak slower, please?"]: "Può parlare più lentamente, per favore?",
        ["where is...?"]: "Dov'è...?",
        ["Excuse me, how do I get to...?"]: "Scusi, come arrivo a...?",
        ["Where is the bathroom?"]: "Dov'è il bagno?",
        ["Two tickets, please"]: "due biglietti, per favore",
        ["The bill, please"]: "Mi dia il conto, per favore",
        ["I would like..."]: "Vorrei...",
        ["Can I have...?"]: "Posso avere",
        ["Can I reserve a table?"]: "Posso prenotare un tavolo?",
        ["Do you accept credit cards?"]: "Accetta carte di credito?",
        ["I would like to try this on"]: "Vorrei provare questo",
        ["It's too expensive"]: "è troppo caro",
        ["I'll take it"]: "Lo prendo",
        ["See you soon!"]: "A presto!"
    };
   let data = Object.entries(words);

function genText(){
    randomTerm = data[Math.floor(Math.random() * data.length)]
    term.innerHTML = `<h3> ${randomTerm[0]}</h3>`;
    translation.innerHTML = `<h3> ${randomTerm[1]}</h3`;
}


checkButton.addEventListener('click', function(){
    translation.style.display = 'block';
});

nextButton.addEventListener('click', function(){
    genText();
    translation.style.display ='none';
});
}
