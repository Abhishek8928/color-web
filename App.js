console.log("App.js is connected");



let navItem = document.getElementsByClassName("nav-items")[0];

let showLinkHandler = () => {

    if (navItem.classList.contains("hide-link"))
    {
        console.log("goes inside if")
        navItem.classList.remove("hide-link")
        navItem.classList.add("w-100")
    }
    else {
        navItem.classList.add("hide-link")
        navItem.classList.remove("w-100");
    }
}