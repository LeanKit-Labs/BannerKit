var fs = require( "fs" );
var path = require( "path" );

var banners = {};

function addPath( dir ) {
	var args = Array.prototype.slice.call( arguments, 0 );
	var joined = arguments.length == 1 ? dir : path.join.apply( null, args );
	var full = path.resolve( joined );
	fs.readdirSync( full ).forEach( function( file ) {
		registerBanner( file.slice( 0, -3 ), require( path.join( full, file ) ) );
	} );
	return banners;
}

function registerBanner( name, banner ) {
	banners[ name ] = banner;
	return banners;
}

addPath( __dirname, "art/" );
banners.addPath = addPath;
banners.registerBanner = registerBanner;

module.exports = banners;