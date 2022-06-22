/**
 * Menghitung jumlah deret angka 1..N, dengan operator (+) dan (-) berselang-seling,
 * menggunakan metode rekursif.
 */

// Input:
//   N = 5
// Output:
//   0
// Input:
//   N = 5
// Output:
//   1 + 2 - 3 + 4 - 5 = -1
// Input:
//   N = 8
// Output:
//   1 + 2 - 3 + 4 - 5 + 6 - 7 + 8 = 6

/**
 * breakdown
 * -> ganjil plus
 * -> genap -> minus
 *
 */

/**
 *
 * @param N integer
 */
function rekursif(n) {

    // let result = 0;

    if (n === 0) {
        return false
    }
    else {
        if ((n % 2 === 0) || (n === 1)) { // genap
            return (n + rekursif(n - 1))
        }
        else {
            return (-n + rekursif(n - 1))
        }


        // genap + ganjil -
        // 1 + 2 - 3 + 4 - 5 = -1
        // 5 - 4 + 3    - 2 + 1
        //
        // -5 -3
        // 124

        /**
         * note
         *
         * jika genap atau 1 maka itu +
         * jika ganjil maka -
         */
    }

}

console.log(rekursif(5))
console.log(rekursif(8))