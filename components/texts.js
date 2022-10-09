//  DO NOT REMOVE / DELETE ANY VARIABLE !!!

// NOTE:
// declare a variable null then it won't show up
// example:
// export const my_whatsapp = null;
// AGAIN, DO NOT REMOVE / DELETE ANY VARIABLE !!!
// Some vlues cannot be null, lookout carefully for those

// OVERALL INFORMATION
export const my_name = "Gobind Singh"; //cannot be null
export const my_resume_file = "resume.pdf"; // can be null
// if you wanna show your resume put that file in public folder and change my_resume_file value to its name

//SOCIALS
export const my_email = "android.gobind@gmail.com"; // can be null
export const my_whatsapp = "+919415507316"; // can be null
export const my_github = "theGobindSingh"; // can be null
export const my_instagram = "theGobindSingh"; // can be null
export const my_linkedin = "theGobindSingh"; // can be null

//HOME PAGE
export const home_hello = "Hi, my name is"; //cannot be null
export const home_sub_heading = "I build things for the web."; //can be null
export const home_desc =
  "I'm a software engineer specializing in building exceptional digital experiences."; // can be null
export const home_links = [
  {
    text: "exceptional digital experiences",
    link: "https://youtu.be/dQw4w9WgXcQ?t=43",
  },
]; // can be null
//format: an array of objects [{}, {},...], each object will have 2 properties text and link -> {text:"", link: ""}
//    text property will tell what text you want to be selected (every occurance will be selected)
//    link property will tell the hyperlink you want to add to that text

//ABOUT PAGE
// you can use backtick -> ` <- if you want to write multiple lines/paragraphs in about me, just as I have used
export const about_me = `Hello! My name is Gobind and I enjoy creating things that live on the internet. My interest in web development started back in 2012 when I decided to try editing custom Tumblr themes — turns out hacking together a custom reblog button taught me a lot about HTML & CSS!

Fast-forward to today, and I've had the privilege of working at an advertising agency, a start-up, a huge corporation, and a student-led design studio. My main focus these days is building accessible, inclusive products and digital experiences at Upstatement for a variety of clients.

I also recently launched a course that covers everything you need to build a web app with the Spotify API using Node & React.`;
// about me cannout be null
export const about_me_links = [
  { text: "an advertising agency", link: "https://google.com" },
  { text: "a start-up", link: "https://google.com" },
  { text: "a huge corporation", link: "https://google.com" },
  { text: "a student-led design studio", link: "https://google.com" },
]; //can be null
//format: an array of objects [{}, {},...], each object will have 2 properties text and link -> {text:"", link: ""}
//    text property will tell what text you want to be selected (every occurance will be selected)
//    link property will tell the hyperlink you want to add to that text
export const about_me_exp = [
  "JavaScript (ES6+)",
  "React",
  "Node.js",
  "TypeScript",
];
// about_me_exp is an array of technologies you have worked with
// can only contain maximum of 10 elements
export const about_photo_name = "me.jpg";
// put your photo in "public" folder and store the photos name in about_photo_name

//EXPERIENCE
export const experience_heading = "Where I've Worked";
export const experiences = [
  {
    role: "Engineer",
    company: "Upstatement",
    duration: "May 2018 - Present",
    website: "https://google.com", // can be null
    list: [
      "Write modern, performant, maintainable code for a diverse array of client and internal projects",
      "Work with a variety of different languages, platforms, frameworks, and content management systems such as JavaScript, TypeScript, Gatsby, React, Craft, WordPress, Prismic, and Netlify",
      "Communicate with multi-disciplinary teams of engineers, designers, producers, and clients on a daily basis",
      "Write modern, performant, maintainable code for a diverse array of client and internal projects",
      "Work with a variety of different languages, platforms, frameworks, and content management systems such as JavaScript, TypeScript, Gatsby, React, Craft, WordPress, Prismic, and Netlify",
      "Communicate with multi-disciplinary teams of engineers, designers, producers, and clients on a daily basis",
    ],
  },
  {
    role: "Studio Developer",
    company: "Scout",
    duration: "now - Present",
    website: null, // can be null
    list: [
      "Write modern, performant, maintainable code for a diverse array of client and internal projects",
    ],
  },
  {
    role: "fun",
    company: "apple",
    duration: "lololo",
    website: "https://google.com", // can be null
    list: [
      "Write modern, performant, maintainable code for a diverse array of client and internal projects",
      "Communicate with multi-disciplinary teams of engineers, designers, producers, and clients on a daily basis",
    ],
  },
  {
    role: "fun",
    company: "lolaaaaaaa",
    duration: "lololo",
    website: "https://google.com", // can be null
    list: [
      "Write modern, performant, maintainable code for a diverse array of client and internal projects",
      "Communicate with multi-disciplinary teams of engineers, designers, producers, and clients on a daily basis",
    ],
  },
]; // cannot be null
//format: an array of objects [{}, {},...], each object will have 5 properties as follows:
//    role property - your job title/role
//    company - name of company you worked in
//    duration - the time period in which you worked in the company
//    website - the website of the company - it can be null also
//    list - points you wanna mention - its an array of strings - ["", "", ...] - cannot be null

//EXTRA-CURRICULAR PAGE
export const extra_heading = "Photography";

//CONTACT PAGE
export const cont_heading_one = "What's Next?"; // cannot be null
export const cont_heading_two = "Get In Touch."; // cannot be null
export const cont_desc = `Although I'm not currently looking for any new opportunities, my inbox is always open. Whether you have a question or just want to say hi, I'll try my best to get back to you!`; // cannot be null
export const cont_email_btn = "Say Hello";
