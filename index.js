var fs = require("fs");

var bannerKit = {
    registerBanner: function(name, banner) {
        this[name] = banner;
    }
};

fs.readdirSync("art").forEach(function(file) {
    bannerKit.registerBanner(file.slice(0, -3), require("./art/" + file));
});

module.exports = bannerKit;