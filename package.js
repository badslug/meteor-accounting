Package.describe({
    summary: "Accounting.js -  number, money and currency formatting - fully localisable, zero dependencies.",
    documentation: "README.md",
    version: "0.4.2",
    name: "iain:accountingjs",
    git: "https://github.com/badslug/meteor-accounting.git"
});

Package.onUse(function (api) {
    api.versionsFrom('1.3.2.4');
    api.export('accounting');
    api.addFiles(['accounting.js']);
});
