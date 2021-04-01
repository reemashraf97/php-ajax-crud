$(document).ready(function() {

    // handle 'read one' button click
    $(document).on('click', '.read-one-vehicle-button', function() {
        // get product id
        var vehicle_id = $(this).attr('data-id');

        // read product record based on given ID
        $.getJSON("http://localhost/api/vehicle/read_one.php?vehicle_id=" + vehicle_id, function(data) {
            // start html
            var read_one_vehicle_html = `
 
                                    <!-- when clicked, it will show the product's list -->
                                    <div id='read-vehicle' class='btn btn-primary pull-right m-b-15px read-vehicle-button'>
                                        <span class='glyphicon glyphicon-list'></span> Read vehicles
                                    </div>
                                    <!-- product data will be shown in this table -->
                                    <table class='table table-bordered table-hover'>
                                    
                                        <!-- product name -->
                                        <tr>
                                            <td class='w-30-pct'>vehicle ID</td>
                                            <td class='w-70-pct'>` + data.vehicle_id + `</td>
                                        </tr>
                                        <tr>
                                            <td class='w-30-pct'>Model</td>
                                            <td class='w-70-pct'>` + data.model + `</td>
                                        </tr>
                                    
                                        <!-- product price -->
                                        <tr>
                                            <td>Color</td>
                                            <td>` + data.color + `</td>
                                        </tr>
                                    
                                        <!-- product description -->
                                        <tr>
                                            <td>Percentage</td>
                                            <td>` + data.percentage + `</td>
                                        </tr>
                                    
                                        <!-- product category name -->
                                        <tr>
                                            <td>State</td>
                                            <td>` + data.state + `</td>
                                        </tr>
                                    
                                    </table>`;

            // inject html to 'page-content' of our app
            $("#page-content").html(read_one_vehicle_html);

            // chage page title
            changePageTitle("Vehicle Info");
        });
    });

});