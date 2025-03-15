const header = document.getElementById('header');
const homeSection = document.getElementById("home");
const barButton = document.querySelector(".bar-light");
const mobileNav = document.getElementById("stackednav");

//Attach events
attachClickForLinks(mobileNav);
window.onscroll = function(){
    if(document.body.clientWidth < 768 && document.body.clientWidth > 480)
    {
        return;
    }
    if(document.body.scrollTop > homeSection.offsetHeight || document.documentElement.scrollTop > homeSection.offsetHeight)
    {
        header.className = "header " + "header-scroll " + "box-shadow";
    }
    else
    {
        header.className = "header";
    }
}

barButton.onclick = function(){
    if(mobileNav.className.includes("nav-medium-show"))
    {
        mobileNav.className = mobileNav.className.replace("nav-medium-show","");
    }
    else
    {
        if(mobileNav.className.endsWith(" "))
            mobileNav.className += "nav-medium-show"
        else
            mobileNav.className += " nav-medium-show";
    }
}
function destroyModal()
{
    document.getElementById("modal").style.display = "none";
}
function attachClickForLinks(stackedNav)
{
    for(let i = 0; i < stackedNav.children.length;i++)
    {
        stackedNav.children[i].onclick = function()
        {
            stackedNav.className =  stackedNav.className.replace("nav-medium-show","");
        }
    }
}