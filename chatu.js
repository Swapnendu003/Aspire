document.getElementById("sendButton").addEventListener("click", sendMessage);
document.getElementById("userInput").addEventListener("keypress", function (e) {
  if (e.key === "Enter") {
    sendMessage();
  }
});

function sendMessage() {
  var userInput1 = document.getElementById("userInput").value;
  let userInput = userInput1.toLowerCase();
  if (userInput.trim() !== "") {
    addUserMessage(userInput);
    if (
      userInput === "Web" ||
      userInput === "web" ||
      userInput === "web development"
    )
      web();
    else if (
      userInput.includes("java") ||
      userInput.includes("python") ||
      userInput.includes("django") ||
      userInput.includes("springboot") ||
      userInput.includes("mysql") ||
      userInput.includes("mongo db") ||
      userInput.includes("php") ||
      userInput.includes("none") ||
      userInput.includes("html") ||
      userInput.includes("css") ||
      userInput.includes("javascript") ||
      userInput.includes("react") ||
      userInput.includes("angular") ||
      userInput.includes("vue") ||
      userInput.includes("node")
    )
      expweb(userInput);
    else if (userInput === "app") app();
    else if (
      userInput.includes("kotlin") ||
      userInput.includes("swift") ||
      userInput.includes("objectivec") ||
      userInput.includes("flutter") ||
      userInput.includes("react native") ||
      userInput.includes("xamarin") ||
      userInput.includes("c#") ||
      userInput.includes("dart") ||
      userInput.includes("nothing")
    )
      expapp(userInput);
    else fuch();
    document.getElementById("userInput").value = "";
  }
}

function addUserMessage(message) {
  var chatBody = document.getElementById("chatBody");
  var userMessageElement = document.createElement("div");
  userMessageElement.className = "chat-message user";
  userMessageElement.innerHTML = "<p>" + message + "</p>";
  chatBody.appendChild(userMessageElement);
  chatBody.scrollTop = chatBody.scrollHeight;
}

function web() {
  var chatBody = document.getElementById("chatBody");
  var botMessageElement = document.createElement("div");
  botMessageElement.className = "chat-message bot";
  let technologies = [
    "HTML",
    "CSS",
    "Javascript",
    "React",
    "Angular",
    "Vue",
    "Node",
    "Java",
    "Python",
    "Django",
    "Springboot",
    "MySQL",
    "Mongo DB",
    "PHP",
    "None",
  ];
  var listElement = document.createElement("ul");
  listElement.className = "tech-list";
  chatBody.appendChild(listElement);

  technologies.forEach((technology) => {
    var listItem = document.createElement("li");
    listItem.textContent = technology;
    listElement.appendChild(listItem);
  });

  botMessageElement.innerHTML =
    "আপনি কি এই প্রযুক্তিগুলির কোনটি জানেন? রোডম্যাপ জানার জন্য একবারে একটি প্রযুক্তি লিখুন এবং যদি আপনি না জানেন তবে none লিখুন";
  chatBody.appendChild(botMessageElement);
  chatBody.scrollTop = chatBody.scrollHeight;
}
function fuch() {
  var chatBody = document.getElementById("chatBody");
  var botMessageElement = document.createElement("div");
  botMessageElement.className = "chat-message bot";
  botMessageElement.innerHTML =
    "আপনি কি বলছেন আমি বুঝতে পারছি না. কিন্তু আপনার যদি আরও প্রযুক্তিগত জ্ঞানের প্রয়োজন হয় বা ডোমেনে এক্সপ্রেটাইজ করতে চান তাহলে AspireVerse চেক আউট করুন বা আপনার মার্জিত ভবিষ্যত উচ্চাকাঙ্ক্ষা এবং সাধনায় আপনাকে গাইড করতে একটি AspireSarthi বুক করুন।";
  chatBody.appendChild(botMessageElement);
  chatBody.scrollTop = chatBody.scrollHeight;
}

function expweb(userInput) {
  var userTechnologies = [];

  var technologies = userInput.split(",").map((tech) => tech.trim());
  userTechnologies = userTechnologies.concat(technologies);
  console.log(userTechnologies);
  var chatBody = document.getElementById("chatBody");
  var botMessageElement = document.createElement("div");
  botMessageElement.className = "chat-message bot";

  //var listElement = document.createElement("ul");
  //listElement.className = "tech-list";
  //chatBody.appendChild(listElement);

  userTechnologies.forEach((technology) => {
    //var listItem = document.createElement("li");
    //listItem.textContent = technology;
    //listElement.appendChild(listItem);
    if (technology === "java" || technology === "springboot")
      botMessageElement.innerHTML =
        "<p>ওয়েব ডেভেলপমেন্টের জন্য এখানে একটি প্রস্তাবিত রোডম্যাপ রয়েছে:</p><ul><li>HTML</li><li>CSS</li><li>Javascript</li><li>ফ্রন্টেন্ড ফ্রেমওয়ার্ক (যেমন , React, Angular, Vue)</li><li>ব্যাকএন্ড ডেভেলপমেন্ট (যেমন, Node.js, Express)</li><li>ডেটাবেস (যেমন, MongoDB, MySQL, SQLlite,PHP)</li><li >ডিপ্লয়মেন্ট এবং হোস্টিং</li></ul><p>ফ্রন্টেন্ডের জন্য আপনাকে HTML, CSS এবং JavaScript শিখতে হবে। যেহেতু আপনার JAVA/Springboot-এ দক্ষতা রয়েছে, আপনি ব্যাকএন্ড অংশের জন্য Springboot বা Java শিখতে পারেন (যদি আপনি ইতিমধ্যে না জানেন) এবং MySQL, MSSQL বা Oracle ডেটাবেস হিসেবে ব্যবহার করতে পারেন। যাইহোক, আমি আপনাকে Mongo DB-র সাথে Node JS শেখার পরামর্শ দেব কারণ এটি শিল্পে সর্বাধিক চাহিদাযুক্ত প্রযুক্তিগত স্ট্যাক এবং আপনাকে ফ্রন্টেন্ড অংশ এবং কাঠামোর জন্য জাভাস্ক্রিপ্ট শিখতে হবে</p><p>আরো সহায়তার জন্য AspireVerse  দেখুন, আপনার মার্জিত ভবিষ্যত উচ্চাকাঙ্ক্ষা এবং সাধনায় আপনাকে গাইড করার জন্য একটি AspireSarthi বুক করা যাবে</p>";
    else if (
      technology === "javascript" ||
      technology === "react" ||
      technology === "angular" ||
      technology === "vue"
    )
      botMessageElement.innerHTML =
        "<p>ওয়েব ডেভেলপমেন্টের জন্য এখানে একটি প্রস্তাবিত রোডম্যাপ রয়েছে:</p><ul><li>HTML</li><li>CSS</li><li>Javascript</li><li>ফ্রন্টেন্ড ফ্রেমওয়ার্ক (যেমন , React, Angular, Vue)</li><li>ব্যাকএন্ড ডেভেলপমেন্ট (যেমন, Node.js, Express)</li><li>ডেটাবেস (যেমন, MongoDB, MySQL, SQLlite,PHP)</li><li >ডিপ্লয়মেন্ট এবং হোস্টিং</li></ul><p>ফ্রন্টেন্ডের জন্য আপনাকে HTML, CSS এবং JavaScript শিখতে হবে। যেহেতু আপনার ইতিমধ্যেই JavaScript জ্ঞান আছে, আপনি ব্যাকএন্ড অংশের জন্য Node JS ব্যবহার করতে পারেন এবং ডাটাবেস হিসাবে MongoDB ব্যবহার করতে পারেন। আমি আপনাকে Mongo DB বা Firebase সাথে Node JS (Express JS-ও) শিখতে পরামর্শ দেব (যদিও এটির পছন্দ কেস-ভিত্তিক) যেহেতু এটি শিল্পে সবচেয়ে বেশি চাহিদাযুক্ত প্রযুক্তিগত স্ট্যাক এবং আপনাকে ফ্রন্টেন্ড অংশ এবং ফ্রেমওয়ার্কের জন্য জাভাস্ক্রিপ্ট শিখতে হবে।</p><p>আরো সহায়তার জন্য AspireVerse দেখুন বা আপনার মার্জিত ভবিষ্যত উচ্চাকাঙ্ক্ষা এবং সাধনায় আপনাকে গাইড করতে একটি AspireSarthi বুক করুন।</p>";
    else if (technology === "python" || technology === "django")
      botMessageElement.innerHTML =
        "<p>ওয়েব ডেভেলপমেন্টের জন্য এখানে একটি প্রস্তাবিত রোডম্যাপ রয়েছে:</p><ul><li>HTML</li><li>CSS</li><li>Javascript</li><li>ফ্রন্টেন্ড ফ্রেমওয়ার্ক (যেমন , React, Angular, Vue)</li><li>ব্যাকএন্ড ডেভেলপমেন্ট (যেমন, Node.js, Express)</li><li>ডেটাবেস (যেমন, MongoDB, MySQL, SQLlite,PHP)</li><li >ডিপ্লয়মেন্ট এবং হোস্টিং</li></ul><p>ফ্রন্টেন্ডের জন্য আপনাকে HTML, CSS এবং JavaScript শিখতে হবে। যেহেতু আপনার কাছে পাইথন/জ্যাঙ্গোতে জ্ঞান আছে, তাই আপনি ব্যাকএন্ড অংশের জন্য জ্যাঙ্গো বা ফ্লাস্ক ব্যবহার করতে পারেন এবং ডেটাবেস হিসাবে MySQL, PostgresSQL বা MongoDB ব্যবহার করতে পারেন। যাইহোক, আমি আপনাকে মঙ্গো ডিবি-র সাথে নোড জেএস শেখার পরামর্শ দেব কারণ এটি শিল্পে সর্বাধিক চাহিদাযুক্ত প্রযুক্তিগত স্ট্যাক এবং আপনাকে ফ্রন্টেন্ড অংশ এবং কাঠামোর জন্য জাভাস্ক্রিপ্ট শিখতে হবে</p><p>আরো সহায়তার জন্য AspireVerse দেখুন বা আপনার মার্জিত ভবিষ্যত উচ্চাকাঙ্ক্ষা এবং সাধনায় আপনাকে গাইড করতে একটি AspireSarthi বুক করুন।</p>";
    else if (technology === "php")
      botMessageElement.innerHTML =
        "<p>ওয়েব ডেভেলপমেন্টের জন্য এখানে একটি প্রস্তাবিত রোডম্যাপ রয়েছে:</p><ul><li>HTML</li><li>CSS</li><li>Javascript</li><li>ফ্রন্টেন্ড ফ্রেমওয়ার্ক (যেমন , React, Angular, Vue)</li><li>ব্যাকএন্ড ডেভেলপমেন্ট (যেমন, Node.js, Express)</li><li>ডেটাবেস (যেমন, MongoDB, MySQL, SQLlite,PHP)</li><li >ডিপ্লয়মেন্ট এবং হোস্টিং</li></ul><p>ফ্রন্টেন্ডের জন্য আপনাকে HTML, CSS এবং JavaScript শিখতে হবে। যেহেতু আপনার পিএইচপি জ্ঞান আছে, আপনি মাইএসকিউএল ডেটাবেস ব্যবহার করতে পারেন এবং লারাভেল ফ্রেমওয়ার্ক শিখতে পারেন। যাইহোক, আমি আপনাকে মঙ্গো ডিবি-র সাথে নোড জেএস শেখার পরামর্শ দেব কারণ এটি শিল্পে সর্বাধিক চাহিদাযুক্ত প্রযুক্তিগত স্ট্যাক এবং আপনাকে ফ্রন্টেন্ড অংশ এবং কাঠামোর জন্য জাভাস্ক্রিপ্ট শিখতে হবে</p><p>আরো সহায়তার জন্য AspireVerse দেখুন বা আপনার মার্জিত ভবিষ্যত উচ্চাকাঙ্ক্ষা এবং সাধনায় আপনাকে গাইড করতে একটি AspireSarthi বুক করুন।</p>";
    else
      botMessageElement.innerHTML =
        "<p>ওয়েব ডেভেলপমেন্টের জন্য এখানে একটি প্রস্তাবিত রোডম্যাপ রয়েছে:</p><ul><li>HTML</li><li>CSS</li><li>Javascript</li><li>ফ্রন্টেন্ড ফ্রেমওয়ার্ক (যেমন , React, Angular, Vue)</li><li>ব্যাকএন্ড ডেভেলপমেন্ট (যেমন, Node.js, Express)</li><li>ডেটাবেস (যেমন, MongoDB, MySQL, SQLlite,PHP)</li><li >ডিপ্লয়মেন্ট এবং হোস্টিং</li></ul><p>ফ্রন্টেন্ডের জন্য আপনাকে HTML, CSS এবং JavaScript শিখতে হবে।  যাইহোক, আমি আপনাকে ব্যাকএন্ড এবং ডাটাবেসের জন্য মঙ্গো ডিবি সহ নোড জেএস শেখার পরামর্শ দেব কারণ এটি শিল্পে সর্বাধিক চাহিদাযুক্ত প্রযুক্তিগত স্ট্যাক এবং আপনাকে ফ্রন্টেন্ড অংশ এবং কাঠামোর জন্য জাভাস্ক্রিপ্ট শিখতে হবে</p></p><p>আরো সহায়তার জন্য AspireVerse দেখুন বা আপনার মার্জিত ভবিষ্যত উচ্চাকাঙ্ক্ষা এবং সাধনায় আপনাকে গাইড করতে একটি AspireSarthi বুক করুন।</p>";
  });

  // botMessageElement.innerHTML = "Do you know any of these technologies?";
  chatBody.appendChild(botMessageElement);
  chatBody.scrollTop = chatBody.scrollHeight;
  botMessageElement = document.createElement("div");
  botMessageElement.className = "chat-message bot";
  botMessageElement.innerHTML =
    "আপনি ওয়েব ডেভ-এ ইতিমধ্যেই জানেন এমন অন্যান্য উল্লেখিত প্রযুক্তি সম্পর্কে আবার জানতে চান? web টাইপ করুন এবং আবার শুরু করুন, যদি না হয় আপনি app ডোমেন চেক আউট করতে পারেন ";
  chatBody.appendChild(botMessageElement);
  chatBody.scrollTop = chatBody.scrollHeight;
  console.log(userTechnologies);
}

function app() {
  var chatBody = document.getElementById("chatBody");
  var botMessageElement = document.createElement("div");
  botMessageElement.className = "chat-message bot";
  let technologies = [
    "Kotlin",
    "Swift",
    "Flutter",
    "React Native",
    "Xamarin",
    "Dart",
    "ObjectiveC",
    "C#",
    "Nothing",
  ];
  var listElement = document.createElement("ul");
  listElement.className = "tech-list";
  chatBody.appendChild(listElement);

  technologies.forEach((technology) => {
    var listItem = document.createElement("li");
    listItem.textContent = technology;
    listElement.appendChild(listItem);
  });

  botMessageElement.innerHTML =
    "আপনি কি এই প্রযুক্তিগুলির কোনটি জানেন? রোডম্যাপ জানার জন্য একবারে একটি প্রযুক্তি লিখুন এবং যদি আপনি না জানেন তবে nothing লিখুন";
  chatBody.appendChild(botMessageElement);
  chatBody.scrollTop = chatBody.scrollHeight;
}

function expapp(userInput) {
  var userTechnologies = [];

  var technologies = userInput.split(",").map((tech) => tech.trim());
  userTechnologies = userTechnologies.concat(technologies);
  console.log(userTechnologies);
  var chatBody = document.getElementById("chatBody");
  var botMessageElement = document.createElement("div");
  botMessageElement.className = "chat-message bot";

  //var listElement = document.createElement("ul");
  //listElement.className = "tech-list";
  //chatBody.appendChild(listElement);

  userTechnologies.forEach((technology) => {
    //var listItem = document.createElement("li");
    //listItem.textContent = technology;
    //listElement.appendChild(listItem);
    if (technology === "kotlin")
      botMessageElement.innerHTML =
        "<h2>মোবাইল অ্যাপ ডেভেলপমেন্টের জন্য আমরা এভাবে করতে পারি:</h2><h3>অ্যান্ড্রয়েড অ্যাপ ডেভেলপমেন্ট:</h3><p>প্রোগ্রামিং ভাষা হিসাবে জাভা অথবা কোটলিন, অ্যান্ড্রয়েড এসডিকে (এসডিকে) এবং অ্যান্ড্রয়েড স্টুডিও ডেভেলপমেন্ট এনভায়রনমেন্ট ব্যবহার করা হয়।</p><h3>iOS অ্যাপ ডেভেলপমেন্ট:</h3><p>প্রোগ্রামিং ভাষা হিসাবে সুইফট অথবা অবজেক্টিভ-সি, ডেভেলপমেন্ট এনভায়রনমেন্ট হিসাবে এক্সকোড ব্যবহার করা হয়।</p><h3>ক্রস-প্ল্যাটফর্ম অ্যাপ ডেভেলপমেন্ট:</h3><p>রিয়েক্ট নেটিভ, ফ্লাটার, অথবা জামারিন মত ফ্রেমওয়ার্ক ব্যবহার করে অ্যান্ড্রয়েড এবং iOS উভয়ের জন্য একটি কোডবেস ব্যবহার করে অ্যাপ তৈরি করা হয়।</p><p>তবে, আপনি যদি ইতিমধ্যে জাভা / কোটলিন জানেন, তাহলে আপনি কেবলমাত্র অ্যান্ড্রয়েড ডেভেলপমেন্টে নিয়ে চলতে পারেন, কিন্তু সেরা হবে হাইব্রিড টেকনোলজি ব্যবহার করা। উদাহরণস্বরূপ, ফ্লাটার বা রিয়েক্ট নেটিভ এমন ফ্রেমওয়ার্ক নতুন এবং বেশি সহজলভ্যতা প্রদান করে।</p><p>আরও সমর্থনের জন্য AspireVerse দেখুন বা আপনার সুন্দর ভবিষ্যতের লক্ষ্য এবং পুরস্কারে আপনাকে নির্দেশ করার জন্য একজন AspireSarthi অফার করুন।</p>";
    else if (technology === "react native")
      botMessageElement.innerHTML =
        "<h2>মোবাইল অ্যাপ ডেভেলপমেন্টের জন্য এই মত করতে পারি:</h2><h3>অ্যান্ড্রয়েড অ্যাপ ডেভেলপমেন্ট:</h3><p>প্রোগ্রামিং ভাষা হিসাবে জাভা অথবা কোটলিন, অ্যান্ড্রয়েড এসডিকে (এসডিকে) এবং অ্যান্ড্রয়েড স্টুডিও ডেভেলপমেন্ট এনভায়রনমেন্ট ব্যবহার করা হয়।</p><h3>iOS অ্যাপ ডেভেলপমেন্ট:</h3><p>প্রোগ্রামিং ভাষা হিসাবে সুইফট অথবা অবজেক্টিভ-সি, এবং ডেভেলপমেন্ট এনভায়রনমেন্ট হিসাবে এক্সকোড ব্যবহার করা হয়।</p><h3>ক্রস-প্ল্যাটফর্ম অ্যাপ ডেভেলপমেন্ট:</h3><p>React Native, Flutter বা Xamarin এর মতো ফ্রেমওয়ার্ক ব্যবহার করে অ্যান্ড্রয়েড এবং iOS উভয়ের জন্য একটি কোডবেস ব্যবহার করে অ্যাপ তৈরি করা যায়।</p><p>তবে, আপনি ইতিমধ্যে React Native জানেন, তাই হাইব্রিড টেকনোলজি ব্যবহার করা সেরা। কিন্তু বর্তমানে শিল্পে Flutter অনেক জনপ্রিয়, তাই আপনি এটিও চেষ্টা করতে পারেন।</p><p>আরও সমর্থনের জন্য AspireVerse দেখুন বা আপনার সুন্দর ভবিষ্যতের লক্ষ্য এবং পুরস্কারে আপনাকে নির্দেশ করার জন্য AspireSarthi কে বুক করুন।</p>";
    else if (technology === "dart" || technology === "flutter")
      botMessageElement.innerHTML =
            "<h2>মোবাইল অ্যাপ ডেভেলপমেন্টের জন্য এভাবে করতে পারি:</h2><h3>অ্যান্ড্রয়েড অ্যাপ ডেভেলপমেন্ট:</h3><p>প্রোগ্রামিং ভাষা হিসাবে জাভা অথবা কোটলিন, অ্যান্ড্রয়েড এসডিকে (এসডিকে) এবং অ্যান্ড্রয়েড স্টুডিও ডেভেলপমেন্ট এনভায়রনমেন্ট ব্যবহার করা হয়।</p><h3>iOS অ্যাপ ডেভেলপমেন্ট:</h3><p>প্রোগ্রামিং ভাষা হিসাবে সুইফট অথবা অবজেক্টিভ-সি, এবং ডেভেলপমেন্ট এনভায়রনমেন্ট হিসাবে এক্সকোড ব্যবহার করা হয়।</p><h3>ক্রস-প্ল্যাটফর্ম অ্যাপ ডেভেলপমেন্ট:</h3><p>ফ্রেমওয়ার্কগুলি যেমন React Native, Flutter বা Xamarin ব্যবহার করে একই কোডবেস দিয়ে অ্যান্ড্রয়েড এবং iOS উভয়ের জন্য অ্যাপ তৈরি করা যায়।</p><p>তবে, আপনি যদি ইতিমধ্যে ডার্ট/ফ্লাটার জানেন, তাহলে ফ্লাটার হল সেরা হাইব্রিড ফ্রেমওয়ার্ক যা কমিউনিটি থেকে অনেক সমর্থন পায়।</p><p>আরও সমর্থনের জন্য AspireVerse দেখুন বা AspireSarthi এ যোগাযোগ করে অভিযানের সুন্দর ভবিষ্যতে আপনাকে নির্দেশ করার জন্য একজন AspireSarthi বুক করুন।</p>";
      else if (technology === "xamarin" || technology === "c#")
      botMessageElement.innerHTML =
        "<h2>মোবাইল অ্যাপ ডেভেলপমেন্টের জন্য এভাবে করতে পারি:</h2><h3>অ্যান্ড্রয়েড অ্যাপ ডেভেলপমেন্ট:</h3><p>প্রোগ্রামিং ভাষা হিসাবে জাভা অথবা কোটলিন, অ্যান্ড্রয়েড এসডিকে (এসডিকে) এবং অ্যান্ড্রয়েড স্টুডিও ডেভেলপমেন্ট এনভায়রনমেন্ট ব্যবহার করা হয়।</p><h3>iOS অ্যাপ ডেভেলপমেন্ট:</h3><p>প্রোগ্রামিং ভাষা হিসাবে সুইফট অথবা অবজেক্টিভ-সি, এবং ডেভেলপমেন্ট এনভায়রনমেন্ট হিসাবে এক্সকোড ব্যবহার করা হয়।</p><h3>ক্রস-প্ল্যাটফর্ম অ্যাপ ডেভেলপমেন্ট:</h3><p>একটি কোডবেস ব্যবহার করে অ্যান্ড্রয়েড এবং iOS উভয়ের জন্য অ্যাপ তৈরি করতে সমর্থন করে React Native, Flutter বা Xamarin এর মত ফ্রেমওয়ার্কগুলি ব্যবহার করা হয়।</p><p>তবে, আপনি যদি ইতিমধ্যে C#/Xamarin জানেন, তাহলে Xamarin হল ভালো একটি ফ্রেমওয়ার্ক যা কাজ করতে পারে। তবে বর্তমানে শিল্পে Flutter অনেকটা জনপ্রিয়, তাই আপনি এটিও চেষ্টা করতে পারেন।</p><p>আরও সমর্থনের জন্য AspireVerse দেখুন বা AspireSarthi এ যোগাযোগ করে অভিযানের সুন্দর ভবিষ্যতে আপনাকে নির্দেশ করার জন্য একটি AspireSarthi বুক করুন।</p>";
      else if (technology === "swift" || technology === "objectivec")
      botMessageElement.innerHTML =
        "<h2>মোবাইল অ্যাপ ডেভেলপমেন্টের জন্য এভাবে করতে পারি:</h2><h3>অ্যান্ড্রয়েড অ্যাপ ডেভেলপমেন্ট:</h3><p>জাভা বা কোটলিন হিসাবে প্রোগ্রামিং ভাষা, অ্যান্ড্রয়েড এসডিকে (এসডিকে) এবং অ্যান্ড্রয়েড স্টুডিও ডেভেলপমেন্ট এনভায়রনমেন্ট।</p><h3>iOS অ্যাপ ডেভেলপমেন্ট:</h3><p>সুইফট বা অবজেক্টিভ-সি হিসাবে প্রোগ্রামিং ভাষা, এক্সকোড হিসাবে ডেভেলপমেন্ট এনভায়রনমেন্ট।</p><h3>ক্রস-প্ল্যাটফর্ম অ্যাপ ডেভেলপমেন্ট:</h3><p>একটি কোডবেস ব্যবহার করে অ্যান্ড্রয়েড এবং iOS উভয়ের জন্য অ্যাপ তৈরি করা যায় যেমন React Native, Flutter, অথবা Xamarin।</p><p>তবে, আপনি যদি ইতিমধ্যে সুইফট/অবজেক্টিভ-সি জানেন, তাহলে আপনি কেবলমাত্র iOS ডেভেলপমেন্টের জন্য চলে যেতে পারেন, কিন্তু সেরা হবে হাইব্রিড টেকনোলজি ব্যবহার করা যেমন Flutter বা React Native যেগুলি নতুন এবং সময়ের সাথে সাথে বেশি সুযোগ সম্পন্ন।</p><p>আরও সমর্থনের জন্য AspireVerse দেখুন বা AspireSarthi থেকে AspireSarthi নিয়োগ করে আপনার সুন্দর ভবিষ্যতের লক্ষ্য এবং প্রচেষ্টার পথে আপনাকে নির্দেশিত করুন।</p>";
      else
      botMessageElement.innerHTML =
        "<h2>মোবাইল অ্যাপ ডেভেলপমেন্টের জন্য আমরা এভাবে করতে পারি:</h2><h3>অ্যান্ড্রয়েড অ্যাপ ডেভেলপমেন্ট:</h3><p>প্রোগ্রামিং ভাষা হিসাবে জাভা অথবা কোটলিন, অ্যান্ড্রয়েড এসডিকে (এসডিকে) এবং অ্যান্ড্রয়েড স্টুডিও ডেভেলপমেন্ট এনভায়রনমেন্ট ব্যবহার করা হয়।</p><h3>iOS অ্যাপ ডেভেলপমেন্ট:</h3><p>প্রোগ্রামিং ভাষা হিসাবে সুইফট অথবা অবজেক্টিভ-সি, এবং ডেভেলপমেন্ট এনভায়রনমেন্ট হিসাবে এক্সকোড ব্যবহার করা হয়।</p><h3>ক্রস-প্ল্যাটফর্ম অ্যাপ ডেভেলপমেন্ট:</h3><p>অ্যান্ড্রয়েড এবং iOS উভয়ের জন্য একটি কোডবেস ব্যবহার করে অ্যাপ তৈরি করতে সমর্থন করে React Native, Flutter, বা Xamarin এর মতো ফ্রেমওয়ার্কগুলি।</p><p>তবে, সেরা হবে হাইব্রিড টেকসওলজি ব্যবহার করা যেমন Flutter বা React Native যা বেশি সুযোগ সম্পন্ন।</p><p>আরও সমর্থনের জন্য AspireVerse দেখুন বা AspireSarthi থেকে AspireSarthi নিয়োগ করে আপনার সুন্দর ভবিষ্যতের লক্ষ্য এবং প্রচেষ্টার পথে আপনাকে নির্দেশিত করুন।</p>        ";
    });

  // botMessageElement.innerHTML = "Do you know any of these technologies?";
  chatBody.appendChild(botMessageElement);
  chatBody.scrollTop = chatBody.scrollHeight;
  botMessageElement = document.createElement("div");
  botMessageElement.className = "chat-message bot";
  botMessageElement.innerHTML =
  "আপনি জানতে চান অ্যাপ ডেভেলপমেন্টে আরেকটি টেকনোলজি সম্পর্কে যা আপনি ইতিমধ্যে জানেন? তাহলে আবার শুরু করতে app লিখুন। না হলে, আপনি web ডোমেইন চেক করতে পারেন , web টাইপ করে।";
    chatBody.appendChild(botMessageElement);
  chatBody.scrollTop = chatBody.scrollHeight;
  console.log(userTechnologies);
}
