var rgbChannels = {
    redChannel: 0,
    greenChannel: 0,
    blueChannel: 0,
    outputRgbColor: ''
}

var hexChannels = {
    redChannel: 0,
    greenChannel: 0,
    blueChannel: 0,
    outputHexColor: ''
}

class RgbColorGenerator {
    print(what) {
        console.log(what);
    }

    printChannels(channel, channel2, channel3) {
        this.print(channel + '\n' + channel2 + '\n' + channel3);
    }

    generateRandomNumber(from = 0, to = 254) {
        let generatedValue = Math.floor(Math.random(from) * to)
        return generatedValue;
    }

    setChannel() {
        return this.generateRandomNumber(0, 254);
    }

    setRgbColorsChannels() {
        rgbChannels.redChannel = this.setChannel();
        rgbChannels.greenChannel = this.setChannel();
        rgbChannels.blueChannel = this.setChannel();

        rgbChannels.outputRgbColor =
            this.joinRgbChannels(
                rgbChannels.redChannel,
                rgbChannels.greenChannel,
                rgbChannels.blueChannel
        );
        this.print('after - ' + rgbChannels.redChannel);
        this.print('after - ' + rgbChannels.greenChannel);
        this.print('after - ' + rgbChannels.blueChannel);
    }

    setHexadecimalColorsChannels() {
        hexChannels.redChannel =
            this.convertDecimalToHex(rgbChannels.redChannel);

        hexChannels.greenChannel =
            this.convertDecimalToHex(rgbChannels.greenChannel);

        hexChannels.blueChannel =
            this.convertDecimalToHex(rgbChannels.blueChannel);

        hexChannels.outputHexColor =
            this.joinHexChannels(
                hexChannels.redChannel,
                hexChannels.greenChannel,
                hexChannels.blueChannel
        );
    }

    setAllChannels() {
        this.setRgbColorsChannels();
        this.setHexadecimalColorsChannels();
    }

    joinRgbChannels(channel1, channel2, channel3) {
        return rgbChannels.outputRgbColor =
            "rgb("
            + channel1.toString()
            + ", "
            + channel2.toString()
            + ", "
            + channel3.toString()
            + ")";
    }

    joinHexChannels(channel1, channel2, channel3) {
        return hexChannels.outputHexColor =
            "#"
            + channel1
            + channel2
            + channel3
    }

    convertDecimalToHex(number) {
        return number.toString(16);
    }

    populateColorOnCards() {
        let cards = document.getElementsByClassName('card');

        console.log(cards.length)
        for(let i = 0; i < cards.length; i++) {
            this.setAllChannels();
            cards[i].style.backgroundColor = hexChannels.outputHexColor;
            cards[i].innerHTML = hexChannels.outputHexColor;
        }
    }

    run() {
        this.print("final rgb: " + rgbChannels.outputRgbColor);
        this.print("final hex: " + hexChannels.outputHexColor);
        this.populateColorOnCards();
    }
}

function generateButtonClick() {
    let generateRgbColor = new RgbColorGenerator();
    generateRgbColor.run();
}

window.addEventListener('load', function() {
    var generator = new RgbColorGenerator();
    let generateButton = document.getElementById('generateButton');
    generator.run();

    generateButton.addEventListener('click', function() {
        generator.run();
    });
});
