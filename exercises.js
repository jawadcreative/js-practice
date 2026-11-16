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

function removeDuplicates() {
    let arr = [10, 20, 30, 10, 40, 30]

    let clean = []

    for (let i = 0; i < arr.length; i++) {
        let duplicate = false
        for (let j = 0; j < i; j++) {
            if (arr[i] === arr[j]) {
                duplicate = true
            }
        }
        if (!duplicate) {
            clean.push(arr[i])
        }
    }

    console.log(clean)
}

removeDuplicates()


function groupByDepartment() {
    const employees = [
        { name: "Jawad", department: "Frontend" },
        { name: "Ali", department: "Backend" },
        { name: "Ahmed", department: "Frontend" },
        { name: "Usman", department: "UI/UX" },
        { name: "Hamza", department: "Backend" }
    ];

    return employees.reduce((acc, employee) => {
        const department = employee.department;

        if (!acc[department]) {
            acc[department] = [];
        }

        acc[department].push(employee);

        return acc;
    }, {});
}

console.log(groupByDepartment());

function capitalize() {
    const word = "jawad ahmad";

    const result = word.split(" ").map(word => word.charAt(0).toLocaleUpperCase() + word.slice(1)).join(" ")

    console.log(result)
}

capitalize()