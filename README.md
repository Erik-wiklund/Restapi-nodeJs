## <p align = "center">Title: Node Restapi</p>
#### Info om projeketet: Detta projekt har delats upp i olika delar, tex så lade jag Post, Update och Delete direkt i en egen Dbfil så jag ttycker att de har en starkare koppling direkt till databasen. Get ligger kvar med sina funktioner i controllerfilen. Allt sköts sen via router som via funktion skickar en signal via route och till api som gör den request som gjorts. I sjävla serverfilen så är serverns startpunkt och vissa errorhandlers.

#### För att kunna köra programmet och testa requests via Rest så måste man först klona ner projektet från git hub. Öppna sedan kommandotolken eller shell och skriv "git clone https://github.com/Erik-wiklund/Restapi-nodeJs.git". Sedan måste man stå i rätt folder och skriver "code ." för att starta vscode.
#### Länk: https://github.com/Erik-wiklund/Restapi-nodeJs.git
#### För att kunna köra programmet via sitt startscript så måste man först installera "nodemon" och dess filer.
#### Detta görs genom att köra kommandot "npm i nodemon" När detta är klart så kan man köra programmet för att testa via Rest.



### Ärendelista G
- [x] Projektet innehåller minst 4 st. endpoints (GET, POST, PUT & DELETE för en resurs)
- [x] Samtliga endpoints skall kunna nås via en REST Client fil (.rest|.http)
- [x] Datan som API:et hanterar sparas lokalt i serverfilen
- [x] Git & GitHub har använts
- [x] Projektmappen innehåller en README.md fil - (läs ovan för mer info)
- [x] Uppgiften lämnas in i tid!

### Ärendelista VG
- [x] Alla punkter för godkänt är uppfyllda
- [ ] All data skall vara sparad i en JSON-fil istället för i serverfilen
- [ ] Datan i JSON-filen skall uppdateras då något läggs till, uppdateras eller tas bort
- [ ] Ett simpelt klient-gränssnitt skall finnas för att anropa API:ets olika endpoints, samt
      visa upp resultatet vid GET anrop
- [x] Ytterligare en GET endpoint skall läggas till där det går att hämta ett specifikt objekt
