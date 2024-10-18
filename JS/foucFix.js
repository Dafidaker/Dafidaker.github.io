document.addEventListener('DOMContentLoaded', () => {
    document.body.style.display = 'block'; // Change to 'visible' if using visibility
});

window.onload = () => {
    document.body.style.visibility = 'visible';
};

const section = ["uni", "gameJam", "misc"];

function ShowHide(id)
{
    let el = document.getElementById(id)

    if (el.style.display === 'none')
    {
        el.style.display = 'block'
        section.forEach((element) => {if (element !== id) Hide(element)})
    }
}

function Show(a)
{
    let el = document.getElementById(a)
    el.style.display = 'block'
}

function Hide(a)
{
    let el = document.getElementById(a)
    el.style.display = 'none'
}

//uni
//gameJam
//misc