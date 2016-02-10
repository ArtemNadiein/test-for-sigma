document.getElementById('submit').addEventListener('click', findPalindromes);
function findPalindromes() {
    var firstPartRegExp = '';
    var secondPartRegExp = '';
    var regexp;
    var matches = [];
    var str = document.getElementById('inp').value;
    var halfLength = Math.floor(str.length / 2);
    for (var i = 1; i <= halfLength; i++) {
        firstPartRegExp += '(.)';
        secondPartRegExp = ('(?:\\' + i + ')') + secondPartRegExp;
        regexp = new RegExp(firstPartRegExp + '.?' + secondPartRegExp, 'g');
        if (str.match(regexp) !== null) {
            matches.push(str.match(regexp));
        }
    }
    document.getElementById('ul').innerHTML = '';
    var createLi = document.createElement('li');
    var revmatches = matches.reverse();
    for (var key in revmatches) {
        revmatches[key].forEach(function (m) {
            if (key == 0) {
                createLi = document.createElement('li');
                createLi.setAttribute("style", "font-weight:bold");
                createLi.innerHTML = m;
                document.getElementById('ul').appendChild(createLi);
            } else {
                createLi = document.createElement('li');
                createLi.innerHTML = m;
                document.getElementById('ul').appendChild(createLi);
            }
        });
    }
}