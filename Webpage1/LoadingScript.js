function attachClickForImages()
{
    const worksSection = document.getElementById("worksamples");
    for(let node = 0; node < worksSection.children.length; node++)
    {
        let currentNode = worksSection.children[node];
        currentNode.onclick = function()
        {
            document.getElementById("img1").src = currentNode.src;
            document.getElementById("modal").style.display = "block";
            document.getElementById("caption").innerText = currentNode.alt;
        }
    }
}

let ready = function(){
    attachClickForImages();
}
document.addEventListener("DOMContentLoaded", ready);