export default function Recon () {
    function Succ (num) {
        let q = JSON.parse(localStorage.getItem('tasks'));
        let st = q.RECON;
        if (st[num] == '1') return (<img src='./success.png' className='success'></img>)
        else return (<img src='./unsuccess2.png' className='success'></img>)
    }


    return (
        <div classNama='big-wrapper'>
            <div className='tasks-wrapper'>
                <div className='tasks-row'>
                    <div className='task'>
                        <h1>Homepage &middot; 50</h1>
                        <span>Один из флагов находится на этом сайте!</span>
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
                        <h1>Mail &middot; 100</h1>
                        <span>За флагом обращайтесь на <code>почту</code> разработчика данной платформы!</span>
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
                        <h1>WhatsApp &middot; 100</h1>
                        <span>За флагом обращайтесь на <code>WhatsApp</code> разработчика данной платформы!</span>
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
                        <h1>Microblogging &middot; 200</h1>
                        <span>Наш друг <code>errorus1</code> поделился флагом в своем микроблоге!</span>
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
                        <h1>Address &middot; 300</h1>
                        <span>Чтобы получить флаг, узнай точный адрес, где была сделана <code>фотография</code>, и сообщи его разработчику данной платформы (где угодно!), у тебя всего 5 попыток</span>
                        <a href='./IMG_3304.jpg'>фотка</a>
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
                        <h1>City &middot; 400</h1>
                        <span>Узнай точный адрес дома, с которого была сделана <code>фотография</code>, сообщи его разработчику данной платформы, у тебя 8 попыток</span>
                        <a href='./IMG_0586.HEIC'>фотка</a>
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
                        <h1>Infobook &middot; 500</h1>
                        <span>Флагом к этому таску пладеет странный молодой человек. Известно, что он делится информацией только с <code>друзьями</code>. Его <code>id</code> - <code>100070900688320</code></span>
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
                <br/>
                <br/>
                <br/>
            </div>            
        </div>
    );
}