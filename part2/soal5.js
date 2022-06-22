let isMac = platform.toUpperCase().indexOf("MAC") > -1
let isBrowserIE = browser.toUpperCase().indexOf("IE") > -1
let isBrowserMozila = browser.toUpperCase().indexOf("MO") > -1
let initialized = this.wasInitialized()
let resizeGreaterZero = this.resize > 0


if ((isMac) && (isBrowserIE) && initialized && resizeGreaterZero) {
    // do something
    if (isMac) {
        print “macosx detected”
    }
    if (isBrowserIE) {
        print “ancient internet explorer”
    }
    print “initialized”
    print “resized”
}
else {
    // do another thing
    print “non - osx”

    if (isBrowserIE) {
        print “ancient internet explorer”
    }

    if (isBrowserMozila) {
        print “Mozilla
        based”
    }

    if (initialized) { print “initialized”}
    else print “uninitialized”

    if (resizeGreaterZero) { print “resized”}
}