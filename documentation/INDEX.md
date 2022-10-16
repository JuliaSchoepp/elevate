# Elevate!

## 1. Idee
Du stehst schon wieder morgens mit dem Kinderwagen vor dem Fahrstuhl - außer Betrieb! Das wird wohl nichts mehr mit dem 9 Uhr Meeting. Hättest du das bloß früher gewusst, dann hättest du die Tram genommen! 

Hier kommt Elevate! ins Spiel. Gib einfach an, welche Haltestellen sind die du regelmäßig nutzt, und wann du benachrichtigt werden willst. Und wenn der Fahstuhl oder die Rolltreppe außer Betrieb ist bekommst du eine Nachricht - und stehst nie wieder vor verschlossenen Fahrstuhltüren. 

### Zielgruppen:
Regelmäßige Kund:innen der S-Bahnen, insbesondere:
- Menschen mit Kindern (v.a.: Kinderwägen etc.)
- Menschen mit Mobilitätseinschränkungen
- Menschen mit Gepäck, Fahrrädern etc.

## 2. Systemkomponenten
Hardware  (keine?)

### Software 
Python / streamlit
User Authentification, Datenbank für User Data
Email-Server

### Quellsysteme
Beruht auf Daten der [FaSta API](https://developers.deutschebahn.com/db-api-marketplace/apis/product/fasta) der Deutschen Bahn.

Ausgangsschnittstellen
…

## 3. Netzwerkkonzept
Bandbreite (Carrier, QoS)  
Anteile intern/extern  
Was wird benötigt?  
IP-Adressen/ Ports /Firewallfreischaltung/QoS  
Platz im Technikraum  
Anzahl HE  
Tiefe  
…

## 4. Cloud-Bedarf
Autarke Anteile  
Darstellung Aufbau  
...

## 5. Betriebskonzept
Hardware – Wartungsbedarf?  
Betriebssystem  
Updateverfahren (Securitypatches,..)  
Softwarepflege  
Securitypatches,..


## 6. Notfallkonzeption
Datensicherung  / Logs  
...

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

### User Stories
- Auswählen einer Station (Facility?) über Karte
- Auswahl einer Facility über Stationssuche
- Anlegen eines Alarms für bestimmte Facilities
- Konfigurieren eines Alarms (Uhrzeit)
- Ändern / Löschen eines Alarms
- Einsehen von Statistiken
...

