var bio = {
  "name" : "Richard Yhip",
  "role" : "Full-stack Developer",
  "contacts" : {
    "mobile" : "(804) 502-1500",
    "email" : "richard.yhip@gmail.com",
    "github" : "yhippa",
    "twitter" : "Yhippa",
    "location" : "Henrico, VA"
  },
  "welcomeMessage" : "Hello! Thanks for visiting my interactive resume.",
  "skills" : ["HTML5", "CSS", "JS", "Java"],
  "biopic" : "https://media.licdn.com/mpr/mpr/shrinknp_400_400/p/1/000/068/1f8/204585f.jpg",
  "display" : function() {
    var formattedName = HTMLheaderName.replace("%data%", bio.name);
    var formattedRole = HTMLheaderRole.replace("%data%", bio.role);
    var formattedMobile = HTMLmobile.replace("%data%", bio.contacts.mobile);
    var formattedEmail = HTMLemail.replace("%data%", bio.contacts.email);
    var formattedTwitter = HTMLtwitter.replace("%data%", bio.contacts.twitter);
    var formattedGithub = HTMLgithub.replace("%data%", bio.contacts.github);
    var formattedLocation = HTMLlocation.replace("%data%", bio.contacts.location);
    var formattedPic = HTMLbioPic.replace("%data%", bio.biopic);
    var formattedMsg = HTMLwelcomeMsg.replace("%data%", bio.welcomeMessage);
    $("#header").prepend(formattedRole);
    $("#header").prepend(formattedName);
    $("#topContacts").prepend(formattedLocation);
    $("#topContacts").prepend(formattedGithub);
    $("#topContacts").prepend(formattedTwitter);
    $("#topContacts").prepend(formattedEmail);
    $("#topContacts").prepend(formattedMobile);
    $("#footerContacts").prepend(formattedLocation);
    $("#footerContacts").prepend(formattedGithub);
    $("#footerContacts").prepend(formattedTwitter);
    $("#footerContacts").prepend(formattedEmail);
    $("#footerContacts").prepend(formattedMobile);
    $("#header").append(formattedPic);
    $("#header").append(formattedMsg);
    $("#header").append(HTMLskillsStart);
    for (var skill in bio.skills) {
      var formattedSkill = HTMLskills.replace("%data%", bio.skills[skill]);
      $("#skillsH3").append(formattedSkill);
    }
  }
};

var education = {
  "schools" : [
    {
      "name" : "University of Virginia",
      "location" : "Charlottesville, VA",
      "degree" : "Bachelor of Science",
      "majors" : ["Computer Engineering", "DJing"],
      "dates" : "August 1997 to May 2001",
      "url" : "http://www.virginia.edu"
    },
    {
      "name" : "Virginia Commonwealth University",
      "location" : "Richmond, VA",
      "degree" : "Professional Development",
      "majors" : ["Computer Science", "Cryptography"],
      "dates" : "August 2014 to December 2014",
      "url" : "http://www.vcu.edu"
    }
  ],
  "onlineCourses" : [
    {
      "title" : "Front-end Nanodegree",
      "school" : "Udacity",
      "dates" : "February 2015 to present",
      "url" : "https://www.udacity.com/course/front-end-web-developer-nanodegree--nd001"
    },
    {
      "title" : "Shaping up with Angular.js",
      "school" : "Code School",
      "dates" : "April 2015",
      "url" : "https://www.codeschool.com/courses/shaping-up-with-angular-js"
    },
    {
      "title" : "Try Git",
      "school" : "Code School",
      "dates" : "April 2014",
      "url" : "https://www.codeschool.com/courses/try-git"
    },
    {
      "title" : "Try jQuery",
      "school" : "Code School",
      "dates" : "April 2013",
      "url" : "https://www.codeschool.com/courses/try-jquery"
    }
  ],
  "display" : function() {
    for (var school in education.schools) {
      $("#education").append(HTMLschoolStart);
      var formattedName = HTMLschoolName.replace("%data%", education.schools[school].name);
      var formattedDegree = HTMLschoolDegree.replace("%data%", education.schools[school].degree);
      var formattedDates = HTMLschoolDates.replace("%data%", education.schools[school].dates);
      var formattedLocation = HTMLschoolLocation.replace("%data%", education.schools[school].location);
      $(".education-entry:last").append(formattedName + formattedDegree).append(formattedDates).append(formattedLocation);
      for (var major in education.schools[school].majors) {
        var formattedMajor = HTMLschoolMajor.replace("%data%", education.schools[school].majors[major]);
        $(".education-entry:last").append(formattedMajor);
      }
    }
    $("#education").append(HTMLonlineClasses);
    for (var course in education.onlineCourses) {
      $("#education").append(HTMLschoolStart);
      var formattedTitle = HTMLonlineTitle.replace("%data%", education.onlineCourses[course].title);
      var formattedSchool = HTMLonlineSchool.replace("%data%", education.onlineCourses[course].school);
      var formattedDates = HTMLonlineDates.replace("%data%", education.onlineCourses[course].dates);
      var formattedURL = HTMLonlineURL.replace("%data%", education.onlineCourses[course].url);
      $(".education-entry:last").append(formattedTitle + formattedSchool).append(formattedDates).append(formattedURL);
    }
  }
};

var work = {
  "jobs" : [
    {
      "employer" : "Virginia Commonwealth Universtiy",
      "title" : "Applications Analyst",
      "location" : "Richmond, VA",
      "dates" : "February 2013 to present",
      "description" : "Provide technical expertise and applications development for the myVCU portal, Central Authentication Service, VCU Service Facade, and other web-based applications; help customers develop and maintain applications with programming tools and scientific software maintained by the department; write and maintain client-server and web-based applications as needed by the department; and develop user-friendly front ends to third-party software."
    },
    {
      "employer" : "Tahzoo",
      "title" : "Technical Consultant",
      "location" : "Richmond, VA",
      "dates" : "July 2012 to February 2013",
      "description" : "Responsible for performing implementation and integration of web based systems. Work with project teams to determine system specifications, integration points and software interfaces to meet client and project requirements. Plans, optimizes and negotiates changes to scope and schedules with internal and external team members. Adopts and utilizes iterative and waterfall methodologies as needed or requested (Agile, Scrum, RUP)"
    },
    {
      "employer" : "Red Hat",
      "title" : "Consultant",
      "location" : "Richmond, VA",
      "dates" : "June 2010 to July 2012",
      "description" : "Information Technology Consulting, including business analysis in the healthcare, financial services, and eCommerce domains. Red Hat subject matter expert at the client site, addressing their technical, development, and strategic IT requirements. Defined overall system architectures and manage software specification, design, testing, and deployment of open source solutions. Act as a trusted advisor at the client site and assist the project or technical managers in setting and delivering on expectations. Maintain an in-depth understanding of industry practices and thorough project experience and training. Respond to incidents, escalations, and exceptions in a professional manner."
    }
  ],
  "display" : function() {
    for (var job in work.jobs) {
      $("#workExperience").append(HTMLworkStart);
      var formattedEmployer = HTMLworkEmployer.replace("%data%", work.jobs[job].employer);
      var formattedTitle = HTMLworkTitle.replace("%data%", work.jobs[job].title);
      var formattedDates = HTMLworkDates.replace("%data%", work.jobs[job].location);
      var formattedLocation = HTMLworkLocation.replace("%data%", work.jobs[job].dates);
      var formattedDescription = HTMLworkDescription.replace("%data%", work.jobs[job].description);
      $(".work-entry:last").append(formattedEmployer + formattedTitle).append(formattedLocation).append(formattedDates).append(formattedDescription);
    }
  }
};

var projects = {
  "projects" : [
    {
      "title" : "Nationwide Commentary hub",
      "dates" : "August 2012 to October 2012",
      "description" : "Collections of articles containing commentary on financial markets (http://commenetary.nationwide.com)",
      "images" : ["http://free.pagepeeker.com/v2/thumbs.php?size=x&url=commentary.nationwide.com", "http://commentary.nationwide.com/img/bg-logo_sml_cropped.png", "http://commentary.nationwide.com/img/bg-banner.png"]
    },
    {
      "title" : "Portfolio",
      "dates" : "April 2015 to May 2015",
      "description" : "A collection of projects completed for the Udacity Front-end Nanodegree (https://yhippa.github.io/frontend-nanodegree-p1/)",
      "images" : ["http://free.pagepeeker.com/v2/thumbs.php?size=x&url=yhippa.github.io%2Ffrontend-nanodegree-p1"]
    }
  ],
  "display" : function() {
    for (var project in projects.projects) {
      $("#projects").append(HTMLprojectStart);
      var formattedTitle = HTMLprojectTitle.replace("%data%", projects.projects[project].title);
      var formattedDates = HTMLprojectDates.replace("%data%", projects.projects[project].dates);
      var formatttedDescription = HTMLprojectDescription.replace("%data%", projects.projects[project].description);
      $(".project-entry:last").append(formattedTitle).append(formattedDates).append(formatttedDescription);
      for (var image in projects.projects[project].images) {
        var formattedImage = HTMLprojectImage.replace("%data%", projects.projects[project].images[image]);
        $(".project-entry:last").append(formattedImage);
      }
    }
  }
};

bio.display();
work.display();
projects.display();
education.display();

$("#mapDiv").append(googleMap);

/*
if(bio.skills.length > 0) {
  $("#header").append(HTMLskillsStart);
  var formattedSkill = HTMLskills.replace("%data%", bio.skills[0]);
  $("#skills").append(formattedSkill);
  formattedSkill = HTMLskills.replace("%data%", bio.skills[1]);
  $("#skills").append(formattedSkill);
  formattedSkill = HTMLskills.replace("%data%", bio.skills[2]);
  $("#skills").append(formattedSkill);
  formattedSkill = HTMLskills.replace("%data%", bio.skills[3]);
  $("#skills").append(formattedSkill);
};

var displayWork = function() {
  for (job in work.jobs) {
    $("#workExperience").append(HTMLworkStart);
    var formattedEmployer = HTMLworkEmployer.replace("%data%", work.jobs[job].employer);
    var formattedTitle = HTMLworkTitle.replace("%data%", work.jobs[job].title);
    var formattedDates = HTMLworkDates.replace("%data%", work.jobs[job].dates);
    var formattedLocation = HTMLworkLocation.replace("%data%", work.jobs[job].location);
    var formattedDescription = HTMLworkDescription.replace("%data%", work.jobs[job].description);
    var formattedEmployerTitle = formattedEmployer + formattedTitle;
    $(".work-entry:last").append(formattedEmployerTitle).append(formattedDates).append(formattedLocation).append(formattedDescription);
  }
}
*/


/*
var formattedName = HTMLheaderName.replace("%data%", "Richard Yhip");
var formattedRole = HTMLheaderRole.replace("%data%", "Full-stack Developer");

$("#header").prepend(formattedRole);
$("#header").prepend(formattedName);



$("#main").prepend(bio.skills);
$("#main").prepend(bio.welcomeMessage);
$("#main").prepend(bio.pictureUrl);
$("#main").prepend(bio.contactInfo);
$("#main").prepend(bio.role);
$("#main").prepend(bio.name);




education["name"] = ;
education["years"] = "1997 to 2001";
education["city"] = "Charlottesville";

$("#main").append(work["position"]);
$("#main").append(education.name);
*/
