let btn = document.getElementById('btn');
let output = document.getElementById('output');
let quotes = 
    [
        '"Its not my fault." - Han Solo',
        '"Your focus determines your reality." - Qui-Gon Jinn',
        '"Do. Or do not. There is no try." - Yoda',
        '"Somebody has to save our skins." - Leia Organa',
        '"In my experience there is no such thing as luck." - Obi-Wan Kenobi',
        '"I find your lack of faith disturbing." - Darth Vader',
        '"Ive got a bad feeling about this." - basically everyone',
        '"Its a trap!" - Admiral Ackbar',
        '"So this is how liberty dies...with thunderous applause." - Padmé Amidala',
        '"Your eyes can deceive you. Dont trust them." - Obi-Wan Kenobi',
        '"Never tell me the odds." - Han Solo',
        '"RWAAARWWR!" - Chewbacca',
        '"Stay on target." - Gold Five',
        '"This is a new day, a new beginning." - Ahsoka Tano',
        '"This is the way." - Mandalorians',
        '"May the force be with you." - basically everyone'
    ];

let advice =
    [
        '"Use when anything goes wrong, even if it is totally your fault."',
        '"Use in pep talks to encourage positivity and to remind others to take control of their fate."',
        '"Use when someone needs a little tough love."',
        '"Use when you jump in and solve a problem without breaking a sweat."',
        '"Use to remind others hard work pays off and sitting around waiting for chance does not."',
        '"Use anytime others doubt your plans."',
        '"Use when walking into a situation that could end poorly."',
        '"Use anytime you suspect something is too good to be true."',
        '"Use sarcastically whenever anyone institutes a new policy that looks appealing on the surface but has negative repercussions."',
        '"Use when a friend needs to be reminded to go with his or her gut feeling."',
        '"Use whenever you are told a task cant be done."',
        '"Use when you move a chair"',
        '"Use to keep yourself or others focused."',
        '"Use to cheer a pal up and remind him or her that every day brings new opportunities."'
    ]; 

// combine quote and advice    
// commit changes to git
btn.addEventListener('click', function(){
    var randomQuote = quotes[Math.floor(Math.random() * quotes.length)]
    output.innerHTML = randomQuote;
})