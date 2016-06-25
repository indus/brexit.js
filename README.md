# BREXIT.JS
For all the people who think borders would help to make anything better!

## About
The lib  rewrites all links on a page that is hosted under the .uk ccTLD if they target another page with a domain of one of EUs remaining member states (or vice versa). Any outbound traffic of this page then takes a stopover at the [border control](https://brexit.js?to=https://github.com/indus/brexit.js) and is getting monitored with a grim look before beeing forwarded. 

## DEMO
https://brexit.js.org?to=https://github.com/indus/brexit.js

FOR EU MEMBERS: https://brexit.js.org/uk/?to=https://www.gov.uk/

FOR BRITISH: https://brexit.js.org/eu/?to=http://europa.eu/index_en.htm


## Installation & Usage

Just add the script to you page and call the only function ```brexit``` (and don´t too much think about the consequences)

```html
<!-- load the brexit.js script library -->
<script src="brexit.js"></script>

//...

<!-- use the library -->
<script>
  brexit();
</script>
```
you may want to call it again e.g. if DOM changed;

### CREDITS/LICENSES (assets on [website](https://github.com/indus/brexit.js/tree/gh-pages)):

City silhouette:    Creative Commons (Attribution 3.0); Copyright © Free graphic resource for designer! All Rights Reserved.; http://freedesignfile.com

National flags:     MIT License (MIT); Copyright (c) 2013 Panayiotis Lipiridis; https://github.com/lipis/flag-icon-css

Police man:         Copyright (c) patrimonio; licensed on vectorstock.com; https://www.vectorstock.com/royalty-free-vector/traffic-policeman-hand-stop-sign-circle-retro-vector-5327174


## LICENSE (CODE and everything else)

[MIT](http://opensource.org/licenses/MIT)

Copyright (c) 2016 Stefan Keim (indus)


