const name = "aaa bbb ccc";
const str2 = name.replace(
    // \b单词的开头
    // \w a-zA-Z0-9 字符
    /\b\w+\b/g, function(word) {
        console.log(word);
        return word.substring(0,1).toUpperCase()+word.substring(1);
    }
)
console.log(str2);
// 将此字符串里的每个单词首字母变大写
// Aaa Bbb Ccc


// 分成数组 split 
// Song.trims(str,2)
// map toUpperCase() .join('')