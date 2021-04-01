// product list html
function readVehicleTemplate(data, keywords) {

    var read_vehicle_html = `
        <!-- search products form -->
        <form id='search-vehicle-form' action='#' method='post'>
        <div class='input-group pull-left w-30-pct'>
 
            <input type='text' value='` + keywords + `' name='keywords' class='form-control product-search-keywords' placeholder='Search vehicles...' />
 
            <span class='input-group-btn'>
                <button type='submit' class='btn btn-default' type='button'>
                    <span class='glyphicon glyphicon-search'></span>
                </button>
            </span>
 
        </div>
        </form>
        <br></br>
        <br></br>

 
        <!-- start table -->
        <table class='table table-bordered table-hover'>
 
            <!-- creating our table heading -->
            <tr>
                <th class='w-10-pct'>Vehicle ID</th>
                <th class='w-10-pct'>Model</th>
                <th class='w-15-pct'>Color</th>
                <th class='w-10-pct'>Percentage</th>
                <th class='w-15-pct'>State</th>
                <th class='w-25-pct text-align-center'>Action</th>
            </tr>`;


    // loop through returned list of data
    $.each(data.records, function(key, val) {

        // creating new table row per record
        read_vehicle_html += `<tr>
 
            <td>` + val.vehicle_id + `</td>
            <td>` + val.model + `</td>
            <td>` + val.color + `</td>
            <td>` + val.percentage + `</td>
            <td>` + val.state + `</td>
 
            <!-- 'action' buttons -->
            <td>
                <!-- read product button -->
                <button class='btn btn-primary m-r-10px read-one-vehicle-button' data-id='` + val.vehicle_id + `'>
                    <span class='glyphicon glyphicon-eye-open'></span> Read
                </button>
 
            </td>
        </tr>`;
    });

    // end table
    read_vehicle_html += `</table>`;

    // pagination
    if (data.paging) {
        read_vehicle_html += "<ul class='pagination pull-left margin-zero padding-bottom-2em'>";

        // first page
        if (data.paging.first != "") {
            read_vehicle_html += "<li><a data-page='" + data.paging.first + "'>First Page</a></li>";
        }

        // loop through pages
        $.each(data.paging.pages, function(key, val) {
            var active_page = val.current_page == "yes" ? "class='active'" : "";
            read_vehicle_html += "<li " + active_page + "><a data-page='" + val.url + "'>" + val.page + "</a></li>";
        });

        // last page
        if (data.paging.last != "") {
            read_vehicle_html += "<li><a data-page='" + data.paging.last + "'>Last Page</a></li>";
        }
        read_vehicle_html += "</ul>";
    }

    // inject to 'page-content' of our app
    $("#page-content").html(read_vehicle_html);
}