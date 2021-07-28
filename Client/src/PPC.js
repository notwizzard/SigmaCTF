export default function PPC () {
    function Succ (num) {
        let q = JSON.parse(localStorage.getItem('tasks'));
        let st = q.PPC;
        if (st[num] == '1') return (<img src='./success.png' className='success'></img>)
        else return (<img src='./unsuccess2.png' className='success'></img>)
    }


    return (
        <div classNama='big-wrapper'>
            <div className='tasks-wrapper'>
                <div className='tasks-row'>
                    <div className='task'>
                        <h1>Captcha &middot; 400</h1>
                        <span>Просто реши <code>капчу</code>!</span>
                        <a href='http://wizzard1.beget.tech/captcha/' target='_blank'>капча</a>
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
                        <h1>Community v2 &middot; 500</h1>
                        <span>Теперь тебе понадобится гораздо больше <code>друзей</code>!</span>
                        <a href='http://wizzard1.beget.tech/community2/' target='_blank'>друзья</a>
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
                        <h1>JSort  &middot; 500</h1>
                        <span>Что ты знаешь про сортировку в <code>java script</code>? Формат флага: <code>error_(буквы в рандомном порядке)</code></span>
                        <a href='./lovelyJSON.txt' target='_blank'>файлик</a>
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
                        <h1>Seabattle &middot; 800</h1>
                        <span>Битва началась!</span>
                        <a href='http://wizzard1.beget.tech/seabattle/' target='_blank'>морской бой</a>
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
                        <h1>Repeater &middot; 1000</h1>
                        <span>У этого парня точно есть флаг! Имя бота в телеграме - <code>@justRepeat_bot</code></span>
                        <a href='https://web.telegram.org/k/' target='_blank'>телеграм</a>
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
                
                <br/>
                <br/>
                <br/>
            </div>            
        </div>
    );
}