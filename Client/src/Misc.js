export default function Misc () {
    function Succ (num) {
        let q = JSON.parse(localStorage.getItem('tasks'));
        let st = q.MISC;
        if (st[num] == '1') return (<img src='./success.png' className='success'></img>)
        else return (<img src='./unsuccess2.png' className='success'></img>)
    }


    return (
        <div classNama='big-wrapper'>
            <div className='tasks-wrapper'>
                <div className='tasks-row'>
                    <div className='task'>
                        <h1>Shown &middot; 300</h1>
                        <span>После первой пары еще один флаг оказался на этом сайте, найдешь?</span>
                        <a href='./'>прямо тут</a>
                    </div>
                    <div className='success-wrapper'>
                        <div>
                        {
                            Succ(0)
                        }
                        </div>
                    </div>
                </div>
                <hr/>

                <div className='tasks-row'>
                    <div className='task'>
                        <h1>F*CK &middot; 300</h1>
                        <span>Всего 8 символов?! Так можно и голову сломать...</span>
                        <a href='./fck.txt' target='_blank'>fck</a>
                    </div>
                    <div className='success-wrapper'>
                        <div>
                        {
                            Succ(1)
                        }
                        </div>
                    </div>
                </div>
                <hr/>
                <div className='tasks-row'>
                    <div className='task'>
                        <h1>Calculator &middot; 300</h1>
                        <span>Известно, что этот калькулятор написан новичком на C++</span>
                        <a href='./calc.exe' target='_blank'>калькулятор</a>
                    </div>
                    <div className='success-wrapper'>
                        <div>
                        {
                            Succ(2)
                        }
                        </div>
                    </div>
                </div>
                <hr/>
                <div className='tasks-row'>
                    <div className='task'>
                        <h1>Timer &middot; 300</h1>
                        <span>Надо просто подождать. Хотя...</span>
                        <a href='./timer.exe' target='_blank'>таймер</a>
                    </div>
                    <div className='success-wrapper'>
                        <div>
                        {
                            Succ(3)
                        }
                        </div>
                    </div>
                </div>
                <hr/>
                <div className='tasks-row'>
                    <div className='task'>
                        <h1>Numbers &middot; 500</h1>
                        <span>Флаг можно увидеть, если разобраться, что за числа находятся в блокноте</span>
                        <a href='./numbers.txt' target='_blank'>числа</a>
                    </div>
                    <div className='success-wrapper'>
                        <div>
                        {
                            Succ(4)
                        }
                        </div>
                    </div>
                </div>
                <hr/>
                <div className='tasks-row'>
                    <div className='task'>
                        <h1>xxxxGRAM &middot; 500</h1>
                        <span>Ты будешь ненавидеть японию после этого таска!    </span>
                        <a href='./kletochki.png' target='_blank'>клеточки</a>
                    </div>
                    <div className='success-wrapper'>
                        <div>
                        {
                            Succ(5)
                        }
                        </div>
                    </div>
                </div>
                <hr/>
                <br/>
                <br/>
                <br/>
            </div>            
        </div>
    );
}