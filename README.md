# An extraordinary airplane flight

## Concept
Je zit in een vliegtuig dat gekaapt wordt. Er is een bom aan boord die kan ontploffen. Jij moet het vliegtuig redden... of niet. 

## Gebruikte technologieën
* ThreeJS
* WebVR
* A-Frame

## Features & mogelijkheden
* Rondwandelen in het vliegtuig
* Timer met resterende tijd tot wanneer de bom ontploft
* Verschillende escape-mogelijkheden, die al dan niet fataal eindigen: 
    * Uit het vliegtuig springen (fataal)
    * De bom proberen ontmantelen (Foute draad: fataal, juiste draad: experience loopt verder)
    * Het vliegtuig proberen besturen en proberen landen (Botsing met objecten: fataal, laten landen binnen de tijd: einde van de experience)

## Einde van de experience
De experience eindigt wanneer je een foute keuze maakt (vb. foute draadje van de bom doorknippen, botsing met object tijdens het besturen van het vliegtuig,...) of wanneer je het vliegtuig veilig kan doen landen.

## Andere technieken waarmee we o.a. experimenteerden maar niet gebruikten
* Posenet (trackt niet precies genoeg om bewegingen die bij onze experience passen te kunnen gebruiken)
* Eigen Photoshop-sphere maken om te gebruiken als Skybox (kwaliteit zeer slecht) 
* Hacken van een WII-controller om te gebruiken als input (lukte niet)