// tslint:disable

export interface Faction {
  id: number;
  name: string;
  image: string;
  eyeOfVortex?: boolean;
  mortalEmpires?: boolean;
  playable?: boolean;
  fromDlc?: boolean;
  theQueenAndTheCrone?: boolean;
  theProphetAndTheWarlock?: boolean;
  theHunterAndTheBeast?: boolean;
  theShadowAndTheBlade?: boolean;
  curseOfTheVampireCoast?: boolean;
  tombKings?: boolean;
  lord?: string;
  norsca?: boolean;
  race?: string | 'Skaven' | 'Dark Elves' | 'Lizardmen' | 'High Elves' | 'Tomb Kings' | 'The Empire' | 'Bretonnia' | 'Kislev' | 'Vampire Coast' | 'Chaos Warriors' | 'Beastmen Warherds' | 'Wood Elves' | 'Norscan Tribes' | 'Vampire Counts' | 'Savage Orc Tribes' | 'Greenskin Tribes' | 'Dwarf Realms';
  selected?: boolean;
}

export const factions: Faction[] = [
  {
    "name": "Black Creek Raiders",
    "image": "assets/images/factions/Black-Creek-Raiders.png",
    "eyeOfVortex": true,
    "mortalEmpires": false,
  },
  {
    "name": "Dwellers of Zardok",
    "image": "assets/images/factions/Dwellers-of-Zardok.png",
    "eyeOfVortex": true,
    "mortalEmpires": false
  },
  {
    "name": "Eyes of the Jungle",
    "image": "assets/images/factions/Eyes-of-the-Jungle.png",
    "eyeOfVortex": true,
    "mortalEmpires": false
  },
  {
    "name": "Pilgrims of Myrmidia",
    "image": "assets/images/factions/Pilgrims-of-Myrmidia.png",
    "eyeOfVortex": true,
    "mortalEmpires": false
  },
  {
    "name": "The Sunken Land Corsairs",
    "image": "assets/images/factions/The-Sunken-Land-Corsairs.png",
    "eyeOfVortex": true,
    "mortalEmpires": false
  },
  {
    "name": "Bleak Coast Buccaneers",
    "image": "assets/images/factions/Bleak-Coast-Buccaneers.png",
    "eyeOfVortex": true,
    "mortalEmpires": false
  },
  {
    "name": "The Boyz of the Forbidden Coast",
    "image": "assets/images/factions/The-Boyz-of-the-Forbidden-Coast.png",
    "eyeOfVortex": true,
    "mortalEmpires": false
  },
  {
    "name": "Freebooters of Port Royale",
    "image": "assets/images/factions/Freebooters-of-Port-Royale.png",
    "eyeOfVortex": true,
    "mortalEmpires": false
  },
  {
    "name": "Grey Point Scuttlers",
    "image": "assets/images/factions/Grey-Point-Scuttlers.png",
    "eyeOfVortex": true,
    "mortalEmpires": false
  },
  {
    "name": "The Terrors of the Dark Straits",
    "image": "assets/images/factions/The-Terrors-of-the-Dark-Straits.png",
    "eyeOfVortex": true,
    "mortalEmpires": false
  },
  {
    "name": "The Churning Gulf Raiders",
    "image": "assets/images/factions/The-Churning-Gulf-Raiders.png",
    "eyeOfVortex": true,
    "mortalEmpires": false
  },
  {
    "name": "The Tyrants of the Black Ocean",
    "image": "assets/images/factions/The-Tyrants-of-the-Black-Ocean.png",
    "eyeOfVortex": true,
    "mortalEmpires": false
  },
  {
    "name": "Dragon Spine Privateers",
    "image": "assets/images/factions/Dragon-Spine-Privateers.png",
    "eyeOfVortex": true,
    "mortalEmpires": false
  },
  {
    "name": "Middle Sea Brigands",
    "image": "assets/images/factions/Middle-Sea-Brigands.png",
    "eyeOfVortex": true,
    "mortalEmpires": false
  },
  {
    "name": "Shark Strait Seadogs",
    "image": "assets/images/factions/Shark-Strait-Seadogs.png",
    "eyeOfVortex": true,
    "mortalEmpires": false
  },
  {
    "name": "Abominations",
    "image": "assets/images/factions/Abominations.png",
    "eyeOfVortex": true,
    "mortalEmpires": false
  },
  {
    "name": "Beastcatchas",
    "image": "assets/images/factions/Beastcatchas.png",
    "eyeOfVortex": true,
    "mortalEmpires": false
  },
  {
    "name": "Bernhoff's Brigands",
    "image": "assets/images/factions/Bernhoff's-Brigands.png",
    "eyeOfVortex": true,
    "mortalEmpires": false
  },
  {
    "name": "Black Spider Tribe",
    "image": "assets/images/factions/Black-Spider-Tribe.png",
    "eyeOfVortex": true,
    "mortalEmpires": false
  },
  {
    "name": "Boneclubbers Tribe",
    "image": "assets/images/factions/Boneclubbers-Tribe.png",
    "eyeOfVortex": true,
    "mortalEmpires": false
  },
  {
    "name": "Celestial Storm",
    "image": "assets/images/factions/Celestial-Storm.png",
    "eyeOfVortex": true,
    "mortalEmpires": false
  },
  {
    "name": "College of Pyrotechnics",
    "image": "assets/images/factions/College-of-Pyrotechnics.png",
    "eyeOfVortex": true,
    "mortalEmpires": false
  },
  {
    "name": "Vashnaar's Conquest",
    "image": "assets/images/factions/Vashnaar's-Conquest.png",
    "eyeOfVortex": true,
    "mortalEmpires": false
  },
  {
    "name": "Mengil's Manflayers",
    "image": "assets/images/factions/Mengil's-Manflayers.png",
    "eyeOfVortex": true,
    "mortalEmpires": false
  },
  {
    "name": "Doomseekers",
    "image": "assets/images/factions/Doomseekers.png",
    "eyeOfVortex": true,
    "mortalEmpires": false
  },
  {
    "name": "Gerhardt's Mercenaries",
    "image": "assets/images/factions/Gerhardt's-Mercenaries.png",
    "eyeOfVortex": true,
    "mortalEmpires": false
  },
  {
    "name": "Tor Elithis Refugees",
    "image": "assets/images/factions/Tor-Elithis-Refugees.png",
    "eyeOfVortex": true,
    "mortalEmpires": false
  },
  {
    "name": "Hung Warband",
    "image": "assets/images/factions/Hung-Warband.png",
    "eyeOfVortex": true,
    "mortalEmpires": false
  },
  {
    "name": "Jerrod's Errantry Army",
    "image": "assets/images/factions/Jerrod's-Errantry-Army.png",
    "eyeOfVortex": true,
    "mortalEmpires": false
  },
  {
    "name": "Mangy Houndz",
    "image": "assets/images/factions/Mangy-Houndz.png",
    "eyeOfVortex": true,
    "mortalEmpires": false
  },
  {
    "name": "Morrslieb's Howlers",
    "image": "assets/images/factions/Morrslieb's-Howlers.png",
    "eyeOfVortex": true,
    "mortalEmpires": false
  },
  {
    "name": "Pirates of the Far Sea",
    "image": "assets/images/factions/Pirates-of-the-Far-Sea.png",
    "eyeOfVortex": true,
    "mortalEmpires": false
  },
  {
    "name": "Pirates of the Southern Ocean",
    "image": "assets/images/factions/Pirates-of-the-Southern-Ocean.png",
    "eyeOfVortex": true,
    "mortalEmpires": false
  },
  {
    "name": "Pirates of Trantio",
    "image": "assets/images/factions/Pirates-of-Trantio.png",
    "eyeOfVortex": true,
    "mortalEmpires": false
  },
  {
    "name": "Scions of Tesseninck",
    "image": "assets/images/factions/Scions-of-Tesseninck.png",
    "eyeOfVortex": true,
    "mortalEmpires": false
  },
  {
    "name": "The Scourge of Aquitaine",
    "image": "assets/images/factions/The-Scourge-of-Aquitaine.png",
    "eyeOfVortex": true,
    "mortalEmpires": false
  },
  {
    "name": "Stuff-Snatchers",
    "image": "assets/images/factions/Stuff-Snatchers.png",
    "eyeOfVortex": true,
    "mortalEmpires": false
  },
  {
    "name": "Teef Snatchaz",
    "image": "assets/images/factions/Teef-Snatchaz.png",
    "eyeOfVortex": true,
    "mortalEmpires": false
  },
  {
    "name": "The Wandering Dead",
    "image": "assets/images/factions/The-Wandering-Dead.png",
    "eyeOfVortex": true,
    "mortalEmpires": false
  },
  {
    "name": "Troll-Skullz",
    "image": "assets/images/factions/Troll-Skullz.png",
    "eyeOfVortex": true,
    "mortalEmpires": false
  },
  {
    "name": "Vaul's Expedition",
    "image": "assets/images/factions/Vaul's-Expedition.png",
    "eyeOfVortex": true,
    "mortalEmpires": false
  },
  {
    "name": "Heirs of Mourkain",
    "image": "assets/images/factions/Heirs-of-Mourkain.png",
    "eyeOfVortex": true,
    "mortalEmpires": false
  },
  {
    "name": "Hunters of Kurnous",
    "image": "assets/images/factions/Hunters-of-Kurnous.png",
    "eyeOfVortex": true,
    "mortalEmpires": false
  },
  {
    "name": "Worldroot Rangers",
    "image": "assets/images/factions/Worldroot-Rangers.png",
    "eyeOfVortex": true,
    "mortalEmpires": false
  },
  {
    "name": "Wrath of Nature",
    "image": "assets/images/factions/Wrath-of-Nature.png",
    "eyeOfVortex": true,
    "mortalEmpires": false
  },
  {
    "name": "Clan Rictus",
    "image": "assets/images/factions/Clan-Rictus.png",
    "eyeOfVortex": true,
    "mortalEmpires": true,
    playable: true,
    race: 'Skaven'
  },
  {
    "name": "Clan Fester",
    "image": "assets/images/factions/Clan-Fester.png",
    "eyeOfVortex": true,
    "mortalEmpires": false
  },
  {
    "name": "Clan Mange",
    "image": "assets/images/factions/Clan-Mange.png",
    "eyeOfVortex": true,
    "mortalEmpires": false
  },
  {
    "name": "Clan Eshin",
    "image": "assets/images/factions/Clan-Eshin.png",
    "eyeOfVortex": true,
    "mortalEmpires": true,
    playable: true,
    fromDlc: true,
    theShadowAndTheBlade: true,
    race: 'Skaven'
  },
  {
    "name": "Clan Gnaw",
    "image": "assets/images/factions/Clan-Gnaw.png",
    "eyeOfVortex": true,
    "mortalEmpires": false
  },
  {
    "name": "Clan Mordkin",
    "image": "assets/images/factions/Clan-Mordkin.png",
    "eyeOfVortex": true,
    "mortalEmpires": false
  },
  {
    "name": "Clan Moulder",
    "image": "assets/images/factions/Clan-Moulder.png",
    "eyeOfVortex": true,
    "mortalEmpires": false
  },
  {
    "name": "Clan Septik",
    "image": "assets/images/factions/Clan-Septik.png",
    "eyeOfVortex": true,
    "mortalEmpires": false
  },
  {
    "name": "Clan Skryre",
    "image": "assets/images/factions/Clan-Skryre.png",
    "eyeOfVortex": true,
    "mortalEmpires": true,
    playable: true,
    fromDlc: true,
    theProphetAndTheWarlock: true,
    race: 'Skaven'
  },
  {
    "name": "Clan Spittel",
    "image": "assets/images/factions/Clan-Spittel.png",
    "eyeOfVortex": true,
    "mortalEmpires": false
  },
  {
    "name": "Grey Seer Clan",
    "image": "assets/images/factions/Grey-Seer-Clan.png",
    "eyeOfVortex": true,
    "mortalEmpires": false
  },
  {
    "name": "Skaven",
    "image": "assets/images/factions/Skaven.png",
    "eyeOfVortex": true,
    "mortalEmpires": false
  },
  {
    "name": "Skaven Intervention",
    "image": "assets/images/factions/Skaven-Intervention.png",
    "eyeOfVortex": true,
    "mortalEmpires": false
  },
  {
    "name": "Unknown Skaven Clan",
    "image": "assets/images/factions/Unknown-Skaven-Clan.png",
    "eyeOfVortex": true,
    "mortalEmpires": false
  },
  {
    "name": "Unknown Skaven Clan",
    "image": "assets/images/factions/Unknown-Skaven-Clan.png",
    "eyeOfVortex": true,
    "mortalEmpires": false
  },
  {
    "name": "Unknown Skaven Clan",
    "image": "assets/images/factions/Unknown-Skaven-Clan.png",
    "eyeOfVortex": true,
    "mortalEmpires": false
  },
  {
    "name": "Unknown Skaven Clan",
    "image": "assets/images/factions/Unknown-Skaven-Clan.png",
    "eyeOfVortex": true,
    "mortalEmpires": false
  },
  {
    "name": "Skaven Rebels",
    "image": "assets/images/factions/Skaven-Rebels.png",
    "eyeOfVortex": true,
    "mortalEmpires": false
  },
  {
    "name": "Clan Rictus Separatists",
    "image": "assets/images/factions/Clan-Rictus-Separatists.png",
    "eyeOfVortex": true,
    "mortalEmpires": false
  },
  {
    "name": "Clan Eshin Separatists",
    "image": "assets/images/factions/Clan-Eshin-Separatists.png",
    "eyeOfVortex": true,
    "mortalEmpires": false
  },
  {
    "name": "Clan Mors Separatists",
    "image": "assets/images/factions/Clan-Mors-Separatists.png",
    "eyeOfVortex": true,
    "mortalEmpires": false
  },
  {
    "name": "Clan Pestilens Separatists",
    "image": "assets/images/factions/Clan-Pestilens-Separatists.png",
    "eyeOfVortex": true,
    "mortalEmpires": false
  },
  {
    "name": "Clan Skryre Separatists",
    "image": "assets/images/factions/Clan-Skryre-Separatists.png",
    "eyeOfVortex": true,
    "mortalEmpires": false
  },
  {
    "name": "Dune Kingdoms",
    "image": "assets/images/factions/Dune-Kingdoms.png",
    "eyeOfVortex": true,
    "mortalEmpires": false
  },
  {
    "name": "Numas",
    "image": "assets/images/factions/Numas.png",
    "eyeOfVortex": true,
    "mortalEmpires": false
  },
  {
    "name": "Rakaph Dynasty",
    "image": "assets/images/factions/Rakaph-Dynasty.png",
    "eyeOfVortex": true,
    "mortalEmpires": false
  },
  {
    "name": "The Sentinels",
    "image": "assets/images/factions/The-Sentinels.png",
    "eyeOfVortex": true,
    "mortalEmpires": false
  },
  {
    "name": "Tomb Kings Rebels",
    "image": "assets/images/factions/Tomb-Kings-Rebels.png",
    "eyeOfVortex": true,
    "mortalEmpires": false
  },
  {
    "name": "Blood Voyage",
    "image": "assets/images/factions/Blood-Voyage.png",
    "eyeOfVortex": true,
    "mortalEmpires": false
  },
  {
    "name": "Bleak Holds",
    "image": "assets/images/factions/Bleak-Holds.png",
    "eyeOfVortex": true,
    "mortalEmpires": false
  },
  {
    "name": "Blood Hall Coven",
    "image": "assets/images/factions/Blood-Hall-Coven.png",
    "eyeOfVortex": true,
    "mortalEmpires": false
  },
  {
    "name": "Clar Karond",
    "image": "assets/images/factions/Clar-Karond.png",
    "eyeOfVortex": true,
    "mortalEmpires": false
  },
  {
    "name": "Cult of Excess",
    "image": "assets/images/factions/Cult-of-Excess.png",
    "eyeOfVortex": true,
    "mortalEmpires": false
  },
  {
    "name": "Cult of Pleasure",
    "image": "assets/images/factions/Cult-of-Pleasure.png",
    "eyeOfVortex": true,
    "mortalEmpires": true,
    playable: true,
    race: 'Dark Elves'
  },
  {
    "name": "Dark Elves",
    "image": "assets/images/factions/Dark-Elves.png",
    "eyeOfVortex": true,
    "mortalEmpires": false
  },
  {
    "name": "Dark Elf Intervention",
    "image": "assets/images/factions/Dark-Elf-Intervention.png",
    "eyeOfVortex": true,
    "mortalEmpires": false
  },
  {
    "name": "Deadwood Sentinels",
    "image": "assets/images/factions/Deadwood-Sentinels.png",
    "eyeOfVortex": true,
    "mortalEmpires": false
  },
  {
    "name": "Drackla Coven",
    "image": "assets/images/factions/Drackla-Coven.png",
    "eyeOfVortex": true,
    "mortalEmpires": false
  },
  {
    "name": "Ghrond",
    "image": "assets/images/factions/Ghrond.png",
    "eyeOfVortex": true,
    "mortalEmpires": false
  },
  {
    "name": "Hag Graef",
    "image": "assets/images/factions/Hag-Graef.png",
    "eyeOfVortex": true,
    "mortalEmpires": true,
    playable: true,
    fromDlc: true,
    theShadowAndTheBlade: true,
    race: 'Dark Elves'
  },
  {
    "name": "Karond Kar",
    "image": "assets/images/factions/Karond-Kar.png",
    "eyeOfVortex": true,
    "mortalEmpires": false
  },
  {
    "name": "Scourge of Khaine",
    "image": "assets/images/factions/Scourge-of-Khaine.png",
    "eyeOfVortex": true,
    "mortalEmpires": false
  },
  {
    "name": "Ss'ildra Tor",
    "image": "assets/images/factions/Ss'ildra-Tor.png",
    "eyeOfVortex": true,
    "mortalEmpires": false
  },
  {
    "name": "The Forgebound",
    "image": "assets/images/factions/The-Forgebound.png",
    "eyeOfVortex": true,
    "mortalEmpires": false
  },
  {
    "name": "Dark Elf Rebels",
    "image": "assets/images/factions/Dark-Elf-Rebels.png",
    "eyeOfVortex": true,
    "mortalEmpires": false
  },
  {
    "name": "The Dreadfleet",
    "image": "assets/images/factions/The-Dreadfleet.png",
    "eyeOfVortex": true,
    "mortalEmpires": true,
    playable: true,
    fromDlc: true,
    curseOfTheVampireCoast: true,
    race: 'Vampire Coast'
  },
  {
    "name": "Pirates of Sartosa",
    "image": "assets/images/factions/Pirates-of-Sartosa.png",
    "eyeOfVortex": true,
    "mortalEmpires": true,
    playable: true,
    fromDlc: true,
    curseOfTheVampireCoast: true,
    race: 'Vampire Coast'
  },
  {
    "name": "The Drowned",
    "image": "assets/images/factions/The-Drowned.png",
    "eyeOfVortex": true,
    "mortalEmpires": true,
    playable: true,
    fromDlc: true,
    curseOfTheVampireCoast: true,
    race: 'Vampire Coast'
  },
  {
    "name": "The Awakened",
    "image": "assets/images/factions/The-Awakened.png",
    "eyeOfVortex": true,
    "mortalEmpires": true,
    playable: true,
    fromDlc: true,
    curseOfTheVampireCoast: true,
    race: 'Vampire Coast'
  },
  {
    "name": "Vampire Coast Rebels",
    "image": "assets/images/factions/Vampire-Coast-Rebels.png",
    "eyeOfVortex": true,
    "mortalEmpires": false
  },
  {
    "name": "The Blessed Dread",
    "image": "assets/images/factions/The-Blessed-Dread.png",
    "eyeOfVortex": true,
    "mortalEmpires": false,
    playable: true,
    fromDlc: true,
    race: 'Dark Elves'
  },
  {
    "name": "Har Ganeth",
    "image": "assets/images/factions/Har-Ganeth.png",
    "eyeOfVortex": true,
    "mortalEmpires": true,
    playable: true,
    fromDlc: true,
    theQueenAndTheCrone: true,
    race: 'Dark Elves'
  },
  {
    "name": "The Barrow Legion",
    "image": "assets/images/factions/The-Barrow-Legion.png",
    "eyeOfVortex": false,
    "mortalEmpires": true,
    playable: true,
    lord: 'Heinrich Kemmler',
    race: 'Vampire Counts'
  },
  {
    "name": "Leaf-Cutterz Tribe",
    "image": "assets/images/factions/Leaf-Cutterz-Tribe.png",
    "eyeOfVortex": true,
    "mortalEmpires": false
  },
  {
    "name": "Leaf-Cutterz Tribe Waaagh!",
    "image": "assets/images/factions/Leaf-Cutterz-Tribe-Waaagh!.png",
    "eyeOfVortex": true,
    "mortalEmpires": false
  },
  {
    "name": "Red Cloud",
    "image": "assets/images/factions/Red-Cloud.png",
    "eyeOfVortex": true,
    "mortalEmpires": false
  },
  {
    "name": "Red Cloud Waaagh!",
    "image": "assets/images/factions/Red-Cloud-Waaagh!.png",
    "eyeOfVortex": true,
    "mortalEmpires": false
  },
  {
    "name": "Rictus Clan-Nest",
    "image": "assets/images/factions/Rictus-Clan-Nest.png",
    "eyeOfVortex": true,
    "mortalEmpires": false
  },
  {
    "name": "Arachnos",
    "image": "assets/images/factions/Arachnos.png",
    "eyeOfVortex": true,
    "mortalEmpires": false
  },
  {
    "name": "Arachnos Waaagh!",
    "image": "assets/images/factions/Arachnos-Waaagh!.png",
    "eyeOfVortex": true,
    "mortalEmpires": false
  },
  {
    "name": "Blue Vipers",
    "image": "assets/images/factions/Blue-Vipers.png",
    "eyeOfVortex": true,
    "mortalEmpires": false
  },
  {
    "name": "Blue Vipers Waaagh!",
    "image": "assets/images/factions/Blue-Vipers-Waaagh!.png",
    "eyeOfVortex": true,
    "mortalEmpires": false
  },
  {
    "name": "Cult of Sotek",
    "image": "assets/images/factions/Cult-of-Sotek.png",
    "eyeOfVortex": true,
    "mortalEmpires": false,
    playable: true,
    fromDlc: true,
    theProphetAndTheWarlock: true,
    race: 'Lizardmen'
  },
  {
    "name": "Children of the Old Ones",
    "image": "assets/images/factions/Children-of-the-Old-Ones.png",
    "eyeOfVortex": true,
    "mortalEmpires": false
  },
  {
    "name": "Itz-Itza Tribe",
    "image": "assets/images/factions/Itz-Itza-Tribe.png",
    "eyeOfVortex": true,
    "mortalEmpires": false
  },
  {
    "name": "Itza",
    "image": "assets/images/factions/Itza.png",
    "eyeOfVortex": true,
    "mortalEmpires": true,
    playable: true,
    race: 'Lizardmen'
  },
  {
    "name": "Last Defenders",
    "image": "assets/images/factions/Last-Defenders.png",
    "eyeOfVortex": true,
    "mortalEmpires": false,
    playable: true,
    race: 'Lizardmen'
  },
  {
    "name": "Lizardmen",
    "image": "assets/images/factions/Lizardmen.png",
    "eyeOfVortex": true,
    "mortalEmpires": false
  },
  {
    "name": "Lizardmen Intervention",
    "image": "assets/images/factions/Lizardmen-Intervention.png",
    "eyeOfVortex": true,
    "mortalEmpires": false
  },
  {
    "name": "Sentinels of Xeti",
    "image": "assets/images/factions/Sentinels-of-Xeti.png",
    "eyeOfVortex": true,
    "mortalEmpires": false
  },
  {
    "name": "Southern Sentinels",
    "image": "assets/images/factions/Southern-Sentinels.png",
    "eyeOfVortex": true,
    "mortalEmpires": false
  },
  {
    "name": "Teotiqua",
    "image": "assets/images/factions/Teotiqua.png",
    "eyeOfVortex": true,
    "mortalEmpires": false
  },
  {
    "name": "Tlaqua",
    "image": "assets/images/factions/Tlaqua.png",
    "eyeOfVortex": true,
    "mortalEmpires": true,
    playable: true,
    fromDlc: true,
    race: 'Lizardmen'
  },
  {
    "name": "Tlaxtlan",
    "image": "assets/images/factions/Tlaxtlan.png",
    "eyeOfVortex": true,
    "mortalEmpires": false
  },
  {
    "name": "Xlanhuapec",
    "image": "assets/images/factions/Xlanhuapec.png",
    "eyeOfVortex": true,
    "mortalEmpires": false
  },
  {
    "name": "Zlatlan",
    "image": "assets/images/factions/Zlatlan.png",
    "eyeOfVortex": true,
    "mortalEmpires": false
  },
  {
    "name": "Lizardmen Rebels",
    "image": "assets/images/factions/Lizardmen-Rebels.png",
    "eyeOfVortex": true,
    "mortalEmpires": false
  },
  {
    "name": "The Golden Order",
    "image": "assets/images/factions/The-Golden-Order.png",
    "eyeOfVortex": false,
    "mortalEmpires": true,
    playable: true,
    lord: 'Balthasar Gelt',
    race: 'The Empire'
  },
  {
    "name": "The Huntsmarshal's Expedition",
    "image": "assets/images/factions/The-Huntsmarshal's-Expedition.png",
    "eyeOfVortex": true,
    "mortalEmpires": true,
    lord: 'Markus Wulfhart',
    playable: true,
    fromDlc: true,
    theHunterAndTheBeast: true,
    race: 'The Empire'
  },
  {
    "name": "New World Colonies",
    "image": "assets/images/factions/New-World-Colonies.png",
    "eyeOfVortex": true,
    "mortalEmpires": false
  },
  {
    "name": "Sudenburg",
    "image": "assets/images/factions/Sudenburg.png",
    "eyeOfVortex": true,
    "mortalEmpires": false
  },
  {
    "name": "Spirit of the Jungle",
    "image": "assets/images/factions/Spirit-of-the-Jungle.png",
    "eyeOfVortex": true,
    "mortalEmpires": true,
    playable: true,
    fromDlc: true,
    theHunterAndTheBeast: true,
    race: 'Lizardmen'
  },
  {
    "name": "Chevaliers de Lyonesse",
    "image": "assets/images/factions/Chevaliers-de-Lyonesse.png",
    "eyeOfVortex": true,
    "mortalEmpires": true,
    playable: true,
    lord: 'Repanse',
    fromDlc: true,
    race: 'Bretonnia'
  },
  {
    "name": "Knights of Origo",
    "image": "assets/images/factions/Knights-of-Origo.png",
    "eyeOfVortex": true,
    "mortalEmpires": false
  },
  {
    "name": "Knights of the Flame",
    "image": "assets/images/factions/Knights-of-the-Flame.png",
    "eyeOfVortex": true,
    "mortalEmpires": false
  },
  {
    "name": "Thegan's Errantry",
    "image": "assets/images/factions/Thegan's-Errantry.png",
    "eyeOfVortex": true,
    "mortalEmpires": false
  },
  {
    "name": "Blooded-Axe Tribe",
    "image": "assets/images/factions/Blooded-Axe-Tribe.png",
    "eyeOfVortex": true,
    "mortalEmpires": false
  },
  {
    "name": "Blooded-Axe Tribe Brayherd",
    "image": "assets/images/factions/Blooded-Axe-Tribe-Brayherd.png",
    "eyeOfVortex": true,
    "mortalEmpires": false
  },
  {
    "name": "Manblight Tribe",
    "image": "assets/images/factions/Manblight-Tribe.png",
    "eyeOfVortex": true,
    "mortalEmpires": false
  },
  {
    "name": "Manblight Tribe Brayherd",
    "image": "assets/images/factions/Manblight-Tribe-Brayherd.png",
    "eyeOfVortex": true,
    "mortalEmpires": false
  },
  {
    "name": "Ripper-Horn Tribe",
    "image": "assets/images/factions/Ripper-Horn-Tribe.png",
    "eyeOfVortex": true,
    "mortalEmpires": false
  },
  {
    "name": "Ripper-Horn Tribe Brayherd",
    "image": "assets/images/factions/Ripper-Horn-Tribe-Brayherd.png",
    "eyeOfVortex": true,
    "mortalEmpires": false
  },
  {
    "name": "Shadowgor Warherd",
    "image": "assets/images/factions/Shadowgor-Warherd.png",
    "eyeOfVortex": true,
    "mortalEmpires": false
  },
  {
    "name": "Shadowgor Brayherd",
    "image": "assets/images/factions/Shadowgor-Brayherd.png",
    "eyeOfVortex": true,
    "mortalEmpires": false
  },
  {
    "name": "Skrinderkin Warherd",
    "image": "assets/images/factions/Skrinderkin-Warherd.png",
    "eyeOfVortex": true,
    "mortalEmpires": false
  },
  {
    "name": "Skrinderkin Brayherd",
    "image": "assets/images/factions/Skrinderkin-Brayherd.png",
    "eyeOfVortex": true,
    "mortalEmpires": false
  },
  {
    "name": "Stone-Horn Tribe",
    "image": "assets/images/factions/Stone-Horn-Tribe.png",
    "eyeOfVortex": true,
    "mortalEmpires": false
  },
  {
    "name": "Stone-Horn Tribe Brayherd",
    "image": "assets/images/factions/Stone-Horn-Tribe-Brayherd.png",
    "eyeOfVortex": true,
    "mortalEmpires": false
  },
  {
    "name": "Servants to Chaos",
    "image": "assets/images/factions/Servants-to-Chaos.png",
    "eyeOfVortex": true,
    "mortalEmpires": false
  },
  {
    "name": "Puppets of Chaos",
    "image": "assets/images/factions/Puppets-of-Chaos.png",
    "eyeOfVortex": true,
    "mortalEmpires": false
  },
  {
    "name": "Vessels of Chaos",
    "image": "assets/images/factions/Vessels-of-Chaos.png",
    "eyeOfVortex": true,
    "mortalEmpires": false
  },
  {
    "name": "Followers of Chaos",
    "image": "assets/images/factions/Followers-of-Chaos.png",
    "eyeOfVortex": true,
    "mortalEmpires": false
  },
  {
    "name": "Naggarond",
    "image": "assets/images/factions/Naggarond.png",
    "eyeOfVortex": true,
    "mortalEmpires": true,
    playable: true,
    race: 'Dark Elves'
  },
  {
    "name": "Greybeard's Prospectors",
    "image": "assets/images/factions/Greybeard's-Prospectors.png",
    "eyeOfVortex": true,
    "mortalEmpires": false
  },
  {
    "name": "Karak Zorn",
    "image": "assets/images/factions/Karak-Zorn.png",
    "eyeOfVortex": true,
    "mortalEmpires": false
  },
  {
    "name": "Spine of Sotek Dwarfs",
    "image": "assets/images/factions/Spine-of-Sotek-Dwarfs.png",
    "eyeOfVortex": true,
    "mortalEmpires": false
  },
  {
    "name": "Avelorn",
    "image": "assets/images/factions/Avelorn.png",
    "eyeOfVortex": true,
    "mortalEmpires": false,
    fromDlc: true,
    theQueenAndTheCrone: true
  },
  {
    "name": "Caledor",
    "image": "assets/images/factions/Caledor.png",
    "eyeOfVortex": true,
    "mortalEmpires": false
  },
  {
    "name": "Chrace",
    "image": "assets/images/factions/Chrace.png",
    "eyeOfVortex": true,
    "mortalEmpires": false
  },
  {
    "name": "Citadel of Dusk",
    "image": "assets/images/factions/Citadel-of-Dusk.png",
    "eyeOfVortex": true,
    "mortalEmpires": false
  },
  {
    "name": "Cothique",
    "image": "assets/images/factions/Cothique.png",
    "eyeOfVortex": true,
    "mortalEmpires": false
  },
  {
    "name": "Ellyrion",
    "image": "assets/images/factions/Ellyrion.png",
    "eyeOfVortex": true,
    "mortalEmpires": false
  },
  {
    "name": "Fortress of Dawn",
    "image": "assets/images/factions/Fortress-of-Dawn.png",
    "eyeOfVortex": true,
    "mortalEmpires": false
  },
  {
    "name": "High Elves",
    "image": "assets/images/factions/High-Elves.png",
    "eyeOfVortex": true,
    "mortalEmpires": false
  },
  {
    "name": "High Elf Intervention",
    "image": "assets/images/factions/High-Elf-Intervention.png",
    "eyeOfVortex": true,
    "mortalEmpires": false
  },
  {
    "name": "Nagarythe",
    "image": "assets/images/factions/Nagarythe.png",
    "eyeOfVortex": true,
    "mortalEmpires": false,
    playable: true,
    race: 'High Elves'
  },
  {
    "name": "Saphery",
    "image": "assets/images/factions/Saphery.png",
    "eyeOfVortex": true,
    "mortalEmpires": false
  },
  {
    "name": "Tiranoc",
    "image": "assets/images/factions/Tiranoc.png",
    "eyeOfVortex": true,
    "mortalEmpires": false
  },
  {
    "name": "Tor Elasor",
    "image": "assets/images/factions/Tor-Elasor.png",
    "eyeOfVortex": true,
    "mortalEmpires": false
  },
  {
    "name": "Yvresse",
    "image": "assets/images/factions/Yvresse.png",
    "eyeOfVortex": true,
    "mortalEmpires": false
  },
  {
    "name": "High Elf Rebels",
    "image": "assets/images/factions/High-Elf-Rebels.png",
    "eyeOfVortex": true,
    "mortalEmpires": false
  },
  {
    "name": "Lothern",
    "image": "assets/images/factions/Lothern.png",
    "eyeOfVortex": true,
    "mortalEmpires": false,
    playable: true,
    race: 'High Elves'
  },
  {
    "name": "Order of Loremasters",
    "image": "assets/images/factions/Order-of-Loremasters.png",
    "eyeOfVortex": true,
    "mortalEmpires": false,
    playable: true,
    race: 'High Elves'
  },
  {
    "name": "Hexoatl",
    "image": "assets/images/factions/Hexoatl.png",
    "eyeOfVortex": true,
    "mortalEmpires": false,
    playable: true,
    race: 'Lizardmen'
  },
  {
    "name": "Aghol",
    "image": "assets/images/factions/Aghol.png",
    "eyeOfVortex": true,
    "mortalEmpires": false
  },
  {
    "name": "Warband of the Hound",
    "image": "assets/images/factions/Warband-of-the-Hound.png",
    "eyeOfVortex": true,
    "mortalEmpires": false
  },
  {
    "name": "Warband of the Eagle",
    "image": "assets/images/factions/Warband-of-the-Eagle.png",
    "eyeOfVortex": true,
    "mortalEmpires": false
  },
  {
    "name": "Warband of the Serpent",
    "image": "assets/images/factions/Warband-of-the-Serpent.png",
    "eyeOfVortex": true,
    "mortalEmpires": false
  },
  {
    "name": "Warband of the Crow",
    "image": "assets/images/factions/Warband-of-the-Crow.png",
    "eyeOfVortex": true,
    "mortalEmpires": false
  },
  {
    "name": "Mung",
    "image": "assets/images/factions/Mung.png",
    "eyeOfVortex": true,
    "mortalEmpires": false
  },
  {
    "name": "Skeggi",
    "image": "assets/images/factions/Skeggi.png",
    "eyeOfVortex": true,
    "mortalEmpires": false
  },
  {
    "name": "Clan Mors",
    "image": "assets/images/factions/Clan-Mors.png",
    "eyeOfVortex": true,
    "mortalEmpires": true,
    playable: true,
    race: 'Skaven'
  },
  {
    "name": "Clan Pestilens",
    "image": "assets/images/factions/Clan-Pestilens.png",
    "eyeOfVortex": true,
    "mortalEmpires": true,
    playable: true,
    race: 'Skaven'
  },
  {
    "name": "Bowmen of Oreon",
    "image": "assets/images/factions/Bowmen-of-Oreon.png",
    "eyeOfVortex": true,
    "mortalEmpires": false
  },
  {
    "name": "Tomb Kings",
    "image": "assets/images/factions/Tomb-Kings.png",
    "eyeOfVortex": true,
    "mortalEmpires": false
  },
  {
    "name": "Tomb Kings",
    "image": "assets/images/factions/Tomb-Kings.png",
    "eyeOfVortex": true,
    "mortalEmpires": false
  },
  {
    "name": "Tomb Kings",
    "image": "assets/images/factions/Tomb-Kings.png",
    "eyeOfVortex": true,
    "mortalEmpires": false
  },
  {
    "name": "Tomb Kings",
    "image": "assets/images/factions/Tomb-Kings.png",
    "eyeOfVortex": true,
    "mortalEmpires": false
  },
  {
    "name": "Tomb Kings",
    "image": "assets/images/factions/Tomb-Kings.png",
    "eyeOfVortex": true,
    "mortalEmpires": false
  },
  {
    "name": "Exiles of Nehek",
    "image": "assets/images/factions/Exiles-of-Nehek.png",
    "eyeOfVortex": true,
    "mortalEmpires": true,
    playable: true,
    fromDlc: true,
    tombKings: true,
    race: 'Tomb Kings'
  },
  {
    "name": "Followers of Nagash",
    "image": "assets/images/factions/Followers-of-Nagash.png",
    "eyeOfVortex": true,
    "mortalEmpires": true,
    playable: true,
    fromDlc: true,
    tombKings: true,
    race: 'Tomb Kings'
  },
  {
    "name": "Khemri",
    "image": "assets/images/factions/Khemri.png",
    "eyeOfVortex": true,
    "mortalEmpires": true,
    playable: true,
    fromDlc: true,
    tombKings: true,
    race: 'Tomb Kings'
  },
  {
    "name": "Court of Lybaras",
    "image": "assets/images/factions/Court-of-Lybaras.png",
    "eyeOfVortex": true,
    "mortalEmpires": true,
    playable: true,
    fromDlc: true,
    tombKings: true,
    race: 'Tomb Kings'
  },
  {
    "name": "Bretonnian Merchants",
    "image": "assets/images/factions/Bretonnian-Merchants.png",
    "eyeOfVortex": true,
    "mortalEmpires": false
  },
  {
    "name": "Rogue Pirates",
    "image": "assets/images/factions/Rogue-Pirates.png",
    "eyeOfVortex": true,
    "mortalEmpires": false
  },
  {
    "name": "Vampire Coast",
    "image": "assets/images/factions/Vampire-Coast.png",
    "eyeOfVortex": true,
    "mortalEmpires": false
  },
  {
    "name": "Vampire Coast",
    "image": "assets/images/factions/Vampire-Coast.png",
    "eyeOfVortex": true,
    "mortalEmpires": false
  },
  {
    "name": "Vampire Coast",
    "image": "assets/images/factions/Vampire-Coast.png",
    "eyeOfVortex": true,
    "mortalEmpires": false
  },
  {
    "name": "Vampire Coast",
    "image": "assets/images/factions/Vampire-Coast.png",
    "eyeOfVortex": true,
    "mortalEmpires": false
  },
  {
    "name": "Vampire Coast",
    "image": "assets/images/factions/Vampire-Coast.png",
    "eyeOfVortex": true,
    "mortalEmpires": false
  },
  {
    "name": "Vampire Coast Mutineers",
    "image": "assets/images/factions/Vampire-Coast-Mutineers.png",
    "eyeOfVortex": true,
    "mortalEmpires": false
  },
  {
    "name": "Dark Elf Slavers",
    "image": "assets/images/factions/Dark-Elf-Slavers.png",
    "eyeOfVortex": true,
    "mortalEmpires": false
  },
  {
    "name": "Exotic Goods Hauler",
    "image": "assets/images/factions/Exotic-Goods-Hauler.png",
    "eyeOfVortex": true,
    "mortalEmpires": false
  },
  {
    "name": "The Empire",
    "image": "assets/images/factions/The-Empire.png",
    "eyeOfVortex": true,
    "mortalEmpires": false
  },
  {
    "name": "Norscan Raiders",
    "image": "assets/images/factions/Norscan-Raiders.png",
    "eyeOfVortex": true,
    "mortalEmpires": false
  },
  {
    "name": "Skjold Raiders",
    "image": "assets/images/factions/Skjold-Raiders.png",
    "eyeOfVortex": true,
    "mortalEmpires": false
  },
  {
    "name": "Beastmen",
    "image": "assets/images/factions/Beastmen.png",
    "eyeOfVortex": true,
    "mortalEmpires": false
  },
  {
    "name": "Greenskins",
    "image": "assets/images/factions/Greenskins.png",
    "eyeOfVortex": true,
    "mortalEmpires": false
  },
  {
    "name": "Defenders of the Great Plan",
    "image": "assets/images/factions/Defenders-of-the-Great-Plan.png",
    "eyeOfVortex": true,
    "mortalEmpires": false
  },
  {
    "name": "Norsca",
    "image": "assets/images/factions/Norsca.png",
    "eyeOfVortex": true,
    "mortalEmpires": false
  },
  {
    "name": "Skaven",
    "image": "assets/images/factions/Skaven.png",
    "eyeOfVortex": true,
    "mortalEmpires": false
  },
  {
    "name": "Laurelorn Forest",
    "image": "assets/images/factions/Laurelorn-Forest.png",
    "eyeOfVortex": true,
    "mortalEmpires": false
  },
  {
    "name": "Dark Elves",
    "image": "assets/images/factions/Dark-Elves.png",
    "eyeOfVortex": true,
    "mortalEmpires": false
  },
  {
    "name": "Dark Elves",
    "image": "assets/images/factions/Dark-Elves.png",
    "eyeOfVortex": true,
    "mortalEmpires": false
  },
  {
    "name": "Dark Elves",
    "image": "assets/images/factions/Dark-Elves.png",
    "eyeOfVortex": true,
    "mortalEmpires": false
  },
  {
    "name": "Dark Elves",
    "image": "assets/images/factions/Dark-Elves.png",
    "eyeOfVortex": true,
    "mortalEmpires": false
  },
  {
    "name": "High Elves",
    "image": "assets/images/factions/High-Elves.png",
    "eyeOfVortex": true,
    "mortalEmpires": false
  },
  {
    "name": "High Elves",
    "image": "assets/images/factions/High-Elves.png",
    "eyeOfVortex": true,
    "mortalEmpires": false
  },
  {
    "name": "High Elves",
    "image": "assets/images/factions/High-Elves.png",
    "eyeOfVortex": true,
    "mortalEmpires": false
  },
  {
    "name": "High Elves",
    "image": "assets/images/factions/High-Elves.png",
    "eyeOfVortex": true,
    "mortalEmpires": false
  },
  {
    "name": "Lizardmen",
    "image": "assets/images/factions/Lizardmen.png",
    "eyeOfVortex": true,
    "mortalEmpires": false
  },
  {
    "name": "Lizardmen",
    "image": "assets/images/factions/Lizardmen.png",
    "eyeOfVortex": true,
    "mortalEmpires": false
  },
  {
    "name": "Lizardmen",
    "image": "assets/images/factions/Lizardmen.png",
    "eyeOfVortex": true,
    "mortalEmpires": false
  },
  {
    "name": "Lizardmen",
    "image": "assets/images/factions/Lizardmen.png",
    "eyeOfVortex": true,
    "mortalEmpires": false
  },
  {
    "name": "Doomseekers",
    "image": "assets/images/factions/Doomseekers.png",
    "eyeOfVortex": true,
    "mortalEmpires": false
  },
  {
    "name": "Gerhardt's Mercenaries",
    "image": "assets/images/factions/Gerhardt's-Mercenaries.png",
    "eyeOfVortex": true,
    "mortalEmpires": false
  },
  {
    "name": "Skaven",
    "image": "assets/images/factions/Skaven.png",
    "eyeOfVortex": true,
    "mortalEmpires": false
  },
  {
    "name": "Skaven",
    "image": "assets/images/factions/Skaven.png",
    "eyeOfVortex": true,
    "mortalEmpires": false
  },
  {
    "name": "Skaven",
    "image": "assets/images/factions/Skaven.png",
    "eyeOfVortex": true,
    "mortalEmpires": false
  },
  {
    "name": "Skaven",
    "image": "assets/images/factions/Skaven.png",
    "eyeOfVortex": true,
    "mortalEmpires": false
  },
  {
    "name": "Necrarch Brotherhood",
    "image": "assets/images/factions/Necrarch-Brotherhood.png",
    "eyeOfVortex": true,
    "mortalEmpires": false
  },
  {
    "name": "Strygos Empire",
    "image": "assets/images/factions/Strygos-Empire.png",
    "eyeOfVortex": true,
    "mortalEmpires": false
  },
  {
    "name": "The Silver Host",
    "image": "assets/images/factions/The-Silver-Host.png",
    "eyeOfVortex": true,
    "mortalEmpires": false
  },
  {
    "name": "The Awakened",
    "image": "assets/images/factions/The-Awakened.png",
    "eyeOfVortex": true,
    "mortalEmpires": false
  },
  {
    "name": "The Dreadfleet Separatists",
    "image": "assets/images/factions/The-Dreadfleet-Separatists.png",
    "eyeOfVortex": true,
    "mortalEmpires": false
  },
  {
    "name": "Pirates of Sartosa Separatists",
    "image": "assets/images/factions/Pirates-of-Sartosa-Separatists.png",
    "eyeOfVortex": true,
    "mortalEmpires": false
  },
  {
    "name": "The Drowned Separatists",
    "image": "assets/images/factions/The-Drowned-Separatists.png",
    "eyeOfVortex": true,
    "mortalEmpires": false
  },
  {
    "name": "Vampire Coast Separatists",
    "image": "assets/images/factions/Vampire-Coast-Separatists.png",
    "eyeOfVortex": true,
    "mortalEmpires": false
  },
  {
    "name": "The Blessed Dread Separatists",
    "image": "assets/images/factions/The-Blessed-Dread-Separatists.png",
    "eyeOfVortex": true,
    "mortalEmpires": false
  },
  {
    "name": "Cult of Pleasure Separatists",
    "image": "assets/images/factions/Cult-of-Pleasure-Separatists.png",
    "eyeOfVortex": true,
    "mortalEmpires": false
  },
  {
    "name": "Hag Graef Separatists",
    "image": "assets/images/factions/Hag-Graef-Separatists.png",
    "eyeOfVortex": true,
    "mortalEmpires": false
  },
  {
    "name": "Har Ganeth Separatists",
    "image": "assets/images/factions/Har-Ganeth-Separatists.png",
    "eyeOfVortex": true,
    "mortalEmpires": false
  },
  {
    "name": "Naggarond Separatists",
    "image": "assets/images/factions/Naggarond-Separatists.png",
    "eyeOfVortex": true,
    "mortalEmpires": false
  },
  {
    "name": "Mousillon (Mortal Empires)",
    "image": "assets/images/factions/Mousillon-(Mortal-Empires).png",
    "eyeOfVortex": false,
    "mortalEmpires": true
  },
  {
    "name": "Templehof (Mortal Empires)",
    "image": "assets/images/factions/Templehof-(Mortal-Empires).png",
    "eyeOfVortex": false,
    "mortalEmpires": true
  },
  {
    "name": "Von Carstein (Vlad)",
    "image": "assets/images/factions/Von-Carstein-(Mortal-Empires).png",
    "eyeOfVortex": false,
    "mortalEmpires": true,
    playable: true,
    lord: 'Vlad von Carstein',
    race: 'Vampire Counts'
  },
  {
    "name": "Von Carstein (Isabella)",
    "image": "assets/images/factions/Von-Carstein-(Mortal-Empires).png",
    "eyeOfVortex": false,
    "mortalEmpires": true,
    playable: true,
    lord: 'Isabella von Carstein',
    race: 'Vampire Counts'
  },
  {
    "name": "Sylvania (Mannfred)",
    "image": "assets/images/factions/Sylvania-(Mortal-Empires).png",
    "eyeOfVortex": false,
    "mortalEmpires": true,
    playable: true,
    lord: 'Mannfred von Carstein',
    race: 'Vampire Counts'
  },
  {
    "name": "Sylvania (Helman)",
    "image": "assets/images/factions/Sylvania-(Mortal-Empires).png",
    "eyeOfVortex": false,
    "mortalEmpires": true,
    playable: true,
    lord: 'Helman Ghorst',
    race: 'Vampire Counts'
  },
  {
    "name": "Waldenhof (Mortal Empires)",
    "image": "assets/images/factions/Waldenhof-(Mortal-Empires).png",
    "eyeOfVortex": false,
    "mortalEmpires": true
  },
  {
    "name": "Vampire Counts Rebels (Mortal Empires)",
    "image": "assets/images/factions/Vampire-Counts-Rebels-(Mortal-Empires).png",
    "eyeOfVortex": false,
    "mortalEmpires": true
  },
  {
    "name": "Black Venom (Mortal Empires)",
    "image": "assets/images/factions/Black-Venom-(Mortal-Empires).png",
    "eyeOfVortex": false,
    "mortalEmpires": true
  },
  {
    "name": "Black Venom Waaagh! (Mortal Empires)",
    "image": "assets/images/factions/Black-Venom-Waaagh!-(Mortal-Empires).png",
    "eyeOfVortex": false,
    "mortalEmpires": true
  },
  {
    "name": "Bloody Spearz (Mortal Empires)",
    "image": "assets/images/factions/Bloody-Spearz-(Mortal-Empires).png",
    "eyeOfVortex": false,
    "mortalEmpires": true
  },
  {
    "name": "Bloody Spearz Waaagh! (Mortal Empires)",
    "image": "assets/images/factions/Bloody-Spearz-Waaagh!-(Mortal-Empires).png",
    "eyeOfVortex": false,
    "mortalEmpires": true
  },
  {
    "name": "Broken Nose (Mortal Empires)",
    "image": "assets/images/factions/Broken-Nose-(Mortal-Empires).png",
    "eyeOfVortex": false,
    "mortalEmpires": true
  },
  {
    "name": "Broken Nose Waaagh! (Mortal Empires)",
    "image": "assets/images/factions/Broken-Nose-Waaagh!-(Mortal-Empires).png",
    "eyeOfVortex": false,
    "mortalEmpires": true
  },
  {
    "name": "Black Crag (Grimgor)",
    "image": "assets/images/factions/Black-Crag-(Mortal-Empires).png",
    "eyeOfVortex": false,
    "mortalEmpires": true,
    playable: true,
    lord: 'Grimgor',
    race: 'Greenskin Tribes'
  },
  {
    "name": "Black Crag (Azhag)",
    "image": "assets/images/factions/Black-Crag-(Mortal-Empires).png",
    "eyeOfVortex": false,
    "mortalEmpires": true,
    playable: true,
    lord: 'Azhag',
    race: 'Greenskin Tribes'
  },
  {
    "name": "Greenskin Waaagh! (Mortal Empires)",
    "image": "assets/images/factions/Greenskin-Waaagh!-(Mortal-Empires).png",
    "eyeOfVortex": false,
    "mortalEmpires": true
  },
  {
    "name": "Crooked Moon Mutinous Gits",
    "image": "assets/images/factions/Crooked-Moon-Mutinous-Gits-(Mortal-Empires).png",
    "eyeOfVortex": false,
    "mortalEmpires": true,
    playable: true,
    lord: 'Skarsnik',
    race: 'Greenskin Tribes'
  },
  {
    "name": "Crooked Moon Mutinous Gits Waaagh! (Mortal Empires)",
    "image": "assets/images/factions/Crooked-Moon-Mutinous-Gits-Waaagh!-(Mortal-Empires).png",
    "eyeOfVortex": false,
    "mortalEmpires": true
  },
  {
    "name": "Red Eye (Mortal Empires)",
    "image": "assets/images/factions/Red-Eye-(Mortal-Empires).png",
    "eyeOfVortex": false,
    "mortalEmpires": true
  },
  {
    "name": "Red Eye Waaagh! (Mortal Empires)",
    "image": "assets/images/factions/Red-Eye-Waaagh!-(Mortal-Empires).png",
    "eyeOfVortex": false,
    "mortalEmpires": true
  },
  {
    "name": "Red Fangs (Mortal Empires)",
    "image": "assets/images/factions/Red-Fangs-(Mortal-Empires).png",
    "eyeOfVortex": false,
    "mortalEmpires": true
  },
  {
    "name": "Red Fangs Waaagh! (Mortal Empires)",
    "image": "assets/images/factions/Red-Fangs-Waaagh!-(Mortal-Empires).png",
    "eyeOfVortex": false,
    "mortalEmpires": true
  },
  {
    "name": "Scabby Eye (Mortal Empires)",
    "image": "assets/images/factions/Scabby-Eye-(Mortal-Empires).png",
    "eyeOfVortex": false,
    "mortalEmpires": true
  },
  {
    "name": "Scabby Eye Waaagh! (Mortal Empires)",
    "image": "assets/images/factions/Scabby-Eye-Waaagh!-(Mortal-Empires).png",
    "eyeOfVortex": false,
    "mortalEmpires": true
  },
  {
    "name": "Skull-takerz (Mortal Empires)",
    "image": "assets/images/factions/Skull-takerz-(Mortal-Empires).png",
    "eyeOfVortex": false,
    "mortalEmpires": true
  },
  {
    "name": "Skull-takerz Waaagh! (Mortal Empires)",
    "image": "assets/images/factions/Skull-takerz-Waaagh!-(Mortal-Empires).png",
    "eyeOfVortex": false,
    "mortalEmpires": true
  },
  {
    "name": "Skullsmasherz (Mortal Empires)",
    "image": "assets/images/factions/Skullsmasherz-(Mortal-Empires).png",
    "eyeOfVortex": false,
    "mortalEmpires": true
  },
  {
    "name": "Skullsmasherz Waaagh! (Mortal Empires)",
    "image": "assets/images/factions/Skullsmasherz-Waaagh!-(Mortal-Empires).png",
    "eyeOfVortex": false,
    "mortalEmpires": true
  },
  {
    "name": "Teef Snatchaz (Mortal Empires)",
    "image": "assets/images/factions/Teef-Snatchaz-(Mortal-Empires).png",
    "eyeOfVortex": false,
    "mortalEmpires": true
  },
  {
    "name": "Teef Snatchaz Waaagh! (Mortal Empires)",
    "image": "assets/images/factions/Teef-Snatchaz-Waaagh!-(Mortal-Empires).png",
    "eyeOfVortex": false,
    "mortalEmpires": true
  },
  {
    "name": "Top Knotz (Mortal Empires)",
    "image": "assets/images/factions/Top-Knotz-(Mortal-Empires).png",
    "eyeOfVortex": false,
    "mortalEmpires": true
  },
  {
    "name": "Top Knotz Waaagh! (Mortal Empires)",
    "image": "assets/images/factions/Top-Knotz-Waaagh!-(Mortal-Empires).png",
    "eyeOfVortex": false,
    "mortalEmpires": true
  },
  {
    "name": "GreenSkins Rebels (Mortal Empires)",
    "image": "assets/images/factions/Greenskin-Waaagh!-(Mortal-Empires).png",
    "eyeOfVortex": false,
    "mortalEmpires": true
  },
  {
    "name": "GreenSkins Rebels Waaagh! (Mortal Empires)",
    "image": "assets/images/factions/Greenskin-Waaagh!-(Mortal-Empires).png",
    "eyeOfVortex": false,
    "mortalEmpires": true
  },
  {
    "name": "Averland (Mortal Empires)",
    "image": "assets/images/factions/Averland-(Mortal-Empires).png",
    "eyeOfVortex": false,
    "mortalEmpires": true
  },
  {
    "name": "Reikland (Karl Franz)",
    "image": "assets/images/factions/Reikland-(Mortal-Empires).png",
    "eyeOfVortex": false,
    "mortalEmpires": true,
    playable: true,
    lord: 'Karl Franz',
    race: 'The Empire'
  },
  {
    "name": "Reikland (Volkmar)",
    "image": "assets/images/factions/Reikland-(Mortal-Empires).png",
    "eyeOfVortex": false,
    "mortalEmpires": true,
    playable: true,
    lord: 'Volkmar',
    race: 'The Empire'
  },
  {
    "name": "Hochland (Mortal Empires)",
    "image": "assets/images/factions/Hochland-(Mortal-Empires).png",
    "eyeOfVortex": false,
    "mortalEmpires": true
  },
  {
    "name": "Marienburg (Mortal Empires)",
    "image": "assets/images/factions/Marienburg-(Mortal-Empires).png",
    "eyeOfVortex": false,
    "mortalEmpires": true
  },
  {
    "name": "Middenland (Mortal Empires)",
    "image": "assets/images/factions/Middenland-(Mortal-Empires).png",
    "eyeOfVortex": false,
    "mortalEmpires": true
  },
  {
    "name": "Nordland (Mortal Empires)",
    "image": "assets/images/factions/Nordland-(Mortal-Empires).png",
    "eyeOfVortex": false,
    "mortalEmpires": true
  },
  {
    "name": "Ostermark (Mortal Empires)",
    "image": "assets/images/factions/Ostermark-(Mortal-Empires).png",
    "eyeOfVortex": false,
    "mortalEmpires": true
  },
  {
    "name": "Ostland (Mortal Empires)",
    "image": "assets/images/factions/Ostland-(Mortal-Empires).png",
    "eyeOfVortex": false,
    "mortalEmpires": true
  },
  {
    "name": "Stirland (Mortal Empires)",
    "image": "assets/images/factions/Stirland-(Mortal-Empires).png",
    "eyeOfVortex": false,
    "mortalEmpires": true
  },
  {
    "name": "Talabecland (Mortal Empires)",
    "image": "assets/images/factions/Talabecland-(Mortal-Empires).png",
    "eyeOfVortex": false,
    "mortalEmpires": true
  },
  {
    "name": "Wissenland (Mortal Empires)",
    "image": "assets/images/factions/Wissenland-(Mortal-Empires).png",
    "eyeOfVortex": false,
    "mortalEmpires": true
  },
  {
    "name": "Empire Rebels (Mortal Empires)",
    "image": "assets/images/factions/Empire-Rebels-(Mortal-Empires).png",
    "eyeOfVortex": false,
    "mortalEmpires": true
  },
  {
    "name": "Marienburg Rebels (Mortal Empires)",
    "image": "assets/images/factions/Marienburg-Rebels-(Mortal-Empires).png",
    "eyeOfVortex": false,
    "mortalEmpires": true
  },
  {
    "name": "Empire Secessionists (Mortal Empires)",
    "image": "assets/images/factions/Empire-Secessionists-(Mortal-Empires).png",
    "eyeOfVortex": false,
    "mortalEmpires": true
  },
  {
    "name": "Artois (Mortal Empires)",
    "image": "assets/images/factions/Artois-(Mortal-Empires).png",
    "eyeOfVortex": false,
    "mortalEmpires": true
  },
  {
    "name": "Bastonne (Mortal Empires)",
    "image": "assets/images/factions/Bastonne-(Mortal-Empires).png",
    "eyeOfVortex": false,
    "mortalEmpires": true
  },
  {
    "name": "Bordeleaux",
    "image": "assets/images/factions/Bordeleaux-(Mortal-Empires).png",
    "eyeOfVortex": false,
    "mortalEmpires": true,
    playable: true,
    fromDlc: true,
    lord: 'Alberic',
    race: 'Bretonnia'
  },
  {
    "name": "Couronne",
    "image": "assets/images/factions/Couronne-(Mortal-Empires).png",
    "eyeOfVortex": false,
    "mortalEmpires": true,
    playable: true,
    fromDlc: true,
    lord: 'Louen Leoncoeur',
    race: 'Bretonnia'
  },
  {
    "name": "Carcassonne",
    "image": "assets/images/factions/Carcassonne-(Mortal-Empires).png",
    "eyeOfVortex": false,
    "mortalEmpires": true,
    playable: true,
    fromDlc: true,
    lord: 'Fay Enchantress',
    race: 'Bretonnia'
  },
  {
    "name": "Lyonesse (Mortal Empires)",
    "image": "assets/images/factions/Lyonesse-(Mortal-Empires).png",
    "eyeOfVortex": false,
    "mortalEmpires": true
  },
  {
    "name": "Parravon (Mortal Empires)",
    "image": "assets/images/factions/Parravon-(Mortal-Empires).png",
    "eyeOfVortex": false,
    "mortalEmpires": true
  },
  {
    "name": "Bretonnian Rebels (Mortal Empires)",
    "image": "assets/images/factions/Bretonnian-Rebels-(Mortal-Empires).png",
    "eyeOfVortex": false,
    "mortalEmpires": true
  },
  {
    "name": "Beastmen Brayherd (Mortal Empires)",
    "image": "assets/images/factions/Beastmen-Brayherd-(Mortal-Empires).png",
    "eyeOfVortex": false,
    "mortalEmpires": true
  },
  {
    "name": "Warherd of Chaos (Mortal Empires)",
    "image": "assets/images/factions/Warherd-of-Chaos-(Mortal-Empires).png",
    "eyeOfVortex": false,
    "mortalEmpires": true
  },
  {
    "name": "Brayherd of Chaos (Mortal Empires)",
    "image": "assets/images/factions/Brayherd-of-Chaos-(Mortal-Empires).png",
    "eyeOfVortex": false,
    "mortalEmpires": true
  },
  {
    "name": "Redhorn Tribe (Mortal Empires)",
    "image": "assets/images/factions/Redhorn-Tribe-(Mortal-Empires).png",
    "eyeOfVortex": false,
    "mortalEmpires": true
  },
  {
    "name": "Redhorn Tribe Brayherd (Mortal Empires)",
    "image": "assets/images/factions/Redhorn-Tribe-Brayherd-(Mortal-Empires).png",
    "eyeOfVortex": false,
    "mortalEmpires": true
  },
  {
    "name": "Beastmen Rebels (Mortal Empires)",
    "image": "assets/images/factions/Beastmen-Rebels-(Mortal-Empires).png",
    "eyeOfVortex": false,
    "mortalEmpires": true
  },
  {
    "name": "Challenger of the Hound (Mortal Empires)",
    "image": "assets/images/factions/Challenger-of-the-Hound-(Mortal-Empires).png",
    "eyeOfVortex": false,
    "mortalEmpires": true
  },
  {
    "name": "Challenger of the Crow (Mortal Empires)",
    "image": "assets/images/factions/Challenger-of-the-Crow-(Mortal-Empires).png",
    "eyeOfVortex": false,
    "mortalEmpires": true
  },
  {
    "name": "Challenger of the Serpent (Mortal Empires)",
    "image": "assets/images/factions/Challenger-of-the-Serpent-(Mortal-Empires).png",
    "eyeOfVortex": false,
    "mortalEmpires": true
  },
  {
    "name": "Challenger of the Eagle (Mortal Empires)",
    "image": "assets/images/factions/Challenger-of-the-Eagle-(Mortal-Empires).png",
    "eyeOfVortex": false,
    "mortalEmpires": true
  },
  {
    "name": "Warriors of Chaos (Archaon)",
    "image": "assets/images/factions/Warriors-of-Chaos-(Mortal-Empires).png",
    "eyeOfVortex": false,
    "mortalEmpires": true,
    playable: true,
    lord: 'Archaon',
    race: 'Chaos Warriors'
  },
  {
    "name": "Warriors of Chaos (Kholek)",
    "image": "assets/images/factions/Warriors-of-Chaos-(Mortal-Empires).png",
    "eyeOfVortex": false,
    "mortalEmpires": true,
    playable: true,
    lord: 'Kholek',
    race: 'Chaos Warriors'
  },
  {
    "name": "Warriors of Chaos (Sigvald)",
    "image": "assets/images/factions/Warriors-of-Chaos-(Mortal-Empires).png",
    "eyeOfVortex": false,
    "mortalEmpires": true,
    playable: true,
    lord: 'Sigvald',
    race: 'Chaos Warriors'
  },
  {
    "name": "Chaos Gathering (Mortal Empires)",
    "image": "assets/images/factions/Chaos-Gathering-(Mortal-Empires).png",
    "eyeOfVortex": false,
    "mortalEmpires": true
  },
  {
    "name": "Chaos Rebel Uprising (Mortal Empires)",
    "image": "assets/images/factions/Chaos-Rebel-Uprising-(Mortal-Empires).png",
    "eyeOfVortex": false,
    "mortalEmpires": true
  },
  {
    "name": "Barak Varr (Mortal Empires)",
    "image": "assets/images/factions/Barak-Varr-(Mortal-Empires).png",
    "eyeOfVortex": false,
    "mortalEmpires": true
  },
  {
    "name": "Karaz-a-Karak (Thorgrim)",
    "image": "assets/images/factions/Karaz-a-Karak-(Mortal-Empires).png",
    "eyeOfVortex": false,
    "mortalEmpires": true,
    playable: true,
    lord: 'Thorgrim',
    race: 'Dwarf Realms'
  },
  {
    "name": "Karaz-a-Karak (Grombrindal)",
    "image": "assets/images/factions/Karaz-a-Karak-(Mortal-Empires).png",
    "eyeOfVortex": false,
    "mortalEmpires": true,
    playable: true,
    lord: 'Grombrindal',
    fromDlc: true,
    race: 'Dwarf Realms'
  },
  {
    "name": "Karak Azul (Mortal Empires)",
    "image": "assets/images/factions/Karak-Azul-(Mortal-Empires).png",
    "eyeOfVortex": false,
    "mortalEmpires": true
  },
  {
    "name": "Karak Hirn (Mortal Empires)",
    "image": "assets/images/factions/Karak-Hirn-(Mortal-Empires).png",
    "eyeOfVortex": false,
    "mortalEmpires": true
  },
  {
    "name": "Karak Kadrin",
    "image": "assets/images/factions/Karak-Kadrin-(Mortal-Empires).png",
    "eyeOfVortex": false,
    "mortalEmpires": true,
    playable: true,
    lord: 'Ungrim',
    race: 'Dwarf Realms'
  },
  {
    "name": "Karak Norn (Mortal Empires)",
    "image": "assets/images/factions/Karak-Norn-(Mortal-Empires).png",
    "eyeOfVortex": false,
    "mortalEmpires": true
  },
  {
    "name": "Karak Ziflin (Mortal Empires)",
    "image": "assets/images/factions/Karak-Ziflin-(Mortal-Empires).png",
    "eyeOfVortex": false,
    "mortalEmpires": true
  },
  {
    "name": "Kraka Drak (Mortal Empires)",
    "image": "assets/images/factions/Kraka-Drak-(Mortal-Empires).png",
    "eyeOfVortex": false,
    "mortalEmpires": true
  },
  {
    "name": "Zhufbar (Mortal Empires)",
    "image": "assets/images/factions/Zhufbar-(Mortal-Empires).png",
    "eyeOfVortex": false,
    "mortalEmpires": true
  },
  {
    "name": "Dwarf Rebels (Mortal Empires)",
    "image": "assets/images/factions/Dwarf-Rebels-(Mortal-Empires).png",
    "eyeOfVortex": false,
    "mortalEmpires": true
  },
  {
    "name": "Goromadny Tribe (Mortal Empires)",
    "image": "assets/images/factions/Goromadny-Tribe-(Mortal-Empires).png",
    "eyeOfVortex": false,
    "mortalEmpires": true
  },
  {
    "name": "Helspire Tribe (Mortal Empires)",
    "image": "assets/images/factions/Helspire-Tribe-(Mortal-Empires).png",
    "eyeOfVortex": false,
    "mortalEmpires": true
  },
  {
    "name": "Naglfarlings (Mortal Empires)",
    "image": "assets/images/factions/Naglfarlings-(Mortal-Empires).png",
    "eyeOfVortex": false,
    "mortalEmpires": true
  },
  {
    "name": "World Walkers",
    "image": "assets/images/factions/World-Walkers-(Mortal-Empires).png",
    "eyeOfVortex": false,
    "mortalEmpires": true,
    playable: true,
    fromDlc: true,
    norsca: true,
    lord: 'Wulfrik',
    race: 'Norscan Tribes'
  },
  {
    "name": "Vanaheimlings (Mortal Empires)",
    "image": "assets/images/factions/Vanaheimlings-(Mortal-Empires).png",
    "eyeOfVortex": false,
    "mortalEmpires": true
  },
  {
    "name": "Wintertooth",
    "image": "assets/images/factions/Wintertooth-(Mortal-Empires).png",
    "eyeOfVortex": false,
    "mortalEmpires": true,
    playable: true,
    fromDlc: true,
    norsca: true,
    lord: 'Throgg',
    race: 'Norscan Tribes'
  },
  {
    "name": "Aesling (Mortal Empires)",
    "image": "assets/images/factions/Aesling-(Mortal-Empires).png",
    "eyeOfVortex": false,
    "mortalEmpires": true
  },
  {
    "name": "Baersonling (Mortal Empires)",
    "image": "assets/images/factions/Baersonling-(Mortal-Empires).png",
    "eyeOfVortex": false,
    "mortalEmpires": true
  },
  {
    "name": "Bjornling (Mortal Empires)",
    "image": "assets/images/factions/Bjornling-(Mortal-Empires).png",
    "eyeOfVortex": false,
    "mortalEmpires": true
  },
  {
    "name": "Graeling (Mortal Empires)",
    "image": "assets/images/factions/Graeling-(Mortal-Empires).png",
    "eyeOfVortex": false,
    "mortalEmpires": true
  },
  {
    "name": "Sarl (Mortal Empires)",
    "image": "assets/images/factions/Sarl-(Mortal-Empires).png",
    "eyeOfVortex": false,
    "mortalEmpires": true
  },
  {
    "name": "Skaeling (Mortal Empires)",
    "image": "assets/images/factions/Skaeling-(Mortal-Empires).png",
    "eyeOfVortex": false,
    "mortalEmpires": true
  },
  {
    "name": "Varg (Mortal Empires)",
    "image": "assets/images/factions/Varg-(Mortal-Empires).png",
    "eyeOfVortex": false,
    "mortalEmpires": true
  },
  {
    "name": "Norsca Rebels (Mortal Empires)",
    "image": "assets/images/factions/Norsca-Rebels-(Mortal-Empires).png",
    "eyeOfVortex": false,
    "mortalEmpires": true
  },
  {
    "name": "Argwylon",
    "image": "assets/images/factions/Argwylon-(Mortal-Empires).png",
    "eyeOfVortex": false,
    "mortalEmpires": true,
    playable: true,
    fromDlc: true,
    lord: 'Durthu',
    race: 'Wood Elves'
  },
  {
    "name": "Talsyn",
    "image": "assets/images/factions/Talsyn-(Mortal-Empires).png",
    "eyeOfVortex": false,
    "mortalEmpires": true,
    playable: true,
    fromDlc: true,
    lord: 'Orion',
    race: 'Wood Elves'
  },
  {
    "name": "Wood Elf Rebels (Mortal Empires)",
    "image": "assets/images/factions/Wood-Elf-Rebels-(Mortal-Empires).png",
    "eyeOfVortex": false,
    "mortalEmpires": true
  },
  {
    "name": "Clan Angrund",
    "image": "assets/images/factions/Clan-Angrund-(Mortal-Empires).png",
    "eyeOfVortex": false,
    "mortalEmpires": true,
    playable: true,
    lord: 'Belegar',
    race: 'Dwarf Realms'
  },
  {
    "name": "Crooked Moon (Mortal Empires)",
    "image": "assets/images/factions/Crooked-Moon-(Mortal-Empires).png",
    "eyeOfVortex": false,
    "mortalEmpires": true
  },
  {
    "name": "Crooked Moon Waaagh! (Mortal Empires)",
    "image": "assets/images/factions/Crooked-Moon-Waaagh!-(Mortal-Empires).png",
    "eyeOfVortex": false,
    "mortalEmpires": true
  },
  {
    "name": "The Bloody Handz",
    "image": "assets/images/factions/The-Bloody-Handz-(Mortal-Empires).png",
    "eyeOfVortex": false,
    "mortalEmpires": true,
    playable: true,
    lord: 'Wurrzag',
    race: 'Greenskin Tribes'
  },
  {
    "name": "The Bloody Handz Waaagh! (Mortal Empires)",
    "image": "assets/images/factions/The-Bloody-Handz-Waaagh!-(Mortal-Empires).png",
    "eyeOfVortex": false,
    "mortalEmpires": true
  },
  {
    "name": "Kislev (Mortal Empires)",
    "image": "assets/images/factions/Kislev-(Mortal-Empires).png",
    "eyeOfVortex": false,
    "mortalEmpires": true
  },
  {
    "name": "Kislev Rebels (Mortal Empires)",
    "image": "assets/images/factions/Kislev-Rebels-(Mortal-Empires).png",
    "eyeOfVortex": false,
    "mortalEmpires": true
  },
  {
    "name": "Border Princes (Mortal Empires)",
    "image": "assets/images/factions/Border-Princes-(Mortal-Empires).png",
    "eyeOfVortex": false,
    "mortalEmpires": true
  },
  {
    "name": "Estalia (Mortal Empires)",
    "image": "assets/images/factions/Estalia-(Mortal-Empires).png",
    "eyeOfVortex": false,
    "mortalEmpires": true
  },
  {
    "name": "Tilea (Mortal Empires)",
    "image": "assets/images/factions/Tilea-(Mortal-Empires).png",
    "eyeOfVortex": false,
    "mortalEmpires": true
  },
  {
    "name": "Border Princes Rebels (Mortal Empires)",
    "image": "assets/images/factions/Border-Princes-Rebels-(Mortal-Empires).png",
    "eyeOfVortex": false,
    "mortalEmpires": true
  },
  {
    "name": "Estalia Rebels (Mortal Empires)",
    "image": "assets/images/factions/Estalia-Rebels-(Mortal-Empires).png",
    "eyeOfVortex": false,
    "mortalEmpires": true
  },
  {
    "name": "Tilea Rebels (Mortal Empires)",
    "image": "assets/images/factions/Tilea-Rebels-(Mortal-Empires).png",
    "eyeOfVortex": false,
    "mortalEmpires": true
  },
  {
    "name": "Beastmen (Khazrak)",
    "image": "assets/images/factions/Beastmen-(Mortal-Empires).png",
    "eyeOfVortex": false,
    "mortalEmpires": true,
    playable: true,
    fromDlc: true,
    lord: 'Khazrak',
    race: 'Beastmen Warherds'
  },
  {
    "name": "Beastmen (Malagor)",
    "image": "assets/images/factions/Beastmen-(Mortal-Empires).png",
    "eyeOfVortex": false,
    "mortalEmpires": true,
    playable: true,
    fromDlc: true,
    lord: 'Malagor',
    race: 'Beastmen Warherds'
  },
  {
    "name": "Beastmen (Morghur)",
    "image": "assets/images/factions/Beastmen-(Mortal-Empires).png",
    "eyeOfVortex": false,
    "mortalEmpires": true,
    playable: true,
    fromDlc: true,
    lord: 'Morghur',
    race: 'Beastmen Warherds'
  },
  {
    "name": "Beastmen Rebels Brayherd (Mortal Empires)",
    "image": "assets/images/factions/Beastmen-Rebels-Brayherd-(Mortal-Empires).png",
    "eyeOfVortex": false,
    "mortalEmpires": true,
    race: 'Beastmen Warherds'
  },
  {
    "name": "Jagged-Horn Tribe (Mortal Empires)",
    "image": "assets/images/factions/Jagged-Horn-Tribe-(Mortal-Empires).png",
    "eyeOfVortex": false,
    "mortalEmpires": true
  },
  {
    "name": "Jagged-Horn Tribe Brayherd (Mortal Empires)",
    "image": "assets/images/factions/Jagged-Horn-Tribe-Brayherd-(Mortal-Empires).png",
    "eyeOfVortex": false,
    "mortalEmpires": true
  },
  {
    "name": "Warherd of the Shadowgave (Mortal Empires)",
    "image": "assets/images/factions/Warherd-of-the-Shadowgave-(Mortal-Empires).png",
    "eyeOfVortex": false,
    "mortalEmpires": true
  },
  {
    "name": "Torgovann (Mortal Empires)",
    "image": "assets/images/factions/Torgovann-(Mortal-Empires).png",
    "eyeOfVortex": false,
    "mortalEmpires": true
  },
  {
    "name": "Wood Elves (Mortal Empires)",
    "image": "assets/images/factions/Wood-Elves-(Mortal-Empires).png",
    "eyeOfVortex": false,
    "mortalEmpires": true
  },
  {
    "name": "Wood Elves (Mortal Empires)",
    "image": "assets/images/factions/Wood-Elves-(Mortal-Empires).png",
    "eyeOfVortex": false,
    "mortalEmpires": true
  },
  {
    "name": "Wood Elves (Mortal Empires)",
    "image": "assets/images/factions/Wood-Elves-(Mortal-Empires).png",
    "eyeOfVortex": false,
    "mortalEmpires": true
  },
  {
    "name": "Torgovann (Mortal Empires)",
    "image": "assets/images/factions/Torgovann-(Mortal-Empires).png",
    "eyeOfVortex": false,
    "mortalEmpires": true
  },
  {
    "name": "Wydrioth (Mortal Empires)",
    "image": "assets/images/factions/Wydrioth-(Mortal-Empires).png",
    "eyeOfVortex": false,
    "mortalEmpires": true
  },
  {
    "name": "Challenger of the Hound (Mortal Empires)",
    "image": "assets/images/factions/Challenger-of-the-Hound-(Mortal-Empires).png",
    "eyeOfVortex": false,
    "mortalEmpires": true
  },
  {
    "name": "Challenger of the Crow (Mortal Empires)",
    "image": "assets/images/factions/Challenger-of-the-Crow-(Mortal-Empires).png",
    "eyeOfVortex": false,
    "mortalEmpires": true
  },
  {
    "name": "Challenger of the Serpent (Mortal Empires)",
    "image": "assets/images/factions/Challenger-of-the-Serpent-(Mortal-Empires).png",
    "eyeOfVortex": false,
    "mortalEmpires": true
  },
  {
    "name": "Challenger of the Eagle (Mortal Empires)",
    "image": "assets/images/factions/Challenger-of-the-Eagle-(Mortal-Empires).png",
    "eyeOfVortex": false,
    "mortalEmpires": true
  },
  {
    "name": "Norsca (Mortal Empires)",
    "image": "assets/images/factions/Norsca-(Mortal-Empires).png",
    "eyeOfVortex": false,
    "mortalEmpires": true
  },
  {
    "name": "Bretonnia (Mortal Empires)",
    "image": "assets/images/factions/Bretonnia-(Mortal-Empires).png",
    "eyeOfVortex": false,
    "mortalEmpires": true
  },
  {
    "name": "Bretonnia (Mortal Empires)",
    "image": "assets/images/factions/Bretonnia-(Mortal-Empires).png",
    "eyeOfVortex": false,
    "mortalEmpires": true
  },
  {
    "name": "Bretonnia (Mortal Empires)",
    "image": "assets/images/factions/Bretonnia-(Mortal-Empires).png",
    "eyeOfVortex": false,
    "mortalEmpires": true
  },
  {
    "name": "Bretonnia (Mortal Empires)",
    "image": "assets/images/factions/Bretonnia-(Mortal-Empires).png",
    "eyeOfVortex": false,
    "mortalEmpires": true
  },
  {
    "name": "Chaos (Mortal Empires)",
    "image": "assets/images/factions/Chaos-(Mortal-Empires).png",
    "eyeOfVortex": false,
    "mortalEmpires": true
  },
  {
    "name": "Chaos (Mortal Empires)",
    "image": "assets/images/factions/Chaos-(Mortal-Empires).png",
    "eyeOfVortex": false,
    "mortalEmpires": true
  },
  {
    "name": "Chaos (Mortal Empires)",
    "image": "assets/images/factions/Chaos-(Mortal-Empires).png",
    "eyeOfVortex": false,
    "mortalEmpires": true
  },
  {
    "name": "Dwarfs (Mortal Empires)",
    "image": "assets/images/factions/Dwarfs-(Mortal-Empires).png",
    "eyeOfVortex": false,
    "mortalEmpires": true
  },
  {
    "name": "Dwarfs (Mortal Empires)",
    "image": "assets/images/factions/Dwarfs-(Mortal-Empires).png",
    "eyeOfVortex": false,
    "mortalEmpires": true
  },
  {
    "name": "Dwarfs (Mortal Empires)",
    "image": "assets/images/factions/Dwarfs-(Mortal-Empires).png",
    "eyeOfVortex": false,
    "mortalEmpires": true
  },
  {
    "name": "Dwarfs (Mortal Empires)",
    "image": "assets/images/factions/Dwarfs-(Mortal-Empires).png",
    "eyeOfVortex": false,
    "mortalEmpires": true
  },
  {
    "name": "Dwarfs (Mortal Empires)",
    "image": "assets/images/factions/Dwarfs-(Mortal-Empires).png",
    "eyeOfVortex": false,
    "mortalEmpires": true
  },
  {
    "name": "Dwarfs (Mortal Empires)",
    "image": "assets/images/factions/Dwarfs-(Mortal-Empires).png",
    "eyeOfVortex": false,
    "mortalEmpires": true
  },
  {
    "name": "Dwarfs (Mortal Empires)",
    "image": "assets/images/factions/Dwarfs-(Mortal-Empires).png",
    "eyeOfVortex": false,
    "mortalEmpires": true
  },
  {
    "name": "Dwarfs (Mortal Empires)",
    "image": "assets/images/factions/Dwarfs-(Mortal-Empires).png",
    "eyeOfVortex": false,
    "mortalEmpires": true
  },
  {
    "name": "Dwarfs (Mortal Empires)",
    "image": "assets/images/factions/Dwarfs-(Mortal-Empires).png",
    "eyeOfVortex": false,
    "mortalEmpires": true
  },
  {
    "name": "The Empire (Mortal Empires)",
    "image": "assets/images/factions/The-Empire-(Mortal-Empires).png",
    "eyeOfVortex": false,
    "mortalEmpires": true
  },
  {
    "name": "The Empire (Mortal Empires)",
    "image": "assets/images/factions/The-Empire-(Mortal-Empires).png",
    "eyeOfVortex": false,
    "mortalEmpires": true
  },
  {
    "name": "The Empire (Mortal Empires)",
    "image": "assets/images/factions/The-Empire-(Mortal-Empires).png",
    "eyeOfVortex": false,
    "mortalEmpires": true
  },
  {
    "name": "The Empire (Mortal Empires)",
    "image": "assets/images/factions/The-Empire-(Mortal-Empires).png",
    "eyeOfVortex": false,
    "mortalEmpires": true
  },
  {
    "name": "The Empire (Mortal Empires)",
    "image": "assets/images/factions/The-Empire-(Mortal-Empires).png",
    "eyeOfVortex": false,
    "mortalEmpires": true
  },
  {
    "name": "The Empire (Mortal Empires)",
    "image": "assets/images/factions/The-Empire-(Mortal-Empires).png",
    "eyeOfVortex": false,
    "mortalEmpires": true
  },
  {
    "name": "Empire Secessionists (Mortal Empires)",
    "image": "assets/images/factions/Empire-Secessionists-(Mortal-Empires).png",
    "eyeOfVortex": false,
    "mortalEmpires": true
  },
  {
    "name": "Greenskins (Mortal Empires)",
    "image": "assets/images/factions/Greenskins-(Mortal-Empires).png",
    "eyeOfVortex": false,
    "mortalEmpires": true
  },
  {
    "name": "Greenskins (Mortal Empires)",
    "image": "assets/images/factions/Greenskins-(Mortal-Empires).png",
    "eyeOfVortex": false,
    "mortalEmpires": true
  },
  {
    "name": "Greenskins (Mortal Empires)",
    "image": "assets/images/factions/Greenskins-(Mortal-Empires).png",
    "eyeOfVortex": false,
    "mortalEmpires": true
  },
  {
    "name": "Greenskins (Mortal Empires)",
    "image": "assets/images/factions/Greenskins-(Mortal-Empires).png",
    "eyeOfVortex": false,
    "mortalEmpires": true
  },
  {
    "name": "Greenskins (Mortal Empires)",
    "image": "assets/images/factions/Greenskins-(Mortal-Empires).png",
    "eyeOfVortex": false,
    "mortalEmpires": true
  },
  {
    "name": "Norsca (Mortal Empires)",
    "image": "assets/images/factions/Norsca-(Mortal-Empires).png",
    "eyeOfVortex": false,
    "mortalEmpires": true
  },
  {
    "name": "Norsca (Mortal Empires)",
    "image": "assets/images/factions/Norsca-(Mortal-Empires).png",
    "eyeOfVortex": false,
    "mortalEmpires": true
  },
  {
    "name": "Norsca (Mortal Empires)",
    "image": "assets/images/factions/Norsca-(Mortal-Empires).png",
    "eyeOfVortex": false,
    "mortalEmpires": true
  },
  {
    "name": "Rival Norse Tribe (Mortal Empires)",
    "image": "assets/images/factions/Rival-Norse-Tribe-(Mortal-Empires).png",
    "eyeOfVortex": false,
    "mortalEmpires": true
  },
  {
    "name": "Rival Norse Tribe (Mortal Empires)",
    "image": "assets/images/factions/Rival-Norse-Tribe-(Mortal-Empires).png",
    "eyeOfVortex": false,
    "mortalEmpires": true
  },
  {
    "name": "Vampire Counts (Mortal Empires)",
    "image": "assets/images/factions/Vampire-Counts-(Mortal-Empires).png",
    "eyeOfVortex": false,
    "mortalEmpires": true
  },
  {
    "name": "Vampire Counts (Mortal Empires)",
    "image": "assets/images/factions/Vampire-Counts-(Mortal-Empires).png",
    "eyeOfVortex": false,
    "mortalEmpires": true
  }
].map((item, index) => ({ ...item, id: index }))
