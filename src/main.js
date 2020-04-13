// UI
import { Entry } from './journal';
import './styles.css';

$(document).ready(function () {
  $("form#form1").submit(function (event) {
    event.preventDefault();
    // var newEntry = "",
    // var newTitle = "",
    // var newBody = "",
    // var journal = [];
    var newTitle = $("#title").val();
    var newBody = $("#body").val();
    var newEntry = new Entry (newTitle, newBody);
    journal.push(newEntry);
    var vowelcount = newEntry.vowelCount();
    var consonantcount = newEntry.consonantCount();
    $("#vowelcount").text(vowelcount);
    $("#consonantcount").text(consonantcount);
    
  });
  
});