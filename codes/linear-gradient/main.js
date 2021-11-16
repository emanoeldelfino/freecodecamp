let color1 = color2 = color3 = '#FFFFFF';
let rotation = 90;

function changeValue(id, value) {

    let nc = id.slice(-1)[0];
    if (id !== 'rotation') {
        switch (nc) {
            case "1":
                color1 = value;
                break;
            case "2":
                color2 = value;
                break;
            case "3":
                color3 = value;
                break;
            default:
                console.log('Error');
        }
    }

    if (id === "rotation") {
        if (value < 0 || value > 180) {
            value = 90;
        }
        rotation = value;
    }

    document.getElementById('ball1').style.background = `linear-gradient(${rotation}deg, ${color1}, ${color2}, ${color3})`;
}
