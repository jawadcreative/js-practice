function reverseString(string) {
    let str = string
    let spliString = str.split('')
    let reverse = ''

    for (let i = spliString.length - 1; i >= 0; i--) {
        reverse += spliString[i]
        console.log(reverse)
    }
}

reverseString('Jawad Ahmad')