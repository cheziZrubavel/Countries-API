
$(document).on("click", ".navbar-brand", ()=>{
    $.ajax({
        url: "https://restcountries.eu/rest/v2/all",
        method:'GET',
        success: (data)=>{
            console.log(data);
                showAllDetalis(data);
        }
    });
});

function showAllDetalis(object) {
    $("#div").empty();
    let image = '';
        for (const item of object) {
            image += `<div id="inDiv">
            <b>Name:</b> ${item.name} <br>
            <b>Top Level Domain:</b> ${item.topLevelDomain} <br>
            <b>Capital:</b> ${item.capital} <br>
            <b>Currencies:</b> <br>
             ${JSON.stringify(item.currencies)} <br><br>
            <img src="${item.flag}" class="img-fluid" alt="Responsive image">
            </div>`;
        }
        $("#div").append(image);
    };

// ---------------------------------------------------------------------------

    $(document).on("click", "#search", ()=>{
        let name = $("input").val();
        $.ajax({
            url: "https://restcountries.eu/rest/v2/name/"+name,
            method:'GET',
            success: (data)=>{
                console.log(data);
                showCountry(data);
            }
        });
    });

    function showCountry(country) {
        $("#div").empty();
        let image = '';
            for (const item of country) {
                image += `<div id="inDiv">
                <b>Name:</b> ${item.name} <br>
                <b>Top Level Domain:</b> ${item.topLevelDomain} <br>
                <b>Capital:</b> ${item.capital} <br>
                <b>Currencies:</b> <br>
                 ${JSON.stringify(item.currencies)} <br><br>
                <img src="${item.flag}" class="img-fluid" alt="Responsive image">
                </div>`;
            }
            $("#div").append(image);
        };