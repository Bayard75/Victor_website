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
        Instagram</p>`;
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