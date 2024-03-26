let allCards = ['card1.png', 'card2.png', 'card3.png', 'card4.png', 'card5.png', 'card6.png', 'card7.png', 'card8.png', 'card9.png', 'card10.png', 'card11.png', 'card12.png', 'card13.png', 'card14.png', 'card15.png', 'card16.png', 'card17.png', 'card18.png', 'card19.png', 'card20.png', 'card21.png', 'card22.png', 'card23.png', 'card24.png', 'card25.png', 'card26.png', 'card27.png', 'card28.png', 'card29.png', 'card30.png', 'card31.png', 'card32.png', 'card33.png', 'card34.png', 'card35.png', 'card36.png', 'card37.png', 'card38.png', 'card39.png', 'card40.png', 'card41.png', 'card42.png', 'card43.png', 'card44.png', 'card45.png', 'card46.png', 'card47.png', 'card48.png', 'card49.png', 'card50.png', 'card51.png', 'card52.png'];
let currentCards = ['hhh'];

var score = 0
function click(bt) { 
    var temp = document.getElementById(bt);
    var x = window.getComputedStyle(temp).getPropertyValue("opacity");
   if (x == 1) {
        score++;
        document.getElementById(bt).style.opacity = 0.5;
    }else{
        score--;
        document.getElementById(bt).style.opacity = 1;
    }
    if (score==25){
        alert("GGWP!")
        location.reload()
    }else{
        document.getElementById('done').innerHTML=score;
    }
};

function check(element) {
    return currentCards.includes(element);
}

function randomimg() {
    let selected;
    do {
        selected = Math.floor(Math.random() * allCards.length);
    } while (check(allCards[selected]));

    currentCards.push(allCards[selected]);
    return allCards[selected];
}
function beginning(){
    for (let i = 1; i <= 25; i++) {
        document.getElementById('bt' + i).style.backgroundImage = "url(assets/" + randomimg() + ")";
    }
}

function info(){
    alert("Open CRL and start playing\nAt the end of each match click on the cards your opponent has used\nYou win once youhave encoutered all 25 cards in the bingo table\nHappy grinding sodier and good luck youre gonna need it :)")
}


