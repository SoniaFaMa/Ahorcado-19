
let letters=["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"]


let words=["codigo", "fuente", "obrero", "ventana", "botella"]

let randomWords= words[Math.floor(Math.random() * words.length)]
console.log(randomWords)
let splitWord=randomWords.split('')


let showLetters= document.querySelector(".container-letters")


let letterToScript=(randomWords.split(''))


let showScript=document.querySelector(".script")


let showCounter=document.querySelector(".counter")

let counter= 7
showCounter.innerHTML=counter


let buttonContinueMiss=document.querySelector(".continue-loose")
buttonContinueMiss.addEventListener("click",buttonContinueLose)

let buttonQuit=document.querySelector(".escape")
buttonQuit.addEventListener("click",buttonEscape)


for(let i=0;i<letterToScript.length;i++){
    letterToScript[i]="_ "
    showScript.innerHTML=letterToScript.join("")
}




function resetKeyboard () {


    // Reiniciamos el contendor para borrar el teclado de la partida anterior
    let lettersContainer = document.querySelector(".container-letters")
    lettersContainer.innerHTML = ''


    // Vuelvo a pintar las letras de la forma original
    letters.forEach((letter) => {
        
        let alphabet=document.createElement("div")
        alphabet.setAttribute('id', letter)
        alphabet.style.background="white"
        alphabet.style.height="30px"
        alphabet.style.width="30px"
        alphabet.innerHTML=letter
        alphabet.style.textAlign="center"
        alphabet.style.margin="5px"
        alphabet.style.padding="3px"
        alphabet.style.border="3px solid #753C40"
        alphabet.style.borderRadius = "25px";
        alphabet.style.fontFamily = "Carter One";
        alphabet.style.fontSize = "x-large";
        showLetters.appendChild(alphabet)
        alphabet.addEventListener("click", cuadrado)
    })
}



function cuadrado(infoLetter){

    const letterPressed = document.querySelector(`#${infoLetter.srcElement.id}`)

    let letterPropieties=infoLetter.srcElement.outerText
    showScript.innerHTML=letterPropieties

    showCounter.innerHTML=counter=counter-1

    if(counter===0){
        //ojo al selector de modal-container
    document.querySelector(".modal-container-lose").style.display="block"
    document.querySelector(".container-letters").style.opacity="20%"
    document.querySelector(".script").style.opacity="20%"
     
    }

    keyOnOof=false

    for(let i=0;i<splitWord.length;i++){
        
     
        if(letterPropieties===splitWord[i]){
            keyOnOof=true
            letterPressed.style.background="green"
            
    
            break;
        }
        letterPressed.style.background="red"
        
    }

   // separaCaracteres[i]= "_ "

    for(let i=0;i<splitWord.length;i++){


       if(letterPropieties===splitWord[i]){
        letterToScript[i]=letterPropieties
       }

       
        showScript.innerHTML=letterToScript.join("")
    }


    if(JSON.stringify(splitWord) === JSON.stringify(letterToScript)){
        
        document.querySelector(".modal-container-win").style.display="block"
        document.querySelector(".container-letters").style.opacity="20%"
        document.querySelector(".script").style.opacity="20%"

    }
    }



letters.forEach((letter)=>{

    
    let alphabet=document.createElement("div")
    alphabet.setAttribute('id', letter)
    alphabet.style.background="white"
    alphabet.style.height="30px"
    alphabet.style.width="30px"
    alphabet.innerHTML=letter
    alphabet.style.textAlign="center"
    alphabet.style.margin="5px"
    alphabet.style.padding="3px"
    alphabet.style.border="3px solid #753C40"
    alphabet.style.borderRadius = "25px";
    alphabet.style.fontFamily = "Carter One";
    alphabet.style.fontSize = "x-large";
    showLetters.appendChild(alphabet)
    
    alphabet.addEventListener("click",cuadrado)
    
})

// 2 FUNCIONES DISTINTAS PARA PERDER Y PARA GANAR CUANDO LE DAMOS A CONTINUAR]

function removeModalLose () {
    document.querySelector(".modal-container-lose").style.display="none"
    document.querySelector(".container-letters").style.opacity="100%"
    document.querySelector(".script").style.opacity="100%"
}

function resetPanel () {
    counter = 7
    showCounter.innerHTML = counter
    randomWords= words[Math.floor(Math.random() * words.length)]
    showScript=document.querySelector(".script")
    letterToScript=(randomWords.split(''))
    splitWord=randomWords.split('')
    for(let i=0;i<letterToScript.length;i++){
        letterToScript[i]="_ "
        showScript.innerHTML=letterToScript.join("")
    }
}



function buttonContinueLose(){

    console.log('SE EJECUTA AL PERDER')
     // Se reinicie el contador a 7
     counter = 7
    showCounter.innerHTML = counter

    // Que se quite el modal de continuar
    removeModalLose()

    // Que las letras que pulsamos se vuelvan del color original
    // Que las letras tengan la funcionalidad (ESTO LO ULTIMO)
    resetKeyboard()

    

     // Se pinte el panel con barras bajas

     resetPanel()
     

    // Salga una palabra random

   

}

function buttonEscape(){

document.querySelector(".modal-container-goodbye").style.display="block"
    


}

function buttonContinueWin(){

    // Que desaparezca el modal
    document.querySelector(".modal-container-win").style.display="none"
    document.querySelector(".container-letters").style.opacity="100%"
    document.querySelector(".script").style.opacity="100%"

    // Que reinicie el keyboard
    
    resetKeyboard()
    // Que haya una nueva palabra con la que jugar
    counter = 7
    showCounter.innerHTML = counter

   resetPanel()

}

let buttonwincontinue=document.querySelector(".continue-win")
buttonwincontinue.addEventListener("click",buttonContinueWin)


function buttonEscapeWin(){
     buttonEscape()
}
let buttonWinEscape=document.querySelector(".escape-win")
buttonWinEscape.addEventListener("click",buttonEscapeWin)

