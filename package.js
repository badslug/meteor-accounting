Package.describe({
    summary: "Accounting.js -  number, money and currency formatting - fully localisable, zero dependencies."
});

Package.on_use(function (api) {
    api.add_files([
        "accounting.js/accounting.js"
    ]
        , 'client');
});