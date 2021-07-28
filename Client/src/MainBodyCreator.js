import QAPage from './QAPage.js';
import TasksPage from './TasksPage.js';
import ScoreBoardPage from './ScoreBoardPage.js';
import Tutorial from './Tutorial.js';


export default function MainBodyCreator(page) {
    if (page === 'Q & A') return QAPage();
    if (page === 'ТАСКИ') return TasksPage();
    if (page === 'СКОРБОРД') return ScoreBoardPage();
    if (page === 'ТУТОРИАЛ') return Tutorial();
}
