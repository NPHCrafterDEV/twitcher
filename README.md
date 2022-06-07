# Verbinde deinen Twitch Chat mit Discord!


**Wie funktioniert es?**
1. Installiere [Node.js](https://nodejs.org/de/) (v16 oder höher)
2. Lade alle Dateien herrunter
3. Öffne config.json in einem Text-/Codeeditor
4. Gehe in das [Discord Developer Portal](https://discord.com/developers/applications) und erstelle dort eine neue App mit einem Bot
5. Kopiere dein Bot Token und füge es unter discordtoken in der config,json ein
6. Hole dir nun ein Token für den Twitchbot auf [Twitchapps](https://twitchapps.com/tmi/)
7. Füge dein Twitchtoken unter OAUTH in der config.json ein
8, Unter channel in der config.json muss der Twitchkanal eingetragen werden z.B. nphcrafter
9, Unter discordchannel in der config.json wird die ID von dem Kanal eingetragen, in den der Chat gesendet werden soll
10. Speicher die Datei
11. Führe den Bot mit ´node index.js´ aus
