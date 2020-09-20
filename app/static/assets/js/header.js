function more()
{
    class_show = document.getElementsByClassName('show')
    image_container = document.getElementById('images_container')

    if (image_container.style.marginTop == "15%")
    {
        Array.from(class_show).forEach((i) =>{
            i.style.display ="block";
        });
        image_container.style.marginTop = "45%"
        button = document.getElementById("show_more").innerText = '–'
    }
    else
    {
        Array.from(class_show).forEach((i) =>{
            i.style.display ="none";
        });
        button = document.getElementById("show_more").innerText = '+';

        image_container.style.marginTop = "15%"
        
    }
}
function a_click(element)
{
    element.style.color = '#FF0000';
    element.style.textDecoration= 'none';
}