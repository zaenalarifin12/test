// Input:
//   N = 6
// arr[] = {1,2,3,5,6}
// Output: 4

const N1 = 6
let Ndata1 = [1, 2, 3, 5, 6]

const N2 = 10
let Ndata2 = [1, 6, 2, 8, 3, 4, 7, 10, 5]


const N3 = 16
let Ndata3 = [1, 4, 7, 10, 5]

/**
 *
 * @param lengthData integer
 * @param data array
 */

function searchValueLost(lengthData, data) {


    // sorting data
    for (let i = 0; i < lengthData; i++) {
        for (let j = 0; j < (lengthData - i - 1); j++) {

            // if greater , swap it
            if (data[j] > data[j + 1]) {
                let temp = data[j]
                data[j] = data[j + 1]
                data[j + 1] = temp
            }
        }
    }


    let valueLost = []

    let inData = 0; // value 1..N

    let i = 0 // increment

    //check value lost
    do {
        // if undefined / not exist push to array
        if (data[i] !== (inData + 1)) {
            valueLost.push(inData + 1)
        }
        else {
            i += 1 // if exist increment
        }
        inData += 1 // always increment


    } while ((i < lengthData) && (inData < lengthData)); // stop if length i = N and inData = N

    return valueLost;
}

console.log("data1", searchValueLost(N1, Ndata1))

console.log("data2", searchValueLost(N2, Ndata2))

console.log("data3", searchValueLost(N3, Ndata3))

/**
 * output
 */

// data1 [ 4 ]
// data2 [ 9 ]
// data3 [
//   2,  3,  6,  8,  9,
//     11, 12, 13, 14, 15,
//     16
//   ]
