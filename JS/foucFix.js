document.addEventListener('DOMContentLoaded', () => {
    document.body.style.display = 'block'; // Change to 'visible' if using visibility
});

window.onload = () => {
    document.body.style.visibility = 'visible';
};

const section = ["uni", "gameJam", "misc"];
const buttonsId = ["uniButton", "gameJamButton", "miscButton"];

function ShowHide(id)
{
    let el = document.getElementById(id)

    if (el.style.display === 'none')
    {
        el.style.display = 'block'
        section.forEach((element) => {if (element !== id) Hide(element)})
        UpdateButtons(id)
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

function UpdateButtons(selected)
{
    let id = selected + "Button"
    let el = document.getElementById(id)


    el.classList.add("flexButtonSelected")
    el.classList.remove("flexButton")
    buttonsId.forEach((element) =>
    {
        if (element !== id)
        {
            let el = document.getElementById(element)
            el.classList.add("flexButton")
            el.classList.remove("flexButtonSelected")
        }
    })
}
//uni
//gameJam
//misc