let coordinates = {}

$(document).ready(function (){
    get_coordinnates();
})



function get_coordinates(){
    let searchParams = new URLSearchParams(window.location.search)
    if(searchParams.has('source') && searchParams.has('destination')){
        let source = searchParams.get('source')
        let destination = searchParams.get('destination')
        coordinates.source_lat = source_split(";")[0]
        coordinates.source_lon = source_split(";")[1]
    } else{
        alert("Coordinates not selected!")
        window.history.back();
    }
}