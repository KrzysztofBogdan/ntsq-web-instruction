# Instrukcja

## Sterowanie
Polecamy do sterowania używać gamepadów. Dodatkowo 2 graczy może grać używając klawiatury.

### Gamepad
Tutaj znajduje się lista wspieranych gamepadów: https://guavaman.com/projects/rewired/docs/SupportedControllers.html

Dwóch graczy może grać jednocześnie używając jednego gamepada.

![Annotated Gamepad](./images/Gamepad.png)

Między opcjami poruszamy się gałką (Left Stick albo Right Stick).

Potwierdzamy "Action Button 01" albo "D-Pad Down".

Zgłaszamy się do odpowiedzi używając LB lub LT w przypadku gracza po lewej stronie albo 
RT lub RB w przypadku gracza z prawej strony.

### Klawiatura

Między opcjami poruszamy się WSAD albo strzałkami.

Potwierdzamy "E" albo "Enter".

Zgłaszamy się do odpowiedzi używając WSAD w przypadku pierwszego gracza albo dowolnej strzałki w przypadku drugiego gracza.

## Przygotowanie Plików muzycznych

Pliki muzyczne można przygotować na dwa sposoby. Pliki muszą być w formacje mp3, aiff lub wav; 
Format jest rozpoznawany po rozszerzeniu pliku. 

### Sposób 1 - nazwy plików

Nazywać pliki z muzyką w formie `nazwa_artysty-nazwa_piosenki.mp3`; Na przykład: `Jennifer_Lopez-On_The_Floor.mp3`;
Następnie wskazać w grze folder z tak nazwanymi plikami.

### Sposób 2 - plik konfiguracyjny

Jeżeli z jakiegoś powodu nie możemy albo nie chcemy zmieniać nazwy plików 
można przygotować specjalny plik konfiguracyjny który dostarczy informacje o plikach.
Plik powinien może dowolną nazwę i musi mieć rozszerzenie .jgms; Na przykład: `SongManifest.jgms`.

Plik powinien wyglądać tak:
```
{
  "Songs": [
  {
    "Path": "C:\\Music\MojaNazwaPliku.hello",
    "SongName": "S.O.S",
    "ArtistName": "Abba",
    "Type": "WAV"
  },
  {
    "Path": "C:\\Music\PodFolder\001-Adam_Stachowiak-Wracam_co_noc.mp3",
    "SongName": "Wracam co noc",
    "ArtistName": "Adam Stachowiak"
  }
  ]
}
```
`Path` - Ścieżka do pliku z muzyką.

`SongName` - Nazwa muzyki.

`ArtistName` - Nazwa wykonawcy, autora lub zespołu. 

`Type` - Format muzyki jest wnioskowany na podstawie rozszerzenia pliku. Pole `Type` jest opcjonalne gdy plik ma rozszerzenie
`.mp3`, `.wav` lub `.aiff`; W przypadku gdy plik nie ma rozszerzenia lub rozszerzenie jest innie niż 
`.mp3`, `.wav` lub `.aiff` należy zdefiniować `Type`. `Type` może przyjąć wartość `WAV`, `MP3` lub `AIFF`.

Dodatkowo można zdefiniować pole `RootPath` np:
```
{
  "RootPath": "C:\\Music",
  "Songs": [
  {
    "Path": "MojaNazwaPliku.hello",
    "SongName": "S.O.S",
    "ArtistName": "Abba",
    "Type": "WAV"
  },
  {
    "Path": "PodFolder\001-Adam_Stachowiak-Wracam_co_noc.mp3",
    "SongName": "Wracam co noc",
    "ArtistName": "Adam Stachowiak"
  }
  ]
}
```
Co powoduje, że w polu Path można podać ścieżkę względną do ścieżki z pola `RootPath`  


