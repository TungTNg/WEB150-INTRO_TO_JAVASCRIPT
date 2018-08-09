class Markdown {
    constructor() {
    }
    
    parse(text) {
        let inputArray = text.split('\n');
        let outputDiv = document.createElement('div');
        for (let line of inputArray) {
            let tagType = this.getTagType(line);
            let element = document.createElement(tagType);
            element.innerHTML = line;
            outputDiv.appendChild(element);
        }
        return outputDiv;
    }
    
    getTagType(line) {
        if (line.substr(0, 6) == "######") {
            return 'h6';
        } else if (line.substr(0, 5) == "#####") {
            return 'h5';
        } else if (line.substr(0, 4) == "####") {
            return 'h4';
        } else if (line.substr(0, 3) == "###") {
            return 'h3';
        } else if (line.substr(0, 2) == "##") {
            return 'h2';
        } else if (line.substr(0, 1) == "#") {
            return 'h1';
        } else {
            return 'div';
        }
    }
}

export { Markdown }