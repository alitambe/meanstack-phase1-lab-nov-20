

function myFunction() {
  var table = document.getElementById("cartTable");
  var row = table.insertRow(0);
  var cell1 = row.insertCell(0);
  var cell2 = row.insertCell(1);
  var cell3 = row.insertCell(2);
  cell1.innerHTML = "1";
  cell2.innerHTML = "APPLE iPhone 13 (Black, 128 GB)";
  cell3.innerHTML = "79900";
  sumtable();
}
function myDeleteFunction() {
    document.getElementById("cartTable").deleteRow(0);
    sumtable();
  }
function myFunction1() {
    var table = document.getElementById("cartTable");
    var row = table.insertRow(0);
    var cell1 = row.insertCell(0);
    var cell2 = row.insertCell(1);
    var cell3 = row.insertCell(2);
    cell1.innerHTML = "2";
    cell2.innerHTML = "Shockproof Case for iPhone 13";
    cell3.innerHTML = "1599";
    sumtable();
  }
  function myDeleteFunction1() {
    document.getElementById("cartTable").deleteRow(0);
    sumtable();
  }
  function myFunction2() {
    var table = document.getElementById("cartTable");
    var row = table.insertRow(0);
    var cell1 = row.insertCell(0);
    var cell2 = row.insertCell(1);
    var cell3 = row.insertCell(2);
    cell1.innerHTML = "3";
    cell2.innerHTML = "Curved Anti-Static Tempered Glass Screen Protector for iPhone 13";
    cell3.innerHTML = "1499";
    sumtable();
  }
  function myDeleteFunction2() {
    document.getElementById("cartTable").deleteRow(0);
    sumtable();
  }


function sumtable(){
  var table = document.getElementById("cartTable");
  var Header = document.getElementById("sTHead");
  var amount = document.getElementById("sAmount");

var table = document.getElementById("cartTable"), sumVal = 0;
            
            for(var i = 0; i < table.rows.length; i++)
            {
                sumVal = sumVal + parseInt(table.rows[i].cells[2].innerHTML);
            }
            
            document.getElementById("sTHead").innerHTML = "Sum Value = " + sumVal;


Header.innerHTML = "Total Cart Value : ₹" + sumVal;
}
function del_tr(remtr)  
{   
    while((remtr.nodeName.toLowerCase())!='tr')
        remtr = remtr.parentNode;

    remtr.parentNode.removeChild(remtr);
}
function del_id(id)  
{   
        del_tr(document.getElementById(id));
}

$(document).ready(function(){
    $("#cartTable").on('click','.btnDelete',function(){
        $(this).closest('tr').remove();
     });
 });
sumtable();