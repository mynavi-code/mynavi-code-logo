(() => {

    const canvas = document.getElementById('canvas');
    const context = canvas.getContext('2d');

    const dotdata = [
        "00000000000000000",
        "00000000000000000",
        "00000000000000110",
        "00000000000001110",
        "00001000100011100",
        "00011101110111000",
        "00111111111110000",
        "01110111011100110",
        "01100010001000110",
        "00000000000000000",
        "02220222022002220",
        "02000202020202000",
        "02000202020202220",
        "02000202020202000",
        "02220222022002220",
        "00000000000000000",
        "00000000000000000",
    ];

    const dotcolors = {
        "0": "#F0F6FF",
        "1": "#005BEB",
        "2": "#212121",
    }

    for (let i = 0; i < 17; i++) {
        for (let j = 0; j < 17; j++) {
            let sx = j * 6 - 0, sy = i * 6 - 0;
            let dot = dotdata[i][j];
            context.fillStyle = dotcolors[dot];
            context.fillRect(sx, sy, 5, 5);
        }
    }

})();