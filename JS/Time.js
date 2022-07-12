function estimateReadingTime(text) {
    if(text.length === 0){
        return 0;
    }
    text = text.trim();
    text = text.replaceAll('.', '');
    text = text.replaceAll('?', '');
    text = text.replaceAll('!', '');
    text = text.replaceAll(',', '');
    text = text.replaceAll(';', '');
    text = text.replaceAll(':', '');

    var ss = text.split(" ");

    var tmp = ss.length / 200;

    return Math.ceil(tmp);
}

// DO NOT REMOVE NEXT LINE!
export default estimateReadingTime;