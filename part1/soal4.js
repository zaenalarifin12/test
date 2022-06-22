/**
 * Mencari 2 pasang angka dari sebuah array of integer,
 * yang total dari 2 angka tersebut sama dengan angka yang diinputkan.
 */

function test(data, number) {

    let numberPair = "Tidak Ada"
    end:
      for (let i = 0; i < data.length; i++) {
          for (let j = 1; j < data.length; j++) {
              if (((data[i] + data[j]) === number)) {
                  numberPair = `${data[i]},${data[j]}`
                  break end;
              }
          }

      }


    console.log(numberPair)
}

let dataAngka = [-3, 1, 2, 0, -1]
let angka = -2

test(dataAngka, angka)


let dataAngka2 = [-3, 1, 2, 0, -1]
let angka2 = 1
test(dataAngka2, angka2)


let dataAngka3 = [-3, 1, 2, 0, -1]
let angka3 = 6
test(dataAngka3, angka3)
