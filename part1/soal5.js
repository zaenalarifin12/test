/**
 * Menentukan jumlah pergeseran (ke arah kanan) yang diperlukan sebuah array of integer
 * yang terurut membesar sehingga menjadi array sesuai input.
 */


function areEqual(array1, array2) {
    if (array1.length === array2.length) {
        return array1.every((element, index) => {
            if (element === array2[index]) {
                return true;
            }

            return false;
        });
    }

    return false;
}

function test(data) {

    const dataInput = [...data]
    // sorting data
    for (let i = 0; i < data.length; i++) {
        for (let j = 0; j < (data.length - i - 1); j++) {
            // if greater , swap it
            if (data[j] > data[j + 1]) {
                let temp = data[j]
                data[j] = data[j + 1]
                data[j + 1] = temp
            }
        }
    }

    let rotation = 0;
    let i = 0
    do {
        let temp = data[data.length - 1]
        data.pop()
        data.unshift(temp)
        i++
    } while (
      !areEqual(data, dataInput) // stop jika tidak sama
      )

    rotation = i
    console.log(rotation)
    // return rotation
}


const dataNumber = [3, 8, 15, 30, 1]

test(dataNumber)