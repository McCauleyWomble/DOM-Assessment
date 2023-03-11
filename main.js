const p1 = document.createElement("p1");
let content = p1.innerHTML = "That's all folks!";
let main = document.querySelector("main");
let joke1 = "Singing in the shower is fun until you get soap in your mouth. Then it's a soap opera.";
let joke2 = "Knock Knock. Who is there? Boo. Boo who? Don’t cry, it’s just a joke.";
let joke3 = "What do you call a fish wearing a bowtie? Sofishticated.";
let templateheader = "My Jokes";
let temp = `${templateheader}
<ul><li>${joke1}</li>
<li>${joke2}</li>
<li>${joke3}</li>
</ul>`;
main.innerHTML = temp;
document.body.append(content);