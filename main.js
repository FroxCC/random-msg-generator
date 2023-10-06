const adjectives = ["Amazing", "Incredible", "Fantastic", "Inspiring", "Brilliant"];
const verbs = ["achieve", "believe", "succeed", "dream", "imagine"];
const nouns = ["happiness", "success", "fulfillment", "greatness", "wisdom"];


function getRandomItem(arr) {
    const randomIndex = Math.floor(Math.random() * arr.length);
    return arr[randomIndex];
}

function getRandomMsg() {
    const randomAdjective = getRandomItem(adjectives);
    const randomVerb = getRandomItem(verbs);
    const randomNoun = getRandomItem(nouns);
    return `${randomAdjective} people ${randomVerb} ${randomNoun}!`;
}


console.log(getRandomMsg())