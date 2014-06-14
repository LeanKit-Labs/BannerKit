var colors = require("colors"); // jshint ignore:line

var banner = [
    "                                                             ",
    "                         ++++++++++++                        ",
    "                         ++++++++++++                        ",
    "                         ++++++++++++                        ",
    "           =++           ++++++++++++          =+            ",
    "          ++++++         ++++++++++++        +++++=          ",
    "        ++++++++++,      ++++++++++++      +++++++++         ",
    "      ,+++++++++++++     ++++++++++++    =+++++++++++=       ",
    "     +++++++++++++++++   ++++++++++++  ++++++++++++++++      ",
    "      ++++++++++++++++=               +++++++++++++++++~     ",
    "        +++++++++++++                  ++++++++++++++=       ",
    "          +++++++++:                     +++++++++++         ",
    "           ,++++++         ZZZZZZ         +++++++=           ",
    "             ,++:       ZZZZZZZZZZZZ        ++++             ",
    "               +      ZZZZZZZZZZZZZZZZ       +               ",
    " ++++++++++++++      ZZZZZZZZZZZZZZZZZZ       ,,,,,,,,,,,,,, ",
    " ++++++++++++++     ZZZZZZZZZZZZZZZZZZZZ      ++++++++++++++ ",
    " ++++++++++++++     ZZZZZZZZZZZZZZZZZZZZ      ++++++++++++++ ",
    " ++++++++++++++     ZZZZZZZZZZZZZZZZZZZZ      ++++++++++++++ ",
    " ++++++++++++++     ZZZZZZZZZZZZZZZZZZZZ      ++++++++++++++ ",
    " ++++++++++++++     ZZZZZZZZZZZZZZZZZZZZ      ++++++++++++++ ",
    " ++++++++++++++      ZZZZZZZZZZZZZZZZZZ       ++++++++++++++ ",
    " ++++++++++++++       ZZZZZZZZZZZZZZZZ        +++++++++++++= ",
    "             ++        ZZZZZZZZZZZZZZ       +:               ",
    "           =+++++         ZZZZZZZZ         ++++              ",
    "          =++++++++                      ++++++++            ",
    "        ++++++++++++                   =+++++++++++          ",
    "      ++++++++++++++++                ++++++++++++++=        ",
    "    =++++++++++++++++: +++++++++++++ +++++++++++++++++~      ",
    "     ~+++++++++++++=   +++++++++++++   +++++++++++++++       ",
    "       +++++++++++     +++++++++++++    ,+++++++++++,        ",
    "         +++++++       +++++++++++++      ,++++++++          ",
    "          ~+++:        +++++++++++++        =++++            ",
    "            =          +++++++++++++          +~             ",
    "                       +++++++++++++                         ",
    "                       +++++++++++++                         ",
    "                       +++++++++++++                         ",
    "                                                             "
];

function getColor(idx, chr) {
    return (chr !== "Z") ? "yellow" : "blue";
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