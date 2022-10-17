# Elevate!

## 1. Idee
Du stehst schon wieder morgens mit dem Kinderwagen vor dem Fahrstuhl - außer Betrieb! Das wird wohl nichts mehr mit dem 9 Uhr Meeting. Hättest du das bloß früher gewusst, dann hättest du die Tram genommen! 

Hier kommt Elevate! ins Spiel. Gib einfach an, welche Haltestellen sind die du regelmäßig nutzt, und wann du benachrichtigt werden willst. Und wenn der Fahstuhl oder die Rolltreppe außer Betrieb ist bekommst du eine Nachricht - und stehst nie wieder vor verschlossenen Fahrstuhltüren. 

## 2. Systemkomponenten
#Hardware
- Cloud-Server
- mobile Endgeräte

# Software
- App für den Fahrstul-Check

### Software 
```diff
- das sind framework, services und keine Software.
```
Python / streamlit
User Authentification, Datenbank für User Data
Email-Server

### Quellsysteme
Beruht auf Daten der [FaSta API](https://developers.deutschebahn.com/db-api-marketplace/apis/product/fasta) der Deutschen Bahn.

Ausgangsschnittstellen
- RESTful webservice


## 3. Netzwerkkonzept
- Bandbreite (Carrier, QoS) -  5 mbit
- QoS nicht notwendig, nur sehr wenig Daten notwendig (Text-File)

## 4. Cloud-Bedarf
- 2 virtuelle Server (Mirror)
- 2 virtuelle Datenbanken (Mirror)


## 5. Betriebskonzept
Hardware – Wartungsbedarf:
- gering, keine eigenen Server, nur mobile Endgeräte und PCs

Betriebssystem: 
- Cloud: Red Hat Enterprise Linux
- Mobilgeräte: Android, IOS
- PCs: Windows10, MacOS

Updateverfahren:
- Update der Cloud über den Anbieter
Softwarepflege
- User überlassen


## 6. Notfallkonzeption
- Datenbanken und Server gespiegelt vorhanden, Umschaltung bei Ausfall
- Daily BackUps, nightly tests


## 7. Support
Entry Point für Incidents  
Supportzeit  
Reaktionszeit  
Wiederherstellungszeit  
Wartungszugang erforderlich?  
...

## 8. Bedienoberflächen
Systemvoraussetzungen  
Nutzer- und Berechtigungskonzept  
...