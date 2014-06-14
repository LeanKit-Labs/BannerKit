var colors = require("colors"); // jshint ignore:line

var banner = [
    "     ",
    "         ++++",
    "         ++++                                                       MM             ",
    "   +++~  ++++  +++        MMMMI                          MMMM MMM  MMM     M       ",
    "  ~+++++     ++++++       8MMD                            MMZ MM,          M       ",
    "    +++  ZZZ   ++          MM      MMMM    MMMM   MMMMM   MM MM   MMMM   $MMMMMN   ",
    " ++++  ZZZZZZZ  +++++      MM     MM, MM  NM  MM  MMM MM  MMMM     7MM    $M7$$    ",
    " ++++  ZZZZZZZ  +++++      MM     M:   MM   MMMM  MM  MM  MMMMM     MM     M       ",
    " ++++  ZZZZZZZ  +++++      MM  NM MMMMMMM MMMMMM  MM  MM  MM 8M     MM     M       ",
    "    ++   ZZZ   ++          MM  NM MM      M   MM  MM  MM  MM  MM    MM     M       ",
    "  ~+++++     +++++        MMMMMMM MMM:MMM MM~MMMM:MMM MMMNMMM NMM MMMMMM   MM:MMM  ",
    "   +++~ +++++ +++++       MMMMMMM   MMM    MMMMMD MMO MMZ+MMM  MM MMMMMM    MMM    ",
    "    +   +++++   +                                                                  ",
    "        +++++                                                                      ",
    "          "
];

function getColor(idx, chr) {
    return (idx < 22 && chr !== "Z") ? "yellow" : "blue";
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