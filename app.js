let information = $(`<div>`).addClass(`information`).prependTo(`body`)

let countryName = $(`#country-name`).addClass(`country-name`).appendTo(`.information`)
$(`#show`).addClass(`show`).appendTo(`.information`)

let japan = $(`<div>`).addClass('japan').prependTo(`body`)
$(`p`).appendTo(japan)

let preloader = $(`<div>`).addClass(`preloader`).prependTo(`body`)

information.css({
    position: 'absolute',
    top: `50%`,
    left: `50%`,
    transform: 'translate(-50%, -50%)',
    fontSize: `30px`,
})

preloader.css({
    position: 'absolute',
    top: `30%`,
    left: `50%`,
    transform: 'translate(-50%, -50%)',
    fontSize: `30px`,
    display: `none`,
})


$(`.japan`).css({
    position: 'absolute',
    top: `50%`,
    left: `50%`,
    transform: 'translate(-50%, -50%)',
    display: `none`
})

let imgFlag = $(`<img>`)

$(`#flag`).replaceWith(imgFlag)

imgFlag.css({
    height: '100px',
    width: '200px',
})

$(`#show`).on(`click`, () => {

    let nameCountry = countryName.val()

    if (nameCountry) {
        $(`.preloader`).show()
        $(`.japan`).show()

        $.ajax({
            method: 'GET',
            url: `https://restcountries.com/v2/name/${nameCountry}`,
            success: (response) => {
                let countries = response[0];
                $(`#name`).text(countries.name);
                $(`#region`).text(countries.region);
                $(`#subregion`).text(countries.subregion);
                $(`#capital`).text(countries.capital);
                imgFlag.attr('src', countries.flag);
                $(`.preloader`).hide()
            },
            error: () => {
                $.alert({
                    title: 'Alert!',
                    content: 'Error - 404',
                });
            }
        })

        information.css({
            display: `none`
        })
    }

})