document.getElementById("sendButton").addEventListener("click", sendMessage);
document.getElementById("userInput").addEventListener("keypress", function (e) {
  if (e.key === "Enter") {
    sendMessage();
  }
});

function sendMessage() {
  var userInput1 = document.getElementById("userInput").value;
 let userInput=userInput1.toLowerCase();
  if (userInput.trim() !== "") {
    addUserMessage(userInput);
    if (userInput === "Web" || userInput === "web" || userInput==="web development") web();
    else if (userInput.includes("java")||userInput.includes("python")||userInput.includes("django")||userInput.includes("springboot")||userInput.includes("mysql")||userInput.includes("mongo db")||userInput.includes("php")||userInput.includes("none")||userInput.includes("html")||userInput.includes("css")||userInput.includes("javascript")||userInput.includes("react")||userInput.includes("angular")||userInput.includes("vue")||userInput.includes("node")) expweb(userInput);
    else if (userInput==="app")
    app();
    else if(userInput.includes("kotlin")||userInput.includes("swift")||userInput.includes("objectivec")||userInput.includes("flutter")||userInput.includes("react native")||userInput.includes("xamarin")||userInput.includes("c#")||userInput.includes("dart")||userInput.includes("nothing"))
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

  botMessageElement.innerHTML = "Do you know any of these technologies?Write one technology at a time to know the roadmap and if you dont know then write none";
  chatBody.appendChild(botMessageElement);
  chatBody.scrollTop = chatBody.scrollHeight;
}
function fuch() {
  var chatBody = document.getElementById("chatBody");
  var botMessageElement = document.createElement("div");
  botMessageElement.className = "chat-message bot";
  botMessageElement.innerHTML =
    "I cannot Understand What you are saying. But if you need more technical knowledge or expretise in the domains check out AspireVerse or book a AspireSarthi to guide you in your elegant future ambitions and pursuits.";
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
    if (technology === "java"|| technology==="springboot")
      botMessageElement.innerHTML =
        "<p>Here is a suggested roadmap for Web Development:</p><ul><li>HTML</li><li>CSS</li><li>JavaScript</li><li>Frontend Framework (e.g., React, Angular, Vue)</li><li>Backend Development (e.g., Node.js, Express)</li><li>Database (e.g., MongoDB, MySQL, SQLlite,PHP)</li><li>Deployment and Hosting</li></ul><p>For Frontend you have to Learn HTML,CSS and JavaScript. Since you have expertise in JAVA/Springboot, you can use Springboot or Learn Java(if you dont know already) for the Backend part and use MySQL, MSSQL or Oracle as Database. However, I will suggest you to learn Node Js with Mongo DB since this is the most demanded tech stack in the industry and you have to learn JavaScript for Frontend part and frameworks</p><p>For further support check out AspireVerse or book a AspireSarthi to guide you in your elegant future ambitions and pursuits.</p>";
    else if(technology ==="javascript" || technology==="react"||technology==="angular"||technology==="vue")
        botMessageElement.innerHTML="<p>Here is a suggested roadmap for Web Development:</p><ul><li>HTML</li><li>CSS</li><li>JavaScript</li><li>Frontend Framework (e.g., React, Angular, Vue)</li><li>Backend Development (e.g., Node.js, Express)</li><li>Database (e.g., MongoDB, MySQL, SQLlite,PHP)</li><li>Deployment and Hosting</li></ul><p>For Frontend you have to Learn HTML,CSS and JavaScript. Since you already have knowledge in JavaScript, you can use Node Js for the Backend part and use MongoDB as database. I will suggest you to learn Node Js(Express Js also) with Mongo DB or Firebase (though its choice is case-based) since this is the most demanded tech stack in the industry and you have to learn JavaScript for Frontend part and frameworks React JS and Next Js or Angular.</p><p>For further support check out AspireVerse or book a AspireSarthi to guide you in your elegant future ambitions and pursuits.</p>";
    else if(technology==="python"||technology==="django")
    botMessageElement.innerHTML="<p>Here is a suggested roadmap for Web Development:</p><ul><li>HTML</li><li>CSS</li><li>JavaScript</li><li>Frontend Framework (e.g., React, Angular, Vue)</li><li>Backend Development (e.g., Node.js, Express)</li><li>Database (e.g., MongoDB, MySQL, SQLlite,PHP)</li><li>Deployment and Hosting</li></ul><p>For Frontend you have to Learn HTML,CSS and JavaScript. Since you have knowledge in Python/Django, you can use Django or Flask for the Backend part and use MySQL, PostgresSQL or MongoDB as Database. However, I will suggest you to learn Node Js with Mongo DB since this is the most demanded tech stack in the industry and you have to learn JavaScript for Frontend part and frameworks</p><p>For further support check out AspireVerse or book a AspireSarthi to guide you in your elegant future ambitions and pursuits.</p>";
    else if(technology==="php")
    botMessageElement.innerHTML="<p>Here is a suggested roadmap for Web Development:</p><ul><li>HTML</li><li>CSS</li><li>JavaScript</li><li>Frontend Framework (e.g., React, Angular, Vue)</li><li>Backend Development (e.g., Node.js, Express)</li><li>Database (e.g., MongoDB, MySQL, SQLlite,PHP)</li><li>Deployment and Hosting</li></ul><p>For Frontend you have to Learn HTML,CSS and JavaScript and Frameworks(React, Angular etc). Since you have knowledge in PHP, you  use MySQL Database and learn the Laravel framework. However, I will suggest you to learn Node Js with Mongo DB since this is the most demanded tech stack in the industry and you have to learn JavaScript for Frontend part and frameworks</p><p>For further support check out AspireVerse or book a AspireSarthi to guide you in your elegant future ambitions and pursuits.</p>";    
    else
       botMessageElement.innerHTML= "<p>Here is a suggested roadmap for Web Development:</p><ul><li>HTML</li><li>CSS</li><li>JavaScript</li><li>Frontend Framework (e.g., React, Angular, Vue)</li><li>Backend Development (e.g., Node.js, Express)</li><li>Database (e.g., MongoDB, MySQL, SQLlite,PHP)</li><li>Deployment and Hosting</li></ul><p>For Frontend you have to Learn HTML,CSS and JavaScript.  However, I will suggest you to learn Node Js with Mongo DB for backend and database since this is the most demanded tech stack in the industry and you have to learn JavaScript for Frontend part and frameworks</p><p>For further support check out AspireVerse or book a AspireSarthi to guide you in your elegant future ambitions and pursuits.</p>";
    }
    

  );

  // botMessageElement.innerHTML = "Do you know any of these technologies?";
  chatBody.appendChild(botMessageElement);
  chatBody.scrollTop = chatBody.scrollHeight;
  botMessageElement = document.createElement("div");
  botMessageElement.className = "chat-message bot";
  botMessageElement.innerHTML="Want to know about other Technologies again that you already know in Web Dev ? Then type web and start again , If no you can check out other domains by typing the domain names - AI, Web3, App respectively "
  chatBody.appendChild(botMessageElement);
  chatBody.scrollTop = chatBody.scrollHeight;
  console.log(userTechnologies);
}

function app(){
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
    "Nothing"
  ];
  var listElement = document.createElement("ul");
  listElement.className = "tech-list";
  chatBody.appendChild(listElement);

  technologies.forEach((technology) => {
    var listItem = document.createElement("li");
    listItem.textContent = technology;
    listElement.appendChild(listItem);
  });

  botMessageElement.innerHTML = "Do you know any of these technologies?Write one technology at a time to know the roadmap and if you dont know then write none";
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
      if (technology==="kotlin")
        botMessageElement.innerHTML =
          "<h2>For Mobile App Development we can do it accordingly like this:</h2><h3>Android App Development:</h3><p>Java or Kotlin as the programming language, Android SDK, Android Studio as the development environment.</p><h3>iOS App Development:</h3><p>Swift or Objective-C as the programming language, Xcode as the development environment.</p><h3>Cross-Platform App Development:</h3><p>Frameworks like React Native, Flutter, or Xamarin that allow building apps for both Android and iOS using a single codebase.</p><p>However , since you already know Java/Kotlin , you could either opt for only Android development but best will be to use hybrid Tech Like Flutter or React Native as this frameworks are newer and provide more flexibility.</p><p>For further support check out AspireVerse or book a AspireSarthi to guide you in your elegant future ambitions and pursuits.</p> ";
      else if(technology==="react native")
          botMessageElement.innerHTML="<h2>For Mobile App Development we can do it accordingly like this:</h2><h3>Android App Development:</h3><p>Java or Kotlin as the programming language, Android SDK, Android Studio as the development environment.</p><h3>iOS App Development:</h3><p>Swift or Objective-C as the programming language, Xcode as the development environment.</p><h3>Cross-Platform App Development:</h3><p>Frameworks like React Native, Flutter, or Xamarin that allow building apps for both Android and iOS using a single codebase.</p><p>However , since you already know React Native , so its best to use hybrid Tech. However Flutter is booming today in the industry so can also try that too.</p><p>For further support check out AspireVerse or book a AspireSarthi to guide you in your elegant future ambitions and pursuits.</p>";
      else if(technology==="dart"||technology==="flutter")
      botMessageElement.innerHTML="<h2>For Mobile App Development we can do it accordingly like this:</h2><h3>Android App Development:</h3><p>Java or Kotlin as the programming language, Android SDK, Android Studio as the development environment.</p><h3>iOS App Development:</h3><p>Swift or Objective-C as the programming language, Xcode as the development environment.</p><h3>Cross-Platform App Development:</h3><p>Frameworks like React Native, Flutter, or Xamarin that allow building apps for both Android and iOS using a single codebase.</p><p>However , since you already know Dart/Flutter , Flutter is the best hybrid framework to work with lots of support from the community.</p><p>For further support check out AspireVerse or book a AspireSarthi to guide you in your elegant future ambitions and pursuits.</p>";
      else if(technology==="xamarin"||technology==="c#")
      botMessageElement.innerHTML="<h2>For Mobile App Development we can do it accordingly like this:</h2><h3>Android App Development:</h3><p>Java or Kotlin as the programming language, Android SDK, Android Studio as the development environment.</p><h3>iOS App Development:</h3><p>Swift or Objective-C as the programming language, Xcode as the development environment.</p><h3>Cross-Platform App Development:</h3><p>Frameworks like React Native, Flutter, or Xamarin that allow building apps for both Android and iOS using a single codebase.</p><p>However , since you already know C#/Xamarin , so Xamarin will be a good framework to work.However Flutter is booming today in the industry so can also try that too.</p><p>For further support check out AspireVerse or book a AspireSarthi to guide you in your elegant future ambitions and pursuits.</p>";
      
      else if(technology==="swift"||technology==="objectivec")
      botMessageElement.innerHTML="<h2>For Mobile App Development we can do it accordingly like this:</h2><h3>Android App Development:</h3><p>Java or Kotlin as the programming language, Android SDK, Android Studio as the development environment.</p><h3>iOS App Development:</h3><p>Swift or Objective-C as the programming language, Xcode as the development environment.</p><h3>Cross-Platform App Development:</h3><p>Frameworks like React Native, Flutter, or Xamarin that allow building apps for both Android and iOS using a single codebase.</p><p>However , since you already know Swift/ObjectiveC , you could either opt for only IOS development but best will be to use hybrid Tech Like Flutter or React Native as this frameworks are newer and provide more flexibility.</p><p>For further support check out AspireVerse or book a AspireSarthi to guide you in your elegant future ambitions and pursuits.</p>";    
      else
         botMessageElement.innerHTML= "<h2>For Mobile App Development we can do it accordingly like this:</h2><h3>Android App Development:</h3><p>Java or Kotlin as the programming language, Android SDK, Android Studio as the development environment.</p><h3>iOS App Development:</h3><p>Swift or Objective-C as the programming language, Xcode as the development environment.</p><h3>Cross-Platform App Development:</h3><p>Frameworks like React Native, Flutter, or Xamarin that allow building apps for both Android and iOS using a single codebase.</p><p>However , best will be to use hybrid Tech Like Flutter or React Native as they provide more flexibility.</p><p>For further support check out AspireVerse or book a AspireSarthi to guide you in your elegant future ambitions and pursuits.</p> ";
         
      }
      
  
    );
  
    // botMessageElement.innerHTML = "Do you know any of these technologies?";
    chatBody.appendChild(botMessageElement);
    chatBody.scrollTop = chatBody.scrollHeight;
    botMessageElement = document.createElement("div");
    botMessageElement.className = "chat-message bot";
    botMessageElement.innerHTML="Want to know about other Technologies again that you already know in App Dev ? Then type app and start again , If no you can check out other domains by typing the domain names - AI, Web3, web respectively "
    chatBody.appendChild(botMessageElement);
    chatBody.scrollTop = chatBody.scrollHeight;
    console.log(userTechnologies);
  }