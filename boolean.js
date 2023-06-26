function age (number){
    for(let i = 0; i < number.length;i++){
        if(typeof number[i] === 'number'){
            return true
        }
    }
    return false
}
console.log(age('danda'))

const iAmAStudent = true
const isSpring = false
const javaSciptIsBeauty = true
const constCanBeChanged = false
const letCanBeChanged = true
const nullIsADataType = true
const nullIsAValue = false
const iAmFromGrozny = true