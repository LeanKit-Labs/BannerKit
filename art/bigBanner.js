var colors = require("colors"); // jshint ignore:line

var banner = [
    "   ",
    "            ++++++                                                                                   7                  ",
    "     +.     ++++++     +                                                                            MMMD                ",
    "   +++++.   ++++++   +++++           MMMMMMM                                         MMMMM MMMMM    MMMM       MM       ",
    "  ++++++++, ++++++ ++++++++          MMMMMMMO                                        MMMMM:MMMMM     MM        MM       ",
    "   +++++++         +++++++,             MM                                            MMM  MMM,                MM       ",
    "     +++:    ZZZ     ++++               MM          MMMMM      MMMMMM    MMMMMMMM     MMM MMM     MMMMM=     MMMMMMMMM  ",
    "       +   ZZZZZZZ     +                MM        MMMMMMMMM   MMMMMMMM   MMMMMMMMM    MMMMMM      MMMMM=     MMMMMMMMM  ",
    "+++++++  ZZZZZZZZZZZ   +++++++          MM        MMM   MMM         MM+   MMM   MMM   MMMMM          MM=       MM       ",
    "+++++++  ZZZZZZZZZZZ   +++++++          MM       MMM     MMM    +MMMMM7   MMM   MMM   MMMMMMM        MM=       MM       ",
    "+++++++  ZZZZZZZZZZZ   +++++++          MM    MM MMMMMMMMMMM  MMMMMMMM7   MMM   MMM   MMM MMM        MM=       MM       ",
    "+++++++    ZZZZZZZ     +++++++          MM    MM MMMMMMMMMMM MMMM   MM7   MMM   MMM   MMM  MMM       MM=       MM       ",
    "     +++     ZZZ     ++                 MM    MM MMM         MMM    MM7   MMM   MMM   MMM   MM       MM=       MM       ",
    "   +++++++         ++++++               MM    MM  MMM    MMM MMM   MMM7   MMM   MMM   MMM   MMM      MM=       MM    MM ",
    " =++++++++ ++++++ +++++++++          MMMMMMMMMMM   MMMMMMMMO  MMMMMMMMMM MMMMM MMMMM MMMMMD  MMM  MMMMMMMMM    MMMMMMMM ",
    "   +++++,  ++++++   ++++++            MMMMMMMMMM    MMMMMN     MMMM7MMMM MMMM7  MMM~ MMMMM   MMM  MMMMMMMMM     8MMMMZ  ",
    "     +~    ++++++     ++                                                                                                ",
    "           ++++++                                                                                                       ",
    "           ++++++                                                                                                       ",
    "	",
    "	",
];

function getColor(idx, chr) {
    return (idx < 32 && chr !== "Z") ? "yellow" : "blue";
}

function print(colorized) {
    banner.forEach(function(line) {
        var idx = 0;
        var chr;
        var colored = "";
        if (colorized) {
            while (idx < line.length) {
                chr = line[idx];
                colored += chr[getColor(idx, chr)];
                idx++;
            }
            console.log(colored || "");
        } else {
            console.log(line);
        }
    });
}

module.exports = {
    print: print,
    printColor: print.bind(this, true)
};