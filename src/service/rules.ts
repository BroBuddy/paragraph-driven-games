export const Rules = [
    {
        id: 'R201',
        title: 'Characters',
        content:
            '<p>Each character in the game has three ratings: Marksmanship (“M”), Hand-to-Hand fighting (“H”), and Endurance (“E”). Each is rated numerically, with higher numbers superior. Characters may also have skills, such as pilot/navigator, gunner, medic, driver, etc. Characters may possess certain items of equipment, whose quality depends on the “Tech Code” (technology level), or other items of worth, whose value depends on where they are bought and sold.</p>' +
            '<p>The characters include yourself, the Star Smuggler Duke Springer (see R201B), any followers in your crew or party, and any other characters, creatures, or robots encountered during the game. Characters can be friendly or hostile, intelligent or unintelligent.</p>' +
            '<p>When a character joins your party, note his (or her) vital statistics as needed. You can voluntarily dismiss or abandon members of your party if you wish (sometimes expedient when making an escape, or if money or equipment runs short). Dismissal or abandonment may have penalties to you (R220B). Characters encountered who don’t join your party can be ignored after the event, they simply go on their way, and “disappear” from the game.</p>' +
            '<p>To determine your own personal characteristics at the start of the game, see R201B.</p>',
    },
    {
        id: 'R201A',
        title: 'Characteristics and Skills',
        content:
            '<p>Marksmanship measures your ability to fire all ranged weapons (sidearms, skimmer guns, etc.) except starship guns (which require a special skill instead). The higher your rating, the better you shoot. Ratings range from 0 to 6, if none is given, assume a 0 rating. See R230D for rules on firing ranged weapons.</p>' +
            '<p>Hand-to-hand measures your ability in close combat. The higher your rating, the better. Ratings range from 0 to 6. This hand-to-hand rating also determines defense against such attacks, see R230G for details.</p>' +
            '<p>Endurance value is a measure of how much damage you can take in combat, and still survive. See R231 for detailed rules about wounds.</p>',
    },
    {
        id: 'R201B',
        title: 'Your Character — Duke Springer',
        content:
            '<p>You begin play as the star smuggler, Duke Springer, a talented and experienced starship pilot who is having trouble being successful in legal commercial enterprises. You have a starship (Antelope-class), a speedy and versatile small merchant vessel that can be operated by just one person, a pilot-navigator like yourself. In addition, you are a qualified starship gunner (can operate the guns of your ship), but the guns are only Tech Code 1 (low quality).</p>' +
            '<p>You are an excellent shot with smaller weapons, with a marksmanship of 5. After a rough-and-tumble life in many spaceports, bars, and back alleys your hand-to-hand combat is even better, with a rating of 6. Coming from a high-gravity home planet, and because of your life, your body is in excellent condition, your endurance value is 10.</p>' +
            '<p>In addition to these characteristics, you have a Cunning rating (R202) which other characters do not. See E001 for complete details of your possessions at the start of the game.</p>',
    },
    {
        id: 'R202',
        title: 'Cunning',
        content:
            '<p>Cunning is an ability that combines smooth talking, staying cool, thinking fast in an emergency, rapidly figuring alternatives when a plan is blocked, and generally outsmarting your adversaries. Duke Springer is the only character with a Cunning rating.</p>' +
            '<p>The first time you play, roll 1d6 (one die) to obtain your rating. If you have played before, you can adjust your Cunning by one in each subsequent game. If you found the game too difficult, or if you lost, increase your Cunning by one (+1). If you wish more challenge, or if you won, reduce your Cunning by one (-1). When you feel you have become an expert, try playing with a Cunning rating of 0!</p>' +
            '<p>When an event calls for a “Cunning roll,” you roll one die and must get less than or equal to your Cunning rating to succeed, unless some other requirement is indicated.</p>',
    },
    {
        id: 'R203',
        title: 'Daily Actions',
        content:
            '<p>At the start of each day, you either perform normal travel and contact, or stay in place for RRR (Rest, Recuperation and Repair). At the end of each day, you must check for breakdowns of equipment, and after each 10-day week, make payments on your loan. Each is explained in detail below.</p>' +
            '<p>Time: each day has ten (10) hours for activity. All events are timed in hours, or sometimes take the rest of the day. If an event goes over the normal limit, you automatically get extra hours that day to finish it (an event will not carry over to the next day). Any other people in your party either travel with you, or stay behind doing little (see R220 for details).</p>',
    },
    {
        id: 'R203A',
        title: 'Travel',
        content:
            '<p>During a normal day of travel and contact, you may travel about the land area (R204G). You have the following travel options, provided the vehicle is present and available:</p>' +
            '<p>Walk on foot: travel one land step per day, or spend an hour to move to an adjacent (connected by triple line) area<br />' +
            'Hire a commercial land vehicle: one hour per land step, see R215.<br />' +
            'Drive a skimmer: if you own one, one hour per step, see R215.<br />' +
            'Fly the Ship’s Boat: 1/10 hour per step, 1 hour to go to or from orbit/space station, see R214 for details.<br />' +
            'Take the Orbital Shuttle: 1 hour to or from space station or spaceport, see R215 for details.<br />' +
            'Pilot Starship: 1/10 hour per step, 1 hour to or from orbit/space station, can also travel between planets (R212F-g) and between star systems (R212A-d).</p>' +
            '<p>When you travel, each new area entered requires a check for detection, with an entry event if detection occurs, see R225 for complete rules. You can travel more than once per day, provided you have sufficient hours left for the next travel, and you have sufficient fuel (R211) and life support (R213) where necessary. You may alternate travel and contact activities in the same day, provided sufficient time remains.</p>',
    },
    {
        id: 'R203B',
        title: 'Contact',
        content:
            '<p>During a day of travel and contact, you may attempt to make contacts. See R227 for details and procedure. Basically, in a contact try you consult the Entry & Contact Table (R233) for the result, so it may take many attempts before you find what you are seeking (i.e., get the desired result).</p>',
    },
    {
        id: 'R203C',
        title: 'Rest, Recuperation & Repair',
        content:
            '<p>This action is allowed only if you spend a full day (all 10 hours) doing it. No travel and no contact is allowed during an RRR day.</p>' +
            '<p>At the start of an RRR day, first determine if an unwanted contact occurs (see R227A). If nothing happens, you can spend the day repairing equipment (R219) or healing (R231). A character cannot heal and repair at the same time, but some in your party could be healing while others are involved in repair work. If a repairman or mobile repairman is needed, you must have already arranged to have him (or it) present during the RRR day — searching for repairmen is not part of RRR.</p>',
    },
    {
        id: 'R203D',
        title: 'Breakdown',
        content:
            '<p>At the end of each day, any vehicle or piece of equipment you used may break down. Consult R218 for details. Preventive maintenance (R218B) avoids the danger of breakdown.</p>' +
            '<p>Breakdown need not be checked for vehicles that didn’t move (even if providing life support and/or communications), or for starships and boats in orbit or docked at a space station. Breakdown of individual items (such as weapons) is separate from any vehicle carrying them, or any other device.</p>',
    },
    {
        id: 'R203E',
        title: 'Loan Payments',
        content:
            '<p>At the end of each 10-day week, a loan payment is due on your Antelope-class starship. The ship originally cost 120,000 Secs (Sector Exchange Units, the “money” used here, see R232A), and your loan for this amount is 300 S interest due each 10-day week.</p>' +
            '<p>In addition to interest, you can also pay back any part of the principal (the original 120,000 S) as well. Interest payments do not reduce the principal, and even if you pay some of the principal, interest continues at 300 S per 10-day until the full principal is paid.</p>' +
            '<p>If you default on your loan (fail to pay interest) you have 30 days (three 10-day weeks) to pay the entire principal, after which the loan company begins attempts to repossess the ship (and appropriate events begin occurring!). Once you miss a payment, you can’t make up with just that payment — the whole loan becomes due (the loan company are “sharks” — who else would loan you so much?).</p>' +
            '<p>Incidentally, half the principal (60,000 S) is due ten years hence, and the rest of the principal (another 60,000 S) is due twenty years hence, but it’s unlikely you’ll play long enough to worry about this!</p>' +
            '<p>Using banks to hold some of your money, you can have loan payments made from your account (in case you aren’t around a place with banks when the week is up). See R232A for details.</p>',
    },
    {
        id: 'R203f',
        title: 'Victory & Defeat',
        content:
            '<p>An overwhelming victory in this game is paying off your entire spaceship loan of 120,000 S, and have a substantial fortune left for high living (how much left determines the degree of victory — you can keep on looking for more endlessly!).</p>' +
            '<p>However, staying alive and in possession of your spaceship for as long as possible is the real key to success. “Duke” Springer likes the freedom of the spaceways. Losing his ship or his personal freedom is a fate almost worse than death. Of course, even if you are imprisoned, or trapped in a stasis box, you can still hope to keep enough wealth to buy a ship, or otherwise get back into the star faring life again.</p>' +
            '<p>The only true defeat in the game is death. Actually, the process of playing the game is designed to be sufficient enjoyment unto itself – how well can you survive as a rough-and-tumble freebooting captain of the spaceways?</p>',
    },
    {
        id: 'R204',
        title: 'Maps & Classifications',
        content:
            '<p>Star Smuggler is set in the Pavonis Sector, a distant star region with ten inhabited star systems. Various classifications and codes are used for each system, and a unique mapping system for the various planets. The standard description of the sector is in R207, but variants and modifications are possible (R208 & R209).</p>',
    },
    {
        id: 'R204A',
        title: 'System Characteristics',
        content:
            '<p>Each star system has a wealth code, a technology (tech) code, and one or more planets, perhaps with a separate asteroid belt as well. Planets have varying tile layouts, gravity, atmosphere.</p>',
    },
    {
        id: 'R204B',
        title: 'Wealth Code',
        content:
            '<p>This code ranges from 0 to 100, and represents the general level of wealth and economic strength of the system. Generally, in wealthy systems things cost more, while in poorer systems things cost less. However, a high wealth code system could still have numerous slums, with many discontents dwelling in utter poverty. Costs for goods and services will vary with the wealth code; often a cost multiplier is used after consulting the base price table (R241).</p>',
    },
    {
        id: 'R204C',
        title: 'Tech Code',
        content:
            '<p>This code ranges from 0 to 100, and represents the sophistication of equipment in use. Although all equipment is futuristic, high tech items work better, and are more powerful, than lower tech, but tend to break down more often. Often high tech items bring good prices on low tech worlds, although it may be illegal to introduce such equipment for sale on certain worlds. Technology has important effects on weaponry (R216) and on breakdown (R218).</p>',
    },
    {
        id: 'R204D',
        title: 'Planetary Characteristics',
        content:
            '<p>Within each system, each planet has various characteristics. This includes the two map tiles used to form the planet, its gravity, and atmosphere. All planets within a star system have the same political structure, and are in constant communication. Travel in orbits, or from one planet to another (within the system) is not normally regulated or supervised carefully — planetary governments concentrate their interest on ships arriving from hyperspace, and at the various spaceports and stations.</p>',
    },
    {
        id: 'R204E',
        title: 'Gravity',
        content:
            '<p>The gravity factor of a planet varies from 1 to 16, the higher number indicating a stronger pull. A gravity of 10 or more prevents a ship’s boat from climbing to orbit (it lacks sufficient fuel and power), although the boat could descend from orbit, or move about on the surface. Asteroids and space stations have a gravity factor of 0, as do ships in orbit, although spin and small accelerations, or the minor mass of the asteroid, provide a light gravity effect on people and items.</p>',
    },
    {
        id: 'R204F',
        title: 'Atmosphere',
        content:
            '<p>A planet’s atmosphere is rated as “good,” “bad” or “no” air. Regardless of planet atmosphere, land areas with white letters as their title all have good air (on bad or no air planets, they have domes or force screens). In bad or no air (black labeled areas on planets of that type) you need life support to survive (R213). In bad air, normal skimmers will not function — their air-breathing engines automatically and instantly break down. A skimmer purchased on a bad air world will work on that world (due to special engine modifications), but won’t work on any other bad air world, nor on a world with good air. No skimmer can function in “no air.” No air also prevents starships and ship’s boat from making a powerless glide landing; instead, a powered landing is needed (which uses fuel).</p>',
    },
    {
        id: 'R204G',
        title: 'Land Areas',
        content:
            '<p>Each planet is composed of two map tiles, joined in a circular shape. The planet has various colored symbols on it, each symbol is a “land area.” Each symbol has a name indicating its type, and additional codes for special facilities:</p>' +
            '<p><strong>Symbol Colors denote entrance restrictions:</strong><br />' +
            'White areas can be entered by any type of travel.<br />' +
            'Yellow areas cannot be entered by a starship or ship’s boat, but any other form of travel is allowed.<br />' +
            'Red areas can only be entered on foot or in a commercial vehicle, no other form of travel is allowed.<br />' +
            'Purple areas only by starship, ship’s boat, or orbital shuttle.</p>' +
            '<p><strong>Area Names in white</strong> denote good air within the area, <strong>area names in black</strong> denote normal planetary air (which may be good, bad or none).<br />' +
            '<code>[b]</code> after the name indicates banking facilities are present (see R232A).<br />' +
            '<code>[m]</code> after the name indicates medical facilities present (R231C).</p>' +
            '<p><strong>Area Connectors</strong> are lines that indicate travel routes. You move from area to area along these lines:<br />' +
            'Short triple-line connector indicates one hour of travel time, regardless of the means used, to move to the other area. This symbol really indicates that the areas are touching, and thus if both have good air in them, travel is possible between without life support, even on a bad or no air planet.<br />' +
            'Long single line connectors with a number indicate a larger distance. The number is the distance in “land steps” between areas. See travel rules (R203A) for time needed to traverse a land step.</p>',
    },
    {
        id: 'R205',
        title: 'Area Types',
        content:
            '<p>There are sixteen different types of areas on planets, each with a different map tile symbol. Sometimes a contact try (R227) will reference one of the paragraphs below, which simply means you roll 2d6 dice to determine which occurs. When you get this result, you may keep rolling (spending the appropriate number of hours for each roll, as indicated) as long as you like, including to the next day and beyond. Some results indicate “no more rolls” which means a new contract try and the appropriate paragraph reference is needed to start again.</p>' +
            '<p>Once you finish with the roll(s) in the appropriate paragraph below, and do anything else, you cannot return to that paragraph unless a new contact try (R227) again results in that paragraph. This system may seem peculiar, but it represents the difficulty of dealing with local directories, languages, communication problems, and the fact that the items or services you desire may be rare, already “booked up” for a period, etc.</p>',
    },
    {
        id: 'R205A',
        title: 'City',
        content:
            '<p>An extensive built-up area with a large population. There are many opportunities to buy and sell items. Banking and medical centers are present. Each roll takes one hour, roll two dice (2d6):</p>' +
            '<ul><li>2 hire bodyguard (E063)</li>' +
            '<li>3 no more rolls</li>' +
            '<li>4 sidearms (E045)</li>' +
            '<li>5 repair units (E031)</li>' +
            '<li>6 hire repairman (E060)</li>' +
            '<li>7 fuel units (E026)</li>' +
            '<li>8 commercial transport (E074)</li>' +
            '<li>9 life support units (E029)</li>' +
            '<li>10 skimmer (E032)</li>' +
            '<li>11 hire driver (E062)</li>' +
            '<li>12 hire medic (E065)</li></ul>',
    },
    {
        id: 'R205B',
        title: 'Colony',
        content:
            '<p>A residence outpost on a planet, it can supply nearly every need of the colonists that live on planet. It is very difficult for an outsider to pass without notice in a colony. Banks and medical centers are present. Each roll takes one hour, roll two dice (2d6):</p>' +
            '<ul><li>2 hypercharges (E025)</li>' +
            '<li>3 no more rolls</li>' +
            '<li>4 sidearms (E045) or heavy hand weapons (E048)</li>' +
            '<li>5 utility suits (E043)</li>' +
            '<li>6 hire mobile repairman (E061)</li>' +
            '<li>7 repair units (E030)</li>' +
            '<li>8 fuel units (E026)</li>' +
            '<li>9 life support units (E028)</li>' +
            '<li>10 GM robot (E038), PS robot (E040), U robot (E042)</li>' +
            '<li>11 skimmer (E033)</li>' +
            '<li>12 skimmer guns (E051)</li></ul>',
    },
    {
        id: 'R205C',
        title: 'Craters',
        content:
            '<p>A cratered region due to natural causes when the planet was formed, or the result of planet-wide wars in the past or present. It is not possible to purchase goods or services here, but items may be found. Anything found is free (there is no charge to you). Each roll takes six hours, roll one die (1d6):</p>' +
            '<ul><li>1 no more rolls</li>' +
            '<li>2 special event (E070)</li>' +
            '<li>3 damaged utility suit (R213), needs one repair unit (R219)</li>' +
            '<li>4 damaged robot needing repair unit (R219), then roll 1d6: 1-3 PS robot (R222C), 4-6 U robot (R222B)</li>' +
            '<li>5 undamaged heavy hand weapon (E049)</li>' +
            '<li>6 special event (E085)</li></ul>',
    },
    {
        id: 'R205D',
        title: 'Gambling',
        content:
            '<p>This is an area dedicated to games of chance, sports, and a wide variety of recreational activities. You may win money here (or lose it), make contact with the underworld, or run afoul of the law. Banking facilities are present. Each roll takes one hour; roll two dice (2d6):</p>' +
            '<ul><li>2 heavy hand weapon (E048)</li>' +
            '<li>3 no more rolls</li>' +
            '<li>4 sidearms (E047)</li>' +
            '<li>5 hire driver (E062)</li>' +
            '<li>6 hire bodyguard (E064)</li>' +
            '<li>7 gamble (E071)</li>' +
            '<li>8 commercial transport (E074)</li>' +
            '<li>9 hire repairman (E060)</li>' +
            '<li>10 hire medic (E065)</li>' +
            '<li>11 fuel units (E027)</li>' +
            '<li>12 hire starship gunner (E069)</li></ul>',
    },
    {
        id: 'R205E',
        title: 'Industrial',
        content:
            '<p>An area of industrial research and manufacturing. This is a good area to buy equipment. Banking facilities are present. Each roll takes two hours; roll two dice (2d6):</p>' +
            '<ul><li>2 hire starship engineer (E067)</li>' +
            '<li>3 skimmer (E033) and/or skimmer guns (E051)</li>' +
            '<li>4 PS robot (E060) and/or GM robot (E037)</li>' +
            '<li>5 U robot (E041)</li>' +
            '<li>6 hire repairman (E060)</li>' +
            '<li>7 repair units (E030)</li>' +
            '<li>8 fuel units (E026)</li>' +
            '<li>9 commercial transport (E074)</li>' +
            '<li>10 life support units (E028)</li>' +
            '<li>11 utility suits (E043) and/or sidearms (E046)</li>' +
            '<li>12 buy/install stasis units (E057)</li></ul>',
    },
    {
        id: 'R205F',
        title: 'Military',
        content:
            '<p>Military bases and installations have tight security and are generally risky to penetrate. If you can make contact, you may be able to buy military weaponry. Banking facilities are available inside the base, but medical are not (the military send all non-military personnel to civilian hospitals!). Each roll takes four hours; roll one die (1d6):</p>' +
            '<ul><li>1 only buy heavy hand weapons (E050)</li>' +
            '<li>2 special event (E086)</li>' +
            '<li>3 no more rolls</li>' +
            '<li>4 only buy boat guns (E054)</li>' +
            '<li>5 only buy military utility suits (E044)</li>' +
            '<li>6 hire starship gunner (E069)</li></ul>',
    },
    {
        id: 'R205G',
        title: 'Mining',
        content:
            '<p>Mining facilities tend to be far from civilization, and this area type does not have life support automatically (workers have their own life support if on a world with bad or no air). Each roll takes three hours; roll two dice (2d6):</p>' +
            '<ul><li>2 hire mobile repairman (E061)</li>' +
            '<li>3 no more rolls</li>' +
            '<li>4 fuel units (E027)</li>' +
            '<li>5 hire bodyguard (E063)</li>' +
            '<li>6 special event (E072)</li>' +
            '<li>7 life support units (E028)</li>' +
            '<li>8 repair units (E030)</li>' +
            '<li>9 hire driver (E062)</li>' +
            '<li>10 utility suits (E044)</li>' +
            '<li>11 commercial transport (E074)</li>' +
            '<li>12 U robot (E041)</li></ul>',
    },
    {
        id: 'R205H',
        title: 'Palace',
        content:
            '<p>This is the extensive and elaborate lodging of the royal or political family in power on the planet. There are no items or services regularly for sale, so no dice rolls are given. All contact results in special events. As you might imagine, palaces are normally well guarded.</p>',
    },
    {
        id: 'R205I',
        title: 'Prison',
        content:
            '<p>The area for storage of criminals and other enemies of society. A prison is normally easier to enter than to leave. Prisoners with life sentences are normally packed into 1 CU Stasis Units (R212E), to save on food and guard requirements. As a result, stasis units of 1 and 2 CU are in common use, including some buying and selling. Each roll takes two hours, roll one die (1d6):</p>' +
            '<ul><li>1 special event (E073)</li>' +
            '<li>2 no more rolls</li>' +
            '<li>3 hire bodyguard (E064)</li>' +
            '<li>4 special event (E087)</li>' +
            '<li>5 stasis units in 1 CU or 2 CU sizes only (E057)</li>' +
            '<li>6 no more rolls</li></ul>',
    },
    {
        id: 'R205J',
        title: 'Rough Terrain',
        content:
            '<p>A rugged area of poor visibility (rocks, caves, thick vegetation if planet has air, etc.). Rough terrain is a good place for fugitives, and tends to have rough inhabitants. There are no goods or services regularly for sale.</p>',
    },
    {
        id: 'R205K',
        title: 'Ruins',
        content:
            '<p>The abandoned and decrepit remains of former civilization. Ruins may be searched for usable items, but equipment found here is at technology level 20 points below the normal planetary tech code (with a minimum tech code of 10 or the planetary code, whichever is less); ignore purchase prices, all found equipment is free. Each roll takes five hours; roll two dice (2d6):</p>' +
            '<ul><li>2 wrecked ship’s boat with 1d6 points of damage</li>' +
            '<li>3 find one intact robot (1-4: U robot, 5: PS robot, 6: GM robot)</li>' +
            '<li>4 find intact skimmer with no fuel</li>' +
            '<li>5 find 1d6 damaged utility suits (repair required)</li>' +
            '<li>6 special event (E084)</li>' +
            '<li>7 find damaged skimmer (repair or cannibalize)</li>' +
            '<li>8 special event (E088)</li>' +
            '<li>9 find one damaged robot (repair required)</li>' +
            '<li>10 find one sidearm</li>' +
            '<li>11 find one repair unit</li>' +
            '<li>12 find one intact utility suit in destroyed vehicle</li></ul>',
    },
    {
        id: 'R205L',
        title: 'Rural',
        content:
            '<p>An area where food is grown in a life-support environment. Banking facilities are present here. Each roll takes three hours; roll two dice (2d6):</p>' +
            '<ul><li>2 one sidearm (E046)</li>' +
            '<li>3 no more rolls</li>' +
            '<li>4 hire driver (E062)</li>' +
            '<li>5 hire mobile repairman (E061)</li>' +
            '<li>6 fuel units (E027)</li>' +
            '<li>7 life support units (E028)</li>' +
            '<li>8 commercial transport (E074)</li>' +
            '<li>9 repair units (E031)</li>' +
            '<li>10 one U robot (E041)</li>' +
            '<li>11 hire medic (E065)</li>' +
            '<li>12 hire bodyguard (E063)</li></ul>',
    },
    {
        id: 'R205M',
        title: 'Scientific',
        content:
            '<p>An area where scientific research and development is performed. Items purchased here are considered one tech level higher than normal. If an item from here breaks down, it must be returned here or repaired by a qualified engineer. Banking facilities are present. Each roll takes one hour; roll two dice (2d6):</p>' +
            '<ul><li>2 stasis units of any size (E057)</li>' +
            '<li>3 no more rolls</li>' +
            '<li>4 special event (E075)</li>' +
            '<li>5 hire starship engineer (E067)</li>' +
            '<li>6 hire repairman (E060)</li>' +
            '<li>7 commercial transport (E074)</li>' +
            '<li>8 PS robot (E039) or GM robot (E037)</li>' +
            '<li>9 U robot (E041) or utility suits (E043)</li>' +
            '<li>10 sidearms (E045) or heavy hand weapons (E048)</li>' +
            '<li>11 skimmer gun (E051) or boat gun (E053)</li>' +
            '<li>12 starship guns (E055)</li></ul>',
    },
    {
        id: 'R205N',
        title: 'Slum Area',
        content:
            '<p>A region of poverty and high crime. Slums are dangerous for outsiders but have a wide variety of items, often at inflated prices. Banking facilities are present. Each roll takes two hours; roll two dice (2d6):</p>' +
            '<ul><li>2 hire starship pilot/navigator (E066) or engineer (E067) (no papers)</li>' +
            '<li>3 buy U robot (E042), PS robot (E040), GM robot (E038) (no serials)</li>' +
            '<li>4 no more rolls</li>' +
            '<li>5 fuel, life support, and/or repair units (E027/E029/E031)</li>' +
            '<li>6 hire driver (E062) or skimmer trade (E033)</li>' +
            '<li>7 special event (E076)</li>' +
            '<li>8 hire bodyguard (E064)</li>' +
            '<li>9 sidearms (E047) or heavy hand weapons (E049)</li>' +
            '<li>10 commercial transport (E074)</li>' +
            '<li>11 skimmer gun (E052) or boat gun (E054)</li>' +
            '<li>12 hire medic (E065) (no papers)</li></ul>',
    },
    {
        id: 'R205O',
        title: 'Spaceport',
        content:
            '<p>A major planetary terminal for interplanetary and star system transport. All ships must use the spaceport for customs, trade, and repair. Banking and medical facilities are available. Each roll takes one hour; roll two dice (2d6):</p>' +
            '<ul><li>2 stasis units of any size (E057)</li>' +
            '<li>3 no more rolls</li>' +
            '<li>4 starship (E036) or starship guns (E055)</li>' +
            '<li>5 ship’s boat (E034) or boat guns (E053)</li>' +
            '<li>6 commercial transport (E074)</li>' +
            '<li>7 hypercharges, fuel, and/or life support (E025/E026/E028)</li>' +
            '<li>8 utility suits and/or repair units (E043/E030)</li>' +
            '<li>9 GM, PS, and/or U robots (E037/E039/E041)</li>' +
            '<li>10 starship engineer and/or gunner (E067/E068)</li>' +
            '<li>11 starship pilot/navigator (E066)</li>' +
            '<li>12 medic (E065)</li></ul>',
    },
    {
        id: 'R205P',
        title: 'Space Station',
        content:
            '<p>Smaller version of a spaceport, usually in orbit. Conditions are cramped, prices higher, but services are available. Banking facilities are present. Each roll takes one hour; roll two dice (2d6):</p>' +
            '<ul><li>2 hire repairman (E060)</li>' +
            '<li>3 no more rolls</li>' +
            '<li>4 ship’s boat (E035) or boat guns (E056)</li>' +
            '<li>5 utility suits (E044)</li>' +
            '<li>6 fuel, life support, and/or repair units (E027/E029/E031)</li>' +
            '<li>7 hypercharges (E025)</li>' +
            '<li>8 orbital shuttle (E074)</li>' +
            '<li>9 install stasis units (E057)</li>' +
            '<li>10 hire starship engineer (E067)</li>' +
            '<li>11 hire starship pilot/navigator (E066)</li>' +
            '<li>12 hire starship gunner (E068)</li></ul>',
    },
    {
        id: 'R206',
        title: 'Asteroids',
        content:
            '<p>One game tile represents an asteroid belt, rather than half a planetary surface. There are six asteroids shown on the tile, plus a space station. Of course, there are many more than six asteroids in the belt; this is a simplification for game purposes. The asteroid belt is an ideal place to store or hide materials, and occasional finds of value do occur.</p>' +
            '<p>Asteroids have a gravity factor of 0 (although they actually have a very light pull). Asteroids have no air, nor atmosphere. No goods or services may be bought at the asteroids, but normal activities and contact tries are possible at the space station (see R205P).</p>' +
            '<p>The dashed line for the orbit represents ships in the asteroid belt neither at an asteroid nor docked at the space station. The connecting lines from asteroids to orbit represent the fact that all asteroids and the station connect to each other through the orbit. It takes one hour to go from any asteroid or the station to orbit, and another hour to go from orbit to any asteroid or the station (regardless of where one started). This is the maximum speed for either a starship or the ship’s boat, the only way to go to or from asteroids.</p>',
    },
    {
        id: 'R207',
        title: 'Guide to the Pavonis Sector',
        content:
            '<p>Ten star systems make up the Pavonis Sector, connected in pattern “one” (see R234). Complete data on each is provided below. Planets and asteroids are listed with the closest one to the star (sun) of the system first, and given the lowest number (i.e., Planet I is closer than Planet II).</p>',
    },
    {
        id: 'R207A',
        title: 'Regari',
        content:
            '<p>Once a key center of industrial development, Regari is now a hint of its past glory. People live a poorer lifestyle, and the system has suffered a serious economic depression for years. There is little system defense, and breakdown of equipment is now commonplace.</p>' +
            '<p>System Entry 1d6 roll: 1- E090, 2- E091, 3- E096, 4- E100, 5- E116, 6- E093<br />' +
            'System Codes: wealth 0, tech 30.<br />' +
            'Planet I: layout J-K, gravity 3, good air.</p>',
    },
    {
        id: 'R207B',
        title: 'Palatek',
        content:
            '<p>Palatek attempted to replace the technological preeminence of Regari, but went to such extremes that toxic effluents poisoned the atmosphere. Despite scientific efforts, respiratory diseases remain a common cause of death. System defense is largely under corporate control, and emphasizes protection against industrial espionage.</p>' +
            '<p>System Entry 1d6 roll: 1- E092, 2- E120, 3- E105, 4- E108, 5- E097, 6- E103<br />' +
            'System Codes: wealth 30, tech 50.<br />' +
            'Planet I: layout A-C, gravity 7, bad air.</p>',
    },
    {
        id: 'R207C',
        title: 'Byzantium',
        content:
            '<p>A very old society exists here, noted for its political intrigue and complexity, its vigilant secret police, and underground dungeons that none are said to leave. It is known as a dangerous system to enter, unless one has the right connections.</p>' +
            '<p>System Entry 1d6 roll: 1- E106, 2- E102, 3- E093, 4- E117, 5- E120, 6- E104<br />' +
            'System Codes: wealth 50, tech 15.<br />' +
            'Planet I: layout F-C, gravity 10, good air.<br />' +
            'Planet II: layout E-B, gravity 8, good air.</p>',
    },
    {
        id: 'R207D',
        title: 'Imperia',
        content:
            '<p>The self-declared capital of a modest empire that includes Palatek, Byzantium, and Talitar. This system assumes the trappings of an imperial capital, but without the actual power. Showy buildings and ornate artwork everywhere conceal dire poverty and a mean existence. Imperia tends to waste its wealth on efforts of size and spectacle rather than quality, although some families possess valuable treasures.</p>' +
            '<p>System Entry 1d6 roll: 1- E092, 2- E100, 3- E093, 4- E114, 5- E113, 6- E105<br />' +
            'System Codes: wealth 100, tech 25.<br />' +
            'Planet I: layout C-G, gravity 11, good air.<br />' +
            'System includes asteroids.</p>',
    },
    {
        id: 'R207E',
        title: 'Talitar',
        content:
            '<p>Noted for its vicious and repressive government. Talitarians have few freedoms; the army is in firm control, and troopers vigorously patrol both the planets and the space lanes of the system. Careful bribery can be useful here, but it is exceedingly risky.</p>' +
            '<p>System Entry 1d6 roll: 1- E120, 2- E118, 3- E096, 4- E106, 5- E093, 6- E118<br />' +
            'System Codes: wealth 25, tech 30.<br />' +
            'Planet I: layout F-I, gravity 13, good air.<br />' +
            'Planet II: layout E-H, gravity 4, good air.</p>',
    },
    {
        id: 'R207F',
        title: 'Cubro',
        content:
            '<p>This system has been a rich source of metals, semiconductors, and crystals for centuries. Much of the planetary surface is now mined out, with extensive wastelands, acid drainage, and mine tailings. There are still valuable mineral finds, but they are relatively small, and depend more on luck than prospecting skill. Cubro now has become a center of industrial development using non-metallic materials, especially the still experimental “bio-plastic” alloys.</p>' +
            '<p>System Entry 1d6 roll: 1- E121, 2- E104, 3- E117, 4- E103, 5- E105, 6- E092<br />' +
            'System Codes: wealth 15, tech 70.<br />' +
            'Planet I: layout K-A, gravity 7, good air.</p>',
    },
    {
        id: 'R207G',
        title: 'Uruskop',
        content:
            '<p>Throughout its long history, Uruskop has been very isolationist, having little trade with other systems and developing in its own unique way. It now has a moderately advanced technology, but its machines and devices tend to confuse outsiders. Foreigners also tend to make social errors, which offend or anger the residents. For these reasons, this system is avoided by wise travelers.</p>' +
            '<p>System Entry 1d6 roll: 1- E119, 2- E093, 3- E119, 4- E109, 5- E119, 6- E119<br />' +
            'System Codes: wealth 40, tech 40.<br />' +
            'Planet I: layout G-B, gravity 6, bad air.<br />' +
            'System includes asteroids.</p>',
    },
    {
        id: 'R207H',
        title: 'Nipna',
        content:
            '<p>This system seems to have a perpetual war with Mynkuria, with a history of battles for at least a thousand years. The system is preoccupied with developing its war machine, and attempts to annihilate life at Mynkuria. Nipna uses the long-range strategy of high-technology weapons, especially due to its population losses, and all industrial and scientific efforts are devoted to armaments.</p>' +
            '<p>System Entry 1d6 roll: 1- E098, 2- E110, 3- E094, 4- E098, 5- E120, 6- E112<br />' +
            'System Codes: wealth 60, tech 100.<br />' +
            'Planet I: layout J-D, gravity 12, good air.<br />' +
            'Planet II: layout A-I, gravity 9, no air.</p>',
    },
    {
        id: 'R207I',
        title: 'Mynkuria',
        content:
            '<p>This system seems to have a perpetual war with Nipna, with a history of battles for at least one thousand years. The system is preoccupied with destroying Nipna, with a long-range strategy centered on the fanatical dedication of its warriors. It tends to base weapons and armament designs on captured Nipnan equipment. Mynkurian troopers readily ignore wounds and pain, and are prepared to spend their lives willingly to damage Nipna. Mynkuria also trains highly efficient spies and saboteurs, notorious for their resistance to torture (despite the advanced techniques used by both sides).</p>' +
            '<p>System Entry 1d6 roll: 1- E095, 2- E119, 3- E113, 4- E093, 5- E107, 6- E110<br />' +
            'System Codes: wealth 30, tech 60.<br />' +
            'Planet I: layout H-A, gravity 5, no air.<br />' +
            'Planet II: layout C-K, gravity 9, good air.<br />' +
            'System includes asteroids.</p>',
    },
    {
        id: 'R207J',
        title: 'New Karma',
        content:
            '<p>This system emphasizes personal spiritual development over technology. There has been an increase in mental powers, including psionic abilities. Many unusual religious cults are centered here, as well as various arts and other creative activities. Individuality is encouraged, so often what other systems consider “insane” is tolerated as normal. Unfortunately, the wars between Nipna and Mynkuria have affected this system at times, so New Karma maintains a military force with simple equipment, but a combat record of high effectiveness. This is probably because talented psionicists are provided complete freedom and great luxury while in military service.</p>' +
            '<p>System Entry 1d6 roll: 1- E115, 2- E101, 3- E096, 4- E099, 5- E104, 6- E111<br />' +
            'System Codes: wealth 70, tech 10.<br />' +
            'Planet I: layout K-D, gravity 9, good air.<br />' +
            'Planet II: layout B-J, gravity 14, good air.</p>',
    },
    {
        id: 'R208',
        title: 'Random Star System Connections',
        content:
            '<p>The connections between star systems may be varied. Instead of using the standard connection pattern “one”, roll 1d6 and use the resulting pattern, as shown in R234. A line between two systems indicates they are one jump apart.</p>',
    },
    {
        id: 'R209',
        title: 'Random Star System Design',
        content:
            '<p>You may redesign any or all of the star systems. To create a new system, roll 1d6 to determine the overall composition of the system:</p>' +
            '<p>1-2: one planet<br />3: one planet and asteroids<br />4-5: two planets<br />6: two planets and asteroids</p>' +
            '<p>Next shuffle together all the planetary tiles except asteroids, and randomly draw two for the first planet, and if there is a second, draw two more. This will alter the actual tiles for a planet.</p>' +
            '<p>To determine gravity, roll 3d6 and subtract two (3d6-2).<br />To determine atmosphere, roll 2d6:<br />2-3 is no air<br />4-9 is good air<br />10-12 is bad air</p>' +
            '<p>The designer recommends that other characteristics for a system remain unchanged, including name, description, wealth, and tech codes. However, if you wish to create new wealth and tech codes, a 2d6 roll can be used:</p>' +
            '<p>2 = 0 (10 if a tech code)<br />3 = 10<br />4 = 15<br />5 = 20<br />6 = 25<br />7 = 30<br />8 = 40<br />9 = 50<br />10 = 60<br />11 = 70<br />12 = 100</p>',
    },
    {
        id: 'R210',
        title: 'Vehicles & Equipment',
        content:
            '<p>There are various ways to travel, including on foot, and in various vehicles. Vehicles include star ships, ship’s boats, orbital shuttles, commercial vehicles, and skimmers. You also have access to a wide range of equipment, including weapons (sidearms, heavy hand arms, skimmer guns, boat guns, and starship guns), robots, utility suits, and other items.</p>' +
            '<p>Each item of equipment has a tech level ranging from 1 to 6. When you find, purchase, or encounter someone using an item of equipment, refer to the Tech Level of Equipment (R235) table, roll 1d6, and cross-reference the tech code of the system with the roll. The table indicates the item’s actual tech code, from 1 to 6. As a result, the tech code of the system will generally suggest tech levels of items, but the table result can vary the results.</p>' +
            '<p>Some Level of Equipment results show “*1” as the result. If you encounter an individual with this result, they are unarmed, and any fight will be hand-to-hand (R230G); any other found or purchased equipment is considered tech level 1.</p>' +
            '<p>Prices of equipment are noted in event paragraphs, when you have the opportunity to buy or sell. Wealth code can affect prices, see R229A. The special costs associated with crewmen and other hirelings are noted in R220, and the special costs for your starship bank payments in R203E.</p>',
    },
    {
        id: 'R211',
        title: 'Capacity Units, Repair Units, Fuel Units',
        content:
            '<p>This rule describes the main consumable or storage measurement units used throughout the game. More detail is given in R211A–R211C.</p>',
    },
    {
        id: 'R211A',
        title: 'Capacity Units',
        content:
            '<p>All available space on a starship and on other vehicles is measured in Capacity Units (CUs). Most people and materials require CUs for storage and transport, given in the description of the item (see R236 for reference). Unless otherwise restricted, any type of space can be used for any type of material. For example, you could have people in the Cargo Hold, weapons in the Engineering space, extra Fuel Units in the Crew Quarters, etc. if you desired. Due to the possibility of searches, theft, and damage it is useful to record what is being carried where.</p>' +
            '<p>Each person uses 1 CU of space, and each utility suit also uses 1 CU. A person may carry (or drag) 2 CUs, not counting the utility suit he or she wears — this allows a person to take a disabled individual to safety when wearing suits.</p>',
    },
    {
        id: 'R211B',
        title: 'Repair Units',
        content:
            '<p>When repairs are made (R219) after damage (R217) or breakdown (R218), you must expend Repair Units (RUs). One Repair Unit occupies one CU of space, and is sufficient for one day of repair on one item of equipment (see RRR activity, R203C). Repair units are purchased in various areas (R205), and are sometimes acquired by events.</p>',
    },
    {
        id: 'R211C',
        title: 'Fuel Units',
        content:
            '<p>A ship’s boat (R214) and skimmer (R215C) require Fuel Units (FUs) to operate. One FU occupies one CU of space. A ship’s boat cannot carry over 15 FU, and a skimmer cannot carry over 5 FU.</p>' +
            '<p>Star ships do not need fuel units (see R212), and when hiring the use of orbital shuttles or commercial land vehicles you can ignore FU needs — appropriate fuel is part of the hiring cost. FUs are purchased in various areas (R205), and are sometimes acquired by events.</p>',
    },
    {
        id: 'R212',
        title: 'Antelope Class Starship',
        content:
            '<p>Duke Springer operates a small merchant starship of the Antelope class. It has a hyper drive to allow “jumps” from one star system to another, as well as a sublight propulsion system for travel within a star system. It is streamlined, and can land on or take off from planets, even those with an atmosphere. It can carry a ship’s boat, and mounts one weapons turret. The ship can be controlled by a single individual (pilot/navigator), but there are advantages to having a larger crew (R221).</p>' +
            '<p>The diagram shows the CUs (R211A) in each compartment of the ship:</p>' +
            '<ul>' +
            '<li>Pilot’s Compartment: 2 CU</li>' +
            '<li>Crew Quarters: 16 CU</li>' +
            '<li>Gunnery Turret: 2 CU if starship guns installed, add 6 CU if removed</li>' +
            '<li>Boat Hold: 40 CU (used entirely by a ship’s boat if present)</li>' +
            '<li>Main Cargo Hold: 60 CU</li>' +
            '<li>Engineering Compartment: 4 CU</li>' +
            '</ul>' +
            '<p>There are also six concealed areas numbered 1 to 6, each 1 CU in size. These are hidden in cable runs, ventilation ducts, etc. (See R229B).</p>',
    },
    {
        id: 'R212A',
        title: 'Starship Hyperdrive',
        content:
            '<p>Starships use hyperdrive to move between systems. The jump is instantaneous but not without risk. Ships can dissipate on return to normal space if damaged or close to high gravity sources. Pursuit is impossible post-jump. A return to a system may result in being “wanted.”</p>',
    },
    {
        id: 'R212B',
        title: 'Hypercharges',
        content:
            '<p>Starships require hypercharges for jumps. The Antelope-class can hold 6 hypercharges in special storage (not usable for other cargo). Jump types and hypercharge costs are:</p>' +
            '<ul>' +
            '<li>Single jump: 1 hypercharge</li>' +
            '<li>Double jump: 3 hypercharges</li>' +
            '<li>Triple jump: 5 hypercharges</li>' +
            '</ul>' +
            '<p>Standard routes are shown in R234.</p>',
    },
    {
        id: 'R212C',
        title: 'Risk Factor in Hyperdrive Jumps',
        content:
            '<p>Risk Factor is calculated before each jump (R212B), and a 1d6 is rolled. If roll ≤ Risk, the jump fails (see R212D); otherwise, it succeeds.</p>' +
            '<p>Add the following to determine Risk Factor:</p>' +
            '<ul>' +
            '<li>+5: from surface</li>' +
            '<li>+4: from orbit, asteroid, or space station</li>' +
            '<li>+3: from 1 move “out” (see R212G)</li>' +
            '<li>+2: from 2 moves “out”</li>' +
            '<li>+1: from 3 moves “out”</li>' +
            '<li>+1 per hit on the ship</li>' +
            '</ul>',
    },
    {
        id: 'R212D',
        title: 'Results of Hyperdrive Jump',
        content:
            '<p>If successful, the ship arrives 4 hours “out” from any body and must check for system entry events (R226). If failed, the ship and crew are destroyed unless inside stasis units (R212E), which survive intact in the debris.</p>',
    },
    {
        id: 'R212E',
        title: 'Stasis Units',
        content:
            '<p>Stasis units freeze time inside them and can only be turned off from outside by surrounding them with a larger unit, consuming both. They protect contents from jump failure (R212D). Insurance networks sometimes cover the cost of recovery. PS robots reduce crew costs if stasis insurance is provided. If Duke is in stasis, see R240 for resolution.</p>',
    },
    {
        id: 'R212F',
        title: 'Sublight Drives',
        content:
            '<p>Starships use sublight drives within systems. They require at least one hypercharge to function, though usage does not consume it. Sublight travel is nearly light-speed, making ship-to-ship combat complex unless both intend it. See R216A and R230L for combat rules.</p>',
    },
    {
        id: 'R212G',
        title: 'Starship Movement within a System',
        content:
            '<p>Each move takes one hour. Options:</p>' +
            '<ul>' +
            '<li>Move Out: away from the system (up to 4 hours for safe jump)</li>' +
            '<li>Move In: toward the system</li>' +
            '<li>Orbit to Orbit: planet-to-planet or asteroid travel</li>' +
            '<li>Docking: orbit to station and vice versa</li>' +
            '<li>Climb/Descend: orbit ↔ surface</li>' +
            '<li>Area to Area: planetary surface movement (must obey restrictions, R205)</li>' +
            '</ul>' +
            '<p>Only docking or surface moves may trigger entry encounters (R225).</p>',
    },
    {
        id: 'R212H',
        title: 'Starship Life Support and Communication',
        content:
            '<p>Starships have life support systems that can support all passengers without limit, provided the systems are not damaged. Communication gear allows contact between ship, orbital stations, and surface control. Neither system uses capacity units. They are vulnerable to critical hits (see R237).</p>',
    },
    {
        id: 'R213',
        title: 'Life Support Units (LSU)',
        content:
            '<p>Life support units are used for travel in areas with bad or no air. One LSU supports one person for one day. They are needed for movement in red or black letter areas without good air (see R204F and R204G). Some characters or robots may be equipped with built-in LSU (see R222C). LSUs are purchased or found in events.</p>',
    },
    {
        id: 'R214',
        title: 'Ship’s Boat',
        content:
            '<p>The Antelope-class ship includes space for a ship’s boat (25 CU internal cargo, plus 5 CU for pilotage and up to 15 CU for fuel). The boat can land on planets, fly in the atmosphere, and dock with the starship or a station. Boats need fuel units (R211C) and require a pilot (yourself or crew).</p>',
    },
    {
        id: 'R214A',
        title: 'Ship’s Boat Operation',
        content:
            '<p>Boats operate in planets and orbits. It takes 1 hour to go from orbit to surface or vice versa, and 1/10 hour to move one land step on surface. Entry encounters may occur when climbing or descending (R225). Boats cannot climb from planets with gravity 10+ (R204E). No boat can function on no air worlds.</p>',
    },
    {
        id: 'R214B',
        title: 'Boat Guns',
        content:
            '<p>A ship’s boat may mount a boat gun. These take no extra capacity (assumed integrated), but require one operator and consume one Repair Unit when repaired. Boat guns are used in combat (R230L) and are vulnerable to critical hits (R237). They are distinct from starship or skimmer guns.</p>',
    },
]
