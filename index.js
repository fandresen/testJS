const presidents = document.getElementsByName('president')
const chevals = document.getElementsByName('cheval')
const continents = document.getElementsByName('continent')
const form1 = document.getElementById('form1')
const form2 = document.getElementById('form2')
const form3 = document.getElementById('form3')
const realScore = document.getElementById('score')

let score = 0
let choix = 'test'
// console.log(presidents);

form1.addEventListener('submit', (e)=>{
    e.preventDefault()
    const rightChoice = "andry";
    for (let i =0; i<presidents.length;i++){
        presidents[i].setAttribute('disabled',"true")
        if (presidents[i].checked){
            choix = presidents[i].value

            if(choix === rightChoice){
                score++
            }
            else{
                console.log("diso");
            }
        }
    }
})

form2.addEventListener('submit', (e)=>{
    e.preventDefault()
    const rightChoice = "blanc";
    for (let i =0; i<chevals.length;i++){
        chevals[i].setAttribute('disabled',"true")
        if (chevals[i].checked){
            choix = chevals[i].value

            if(choix === rightChoice){
                score++
            }
            else{
                console.log("diso");
            }
        }
    }
})

form3.addEventListener('submit', (e)=>{
    e.preventDefault()
    const rightChoice = "afrique";
    for (let i =0; i<continents.length;i++){
        continents[i].setAttribute('disabled',"true")
        if (continents[i].checked){
            choix = continents[i].value

            if(choix === rightChoice){
                score++;
            }
            else{
                console.log("diso");
            }
        }
    } 
    realScore.innerText = `score : ${score}/3`

})


