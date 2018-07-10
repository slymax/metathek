$(document).ready(function() {
  $("#metathek").DataTable({
    "order": [
      [3, "desc"]
    ],
    "language": {
      "url": "german.lang"
    },
    "deferRender": true,
    "pageLength": 50,
    "lengthChange": false,
    "ordering": false,
    "columnDefs": [{
      "targets": 1,
      "data": 6,
      "render": function(data, type, row, meta) {
        return '<span class="video" more="' + data + '">' + row[1] + '</span> <br /><span> ' + row[2] + '</span> ';
      }
    }, {
      "targets": 0,
      "data": 7,
      "render": function(data, type, row, meta) {
        switch (row[0]) {
          case "ZDF":
          case "ZDF-tivi":
            return '<img src="logos/ZDF.png" alt="ZDF">';
            break;
          case "KiKA":
            return '<img src="logos/KiKA.png" alt="KiKA">';
            break;
          case "BR":
            return '<img src="logos/BR.png" alt="BR">';
            break;
          case "ARD":
            return '<img src="logos/ARD.png" alt="ARD">';
            break;
          case "ARTE.DE":
          case "ARTE.FR":
            return '<img src="logos/ARTE.png" alt="ARTE">';
            break;
          case "WDR":
            return '<img src="logos/WDR.png" alt="WDR">';
            break;
          case "NDR":
            return '<img src="logos/NDR.png" alt="NDR">';
            break;
          case "ORF":
            return '<img src="logos/ORF.png" alt="ORF">';
            break;
          case "3Sat":
            return '<img src="logos/3Sat.png" alt="3Sat">';
            break;
          case "DW":
            return '<img src="logos/DW.png" alt="DW">';
            break;
          case "SWR":
            return '<img src="logos/SWR.png" alt="SWR">';
            break;
          case "SRF.Podcast":
          case "SRF":
            return '<img src="logos/SRF.png" alt="SRF">';
            break;
          case "HR":
            return '<img src="logos/HR.png" alt="HR">';
            break;
          case "MDR":
            return '<img src="logos/MDR.png" alt="MDR">';
            break;
          case "SR":
            return '<img src="logos/SR.png" alt="SR">';
            break;
          case "PHOENIX":
            return '<img src="logos/PHOENIX.png" alt="PHOENIX">';
            break;
            case "RBB":
              return '<img src="logos/RBB.png" alt="RBB">';
              break;
          default:
            return row[0];
        }
      }
    }],
    "ajax": {
      "dataType": "json",
      "cache": "false",
      "url": "js/good.json",
      "dataSrc": ""
    },
    "columns": [
      null,
      null, {
        "visible": false
      },
      null,
      null, {
        "visible": false
      }, {
        "visible": false
      }, {
        "visible": false
      }
    ],
    "drawCallback": function(settings, json) {
      $("#video").attr("src","");
      $(".video").on("click", function() {
        $("#video").attr("src", $(this).attr("more"));
        $("#afterglow")[0].click();
        $("body").find(".afterglow-lightbox-wrapper:gt(0)").remove();
      });
    }
  });
});