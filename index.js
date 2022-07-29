const { Client, Intents } = require('discord.js');

const client = new Client({ intents: [Intents.FLAGS.GUILDS, Intents.FLAGS.GUILD_MESSAGES] });




client.once('ready', () => {
	console.log('Piss bot is officially online');
	client.user.setActivity('"%+help" for help');
});

var sq1s1 = ":blue_square:", sq1s2 = ":blue_square:", sq1s3= ":blue_square:", sq1s4= ":blue_square:", sq1s5= ":blue_square:", sq1s6= ":blue_square:", sq1s7= ":blue_square:", sq1s8= ":blue_square:", sq1s9= ":blue_square:";

client.on('message', function(message) {
	
	function printBoard() {
		message.reply(">>>             |        |\n     "+sq1s1+" | "+sq1s2+" | "+sq1s3+"\n   ------------------\n     "+sq1s4+" | "+sq1s5+" | "+sq1s6+"\n   ------------------\n     "+sq1s7+" | "+sq1s8+" | "+sq1s9+"\n            |        |");
	}
	function reset() {
		sq1s1 = ":blue_square:";
		sq1s2 = ":blue_square:";
		sq1s3 = ":blue_square:";
		sq1s4 = ":blue_square:";
		sq1s5 = ":blue_square:";
		sq1s6 = ":blue_square:";
		sq1s7 = ":blue_square:";
		sq1s8 = ":blue_square:";
		sq1s9 = ":blue_square:";
		printBoard();
	}
	function winGame() {

		// Start of X win conditions
		if (sq1s1 == ":regional_indicator_x:" & sq1s2 == ":regional_indicator_x:" & sq1s3 == ":regional_indicator_x:") {
			message.reply("X wins! Time to reset and start a new game!");
			reset();
		} else if (sq1s4 == ":regional_indicator_x:" & sq1s5 == "regional_indicator_x:" & sq1s6 == "regional_indicator_x:") {
			message.reply("X wins! Time to reset and start a new game!");
			reset();
		} else if (sq1s7 == ":regional_indicator_x:" & sq1s8 == "regional_indicator_x:" & sq1s9 == "regional_indicator_x:") {
			message.reply("X wins! Time to reset and start a new game!");
			reset();
		}
		if (sq1s1 == ":regional_indicator_x:" & sq1s4 == ":regional_indicator_x:" & sq1s7 == ":regional_indicator_x:") {
			message.reply("X wins! Time to reset and start a new game!");
			reset();
		} else if (sq1s2 == ":regional_indicator_x:" & sq1s5 == "regional_indicator_x:" & sq1s8 == "regional_indicator_x:") {
			message.reply("X wins! Time to reset and start a new game!");
			reset();
		} else if (sq1s3 == ":regional_indicator_x:" & sq1s6 == "regional_indicator_x:" & sq1s9 == "regional_indicator_x:") {
			message.reply("X wins! Time to reset and start a new game!");
			reset();
		}
		if (sq1s1 == ":regional_indicator_x:" & sq1s5 == ":regional_indicator_x:" & sq1s9 == ":regional_indicator_x:") {
			message.reply("X wins! Time to reset and start a new game!");
			reset();
		} else if (sq1s3 == ":regional_indicator_x:" & sq1s5 == "regional_indicator_x:" & sq1s7 == "regional_indicator_x:") {
			message.reply("X wins! Time to reset and start a new game!");
			reset();
		}

		// Start of O win conditions
		if (sq1s1 == ":regional_indicator_o:" & sq1s2 == ":regional_indicator_o:" & sq1s3 == ":regional_indicator_o:") {
			message.reply("O wins! Time to reset and start a new game!");
			reset();
		} else if (sq1s4 == ":regional_indicator_o:" & sq1s5 == "regional_indicator_o:" & sq1s6 == "regional_indicator_o:") {
			message.reply("O wins! Time to reset and start a new game!");
			reset();
		} else if (sq1s7 == ":regional_indicator_o:" & sq1s8 == "regional_indicator_o:" & sq1s9 == "regional_indicator_o:") {
			message.reply("O wins! Time to reset and start a new game!");
			reset();
		}
		if (sq1s1 == ":regional_indicator_o:" & sq1s4 == ":regional_indicator_o:" & sq1s7 == ":regional_indicator_o:") {
			message.reply("O wins! Time to reset and start a new game!");
			reset();
		} else if (sq1s2 == ":regional_indicator_o:" & sq1s5 == "regional_indicator_o:" & sq1s8 == "regional_indicator_o:") {
			message.reply("O wins! Time to reset and start a new game!");
			reset();
		} else if (sq1s3 == ":regional_indicator_o:" & sq1s6 == "regional_indicator_o:" & sq1s9 == "regional_indicator_o:") {
			message.reply("O wins! Time to reset and start a new game!");
			reset();
		}
		if (sq1s1 == ":regional_indicator_o:" & sq1s5 == ":regional_indicator_o:" & sq1s9 == ":regional_indicator_o:") {
			message.reply("O wins! Time to reset and start a new game!");
			reset();
		} else if (sq1s3 == ":regional_indicator_o:" & sq1s5 == "regional_indicator_o:" & sq1s7 == "regional_indicator_o:") {
			message.reply("O wins! Time to reset and start a new game!");
			reset();
		}

		// CAT condition
		if (sq1s1 != ":blue_square:" & sq1s2 != ":blue_square:" & sq1s3 != ":blue_square:" & sq1s4 != ":blue_square:" & sq1s5 != ":blue_square:" & sq1s6 != ":blue_square:" & sq1s7 != ":blue_square:" & sq1s8 != ":blue_square:" & sq1s9 != ":blue_square:") {
			message.reply("Its a CAT! Time to reset and start a new game!");
			reset();
		}
	}
	

	if (message.content === '%+sq1s1 x') {
		if (sq1s1 == ":blue_square:") {
			sq1s1 = ':regional_indicator_x:';
			printBoard();
			winGame();
		} else {
			message.reply("That square is already occupied! Try again")
		}
		
	}
	if (message.content === '%+sq1s1 o') {
		if (sq1s1 == ":blue_square:") {
			sq1s1 = ':regional_indicator_o:';
			printBoard();
			winGame();
		} else {
			message.reply("That square is already occupied! Try again");
		}
	}
	if (message.content === '%+sq1s2 x') {
		if (sq1s2 == ":blue_square:") {
			sq1s2 = ':regional_indicator_x:';
			printBoard();
			winGame();
		} else {
			message.reply("That square is already occupied! Try again");
		}
	}
	if (message.content === '%+sq1s2 o') {
		if (sq1s2 == ":blue_square:") {
			sq1s2 = ':regional_indicator_o:';
			printBoard();
			winGame();
		} else {
			message.reply("That square is already occupied! Try again");
		}
	}
	if (message.content === '%+sq1s3 x') {
		if (sq1s3 == ":blue_square:") {
			sq1s3 = ':regional_indicator_x:';
			printBoard();
			winGame();
		} else {
			message.reply("That square is already occupied! Try again");
		}
	}
	if (message.content === '%+sq1s3 o') {
		if (sq1s3 == ":blue_square:") {
			sq1s3 = ':regional_indicator_o:';
			printBoard();
			winGame();
		} else {
			message.reply("That square is already occupied! Try again");
		}
	}
	if (message.content === '%+sq1s4 x') {
		if (sq1s4 == ":blue_square:") {
			sq1s4 = ':regional_indicator_x:';
			printBoard();
			winGame();
		} else {
			message.reply("That square is already occupied! Try again");
		}
	}
	if (message.content === '%+sq1s4 o') {
		if (sq1s4 == ":blue_square:") {
			sq1s4 = ':regional_indicator_o:';
			printBoard();
			winGame();
		} else {
			message.reply("That square is already occupied! Try again");
		}
	}
	if (message.content === '%+sq1s5 x') {
		if (sq1s5 == ":blue_square:") {
			sq1s5 = ':regional_indicator_x:';
			printBoard();
			winGame();
		} else {
			message.reply("That square is already occupied! Try again");
		}
	}
	if (message.content === '%+sq1s5 o') {
		if (sq1s5 == ":blue_square:") {
			sq1s5 = ':regional_indicator_o:';
			printBoard();
			winGame();
		} else {
			message.reply("That square is already occupied! Try again");
		}
	}
	if (message.content === '%+sq1s6 x') {
		if (sq1s6 == ":blue_square:") {
			sq1s6 = ':regional_indicator_x:';
			printBoard();
			winGame();
		} else {
			message.reply("That square is already occupied! Try again");
		}
	}
	if (message.content === '%+sq1s6 o') {
		if (sq1s6 == ":blue_square:") {
			sq1s6 = ':regional_indicator_o:';
			printBoard();
			winGame();
		} else {
			message.reply("That square is already occupied! Try again");
		}
	}
	if (message.content === '%+sq1s7 x') {
		if (sq1s7 == ":blue_square:") {
			sq1s7 = ':regional_indicator_x:';
			printBoard();
			winGame();
		} else {
			message.reply("That square is already occupied! Try again");
		}
	}
	if (message.content === '%+sq1s7 o') {
		if (sq1s7 == ":blue_square:") {
			sq1s7 = ':regional_indicator_o:';
			printBoard();
			winGame();
		} else {
			message.reply("That square is already occupied! Try again");
		}
	}
	if (message.content === '%+sq1s8 x') {
		if (sq1s8 == ":blue_square:") {
			sq1s8 = ':regional_indicator_x:';
			printBoard();
			winGame();
		} else {
			message.reply("That square is already occupied! Try again");
		}
	}
	if (message.content === '%+sq1s8 o') {
		if (sq1s8 == ":blue_square:") {
			sq1s8 = ':regional_indicator_o:';
			printBoard();
			winGame();
		} else {
			message.reply("That square is already occupied! Try again");
		}
	}
	if (message.content === '%+sq1s9 x') {
		if (sq1s9 == ":blue_square:") {
			sq1s9 = ':regional_indicator_x:';
			printBoard();
			winGame();
		} else {
			message.reply("That square is already occupied! Try again");
		}
	}
	if (message.content === '%+sq1s9 o') {
		if (sq1s9 == ":blue_square:") {
			sq1s9 = ':regional_indicator_o:';
			printBoard();
			winGame();
		} else {
			message.reply("That square is already occupied! Try again");
		}
	}
	if (message.content==="%+reset") {
		reset();
	}
	if (message.content==="%+printboard") {
		printBoard();
	}


	if (message.content === '%+help') {
		message.reply(' >>> **Commands:**\n\n**%+help** - Shows this screen.\n**%+funfact** - Gives a random space fun fact.\n**%+complimentme** - Compliments you :)\n**%+insultme** - Insults you >:)\n**%+tictactoe help:** - Shows you how to play Piss Bot`s tic-tac-toe');
	}
	if (message.content === '%+tictactoe help') {
		message.reply(' >>> **How to play:**\n\n           |            |\n sq1s1 | sq1s2 | sq1s3\n------------------------\nsq1s4 | sq1s5 | sq1s6\n------------------------\nsq1s7 | sq1s8 | sq1s9\n           |            |\n\n*Command:* %+<square_name> <x/o>\n***Example:***\n\n**Before:**  \n            |        |\n     :blue_square: | :blue_square: | :blue_square: \n------------------------\n     :blue_square: | :blue_square: | :blue_square:\n------------------------\n     :blue_square: | :blue_square: | :blue_square:\n            |        |\n*Command:* %+sq1s1 x\n\n**After:** \n            |        |\n     :regional_indicator_x: | :blue_square: | :blue_square: \n------------------------\n     :blue_square: | :blue_square: | :blue_square:\n------------------------\n     :blue_square: | :blue_square: | :blue_square:\n            |        |');
	}
	if (message.content === 'test') {
		const i = 5;
		while (i != 5) {
			client.channels.cache.get("942262570302189608").send("hello world");
			i+=1;
		}
	}
	

	if (message.content === '%+funfact') {
		const funfacts = [
			'>>> **\nDid you know this about space?** \n\nMercury & Venus are the only 2 planets in our solar system that have no moons!',
			'>>> **\nDid you know this about space?** \n\nIf a star passes too close to a black hole, it can be torn apart!',
			'>>> **\nDid you know this about space?** \n\nThe hottest planet in our solar system is Venus!',
			'>>> **\nDid you know this about space?** \n\nOur solar system is 4.57 billion years old!',
			'>>> **\nDid you know this about space?** \n\nEnceladus, one of Saturn`s smaller moons, reflects 90% of the Sun`s light!',
			'>>> **\nDid you know this about space?** \n\nThe highest mountain discovered is the Olympus Mons, which is located on Mars!',
			'>>> **\nDid you know this about space?** \n\nThe Whirlpool Galaxy (M51) was the first celestial object identified as being spiral!',
			'>>> **\nDid you know this about space?** \n\nA light year is the distance covered by light in a single year!',
			'>>> **\nDid you know this about space?** \n\nThe Milky Way galaxy is 105,700 light-years wide!',
			'>>> **\nDid you know this about space?** \n\nThe Sun weighs about 330,000 times more than Earth!',
			'>>> **\nDid you know this about space?** \n\nFootprints left on the moon wont dissapear as there is no wind!',
			'>>> **\nDid you know this about space?** \n\nBecause of lower gravity, a person who weighs 220 lbs on earth would weigh 84 lbs on Mars!',
			'>>> **\nDid you know this about space?** \n\nThere are 79 known moons orbiting Jupiter!',
			'>>> **\nDid you know this about space?** \n\nThe Martian day is 24 hours 39 minutes and 35 seconds long!',
			'>>> **\nDid you know this about space?** \n\nNASA`s Crater Observation and Sensing Satellite (LCROSS) found evidence of water on the Earth`s Moon!',
			'>>> **\nDid you know this about space?** \n\nThe sun makes a full rotation once every 23 - 35 days!',
			'>>> **\nDid you know this about space?** \n\nEarth is the only planet not named after a God!',
			'>>> **\nDid you know this about space?** \n\nDue to the Sun and Moon`s gravitational pull, we have tides!',
			'>>> **\nDid you know this about space?** \n\nPluto is smaller than the United States!',
			'>>> **\nDid you know this about space?** \n\nAccording to mathematics, white holes are possible, although as of yet we have found none!',
			'>>> **\nDid you know this about space?** \n\nThere are more volcanoes on Venus than any other planet in our solar system!',
			'>>> **\nDid you know this about space?** \n\nUranus` blue glow is due to the gases in its atmosphere!',
			'>>> **\nDid you know this about space?** \n\nIn our solar system there are 4 planets known as gas giants: Jupiter, Saturn, Uranus & Neptune!',
			'>>> **\nDid you know this about space?** \n\nUranus has 27 moons that have been discovered so far!',
			'>>> **\nDid you know this about space?** \n\nBecause of its unique tilt, a season on Uranus is equivalent to 21 Earth years!',
			'>>> **\nDid you know this about space?** \n\nNeptune`s moon, Triton, orbits the planet backwards!',
			'>>> **\nDid you know this about space?** \n\nTriton is gradually getting close to the planet it orbits!',
			'>>> **\nDid you know this about space?** \n\nThere are more stars in space than there are grains of sand in the world!',
			'>>> **\nDid you know this about space?** \n\nNeptune takes nearly 165 Earth years to make one orbit of the Sun!',
			'>>> **\nDid you know this about space?** \n\nPluto`s largest moon, Charon, is half the size of Pluto!',
			'>>> **\nDid you know this about space?** \n\nThe International Space Station is the largest manned object ever sent into space!',
			'>>> **\nDid you know this about space?** \n\nA day on Pluto is 153.6 hours long!',
			'>>> **\nDid you know this about space?** \n\nSaturn is the second largest planet in our solar system!',
			'>>> **\nDid you know this about space?** \n\nAny free-moving liquid in outer space will form itself into a sphere!',
			'>>> **\nDid you know this about space?** \n\nMercury, Venus, Earth & Mars are known as the "inner planets"!',
			'>>> **\nDid you know this about space?** \n\nWe know more about Mars and our Moon than we do about our oceans!',
			'>>> **\nDid you know this about space?** \n\nThe Black Arrow is the only British satellite to be launched using a British rocket!',
			'>>> **\nDid you know this about space?** \n\nOnly 5% of the universe is visible from Earth!',
			'>>> **\nDid you know this about space?** \n\nLight travels from the Sun to the Earth in less than 10 minutes!',
			'>>> **\nDid you know this about space?** \n\nAt any given moment, there are at least 2,000 thunderstorms happening on Earth!',
			'>>> **\nDid you know this about space?** \n\nThe Earth`s rotation is slowing slightly as times goes on!',
			'>>> **\nDid you know this about space?** \n\nIf you were driving at 75 miles per hour, it would take 258 days to drive around Saturn`s rings!',
			'>>> **\nDid you know this about space?** \n\nOuter Space is only 62 miles away!',
			'>>> **\nDid you know this about space?** \n\nThe Internation Space Station circles Earth every 92 minutes!',
			'>>> **\nDid you know this about space?** \n\nStars twinkle because of the way light is disrupted as it passes through Earth`s atmosphere!',
			'>>> **\nDid you know this about space?** \n\nWe always see the same side of the moon, no matter where we stand on Earth!',
			'>>> **\nDid you know this about space?** \n\nThere are three main types of galaxies: elliptical, spiral & irregular!',
			'>>> **\nDid you know this about space?** \n\nThere are approximately 100 thousand million stars in the Milky Way!',
			'>>> **\nDid you know this about space?** \n\nUsing the naked eye, you can see 3 - 7 galaxies from Earth!',
			'>>> **\nDid you know this about space?** \n\nIn 2016, scientists detected a radio signal from a source 5 billion light-years away!',
			'>>> **\nDid you know this about space?** \n\nThe closest galaxy to us is the Andromeda Galaxy - it`s estimated at 2.5 million light-years away!',
			'>>> **\nDid you know this about space?** \n\nThe first Supernovae observed outside of our own galaxy was in 1885!',
			'>>> **\nDid you know this about space?** \n\nThe first-ever black hole photographed is 3 million times the size of Earth!',
			'>>> **\nDid you know this about space?** \n\nThe distance between the Sun & Earth is defined as an Astronomical Unit!',
			'>>> **\nDid you know this about space?** \n\nThe second man on the moon was Buzz Aldrin. "Moon" was Aldrin`s mother`s maiden name!',
			'>>> **\nDid you know this about space?** \n\nBuzz Aldrin`s birth name was Edwin Eugene Aldrin Jr.!',
			'>>> **\nDid you know this about space?** \n\nOn Venus, it snows metal and rains sulfuric acid!',
			'>>> **\nDid you know this about space?** \n\nThe Mariner 10 was the first spacecraft that visited Mercury in 1974!',
			'>>> **\nDid you know this about space?** \n\nSpace is completely silent!',
			'>>> **\nDid you know this about space?** \n\nCoca-Cola was the first commercial soft drink that was ever consumed in space!',
			'>>> **\nDid you know this about space?** \n\nAstronauts can grow approximately two inches (5 cm) in height when in space!',
			'>>> **\nDid you know this about space?** \n\nThe Kuiper Belt is a region of the Solar System beyond the orbit of Neptune!',
			'>>> **\nDid you know this about space?** \n\nThe first woman in space was a Russion called Valentina Tereshkova!',
			'>>> **\nDid you know this about space?** \n\nIf Saturn`s rings were 3 feet long, they would be 10,000 times thinner than a razor blade!',
			'>>> **\nDid you know this about space?** \n\nThe Hubble Space Telescope is one of the most productive scientific instruments ever built!',
			'>>> **\nDid you know this about space?** \n\nThe first artificial satellite in space was called "Sputnik"!',
			'>>> **\nDid you know this about space?** \n\nExoplanets are planets that orbit around other stars!',
			'>>> **\nDid you know this about space?** \n\nThe center of the Milky Way smells like rum & tastes like raspberries!',
			'>>> **\nDid you know this about space?** \n\nOur moon is moving away from Earth at a rate of 1.6 inches (4 cm) per year!',
			'>>> **\nDid you know this about space?** \n\nPluto is named after the Roman god of the underworld, not the Disney Dog!',
			'>>> **\nDid you know this about space?** \n\nSpacesuit helmets have a Velcro patch, to help astronauts itch!',
			'>>> **\nDid you know this about space?** \n\nThe ISS is visible to more than 90% of the Earth`s population!',
			'>>> **\nDid you know this about space?** \n\nSaturn is the only planet that could float in water!',
			'>>> **\nDid you know this about space?** \n\nAsteroids are the byproducts of formations in the solar system, more than 4 billion years ago!',
			'>>> **\nDid you know this about space?** \n\nAstronauts can`t burp in space!',
			'>>> **\nDid you know this about space?** \n\nUranus was originally called "George`s Star"!',
			'>>> **\nDid you know this about space?** \n\nA sunset on Mars is blue!',
			'>>> **\nDid you know this about space?** \n\nThe Earth weighs about 81 times more than the moon!',
			'>>> **\nDid you know this about space?** \n\nThe first living mammal to go into space was a dog named "Laika" from Russia!',
			'>>> **\nDid you know this about space?** \n\nThe word "astronaut" means "star sailor" in its origins!',
			'>>> **\nDid you know this about space?** \n\n"NASA" stands for National Aeronautics and Space Administration!',
			'>>> **\nDid you know this about space?** \n\nGennady Padalka has spent more time in space than anyone else!',
			'>>> **\nDid you know this about space?** \n\nMercury has no atmosphere, which means there is no wind or weather!',
			'>>> **\nDid you know this about space?** \n\nIn China, the Milky War is known as the "Silver River"!',
			'>>> **\nDid you know this about space?** \n\nRed Dwarf stars that are low in mass cna burn continually for up to 10 trillion years!',
			'>>> **\nDid you know this about space?** \n\nScientists once believed that the same side of Mercury always faced the Sun!',
			'>>> **\nDid you know this about space?** \n\nJupiter`s Red Spot is shrinking!',
			'>>> **\nDid you know this about space?** \n\nA large percentage of asteroids are pulled in by Jupiter`s gravity!',
			'>>> **\nDid you know this about space?** \n\nA day on Mercury is equivalent to 58 Earth days!',
			'>>> **\nDid you know this about space?** \n\nAs space has no gravity, pens won`t work!',
			'>>> **\nDid you know this about space?** \n\nOn average it takes the light only 1.3 seconds to travel from the Moon to Earth!',
			'>>> **\nDid you know this about space?** \n\nThere are 88 recognized star constellations in our night sky!',
			'>>> **\nDid you know this about space?** \n\nThe center of a comet is also called a "nucleus"!',
			'>>> **\nDid you know this about space?** \n\nAs early as 240BC the Chinese began to document the appearance of Halley`s Comet!',
			'>>> **\nDid you know this about space?** \n\nIn 2006, the International Astronomical Union reclassified Pluto as a dwarf planet!',
			'>>> **\nDid you know this about space?** \n\nThere are 5 Dwarf Planets recognized in our Solar System!',
			'>>> **\nDid you know this about space?** \n\nMars is the most likely planet in our solar system to be hospitable to life!',
			'>>> **\nDid you know this about space?** \n\nHalley`s Comet will pass over Earth again on July 26th, 2061!',
			'>>> **\nDid you know this about space?** \n\nThere is a planet half the radius of the earth with a surface made up of diamonds!',
			'>>> **\nDid you know this about space?** \n\nBuzz Lightyear from *Toy Story* has actually been to outer space!',
		];
		const response = funfacts[Math.floor(Math.random() * funfacts.length)];
		message.reply(response);
	}
	if (message.content === '%+complimentme') {
		const compliments = [
			'You always manage to make someone smile when they feel down.',
			'You`re one of those rare people that everybody loves.',
			'You have incredible taste in style.',
			'You let people feel like they`re at home when they`re with you.',
			'Your dedication and drive is impeccable.',
			'You don`t need highlighter because you glow from within.',
			'You`re the only person someone would trust their secrets with.',
			'You`re really funny, I even enjoy your "*bad jokes*."',
			'You inspire others to be a better person.',
			'Your positivity is infectous',
			'If more people were like you, the world would be a better place.',
			'I bet you were the kid in kindergarten everyone shared their candy with.',
			'You`re way smarter than you admit to yourself.',
			'People love you for how courageous you are.',
			'Thank you for being there for other people. They appreciate you to an unlimited extent.'
		]
		const response2 = compliments[Math.floor(Math.random() * compliments.length)];
		message.reply(response2);
	}
	if (message.content === '%+insultme') {
		const insults = [
			'>>> Even your rubber duck stops smiling when he`s around you.',
			'>>> OK JD lookin-ass',
			'>>> You know, God created everyone beautiful... So who in the hell made you?',
			'>>> You can do anything you put your mind to. Just not this.',
			'>>> You`re in the friend zone. Now stay there.',
			'>>> Sis really went "I inspire people to chase their dreams. Not yours though."',
			'>>> You put the flaw in flawless.',
			'>>> All of these comments are so mean... Listen to them.',
			'>>> You ate this up. I recommend starving though.',
			'>>> This is your calling, but I think you should hang up',
			'>>> This must`ve taken a lot of guts to say. Maybe you should listen to it next time.',
			'>>> Bob Ross would say "You`re an unhappy accident."',
			'>>> You go girl!.. No literally. Leave.',
			'>>> Everyone has a talent. Except for you.',
			'>>> Look on the bright side. Hope it blinds you.'
		]
		const response3 = insults[Math.floor(Math.random() * insults.length)];
		message.reply(response3);
	}
});
 
client.login(''); //must be last line in file
