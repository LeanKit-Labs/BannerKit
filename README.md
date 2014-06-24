##BannerKit

###Why?

Because ascii art is fun, and why not make our terminals look pretty?

###How?

Example Usage:

```javascript
	var bk = require("bannerkit");
	bk.bigBanner.printColor();
```

The result?

![](http://photos-d.ak.instagram.com/hphotos-ak-xpf1/10475146_1432415680357251_377731652_n.jpg)

###Fun! I want to add a banner, too!

#### Sharing your banner with all
Awesome - please fork and submit a PR. Banner modules should go in the `art/` folder, and each module should export a `print` (and optionally a `printColor`) method. The name of the module (minus the ".js") will be used as the property name on the top level `bannerkit` module.

#### Adding project specific banners

```javascript
	var bk = require("bannerkit").addPath( './myBanners' );
	bk.{yourBannerNameHere}.print();
```