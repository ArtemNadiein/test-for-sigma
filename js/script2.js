document.getElementById('submit').addEventListener('click', findPalindromes);
function findPalindromes() {
    var str = document.getElementById('inp').value;
    var matches = [];
    var arrStr = str.split('');
    for (var i = 1; i < arrStr.length; i++) {
        get(i, 1);
    }
    function get (k, m) {
        if (arrStr[k - m] === arrStr[k + m]) {
            if (m > Math.floor(str.length / 2)) {
                return;
            }
            matches.push(arrStr.slice(k - m, k + m + 1).join(''));
            m++;
            get(k, m);
        }
        if (arrStr[k] === arrStr[k + m]) {
            if (m > Math.floor(str.length)) {
                return;
            }
            matches.push(arrStr.slice(k, k + m + 1).join(''));
            m++;
            get(k, m);
        }
    }
    function sortMatches(a, b) {
        if (a.length > b.length)
            return -1;
        else if (a.length < b.length)
            return 1;
        else
            return 0;
    }
    var sortedMatches = matches.sort(sortMatches);
    document.getElementById('ul').innerHTML = '';
    var createLi = document.createElement('li');
    for (var key in sortedMatches) {
            if (key == 0) {
                createLi = document.createElement('li');
                createLi.setAttribute("style", "font-weight:bold");
                createLi.innerHTML = sortedMatches[key];
                document.getElementById('ul').appendChild(createLi);
            } else {
                createLi = document.createElement('li');
                createLi.innerHTML = sortedMatches[key];
                document.getElementById('ul').appendChild(createLi);
        }
    }
    console.log(sortedMatches);
}
