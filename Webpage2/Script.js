const buttons = document.getElementById('menubuttons');
const menuSections = ['pizza','salad','starter'];

function selectMenu(button,name)
{
    deselectButton();
    deselectMenu(name);
    const item = document.getElementById(`${name}`);
    item.style.display = "block";
    button.className += " red-button";
}
function deselectButton()
{
    for(let i =0; i < buttons.children.length; i++)
    {
        if(buttons.children[i].className.includes("red-button"))
        {
            buttons.children[i].className = buttons.children[i].className.replace("red-button","");
            break;
        }
    }
}
function deselectMenu(selectedMenu)
{
    for(let i = 0; i < menuSections.length; i++)
    {
        if(menuSections[i] !== selectedMenu)
        {
            const item = document.getElementById(`${menuSections[i]}`);
            item.style.display = "none";
        }
    }
}