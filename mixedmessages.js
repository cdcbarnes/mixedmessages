
    const intro = ["Knock knock!", "Ding dong!", "I'm at the door, open up!"];
    const setup = ["Orange", "Yoda Lady", "Peas", "Tibet", "Bacon", "Train"];
    const punchLine = ["Orange you glad I didn't say Banana?", "Stop Yodeling", 
        "Peas open the door, I'm cold!", "Early Tibet and Early to Rise!",
        "Bacon some cookies in there?  It smells delicious!", 
        "Someone needs to train you to open the door!"]

function randomizer(digit) {
    return Math.floor(Math.random() * (digit) );
};

function jokeTeller() {
    let jokeIntro = intro[randomizer(intro.length)];
    let jokeSetup = setup[randomizer(setup.length)];
    let jokePunchLine = punchLine[randomizer(punchLine.length)];
    console.log(`${jokeIntro} Who's there? ${jokeSetup}! ${jokeSetup} who? ${jokePunchLine}`)
}

jokeTeller();
