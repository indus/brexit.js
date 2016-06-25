/*!
 * BREXIT.JS
 *
 * @author Stefan Keim (indus)
 * @version 0.0.1
 * @description lib that rewrites all links on a page that is hosted under the .uk ccTLD if they target another page with a domain of one of EUs remaining member states (or vice versa). Any outbound traffic then takes a stopover at the border control and is monitored with agrim look. 
 *
 */


var brexit = (function (tld, undefined) {

    var map = {
        "eu": 1, // European Union
        "at": 1, // Austria
        "be": 1, // Belgium
        "bg": 1, // Bulgaria
        "cy": 1, // Cyprus
        "cz": 1, // Czech Republic
        "de": 1, // Germany
        "dk": 1, // Denmark
        "ee": 1, // Estonia
        "es": 1, // Spain
        "fi": 1, // Finland
        "fr": 1, // France
        "gr": 1, // Greece
        "hr": 1, // Croatia
        "hu": 1, // Hungary
        "ie": 1, // Ireland
        "it": 1, // Italy
        "lt": 1, // Lithuania
        "lu": 1, // Luxembourg
        "lv": 1, // Latvia
        "mt": 1, // Malta
        "nl": 1, // Netherlands
        "pl": 1, // Poland
        "pt": 1, // Portugal
        "ro": 1, // Romania
        "se": 1, // Sweden
        "si": 1, // Slovenia
        "sk": 1, // Slovakia
        "uk": -1 // United Kingdom
    },
url = "https://brexit.js.org/",
query = "?to=",
attr = "data-href-org";

    return function brexit() {
        var as, a, a_tld, href;

        if (map[tld]) {
            as = document.getElementsByTagName("a");
            for (var i = 0, l = as.length; i < l; i++) {
                a = as[i];
                a_tld = a.hostname.split(".").slice(-1)[0];
                if (map[a_tld] && (map[tld] != map[a_tld])) {
                    if (attr)
                        if (a.hasAttribute(attr)) href = a.getAttribute(attr);
                        else a.setAttribute(attr, href = a.href);
                    else href = a.href;
                    a.href = url + a_tld + query + encodeURI(href);
                }
            }
        }
    }

})(location.host.split(".").slice(-1)[0]);