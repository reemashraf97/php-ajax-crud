$(document).ready(function() {

    // when a 'search products' button was clicked
    $(document).on('submit', '#search-vehicle-form', function() {

        // get search keywords
        var keywords = $(this).find(":input[name='keywords']").val();

        // get data from the api based on search keywords
        $.getJSON("http://localhost/api/vehicle/search.php?s=" + keywords, function(data) {

            // template in products.js
            readProductsTemplate(data, keywords);

            // chage page title
            changePageTitle("Search vehicles: " + keywords);

        });

        // prevent whole page reload
        return false;
    });

});