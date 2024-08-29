let INFO = {
	main: {
		title: "Ian Kleinfeld, Software Developer, Front End Engineer, with a deep UX, UI, and Design background",
		name: "Ian Kleinfeld",
		email: "mydesignguy@gmail.com",
		logo: "logo.jpg",
	},

	socials: {
		github: "https://github.com/evilgeniuscreative/",
		linkedin: "https://linkedin.com/in/iankleinfeld",
		stackoverflow: "https://stackoverflow.com/users/1067156/maxrocket",
	},

	homepage: {
		title: "Experienced, multifaceted, creative, committed Front-End Developer, Designer, and UX/UI Specialist.",
		description:
			'I am a mid-to-senior front end developer and designer as well as a junior back end engineer, with a long UX/UI/Design history. I have 10+ years of experience who enjoys working with collaborative Agile teams, in an "we all win together" environment, with a deep passion for learning new tech and other modern magic.',
	},

	about: {
		title: "Ian Kleinfeld, Software Developer, Front End Engineer, with a deep UX, UI, and Design background.",
		description:
			"I can't even remember how many projects I've worked on over the years for private clients or companies or just for fun. But I always learn a lot of new skills and I love it. Each project is a chance to learn something new about technology, design, people, business, and more. Over the years, I've learned everything from the most basic HTML and CSS to arcane and nearly archaic languages like Freemarker, to battleship size CMSs like Khoros Community or Adobe AEM, to cutting edge web dev modern stacks like React, and Vue, with or without Typescript.",
	},

	designs: {
		title: "I'm passionate about learning, people, and software development / coding as a team sport.",
		description: "Coming soon .",
	},

	animations: {
		title: "Animations for Rally Software explaining Agile Metrics",
		description:
			"A series of animations explaining agile metrics for rally software, to give an idea of how each major agile metric is explaining measured and relates to team performance.",
	},
	showImage: {
		title: "Project Image",
		description:
			"Image of a project I worked on that is either a poster or a website that offline",
	},
	projects: [
		{
			id: "TURBOTAX",
			title: "Intuit Turbotax Out-of-Product-Help Community",
			type: "both",
			thumb: "images/thumb-intuit.png",
			description:
				"Enhancing the Intuit Khoros Community, integrating  with various other Intuit apps: React library, data pulled with GraphQL,  A/B/C/D live user testing, Splunk queries &amp; user dashboards, and more.",
			logos: [
				{
					id: "449",
					software: "Khoros Community",
					img: "images/khoros.png",
				},
				{
					id: "995",
					software: "React",
					img: "images/react.png",
				},
				{
					id: "7654",
					software: "Splunk",
					img: "images/splunk.png",
				},
				{
					id: "891",
					software: "Freemarker",
					img: "images/freemarker.png",
				},
				{ id: "882", software: "jQuery", img: "images/jquery.png" },
				{ id: "875", software: "JSON", img: "images/json.png" },
				{ id: "865", software: "SCSS", img: "images/sass.png" },
			],
			linkText: "View Project",
			link: "https://ttlc.intuit.com/community/lower-your-debt/discussion/how-or-what-can-i-do-to-lower-my-debts/00/1882396",
		},
		{
			id: "NCDOT",
			title: "Vue vs Google Maps using NCDOT data",
			type: "both",
			thumb: "images/thumb-ncdot.png",
			description:
				"Project just for fun pulling data from the North Carolina Department of transportation's open APIs. Users can discover the traffic and construction incidents around the state via Google Maps.",
			logos: [
				{ id: "0", software: "Vue", img: "images/vuejs.png" },
				{ id: "99", software: "HTML", img: "images/html5.png" },
				{ id: "98", software: "SCSS", img: "images/sass.png" },
			],
			linkText: "View Project",
			link: "https://evilgeniuscreative.com/demo_ncdot/",
		},

		{
			id: "FIDELITY",
			title: "Fidelity Net Benefits Homepage",
			type: "both",
			thumb: "images/thumb-fidelity.png",
			description:
				"Worked with a small team of developers and designers to create the Fidelity net, benefits, designs, and markups in a combination of JavaScript, jQuery, Backbone.js, and SCSS. Image only.",
			logos: [
				{ id: "1", software: "HTML5", img: "images/html5.png" },
				{ id: "97", software: "SCSS", img: "images/sass.png" },
				{
					id: "96",
					software: "Javascript",
					img: "images/javascript.png",
				},
			],
			linkText: "View Site demo design",
			link: "https://evilgeniuscreative.com/Fidelity/",
		},
		{
			id: "AGILE",
			title: "Agile Metrics Explanation Animations",
			type: "both",
			thumb: "images/thumb-animation.png",
			description:
				"Animated introductions explaining the basics of multiple Agile Metrics data analysis and performance tracking types for Rally Software. These were placed in the information section of the Rally site to help customer understanding.",
			logos: [
				{
					id: "3211",
					software: "Edge Animate",
					img: "images/edgeanimate.png",
				},
			],
			linkText: "View Project",
			link: "/animation",
		},
		{
			id: "BDIT",
			title: "Best Diners in Town: Atlanta",
			type: "print",
			thumb: "images/thumb-bdit.jpg",
			description:
				"A graphic design magazine project introducing Atlanta Restaurants for those who paid to be included in the final printing, to be distributed around Atlanta for promotion. Designed entire magazine.	",
			logos: [
				{
					id: 96813,
					software: "Adobe InDesign",
					img: "images/icon-id.png",
				},
			],
			linkText: "View Magazine",
			link: "http://evilgeniuscreative.com/portfolio/pdf/bdit.php",
		},
		{
			id: "COFFEE",
			title: "Coffee Price Report",
			type: "print",
			thumb: "images/thumb-coffee-report.png",
			file: "images/print/coffee-report.jpg",
			description:
				"A graphic design project for a Coffee Futures report as an add-on product for aWhere for investors, based on weather and farming data from coffee growing regions around the world. Designed entire report format.	",
			logos: [
				{
					id: 93813,
					software: "Adobe InDesign",
					img: "images/icon-id.png",
				},
			],
			linkText: "View Report",
			link: "http://evilgeniuscreative.com/portfolio/pdf/coffee.php",
		},
		{
			id: "JMP",
			title: "JMP User Community",
			type: "both",
			thumb: "images/thumb-jmpcom.png",
			description:
				"Among many dozens of custom components for the JMP Community, created a project and react to allow users to sort articles buy up to six different labels, when out of the box, the limitation was one built a react application on top of a free marker component to make this happen.",
			logos: [
				{
					id: "3",
					software: "Khoros Community",
					img: "images/khoros.png",
				},
				{ id: "94", software: "React", img: "images/react.png" },
				{ id: "93", software: "Vue", img: "images/vuejs.png" },
				{ id: "997", software: "Angular", img: "images/angular.png" },
				{
					id: "998",
					software: "Typescript",
					img: "images/typescript.png",
				},
				{
					id: "92",
					software: "Freemarker",
					img: "images/freemarker.png",
				},
				{
					id: "90",
					software: "Javascript",
					img: "images/javascript.png",
				},
				{ id: "90", software: "jQuery", img: "images/jquery.png" },
			],
			linkText: "View JMP Community site",
			link: "https://community.jmp.com",
		},

		{
			id: "EA",
			title: "EA Answers Community Mega Menu",
			type: "dev",
			thumb: "images/thumb-ea.png",
			description:
				'As complicated as this "All Boards" mega menu looks, creating it was even more complicated, with data, based on both the site structure, JSON objects, and the number of crazy API algorithms in Freemarker, built in Khoros Community',
			logos: [
				{
					id: "4",
					software: "Khoros Community",
					img: "images/khoros.png",
				},
				{
					id: "89",
					software: "Freemarker",
					img: "images/freemarker.png",
				},
				{ id: "88", software: "jQuery", img: "images/jquery.png" },
				{ id: "87", software: "JSON", img: "images/json.png" },
				{ id: "86", software: "SCSS", img: "images/sass.png" },
			],
			linkText: "View EA site and menu",
			link: "https://answers.ea.com/t5/Answer-HQ-English/ct-p/AHQ-English",
		},
		{
			id: "ROKU",
			title: "Roku Community Homepage Tiles",
			type: "devui",
			thumb: "images/thumb-roku.png",
			description:
				"New icon designs and functionality for Roku's community homepage navigation tiles, built in Khoros Community with small bits of UI to engage visitors. Big improvement on original.",
			logos: [
				{
					id: "5",
					software: "Khoros Community",
					img: "images/khoros.png",
				},
				{
					id: "85",
					software: "Freemarker",
					img: "images/freemarker.png",
				},
				{ id: "84", software: "SCSS", img: "images/sass.png" },
			],
			linkText: "View Roku site and tiles",
			link: "https://community.roku.com",
		},
		{
			id: "FARMING",
			title: "The Future of Farming Poster",
			type: "print",
			thumb: "images/thumb-awhere-future-of-farming.jpg",
			description:
				"This is a poster graphic design for defunct company aWhere, which was a weather reporting company for third-world farmers. This poster was for a conference in Nairobi on Farming Tech. (2015).",
			logos: [
				{
					id: 96813,
					software: "Adobe InDesign",
					img: "images/icon-id.png",
				},
			],
			image: "farming.jpg",
			linkText: "View Poster image",
			link: "showimage/FARMING",
		},
		{
			id: "BRUNSWICK",
			title: "Brunswick Boating Communities",
			type: "devui",
			thumb: "images/thumb-brunswick.png",
			description:
				"Four Khoros Communities built within a single Community CMS using top-level categories for boating company and association Brunswick's Sea Ray Boats, Mercury Racing, Boston Whaler, and Ripl.",
			logos: [
				{
					id: "6",
					software: "Khoros Community",
					img: "images/khoros.png",
				},
				{
					id: "83",
					software: "Freemarker",
					img: "images/freemarker.png",
				},
				{ id: "82", software: "SCSS", img: "images/sass.png" },
			],
			linkText: "View Community site",
			link: "https://community.brunswick.com/",
		},

		{
			id: "MACMILLAN",
			title: "Macmillan Communities redesign",
			type: "devui",
			thumb: "images/thumb-mcmillan.png",
			description:
				"Integrated a custom menu slide-out that wraps the entire Khoros Community page content, and is populated both by site structure and via JSON for off-community pages. The custom sections are Browse, About, and Help, and the same for their sister sites.",
			logos: [
				{ id: "7", software: "somename", img: "images/khoros.png" },
				{
					id: "81",
					software: "Freemarker",
					img: "images/freemarker.png",
				},
				{ id: "80", software: "SCSS", img: "images/sass.png" },
				{
					id: "79",
					software: "Javascript",
					img: "images/javascript.png",
				},
			],
			linkText: "View Community site",
			link: "https://community.macmillanlearning.com/t5/macmillan-community/ct-p/college",
		},
		{
			id: "SEPHORA",
			title: "Sephora Community custom emails",
			thumb: "images/thumb-sephora.png",
			type: "devui",
			description:
				"Worked closely with Sephora team to customize all Velocity-based Sephora Khoros Community emails to be consistent with the site design and easily understood by users to keep them informed and encourage them to visit the site more often.",
			logos: [
				{
					id: "78",
					software: "Khoros Community",
					img: "images/khoros.png",
				},
				{ id: "77", software: "Velocity", img: "images/velocity.png" },
				{
					id: "76",
					software: "Fremarker",
					img: "images/freemarker.png",
				},
				{ id: "75", software: "SCSS", img: "images/sass.png" },
			],
			linkText: "View Community site",
			link: "https://community.sephora.com",
		},
		{
			id: "VERIZON",
			title: "Verizon Community custom menu",
			thumb: "images/thumb-verizon.png",
			description:
				"Recreated a custom JavaScript and HTML menu in Verizon's Khoros Community to better meet their user's needs, as well as numerous other Community customizations as needed.",
			logos: [
				{
					id: "9",
					software: "Khoros Community",
					img: "images/khoros.png",
				},
				{ id: "74", software: "HTML5", img: "images/html5.png" },
				{
					id: "73",
					software: "Javascript",
					img: "images/javascript.png",
				},
			],
			linkText: "View Community site and menu",
			link: "https://community.verizon.com",
		},
		{
			id: "SPLUNK",
			title: "Splunk Community customization",
			type: "dev",
			thumb: "images/thumb-splunk.png",
			description:
				"Modified personal information structure of user profile to create the option to give customized lists of content shown to the user that is specifically relevant to them based on their chosen preferences, or to turn that function off.",
			logos: [
				{
					id: "10",
					software: "Khoros Community",
					img: "images/khoros.png",
				},
				{
					id: "72",
					software: "Javascript",
					img: "images/javascript.png",
				},
				{ id: "71", software: "HTML5", img: "images/html5.png" },
			],
			linkText: "View Splunk Community site",
			link: "https://community.splunk.com",
		},
		{
			id: "INVOCA",
			title: "Invoca customized sign in process",
			type: "dev",
			thumb: "images/thumb-invoca.png",
			description:
				"Customized sign in process to allow users to register and sign in all in one step, creating automatic usernames based on their email and random numbers or words that users could change if they wanted to.",
			logos: [
				{
					id: "11",
					software: "Khoros Community",
					img: "images/khoros.png",
				},
				{
					id: "70",
					software: "Javascript",
					img: "images/javascript.png",
				},
				{
					id: "69",
					software: "Freemarker",
					img: "images/freemarker.png",
				},
			],
			linkText: "View Community site",
			link: "https://community.invoca.com",
		},
		{
			id: "ZOOM",
			title: "Zoom homepage tiles display",
			type: "devui",
			thumb: "images/thumb-zoom.png",

			description:
				"Created a customized (and optional) JSON fed tile display for the home page when administrators choose to display them. The JSON can be created by the site administrators and turned on or off in the admin panel.",
			logos: [
				{
					id: "12",
					software: "Khoros Community",
					img: "images/khoros.png",
				},
				{
					id: "68",
					software: "Javascript",
					img: "images/javascript.png",
				},
				{
					id: "67",
					software: "Freemarker",
					img: "images/freemarker.png",
				},
				{ id: "65", software: "SCSS", img: "images/sass.png" },
			],
			linkText: "View Community site and tiles",
			link: "https://community.zoom.com",
		},
		{
			id: "SISENSE",
			title: "Salesforce integration",
			type: "dev",
			thumb: "images/thumb-sisense.png",
			description:
				"Helped to integrate a Salesforce ticket tracking system into the out of the box ticket system, giving Sisense more flexibilty, control, and data sets that they could keep in their own Salesforce instance. This dashboard is only available to administrators.",
			logos: [
				{
					id: "13",
					software: "Khoros Community",
					img: "images/khoros.png",
				},
				{
					id: "64",
					software: "Salesforce",
					img: "images/salesforce.png",
				},
				{
					id: "63",
					software: "Javascript",
					img: "images/javascript.png",
				},
				{ id: "62", software: "XML", img: "images/xml.png" },
			],
			linkText: "View Community site",
			link: "https://community.sisense.com",
		},
		{
			id: "JAMF",
			title: "JAMF Community constulting and tutorials",
			type: "both",
			thumb: "images/thumb-jamf.png",
			description:
				"Engaged in two months of tutorials with their Community administrative and design staff to customize their site &mdash; starting from scratch with basic HTML and CSS to the point where they can mostly take care of Community changes themselves.",
			logos: [
				{
					id: "14",
					software: "Khoros Community",
					img: "images/khoros.png",
				},
				{ id: "61", software: "HTML5", img: "images/html5.png" },
				{
					id: "60",
					software: "Freemarker",
					img: "images/freemarker.png",
				},
				{ id: "59", software: "SCSS", img: "images/sass.png" },
			],
			linkText: "View Community site",
			link: "https://community.jamf.com",
		},
		{
			id: "ESP",
			title: "ESP Nutrition e-Commerce Site",
			type: "both",
			thumb: "images/thumb-ESP.png",
			description:
				"Nutritional supplement and bodybuilding e-commerce site built in pre-Gutenberg WordPress and Shopped plug-in, with additional custom-made plugins and theme. Shop is offline. (2011).",
			logos: [
				{
					id: "15",
					software: "Wordpress",
					img: "images/wordpress.png",
				},
				{
					id: "999",
					software: "PHP",
					img: "images/php.png",
				},
			],
			image: "ESP.jpg",
			linkText: "View Site screenshot; site offline",
			link: "showimage/ESP",
		},
		{
			id: "XACTLY",
			title: "Xactly Community customizations",
			type: "dev",
			thumb: "images/thumb-xactly.png",
			description:
				"Multiple Khoros Community customizations including an advanced, semi-automated sign in process, automated data filling, significantly improved customized event management to be used by administrators, and more.",
			logos: [
				{
					id: "16",
					software: "Khoros Community",
					img: "images/khoros.png",
				},
				{
					id: "58",
					software: "Freemarker",
					img: "images/freemarker.png",
				},
				{
					id: "57",
					software: "Javascript",
					img: "images/javascript.png",
				},
			],
			linkText: "View Community site",
			link: "https://community.xactlycorp.com",
		},
		{
			id: "COAR",
			title: "Cisco OAuth Registry",
			type: "both",
			what: "screenshot",
			thumb: "images/thumb-coar.png",
			description:
				"Working mockup for Cisco OAuth Registry built in Angular 1.x with Typescript in preparation for the completely redesigned, structured Angular 2. This allowed users to renew their OAuth credentials as needed. Many other customizations, designs, mockups, and wireframes for the in-house Enhancements and Bug tracker systerm, being upgraded from an older, Google website building language and framework.",
			logos: [
				{ id: "17", software: "AngularJS", img: "images/angular.png" },
				{
					id: "56",
					software: "Typescript",
					img: "images/typescript.png",
				},
				{ id: "55", software: "Less", img: "images/less.png" },
			],
			linkText: "View Example Project",
			link: "https://evilgeniuscreative.com/portfolio/COAR/index.php",
		},
		{
			id: "WEATHERAPP",
			title: "aWhere: Weather app and Style Guide",
			type: "both",
			thumb: "images/thumb-awhere-weather-app.jpg",
			description:
				"Created both a weather app from Angularjs and D3.js to provide farmers in developing countries with accurate weather reports. Also created a living style guide for the company from Angularjs. No longer in business. Weather app image only. (2015)",
			logos: [
				{ id: "18", software: "AngularJS", img: "images/angular.png" },
				{ id: "54", software: "D3js", img: "images/d3.png" },
				{ id: "53", software: "SCSS", img: "images/sass.png" },
				{ id: "52", software: "HTML5", img: "images/html5.png" },
			],
			linkText: "See app screenshot, site offline ",
			image: "weatherapp.jpg",
			link: "showimage/WEATHERAPP",
		},
		{
			id: "JMPCOM",
			title: "JMP.com AEM site work",
			type: "both",
			thumb: "images/thumb-jmp.png",
			description:
				"Worked in concert with the marketing and design team to create numerous pages, forms, and both AEM and JavaScript customizations in the JMP (a subsidiary of SAS) AEM company site.",
			logos: [
				{ id: "19", software: "AEM", img: "images/aem.jpg" },
				{ id: "51", software: "Less", img: "images/less.png" },
				{
					id: "50",
					software: "Javascript",
					img: "images/javascript.png",
				},
			],
			linkText: "View Community site",
			link: "https://jmp.com",
		},
		{
			id: "JDS",
			title: "AEM Discovery Summit site",
			type: "both",
			thumb: "images/thumb-jds.png",
			description:
				"Created the original Discovery Summit site and managed various contents and acted as site administrator in AEM. Discovery Summit is an annual meeting of JMP users and developers that offers seminars, tutorials, meetups, and more.",
			logos: [
				{ id: "20", software: "AEM", img: "images/aem.jpg" },
				{ id: "49", software: "Less", img: "images/less.png" },
				{
					id: "48",
					software: "Javascript",
					img: "images/javascript.png",
				},
			],
			linkText: "View Community section",
			link: "https://discoverysummit.jmp",
		},
		{
			id: "CBC",
			title: "Capital Broadcasting Company",
			type: "both",
			thumb: "images/thumb-cbc.png",
			description:
				"In 2014, Capitol Broadcasting Company in Raleigh, NC, needed to renew their ageing site &mdash; this was the chosen design to create the new site. Image only due to many changes on the site since this design.",
			logos: [
				{ id: "219", software: "HTML", img: "images/html5.png" },
				{ id: "141", software: "SASS", img: "images/sass.png" },
				{
					id: "1481",
					software: "Javascript",
					img: "images/javascript.png",
				},
			],
			image: "cbc.jpg",
			linkText: "View Site screenshot, site changed",
			link: "showimage/CBC",
		},
		{
			id: "DANSER",
			title: "Danser Guitar Works",
			type: "both",
			thumb: "images/thumb-danser.png",
			description:
				"Screenshot of a guitar-shaped customized theme and plugins in a Wordpress site for a high-end custom luthier who fixes and builds custom guitars. This design stood for many years until early 2020s, and now the site is no longer this design, now hosted on Wix. (2014).",
			logos: [
				{
					id: "210",
					software: "Wordpress",
					img: "images/wordpress.png",
				},
				{ id: "149", software: "SASS", img: "images/sass.png" },
				{
					id: "148",
					software: "Javascript",
					img: "images/javascript.png",
				},
				{ id: "295", software: "PHP", img: "images/php.png" },
			],
			image: "danser.jpg",
			linkText: "View Site screenshot, site changed",
			link: "showimage/DANSER",
		},
		{
			id: "LOSOLIVOS",
			title: "Los Olivos",
			type: "both",
			thumb: "images/thumb-los-olivos.png",
			description:
				"Former raw foods online shopping site based on a WordPress Shopp plug-in and customized theme and other customized plugins. Store closed during the pandemic, so only an original mockup is available. (2013).",
			logos: [
				{ id: "2", software: "Wordpress", img: "images/wordpress.png" },
				{ id: "95", software: "PHP", img: "images/php.png" },
			],
			image: "los-olivos.jpg",
			linkText: "View Site screenshot, site offline",
			link: "showimage/LOSOLIVOS",
		},
		{
			id: "Challenger",
			show: false,
			title: "Challenger Disaster Chart",
			type: "print",
			thumb: "images/thumb-challenger.jpg",
			description:
				"<p>The power to save lives through proper, simple data visualizations, as seen in these contrasting charts of the causes of the Challenger disaster. (Tufte, Edward, 1997). </p><p>The first chart, created by NASA engineers trying and failing to communicate the dangers of low-outside-temperature launches, and Tufte's redesign, which clearly shows the danger and could have prevented seven tragic deaths and many millions of dollars, as well as damage to public confidence in NASA.</p><p>In healthcare, the stakes are even higher, and can affect thousants or millions of lives. A common lesson in data visualization is that the simpler the chart, the more effective it is. This is a great example of that. A common theme in effective data visualization is to find the simplest way to show the data so it can be instantly understood. Fancier versions can be made later, but the first responsibility is to communicate the information.</p>",
			logos: [
				{
					id: 1997,
					software: "Photoshop",
					img: "images/photoshop.png",
				},
			],
			image: "challenger.jpg",
			linkText: "View Challenger Disaster Chart",
			link: "showimage/Challenger",
		},
	],
	animation: [
		{
			title: "Percentiles",
			thumb: "images/thumb-percentiles.png",
			description:
				"What Percintiles are and how they relate to Agile Metrics",
			link: "https://evilgeniuscreative.com/portfolio/PERCENTILES/percentiles.html",
		},
		{
			title: "Polar Charts",
			thumb: "images/thumb-polar.png",
			description:
				"What are polar charts and how can we use them in Agile Metrics?",
			link: "https://evilgeniuscreative.com/portfolio/POLAR/polar.html",
		},
		{
			title: "Predictability",
			thumb: "images/thumb-predictability.png",
			description: "What part does Predictability have in Agile Metrics",
			link: "https://evilgeniuscreative.com/portfolio/PREDICTABILITY/predictability.html",
		},
		{
			title: "Productivity",
			thumb: "images/thumb-productivity.png",
			description: "How do we best track Productivity in Agile Metrics?",
			link: "https://evilgeniuscreative.com/portfolio/PRODUCTIVITY/productivity.html",
		},
		{
			title: "Quality",
			thumb: "images/thumb-quality.png",
			description:
				"What does Quality mean and how do we understand it in the context of Agile Metrics",
			link: "https://evilgeniuscreative.com/portfolio/QUALITY/quality.html",
		},
		{
			title: "RESPONSIVENESS",
			thumb: "images/thumb-responsiveness.png",
			description:
				"What is Responsiveness in Agile Metrics, what does it mean, and why we should track it.",
			link: "https://evilgeniuscreative.com/portfolio/RESPONSIVENESS/responsiveness.html",
		},
		{
			title: "OVERALL",
			thumb: "images/thumb-overall.png",
			description:
				"Taking all the metrics above and displaying them as a group to get a bigger overview of how the team is doing.",
			link: "https://evilgeniuscreative.com/portfolio/OVERALL/overall.html",
		},
	],
};

export default INFO;
