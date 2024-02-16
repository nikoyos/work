function array() {
    // 设置或返回数组元素的个数。
    let myArray = [1, 2, 3, 4, 5];
    let arrayLength = myArray.length;
    console.log(arrayLength); // 输出：5

    // 连接两个或更多的数组，并返回结果。
    let arr1 = [1, 2];
    let arr2 = [3, 4];
    let concatenatedArray = arr1.concat(arr2);
    console.log(concatenatedArray); // 输出：[1, 2, 3, 4]

    // 返回符合传入测试（函数）条件的数组元素。
    let numbers = [10, 20, 30, 40, 50];
    let foundNumber = numbers.find(element => element > 25);
    console.log(foundNumber); // 输出：30

    // 搜索数组中的元素，并返回它所在的位置。
    let fruits = ['apple', 'banana', 'orange'];
    let fruitIndex = fruits.indexOf('banana');
    console.log(fruitIndex); // 输出：1

    // 把数组的所有元素放入一个字符串。
    let colors = ['red', 'green', 'blue'];
    let joinedString = colors.join(', ');
    console.log(joinedString); // 输出：red, green, blue

    // 通过指定函数处理数组的每个元素，并返回处理后的数组。
    let numArray = [1, 2, 3, 4, 5];
    let doubledNumbers = numArray.map(number => number * 2);
    console.log(doubledNumbers); // 输出：[2, 4, 6, 8, 10]

    // 向数组的末尾添加一个或更多元素，并返回新的长度。
    let arrayLengthBefore = numArray.length;
    numArray.push(6, 7);
    let arrayLengthAfter = numArray.length;
    console.log(arrayLengthBefore, arrayLengthAfter); // 输出：5 7

    // 对数组的元素进行排序。
    let unsortedArray = [3, 1, 2];
    let sortedArray = unsortedArray.sort();
    console.log(sortedArray); // 输出：[1, 2, 3]

    // 从数组中添加或删除元素。
    let array = [1, 2, 3, 4, 5];
    array.splice(2, 0, 6);
    console.log(array); // 输出：[1, 2, 6, 3, 4, 5]

    // 把数组转换为字符串，并返回结果。
    let arr = [1, 2, 3];
    let stringArray = arr.toString();
    console.log(stringArray); // 输出：'1,2,3'

    // 返回数组对象的原始值。
    let originalArray = [1, 2, 3];
    let arrayValue = originalArray.valueOf();
    console.log(arrayValue); // 输出：[1, 2, 3]
}

function boolean() {
    // 把布尔值转换为字符串，并返回结果。
    let booleanValue = true;
    let stringValue = booleanValue.toString();
    console.log(stringValue); // 输出：'true'

    // 返回 Boolean 对象的原始值。
    let booleanObject = new Boolean(true);
    let originalValue = booleanObject.valueOf();
    console.log(originalValue); // 输出：true
}

function date() {
    // 从 Date 对象返回一个月中的某一天 (1 ~ 31)。
    let currentDate = new Date();
    let dayOfMonth = currentDate.getDate();
    console.log(dayOfMonth); // 输出当前日期的天数

    // 从 Date 对象返回一周中的某一天 (0 ~ 6)。
    let dayOfWeek = currentDate.getDay();
    console.log(dayOfWeek); // 输出当前日期是一周中的第几天

    // 从 Date 对象以四位数字返回年份。
    let year = currentDate.getFullYear();
    console.log(year); // 输出当前年份

    // 返回 Date 对象的小时 (0 ~ 23)。
    let hours = currentDate.getHours();
    console.log(hours); // 输出当前小时数

    // 返回 Date 对象的毫秒(0 ~ 999)。
    let milliseconds = currentDate.getMilliseconds();
    console.log(milliseconds); // 输出当前毫秒数

    // 返回 Date 对象的分钟 (0 ~ 59)。
    let minutes = currentDate.getMinutes();
    console.log(minutes); // 输出当前分钟数

    // 从 Date 对象返回月份 (0 ~ 11)。
    let month = currentDate.getMonth();
    console.log(month); // 输出当前月份

    // 返回 Date 对象的秒数 (0 ~ 59)。
    let seconds = currentDate.getSeconds();
    console.log(seconds); // 输出当前秒数

    // 返回 1970 年 1 月 1 日至今的毫秒数。
    let currentTime = currentDate.getTime();
    console.log(currentTime); // 输出当前日期的毫秒数

    // 返回1970年1月1日午夜到指定日期（字符串）的毫秒数。
    let dateString = "2024-02-14T12:00:00Z";
    let millisecondsSince1970 = Date.parse(dateString);
    console.log(millisecondsSince1970); // 输出指定日期的毫秒数

    // 设置 Date 对象中月的某一天 (1 ~ 31)。
    let date = new Date();
    date.setDate(15);
    console.log(date); // 输出设置后的日期对象

    // 设置 Date 对象中的年份（四位数字）。
    date.setFullYear(2025);
    console.log(date); // 输出设置后的日期对象

    // 设置 Date 对象中的小时 (0 ~ 23)。
    date.setHours(15);
    console.log(date); // 输出设置后的日期对象

    // 设置 Date 对象中的毫秒 (0 ~ 999)。
    date.setMilliseconds(500);
    console.log(date); // 输出设置后的日期对象

    // 设置 Date 对象中的分钟 (0 ~ 59)。
    date.setMinutes(30);
    console.log(date); // 输出设置后的日期对象

    // 设置 Date 对象中月份 (0 ~ 11)。
    date.setMonth(6); // 月份从0开始计数，所以6表示7月
    console.log(date); // 输出设置后的日期对象

    // 设置 Date 对象中的秒钟 (0 ~ 59)。
    date.setSeconds(45);
    console.log(date); // 输出设置后的日期对象

    // setTime() 方法以毫秒设置 Date 对象。
    let newTime = 1644838500000; // 毫秒数
    date.setTime(newTime);
    console.log(date); // 输出设置后的日期对象

    // 把 Date 对象转换为字符串。
    let dateString2 = date.toString();
    console.log(dateString2); // 输出日期的字符串表示形式

    // 把 Date 对象的时间部分转换为字符串。
    let timeString = date.toTimeString();
    console.log(timeString); // 输出日期的时间字符串

}

function math() {
    // 返回 x,y,z,...,n 中的最高值。
    let maxValue = Math.max(10, 5, 8, 20, 15);
    console.log(maxValue); // 输出最高值

    // 返回 x,y,z,...,n 中的最低值。
    let minValue = Math.min(10, 5, 8, 20, 15);
    console.log(minValue); // 输出最低值

    // 返回 0 ~ 1 之间的随机数。
    let randomValue = Math.random();
    console.log(randomValue); // 输出随机数

}

function string() {
    // 字符串的长度
    let str = "Hello, world!";
    let length = str.length;
    console.log(length); // 输出字符串的长度

    // 连接两个或更多字符串，并返回新的字符串。
    let str1 = "Hello";
    let str2 = "world";
    let concatenatedStr = str1.concat(", ", str2, "!");
    console.log(concatenatedStr); // 输出连接后的字符串

    // 判断当前字符串是否是以指定的子字符串结尾的（区分大小写）。
    let endsWith = str.endsWith("world!");
    console.log(endsWith); // 输出 true

    // 返回某个指定的字符串值在字符串中首次出现的位置。
    let index = str.indexOf("world");
    console.log(index); // 输出 7

    // 查找字符串中是否包含指定的子字符串。
    let includes = str.includes("world");
    console.log(includes); // 输出 true

    // 从后向前搜索字符串，并从起始位置（0）开始计算返回字符串最后出现的位置。
    let lastIndex = str.lastIndexOf("o");
    console.log(lastIndex); // 输出 8

    // 提取字符串的片断，并在新的字符串中返回被提取的部分。
    let slicedStr = str.slice(7, 12);
    console.log(slicedStr); // 输出 "world"

    // 把字符串分割为字符串数组。
    let splittedStr = str.split(", ");
    console.log(splittedStr); // 输出 ["Hello", "world!"]

    // 查看字符串是否以指定的子字符串开头。
    let startsWith = str.startsWith("Hello");
    console.log(startsWith); // 输出 true

    // 把字符串转换为小写。
    let lowerCaseStr = str.toLowerCase();
    console.log(lowerCaseStr); // 输出 "hello, world!"

    // 把字符串转换为大写。
    let upperCaseStr = str.toUpperCase();
    console.log(upperCaseStr); // 输出 "HELLO, WORLD!"

    // 去除字符串两边的空白。
    let trimmedStr = "   Hello, world!   ".trim();
    console.log(trimmedStr); // 输出 "Hello, world!"

    // 返回一个字符串。
    let strValue = str.toString();
    console.log(strValue); // 输出 "Hello, world!"

    // 返回某个字符串对象的原始值。
    let originalValue = str.valueOf();
    console.log(originalValue); // 输出 "Hello, world!"

    // 查找找到一个或多个正则表达式的匹配。
    let string = "Hello, world! This is a test string.";
    let regex = /world/;
    let matches = string.match(regex);
    console.log(matches); // 输出 ["world"]

    // 在字符串中查找匹配的子串，并替换与正则表达式匹配的子串。
    let replacedStr = string.replace(/world/, "universe");
    console.log(replacedStr); // 输出 "Hello, universe! This is a test string."

    // 在字符串中查找匹配的子串，并替换与正则表达式匹配的所有子串。
    let replacedAllStr = string.replaceAll(" ", "-");
    console.log(replacedAllStr); // 输出 "Hello,-world!-This-is-a-test-string."

    // 从起始索引号提取字符串中指定数目的字符。
    let substr = string.substr(7, 5);
    console.log(substr); // 输出 "world"

    // 提取字符串中两个指定的索引号之间的字符。
    let substring = string.substring(7, 12);
    console.log(substring); // 输出 "world"

}

function window() {
    // 对 Screen 对象的只读引用。
    let currentScreen = window.screen;
    console.log(currentScreen);

    // 返回相对于屏幕窗口的x坐标。
    let leftPosition = window.screenLeft;
    console.log(leftPosition);

    // 返回相对于屏幕窗口的y坐标。
    let topPosition = window.screenTop;
    console.log(topPosition);

    // 返回相对于屏幕窗口的x坐标。
    let screenXPosition = window.screenX;
    console.log(screenXPosition);

    // 返回相对于屏幕窗口的y坐标。
    let screenYPosition = window.screenY;
    console.log(screenYPosition);

    // 显示带有一段消息和一个确认按钮的警告框。
    window.alert("This is an alert message.");

    // 把键盘焦点从顶层窗口移开。
    window.blur();

    // 关闭浏览器窗口。
    window.close();

    // 显示带有一段消息以及确认按钮和取消按钮的对话框。
    window.confirm("Do you want to proceed?");

    // 把键盘焦点给予一个窗口。
    window.focus();

    // 打开一个新的浏览器窗口或查找一个已命名的窗口。
    window.open();

    // 创建一个 pop-up 窗口。
    let popupWindow = window.createPopup();

    // 按照指定的像素调整窗口的大小。
    window.resizeBy(100, 100);

    // 把窗口的大小调整到指定的宽度和高度。
    window.resizeTo(500, 500);

    // 按照指定的像素值来滚动内容。
    window.scrollBy(0, 100);

    // 按照指定的周期（以毫秒计）来调用函数或计算表达式。
    window.setInterval(function () {
        console.log("Interval function executed!");
    }, 1000);

}

function screen() {
    // 返回屏幕的总高度。
    let screenHeight = window.screen.height;
    console.log("Screen Height:", screenHeight);

    // 返回屏幕的总宽度。
    let screenWidth = window.screen.width;
    console.log("Screen Width:", screenWidth);

}

function history() {
    // 加载 history 列表中的前一个 URL。
    history.back();

    // 加载 history 列表中的下一个 URL。
    history.forward();

    // 加载 history 列表中的某个具体页面。
    history.go(-2); // 后退两步

}

function document() {
    // 返回文档中所有指定类名的元素集合，作为 NodeList 对象。
    const elementsByClassName = document.getElementsByClassName('exampleClassName');

    // 返回对拥有指定 id 的第一个对象的引用。
    const elementById = document.getElementById('exampleId');

    // 返回带有指定名称的对象集合。
    const elementsByName = document.getElementsByName('exampleName');

    // 返回带有指定标签名的对象集合。
    const elementsByTagName = document.getElementsByTagName('div');

    // 返回当前文档的标题。
    const documentTitle = document.title;

    // 返回文档完整的 URL。
    const documentURL = document.URL;

    // 向文档写 HTML 表达式或 JavaScript 代码。
    document.write('<h1>Hello, world!</h1>');

    // 等同于 write() 方法，不同的是在每个表达式之后写一个换行符。
    document.writeln('<p>This is a paragraph.</p>');

}
function element() {
    // 向指定元素添加事件句柄
    const element = document.getElementById('exampleElement');
    element.addEventListener('click', function () {
        console.log('Element clicked!');
    });

    // 为元素添加一个新的子元素
    const newElement = document.createElement('div');
    element.appendChild(newElement);

    // 返回一个元素的属性数组
    const attributes = element.attributes;

    // 返回元素的一个子节点的数组
    const childNodes = element.childNodes;

    // 返回元素的子元素的集合
    const children = element.children;

    // 返回元素的类名，作为 DOMTokenList 对象。
    const classList = element.classList;

    // 设置或返回元素的class属性
    const className = element.className;

    // 设置或者返回元素的内容。
    element.innerHTML = '<p>This is new content.</p>';

    // 返回匹配指定 CSS 选择器元素的第一个子元素
    const firstChild = element.querySelector('p');

    // 删除一个子元素
    const removedChild = element.removeChild(firstChild);

    // 移除由 addEventListener() 方法添加的事件句柄
    element.removeEventListener('click', eventHandlerFunction);

    // 设置或返回元素的样式属性
    element.style.color = 'red';

    // 作为一个字符串返回某个元素的标记名（大写）
    const tagName = element.tagName;

    // 设置或返回一个节点和它的文本内容
    element.textContent = 'New text content';

    // 设置或返回元素的title属性
    element.title = 'New title';

    // 一个元素转换成字符串
    const elementString = element.toString();

}
function console() {
    // 清除控制台上的信息
    console.clear();

    // 输出错误信息到控制台
    console.error("This is an error message.");

    // 控制台输出一条信息
    console.info("This is an information message.");

    // 控制台输出一条信息
    console.log("This is a log message.");

    // 输出警告信息，信息最前面加一个黄色三角，表示警告
    console.warn("This is a warning message.");

}
function event() {
    // 添加点击事件监听器
    document.addEventListener("click", function (event) {
        console.log("Document clicked!");
    });

    // 添加失去焦点事件监听器
    document.addEventListener("blur", function (event) {
        console.log("Document lost focus!");
    });

    // 添加内容改变事件监听器
    document.addEventListener("change", function (event) {
        console.log("Document content changed!");
    });

    // 添加获取焦点事件监听器
    document.addEventListener("focus", function (event) {
        console.log("Document got focus!");
    });


}

