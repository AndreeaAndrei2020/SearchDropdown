
function countOccurences(string, word) {
    return string.split(word).length - 1;
}

function wordBreak(option, filter, arrayWithIndex) {

    let boldFilter;
    const lengthFilter = filter.length;
    let boldOption = [];
    let lastIndex = 0;
    if (filter === '') return;

    arrayWithIndex.forEach((index) => {
        if (index === 0) {
            boldFilter = option.slice(index, index + lengthFilter);
            boldOption.push(<b>{boldFilter}</b>)
        }
        else {
            if (lastIndex !== index) { boldOption.push(option.slice(lastIndex, index)); }   /// ex: because we can have... option = toto and filter =to

            boldFilter = option.slice(index, index + lengthFilter);
            boldOption.push(<b>{boldFilter}</b>);

        }
        lastIndex = index + lengthFilter;
    })

    if (lastIndex !== option.length) boldOption.push(option.slice(lastIndex, option.length))

    return boldOption;
}


function boldSubstring(option, filter) {
    let optionUpperCase = option.toUpperCase();
    let countFilter = countOccurences(optionUpperCase, filter);
    let arrayWithIndex = [];
    let indexFirstSlice = 0;
    let indexSecondSlice = 0;

    for (let i = 0; i < countFilter; i++) {        /// here we make an array with the indexes of the option filter
        indexSecondSlice = optionUpperCase.indexOf(filter, indexFirstSlice);
        arrayWithIndex.push(indexSecondSlice)
        indexFirstSlice = indexSecondSlice + 1;
    }

    return wordBreak(option, filter, arrayWithIndex);
}



export default boldSubstring;