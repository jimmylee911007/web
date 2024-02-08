function searchfunction() {
    var input = document.getElementById('searchinput').value;
    switch(input.toLowerCase()) {
        case '鴨川':
            window.location.href = 'kannkou.html#yc1';
            break;
        case '嵯峨野竹林の小道':
            window.location.href = 'kannkou.html#xd1';
            break;
        case '和らぎの道':
            window.location.href = 'sakura.html#michi';
            break;
        case '嵐山':
            window.location.href = 'sakura.html#yama';
            break;
        case '東福寺の紅葉':
            window.location.href = 'momiji.html#hy1';
            break;
        case '清水寺の紅葉':
            window.location.href = 'momiji.html#hy2';
            break;
        default:
            alert('見つからない')
    }
}