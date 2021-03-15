module.exports = function check(str, bracketsConfig) {
    const bracketsArray = [];
    bracketsConfig.forEach((item) => {
        bracketsArray.push(item.join(""));
    });

    let count = 0;
    const halfOfStrLength = str.length / 2;
    do {
        bracketsArray.forEach((item) => {
            str = str.replace(item, "");
        });
        count++;
    } while (count < halfOfStrLength && str.length > 0);

    return str.length === 0 ? true : false;
};
