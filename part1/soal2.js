/**
 * Mencetak semua kombinasi substring dari string yang diberikan.
 */

/**

 Input:
 rstu
 Output:
 r 1 karakter 4x
 s
 t
 u
 rs 2 karakter 3x
 st
 tu
 rst 3 karakter 2x
 stu
 rstu 4 karakter 1x

 */


function subStringCharacter(data) {

//    loop every caraketer
//    loop +1 karakter , stop jika carakter = length

    let result = []

    let start = 0;// start string
    let end = 1; // end string
    let getLengthEnd = 1 // get length of string not need reset

    for (let i = 0; i < data.length; i++) { //4x
        for (let j = 0; j < data.length - i; j++) { //4x
            result.push(data.substring(start, end))
            start++
            end++
        }
        start = 0
        end = getLengthEnd + 1
        getLengthEnd++
    }

    console.log(result)
}

const text = "rust"
subStringCharacter(text)


const text2 = "testting"
subStringCharacter(text2)
