var chrs = [
    {name:"Optimus Prime", class: "leader", afl:"autobot", vehicle:"truck"},
    {name:"Megatron", class: "leader", afl:"decepticon", vehicle:"tank"},
    {name:"Bumblebee", class: "scout", afl:"autobot", vehicle:"car"},
    {name:"Starscream", class: "scout", afl:"decepticon", vehicle:"plane"},
    {name:"Ironhide", class: "soldier", afl:"autobot", vehicle:"truck"},
    {name:"Brawl", class: "soldier", afl:"decepticon", vehicle:"tank"},
];

var vColors = {
    "truck": "blue",
    "tank": "green",
    "car": "gold",
    "plane": "white"
};

for (var i = 0; i < chrs.length; i++) {
    let ele = document.createElement("div");
    ele.className = "character";
    ele.innerHTML += "<p>Name: " + chrs[i].name + "</p>";
    ele.innerHTML += "<p>Class: " + chrs[i].class.toUpperCase() + "</p>";
    ele.innerHTML += '<p style="color:' + vColors[chrs[i].vehicle] + '">Vehicle: ' + chrs[i].vehicle + "</p>";
    if (chrs[i].afl === "autobot") {
        ele.className += " autobot";
        ele.innerHTML += '<img src="https://cdn4.iconfinder.com/data/icons/proglyphs-free/512/Autobot-512.png">';
    } else if (chrs[i].afl === "decepticon") {
        ele.className += " decepticon";
        ele.innerHTML += '<img src="https://cdn4.iconfinder.com/data/icons/proglyphs-free/512/Decepticon-512.png">';
    }
    document.body.appendChild(ele);
}