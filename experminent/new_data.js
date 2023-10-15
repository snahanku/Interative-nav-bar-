window.addEventListener('load', function () {
    var param = new URL(document.location.toString()).searchParams;
    var name = param.get('name');
    var surname = param.get('surname');
    document.getElementById('result-name').innerHTML = name;
    document.getElementById('result-surname').innerHTML = surname;
});
var profilepic = document.getElementById('profile-pic');
var inputFile = document.getElementById('input-file');
inputFile.onchange = function () {
    profilepic.src = URL.createObjectURL(inputFile.files[0]);
};
