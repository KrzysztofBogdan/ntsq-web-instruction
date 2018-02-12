# Instruction

## Game Control

We recommend to use gamepads but two players can use keyboard to play the game.

### Gamepad

Here is list of supported gamepads: https://guavaman.com/projects/rewired/docs/SupportedControllers.html

Two players can play the game simultaneously using single gamepad. 

![Annotated Gamepad](./images/Gamepad.png)

To move between options you use Left or Right Stick.

Confirm action is "Action Button 01" or "D-Pad Down".

To answer music challenge use LB or LT in case when you are using left part of gamepad;
In case when you are using right part of the gamepad you use RT or RB.

### Keyboard

To move between options you use WSAD or Arrow Keys.

Confirm action is "E" or "Enter".

To answer music challenge use WSAD keys or Arrow Keys.

## Music File Preparation

You can prepare music files in two ways. Music has to be in mp3, aiff or wav sound format;
Format is recognized by file extension.

### Way 1 - file names

Prepare files names with music in such format: `name_of_the_artist-name_of_the_song`; 
For example: `Jennifer_Lopez-On_The_Floor.mp3`;
Next, point folder with music files in game;  


### Way 2 - configuration files

If for some reason you can not change names of the files you can prepare special configuration files;
This file will contain informations about songs. 
Configuration file can have any name and have to have extension `.jgsm`; For example: `SongManifest.jgms`.
   

Example configuration file:
```
{
  "Songs": [
  {
    "Path": "C:\\Music\MyNameOfTheFile.hello",
    "SongName": "S.O.S",
    "ArtistName": "Abba",
    "Type": "WAV"
  },
  {
    "Path": "C:\\Music\SubFolder\001-Lady_Gaga-Judas.mp3",
    "SongName": "Judas",
    "ArtistName": "Lady Gaga"
  }
  ]
}
```
`Path` - Path to file with music.

`SongName` - Name of the song or music.

`ArtistName` - Name of the artis, author or band. 

`Type` - Music format is recognized based on file extension. Field `Type` is optional when file has extension `.mp3`, `.wav` or `.aiff`; 
In case when file does not have extension or extension is not `.mp3`, `.wav` or `.aiff` then this field is required.
`Type` can have value `WAV`, `MP3` lub `AIFF`.

What is more you can define `RootPath` for example:
```
{
  "RootPath": "C:\\Music",
  "Songs": [
  {
    "Path": "MyNameOfTheFile.hello",
    "SongName": "S.O.S",
    "ArtistName": "Abba",
    "Type": "WAV"
  },
  {
    "Path": "SubFolder\001-Lady_Gaga-Judas.mp3",
    "SongName": "Judas",
    "ArtistName": "Lady Gaga"
  }
  ]
}
```
What results in possibility to define relative path in `Path` to path from field `RootPath`.