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
            '<ol start="2"><li>hire bodyguard (E063)</li>' +
            '<li>no more rolls</li>' +
            '<li>sidearms (E045)</li>' +
            '<li>repair units (E031)</li>' +
            '<li>hire repairman (E060)</li>' +
            '<li>fuel units (E026)</li>' +
            '<li>commercial transport (E074)</li>' +
            '<li>life support units (E029)</li>' +
            '<li>skimmer (E032)</li>' +
            '<li>hire driver (E062)</li>' +
            '<li>hire medic (E065)</li></ol>',
    },
    {
        id: 'R205B',
        title: 'Colony',
        content:
            '<p>A residence outpost on a planet, it can supply nearly every need of the colonists that live on planet. It is very difficult for an outsider to pass without notice in a colony. Banks and medical centers are present. Each roll takes one hour, roll two dice (2d6):</p>' +
            '<ol start="2"><li>hypercharges (E025)</li>' +
            '<li>no more rolls</li>' +
            '<li>sidearms (E045) or heavy hand weapons (E048)</li>' +
            '<li>utility suits (E043)</li>' +
            '<li>hire mobile repairman (E061)</li>' +
            '<li>repair units (E030)</li>' +
            '<li>fuel units (E026)</li>' +
            '<li>life support units (E028)</li>' +
            '<li>GM robot (E038), PS robot (E040), U robot (E042)</li>' +
            '<li>skimmer (E033)</li>' +
            '<li>skimmer guns (E051)</li></ol>',
    },
    {
        id: 'R205C',
        title: 'Craters',
        content:
            '<p>A cratered region due to natural causes when the planet was formed, or the result of planet-wide wars in the past or present. It is not possible to purchase goods or services here, but items may be found. Anything found is free (there is no charge to you). Each roll takes six hours, roll one die (1d6):</p>' +
            '<ol><li>no more rolls</li>' +
            '<li>special event (E070)</li>' +
            '<li>damaged utility suit (R213), needs one repair unit (R219)</li>' +
            '<li>damaged robot needing repair unit (R219), then roll 1d6: 1-3 PS robot (R222C), 4-6 U robot (R222B)</li>' +
            '<li>undamaged heavy hand weapon (E049)</li>' +
            '<li>special event (E085)</li></ol>',
    },
    {
        id: 'R205D',
        title: 'Gambling',
        content:
            '<p>This is an area dedicated to games of chance, sports, and a wide variety of recreational activities. You may win money here (or lose it), make contact with the underworld, or run afoul of the law. Banking facilities are present. Each roll takes one hour; roll two dice (2d6):</p>' +
            '<ol start="2"><li>heavy hand weapon (E048)</li>' +
            '<li>no more rolls</li>' +
            '<li>sidearms (E047)</li>' +
            '<li>hire driver (E062)</li>' +
            '<li>hire bodyguard (E064)</li>' +
            '<li>gamble (E071)</li>' +
            '<li>commercial transport (E074)</li>' +
            '<li>hire repairman (E060)</li>' +
            '<li>hire medic (E065)</li>' +
            '<li>fuel units (E027)</li>' +
            '<li>hire starship gunner (E069)</li></ol>',
    },
    {
        id: 'R205E',
        title: 'Industrial',
        content:
            '<p>An area of industrial research and manufacturing. This is a good area to buy equipment. Banking facilities are present. Each roll takes two hours; roll two dice (2d6):</p>' +
            '<ol start="2"><li>hire starship engineer (E067)</li>' +
            '<li>skimmer (E033) and/or skimmer guns (E051)</li>' +
            '<li>PS robot (E060) and/or GM robot (E037)</li>' +
            '<li>U robot (E041)</li>' +
            '<li>hire repairman (E060)</li>' +
            '<li>repair units (E030)</li>' +
            '<li>fuel units (E026)</li>' +
            '<li>commercial transport (E074)</li>' +
            '<li>life support units (E028)</li>' +
            '<li>utility suits (E043) and/or sidearms (E046)</li>' +
            '<li>buy/install stasis units (E057)</li></ol>',
    },
    {
        id: 'R205F',
        title: 'Military',
        content:
            '<p>Military bases and installations have tight security and are generally risky to penetrate. If you can make contact, you may be able to buy military weaponry. Banking facilities are available inside the base, but medical are not (the military send all non-military personnel to civilian hospitals!). Each roll takes four hours; roll one die (1d6):</p>' +
            '<ol><li>only buy heavy hand weapons (E050)</li>' +
            '<li>special event (E086)</li>' +
            '<li>no more rolls</li>' +
            '<li>only buy boat guns (E054)</li>' +
            '<li>only buy military utility suits (E044)</li>' +
            '<li>hire starship gunner (E069)</li></ol>',
    },
    {
        id: 'R205G',
        title: 'Mining',
        content:
            '<p>Mining facilities tend to be far from civilization, and this area type does not have life support automatically (workers have their own life support if on a world with bad or no air). Each roll takes three hours; roll two dice (2d6):</p>' +
            '<ol start="2"><li>hire mobile repairman (E061)</li>' +
            '<li>no more rolls</li>' +
            '<li>fuel units (E027)</li>' +
            '<li>hire bodyguard (E063)</li>' +
            '<li>special event (E072)</li>' +
            '<li>life support units (E028)</li>' +
            '<li>repair units (E030)</li>' +
            '<li>hire driver (E062)</li>' +
            '<li>utility suits (E044)</li>' +
            '<li>commercial transport (E074)</li>' +
            '<li>U robot (E041)</li></ol>',
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
            '<ol><li>special event (E073)</li>' +
            '<li>no more rolls</li>' +
            '<li>hire bodyguard (E064)</li>' +
            '<li>special event (E087)</li>' +
            '<li>stasis units in 1 CU or 2 CU sizes only (E057)</li>' +
            '<li>no more rolls</li></ol>',
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
            '<ol start="2"><li>wrecked ship’s boat with 1d6 points of damage</li>' +
            '<li>find one intact robot (1-4: U robot, 5: PS robot, 6: GM robot)</li>' +
            '<li>find intact skimmer with no fuel</li>' +
            '<li>find 1d6 damaged utility suits (repair required)</li>' +
            '<li>special event (E084)</li>' +
            '<li>find damaged skimmer (repair or cannibalize)</li>' +
            '<li>special event (E088)</li>' +
            '<li>find one damaged robot (repair required)</li>' +
            '<li>find one sidearm</li>' +
            '<li>find one repair unit</li>' +
            '<li>find one intact utility suit in destroyed vehicle</li></ol>',
    },
    {
        id: 'R205L',
        title: 'Rural',
        content:
            '<p>An area where food is grown in a life-support environment. Banking facilities are present here. Each roll takes three hours; roll two dice (2d6):</p>' +
            '<ol start="2"><li>one sidearm (E046)</li>' +
            '<li>no more rolls</li>' +
            '<li>hire driver (E062)</li>' +
            '<li>hire mobile repairman (E061)</li>' +
            '<li>fuel units (E027)</li>' +
            '<li>life support units (E028)</li>' +
            '<li>commercial transport (E074)</li>' +
            '<li>repair units (E031)</li>' +
            '<li>one U robot (E041)</li>' +
            '<li>hire medic (E065)</li>' +
            '<li>hire bodyguard (E063)</li></ol>',
    },
    {
        id: 'R205M',
        title: 'Scientific',
        content:
            '<p>An area where scientific research and development is performed. Items purchased here are considered one tech level higher than normal. If an item from here breaks down, it must be returned here or repaired by a qualified engineer. Banking facilities are present. Each roll takes one hour; roll two dice (2d6):</p>' +
            '<ol start="2"><li>stasis units of any size (E057)</li>' +
            '<li>no more rolls</li>' +
            '<li>special event (E075)</li>' +
            '<li>hire starship engineer (E067)</li>' +
            '<li>hire repairman (E060)</li>' +
            '<li>commercial transport (E074)</li>' +
            '<li>PS robot (E039) or GM robot (E037)</li>' +
            '<li>U robot (E041) or utility suits (E043)</li>' +
            '<li>sidearms (E045) or heavy hand weapons (E048)</li>' +
            '<li>skimmer gun (E051) or boat gun (E053)</li>' +
            '<li>starship guns (E055)</li></ol>',
    },
    {
        id: 'R205N',
        title: 'Slum Area',
        content:
            '<p>A region of poverty and high crime. Slums are dangerous for outsiders but have a wide variety of items, often at inflated prices. Banking facilities are present. Each roll takes two hours; roll two dice (2d6):</p>' +
            '<ol start="2"><li>hire starship pilot/navigator (E066) or engineer (E067) (no papers)</li>' +
            '<li>buy U robot (E042), PS robot (E040), GM robot (E038) (no serials)</li>' +
            '<li>no more rolls</li>' +
            '<li>fuel, life support, and/or repair units (E027/E029/E031)</li>' +
            '<li>hire driver (E062) or skimmer trade (E033)</li>' +
            '<li>special event (E076)</li>' +
            '<li>hire bodyguard (E064)</li>' +
            '<li>sidearms (E047) or heavy hand weapons (E049)</li>' +
            '<li>commercial transport (E074)</li>' +
            '<li>skimmer gun (E052) or boat gun (E054)</li>' +
            '<li>hire medic (E065) (no papers)</li></ol>',
    },
    {
        id: 'R205O',
        title: 'Spaceport',
        content:
            '<p>A major planetary terminal for interplanetary and star system transport. All ships must use the spaceport for customs, trade, and repair. Banking and medical facilities are available. Each roll takes one hour; roll two dice (2d6):</p>' +
            '<ol start="2"><li>stasis units of any size (E057)</li>' +
            '<li>no more rolls</li>' +
            '<li>starship (E036) or starship guns (E055)</li>' +
            '<li>ship’s boat (E034) or boat guns (E053)</li>' +
            '<li>commercial transport (E074)</li>' +
            '<li>hypercharges, fuel, and/or life support (E025/E026/E028)</li>' +
            '<li>utility suits and/or repair units (E043/E030)</li>' +
            '<li>GM, PS, and/or U robots (E037/E039/E041)</li>' +
            '<li>starship engineer and/or gunner (E067/E068)</li>' +
            '<li>starship pilot/navigator (E066)</li>' +
            '<li>medic (E065)</li></ol>',
    },
    {
        id: 'R205P',
        title: 'Space Station',
        content:
            '<p>Smaller version of a spaceport, usually in orbit. Conditions are cramped, prices higher, but services are available. Banking facilities are present. Each roll takes one hour; roll two dice (2d6):</p>' +
            '<ol start="2"><li>hire repairman (E060)</li>' +
            '<li>no more rolls</li>' +
            '<li>ship’s boat (E035) or boat guns (E056)</li>' +
            '<li>utility suits (E044)</li>' +
            '<li>fuel, life support, and/or repair units (E027/E029/E031)</li>' +
            '<li>hypercharges (E025)</li>' +
            '<li>orbital shuttle (E074)</li>' +
            '<li>install stasis units (E057)</li>' +
            '<li>hire starship engineer (E067)</li>' +
            '<li>hire starship pilot/navigator (E066)</li>' +
            '<li>hire starship gunner (E068)</li></ol>',
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
            '<p>System Entry 1d6 roll: <ol><li>E090</li><li>E091</li><li>E096</li><li>E100</li><li>E116</li><li>E093</li></ol>' +
            'System Codes: wealth 0, tech 30.<br />' +
            'Planet I: layout J-K, gravity 3, good air.</p>',
    },
    {
        id: 'R207B',
        title: 'Palatek',
        content:
            '<p>Palatek attempted to replace the technological preeminence of Regari, but went to such extremes that toxic effluents poisoned the atmosphere. Despite scientific efforts, respiratory diseases remain a common cause of death. System defense is largely under corporate control, and emphasizes protection against industrial espionage.</p>' +
            '<p>System Entry 1d6 roll: <ol><li>E092</li><li>E120</li><li>E105</li><li>E108</li><li>E097</li><li>E103</li></ol>' +
            'System Codes: wealth 30, tech 50.<br />' +
            'Planet I: layout A-C, gravity 7, bad air.</p>',
    },
    {
        id: 'R207C',
        title: 'Byzantium',
        content:
            '<p>A very old society exists here, noted for its political intrigue and complexity, its vigilant secret police, and underground dungeons that none are said to leave. It is known as a dangerous system to enter, unless one has the right connections.</p>' +
            '<p>System Entry 1d6 roll: <ol><li>E106</li><li>E102</li><li>E093</li><li>E117</li><li>E120</li><li>E104</li></ol>' +
            'System Codes: wealth 50, tech 15.<br />' +
            'Planet I: layout F-C, gravity 10, good air.<br />' +
            'Planet II: layout E-B, gravity 8, good air.</p>',
    },
    {
        id: 'R207D',
        title: 'Imperia',
        content:
            '<p>The self-declared capital of a modest empire that includes Palatek, Byzantium, and Talitar. This system assumes the trappings of an imperial capital, but without the actual power. Showy buildings and ornate artwork everywhere conceal dire poverty and a mean existence. Imperia tends to waste its wealth on efforts of size and spectacle rather than quality, although some families possess valuable treasures.</p>' +
            '<p>System Entry 1d6 roll: <ol><li>E092</li><li>E100</li><li>E093</li><li>E114</li><li>E113</li><li>E105</li></ol>' +
            'System Codes: wealth 100, tech 25.<br />' +
            'Planet I: layout C-G, gravity 11, good air.<br />' +
            'System includes asteroids.</p>',
    },
    {
        id: 'R207E',
        title: 'Talitar',
        content:
            '<p>Noted for its vicious and repressive government. Talitarians have few freedoms; the army is in firm control, and troopers vigorously patrol both the planets and the space lanes of the system. Careful bribery can be useful here, but it is exceedingly risky.</p>' +
            '<p>System Entry 1d6 roll: <ol><li>E120</li><li>E118</li><li>E096</li><li>E106</li><li>E093</li><li>E118</li></ol>' +
            'System Codes: wealth 25, tech 30.<br />' +
            'Planet I: layout F-I, gravity 13, good air.<br />' +
            'Planet II: layout E-H, gravity 4, good air.</p>',
    },
    {
        id: 'R207F',
        title: 'Cubro',
        content:
            '<p>This system has been a rich source of metals, semiconductors, and crystals for centuries. Much of the planetary surface is now mined out, with extensive wastelands, acid drainage, and mine tailings. There are still valuable mineral finds, but they are relatively small, and depend more on luck than prospecting skill. Cubro now has become a center of industrial development using non-metallic materials, especially the still experimental “bio-plastic” alloys.</p>' +
            '<p>System Entry 1d6 roll: <ol><li>E121</li><li>E104</li><li>E117</li><li>E103</li><li>E105</li><li>E092</li></ol>' +
            'System Codes: wealth 15, tech 70.<br />' +
            'Planet I: layout K-A, gravity 7, good air.</p>',
    },
    {
        id: 'R207G',
        title: 'Uruskop',
        content:
            '<p>Throughout its long history, Uruskop has been very isolationist, having little trade with other systems and developing in its own unique way. It now has a moderately advanced technology, but its machines and devices tend to confuse outsiders. Foreigners also tend to make social errors, which offend or anger the residents. For these reasons, this system is avoided by wise travelers.</p>' +
            '<p>System Entry 1d6 roll: <ol><li>E119</li><li>E093</li><li>E119</li><li>E109</li><li>E119</li><li>E119</li></ol>' +
            'System Codes: wealth 40, tech 40.<br />' +
            'Planet I: layout G-B, gravity 6, bad air.<br />' +
            'System includes asteroids.</p>',
    },
    {
        id: 'R207H',
        title: 'Nipna',
        content:
            '<p>This system seems to have a perpetual war with Mynkuria, with a history of battles for at least a thousand years. The system is preoccupied with developing its war machine, and attempts to annihilate life at Mynkuria. Nipna uses the long-range strategy of high-technology weapons, especially due to its population losses, and all industrial and scientific efforts are devoted to armaments.</p>' +
            '<p>System Entry 1d6 roll: <ol><li>E098</li><li>E110</li><li>E094</li><li>E098</li><li>E120</li><li>E112</li></ol>' +
            'System Codes: wealth 60, tech 100.<br />' +
            'Planet I: layout J-D, gravity 12, good air.<br />' +
            'Planet II: layout A-I, gravity 9, no air.</p>',
    },
    {
        id: 'R207I',
        title: 'Mynkuria',
        content:
            '<p>This system seems to have a perpetual war with Nipna, with a history of battles for at least one thousand years. The system is preoccupied with destroying Nipna, with a long-range strategy centered on the fanatical dedication of its warriors. It tends to base weapons and armament designs on captured Nipnan equipment. Mynkurian troopers readily ignore wounds and pain, and are prepared to spend their lives willingly to damage Nipna. Mynkuria also trains highly efficient spies and saboteurs, notorious for their resistance to torture (despite the advanced techniques used by both sides).</p>' +
            '<p>System Entry 1d6 roll: <ol><li>E095</li><li>E119</li><li>E113</li><li>E093</li><li>E107</li><li>E110</li></ol>' +
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
            '<p>System Entry 1d6 roll: <ol><li>E115</li><li>E101</li><li>E096</li><li>E099</li><li>E104</li><li>E111</li></ol>' +
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
    {
        id: 'R215',
        title: 'Planetary Vehicles',
        content:
            '<p>There are three main types of planetary vehicle: orbital shuttle, various commercial land vehicles, and the skimmer.</p>',
    },
    {
        id: 'R215A',
        title: 'Orbital Shuttle',
        content:
            '<p>You may “book passage” for persons and/or cargo on the orbital shuttle at either a spaceport or space station. It will travel to either spaceport, space station, or orbit, as desired. Booking passage is represented by a contact try (R227) at the spaceport or space station that results in a “commercial vehicle” (E074) event.</p>' +
            '<p>If the planet has no spaceport on the ground, commercial vehicle contact at a colony allows one to book passage on a shuttle.</p>' +
            '<p>The shuttle can carry up to 50 CU, but may not carry items prohibited from transport on that planet (if event paragraphs have mentioned such). The shuttle automatically provides its own fuel and life support for all inside at no extra cost. Every 3 CU of space on the shuttle costs 1 Sec.</p>' +
            '<p>The shuttle takes one hour to reach its destination, including loading and unloading times.</p>',
    },
    {
        id: 'R215B',
        title: 'Commercial Land Vehicles',
        content:
            '<p>These include trains, buses, planes, helicopters, ground effect vehicles, subways, monorails, and innumerable other methods for local transportation. They are only hired by the hour, at 3 CU space per 1 Sec of cost when event (E074) occurs (often through a contact try, R227, in specific planetary areas).</p>' +
            '<p>A commercial vehicle moves one land step per hour, or one hour to move from one area to an adjacent one. Additional hours increase the cost.</p>' +
            '<p>A commercial vehicle holds 9 CU; you can hire more than one vehicle for larger loads, but no one item can be larger than 9 CU as a result. You may hire the vehicle for a one-way trip.</p>' +
            '<p>A commercial vehicle must be paid in advance, and remains available (once hired) only for the paid-in-advance period. During the period, you can increase the time available by paying more, but as soon as money runs out, the vehicle instantly departs and cannot be recalled without a new contact try, etc.</p>' +
            '<p>Commercial vehicles can travel to areas of bad or no air.</p>',
    },
    {
        id: 'R215C',
        title: 'Skimmers',
        content:
            '<p>These are small private vehicles typical to inhabited planets of the sector. They use air-breathing engines, and thus are limited to areas of good or bad air. A skimmer purchased on a planet with bad air (R204F) can only function on that planet, while skimmers from all other planets won’t work. A skimmer travels one land step per hour, and requires a qualified driver to operate.</p>' +
            '<p>Skimmers are 10 CU in size, and can hold up to 6 CUs of passengers, fuel, cargo, etc. A skimmer moves one land step per hour, and uses one FU per day. It has no life support, and is not sealed.</p>' +
            '<p>Skimmers cannot be hired, instead the 3 CU or 6 CU commercial vehicle is the “hired” equivalent (see R215B above).</p>',
    },
    {
        id: 'R216',
        title: 'Weaponry',
        content:
            '<p>Weapons, like all other equipment, have a tech level ranging from 1 to 6, with the higher numbers more advanced. Higher tech “ranged weapons” fire before lower level weapons in combat (R230F), and are more likely to hit (R230D). Advanced weapons often do more damage, especially explosive weapons (R230E). Weapons may be purchased through contacts (R227), acquired in events, or taken from an opponent defeat in combat.</p>' +
            '<p>A character needs a marksmanship rating of one (1) or higher (R201A) to fire a weapon. Characters with marksmanship of zero cannot fire weapons. Robots are unable to fire weapons, their programming prohibits it. Certain weapons can only be used by certain types of characters, as described below.</p>',
    },
    {
        id: 'R216A',
        title: 'Starship Guns',
        content:
            '<p>These powerful energy beam weapons must be mounted in starships, the Antelope class can fit one set of guns in its turret. They can only be fired by a qualified starship gunner in the turret. If starship guns are purchased, they are installed at that time if the starship is present; otherwise, a starship engineer (R221B) can install them in one day of RRR (R203C) devoted to the task.</p>' +
            '<p>A hit from starship guns reduces an individual’s Endurance (R231) by ten points, or inflicts one hit on a vehicle (may be a critical hit, see R230L).</p>',
    },
    {
        id: 'R216B',
        title: 'Boat Guns',
        content:
            '<p>These large weapons require 5 CU of space and are installed only in a ship’s boat. A qualified starship gunner is needed to fire them, and a boat pilot cannot also fire the guns. When purchased, boat guns are installed at that time if the boat is present; otherwise, a starship engineer can install them (R22lb) in one day of RRR (R203C) devoted to the task.</p>' +
            '<p>A hit from boat guns may reduce an individual’s Endurance or disable him (R231), or inflict one hit on a vehicle (may be a critical hit, see R230K).</p>',
    },
    {
        id: 'R216C',
        title: 'Skimmer Guns',
        content:
            '<p>These medium weapons require 2 CU of space and are installed on a skimmer. Starship gunners and bodyguards with marksmanship of one (1) or higher, or Duke Springer, can fire them, except the driver of the skimmer. When purchased, skimmer guns are installed at that time if the skimmer is present; otherwise, a starship engineer or repairman can install them in one day of RRR (R203C) devoted to the task.</p>' +
            '<p>A hit from skimmer guns may reduce an individual’s Endurance or disable him (R231), or may inflict one hit on a vehicle (may be a critical hit, see R230K).</p>',
    },
    {
        id: 'R216D',
        title: 'Personal Weapons',
        content:
            '<p>These light weapons are carried by individuals. Heavy hand weapons are 1 CU in size and can only be used by starship gunners, bodyguards, or Duke Springer. Sidearms take up no space and can be used by anyone. A crate of 10 sidearms, in cargo, takes up 2 CU.</p>' +
            '<p>Marksmanship of 1 or better is required to fire any type of personal weapon. Personal weapons cannot be fired while driving a skimmer, piloting a boat, or fired out of a boat or starship (but may be fired within the vehicle). A hit from personal weapons may reduce an individual’s Endurance or disable him (R231), or may inflict a hit on certain types of vehicles only (see R230K).</p>',
    },
    {
        id: 'R217',
        title: 'Damage',
        content:
            '<p>If a shot hits a vehicle (R230), the result is given as a “hit” or a “critical hit.” Each vehicle can absorb a certain number of hits before it is destroyed. The effects of weapons and injury on individuals are described in R231. When a vehicle is destroyed by hits, it cannot function for any purpose, and repair is no longer possible.</p>',
    },
    {
        id: 'R217A',
        title: 'Starship Damage',
        content:
            '<p>Starships (Antelope class) take 10 hits to destroy. Sidearms and heavy hand weapons have no effect on starships unless an event paragraph indicates otherwise. Individual points of damage simply increase the risk factor when hyperjumping.</p>',
    },
    {
        id: 'R217B',
        title: 'Ship’s Boat Damage',
        content:
            '<p>Ship’s boat (Hopper class) takes 5 hits to destroy. Sidearms have no effect on ship’s boat unless an event paragraph indicates otherwise. Individual points of damage have no special effect unless critical hits (see R237 for effects). Shuttles are similar to ship’s boat.</p>',
    },
    {
        id: 'R217C',
        title: 'Skimmer Damage',
        content:
            '<p>Skimmers (and commercial vehicles) take only 2 hits to destroy. One hit will immobilize the vehicle until repaired. Sidearm hits do not damage unless a critical hit results, in which case normal damage and the critical hit effect (R237) both apply, meaning at least the immobilization of the vehicle.</p>',
    },
    {
        id: 'R218',
        title: 'Break-down',
        content:
            '<p>As you use vehicles and other equipment, break-down may occur. If an item breaks down, it cannot be used until it is repaired (R219). Break-down does not add any damage points and never causes destruction.</p>' +
            '<p>Normally, you must check for break-down after each day for each item, vehicle, etc. that was used that day. You do not need to check vehicles that did not move, items not used (including those simply carried, but not used), nor starships or ship’s boats in orbit, at a space station, or at an asteroid. Break-down for vehicles and weapons are determined separately.</p>' +
            '<p>Communications and life support equipment on starships or ship’s boat will never break down.</p>',
    },
    {
        id: 'R218A',
        title: 'Break-down Check',
        content:
            '<p>When break-down is checked, roll 2d6 and compare the result to the item’s tech level. If the dice roll is less than or equal to the tech level, the item breaks down. Note that a roll of “1” is not possible with two dice, and thus tech level 1 items never break down.</p>',
    },
    {
        id: 'R218B',
        title: 'Preventive Maintenance',
        content:
            '<p>This is performed to reduce the chance of break-down. GM robots (R222A) can perform it on starships and ship’s boats. Starship engineers can do preventive maintenance on any equipment or vehicle.</p>' +
            '<p>Preventive maintenance takes an entire day of work for the man or robot, who cannot do anything else, and will be prevented from doing it by combat or some other interruption. All items and vehicles at that location get the benefit of the maintenance. More than one engineer and/or robot at the location does not increase the benefits in any way.</p>' +
            '<p>If an engineer performed maintenance, all items add two (+2) to breakdown rolls that day, and add one (+1) to break-down rolls for the next two days afterward.</p>' +
            '<p>If a GM robot performed maintenance, all items add one (+1) to breakdown rolls that day and the following day.</p>',
    },
    {
        id: 'R219',
        title: 'Repair of Vehicles & Equipment',
        content:
            '<p>When vehicles or equipment break-down, or are damaged, they must be repaired to be fully functional again. Note, however, that some damage has no material effect, and can be ignored (although the vehicle is closer to destruction until the damage is repaired). Repair is done during a day of RRR (R203C) by a qualified person.</p>' +
            '<p>A starship engineer may repair any part of a starship, including the ship itself, a ship’s boat or any part thereof, or a skimmer. This includes repair of starship guns, boat guns, and/or skimmer guns.</p>' +
            '<p>A repairman or mobile repairman can repair anything except a starship or ship’s boat equipment (or the vehicle itself).</p>' +
            '<p>A skimmer driver can only repair a skimmer.</p>' +
            '<p>Repairs require the item or vehicle to be at the same location as the person repairing it. Normally, equipment must be brought to hired repairmen. Mobile repairmen can travel to the equipment’s location.</p>',
    },
    {
        id: 'R219A',
        title: 'Repair Units',
        content:
            '<p>In any repair, one Repair Unit (R211) is consumed per day of repair on a single item of equipment. Repair Units (RUs) may be purchased in any area where vehicle repair may be obtained. RUs are not needed for preventive maintenance.</p>',
    },
    {
        id: 'R219B',
        title: 'Speed of Repair',
        content:
            '<p>A starship engineer repairs 1d6 hits on a starship per day, and one hit per day for other items. A repairman, or mobile repairman in his home area, repairs 1d6 hits per day. A mobile repairman who traveled to another area only fixes one hit per day. A skimmer driver can only repair one hit per day.</p>' +
            '<p>If an item has broken down (R218) any repair with one RU will fix it, in addition to repair hits of damage as noted above. However, even with no hits, a broken-down item still requires repair work and one RU.</p>',
    },
    {
        id: 'R220',
        title: 'Retinue',
        content:
            '<p>As the adventure progresses, you may hire or otherwise gain crew-members and followers. When a character joins your “party,” note his or her basic statistics (R201A) and skills. You can voluntarily dismiss or abandon members of your party, although this can cause problems (see below).</p>',
    },
    {
        id: 'R220A',
        title: 'Hirelings',
        content:
            '<p>A person hired as a starship crewman must be paid “sign-on” money sometimes, at the time of hiring. The daily or weekly salary must be paid at the start of each day or week, and may be modified if the crewman is working in a stasis unit with insurance coverage. All costs are noted in event paragraphs, and are normally modified by the wealth code of the system. See R223A for equipment used by hirelings.</p>' +
            '<p>If a salary is not paid in advance, at the start of each day you can attempt to convince them to keep working anyway with a successful cunning roll (R202). If this fails, the character will leave you as soon as he or she arrives in an area with good air. Until that time, the person does not work, and will automatically side against you in any encounter (join opposition in combat against you, inform customs searches of contraband, etc.).</p>',
    },
    {
        id: 'R220B',
        title: 'Abandonment, Insurance & Death Payments',
        content:
            '<p>A member of your party could leave due to an event, normal end of employment, or is simply left behind with life support or in an area with good air — outside of a combat situation. Here you have no further obligation to the person. If the person is killed, abandoned in combat, or left without life support where it is needed, you must make a death payment on that day or the following day to a bank. If you don’t make the payment on time, you can never again hire anyone from the star system where the person was hired, except those who don’t require any death payment.</p>' +
            '<p>Death payments can be deposited in advance at any bank in the person’s home system for an extra 10% fee. If the person leaves your party and no death payment is needed, you can recover the money the next time you are in an area with banking facilities in that system.</p>' +
            '<p>Stasis insurance is obtained by installing a stasis unit in the work space of the crewman (1 CU for a man alone, 2 CU for a man with suit), and by depositing money sufficient for the next largest size stasis unit plus 10% at any bank. Insurance money is never refunded, regardless of circumstances when the person leaves your employ. See R212E for stasis unit details.</p>',
    },
    {
        id: 'R220C',
        title: 'Isolated Persons',
        content:
            '<p>Persons of your party may be left somewhere while you go elsewhere. While isolated from you, the others cannot travel, engage in work, combat, try for contact, or other activities. The only exception is that they may perform RRR activities (R203C), such as repair, preventive maintenance, or healing wounds. The normal RRR encounter may occur (see R227A), and if it does, they make no resistance to the event, and will be automatically defeated in any combat.</p>' +
            '<p>Isolated individuals will consume life support and/or repair units as necessary for their existence and tasks. Bodyguards (R221D) may not be voluntarily left in isolation from you, but events may force them to become isolated.</p>',
    },
    {
        id: 'R221',
        title: 'Roles of Hirelings',
        content: '<p></p>',
    },
    {
        id: 'R221A',
        title: 'Pilot/Navigator',
        content:
            '<p>A crewman who can operate a starship, using its hyperdrive, sublight drive, and/or make an unpowered landing on a planet with atmosphere. In addition, he can control and pilot a ship’s boat and/or drive a skimmer. He cannot perform operate, perform repairs, or conduct preventive maintenance on any other items, except for an ability to operate sidearms (if he has a marksmanship of 1 or higher). He will defend himself if attacked in hand-to-hand combat, but will not attack. As a starship crewman, the pilot is able to operate starship communications equipment.</p>',
    },
    {
        id: 'R221B',
        title: 'Starship Engineer',
        content:
            '<p>A crewman who can perform preventive maintenance or make repairs on any starship or ship’s boat equipment, or on a skimmer. He can drive a skimmer, but cannot pilot a starship or ship’s boat. He cannot use any weapons except sidearms (and then only if he has marksmanship of 1 or more), and only defends himself if attacked in hand-to-hand combat. As a starship crewman he can operate communications equipment.</p>',
    },
    {
        id: 'R221C',
        title: 'Starship Gunner',
        content:
            '<p>A crewman who operates the starship’s gun turret. He can also operate boat guns or skimmer guns, and can use personal weapons (heavy hand weapons or sidearms). He can drive a skimmer, but not a starship or ship’s boat. He cannot perform repairs, nor preventive maintenance. He can attack as well as defend in hand-to-hand combat, and as a starship crewman can operate starship communications equipment.</p>',
    },
    {
        id: 'R221D',
        title: 'Bodyguard',
        content:
            '<p>A hireling who can use skimmer guns, heavy hand weapons, and/or sidearms, but is unable to fire starship guns or boat guns. He can attack or defend or hand-to-hand combat. A bodyguard only fights if with Duke Springer, he will not fight if isolated. He cannot perform any repair or preventive maintenance, and cannot operate starship communications equipment.</p>',
    },
    {
        id: 'R221E',
        title: 'Skimmer Driver',
        content:
            '<p>A hireling who can drive a skimmer or repair it. Skimmer drivers cannot do preventive maintenance, will not use any weapons, nor attack in hand-to-hand combat. Skimmer drivers will never voluntarily leave their system of origin, and will not work for you if “kidnapped” from their home star system.</p>',
    },
    {
        id: 'R221F',
        title: 'Medic',
        content:
            '<p>A hireling qualified to perform emergency first aid (R231B), and useful in certain special events. A medic cannot use weapons, will attempt to avoid any hand-to-hand combat, and cannot operate any other equipment, do preventive maintenance, or perform repairs.</p>',
    },
    {
        id: 'R222',
        title: 'Robots',
        content:
            '<p>There are three principal types of robots. All robots have fail-safe programming features that prevent them from being used in any type of combat. Each robot has an endurance of 2, takes 1 CU space, and is self-powered with a small battery. There is a small operating cost every 10-day week, representing new batteries and other consumables needed to keep a robot running. If this is not paid, the robot automatically breaks down.</p>',
    },
    {
        id: 'R222A',
        title: 'GM (General Maintenance) Robot',
        content:
            '<p>Can perform preventive maintenance duties on all items within a starship and/or ship’s boat (see R218B) but cannot perform repairs. A GM Robot cannot function on equipment whose tech level is higher than the tech level of the robot. A GM robot can maintain other GM robots, but cannot maintain itself nor other robots. Operating cost is 2 S per 10-day week.</p>',
    },
    {
        id: 'R222B',
        title: 'U (Utility) Robot',
        content:
            '<p>Used to carry loads up to 3 CU (in addition to the 1 CU the robot itself occupies). It has no other function. Operating cost is 1 S per 10-day week.</p>',
    },
    {
        id: 'R222C',
        title: 'PS (Personal Support) Robot',
        content:
            '<p>Programmed to support a single, specific individual only. When a PS Robot is connected to a person in a utility suit, the result is indefinite life support (R213). If the PS robot is connected to a person without a suit, the person can be kept alive for one hour.</p>' +
            '<p>A PS Robot can perform emergency first aid (R213B) and can call for medical assistance (R231C). It cannot provide healing (unlike a medic). The robot can be used for any ordinary radio-communicator calls on that planet, including to orbit or a space station, but not to another planet or star system. Operating cost is 2 S per 10-day week.</p>',
    },
    {
        id: 'R222D',
        title: 'Robot Use & Break-down',
        content:
            '<p>Robots may be used in any environment, including bad air or vacuum, and do not require life support. As with any equipment, you must check for break-down for each day you use each robot (R218).</p>',
    },
    {
        id: 'R223',
        title: 'Hirelings’ Equipment & Goods',
        content: '<p></p>',
    },
    {
        id: 'R223A',
        title: 'Hirelings’ Equipment',
        content:
            '<p>Any equipment used by a hireling, which he personally carries, becomes the personal equipment and property of that person. This includes sidearms, heavy hand weapons, PS robots, etc. Exceptions are U or GM robots, vehicles, equipment mounted in vehicles, etc.</p>' +
            '<p>As a result, you may need to give equipment to a hireling from time to time. You can take back the “given” equipment later, but must succeed with a Cunning roll (R202) to prevent the hireling from quitting. If a hireling is not paid and leaves, he automatically takes personal equipment with him, and you are unable to take it back regardless of cunning (although you can try to use your cunning to have him continue working for you without pay for that day, see R220A).</p>',
    },
    {
        id: 'R223B',
        title: 'Acquiring Equipment without Purchase',
        content:
            '<p>Certain events may allow you to find intact or damaged equipment without spending money. In addition, if you defeat others in combat, you may take any equipment or valuables they have (indicated in the event), assuming it wasn’t damaged or destroyed in battle. Damaged equipment that you can move can also be taken.</p>' +
            '<p>You take prisoners after combat only if so indicated in the event paragraph. Otherwise, those who are not killed are assumed to escape.</p>' +
            '<p>Each person you encounter will have “pocket change” in Secs equal to a 1d6 cross-indexed with the system’s wealth code on table R241. Ignore any fractional Secs of pocket change. In other words, pocket change is base price of 1 S times multiplier given on that table.</p>',
    },
    {
        id: 'R224',
        title: 'Encounters',
        content:
            '<p>There are two main types of encounters: Entry Encounters and Contact Try Encounters. Each type is described in detail below (R225-226-227). All encounters use the same standard resolution procedure:</p>' +
            '<p>If you encounter any people, note the characteristics of each (R201A). Sometimes a characteristic is determined by a die roll, at times with a certain amount added or subtracted. For example, “1d6+1” means one die roll with one added. Minimum characteristic possible is 0, unless other minimums or maximums are given.</p>' +
            '<p>If persons encountered have skills, note this. Generally, any characters encountered with heavy hand weapons automatically have bodyguard skill. If persons have vehicles, assume all of them have sufficient skill to operate it (skimmer driver if in skimmers, pilot/navigators if in ship’s boat or starship). Pocket change is determined after the encounter, if needed.</p>' +
            '<p>If the person has any equipment, such as weapons, robots, etc., refer to the Tech Level table (R235) to determine the level of their equipment. Roll just once — they all have equipment of the same tech level.</p>',
    },
    {
        id: 'R225A',
        title: 'Detection',
        content:
            '<p>First, determine if you are detected. Refer to the Entry Detection Table (R238) and cross-reference the mode of entry and the tech code of the system and add or subtract a certain amount when entering certain types of areas (see table) to give your detection factor. Then roll one die (1d6). If the result is less than or equal to the detection factor you are detected. If the result is greater than your detection factor, you enter undetected and no entry encounter occurs. Entering undetected often means that nobody paid any attention to you, rather than you sneaking in totally unseen.</p>' +
            '<p>You can enter asteroid and orbit areas undetected at any time — no detection check is necessary, and no encounters occur.</p>',
    },
    {
        id: 'R225B',
        title: 'Entry Encounters',
        content:
            '<p>If you are detected (see R225A), you must now roll one die (1d6), subtract one (-1), and cross-reference the result with the type of area entered or the Entry & Contact Table (R233). Most results refer to a specific events paragraph (EOOO). A few refer to a specific rules paragraph with a special listing, and some refer to the “SYST” chart on the Encounter Table, where another 1d6 roll is cross-referenced with the star system you are in now.</p>',
    },
    {
        id: 'R225C',
        title: 'Entry in Stasis',
        content:
            '<p>If you arrive anywhere in a stasis unit because of voluntary or automatic activation (R212E), refer to recovery from stasis table (R240) and roll 1d6 for the result before you continue play.</p>',
    },
    {
        id: 'R226',
        title: 'System Entry Encounters',
        content:
            '<p>Whenever you hyperjump to a new star system you must check for a system entry encounter immediately upon arrival. To do this, refer to the proper system in R207, and roll 1d6. After this event, you can begin moving in your starship to any planet or the asteroids (see R212G).</p>' +
            '<p>Once you undergo the system entry table in R207, you need not check it again until you hyperjump and arrive at a new star system. System entry results are not required if you move from one planet to another (or to/from asteroids) within a star system.</p>',
    },
    {
        id: 'R227',
        title: 'Contact Try Encounters',
        content:
            '<p>Like most enterprising merchants, much of your time will be spent buying and selling items, trying to gain information about the market and general situation, etc. This activity is represented by “contact tries” during a day. The result will be encounters, some of them unpleasant, of course.</p>' +
            '<p>Contact tries are not possible in orbit, or at an asteroid.</p>' +
            '<p>Contact tries during a normal day are entirely voluntary (except in RRR, see R227A below). A contact try is only possible if at least one hour remains in the day. You must leave your vehicle (if any) to make a contact try, but if the resulting event occurs at “dispersed” (long) range, you can return to your vehicle for the start of the event, if desired.</p>' +
            '<p>To make a contact try, cross-reference the area you currently occupy with a 1d6 roll on the Entry & Contact Table R233. The result is either an events paragraph, a reference to a special rules paragraph, or a “SYST” result that refers you to the SYST sector of that same table (R233) where you cross-reference a second 1d6 roll with the star system you are in.</p>' +
            '<p>If you have spent more than one consecutive day in this area, for each consecutive day after the first you add one (+1) to the contact try die roll. Only days in which at least one contact try is attempted may be counted. Should you leave the area, you lose benefit of all days spent there.</p>',
    },
    {
        id: 'R227A',
        title: 'Contact During RRR',
        content:
            '<p>If you spend a day in RRR, or isolated characters spend a day in RRR (R203C), there is a possibility of an encounter roll 1d6: if a “6” results, an encounter occurs. Roll 1d6 again and consult R233. In any contact try encounters, the 1d6 rolls are not modified, regardless of how many days are spent in the area.</p>' +
            '<p>If the contact results in an event that means combat, or causes the persons to go someplace else (even within the same area), all RRR activities for that day are prevented.</p>',
    },
    {
        id: 'R228',
        title: 'Ship’s Papers, Personal ID, and the Wanted List',
        content:
            '<p>You begin the game with a set of official papers identifying yourself and your starship. Any hirelings who join you also have official and valid identification unless otherwise indicated. You start the game “not wanted” in any of the ten star systems, and your papers are valid in all systems.</p>' +
            '<p>Some events or rules indicate that you become “wanted” in that star system. When this occurs, record the fact. Once you are “wanted” in the system, you will remain that way (the police have long memories).</p>' +
            '<p>Some event paragraphs may permit you to obtain new (forged) papers for yourself, your starship, and/or hirelings.</p>' +
            '<p>When traveling under a new name, you will become “unwanted” again, until you do something in that name that causes you to become “wanted.” Of course, while traveling under forged papers you may be discovered, and that alone will be enough to make you “wanted” again, if not arrested outright!</p>' +
            '<p>The use of forged papers means you must keep track of each set of papers, and whether that identity is “wanted” anywhere.</p>',
    },
    {
        id: 'R229',
        title: 'Cargo, Goods, and Services',
        content:
            '<p>Buying and selling items is an important part of being a Star Smuggler, since it’s the main way to become rich. Normally money (Secs, R232A) is used in any transaction, unless the event specifies some sort of trade.</p>',
    },
    {
        id: 'R229A',
        title: 'Buying, Selling, and Salaries',
        content:
            '<p>Most events give specific costs or salaries for goods and services. This price is normally listed as the base price in Secs (S). The base price is modified by the wealth code of the star system, to give the actual price. Wealth codes are listed in R207.</p>' +
            '<p>To determine actual price, roll 1d6 and compare it with the system’s wealth code on the Base Price Multiplier Table (R241). Multiply the result on this table by the base price to get the actual price. For example, a sidearm with a base price of 5 S is available in the Palatek system (wealth 30). With a 1d6 roll of “1”, R241 indicates a multiplier of “x1”, so the price is (5x1=) 5 S. If the 1d6 roll was “6”, the resulting multiplier is “x3”, so the actual cost is (5x3=) 15 S.</p>' +
            '<p>Premium Prices mean, that when consulting R241, increase the wealth code one level (move down one row) and add one to the 1d6 roll (move to the right one column) to get the premium price.</p>' +
            '<p>Devaluated Prices mean that when consulting R241, decrease the wealth code one level (move up one row), and subtract one to the 1d6 (move to the left one column) roll to get the devaluated price.</p>' +
            '<p>Any premium or devalued price modifiers that move the result off the table are ignored (i.e., stay within the limits of the table).</p>',
    },
    {
        id: 'R229B',
        title: 'Carrying & Hiding Items',
        content:
            '<p>All persons, equipment and cargo occupy space, measured in Capacity Units (CUs, see R211). To carry an item, sufficient CU-carrying ability is required. Any items not carried by party members, in one of your vehicles, or in a cache (R229C) are abandoned and lost. Materials in the starship must have the storage location noted. The starship has six 1 CU hiding places that can be used, as well as normal compartments. There are no “hiding places” in other vehicles, in robots, or anywhere else unless indicated in the event. Of course, an item in an activated stasis unit (R212E) cannot be observed or examined.</p>',
    },
    {
        id: 'R229C',
        title: 'Caches',
        content:
            '<p>Some events can cost you much of your current possessions, or cost considerable money. To avoid some of these results, you can cache money or equipment at the end of any day. Caches can only be formed if you did not travel that day.</p>' +
            '<p>When you later return to the area of the cache, you can spend 1d6 hours at the start of the day looking for it. Consult the Cache Table (R242) for the results. As a general rule, asteroids are the best places to cache items.</p>' +
            '<p>Items that require life support will die unless left in a place with life support, or placed within an activated stasis unit (R212E).</p>' +
            '<p>Items that require a continual operating cost in Secs (such as robots) will automatically break down unless placed within an activated stasis unit (R212E).</p>',
    },
    {
        id: 'R229D',
        title: 'Starship Searches',
        content:
            '<p>Some events require a search of the starship (by customs officials, a military patrol, quarantine officers, etc.). When this occurs, roll 2d6 and consult the results below to see which parts of the ship are searched. Anything in those compartments will be found. Items within activated stasis units are normally confiscated by authorities, unless the event indicates otherwise:</p>' +
            '<p><b>Search Results:</b></p>' +
            '<ul>' +
            '<li>2: false accusation (E058)</li>' +
            '<li>3: HL</li>' +
            '<li>4: E, G, Q, and P</li>' +
            '<li>5: E, G, and M</li>' +
            '<li>6: Q only</li>' +
            '<li>7: M only</li>' +
            '<li>8: B and M only</li>' +
            '<li>9: B only</li>' +
            '<li>10: B, Q, and P</li>' +
            '<li>11: HH</li>' +
            '<li>12: searcher is an old acquaintance, you have no difficulties, nothing is actually searched</li>' +
            '</ul>' +
            '<p><b>Results Codes for Searches:</b></p>' +
            '<ul>' +
            '<li>B: boat hold and ship’s boat are searched</li>' +
            '<li>E: engineer compartment is searched</li>' +
            '<li>G: gun turret is searched</li>' +
            '<li>HH: roll 1d6, that number and all higher-numbered secret compartments are discovered and searched</li>' +
            '<li>HL: roll 1d6, that number and all lower-numbered secret compartments are discovered and searched</li>' +
            '<li>M: main cargo hold is searched</li>' +
            '<li>Q: crew’s quarters are searched</li>' +
            '<li>P: pilot’s compartment searched</li>' +
            '</ul>',
    },
    {
        id: 'R230',
        title: 'Combat',
        content:
            '<p>When your character and/or party decide to “fight” opponents, or are forced to fight, the combat rules apply.</p>',
    },
    {
        id: 'R230A',
        title: 'Combat Procedure',
        content:
            '<p>Combat is fought in rounds. Each round represents about 5 minutes of action. The rounds continue until one side escapes, is wiped out (or completely disabled), or the conflict is resolved otherwise as described in the event.</p>' +
            '<p>Each round you decide whether you are trying to escape or not. Then you decide which combat zone you wish to fight at (see R230B), you must already be in dispersed zone, and remain there, to attempt escape. Finally, all attacks are resolved, with ranged weapons firing first in order of tech level (higher tech fires first), and then hand-to-hand attacks in order of hand-to-hand combat skill characteristics (higher characteristic attacks first).</p>' +
            '<p>A character may spend a round doing some special action, such as piloting a vehicle, carrying someone to safety, carrying items in or out of a vehicle, etc. Any such special activity prevents changing zones or making any attacks. The character can still be attacked.</p>',
    },
    {
        id: 'R230B',
        title: 'Combat Zones (Ranges)',
        content:
            '<p>There are two zones, or ranges, of combat: dispersed and contact. When in the dispersed zone, only ranged weapons can be used. When in contact, only hand-to-hand attacks are allowed.</p>' +
            '<p>Contact is determined person by person. Some persons may be in contact, while others remain dispersed. A person may be contacted by someone, while contacting another himself (or contacting no one). Contact occurs voluntarily.</p>' +
            '<h3>Selecting Zones</h3>' +
            '<p>You decide which zones your characters prefer, and against which opponents (see selecting opponents, below). You cannot attempt contact with a hireling who refuses to attack hand-to-hand (see R221).</p>' +
            '<p>Opponents will attempt to make hand-to-hand contact if their hand-to-hand ability exceeds their marksmanship. Otherwise they will try to remain dispersed.</p>' +
            '<h3>Avoiding Contact</h3>' +
            '<p>A character may avoid contact, and force his enemy to remain at dispersed range, if he has a higher hand-to-hand combat ability, and sacrifices any use of ranged fire weapons that round. The enemy can attempt to get into contact with someone else on the following round.</p>' +
            '<p>Note: it is often helpful to list opposing persons in combat, and use pencil arrows to indicate when a character gets in contact (erase it when he or she decides to leave contact).</p>' +
            '<h3>Initial Zone</h3>' +
            '<p>All combat begins at dispersed zone unless the event occurs inside a vehicle, or indicates contact zone specifically. During the first round characters in the dispersed zone cannot close to contact. In addition, surprise may further limit actions (see R230I).</p>',
    },
    {
        id: 'R230C',
        title: 'Selecting Opponents',
        content:
            '<p>Normally people pair off one-against-one in combat, and engage characters in their own zone as much as possible. That is, dispersed persons will pair off and exchange fire, while contact persons will tend to contact each other one-to-one. If the enemy outnumbers you, they will add a second attacker against each target as evenly as possible, etc. If the enemy has inferior numbers, you can decide which they attack, and which remain unattacked.</p>' +
            '<p>You can always order specific people in your party to engage specific targets, including having a number of people “gang up” to attack a single target, even if the enemy is of equal or superior strength. The only exception is that your characters in contact with an enemy must attack that enemy.</p>' +
            '<p>Remember that robots cannot attack, and are simply victims of attacks.</p>',
    },
    {
        id: 'R230D',
        title: 'Ranged Weapon Fire',
        content:
            '<p>Ranged weapons include sidearms, heavy hand weapons, skimmer guns, boat guns, and starship guns. Starship guns use a special firing procedure, see R230L.</p>' +
            '<p>To fire a ranged weapon, add together the weapon’s tech level, and the user’s marksmanship characteristic (R201A). Then roll 2d6, if the result is less than or equal to the total, the weapon hits. Any higher dice roll is a miss. If you hit, and either of the two dice read “6”, it is a critical hit.</p>' +
            '<p>Ranged weapons cannot be fired by a character who contacted another, or who changed zones this round. The only exception is passengers in a vehicle may fire weapons, while the driver controls the vehicle and does the zone-changing for the entire group in that vehicle.</p>' +
            '<p>Ranged weapons fired at a character who was in contact, or contacted by the enemy throughout this round have special problems. When firing into a “continuous contact” situation, if the shot misses its intended target, it will automatically hit the other person instead. As a result, you might hit your friend by accident!</p>',
    },
    {
        id: 'R230E',
        title: 'Damage from Ranged Weapon Hits',
        content:
            '<p>An individual who takes a normal hit from a normal weapon suffers just one hit, and his endurance is reduced by one. When endurance reaches zero the character is dead (see R231).</p>' +
            '<p>An individual who receives a critical hit from a normal weapon must roll 1d6 again: “1” or “6” means he is disabled but loses no endurance (see R231), any other result (2-5) means he receives that many hits, and loses that amount from his endurance. These multiple hits will destroy a utility suit (it will not automatically seal).</p>' +
            '<p>If an individual is hit by an explosive weapon, normal and critical results are ignored. Instead, a special 2d6 roll is made. If the result is 2-7 then that many hits occur. If the result is 8-12, he is disabled from concussion but suffers no endurance loss or hits.</p>' +
            '<p>Note that combat in areas without life support can be very dangerous, since any multiple hit will destroy the suit (prevent it from sealing), and cause death in five minutes. A functioning PS robot with the character will avoid this danger, as will getting the wounded person into a new suit or into a life supported area.</p>',
    },
    {
        id: 'R230F',
        title: 'Sequence of Ranged Weapon Fire',
        content:
            '<p>In each round, all ranged weapons fire before any hand-to-hand attacks are made. Higher tech ranged weapons always fire before lower tech ones. If opposing characters have weapons of the same tech level, the one with higher marksmanship fires first. If both tech level and marksmanship are equal, both fire at the same time — damage takes effect after both shoot. Note that a character disabled or killed before he has a chance to attack will be unable to attack.</p>',
    },
    {
        id: 'R230G',
        title: 'Hand-to-Hand Combat',
        content:
            '<p>A person in contact with an opponent can make a hand-to-hand attack. To determine the result, roll 1d6, add the attacker’s hand-to-hand ability, and from that subtract the target’s hand-to-hand ability.</p>' +
            '<p>If the result is a positive odd number (that is, 1,3,5,7,9 or 11) one hit is scored, and the target’s endurance is reduced by one.</p>' +
            '<p>If the result is “7” exactly, the attacker may disarm the target instead of inflicting one hit. If this occurs, the attacker takes away from the target any weapon he or she has. If the target is carrying an item, disabled person, etc., the attacker can choose to take that instead.</p>' +
            '<p>If the result is “9” or “11” exactly, the target is automatically disabled in addition to suffering a hit.</p>' +
            '<p>If Duke Springer is in hand-to-hand combat, before making his attack, he can make a cunning roll. If he succeeds, he adds 1d6 to his hand-to-hand combat ability. If he fails, his combat ability is unaffected, but his hand-to-hand attack occurs last, regardless of when it would normally occur.</p>',
    },
    {
        id: 'R230H',
        title: 'Sequence of Hand-to-Hand Attacks',
        content:
            '<p>Hand-to-hand attacks occur after all ranged weapon fire is finished. A character who fired a ranged weapon cannot make a hand-to-hand attack. However, a character can change zones and still make a hand-to-hand attack.</p>' +
            '<p>When opposing characters are in contact with each other, the character with the higher hand-to-hand ability attacks first. If both have the same ability, they attack at the same time.</p>',
    },
    {
        id: 'R230I',
        title: 'Surprise',
        content:
            '<p>If a party has surprise in combat (as indicated in the event), the party is allowed one free round of attacks with ranged weapons. The party can make hand-to-hand attacks if they start in contact. During this round the opponents are unable to do anything (being surprised), but those permitted to attack can undertake all normal activities (including escape, if desired).</p>',
    },
    {
        id: 'R230J',
        title: 'Escape',
        content:
            '<p>In a round of combat, you decide to have your party escape. If you decide to escape, none of the characters in your party can make attacks that round, and all must attempt to go to the dispersed zone. At the end of the round, survivors in your party who are neither disabled nor in contact (nor contacted by) any opponent roll 1d6 for escape. If the result is 4 or higher the escape is successful, if the result is 3 or less it fails.</p>' +
            '<p>If the escape is successful, disabled members of your party, or those in contact or contacted by the enemy are lost (captured). If you (Duke Springer) are disabled, in contact, or contacted by the enemy, the escape will fail instead. The escaped characters are assumed to “hide out” in that area for the rest of the day, with no further activities allowed.</p>' +
            '<p>If the escape fails, there is no special effect, the combat continues as if no attempt had been made (although your party did “waste” the round of escape, in that it was unable to fire, etc.).</p>' +
            '<p>Escape inside vehicles is possible by exiting the vehicle (abandoning it). It is impossible to abandon a spaceship in deep space, in orbit, or at an asteroid, as it means certain death (even if one has a utility suit).</p>',
    },
    {
        id: 'R230K',
        title: 'Vehicle Combat on Planet',
        content:
            '<p>When the persons in combat are in vehicles, on either side, all combat is at the dispersed zone unless the vehicle owner(s) voluntarily elect contact. Sidearms and heavy hand weapons can be fired from a skimmer (by someone other than the driver), but not from a ship’s boat or starship. Skimmer guns and boat guns can be fired by anyone in the vehicle except the driver or pilot.</p>' +
            '<p>Personal weapons (sidearms and heavy hand weapons) fired from a skimmer must add two (+2) to the dice roll for hits if the skimmer is stationary and permitting contact, otherwise, they must add five (+5) to the dice roll. In either case, the result is to make hits much harder.</p>' +
            '<p>Skimmer guns and boat guns must add two (+2) to firing dice rolls unless the vehicle is stationary and permitting contact.</p>' +
            '<p>When firing at a target in a vehicle, the hits are always to the vehicle itself, rather than the crew. Sidearms only affect skimmers on a critical hit, and have no effect on a ship’s boat or starship. Heavy hand weapons have full effect against any target except a starship (on which they have no effect). Skimmer guns have full effect against any target except a starship, on which they have no effect. Boat guns (and equivalent military weapons) have full effect against any target except a starship, where they are treated as starship guns of one tech level lower than normal (i.e., if the boat guns are normally tech 4, when firing at a starship they count as tech 3 instead) (see R230L).</p>' +
            '<p>Vehicle Critical Hits: any critical hit effect on a vehicle is resolved by roll 1d6 and consulting R237. The critical hit is in addition to normal hits.</p>' +
            '<p>Vehicle Damage: skimmers and other commercial vehicles are immobilized by the first hit, and destroyed by the second. A ship’s boat is unaffected (aside from critical hit effects) until the fifth hit, which will destroy it. A starship is destroyed on the tenth hit.</p>' +
            '<p>Vehicle Escapes: a party in vehicles that attempts to escape will automatically succeed if entirely in faster vehicles, and will automatically fail if entirely in slower vehicles. You can abandon slower vehicles to make your escape if desired. If both parties have vehicles of equal speed, the normal escape procedure is used.</p>' +
            '<p>Starships are the fastest vehicles present, then ship’s boats, then orbital shuttles, then skimmers, and finally commercial vehicles. Military and police vehicles have the speed of their civilian counterpart.</p>',
    },
    {
        id: 'R230L',
        title: 'Space Combat & Starship Guns',
        content:
            '<p>Only starships or boat guns can fire at other starships or fight in space (i.e., in orbit, arriving, or departing from a star system). Due to the great speeds involved, each combat round is one hour rather than five minutes — it takes that long because weapons are so inaccurate, despite computer control!</p>' +
            '<p>In battle, all space combat is at dispersed zone with ranged weapons. The only exception is that stationary ships (those with engineering area damaged or destroyed, or indicated stationary in an event) may be boarded, in which case individual combat inside the ship can occur instead of space combat.</p>' +
            '<p>Starships are considerably faster than ship’s boats. As a result, any round after the first a starship can elect to “run away” from a ship’s boat, with the result that all boats immediately drop out of combat. If you leave your own boat behind during combat, it is automatically lost.</p>' +
            '<p>Firing Starship Guns in Space: roll 1d6 for each tech level of the starship guns. You roll more or fewer dice in special situations, listed below. If you are reduced to zero dice to roll, a hit is impossible:</p>' +
            '<ul>' +
            '<li>+1d6 roll target is stationary (unwilling or unable to move)</li>' +
            '<li>-1d6 roll firing boat guns</li>' +
            '<li>-1d6 roll target has ECM defenses</li>' +
            '<li>-1d6 roll firing at a target within a planet’s atmosphere</li>' +
            '</ul>' +
            '<p>If the combat is occurring in any planetary land area, it is within atmosphere.</p>' +
            '<p>Hit Effects: if the die roll is “1” or “2” a hit occurs. Note that if more than one die is rolled, more than one hit could occur. If the target has defensive screens (present in some events), only a result of “1” means a hit (2 is a miss). A critical hit occurs if two (or more) “1” results occur, and/or two (or more) “2” results occur (no effect if the target has screens). If 1s and 2s both occur, and the target has no screens, two critical hits occur.</p>' +
            '<p>Each normal hit does one hit of damage on the target. After ten (10) normal hits a starship is destroyed. Each critical hit effect requires an extra 1d6 roll, and R237 consulted for special effects.</p>' +
            '<p>Note: if a starship or boat has both a pilot and gunner, the vehicle can both move and fire at the same time. If it has only one, it can either move or fire, but not both.</p>' +
            '<p>There are only two ways of escaping starship combat in a spaceship or ship’s boat. First, you can escape with a hyperjump (R212A) — impossible for a boat. Second, you can hide on an asteroid, if you are currently “in orbit” in the asteroid belt (R206). To hide, select one of the asteroids to hide, and move there. Each pursuer then rolls 1d6, and goes to the asteroid with that number. If a pursuer arrives at your asteroid, the battle continues, if none arrives, you have escaped them.</p>' +
            '<p>You can try to shake off your pursuer again by returning to orbit and then going again among the asteroids. This represents the huge size of the asteroid belt and the many hiding places present.</p>' +
            '<p>You can also escape space combat by landing the starship or boat in any area (including a space station) and leaving it. Unfortunately, this results in the automatic destruction of the starship or boat.</p>' +
            '<p>Starship guns can be used on planet in normal battles. Since they are computer controlled, the marksmanship of the firer is not used — instead, they have an automatic marksmanship of six (6) whenever any qualified starship gunner operates them.</p>' +
            '<p>Hits are determined using the normal combat procedure (R230D), but if they hit, the result is automatically equivalent to 10 hits on an individual, or 1d6 hits and a critical hit on a vehicle. Note that as a result, a hit by starship guns will normally kill a person, and usually knocks out vehicles.</p>',
    },
    {
        id: 'R231',
        title: 'Wounds & Endurance',
        content:
            '<p>Every person has a number of Endurance points (R201A). This determines how many hits the person can take. Each hit reduces a person’s endurance by one (-1), if endurance reaches zero (0) the person will die unless he receives immediate emergency first aid (R231B). If endurance drops below 0, the person dies instantly, even if first aid is available.</p>' +
            '<p>A person can also become disabled in combat. This means the person is knocked unconscious for the rest of the combat, but is otherwise unaffected. A disabled person can be carried away by friends. If you are disabled in combat, make a cunning roll (R202). If successful, any other survivors in your party will try to escape, carrying you with them. If a failure, the rest of your party will abandon you, they disappear from the game, and you have lost the battle as well.</p>' +
            '<p>Hits suffered in combat heal at the rate of one hit per day spent in RRR (R203B). Of course, a person cannot heal beyond his or her normal endurance level. Recovery from a disablement occurs automatically at the end of combat, no RRR is needed.</p>',
    },
    {
        id: 'R231A',
        title: 'Medical Centers & Accelerated Healing',
        content:
            '<p>A wounded person in an area with a Medical Center can pay for accelerated healing at the center. At a base cost of 15 S per hit in a city medical center, or 25 S per hit in a colony medical center, any number of hits can be healed in one day of RRR. Of course, finances may limit the healing you can purchase! Colony medical centers in star systems with a Tech code of 20 or less cannot heal more than three (3) hits per day, regardless of what you pay, due to limited facilities.</p>',
    },
    {
        id: 'R231B',
        title: 'Emergency First Aid',
        content:
            '<p>Emergency first aid is needed to prevent death if a character is at zero (0) endurance exactly. Emergency first aid is received if the person has a PS robot (R222C) attached, or a medic is present and on the round after the emergency occurs spends his/her entire time giving first aid. Emergency first aid must continue uninterrupted until healing allows the person to regain at least one endurance point, or the person will die after all.</p>',
    },
    {
        id: 'R231C',
        title: 'Calling Medical Aid',
        content:
            '<p>Using the radio/communicator available in any starship or ship’s boat, on a PS robot, or in any land area with life support, you can call for medical aid. You cannot call if you are “wanted” in the system (R228). Medical aid provides immediate emergency first aid at the scene, and immediate transportation to the nearest medical center in the star system.</p>' +
            '<p>To determine the cost of medical aid, count the number of land areas from your position to the nearest medical center. Ignore land steps, simply count areas. If the center is on another planet, count to any spaceport or colony on this planet, and then count one more area to a spaceport (or colony) on the other planet. For each area of distance, multiply by the base cost by three. Thus one area away costs three times (3x) the base price, two areas away costs nine times (3x3x), three areas away 27 times (3x3x3x), etc. If you cannot pay for emergency aid, you are discharged from the medical center after one hit heals and become “wanted” in that system until the debt is paid at any bank in the system (as a result, you could be arrested, etc., and never have a chance to pay later, even if you have the money!).</p>' +
            '<p>When being transported to a medical center by this method, normal entry encounters are ignored. However, the medical aid group will only transport the person who needs healing, not his friends, vehicles, etc.</p>',
    },
    {
        id: 'R232',
        title: 'Record Keeping',
        content:
            '<p>You will need to keep various records during the play of Star Smuggler. In fact, use of metal miniatures, markers, play money, and other aids typical to role-playing games will greatly help. Feel free to make up markers as you need them during the game. Generally, the records should include:</p>' +
            '<ul>' +
            '<li>The current location of yourself, your vehicles, and your party (if isolated from you).</li>' +
            '<li>Characteristics of yourself and your hirelings (R201), including hits from combat, etc.</li>' +
            '<li>Cost of salaries (R220A), insurance (R220B), and personal property of hirelings.</li>' +
            '<li>Your money (R232A), and payment record on your starship loan (R203E). Also note any other special debts, money deposited (and which system the bank is located in), etc.</li>' +
            '<li>Whether you or any of your party are “wanted” in any star system, and the identification papers (including forgeries) available for all (R228).</li>' +
            '<li>Location and contents of each cache of items (R229C).</li>' +
            '<li>List of each vehicle, and the equipment in it, including the location of each item, its tech level (R210), and whether it has any damage or is broken down. This should include fuel units (FUs), repair units (RUs), and life support units (LSUs), as well as number of hypercharges remaining in the starship itself. This should also include items in cargo.</li>' +
            '</ul>',
    },
    {
        id: 'R232A',
        title: 'Monetary System',
        content:
            '<p>The entire Pavonis sector uses a standard currency, technically called Sector Exchange Units, commonly called “Secs” and normally abbreviated “S.” All prices are calculated in Secs unless an event specifically indicates you can trade or barter. Prices vary from system to system for the same item, normally the base price is given and the actual price must be computed (R229A, multiplier table R241).</p>' +
            '<p><strong>Banks</strong></p>' +
            '<p>Whenever you are in an area with banking facilities (R205) you can deposit or withdraw money in a bank account at no charge. However, each bank account is opened and used with a specific set of identification papers. Forged papers are not detected upon deposit, but will be detected upon withdrawal unless you succeed with a Cunning roll (R202). If you become “wanted” in a system, all accounts in that name are frozen and no withdrawals are possible.</p>' +
            '<p>You can have a bank pay certain fees or policies (starship loan payments, death insurance, etc.) at some specified future time. However, a bank requires that money must be deposited into the account for this, plus a 10% extra charge paid for the service (at the time of deposit).</p>' +
            '<p>Banks do not communicate from one star system to another. Each star system has a separate bank. As a result, you may have many separate accounts in various star systems, as well as different accounts (under different names) in the same star system.</p>' +
            '<p><strong>Money Handling</strong></p>' +
            '<p>In addition to bank accounts, you can also carry money on your person, in your starship (the money, regardless of amount, takes up 1 CU of space), and/or place it in a cache (R229C). Spending or receiving money takes no time, but you must actually hand over cash for any purchase. Signed checks, bank drafts, etc., cannot be used — nobody trusts such things in the Pavonis sector! Of course, whenever making a transaction in an area where you have a bank account, you can make an instant withdrawal from your account for the amount needed and pay that. Banking facilities, if available, presume computer-controlled accounts and instant access “money machines” on virtually every street corner!</p>',
    },
    {
        id: 'R233',
        title: 'Entry & Contact Table',
        content:
            '<p>Compare 1d6 roll with area entered, or area where contact try is made. </p>' +
            '<p><strong>Entry Encounter:</strong> Subtract one (-1) from the die roll; for system entry see R207.</p>' +
            '<p><strong>Contact Try:</strong> Add one (+1) per consecutive day of trying in the area.</p>' +
            '<p>(Area Type, 1d6 die roll: 0, 1, 2, 3, 4, 5, 6+)</p>' +
            '<p><strong>City</strong><br />E129, R337, R339, E011, E185, R205A, Syst</p>' +
            '<p><strong>Colony</strong><br />E019, E185, E137, R329, E198, R205B, Syst</strong></p>' +
            '<p><strong>Craters</strong><br />E070, Syst, E140, E196, E085, R205C, E168</p>' +
            '<p><strong>Gambling</strong><br />E006, R331, R334, E014, Syst, R205D, E071</p>' +
            '<p><strong>Industrial</strong><br />E181, R333, E010, R335, E146, R205E, Syst</p>' +
            '<p><strong>Military</strong><br />E059, E077, E003, E086, Syst, R205F, E018</p>' +
            '<p><strong>Mining</strong><br />E181, E005, E190, Syst, E072, R205G, E172</p>' +
            '<p><strong>Palace</strong><br />E059, E199, E012, R336, Syst, E131, E175</p>' +
            '<p><strong>Prison</strong><br />E417, E008, E190, E087, Syst, R205I, E073</p>' +
            '<p><strong>Rough Terrain</strong><br />E154, E015, Syst, E168, E188, E196, E178</p>' +
            '<p><strong>Ruins</strong><br />E150, Syst, E004, E070, E088, R205K, E084</p>' +
            '<p><strong>Rural</strong><br />R338, E016, E005, Syst, E188, R205L, E180</p>' +
            '<p><strong>Scientific</strong><br />E017, E009, E127, E158, R205M, Syst, E075</p>' +
            '<p><strong>Slums</strong><br />E142, R332, R337, E076, E013, R205N, Syst</p>' +
            '<p><strong>Spaceport</strong><br />E019, E409, R330, E185, Syst, E002, R205O</p>' +
            '<p><strong>Space Station</strong><br />E019, Syst, E002, E007, E125, R328, R205P</p>' +
            '<p>(no event if entering or leaving orbit or asteroids, except when entering a new star system, then see R207)</p>' +
            '<p>Syst: if this result occurs, roll again below, compare 1d6 with Star System:</p>' +
            '<p>(System, 1d6 die roll: 1-2, 3-5, 6)</p>' +
            '<p><strong>Regari</strong><br />E122, E147, E192</p>' +
            '<p><strong>Palatek</strong><br />E126, E151, E139</p>' +
            '<p><strong>Byzantium</strong><br />E131, E155, E123</p>' +
            '<p><strong>Imperia</strong><br />E136, E159, E424</p>' +
            '<p><strong>Talitar</strong><br />E141, E134, E191</p>' +
            '<p><strong>Cubro</strong><br />E145, E124, E135</p>' +
            '<p><strong>Uruskop</strong><br />E149, E128, E188</p>' +
            '<p><strong>Nipna</strong><br />E153, E133, E156</p>' +
            '<p><strong>Mynkuria</strong><br />E157, E138, E152</p>' +
            '<p><strong>N. Karma</strong><br />E089, E143, E148</p>',
    },
    {
        id: 'R234',
        title: 'Sector System Connections',
        content:
            '<p>See Star Atlas Player Aids for details on the sector system connections.</p>',
    },
    {
        id: 'R237',
        title: 'Critical Hit Table: Vehicles',
        content:
            '<p><strong>Critical Hits on Starship:</strong></p><ul><li>1 defensive screens break down until repaired</li><li>2 ECM breaks down until repaired</li><li>3 life support systems break down until repaired</li><li>4 communications gear breaks down until repaired</li><li>5 drives break down until repaired</li><li>6 compartment penetrated, all without utility suits killed, those with 1 hit</li><li>For each CU of cargo, roll 1d6, “6” it is destroyed</li><li>(Roll 1d6 for compartment: 1-pilotage, 2-crew quarters, 3-turret, 4-engineering, 5-hold, 6-boat hold)</li></ul><p><em>*If nothing mentioned in effects is aboard, there is no effect.</em></p><p><strong>Critical Hits on Other Vehicles:</strong></p><ul><li>1-2,3 roll for break-down (see R218 for procedure) of vehicle itself</li><li>4 roll for break-down (see R218) of equipment on vehicle</li><li>5-6 each CU of passengers or cargo on vehicles rolls 1d6, 5-6 means resolve weapon hit on that CU</li><li>(Multiple results possible on 2+ CUs if both hit)</li></ul><p><em>*If nothing mentioned in effects is aboard, there is no effect.</em></p>',
    },
    {
        id: 'R238',
        title: 'Entry Detection Table',
        content:
            '<p><strong>Entry Detection Table</strong><br />Determine detection factor from the table below, add or subtract to it depending on the area you are entering, then roll 1d6; entry is not detected if roll is greater than factor; entry is detected if roll is less than or equal to factor; If your entry is detected, see R233 — for complete rules, see R225.</p><p><strong>Means of Star, System’s Tech Code entry</strong></p><table><thead><tr><th></th><th>10-20</th><th>25+30</th><th>40-60</th><th>70+100</th></tr></thead><tbody><tr><td>Foot</td><td>1</td><td>1</td><td>2</td><td>3</td><td></td></tr><tr><td>Commercial</td><td>1</td><td>1</td><td>3</td><td>4</td><td></td></tr><tr><td>Skimmer</td><td>1</td><td>2</td><td>4</td><td>4</td><td></td></tr><tr><td>Ship’s Boat</td><td>2</td><td>3</td><td>4</td><td>5</td><td></td></tr><tr><td>Orbital Shuttle</td><td>2</td><td>3</td><td>5</td><td>6</td><td></td></tr><tr><td>Starship</td><td>3</td><td>4</td><td>5</td><td>6</td><td></td></tr></tbody></table>',
    },
    {
        id: 'R240',
        title: 'Recovery from Stasis Table',
        content:
            '<p><strong>Recovery from Stasis Table</strong><br />Use this table whenever you are in an activated stasis unit (R212E) unless the event or rules indicate otherwise:</p><ul><li>1 your stasis unit not found before galaxy dies, you lose the game</li><li>2 deactivated by aliens 850,000 years in future, die of culture shock</li><li>3 deactivated 1200 years in future, money worthless, see R229 for caches</li><li>4 deactivated 230 years in future, money worthless, see R229 for caches</li><li>5 deactivated 3 years in future, half your money lost due to inflation, see R229 for caches remaining</li><li>6 deactivated 1 year in future, money okay, see R229 for caches</li></ul><p>*start in Scientific Area, Spaceport, or Space Station, whichever is closest to the site where the stasis unit would appear. All items except those within the stasis unit are lost, money on your person is affected by the result, as well as that in the bank.</p>',
    },
    {
        id: 'R241',
        title: 'Base Price Multiplier Table',
        content:
            '<p>Compare 1d6 roll with wealth code to determine base price multiplier; multiplier times base price equals true price; see R229A for complete rules.</p><table><thead><tr><th>Wealth Code</th><th>1</th><th>2</th><th>3</th><th>4</th><th>5</th><th>6</th></tr></thead><tbody><tr><td>0</td><td>x1</td><td>x1</td><td>x1</td><td>x1</td><td>x1</td><td>x1.5</td></tr><tr><td>10</td><td>x1</td><td>x1</td><td>x1</td><td>x1</td><td>x1</td><td>x2</td></tr><tr><td>15</td><td>x1</td><td>x1</td><td>x1</td><td>x1</td><td>x1.5</td><td>x2</td></tr><tr><td>20</td><td>x1</td><td>x1</td><td>x1</td><td>x1</td><td>x2</td><td>x3</td></tr><tr><td>25</td><td>x1</td><td>x1</td><td>x1</td><td>x1.5</td><td>x2</td><td>x3</td></tr><tr><td>30</td><td>x1</td><td>x1</td><td>x1</td><td>x2</td><td>x3</td><td>x3</td></tr><tr><td>40</td><td>x1</td><td>x1</td><td>x1.5</td><td>x2</td><td>x3</td><td>x5</td></tr><tr><td>50</td><td>x1</td><td>x1</td><td>x2</td><td>x3</td><td>x3</td><td>x5</td></tr><tr><td>60</td><td>x1</td><td>x1.5</td><td>x2</td><td>x3</td><td>x5</td><td>x10</td></tr><tr><td>70</td><td>x1</td><td>x2</td><td>x3</td><td>x3</td><td>x5</td><td>x10</td></tr><tr><td>100</td><td>x2</td><td>x3</td><td>x5</td><td>x5</td><td>x10</td><td>x20</td></tr></tbody></table>',
    },
    {
        id: 'R242',
        title: 'Cache Factor and Time Modifiers',
        content:
            '<p>Determine cache factor by adding basic factor and all time modifiers; to recover a cache, 1d6 roll must be greater than the cache factor; see R229C</p>' +
            '<p><strong>Basic Cache Factor</strong><br />0 in Asteroids Area<br />1 in Craters or Ruins Area<br />2 in Mining, Orbit, Rough, or Rural Area<br />3 in City, Colony, Industrial or Scientific Area<br />4 in Military or Slum Area<br />5 in any other land area. Spaceport, Space Station</p><p><strong>Time Modifiers for Cache Factor</strong><br />+1 recover within 10-39 days of placement<br />+2 recover within 40-364 days of placement<br />+3 recover within 1-99 years<br />+4 recover within 100-999 years<br />+5 recover in 1,000 years or longer</p>',
    },
    {
        id: 'R300',
        title: 'Surprise',
        content:
            '<p>Your party surprises those encountered, you can fight (R230) or end the encounter with no event at your option.</p>',
    },
    {
        id: 'R301',
        title: 'Surprise',
        content:
            '<p>Your party surprises those encountered if a 1d6 roll is less than your Cunning, otherwise normal combat occurs (R230).</p>',
    },
    {
        id: 'R302',
        title: 'Surprise',
        content:
            '<p>Your party surprises those encountered if a 1d6 roll is less than or equal to your Cunning, otherwise normal combat occurs (R230).</p>',
    },
    {
        id: 'R303',
        title: 'Surprise',
        content:
            '<p>Your party surprises those encountered if a 1d6 roll is greater than the number of characters in your party, otherwise normal combat occurs (R230).</p>',
    },
    {
        id: 'R304',
        title: 'Surprised',
        content:
            '<p>If a 1d6 roll is less than or equal to your Cunning, you sense danger and combat occurs normally (R230); otherwise, your party is surprised by those you encounter (R230I).</p>',
    },
    {
        id: 'R305',
        title: 'Surprised',
        content:
            '<p>If a 1d6 roll is less than your Cunning, you sense danger and combat occurs normally (R230); otherwise, your party is surprised in combat by those you encounter (R230I).</p>',
    },
    {
        id: 'R306',
        title: 'Surprised',
        content:
            '<p>Those you encounter surprise you and your party in combat (R230I).</p>',
    },
    {
        id: 'R307',
        title: 'Escape',
        content: '<p>Your party escapes combat and the event ends.</p>',
    },
    {
        id: 'R308',
        title: 'Escape',
        content:
            '<p>If a 1d6 roll is less than your Cunning, you and your party escape the encounter and avoid combat, event ends. Otherwise, combat occurs (R230).</p>',
    },
    {
        id: 'R309',
        title: 'Escape',
        content:
            '<p>If your Cunning is higher than a 1d6 roll, you and your party escape and avoid combat, event ends. Otherwise, combat occurs (R230).</p>',
    },
    {
        id: 'R310',
        title: 'Vehicular Escape',
        content:
            '<p>If your party has a vehicle that can move, you escape the encounter and the event ends, otherwise combat occurs (R230).</p>',
    },
    {
        id: 'R311',
        title: 'Vehicular Escape',
        content:
            '<p>If your party has a ship’s boat or starship that can move, you can use it to escape the encounter and the event ends, otherwise combat occurs (R230).</p>',
    },
    {
        id: 'R312',
        title: 'Vehicular Escape',
        content:
            '<p>Combat occurs (R230). However, after the first round, if your party still has a vehicle that can move, you can automatically escape and end both the combat and the event.</p>',
    },
    {
        id: 'R313',
        title: 'Combat',
        content:
            '<p>Combat begins (R230). However, you are unable to attempt escapes, change zones, or avoid contact on the first round unless a 1d6 roll is less than your Cunning.</p>',
    },
    {
        id: 'R314',
        title: 'Combat',
        content:
            '<p>Combat begins (R230). However, you are unable to attempt escapes, change zones, or avoid contact on the first round unless a 1d6 roll is less than your Cunning.</p>',
    },
    {
        id: 'R315',
        title: 'Combat',
        content:
            '<p>Combat begins (R230). However, you are unable to use anything except sidearms and heavy hand weapons during the first round, unless your Cunning is greater than a 1d6 die roll.</p>',
    },
    {
        id: 'R316',
        title: 'Combat',
        content:
            '<p>Combat begins (R230). If your Cunning is greater than a 1d6 roll, your opponents are unable to fire any weapons except sidearms and heavy hand weapons during the first round.</p>',
    },
    {
        id: 'R317',
        title: 'Combat',
        content:
            '<p>Combat begins (R230). If a 1d6 roll is less than your Cunning, your opponents are unable to fire any weapons except sidearms and heavy hand weapons during the first round.</p>',
    },
    {
        id: 'R318',
        title: 'Bribe to Pass (Base Price 20 S)',
        content:
            '<p>Base price amount of bribe is given in event, multiply this by factor obtained in R241. If you pay this bribe, encountered characters let you pass and encounter ends. If you don’t, they become hostile, see R327 and add one (+1) to your dice roll there.</p>',
    },
    {
        id: 'R319',
        title: 'Bribe to Pass (Base Price 25 S)',
        content:
            '<p>Base price amount of bribe is given in event, multiply this by factor obtained in R241. If you pay this bribe, encountered characters let you pass and encounter ends. If you don’t, they become hostile, see R327.</p>',
    },
    {
        id: 'R320',
        title: 'Bribe to Pass (Base Price 30 S)',
        content:
            '<p>Base price amount of bribe is given in event, multiply this by factor obtained in R241. If you pay this bribe, encountered characters let you pass and encounter ends. If you don’t, they might get the jump on you, see R327 and subtract one (-1) from your dice roll there.</p>',
    },
    {
        id: 'R321',
        title: 'Bribe to Pass (Base Price 40 S)',
        content:
            '<p>Base price amount of bribe is given in event, multiply this by factor obtained in R241. If you pay this bribe, encountered characters let you pass and encounter ends. If you don’t, they will attack you from their advantageous position, combat begins (R230) and they have surprise (R230I).</p>',
    },
    {
        id: 'R322',
        title: 'Pass',
        content:
            '<p>Characters lose interest in your party, event ends now.</p>',
    },
    {
        id: 'R323',
        title: 'Pass',
        content:
            '<p>You try to lull their suspicions. If a 1d6 roll is less than your Cunning, they let your party pass and the event ends. Otherwise, at least you’ll have an edge in combat, see R327 and add one (+1) to your dice roll there.</p>',
    },
    {
        id: 'R324',
        title: 'Pass',
        content:
            '<p>They look nasty, but not too bright — you’ll try to talk your way past. If a 1d6 roll is less than your Cunning, they let your party pass and the event ends. Otherwise, combat will start, see R327.</p>',
    },
    {
        id: 'R325',
        title: 'Pass',
        content:
            '<p>They have an unpleasant gleam in their eyes — it’s time to do your nice-guy routine. If a 1d6 roll is less than your Cunning, you succeed, your party passes, and the event ends. Otherwise, go to R327 and subtract one (-1) from your dice roll there.</p>',
    },
    {
        id: 'R326',
        title: 'Pass Unarmed',
        content:
            '<p>Those encountered insist you give up all sidearms and heavy hand weapons your party is carrying. If you do, your party passes and the event ends. If you refuse, go to R327 and subtract one (-1) from the die roll there.</p>',
    },
    {
        id: 'R327',
        title: 'Battle Reference',
        content:
            '<p>You are forced to fight those you encounter. Roll 2d6 and go to the appropriate section:</p><ul><li>2 (or less) R306</li><li>3 R304</li><li>4 R305</li><li>5 R316</li><li>6 R317</li><li>7 R313</li><li>8 R314</li><li>9 R315</li><li>10 R301</li><li>11 R312</li><li>12 (or more) R300</li></ul>',
    },
    {
        id: 'R328',
        title: 'Rumors of Entry',
        content:
            '<p>You hear rumors of how to sneak into someplace. Select any one land area on the planet now, and note this. If you succeed with a Cunning roll (R202) you can determine its truth now, otherwise, determine it when you attempt entry of that area. To determine if the rumor is true, roll 1d6. A result of 1-3 means it is not true, 4-6 means it is true.</p><p>If the rumor is true, add one (+1) to your die roll when checking Entry Detection (rule R225, table R238). You can continue to use this advantage until your entry is detected, at which point this advantage is no longer good.</p>',
    },
    {
        id: 'R329',
        title: 'Map for Entry',
        content:
            '<p>You come across a map that seems to show a way to get into a land area on planet without detection (select now any one land area on the planet as this area). When you attempt entry of that area, you can use this map route. If you do, roll 1d6:</p><ul><li>1: Excellent information, add three (+3) to detection die roll (R225), and may continue to add it until you are detected entering this area.</li><li>2: Good information, add two (+2) to detection die roll (R225), and may continue to add it until you are detected entering this area.</li><li>3: Fair information, add one (+1) to detection die roll (R225), and may continue to add it until you are detected entering this area.</li><li>4: Route has an unmarked trap, you are not detected, but instead see E059 if on foot, E077 if in a vehicle.</li><li>5, 6: Map is wildly inaccurate, makes you look foolish and conspicuous, subtract one (-1) from detection die roll (R226).</li></ul><p>Note: Detection procedure (R225) normally references table R238.</p>',
    },
    {
        id: 'R330',
        title: 'Bribe for Entry (Base Price 25 S)',
        content:
            '<p>You learn the name of whom to bribe for entering one area (you now select the area) on this planet. When you actually enter that area, determine the precise size of bribe needed by multiplying base price by the factor obtained from table R241. By paying this bribe, you are assured of entering the area without detection (do not roll for detection or an entry encounter as normally required by R225).</p>',
    },
    {
        id: 'R331',
        title: 'Opportunity to Buy Items (Base Price 50 S)',
        content:
            '<p>You come across an interesting deal. Roll 1d6 and see the list below for the exact type of item available. For each unit listed below, determine actual price by using rule R229A and table R241. You can buy as many of the item as you can afford.</p><ul><li>1: Case of fine liquors, 1 CU per case.</li><li>2: Case of robot servo motors, 2 CU per case.</li><li>3: Case of sidearm ammunition, 1 CU per case.</li><li>4: Case of expensive clothing, 2 CU per case.</li><li>5: Cage of rare birds, 1 CU per cage, requires continual life support or the birds die and it becomes totally worthless.</li><li>6: Pallet of rare woods, 4 CU per pallet.</li></ul>',
    },
    {
        id: 'R332',
        title: 'Opportunity to Buy Items (Base Price 100 S)',
        content:
            '<p>You come across an interesting offer. Roll 1d6 and see the list below for the exact type of item available. For each unit listed below, determine actual price by using rule R229A and table R241. You can buy as many of the item as you can afford.</p><ul><li>1: Container of radioactives, 4 CU per container. If present in any combat, or in compartment that is hit in combat, the radioactives leak and will inflict one hit per hour for each person in the compartment or vehicle. The radioactives themselves are unaffected and still salable at half price. The contaminated area can be cleaned up at any spaceport, space station, or colony for 5 S per container that was present.</li><li>2: Jar of rare spices, 1 CU per jar.</li><li>3: Stolen art works, 1 CU per work.</li><li>4: Cut gems, every 20 or fraction thereof takes up 1 CU.</li><li>5: Young slaves, 1 CU each and highly illegal everywhere. Requires continual life support or dies and becomes totally worthless.</li><li>6: Antique sidearms, 1 CU each. These will fire, but each time roll 1d6, sidearm explodes on “6” and inflicts 1d6 hits on user. If it fires correctly, consider it a normal Tech level 1 weapon.</li></ul>',
    },
    {
        id: 'R333',
        title: 'Opportunity to Buy Items (Base Price 2d6 x 100 S)',
        content:
            '<p>You have the opportunity to buy the specific item mentioned below. Roll 1d6 to determine which item. You can only buy one. Actual cost is determined by using rule R229A and table R241.</p><ul><li>1: A complete set of papers for a starship and a starship pilot (R228). The papers are a good quality forgery, and take up no CU.</li><li>2: A set of blueprints for a new type of robot, not yet available. These prints can be sold for double the base price in any other star system with Tech code 20 to 60 (determine actual selling price, based on doubled base price, using R229A and R241). Blueprints take up 1 CU of space.</li><li>3: A vintage land vehicle that no longer functions, but is an interesting collector’s item. It may be offered for sale at any palace. When you do, roll 1d6:</li><ul><li>1-3: They aren’t interested in vintage land vehicles.</li><li>4-5: They will pay three times base price (actual price then determined by R229A and R241).</li><li>6: An eager collector offers five times base price (actual price determined by R229A and R241). The vintage vehicle takes up 10 CU.</li></ul><li>4: Software for the military radar computers of this star system. You can attempt to sell them at any military base in any other star system. When you do, roll 1d6 for the result:</li><ul><li>1: Not interested.</li><li>2: Accept them, thank you for your patriotic duty, but pay nothing.</li><li>3: Take them, and arrest you as a spy, go to E130 immediately.</li><li>4: Offer you a base price of 1,000 S for them.</li><li>5: Offer you a base price of 2,000 for them.</li><li>6: Offer you a base price of 10,000 for them. If you have Nipnan or Mynkurian software, add one (+1) to the above die roll, and if you are also selling to Mynkuria or Nipnan add two (+2) to the die roll. Results higher than “6” are still considered “6.” Software takes up 1 CU of space.</li></ul><li>5: Magnificent hypno-gem, that reveals incredible beauty to the viewer, but is very addictive to use. Where laws against addictive drugs exist, this gem is illegal. You must locate an addict to sell it, but will make a grand profit if you do so. Gem in case takes 1 CU.</li><li>6: A Mark III mining mole, complete with spare bearings. This may be sold in any mining area off this planet for a base price of triple the base price for purchase, with actual price determined by R229A and R241. The mole occupies 12 CU. You may reserve the mole for your own use, but this will consume the spare bearings, and halve (1/2) the final selling price. In use, the mole is similar to a skimmer, with an internal capacity of 6 CU. However, it can move underground at the same speed you can walk on foot. If used underground to enter an area, treat as entry on foot with one added (+1) on the Entry Detection die roll (table R238). The maximum speed of the mole is walking on foot, treat riders in it as equivalent to foot speed. It requires one FU per day to run, but has a complete life support system inside that runs whenever fuel is being used. Any qualified skimmer driver can drive the mole. Skimmer guns can be mounted on the mole.</li></ul>',
    },
    {
        id: 'R334',
        title: 'Sell Items (Base Price 50 S)',
        content:
            '<p>You have a chance to sell any of the items listed below, for the base price indicated above. Determine actual price using R229A rules and R241. You may only sell, not purchase: Case(s) of fine liquor, cage(s) of rare birds; heavy hand weapons of any tech level.</p>',
    },
    {
        id: 'R335',
        title: 'Sell Items (Base Price 100 S)',
        content:
            '<p>You have a chance to sell any of the items listed below, for the base price indicated. Determine actual price using rule R229A and table R241. You may only sell, not purchase: Utility suit(s), case(s) of robot servo motors; any undamaged robot, slaves (but not on Cubro or New Karma).</p>',
    },
    {
        id: 'R336',
        title: 'Sell Items (Base Price 100 S)',
        content:
            '<p>You have a chance to sell any of the items listed below, for the base price indicated. Determine actual price using rule R229A and table R241. You may only sell, not purchase:<ul><li>Case(s) of expensive clothing;</li><li>work(s) of art;</li><li>jar(s) of rare spices.</li></ul></p>',
    },
    {
        id: 'R337',
        title: 'Sell Items (Base Price 100 S)',
        content:
            '<p>You have a chance to sell any of the items listed below, for the base price indicated. Determine actual price using rule R229A and table R241. You may only sell, not purchase:</p><ul><li>Ampoules of hallucinogenic drugs;</li><li>Case(s) of fine liquor;</li><li>Sidearm(s) of tech level 5 or 6 only;</li><li>A hypno-gem (will only buy one, but will pay ten times the usual price determined above).</li></ul>',
    },
    {
        id: 'R338',
        title: 'Sell Items (Base Price 50 S)',
        content:
            '<p>You have a chance to sell any of the items listed below, for the base price indicated. Determine actual price using rule R229A and table R241. You may only sell, not purchase:</p><ul><li>Case(s) of sidearm ammunition;</li><li>Case(s) of 6 sidearms;</li><li>Heavy hand weapon(s);</li><li>Skimmer gun(s);</li><li>Pack(s) of 4 fragmentation grenades.</li></ul>',
    },
    {
        id: 'R339',
        title: 'Sell Items (Base Price 100 S)',
        content:
            '<p>You have a chance to sell any of the items listed below, for the base price indicated. Determine actual price using rule R229A and table R241. You may only sell, not purchase:</p><ul><li>Pallet(s) of rare wood, cut gem(s);</li><li>Antique sidearm(s);</li><li>Any one alien artifact;</li><li>Slave(s) only if on Palatek, Byzantium, Imperia, Talitar, Mynkuria.</li></ul>',
    },
]
