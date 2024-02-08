function toCamelCase(str){
    if (!str){
        return '';
    } else {
        return str.split(/[-_]/).map(
            (word, index) => index == 0 ? word : word.charAt(0).toUpperCase() + word.slice(1) ).join("");
    }
}

console.log(toCamelCase("the_stealth_warrior"));