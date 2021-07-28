export default function Crypto () {
    function Succ (num) {
        let q = JSON.parse(localStorage.getItem('tasks'));
        let st = q.CRYPTO;
        if (st[num] == '1') return (<img src='./success.png' className='success'></img>)
        else return (<img src='./unsuccess2.png' className='success'></img>)
    }


    return (
        <div classNama='big-wrapper'>
            <div className='tasks-wrapper'>
                <div className='tasks-row'>
                    <div className='task'>
                        <h1>Rorrim &middot; 100</h1>
                        <span>Все просто, ты разберешься!</span>
                        <a href='./Rorrim.txt' target='blank'>Файлик</a>
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
                        <h1>Rorrim v2 &middot; 150</h1>
                        <span>Кажется, кто-то придумал, как можно усложнить первое задание!</span>
                        <a href='./Rorrim v2.txt' target='blank'>Файлик</a>
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
                        <h1>65 83 67 73 73 &middot; 150</h1>
                        <span>208 149 209 129 208 187 208 184 32 209 130 209 139 32 209 129 208 188 208 190 208 179 32 208 191 209 128 208 190 209 135 208 184 209 130 208 176 209 130 209 140 32 209 141 209 130 208 190 209 130 32 209 130 208 181 208 186 209 129 209 130 44 32 209 130 208 190 32 209 129 208 188 208 190 208 182 208 181 209 136 209 140 32 208 184 32 209 128 208 181 209 136 208 184 209 130 209 140 32 209 130 208 176 209 129 208 186 33</span>
                        <a href='./65 83 67 73 73.txt' target='blank'>208 164 208 176 208 185 208 187 208 184 208 186</a>
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
                        <h1>Square &middot; 150</h1>
                        <span>Известно, что для шифрования текста применялась <code>таблица</code></span>
                        <a href='./square.png' target='blank'>Таблица</a>
                        <a href='./Square.txt' target='blank'>Файлик</a>
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
                        <h1>Bip-Bip &middot; 150</h1>
                        <span>* *** *-** **    - -*--    *--* *-* --- ---* ** - *- *-**    **-** - --- -    - * -*- *** - ?    - ---    *** -- --- ***- * ---- -**-    **    *-* * ---- ** - -**-    - *- *** -*- --**-- </span>
                        <a href='./Bip-Bip.txt' target='blank'>**-* *- *--- *-** ** -*- </a>
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
                        <h1>Caesar &middot; 200</h1>
                        <span>Говорят, через 11 лет Цезарь объявит англо-русскую войну...</span>
                        <a href='./Caesar.txt' target='blank'>Файлик</a>
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

                <div className='tasks-row'>
                    <div className='task'>
                        <h1>Permutation &middot; 200</h1>
                        <span>Мне нечего сказать, просто загляни в файл...</span>
                        <a href='./Permutation.txt' target='blank'>Файлик</a>
                    </div>
                    <div className='success-wrapper'>
                        <div>
                        {
                            Succ(6)
                        }
                        </div>
                    </div>
                </div>
                <hr/>

                <div className='tasks-row'>
                    <div className='task'>
                        <h1>Late-Caesar &middot; 200</h1>
                        <span>Это сотворили последователи Цезаря</span>
                        <a href='./Late-Caesar.txt' target='blank'>Файлик</a>
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

                <div className='tasks-row'>
                    <div className='task'>
                        <h1>Scientist &middot; 250</h1>
                        <span>Здесь сможет помочь один довольно известный русский ученый</span>
                        <a href='./Scientist.txt' target='blank'>Файлик</a>
                    </div>
                    <div className='success-wrapper'>
                        <div>
                        {
                            Succ(8)
                        }
                        </div>
                    </div>
                </div>
                <hr/>

                <div className='tasks-row'>
                    <div className='task'>
                        <h1>Exclusive Or &middot; 250</h1>
                        <span>Название этого таска стоит воспринимать <code>буквально</code></span>
                        <a href='./Exclusive Or.txt' target='blank'>Файлик</a>
                    </div>
                    <div className='success-wrapper'>
                        <div>
                        {
                            Succ(9)
                        }
                        </div>
                    </div>
                </div>
                <hr/>

                <div className='tasks-row'>
                    <div className='task'>
                        <h1>Multi-way &middot; 300</h1>
                        <span>Флаг был закодирован <code>несколько раз</code>, не останавливайся на полпути!</span>
                        <a href='./Multi-way.txt' target='blank'>Файлик</a>
                    </div>
                    <div className='success-wrapper'>
                        <div>
                        {
                            Succ(10)
                        }
                        </div>
                    </div>
                </div>
                <hr/>

                <div className='tasks-row'>
                    <div className='task'>
                        <h1>Permutation v2 &middot; 300</h1>
                        <span>Ты уже решал подобный таск, но теперь <code>дефолтные тулзы</code> не помогут!</span>
                        <a href='./Permutation v2.txt' target='blank'>Файлик</a>
                    </div>
                    <div className='success-wrapper'>
                        <div>
                        {
                            Succ(11)
                        }
                        </div>
                    </div>
                </div>
                <hr/>

                <div className='tasks-row'>
                    <div className='task'>
                        <h1>ReByte &middot; 400</h1>
                        <span>Мы нашли <code>флаг</code> и даже успели снять его на видео! Вот только теперь оно не запускается... Сможешь восстановить?</span>
                        <a href='./ReByte.rar' target='blank'>Файлик</a>
                    </div>
                    <div className='success-wrapper'>
                        <div>
                        {
                            Succ(12)
                        }
                        </div>
                    </div>
                </div>
                <hr/>

                <div className='tasks-row'>
                    <div className='task'>
                        <h1>ReDate &middot; 400</h1>
                        <span>Тебе все объяснят на сайте, прыгай по <code>ссылке</code>!</span>
                        <a href='http://wizzard1.beget.tech/cryptodate/' target='blank'>Сайт</a>
                    </div>
                    <div className='success-wrapper'>
                        <div>
                        {
                            Succ(13)
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