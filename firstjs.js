const listItems = document.querySelectorAll("li")

function toggleDone(e)
{
    if(!e.target.className)
    {
        e.target.className = "done";
    }
    else
    {
        e.target.className = "";
    }
}

listItems.forEach((item) => {
    item.addEventListener("click", toggleDone);
});

const myImage = document.querySelector("img");

myImage.addEventListener("click", () => {
    const mySrc = myImage.getAttribute("src");

    if (mySrc == "parrot.jpg")
    {
        myImage.setAttribute("src", "falcon.jpg");
    }
    else
    {
        myImage.setAttribute("src", "parrot.jpg");
    }
});

let myButton = document.querySelector("button");
let myHeading = document.querySelector("h1");

function setUserName()
{
    const myName = prompt("Please enter your name");
    if (!myName)
        setUserName();
    localStorage.setItem("name", myName);
    myHeading.textContent = `You are cool, ${myName}`;
}

if(!localStorage.getItem("name"))
{
    setUserName();
}
else
{
    const storedName = localStorage.getItem("name");
    myHeading.textContent = `You are cool, ${storedName}`;
}

myButton.addEventListener("click", () => {
    setUserName();
});