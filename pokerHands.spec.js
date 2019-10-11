//require {PokerHands from "./pokerHands"
const classes = require ("./pokerHands")
const Hand = classes.Hand
const PokerHands = classes.PokerHands

describe("PokerHand" ,() =>{

    const pokerHands = new PokerHands()

    test("sort Hand", ()=>{
        //Arrange
        const hand = new Hand(["KC","3H","7S","9C","6C"])
        const sortedHand = ["3H","6C","7S","9C","KC"]

        //Act
        hand.sort()
        //Assert
        expect(hand.hand).toEqual(sortedHand)        
    })

    test("High card", ()=>{
        //Arrange
        const white= ["QC","9D","2H","AS","3C"]
        const black= ["KC","3H","7S","9C","6C"]
        const expected = "White hand wins"
        //Act
        const result = pokerHands.compareValues(white, black)
        //Assert
        expect(result).toEqual(expected)        
    })

})