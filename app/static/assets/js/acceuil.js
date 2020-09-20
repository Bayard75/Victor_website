function animation(text)
{
    div_instagram = document.getElementById('instagram')
    if (text == '+')
    {
        let pagraphe = document.createElement('p');
        pagraphe.setAttribute('id','p_instagram')
        let template =
        `<p>    
        Mail<br/>
        <a href="https://www.instagram.com/forma_gramma/">Instagram</p></a>`;
        pagraphe.innerHTML= template;
        div_instagram.appendChild(pagraphe);
        let span = document.getElementById('animation');
        span.innerText = '–';

    }
    else
    {
        let paragraphe_insta = document.getElementById('p_instagram');
        div_instagram.removeChild(paragraphe_insta);
        let span = document.getElementById('animation');
        span.innerText = '+';
    }
};

function more()
{
    class_show = document.getElementsByClassName('show')
    for (i in class_show)
    {
        i.setAttribute('display','block')
    }
}
function a_click(element)
{
    element.style.color = '#FF0000';
    element.style.textDecoration= 'none';
}