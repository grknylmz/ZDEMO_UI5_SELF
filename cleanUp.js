var del = require("del");
var supportedLanguages = ["en", "de"];
var supportedCLDRFormats = ["de", "en", "en_US", "en_GB", "en_AU", "en_CA"];
var files = [
	"dist/resources/sap/**/**/*.js",
	"dist/resources/sap/**/**/*.less",
	"dist/resources/sap/**/designtime/**",
	"dist/resources/sap/**/themes/sap_belize",
	"dist/resources/sap/**/themes/sap_belize_plus",
	"dist/resources/sap/**/themes/sap_belize_hcb",
	"dist/resources/sap/**/themes/sap_belize_hcw",
	"dist/resources/sap/**/themes/sap_hcb",
	"dist/resources/sap/**/messagebundle_*.properties",
	"dist/resources/sap/ui/codeeditor/**",
	"dist/resources/sap/ui/debug/**",
	"dist/resources/sap/ui/fl/**",
	"dist/resources/sap/ui/test/**",
	"dist/resources/sap/ui/ux3/**",
	"dist/resources/sap/**/cldr/*.json",
	"!dist/resources/sap/ui/core/date/Gregorian.js",
	"!dist/resources/sap/ui/core/ComponentSupport.js",
	"!dist/resources/sap/m/ScrollContainer.js",
	"!dist/resources/sap/m/ScrollContainerRenderer.js",
	"!dist/resources/sap/ui/dom/denormalizeScrollBeginRTL.js"
];

supportedLanguages.forEach(function (language) {
	files.push("!dist/resources/sap/**/messagebundle_" + language + ".properties");
});

supportedCLDRFormats.forEach(function (language) {
	files.push("!dist/resources/sap/**/cldr/" + language + ".json");
});

del.sync(files);