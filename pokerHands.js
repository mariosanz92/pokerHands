const cardOrder= [2,3,4,5,6,7,8,9,"T","J","Q","K","A"]

class Hand {
        constructor(hand){
            this.hand = hand
        }

    sort(){
        let arrayOrdered = []

        cardOrder.forEach((element)=>{
            this.hand.forEach((card)=>{
                if (element == card[0]){
                    arrayOrdered.push(card)
                }
            })  
        })
        this.hand = arrayOrdered  
    }

    getLastCard(){
        return this.hand.slice(-1).pop()
    }

    getHighestCard(){
        this.sort()
        return cardOrder.indexOf(this.getLastCard()[0])
    }

}

class PokerHands {

    compareValues(white, black){
        const whiteHand = new Hand(white)
        const highestWhite = whiteHand.getHighestCard()
        
        const blackHand = new Hand(black)
        const highestBlack = blackHand.getHighestCard()
                
        if(highestWhite > highestBlack){
            return "White hand wins"
        }
        return "Black hand wins"
    }
}

module.exports = {
    PokerHands,
    Hand
}