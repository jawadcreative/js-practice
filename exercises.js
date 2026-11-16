function reverseString(string) {
    let str = string
    let spliString = str.split('')
    let reverse = ''

    for (let i = spliString.length - 1; i >= 0; i--) {
        reverse += spliString[i]
    }
    console.log(reverse)
}

reverseString('Jawad Ahmad')


function countVowels() {
    const string = 'Jawad Ahmad'
    const vowels = ['a', 'e', 'i', 'o', 'u', 'A', 'E', 'I', 'O', 'U']
    const split = string.split('')
    let count = 0;

    split.forEach(item => {
        vowels.forEach(char => {
            if (item === char) {
                count++
            }
        })
    })
    console.log(count)

}
countVowels()

function largeNumber() {
    let arr = [-30, -40, -70, -20, -10, -90]
    let max = arr[0]

    arr.forEach(item => {
        if (item > max) {
            max = item
        }
    })

    console.log(max)
}

largeNumber()