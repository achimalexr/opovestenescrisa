# O poveste nescrisă — Story ended.

Prima versiune: o pagină dark, în limba română, cu titlu în engleză, un epilog și sunet ambiental opțional. Sunetul pornește numai prin apăsarea butonului. Pagina respectă preferința pentru animații reduse.

## Fișiere

- `dist/index.html`: conținutul paginii.
- `dist/style.css`: culori, design și adaptare la telefon.
- `dist/script.js`: sunet ambiental generat în browser, fără înregistrări externe.
- `dist/favicon.svg`: iconița paginii.

## Publicare pe hostingul propriu

Copiază conținutul folderului `dist` în directorul public al hostingului. Nu este nevoie de instalare sau compilare. Funcționează pe un hosting static obișnuit. Pentru GitHub Pages se poate publica din rădăcina unui branch care conține fișierele din `dist`.

Fonturile sunt încărcate prin Google Fonts, cu fonturi locale de rezervă. În rest pagina nu folosește servicii externe, analytics, conturi sau stocare.

Conectarea domeniului `opovestenescrisa.us` necesită configurarea în serviciul de hosting și DNS-ul existent; această versiune nu modifică domeniul.
