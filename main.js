var $ = require('jquery');
var tpl = require('./employee.tpl.html');
var style = require('./style.css');
var employees =[];

$('#add').click(getInfo);
function getInfo () {
  var id = employees.length + 1;
  var name = $('#name').val();
  var skill = $('#skill').val();
  var title = $('option:selected').html();
  var checkIn = "---";
  var employee = {
    id: id,
    name: name,
    skill: skill,
    title: title,
    checkIn: checkIn
  };
  employees.push(employee);
  var compiled = $(tpl(employee));
  buttonGenerator(title, compiled);
  $('#employees').append(compiled);
  $('.checkIn').click(getTime);
  $('.sayYo').click(sayYo);
  $('.fire').click(fireEveryone);
}

function buttonGenerator (title, compiled) {
  var specialButtons = require('./special-buttons.html');
  var employeeButtons = compiled.find('#employee-buttons');
  var button;
  if (title == "Manager") {
    button = $(specialButtons).filter('.sayYo,.checkIn');
    $(employeeButtons).append(button);
    return;
  }
  if(title == "CEO") {
    button = specialButtons;
    $(employeeButtons).append(button);
    return;
  }
  else {
    button = $(specialButtons).filter('.checkIn');
    $(employeeButtons).append(button);
    return;
  }
}

function getTime () {
  var date =  new Date();
  var newDate = date.getHours()+":"+date.getMinutes();
  var getParents = $(this).parents()[1];
  var children = $(getParents.children);
  for( var i = 0; i < children.length; i++) {
    if( children[i].innerHTML.includes("Last Check-In")) {
      var checkIn = children[i];
      checkIn.innerHTML = ('Last Check-In: ' + newDate);
    }
  }
}

function sayYo () {
  var getParents = $(this).parents()[1];
  var children = $(getParents.children);
  for( var i = 0; i < children.length; i++) {
    if( children[i].innerHTML.includes("Name")) {
      var name = children[i].innerHTML.split(":");
      alert(name[1] + ' says Yo!');
    }
  }
}

function fireEveryone () {
  var employees = $('.employee');
  for( var i = 0; i < employees.length; i++) {
    var employee = employees[i];
    var children = employee.children;
    for( var x = 0; x < children.length; x++) {
      if( children[x].innerHTML.includes("Title")) {
        var title = children[x];
        if( title.innerHTML.includes("CEO")) {
          return;
        }
        else {
          employee.remove();
        }
      }
    }
  }
}
