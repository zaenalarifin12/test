/**
 * TIDAK PERLU DI UBAH
 *
 *
 *
 * @param periodNumber
 * @returns {number|*}
 */

function getValueByPeriod(periodNumber) {
    try {
        return this.arrayOfPeriodValues[periodNumber]
    } catch (ArrayIndexOutOfBoundsException ex) {
        return 0;
    }
}