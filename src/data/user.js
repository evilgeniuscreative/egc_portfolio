const INFO = {
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

	projects: [
		{
			title: "Vue vs Google Maps using NCDOT data",
			type: "both",
			thumb: "images/thumb-ncdot.png",
			description:
				"Pulling data from the North Carolina Department of transportation open APIs, Users can discover the traffic and construction incidents around the state.",
			logos: [
				{ id: "0", software: "Vue", img: "images/vuejs.png" },
				{ id: "99", software: "HTML", img: "images/html5.png" },
				{ id: "98", software: "SCSS", img: "images/sass.png" },
			],
			linkText: "View Project",
			link: "https://evilgeniuscreative.com/demo_ncdot/",
		},

		{
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

			link: "https://evilgeniuscreative.com/Fidelity/",
		},
		{
			title: "Agile Metrics Explanation Animations",
			type: "both",
			thumb: "images/thumb-animation.png",
			description:
				"Animated introductions to Agile Metrics data analysis and tracking metrics for Rally Software.",
			logos: [
				{
					id: "3211",
					software: "Wordpress",
					img: "images/edgeanimate.png",
				},
			],

			link: "/animation",
		},

		{
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
			linkText: "View JMP Community",
			link: "https://community.jmp.com",
		},

		{
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
			linkText: "View Project",
			link: "https://answers.ea.com/t5/Answer-HQ-English/ct-p/AHQ-English",
		},
		{
			title: "Roku Community Homepage Tiles",
			type: "devui",
			thumb: "images/thumb-roku.png",
			description:
				"New designs and functionality for Roku's community homepage navigation tiles, built in Khoros Community.",
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
			linkText: "View Project",
			link: "https://community.roku.com",
		},
		{
			title: "Brunswick Boating Companies Communities",
			type: "devui",
			thumb: "images/thumb-brunswick.png",
			description:
				"Four Khoros Communities built from one using top-level categories for Brunswick's Sea Ray Boats, Mercury Racing, Boston Whaler, and Ripl.",
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
			linkText: "View Project",
			link: "https://community.brunswick.com/",
		},

		{
			title: "Macmillan Communities redesign and sliding menus",
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
			linkText: "View Project",
			link: "https://community.macmillanlearning.com/t5/macmillan-community/ct-p/college",
		},
		{
			title: "Sephora Community custom email formatting",
			thumb: "images/thumb-sephora.png",
			type: "devui",
			description:
				"Worked closely with Sephora team to customize all Velocity-based Sephora Khoros Community emails to be consistent with the site design.",
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
			linkText: "View Project",
			link: "https://community.sephora.com",
		},
		{
			title: "Verizon Community custom menu",
			thumb: "images/thumb-verizon.png",
			description:
				"Created a custom JS menu in their Khoros Community to meet their specific needs, as well as other customizations as needed.",
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
			linkText: "View Project",
			link: "https://community.verizon.com",
		},
		{
			title: "Splunk Community profile preferences customization",
			type: "dev",
			thumb: "images/thumb-splunk.png",
			description:
				"Modified personal information of users to give the option to give lists of content that is specifically relevant to them based on their chosen preferences, or to turn it off.",
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
			linkText: "View Splunk Community",
			link: "https://community.splunk.com",
		},
		{
			title: "Invoca customized sign in process",
			type: "dev",
			thumb: "images/thumb-invoca.png",
			description:
				"Customized sign in process to allow users to register and sign in all in one step.",
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
			linkText: "View Project",
			link: "https://community.invoca.com",
		},
		{
			title: "Zoom homepage tiles display",
			type: "devui",
			thumb: "images/thumb-zoom.png",

			description:
				"Created a customized (and optional) JSON fed tile display for the home page when they choose to display.",
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
			linkText: "View Project",
			link: "https://community.zoom.com",
		},
		{
			title: "Khoros Community Salesforce integration",
			type: "dev",
			thumb: "images/thumb-sisense.png",
			description:
				"Helped to integrate Salesforce ticket tracking into their customer support system.",
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
			linkText: "View Project",
			link: "https://community.sisense.com",
		},
		{
			title: "JAMF Community constulting and tutorials",
			type: "both",
			thumb: "images/thumb-jamf.png",
			description:
				"Helped their staff to customize their site starting from basic HTML and CSS to the point where it is currently over 2 months of tutorials.",
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
			linkText: "View Project",
			link: "https://community.jamf.com",
		},
		{
			title: "ESP Nutrition e-Commerce Site",
			type: "both",
			thumb: "images/thumb-ESP.png",
			description:
				"Nutritional supplement e-commerce site built in WordPress and Shopped plug-in. Image only",
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

			link: "images/ESP.jpg",
		},
		{
			title: "Xactly corp Community customizations",
			type: "dev",
			thumb: "images/thumb-xactly.png",
			description:
				"Multiple customizations including sign in process, automated data filling, event management, and more.",
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
			linkText: "View Project",
			link: "https://community.xactlycorp.com",
		},
		{
			title: "Cisco OAuth Registry",
			type: "both",
			thumb: "images/thumb-cisco.png",
			description:
				"Working mockup for Cisco OAuth Registry built in Angular 1.x in Typescript in preparation for Angular 2, along with multiple other in-house apps and designs.",
			logos: [
				{ id: "17", software: "AngularJS", img: "images/angular.png" },
				{
					id: "56",
					software: "Typescript",
					img: "images/typescript.png",
				},
				{ id: "55", software: "Less", img: "images/less.png" },
			],
			linkText: "View Project",
			link: "https://evilgeniuscreative.com/portfolio/COAR/build/prod/index.html",
		},
		{
			title: "aWhere: Created weather app and living Style Guide",
			type: "both",
			thumb: "images/thumb-awhere.png",
			description:
				"Created both a weather app from Angularjs and D3.js to provide farmers in developing countries with accurate weather reports. Also created a living style guide for the company from Angularjs. No longer in business. Linked in only.",
			logos: [
				{ id: "18", software: "AngularJS", img: "images/angular.png" },
				{ id: "54", software: "D3js", img: "images/d3.png" },
				{ id: "53", software: "SCSS", img: "images/sass.png" },
				{ id: "52", software: "HTML5", img: "images/html5.png" },
			],
			linkText: "Company no longer exists; LinkedIn page",
			link: "https://www.linkedin.com/company/awhere-inc-/",
		},
		{
			title: "JMP.com AEM site work",
			type: "both",
			thumb: "images/thumb-jmp.png",
			description:
				"Worked in concert with the marketing and design team to create numerous pages and customizations in the JMP (a subsidiary of SAS) AEM company site..",
			logos: [
				{ id: "19", software: "AEM", img: "images/aem.jpg" },
				{ id: "51", software: "Less", img: "images/less.png" },
				{
					id: "50",
					software: "Javascript",
					img: "images/javascript.png",
				},
			],
			linkText: "View Project",
			link: "https://jmp.com",
		},
		{
			title: "AEM Discovery Summit site",
			type: "both",
			thumb: "images/thumb-jds.png",
			description:
				"Created the original discovery summit site and managed pages in AEM.",
			logos: [
				{ id: "20", software: "AEM", img: "images/aem.jpg" },
				{ id: "49", software: "Less", img: "images/less.png" },
				{
					id: "48",
					software: "Javascript",
					img: "images/javascript.png",
				},
			],
			linkText: "View Project",
			link: "https://discoverysummit.jmp",
		},
		{
			title: "Capital Broadcasting Company",
			type: "both",
			thumb: "images/thumb-cbc.png",
			description:
				"CBC needed to renew their site and this was the top design at the time. Image only due to many changes on the site.",
			logos: [
				{ id: "219", software: "HTML", img: "images/html5.png" },
				{ id: "141", software: "SASS", img: "images/sass.png" },
				{
					id: "1481",
					software: "Javascript",
					img: "images/javascript.png",
				},
			],

			link: "images/cbc.jpg",
		},
		{
			title: "Danser Guitar Works",
			type: "both",
			thumb: "images/thumb-danser.png",
			description:
				"Guitar shaped site for a custom luthier and builder. Image only.",
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

			link: "images/danser.jpg",
		},
		{
			title: "Los Olivos",
			type: "both",
			thumb: "images/thumb-los-olivos.png",
			description:
				"Former raw foods online shopping site based on a WordPress Shopp plug-in. Image only.",
			logos: [
				{ id: "2", software: "Wordpress", img: "images/wordpress.png" },
				{ id: "95", software: "PHP", img: "images/php.png" },
			],

			link: "images/los-olivos.jpg",
		},
	],
	animation: [
		{
			title: "Percentiles",
			description:
				"What Percintiles are and how they relate to Agile Metrics",
			link: "animation_files/PERCENTILES/percentiles.html",
		},
		{
			title: "Polar Charts",
			description:
				"What are polar charts and how can we use them in Agile Metrics?",
			link: "animation_files/POLAR/polar.html",
		},
		{
			title: "Predictability",
			description: "What part does Predictability have in Agile Metrics",
			link: "animation_files/PREDICTABILITY/predictability.html",
		},
		{
			title: "Productivity",
			description: "How do we best track Productivity in Agile Metrics?",
			link: "animation_files/PRODUCTIVITY/productivity.html",
		},
		{
			title: "Quality",
			description:
				"What does Quality mean and how do we understand it in the context of Agile Metrics",
			link: "animation_files/QUALITY/quality.html",
		},
		{
			title: "RESPONSIVENESS",
			description:
				"What is Responsiveness in Agile Metrics, what does it mean, and why we should track it.",
			link: "animation_files/RESPONSIVENESS/responsiveness.html",
		},
		{
			title: "OVERALL",
			description:
				"Taking all the metrics above and displaying them as a group to get a bigger overview of how the team is doing.",
			link: "animation_files/OVERALL/overall.html",
		},
	],
};

export default INFO;
