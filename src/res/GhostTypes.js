export default [
    {
        name: "Spirit",
        strengths: "Nothing",
        weaknesses: "Smudge Sticks",
        evidence: [1, 2, 4],
        description: `A Spirit is the most common Ghost you will come across, however it is still very powerful and dangerous. 
        They are usually discovered at one of their hunting grounds after an unexplained death`,
        tips: [
            "Will stop attacking after smudging for 180s instead of the normal 90s"
        ]
    },
    {
        name: "Wraith",
        strengths: "Wraiths almost never touch the ground meaning it can't be tracked by footsteps",
        weaknesses: "Salt",
        evidence: [1, 2, 5],
        description: `A Wraith is one of the most dangerous Ghosts you will find. 
        It is also the only known ghost that has the ability of flight and has sometimes been known to travel through walls.`,
        tips: [
            "Leaves no UV-footprints after touching salt and also no camera 'footsteps'",
            "Touching salt will increase ghost activity permanently",
            "Occasionally teleports to a random player on map"
        ]
    },
    {
        name: "Phantom",
        strengths: "Looking at a Phantom will considerably drop your sanity.",
        weaknesses: "Taking Photos",
        evidence: [0, 3, 5],
        description: `A Phantom is a Ghost that can possess the living, most commonly summoned by a Ouija Board. 
        It also induces fear into those around it.`,
        tips: [
            "Disappearance when making a photo will not affect hunt (also removes sanity drain effect)",
            "Visible every 1-2 seconds during hunt (0.3-1 seconds for all other ghost types)",
            "Occasionally wanders to a random player on the map (increased chance with Ouija board)"
        ]
    },
    {
        name: "Poltergeist",
        strengths: "A Poltergeist can throw a huge amount of objects at once.",
        weaknesses: "Empty Room",
        evidence: [1, 2, 3],
        description: `A Phantom is a Ghost that can possess the living, most commonly summoned by a Ouija Board. 
        It also induces fear into those around it.`,
        tips: [
            "Sanity drop when player had line of sight of the thrown objects (double the number of the objects that were thrown is being drained)"
        ]
    },
    {
        name: "Banshee",
        strengths: "Only target one person at a time.",
        weaknesses: "Crucifix",
        evidence: [0, 2, 5],
        description: `A Banshee is a natural hunter and will attack anything. 
        It has been known to stalk it's prety one at a time until making it's kill.`,
        tips: [
            "Crucifix range effect increased to 5m instead of 3m (less activity, stops hunts)",
            "Can attack above 50 sanity only with rare ghost power",
            "Moves to player and starts hunt when in line of sight within 20s",
            "Hunts all other players when target not in house"
        ]
    },
    {
        name: "Jinn",
        strengths: "Travel at a faster speed if it's victim is far away.",
        weaknesses: "Turn Off Power Source",
        evidence: [0, 1, 3],
        description: `A Jinn is a territorial Ghost that will attack when threatened. 
        It has also been known to be able to travel at significant speed.`,
        tips: [
            "25% sanity drop when within 3m (only happens by chance)",
            "Moves faster when hunting and player is in line of sight with fuse box on, slows down 4m before the player",
            "Normal speed when fuse box off"
        ]
    },
    {
        name: "Mare",
        strengths: "Increased chance to attack in the dark.",
        weaknesses: "Turn On Lights",
        evidence: [1, 3, 5],
        description: `A Mare is the source of all nightmares, making it most powerful in the dark.`,
        tips: [
            "Hunts at 60% sanity when lights are off, 40% when lights are on"
        ]
    },
    {
        name: "Revenant",
        strengths: "Doubles speed when hunting it's victim.",
        weaknesses: "Hiding",
        evidence: [0, 2, 4],
        description: `A Revenant is a slow but violent Ghost that will attack indiscriminately. 
        It has been rumoured to travel at a significantly hight speed when hunting.`,
        tips: [
            "Twice as fast as all other ghosts when in line of sight",
            "Smudge sticks during hunt will halt them for 5 seconds (works for every ghost but it's most useful for this one)",
            "1.5 times slower than any other ghost when no target in line of sight"
        ]
    },
    {
        name: "Shade",
        strengths: "Harder to find.",
        weaknesses: "Will not enter hunting mode if multiple people are nearby.",
        evidence: [0, 3, 4],
        description: `A Shade is known to be a Shy Ghost. 
        There is evidence that a Shade will stop all paranormal activity if there are multiple people nearby.`,
        tips: [
            "Drop sanity to 0% and get 2 people into the ghost room, if it doesn't hunt anymore it's a shade"
        ]
    },
    {
        name: "Demon",
        strengths: "Will attack more often than other Ghost types.",
        weaknesses: "Successful questions on the Ouija Board won't lower the users sanity.",
        evidence: [1, 4, 5],
        description: `A Demon is one of the worst Ghosts you can encounter. 
        It has been known to attack without reason.`,
        tips: [
            "Starts hunting at 65% sanity",
            "Will have no sanity drop for successful Ouija board questions"
        ]
    },
    {
        name: "Yurei",
        strengths: "Drains sanity faster.",
        weaknesses: "Smudging it's room will cause it to not wander around the location for a long time.",
        evidence: [3, 4, 5],
        description: `A Yurei is a Ghost that has returned to the physical worls, usually for the purpose of revenge or hatred.`,
        tips: [
            "0.4% per second (instead of 0.2%) sanity drain when ghost is visible/hunting and player is within 10m",
            "Rule out every other Freezing ghost before you pick Yurei"
        ]
    },
    {
        name: "Oni",
        strengths: "More active when people are nearby and have been seen moving objects at great speed.",
        weaknesses: "Being more active will make the Oni easier to find.",
        evidence: [0, 1, 4],
        description: `A Yurei is a Ghost that has returned to the physical worls, usually for the purpose of revenge or hatred.`,
        tips: [
            "More active when multiple people in room, makes it easier to get activity and evidence",
            "Rule out every other non-freezing ghost before you pick Oni"
        ]
    }
];