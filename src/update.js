import state from "./state";
import data from "./data";

import { numconvert } from './numberConversion.js';


function update() {


    // ## Test Documentation
    /*     function sortingOrderTranlsate(order) {
        if (state.sortingOrder == "Aufsteigend") {
            state.sortingOrder = "asc";
            return state.sortingOrder;
        }
    
        else if (state.sortingOrder == "Absteigend"){
            state.sortingOrder = "desc";
            return state.sortingOrder;
        }
        else {
            return state.sortingOrder;
        }

    } */

    function reloadTable(variable) {

        table.ajax.reload();
        return variable;
    }

    let database = data.Data;

    function maxValue(column) {
        let exp_column = column;
        let scope_data = database;
        //console.log(scope_data);

        let dataArray = new Array();

        scope_data.forEach(function(item, index, array) {

            // GET THE LAST ITEM (LAST COLUMN CELL) IN A ARRAY
            //console.log(item.values.slice(-1)[0], index);

            // Get the active column for bar-charts in Characters, convert it to a number and get the max value of that column

            //console.log("Bar Column: " + exp_column);

            let valueToConsider = item.values.slice(exp_column)[0];
            dataArray.push(valueToConsider);
            //console.log(valueToConsider)

        });


        let maxVal = Math.max.apply(Math, dataArray);
        //console.log("DataArray: " + dataArray);

        return maxVal;
    }

    function minValue(column) {

        let exp_column = column;
        let scope_data = database;

        let dataArray = new Array();

        scope_data.forEach(function(item, index, array) {

            // GET THE LAST ITEM (LAST COLUMN CELL) IN A ARRAY
            //console.log(item.values.slice(-1)[0], index);

            // Get the active column for bar-charts in Characters, convert it to a number and get the max value of that column

            //console.log("Bar Column: " + exp_column);

            let valueToConsider = item.values.slice(exp_column)[0];
            dataArray.push(valueToConsider);
            //console.log(valueToConsider)

        });


        let minVal = Math.min.apply(Math, dataArray);
        //console.log("DataArray: " + dataArray);

        return minVal;
    }

    // let maxVal = maxValue(3);
    // console.log("MAX Value 4.Column: " + maxVal);

    //console.log("Max Value: " + maxVal);

    //console.log(data.Data.values[tranlsateSortingAlphaToNumber(state.bar_column]));

    // function balken(data) {

    //     // let chart = d3.select("body")//d3.select("td:nth-last-child(1)")
    //     // .append("svg")
    //     // .attr("class", "barchart")
    //     // .attr("width", "100%")
    //     // .attr("height", "70%");


    //     // let bar = chart.select("g")
    //     // .data(data)    
    //     // .enter()
    //     // .append("g");


    //     let bar = d3.append("rect")
    //     .attr("width", function(d) { return 100/d + "%"}) //function(d) { return (d/(d3.sum(data)))*100 + "%"; } )   // function(d) { return d + "%"})
    //     .attr("x", "0")
    //     .attr("y", "50%")
    //     .attr("height", "80%")
    //     .attr("fill", "#000");
    // }

    // function getOrderedColumn(table) {
    //     let order = table.order();
    //     //console.log(order);
    //     return order;
    // }


    function tranlsateSortingAlphaToNumber(alpha) {
        //console.log(alpha[0]);

        let barchart_column;
        let columnArray = [];

        let alphaList = [{ number: 1, string: 'A' },
            { number: 2, string: 'B' },
            { number: 3, string: 'C' },
            { number: 4, string: 'D' },
            { number: 5, string: 'E' },
            { number: 6, string: 'F' },
            { number: 7, string: 'G' },
            { number: 8, string: 'H' },
            { number: 9, string: 'I' },
            { number: 10, string: 'J' },
            { number: 11, string: 'K' },
            { number: 12, string: 'L' },
            { number: 13, string: 'M' },
            { number: 14, string: 'N' },
            { number: 15, string: 'O' },
            { number: 16, string: 'P' },
            { number: 17, string: 'Q' },
            { number: 18, string: 'R' },
            { number: 19, string: 'S' },
            { number: 20, string: 'T' },
            { number: 21, string: 'U' },
            { number: 22, string: 'V' },
            { number: 23, string: 'W' },
            { number: 24, string: 'X' },
            { number: 25, string: 'Y' },
            { number: 26, string: 'Z' }
        ];

        if (isNaN(alpha)) {

            if (alpha.length > 1) {
                let state_alpha_list = alpha.split(",");
                let columnlist = [];
                for (let j = 0; j < state_alpha_list.length; j++) {

                    for (let i = 0; i < alphaList.length; i++) {
                        //console.log(state_alpha_list[j], alphaList[i].string);

                        if (state_alpha_list[j] == alphaList[i].string) {
                            //console.log("Output:" + alphaList[i].number);
                            columnlist.push(alphaList[i].number - 1);
                        }
                    }

                }
                //console.log(columnlist);
                return columnlist;
            }

            if (typeof alpha == 'object') {
                //console.log("Alpha Array? " + typeof alpha);

                for (let key in alpha) {
                    //console.log(alpha[key]);     
                    let i;
                    for (i = 0; i < alphaList.length; i++) {
                        if (alphaList[i].string == alpha[key]) {
                            //console.log("Output:" + typeof(alphaList[i].number));
                            columnArray.push(alphaList[i].number - 1);
                        };
                    }
                }
                //console.log("Column Array: " + "["+columnArray+"]");
                return columnArray;
            } else {
                let i;
                //console.log("alpha-Input: " + alpha);
                for (i = 0; i < alphaList.length; i++) {
                    if (alphaList[i].string == alpha) {
                        //console.log("Output:" + alphaList[i].number);
                        barchart_column = alphaList[i].number - 1;

                        return barchart_column;
                    };
                };
            }
        } else {
            console.log(alpha);
            return alpha;
        }



    }

    //console.log("Spaltenzahl: " + tranlsateSortingAlphaToNumber(state.bar_column));


    function c_names() {
        let column_data = [];
        for (var i = 0; i < data.Data.column_names.values.length; i++) {
            column_data.push({ "title": data.Data.column_names.values[i] });
        };
        //console.log(column_data);
        return column_data;
    }


    function colorMapBalken(data, minVal, maxVal) {

        let color = d3.scaleLinear()
            .domain([minVal, maxVal])
            .interpolate(d3.interpolateHsl)
            .range(["white", "#D82217"]);

        return color(data);

    }

    // let colortestdata = [2,4,7,8,14,55,66,99];
    // console.log(colortestdata.length);
    // console.log(colorMapBalken(colortestdata));


    let table = $('#myTable').dataTable({
        data: data.Data.map(e => e.values),
        responsive: {
            details: {
                type: 'inline',
                target: 0,
                // display: $.fn.dataTable.Responsive.display.modal( {
                //     header: function ( row ) {
                //         var data = row.data()[0];
                //         return data;
                //     }
                // } )
            }
        },
        colReorder: {
            enable: true,
            //     order: [ 5, 4, 3, 2, 1, 0 ],
            //     realtime: false,

        },

        // "drawCallback": function( settings ) {
        //     let api = this.api();
        //     // console.log( api.rows( {page:'current'} ).data() );
        //     //console.log(api.columns( {page:'current'}).data());
        //     //var api = new $.fn.dataTable.Api( settings );


        //     // Output the data for the visible rows to the browser's console
        //     // You might do something more useful with it!
        //     //console.log(api.search);
        //     //console.log( api.rows( {page:'current'} ).data().table );

        //     // $('#mySearch').on( 'keyup', function () {
        //     //     table.search( this.value );
        //     // } );
        // },
        "dom": state.layout,
        // buttons: [
        //     {
        //         extend: 'columnsToggle',
        //     }
        // ],
        //responsive: true,
        //"autoWidth": true,
        "columnDefs": [{
            "targets": 0,
            "data": 0,
            "render": function(data, type, row, meta) {
                //console.log(data);
                if (data.indexOf("https://") > -1) {
                    var img_tag = '<img src="' + data + '"height="' + state.imgsize_h + '"width="' + state.imgsize_w + '">';
                    //console.log("height: " + state.imgsize[0] + ", width: " + state.imgsize[1]);
                    return img_tag;
                } else {
                    return data;
                }
            },
        }, {
            "targets": tranlsateSortingAlphaToNumber(state.bar_column),
            "render": function(data, type, row, meta) {

                let maxVal = maxValue(meta.col);
                let minVal = minValue(meta.col);
                let rangeMax = maxVal - minVal;
                // Adjust the max to 100% and distribute to min
                let maxNormalize = (data / maxVal) * 100;
                // ((data - minVal+1)/rangeMax) * 100 --> Get the difference between the actual data-value and the range to map the data from minValue = 1 (+1) to maxValue = 100 (+1)
                let minMaxNormalize = ((data - minVal + 1) / rangeMax) * 90;


                //console.log("Max Value in function: " + maxVal);

                if (state.bar_switch || state.bar_column > 0) { //

                    if (isNaN(data)) {
                        //console.log("data is not a number");
                        return data;


                    } else {
                        let pre_bar_container = '<div class="barcont">';
                        let bartext = '<div class="bartext"><p style="color:#000000">' + data + '</p></div>';
                        let bar = '<div class="bardiv"> <span class="bar" style="height:20px;width:' + minMaxNormalize + '%; background: #DD0000"></span></div>';
                        // colorMapBalken(data, minVal, maxVal)  / console.log(maxNormalize);
                        let post_bar_container = '</div>';

                        return pre_bar_container + bar + bartext + post_bar_container;
                    }
                } else {
                    return data;
                }
            }
        }],
        "paging": false,
        "scrollY": state.yscroll,
        //"scrollCollapse": true,
        "pageLength": state.numberOfEntries,
        "order": [tranlsateSortingAlphaToNumber(state.sortingColumn), state.sortingOrder],
        columns: c_names(),
        "language": {
            "url": "//cdn.datatables.net/plug-ins/1.10.19/i18n/German.json"
        },
        "drawCallback": function(settings) {

            // Change Header Color
            $('.dataTables_scrollHead').css("background", state.headerColor);
            //$('.dataTables_scrollHead th.sorting_desc').css("background-color", state.headerSortingColor);          
            //console.log("Table reload!");
            //console.log(state.headerColor);
        }
    });


    // Responsive Configuration
    // $(".addbtn").on('click',function(){
    //     var data = table.row(0).data();
    //     data[3] = "<button type='button' class='btn btn-info btn-xs' style='font-size: 9px;'>New BtN</button>";
    //     table.row(0).data(data);
    //     table.draw();
    //   });

    // console.log(getOrderedColumn(table));

    $('#mySearch').on('keyup', function() {
        let searcher_var = state.search_column;
        let count_search_column = searcher_var.length - 1;

        console.log(count_search_column);

        if (count_search_column <= 1) {
            $('#myTable').DataTable().columns(tranlsateSortingAlphaToNumber(state.search_column)).search(this.value).draw();
            //console.log('Selective Search: ' + tranlsateSortingAlphaToNumber(state.search_column))
        } else {
            $('#myTable').DataTable().search(this.value).draw();
            //console.log('Full Search')

        }
    });

    // Deactivate Search for Grafik PNG Export
    function deactivateSearch() {
        if (state.layout == "t") {
            $('#mySearch').remove();
        }
    }

    deactivateSearch();

    // Zeilen

    function zeilen() {

        if (state.zeilenOn == true) {
            $('#hauptzeile').text(state.hauptzeile);
            $('#unterzeile').text(state.unterzeile);

            $('#hauptzeile').css("font-size", state.hauptzeilen_font_size);
            $('#unterzeile').css("font-size", state.unterzeilen_font_size);

            $('#hauptzeile').css("line-height", state.hauptzeilen_height);
            $('#unterzeile').css("line-height", state.unterzeilen_height);

        } else {

        }

    }

    zeilen();

    // Quelle

    function quelle() {
        if (state.quelle) {
            $('#quelle').text(state.quelle);
        }
    }

    quelle();

    // Reloading Problem

    $("iframe[name='preview']").each(function() {
        this.sandbox += ' allow-modals';
    });

}

export default update;