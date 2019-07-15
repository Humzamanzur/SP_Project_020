visible=false;
$('#calendar_container').hide();
let textbox=document.getElementById('date');
textbox.value = (new Date()).toDateString();
var date = new Date();
var months =['January','Februry','March','April','May','June','July','August','September','October','November','December'];
let month = date.getMonth();
let year = date.getFullYear();
var first_date = months[month] + " " + 1 + " " + year;
var tmp = new Date(first_date).toDateString();
var first_day = tmp.substring(0,3);
var day_name = ['Fri','Sat','Sun','Mon','Tue','Wed','Thu'];
var day_no = day_name.indexOf(first_day);
var days = new Date(year,month + 1,0).getDate();
buttons();
var table = getCalendar(day_no,days);
document.getElementById("calendar_month_year").innerHTML = months[month] + " " + year;
let tbl = document.getElementsByClassName("calendar_dates");
tbl[0].appendChild(table);

function buttons(){
    var imgnext = document.createElement("img");
    imgnext.src="next.png";
    var imgprev = document.createElement("img");
    imgprev.src="previous.png";
    document.getElementById("previous").appendChild(imgprev);
    document.getElementById("next").appendChild(imgnext);
}

function getCalendar(day_no,days){
    var table = document.createElement('table');
    table.className='abcd';
    var tr = document.createElement('tr');
    for(var c = 0 ; c<=6 ; c++){
        var td = document.createElement('td');
        td.innerHTML = ['Fri','Sat','Sun','Mon','Tue','Wed','Thu'][c];
        tr.appendChild(td);
    }
    table.appendChild(tr); 
    
    tr = document.createElement('tr');
    var c =0;
    for( c = 0 ; c<=6 ; c++){
        if(c == day_no){
           break;
        }
        var td = document.createElement('td');
        td.innerHTML = '';
        tr.appendChild(td);
    }
        
        var count = 1;
        for(;c<=6;c++){
            var td = document.createElement('td');
            td.innerHTML = count;
            count++;
            tr.appendChild(td);
        }
        table.appendChild(tr);
       // console.log('count : ',count);
        
        for(var r = 0;count<=days;r++){
            tr = document.createElement('tr');
            for(var c =0;c<=6;c++){
                if(count >= days){
                    var td = document.createElement('td');
                    td.innerHTML = count;
                    count++;
                    tr.appendChild(td);
                    
                    table.appendChild(tr);
                    return table;
                }
                
                var td = document.createElement('td');
                td.innerHTML = count;
                count++;
                tr.appendChild(td);
            }
            table.appendChild(tr);
        }
}

function removeTable(){
    
    let mainDiv=document.getElementsByClassName("calendar_dates");
    let abcd=document.getElementsByClassName("abcd");
    console.log(abcd);
    mainDiv[0].removeChild(abcd[0]);
    
}

function previousMonth(){
    removeTable();
    month = month - 1;
    
    if(month < 0){
       month = 11;
        year = year - 1;
    }
    var first_date_prev = months[month] + " " + year;
    var tmp_prev = new Date(first_date_prev).toDateString();
    var first_day_prev = tmp_prev.substring(0,3);
    var day_no_prev = day_name.indexOf(first_day_prev);
    console.log('check this one : ',day_no_prev);
    var days_prev = new Date(year,month + 1,0).getDate(); 
    var table = getCalendar(day_no_prev,days_prev);
    document.getElementById("calendar_month_year").innerHTML = months[month] + " " + year;
    let tbl = document.getElementsByClassName("calendar_dates");
    tbl[0].appendChild(table);   
}

function nextMonth(){
    removeTable();
    month = month + 1;
    
    if(month > 11){
       month = 0;
        year = year + 1;
    }
    
    var first_date_next = months[month ] + " " + year;
    var tmp_next = new Date(first_date_next).toDateString();
    var first_day_next = tmp_next.substring(0,3);
    var day_no_next = day_name.indexOf(first_day_next);
    var days_next = new Date(year,month + 1,0).getDate();
    var table = getCalendar(day_no_next,days_next);
    document.getElementById("calendar_month_year").innerHTML = months[month] + " " + year;
    let tbl = document.getElementsByClassName("calendar_dates");
    tbl[0].appendChild(table);
}

function downClikk(){
	if(visible){
		$('#calendar_container').hide();
		visible=false;
	}
	else{
		$('#calendar_container').show();
		visible=true;
	}
}

$('td').click(function(){
    console,log('yaha aa geya hai mubarik ho');
	let value =$(this).text();
    let monthYear = document.getElementById("calendar_month_year").innerHTML;
    textbox.value = '';
    textbox.value = value + ' ' + monthYear;
    console.log(value);
    console.log(monthYear);
});



