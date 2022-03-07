function defineSuit(card) {
    let carding=card.split("")
   
     if (carding[carding.length-1]==="♣"){return "clubs"};
     if (carding[carding.length-1]==="♦"){return "diamonds"};
     if (carding[carding.length-1]==="♥"){return "hearts"};
     if (carding[carding.length-1]==="♠"){return "spades"};
                         
   }