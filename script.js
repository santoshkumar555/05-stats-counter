var courses = document.getElementById("courses");
var members = document.getElementById("members");
var authors = document.getElementById("authors");
var subjects = document.getElementById("subjects");

var c = 0, m = 0, a = 0, s = 0;

function updateCounts() {
    c = c + 5;
    m = m + 20;
    a = a + 2;
    s = s + 4;

    if (c >= 332) c = 332;
    if (m >= 1403) m = 1403;
    if (a >= 60) a = 60;
    if (s >= 120) s = 120;

    courses.innerHTML = c;
    members.innerHTML = m;
    authors.innerHTML = a;
    subjects.innerHTML = s;

    if (c == 332 && m == 1403 && a == 60 && s == 120) {
        clearInterval(timer);
    }
}

var timer = setInterval(updateCounts, 50);
