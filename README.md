Smart package for [Accounting.js](http://openexchangerates.github.io/accounting.js/)
by [Joss Crowcroft](http://www.josscrowcroft.com/).

accounting.js is a tiny JavaScript library for number, money and currency formatting, with optional excel-style column rendering (to line up symbols and decimals). It's lightweight, fully localisable and has zero dependencies.

See the Accounting.js website for documentation.

## Usage

Install using standard meteor:

```bash
meteor install iain:accounting
```

Use in Javascript by importing (for example in `server/main.js` of a fresh
meteor project):

```javascript
import { Meteor } from 'meteor/meteor';
import { accounting } from 'meteor/iain:accounting';

Meteor.startup(() => {
  // code to run on server at startup
  console.log(accounting.formatMoney(123456789))
});
```

### Blaze Template Example

In your Javascript for your template (e.g. `asset.js`):

```javascript

import { Template } from 'meteor/templating';
import { accounting } from 'meteor/iain:accounting';

Template.asset.helpers({
  formatCurrency(value) {
    return accounting.formatMoney(value);
  },
});
```

In your template (e.g. `asset.html`)

```html
<template name="asset">
      {{formatCurrency initialValue}}
</template>
```
