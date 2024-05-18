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
        ["Via/Strada"]:"street" 
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
