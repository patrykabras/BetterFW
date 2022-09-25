class DomHelper{

    rednerCardName(cardName){
        let cardNameDoms = document.querySelectorAll(".js-card-name");
        cardNameDoms.forEach(dom => {
            dom.innerHTML = cardName;
        })
        let cardNameInputs = document.querySelectorAll("input[name='js-card-name']");
        cardNameInputs.forEach(inputs =>{
            inputs.value = cardName;
        })
    }

    rednerStatus(status){
        let cardNameDoms = document.querySelectorAll(".js-card-status");
        cardNameDoms.forEach(dom => {
            dom.innerHTML = status;
        })
        let cardNameInputs = document.querySelectorAll("input[name='js-card-status']");
        cardNameInputs.forEach(inputs =>{
            inputs.value = status;
        })
    }
}

class CardData{

    domHelper;

    constructor(cardData){
        this.cardName = cardData.cardName;
        this.status = cardData.status;
        this.domHelper = new DomHelper();
        this.#render();
    }

    #render(){
        this.domHelper.rednerCardName(this.cardName);
        this.domHelper.rednerStatus(this.status);
    }

    setCardName(cardName){
        this.cardName = cardName;
        this.domHelper.rednerCardName(cardName);
    }

    setCardStatus(cardStatus){
        this.status = cardStatus;
        this.domHelper.rednerStatus(cardStatus);
    }
}

let cardData = new CardData({
    "cardName": "Old card name",
    "status": "ACTIVE"
});

changeNameButton = document.querySelector("#changeNameBttn");
changeNameButton.addEventListener("click", () => {
    changeNameInput = document.querySelector("#cardNameInput");
    let cardName = changeNameInput.value;
    cardData.setCardName(cardName);
})

changeStatusButton = document.querySelector("#changeStatusBttn");
changeStatusButton.addEventListener("click", () => {
    changeStatusInput = document.querySelector("#cardStatusInput");
    let cardStatus = changeStatusInput.value;
    cardData.setCardStatus(cardStatus);
})