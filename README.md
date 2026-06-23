
# Enhanced website
Ontwerp en maak een interactieve website die snel laadt en prettig te gebruiken is.

De instructie vind je in: [INSTRUCTIONS.md](https://github.com/fdnd-task/enhanced-website/blob/main/docs/INSTRUCTIONS.md)


## Inhoudsopgave

  * [Beschrijving](#beschrijving)
  * [Gebruik](#gebruik)
  * [Kenmerken](#kenmerken)
  * [Installatie](#installatie)
  * [Bronnen](#bronnen)
  * [Licentie](#licentie)

## Beschrijving
<!-- Bij Beschrijving staat kort beschreven wat voor project het is en wat je hebt gemaakt -->
<!-- Voeg een mooie poster visual toe 📸 -->
<!-- Voeg een link toe naar je live site 🌐-->

De Buurtcampuskrant is een online nieuwsplatform waarop artikelen over de Buurtcampus worden gepubliceerd. Bezoekers kunnen eenvoudig door verschillende districten bladeren via het navigatiemenu en nieuwsberichten selecteren op basis van een specifieke doelgroep. Ook is het mogelijk om afzonderlijke artikelen te openen, de inhoud te lezen en reacties achter te laten.

De website heeft een overzichtelijke en gebruiksvriendelijke uitstraling, waardoor bezoekers snel hun weg kunnen vinden. Het ontwerp is volgens het mobile-first principe ontwikkeld, met een duidelijke navigatiestructuur en interactieve elementen die direct feedback geven op gebruikersacties.

[Link naar mijn website.](https://user-experience-enhanced-website-ze22.onrender.com)

## Gebruik
<!-- Bij Gebruik staat de user story, hoe het werkt en wat je er mee kan. -->
1. Als gebruiker wil ik een reactie kunnen plaatsen onder een artikel, zodat ik mijn mening of feedback kan delen.
2. Als gebruiker wil ik kunnen filteren op artikelen, zodat ik makkelijker een artikel kan vinden die ik wil lezen.

### Comment posting

https://github.com/user-attachments/assets/db4026c2-b3d7-4357-bf25-6f93c856e237

In het filmpje is te zien hoe je een comment plaatst bij het nieuws artikel. Wat er nieuw is, is dat wanneer je nu op versturen klikt de button verandert met een animatie. Hierdoor weet de gebruiker dat het systeem het nog aan het verwerken is.

### Verwijder knop comments

<img width="367" height="131" alt="image" src="https://github.com/user-attachments/assets/4526c31f-69d3-4f9c-910a-53da2c4e0235" />

Een bericht heeft nu een verwijder knop staan, om je bericht weer te kunnen verwijderen uit de database.

### Filteren en sorteren van artikelen

https://github.com/user-attachments/assets/33b475e8-a50b-4ee0-8209-095c41554a06

In het filmpje is te zien hoe je kan sorteren, en kan filteren op artikelen op elke district. Hierdoor kan je je gewenste artikel makkelijk vinden.

## Kenmerken
<!-- Bij Kenmerken staat welke technieken zijn gebruikt en hoe. Wat is de HTML structuur? Wat zijn de belangrijkste dingen in CSS? Wat is er met JS gedaan en hoe? Misschien heb je iets met NodeJS gedaan, of heb je een framwork of library gebruikt? -->

### Frontend performance

https://github.com/user-attachments/assets/ca24a97a-868f-4ad0-b42d-8531c5bd700a

Images worden nu als avif of webp bestand geladen. Dit zijn kleinere formaten bestanden waardoor de website het makkelijker kan laden en het sneller werkt. Vooral wanneer er lijsten met images moeten worden geladen, gaat dit enorm helpen. Hierbij is ook loading=lazy toegevoegd, waardoor de images pas worden geladen als je ernaartoe scrollt en het dus stuk voor stuk wordt geladen en niet alles in 1 keer.

### Loading en success state formulier
Door dit stuk javaScript verandert de button steeds en wordt de pagina NIET ververst en blijf je op dezelfde pagina.

https://github.com/Hexterty46/user-experience-enhanced-website/blob/5658a90f12bf560ee97cebbfa84fd095f7d75649/public/client.js#L1-L42

### Verwijder knop comments
In de HTML is een formulier met button aangemaakt, die dan doorgeeft aan de server.js dat het uit de database DELETE moet worden.

https://github.com/Hexterty46/user-experience-enhanced-website/blob/5658a90f12bf560ee97cebbfa84fd095f7d75649/views/article.liquid#L62-L64

https://github.com/Hexterty46/user-experience-enhanced-website/blob/5658a90f12bf560ee97cebbfa84fd095f7d75649/server.js#L163-L174

### Progressive Enhancement
Na de comments kan de Menu knop geopend, en gesloten worden zonder javascript.

<img width="82" height="65" alt="image" src="https://github.com/user-attachments/assets/de3ea48b-8598-43df-a492-500d20cf106d" />




https://github.com/user-attachments/assets/aac3800f-9112-4718-abe8-f60df19a0c45

https://github.com/Hexterty46/user-experience-enhanced-website/blob/bf100f0187333e736afa73b17655cd103d224ce0/views/partials/head.liquid#L18

De Menu button die je ziet is eigenlijk een link binnen HTML

https://github.com/Hexterty46/user-experience-enhanced-website/blob/bf100f0187333e736afa73b17655cd103d224ce0/views/partials/menu.liquid#L1-L26

Dit is de menu die geopend moet worden als ik op de knop zou moeten drukken.

https://github.com/Hexterty46/user-experience-enhanced-website/blob/bf100f0187333e736afa73b17655cd103d224ce0/public/style.css#L110-L225

Met als er op de Menu knop word geklikt, is dat eigenlijk een target naar de `nav` naar mijn menu. Op het moment dat Javascript niet werkt, komt er een knop in de menu om de Menu te sluiten. Dit word gedaan door de target die is gegeven met de Menu knop binnen de header weg te halen met CSS. Zo kan de menu geopend en gesloten worden zonder javascript.

https://github.com/Hexterty46/user-experience-enhanced-website/blob/bf100f0187333e736afa73b17655cd103d224ce0/public/script.js#L1-L19

Als er javascript gebruikt kan worden, word de CSS genegeerd. Dit word gedaan met de `event.preventdefault()`. Dit zorgt ervoor dat de oorspronkelijke manier van openen en sluiten word genegeerd, dus kan er makkelijk met javascript een class worden toegevoegd op de `nav`.

### Frontend performance
https://github.com/Hexterty46/user-experience-enhanced-website/blob/bf100f0187333e736afa73b17655cd103d224ce0/views/index.liquid#L10-L26

Je ziet dat de source elementen ervoor zorgen dat de bestanden in avif en anders webP worden omgezet. Deze vervangen in principe de src in het img element. Gebeurt dit niet dat valt hij terug op het originele src in de img. Ook zie dat loading=lazy is toegevoegd op het img element. 


## Installatie
<!-- Bij Installatie staat hoe een andere developer aan jouw repo kan werken -->

## Bronnen

## Licentie

This project is licensed under the terms of the [MIT license](./LICENSE).
