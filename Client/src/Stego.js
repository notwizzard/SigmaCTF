export default function Stego () {

    function Succ (num) {
        let q = JSON.parse(localStorage.getItem('tasks'));
        let st = q.STEGO;
        if (st[num] == '1') return (<img src='./success.png' className='success'></img>)
        else return (<img src='./unsuccess2.png' className='success'></img>)
    }


    return (
        <div classNama='big-wrapper'>
            <div className='tasks-wrapper'>
                <div className='tasks-row'>
                    <div className='task'>
                        <h1>Matryoshka &middot; 100</h1>
                        <span>Примитивная русская матрешка, просто загляни внутрь</span>
                        <a href='./matryoshka.png' target='_blank'>матрешка</a>
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
                        <h1>Word &middot; 200</h1>
                        <span>Лучший редактор текста!</span>
                        <a href='./kapitanskaya-dochka.docx' target='_blank'>капитанская дочка</a>
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
                        <h1>Music? &middot; 200</h1>
                        <span>Попробуй насладиться природой</span>
                        <a href='./landscape.rar' target='_blank'>пейзаж</a>
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
                        <h1>One Bit &middot; 200</h1>
                        <span>Все сказано в названии</span>
                        <a href='./cat.png' target='_blank'>кот</a>
                    </div>
                    <div className='success-wrapper'>
                        <div>
                        {
                            Succ(3)
                        }
                        </div>
                    </div>
                </div>
                <hr/> <div className='tasks-row'>
                    <div className='task'>
                        <h1>Phil &middot; 200</h1>
                        <span>Достаточно узнать, кто сделал фото, чтобы получить флаг</span>
                        <a href='./phil.jpg' target='_blank'>сова</a>
                    </div>
                    <div className='success-wrapper'>
                        <div>
                        {
                            Succ(4)
                        }
                        </div>
                    </div>
                </div>
                <hr/> <div className='tasks-row'>
                    <div className='task'>
                        <h1>Blacky &middot; 200</h1>
                        <span>Фото негров, работающих в глубокой пещере ночью</span>
                        <a href='./blacky.png' target='_blank'>негры</a>
                    </div>
                    <div className='success-wrapper'>
                        <div>
                        {
                            Succ(5)
                        }
                        </div>
                    </div>
                </div>
                <hr/> <div className='tasks-row'>
                    <div className='task'>
                        <h1>After  &middot; 200</h1>
                        <span>Посмотри в конце</span>
                        <a href='./foxy.jpg' target='_blank'>лиса</a>
                    </div>
                    <div className='success-wrapper'>
                        <div>
                        {
                            Succ(6)
                        }
                        </div>
                    </div>
                </div>
                <hr/> <div className='tasks-row'>
                    <div className='task'>
                        <h1>Сonnected &middot; 300</h1>
                        <span>Они слиплись! Сможешь исправить?</span>
                        <a href='./stuck together.jfif' target='_blank'>свинья</a>
                    </div>
                    <div className='success-wrapper'>
                        <div>
                        {
                            Succ(7)
                        }
                        </div>
                    </div>
                </div>
                <hr/> <div className='tasks-row'>
                    <div className='task'>
                        <h1>Matryoshka v2 &middot; 400</h1>
                        <span>Даже примитивную матрешку можно усложнить!</span>
                        <a href='./matryoshka2.0.png' target='_blank'>матрешка в2</a>
                    </div>
                    <div className='success-wrapper'>
                        <div>
                        {
                            Succ(8)
                        }
                        </div>
                    </div>
                </div>
                <hr/> <div className='tasks-row'>
                    <div className='task'>
                        <h1>Rectangles &middot; 400</h1>
                        <span>Прямоугольники... Сможешь сложить из них что-нибудь читабельное?</span>
                        <a href='./strangesquares.txt' target='_blank'>прямоугольники</a>
                    </div>
                    <div className='success-wrapper'>
                        <div>
                        {
                            Succ(9)
                        }
                        </div>
                    </div>
                </div>
                <hr/> <div className='tasks-row'>
                    <div className='task'>
                        <h1>Circles &middot; 400</h1>
                        <span>Лучший способ что-то спрятать - положи на видное место</span>
                        <a href='./circles.png' target='_blank'>круги</a>
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
                <br/>
                <br/>
                <br/>
            </div>            
        </div>
    );
}