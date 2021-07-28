export default function Web () {
    function Succ (num) {
        let q = JSON.parse(localStorage.getItem('tasks'));
        let st = q.WEB;
        if (st[num] == '1') return (<img src='./success.png' className='success'></img>)
        else return (<img src='./unsuccess2.png' className='success'></img>)
    }


    return (
        <div classNama='big-wrapper'>
            <div className='tasks-wrapper'>
                <div className='tasks-row'>
                    <div className='task'>
                        <h1>Landing &middot; 100</h1>
                        <span>Разработчик сайта не думал, что лишние линки могут кому-то пригодиться</span>
                        <a href='http://wizzard1.beget.tech/landing/' target='_blank'>сайт</a>
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
                        <h1>Post &middot; 200</h1>
                        <span>Просто перейди по ссылке</span>
                        <a href='http://wizzard1.beget.tech/doublepost/' target='_blank'>сайт</a>
                    </div>
                    <div className='success-wrapper'>
                        <div>
                        {
                            Succ(1)
                        }
                        </div>
                    </div>
                </div>
                <hr/> <div className='tasks-row'>
                    <div className='task'>
                        <h1>Admin &middot; 200</h1>
                        <span>Ощути себя админом! Логин: <code>user</code>, пароль: <code>qwert12345</code></span>
                        <a href='http://wizzard1.beget.tech/authorization/' target='_blank'>сайт</a>
                    </div>
                    <div className='success-wrapper'>
                        <div>
                        {
                            Succ(2)
                        }
                        </div>
                    </div>
                </div>
                <hr/> <div className='tasks-row'>
                    <div className='task'>
                        <h1>Community &middot; 300</h1>
                        <span>Этот таск может стать проблемой, если у тебя мало друзей...</span>
                        <a href='http://wizzard1.beget.tech/community/' target='_blank'>сайт</a>
                    </div>
                    <div className='success-wrapper'>
                        <div>
                        {
                            Succ(3)
                        }
                        </div>
                    </div>
                </div>
                <hr/><div className='tasks-row'>
                    <div className='task'>
                        <h1>Bank &middot; 300</h1>
                        <span>Сломаем базу самого защищенного Security Банка!</span>
                        <a href='http://wizzard1.beget.tech/securitybank/' target='_blank'>сайт</a>
                    </div>
                    <div className='success-wrapper'>
                        <div>
                        {
                            Succ(4)
                        }
                        </div>
                    </div>
                </div>
                <hr/><div className='tasks-row'>
                    <div className='task'>
                        <h1>Dessert &middot; 300</h1>
                        <span>А ты любишь сладкое?</span>
                        <a href='http://wizzard1.beget.tech/sweettooth/' target='_blank'>сайт</a>
                    </div>
                    <div className='success-wrapper'>
                        <div>
                        {
                            Succ(5)
                        }
                        </div>
                    </div>
                </div>
                <hr/><div className='tasks-row'>
                    <div className='task'>
                        <h1>Employment &middot; 400</h1>
                        <span>Чтобы получить флаг, просто заполни анкету</span>
                        <a href='http://wizzard1.beget.tech/employment/' target='_blank'>сайт</a>
                    </div>
                    <div className='success-wrapper'>
                        <div>
                        {
                            Succ(6)
                        }
                        </div>
                    </div>
                </div>
                <hr/><div className='tasks-row'>
                    <div className='task'>
                        <h1>Telebot  &middot; 500</h1>
                        <span>Этот парень умеет переводить некоторые слова! Словарь достаточно мал, но в нем точно есть то, что тебе нужно... Известно, что на <code>eng</code> и на <code>ru</code> флаг звучит одинаково. Имя бота в телеграме - <code>@errorTeamTaskBot</code></span>
                        <a href='https://web.telegram.org/#/im?p=@errorTeamTaskBot' target='_blank'>бот</a>
                    </div>
                    <div className='success-wrapper'>
                        <div>
                        {
                            Succ(7)
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