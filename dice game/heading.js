var clicker=document.getElementsByTagName("h1")[0];
clicker.onclick= function(){main()};

function main() {
    var pl1 = Math.floor(Math.random() * 6)+1;
    var pl2 = Math.floor(Math.random() * 6)+1;
    var img1 = imagesetter(pl1);
    var img2 = imagesetter(pl2);
    document.getElementsByTagName("img")[0].setAttribute("src", img1);
    document.getElementsByTagName("img")[1].setAttribute("src", img2);
    var status = winner(pl1,pl2);
    if(status==1)
    {
        clicker.innerHTML="Player1 wins the game";
    }
    else if(status==2)
    {
        clicker.innerHTML="Its a TIE";
    }
    else {
        clicker.innerHTML="Player2 wins the game";
    }

}

function imagesetter(a) {
    if(a==1)
    {return("images/dice1.png");}
    if(a==2)
    {return("images/dice2.png");}
    if(a==3)
    {return("images/dice3.png");}
    if(a==4)
    {return("images/dice4.png");}
    if(a==5)
    {return("images/dice5.png");}
    if(a==6)
    {return("images/dice6.png");}
}

function winner(a,b) {
    if(a>b)
    {return(1);}
    else if(a===b)
    {return(2);}
    else
    {return(3);}
}