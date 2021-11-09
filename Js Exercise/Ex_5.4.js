function colors (color) {
    color = color.toLowerCase();
    switch (color){
        case "yellow":
        case "pink":
        case "orange":
            return console.log("light color");
            break;
        
        case "blue":
        case "purple":
        case "brown":
            return console.log("dark color");
            
        default:
            return console.log("“Unknown color");
    }
}

colors("PuRple");