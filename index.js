var fs = require("fs");
var path = require("path");

var bannerKit = {
    registerBanner: function(name, banner) {
        this[name] = banner;
    }
};

var artDir = path.join(__dirname, "art");

fs.readdirSync("art").forEach(function(file) {
    bannerKit.registerBanner(file.slice(0, -3), require(path.join(artDir, file)));
});

module.exports = bannerKit;