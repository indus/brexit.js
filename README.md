# BREXIT.JS
For all the people who think borders would help to make anything better!

### About
The lib  rewrites all links on a page that is hosted under the [.uk ccTLD](https://github.com/indus/brexit.js/blob/master/brexit.js#L42)  if they target another page with a [domain of one of EUs remaining member states](https://github.com/indus/brexit.js/blob/master/brexit.js#L14-L41) (or vice versa). Navigation from a rewriten link then takes a stopover at the [border control](https://brexit.js.org?to=https://github.com/indus/brexit.js) and is getting monitored with a grim look before beeing forwarded. 

### DEMO (of the border control page)

https://brexit.js.org?to=https://github.com/indus/brexit.js

![eu](https://raw.githubusercontent.com/stevenrskelton/flag-icon/master/png/16/country-4x3/europeanunion.png) __FOR EU CITIZENS__: https://brexit.js.org/uk/?to=https://www.gov.uk

![uk](https://raw.githubusercontent.com/stevenrskelton/flag-icon/master/png/16/country-4x3/gb.png) __FOR BRITISH__: https://brexit.js.org/eu/?to=http://europa.eu/index_en.htm

### Installation & Usage

Just add the script to you page and call its only function ```brexit()``` (and don´t think about the consequences too much)

```html
<!-- load the brexit.js script library -->
<script src="brexit.js"></script>

<!-- use the library -->
<script>
  brexit();
</script>
```

```html
<!-- before --> <a href="https://www.gov.uk">GOV</a> 
<!-- after  --> <a href="https://brexit.js.org/uk/?to=https://www.gov.uk">GOV</a> 
```

*Feel free to call ```brexit``` again e.g. if the DOM has changed and new links need to be handled; I also thought about a function to reverse the BREXIT and to restore the original state - but I think that would be even more pointless...*

There are customized pages for the follwing country codes and ccTLDs:
[eu](https://brexit.js.org/eu/?to=https://github.com/indus/brexit.js),
[at](https://brexit.js.org/at/?to=https://github.com/indus/brexit.js),
[be](https://brexit.js.org/be/?to=https://github.com/indus/brexit.js),
[bg](https://brexit.js.org/bg/?to=https://github.com/indus/brexit.js),
[cy](https://brexit.js.org/cy/?to=https://github.com/indus/brexit.js),
[cz](https://brexit.js.org/cz/?to=https://github.com/indus/brexit.js),
[de](https://brexit.js.org/de/?to=https://github.com/indus/brexit.js),
[dk](https://brexit.js.org/dk/?to=https://github.com/indus/brexit.js),
[ee](https://brexit.js.org/ee/?to=https://github.com/indus/brexit.js),
[es](https://brexit.js.org/es/?to=https://github.com/indus/brexit.js),
[fi](https://brexit.js.org/fi/?to=https://github.com/indus/brexit.js),
[fr](https://brexit.js.org/fr/?to=https://github.com/indus/brexit.js),
[gr](https://brexit.js.org/gr/?to=https://github.com/indus/brexit.js),
[hr](https://brexit.js.org/hr/?to=https://github.com/indus/brexit.js),
[hu](https://brexit.js.org/hu/?to=https://github.com/indus/brexit.js),
[ie](https://brexit.js.org/ie/?to=https://github.com/indus/brexit.js),
[it](https://brexit.js.org/it/?to=https://github.com/indus/brexit.js),
[lt](https://brexit.js.org/lt/?to=https://github.com/indus/brexit.js),
[lu](https://brexit.js.org/lu/?to=https://github.com/indus/brexit.js),
[lv](https://brexit.js.org/lv/?to=https://github.com/indus/brexit.js),
[mt](https://brexit.js.org/mt/?to=https://github.com/indus/brexit.js),
[nl](https://brexit.js.org/nl/?to=https://github.com/indus/brexit.js),
[pl](https://brexit.js.org/pl/?to=https://github.com/indus/brexit.js),
[pt](https://brexit.js.org/pt/?to=https://github.com/indus/brexit.js),
[ro](https://brexit.js.org/ro/?to=https://github.com/indus/brexit.js),
[se](https://brexit.js.org/se/?to=https://github.com/indus/brexit.js),
[si](https://brexit.js.org/si/?to=https://github.com/indus/brexit.js),
[sk](https://brexit.js.org/sk/?to=https://github.com/indus/brexit.js),
[uk](https://brexit.js.org/uk/?to=https://github.com/indus/brexit.js),
[gb](https://brexit.js.org/gb/?to=https://github.com/indus/brexit.js)

(some of them share a default city silhouette; file a PR if you want to contribute one of the missing silhouettes)

### CREDITS/LICENSES (assets on [website](https://github.com/indus/brexit.js/tree/gh-pages)):

- City silhouette: Creative Commons (Attribution 3.0); Copyright © Free graphic resource for designer! All Rights Reserved.; http://freedesignfile.com

- National flags: MIT License (MIT); Copyright (c) 2013 Panayiotis Lipiridis; https://github.com/lipis/flag-icon-css

- Police man: Copyright (c) patrimonio; licensed on vectorstock.com; https://www.vectorstock.com/royalty-free-vector/traffic-policeman-hand-stop-sign-circle-retro-vector-5327174

### LICENSE (CODE and everything else)

[MIT](http://opensource.org/licenses/MIT) Copyright (c) 2016 Stefan Keim (indus)
