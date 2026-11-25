# 🃏 Flip-7-Rechner

Ein webbasierter Punkterechner für das Kartenspiel **Flip 7**.

Der Rechner erleichtert die Punkteberechnung und hilft dabei, den Überblick über Spieler, Runden und Ergebnisse zu behalten.

## 🌐 Rechner öffnen

[Flip-7-Rechner starten](https://morenobueno.github.io/Flip7-Rechner/)

## ✨ Funktionen

- Automatische Punkteberechnung
- Verwaltung mehrerer Spieler, Reihenfolge einstellbar
- Anzeige der Gesamtpunktestände mit Geber-Marker
- Rundenverlauf mit nachträglicher Korrektur früherer Runden
- Statistiken und Spielhistorie mit Siegen pro Spieler
- Export der Spielauswertung als Bild
- Lokale Speicherung der Spielstände im Browser
- Heller und dunkler Modus (folgt der Systemeinstellung)
- Nutzung auf Smartphone, Tablet und Computer
- Funktioniert offline und lässt sich auf dem Startbildschirm installieren (PWA)

## 🚀 Verwendung

1. Website öffnen.
2. Spieler hinzufügen.
3. Punkte der jeweiligen Runde eingeben.
4. Ergebnisse und Gesamtpunktestände verfolgen.

Eine Installation ist nicht erforderlich.

## 📋 Versionsverlauf

### v1.3
- Offline-Nutzung und Installation auf dem Startbildschirm (PWA)
- Zoomen wieder erlaubt, Text auswählbar (Barrierefreiheit)
- Eigener Speicher-Schlüssel, bestehende Spielstände werden automatisch übernommen
- Bessere Bedienung mit Tastatur und Screenreader (Esc schliesst Fenster, Beschriftungen)
- Weiterleitungsseite bei falscher Adresse, zusätzliche Meta-Angaben

### v1.2
- Spielhistorie mit Siegen pro Spieler
- Heller Modus (folgt der Systemeinstellung)
- Geber-Marker und Spielerreihenfolge einstellbar
- «Weiter» springt zum nächsten offenen Spieler
- «Freeze»-Knopf für Spieler, die ohne Karten 0 Punkte haben
- Bildschirm bleibt während des Spiels an
- Ziel während des Spiels änderbar, «Neues Spiel» direkt nach dem Sieg
- Überarbeitete Startseite

### v1.1
- Warnung, wenn ein Spieler in der Runde noch keine Karten hat
- Rückgängig-Hinweis nach dem Speichern einer Runde
- Laufende Runde wird nach dem Neuladen wiederhergestellt
- Frühere Runden im Verlauf nachträglich korrigierbar
- Robusteres Speichern und Teilen der Auswertung als Bild

### v1.0 – Erste Veröffentlichung
- Grundfunktionen des Punkterechners
- Spielerverwaltung und Punkteberechnung
- Statistiken und Rundenverlauf
- Bildexport und lokale Speicherung

## 🔒 Datenschutz

Spielstände werden lokal im Browser gespeichert. Es ist kein Benutzerkonto erforderlich.

## 🛠️ Technologie

HTML, CSS und JavaScript, ohne Build-Schritt. Gehostet über GitHub Pages.

### Aufbau

```
index.html            Startseite
404.html              Weiterleitung bei falscher Adresse
sw.js                 Service Worker (Offline-Cache)
manifest.webmanifest  App-Installation
css/style.css         Gestaltung
js/app.js             Programmlogik
img/                  Icons und Vorschaubild
```

### Lokal testen

```
python3 -m http.server 8000
```

Danach `http://localhost:8000` im Browser öffnen. Wird eine Datei geändert, in `sw.js` die `VERSION` erhöhen, damit Geräte die neue Version laden.

## 📌 Projektstatus

Version 1.3 – veröffentlicht

Weitere Verbesserungen sind geplant.

## ⚖️ Hinweis

Dies ist ein inoffizielles Fan-Projekt und steht in keiner Verbindung zum Verlag oder zu den Rechteinhabern von Flip 7. Der Name «Flip 7» gehört seinen jeweiligen Inhabern.

## 📄 Lizenz

MIT, siehe [LICENSE](LICENSE).
