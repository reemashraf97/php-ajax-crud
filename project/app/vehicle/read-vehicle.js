$(document).ready(function() {

    // show list of product on first load
    showVehicleFirstPage();

    // when a 'read products' button was clicked
    $(document).on('click', '.read-vehicle-button', function() {
        showVehicleFirstPage();
    });

    // when a 'page' button was clicked
    $(document).on('click', '.pagination li', function() {
        // get json url
        var json_url = $(this).find('a').attr('data-page');

        // show list of products
        showVehicle(json_url);
    });


});

function showVehicleFirstPage() {
    var json_url = "http://localhost/api/vehicle/read_paging.php";
    showVehicle(json_url);
}

// function to show list of products
function showVehicle(json_url) {

    // get list of products from the API
    $.getJSON(json_url, function(data) {

        // html for listing products
        readVehicleTemplate(data, "");

        // chage page title
        changePageTitle("Read vehicles");

    });
}