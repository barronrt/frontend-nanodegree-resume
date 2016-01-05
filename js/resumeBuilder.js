/*
This is empty on purpose! Your code to build the resume will go here.
 */


var bio = {
	"name": "Barron Thompson",
	"role": "Web Development Vanguard",
	"contacts": {

		"mobile": "555-555-5555",
		"email": "barronrt@gmail.com",
		"github": "github.com/barronrt",
		"githubLink": "https://www.github.com/barronrt",
		"twitter": "something",
		"location": "Atlanta",
		"locationLink": "https://www.google.com/search?q=atlanta&espv=2&biw=1535&bih=791&site=webhp&source=lnms&tbm=isch&sa=X&ved=0ahUKEwjGoPDKqdvJAhWKMSYKHSagDx8Q_AUICCgD&dpr=1"
	},
	"welcomeMessage": "Hello and Welcome!",
	"skills": ["eternally optimistic", "wrecklessly enthusiastic", "undeniably extant","pics like this"],
	"biopic": "images/foggyLakeshore.jpg",
	"display": "function"

};


var education = {
  "schools": [
    {"name": "The University of Georgia",
      "city" : "Athens, Georgia",
      "degree": "Bachelor of Science",
      "majors" : ["Biology"],
      "dates" : "2007",
      "url" : "http://uga.edu"
    },
    {
      "name": "The University of Example",
      "city" : "Examplia, Georgia",
      "degree": "Bachelor of Possibility",
      "majors" : ["Token"],
      "dates" : 2007,
      "url" : "http://gunn.pausd.org/sites/default/files/AffordabilityCollegeExamples2015.pdf"
    }
    ],
    "onlineCourses" : [
      {
       "title" : "Front End Web Development",
        "school": "Udacity",
        "dates": 2015,
        "url" : "https://www.udacity.com/course/front-end-web-developer-nanodegree--nd001",
        "description" : "Learn the fundamentals of how the web works and gain a working knowledge of the three foundational languages that power each and every website: HTML, CSS and JavaScript. This Nanodegree will provide a guided, efficient path for you to learn to build beautiful, responsive websites optimized for security and performance. You’ll see the efforts of your work with each click of the browser’s refresh button!"
        
      },
      {
        


         "title" : "Javascript Syntax",
        "school": "Udacity",
        "dates": 2015,
        "url" : "https://www.udacity.com/course/javascript-basics--ud804",
        "description" : " In the twenty plus years since its inception, JavaScript has become the _lingua franca_ of the web, that's to say, it's become the main tool to create interactive content on the Internet."
      }
      ]
  
};


var work = {
  "jobs" : [
    {
      "employer" : "Pearson Education",
      "title": "Scoring Analytics",
      "dates": "April 2015 - Current",
      "description": "Scoring and Interpolating nationwide college entrance exam results, ensuring a fair and accurate score for every student.",
      "employerLink": "http://www.pearsoned.com/"
      
},
{
  "employer" : "Wyzant Tutoring",
      "title": "Master Tutor",
      "dates": "August 2011 - Current",
      "description": "Working with students on subjects ranging from SAT prep to physics to elementary expository writing. Driving these students to reach their potential by demonstrating how hard work, learning, and having fun can all be part of the same process.",
   	  "employerLink": "https://www.wyzant.com/Tutors/GA/Augusta/7802914/"
   }
  ]
};

var projects = {
  "projects": [
    {
      "title": "Just Java",
      "dates" : "2015",
      "description" : "An app that lets you order coffee from your phone and calls up an email receipt based on that order. Let me know if you want free whipped cream or sprinkles-I can make it happen!",
      "images" : [
        "images/lookingOut.jpg",
        "images/walkThePlank.jpg"
        ]
    },
    {
      
      "title": "Cookie Time!",
      "dates" : "2015",
      "description" : "A game for all ages with a simple driving focus-will you eat the cookie?",
      "images" : [
        "images/lakeSunDown.jpg",
        "images/pigFozFogSun.jpg"
        ]
    }
    ]
}

//////////bio-header info////////////////

var formattedName = HTMLheaderName.replace("%data%", bio.name);
var formattedRole = HTMLheaderRole.replace("%data%", bio.role);
var formattedWelcome = HTMLheaderRole.replace("%data%", bio.role);

$("#header").prepend(formattedRole);
$("#header").prepend(formattedName);



//////////////contacts////////////////////

var formattedMobile = HTMLmobile.replace("%data%", bio.contacts.mobile);
$("#topContacts").append(formattedMobile);

var formattedEmail = HTMLemail.replace("%data%", bio.contacts.email);
$("#topContacts").append(formattedEmail);

var formattedTwitter = HTMLtwitter.replace("%data%", bio.contacts.twitter);
$("#topContacts").append(formattedTwitter);

var formattedGithub = HTMLgithub.replace("%data%", bio.contacts.github).replace("#" , bio.contacts.githubLink);
$("#topContacts").append(formattedGithub);





var formattedLocation = HTMLlocation.replace("%data%", bio.contacts.location).replace("#" , bio.contacts.locationLink);
$("#topContacts").append(formattedLocation);

/////////////////picture////////////////

var formattedBiopic = HTMLbioPic.replace("%data%", bio.biopic);
$("#header").append(formattedBiopic);







///////////////welcome message//////////////


var formattedWelcomeMsg = HTMLwelcomeMsg.replace("%data%", bio.welcomeMessage);
$("#header").append(formattedWelcomeMsg);

///////////skills if statement//////////////

if(bio.skills.length > 0) {

	$("#header").append(HTMLskillsStart);

	for (skill in bio.skills) {

	var formattedSkill = HTMLskills.replace("%data%", bio.skills[skill]);
	$("#skills").append(formattedSkill);
	
	}

}	





/////////////work for/in loop within function///////////////

function displayWork() {

for (job in work.jobs) {
	$("#workExperience").append(HTMLworkStart);

	var formattedEmployer = HTMLworkEmployer.replace
	("%data%", work.jobs[job].employer).replace("#", work.jobs[job].employerLink);

	var formattedTitle = HTMLworkTitle.replace
	("%data%", work.jobs[job].title);

	var formattedEmployerTitle = formattedEmployer +
	formattedTitle;

	$(".work-entry:last").append(formattedEmployerTitle);

	var formattedDates = HTMLworkDates.replace
	("%data%", work.jobs[job].dates);
	$(".work-entry:last").append(formattedDates);


	var formattedDescription = HTMLworkDescription.replace
	("%data%", work.jobs[job].description);
	$(".work-entry:last").append(formattedDescription);


	}

}

displayWork();


////////////////////projects//////////////////////


for (project in projects.projects) {
	$("#projects").append(HTMLprojectStart);

	var formattedProjectTitle = HTMLprojectTitle.replace
	("%data%", projects.projects[project].title);
	$(".project-entry:last").append(formattedProjectTitle);

	var formattedProjectDates = HTMLprojectDates.replace
	("%data%", projects.projects[project].dates);
	$(".project-entry:last").append(formattedProjectDates);

	var formattedProjectDescription = HTMLprojectDescription.replace
	("%data%", projects.projects[project].description);
	$(".project-entry:last").append(formattedProjectDescription);

	var formattedProjectImage = HTMLprojectImage.replace
	("%data%", projects.projects[project].images[0]);
	$(".project-entry:last").append(formattedProjectImage);

	var formattedProjectImage = HTMLprojectImage.replace
	("%data%", projects.projects[project].images[1]);
	$(".project-entry:last").append(formattedProjectImage);



}
	
//////////////////schools///////////////////
	
for (school in education.schools) {
	$("#education").append(HTMLschoolStart);

	var formattedSchoolName = HTMLschoolName.replace
	("%data%", education.schools[school].name).replace("#" , education.schools[school].url);
	//$(".education-entry:last").append(formattedSchoolName);

	var formattedSchoolDegree = HTMLschoolDegree.replace
	("%data%", education.schools[school].degree);
	$(".education-entry:last").append(formattedSchoolName + formattedSchoolDegree);

	var formattedSchoolDates = HTMLschoolDates.replace
	("%data%", education.schools[school].dates);
	$(".education-entry:last").append(formattedSchoolDates);

	var formattedSchoolLocation = HTMLschoolLocation.replace
	("%data%", education.schools[school].city);
	$(".education-entry:last").append(formattedSchoolLocation);

	var formattedSchoolMajor = HTMLschoolMajor.replace
	("%data%", education.schools[school].majors);
	$(".education-entry:last").append(formattedSchoolMajor);




}

$(".education-entry:last").append(HTMLonlineClasses);

for (course in education.onlineCourses) {
	//$("#education").append(HTMLonlineClasses);

	var formattedOnlineTitle = HTMLonlineTitle.replace
	("%data%", education.onlineCourses[course].title).replace("#", education.onlineCourses[course].url);
	//$(".education-entry:last").append(formattedSchoolName);

	var formattedOnlineSchool = HTMLonlineSchool.replace
	("%data%", education.onlineCourses[course].school);
	$(".education-entry:last").append(formattedOnlineTitle + formattedOnlineSchool);

	var formattedOnlineDates = HTMLonlineDates.replace
	("%data%", education.onlineCourses[course].dates);
	$(".education-entry:last").append(formattedOnlineDates);

	      //combined into online title

	      /*   removing url, adding description
	var formattedOnlineURL = HTMLonlineURL.replace("%data%", );
	$(".education-entry:last").append(formattedOnlineURL);
	*/
	
	var formattedOnlineDescription = HTMLonlineDescription.replace("%data%", education.onlineCourses[course].description);
	$(".education-entry:last").append(formattedOnlineDescription);

}

var formattedMobileFoot = HTMLmobile.replace("%data%", bio.contacts.mobile);
$("#footerContacts").append(formattedMobileFoot);

var formattedEmailFoot = HTMLemail.replace("%data%", bio.contacts.email);
$("#footerContacts").append(formattedEmailFoot);


var formattedGithubFoot = HTMLgithub.replace("%data%", bio.contacts.github);
$("#footerContacts").append(formattedGithubFoot);




////////////////////log page clicks////////////////////////////////


$(document).click(function(loc) {
	var x = loc.pageX;
	var y = loc.pageY;

	logClicks(x,y);

});

///////////string to array manipulation/////////////////

var myString = "This is my string !";
var myStringSplit =   myString.split(" ");
myStringSplit


///////////location array function///////////////////

function locationizer(work_obj) {
	var locationArray = [];

	for (job in work_obj.jobs) {
		var newLocation = work_obj.jobs[job].location;
		locationArray.push(newLocation);

	}

	return locationArray;
	}

	console.log(locationizer(work));


////////////add internationalize button for names///////////

$("#main").append(internationalizeButton);


function inName(name) {
	
	
	var nameArray = name.trim().split(" ");
	firstIntName = nameArray[0].slice(0,1).toUpperCase() + 
	nameArray[0].slice(1).toLowerCase();
	lastIntName = nameArray[1].toUpperCase();
	var internationalName = firstIntName + lastIntName;
	console.log(internationalName);


	return internationalName;

	}







/*var formattedEmail = HTMLemail.replace("%data%", bio.contacts.email);
$("#topContacts").append(formattedEmail);

var formattedTwitter = HTMLtwitter.replace("%data%", bio.contacts.twitter);
$("#topContacts").append(formattedTwitter);

var formattedGithub = HTMLgithub.replace("%data%", bio.contacts.github);
$("#topContacts").append(formattedGithub);

var formattedLocation = HTMLlocation.replace("%data%", bio.contacts.location);
$("#topContacts").append(formattedLocation);
*/

//////////////online courses///////////////////

	//for (online in education.onlineCourses)


	/*var formattedTitle = HTMLworkTitle.replace
	("%data%", work.jobs[job].title);

	var formattedEmployerTitle = formattedEmployer +
	formattedTitle;

	$(".work-entry:last").append(formattedEmployerTitle);

*/