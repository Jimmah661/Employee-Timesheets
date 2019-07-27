var firebaseConfig = {
    apiKey: "AIzaSyDIrzjbb22m8iJZAuUsRqKbeZkhLtTNdoM",
    authDomain: "timesheet-519a6.firebaseapp.com",
    databaseURL: "https://timesheet-519a6.firebaseio.com",
    projectId: "timesheet-519a6",
    storageBucket: "",
    messagingSenderId: "665994249672",
    appId: "1:665994249672:web:36f62a2c5d653332"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);
var database = firebase.database();


$('button').on('click', function (event) {
    event.preventDefault();
    var name = $('#employeeName').val().trim();
    var role = $('#employeeRole').val().trim();
    var start = $('#employeeStartDate').val().trim();
    var rate = $('#employeeRate').val().trim();

    var con = database.ref('/emp').push({
        name: name,
        role: role,
        start: start,
        rate: rate
    });
});

database.ref('/emp').on('child_added', function (snapshot) {
    var row = $('<tr>');

    var name = snapshot.val().name;
    var role = snapshot.val().role;
    var start = snapshot.val().start;
    var months = 0;
    var rate = snapshot.val().rate;
    var totalB = months * rate;


    // row.html(name + role + start + rate)
    row.append($('<td>' + name + '</td>'));
    row.append($('<td>' + role + '</td>'));
    row.append($('<td>' + start + '</td>'));
    row.append($('<td>' + months + '</td>'))
    row.append($('<td>' + rate + '</td>'));
    row.append($('<td>' + totalB + '</td>'))
    // row.append(col);

    $('#tableBody').append(row);
});