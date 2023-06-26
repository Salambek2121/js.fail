// Значение null представляет отсутствие какого - либо объектного значения.В JavaScript, null является примитивом, и в контексте логических операций, рассматривается как ложное(falsy).
function nul(number1){
    for(let i = 0; i < number1.length;i++){
        if(typeof number1[i] !==  'number'){
            return null
        }
    }
    return true
}
console.log(nul('ds'))
const  game = null
console.log(game)