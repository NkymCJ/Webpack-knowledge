import _ from 'lodash';
import './style.css';
import Data from './data.xml';
function component() {
    var element = document.createElement('div');
    // Lodash，现在由此脚本导入
    element.innerHTML = _.join(['Hello', 'World'], ' ');
    element.classList.add('hello');
    console.log(Data);
    return element;
}
document.body.appendChild(component());