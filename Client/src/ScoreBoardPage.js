import GetRandomInt from './GetRandomInt.js';

export default function ScoreBoardPage() {

    if (localStorage.getItem('table') != null) {
        let us = JSON.parse(localStorage.getItem('table'));
        let usns = Object.keys(us)

        let usersInfo = {}
        for (let i = 0; i < usns.length; i++) {
            if (usns[i] != 'action') usersInfo[usns[i]] = us[usns[i]];
        } 
    
        let listOfNames = Object.keys(usersInfo);

        let categories = [
            'RECON',
            'CRYPTO',
            'STEGO',
            'WEB',
            'PPC',
            'MISC'
        ]

        function CountTotal (users, names, cats) {
            for (let i = 0; i < names.length; i++){
                let total = 0;
                for (let j = 0; j < cats.length; j++) {
                    total += users[names[i]][cats[j]];
                }
                users[names[i]]['TOTAL'] = total;
            }
            return users
        }

        usersInfo = CountTotal(usersInfo, listOfNames, categories);

        function Sort (users, names) {
            for (let i = 0; i < names.length; i++) {
                for (let j = 0; j < names.length - 1; j++) {
                    if (users[names[j]]['TOTAL'] < users[names[j + 1]]['TOTAL']) {
                        let s = names[j + 1];
                        names[j + 1] = names[j];
                        names[j] = s;
                    }
                }
            }
            return names
        }

        listOfNames = Sort(usersInfo, listOfNames);


        return (
            <div className='scb-wrapper'>
                <div className='big-tabel'>
                    <div className='score-line-names'>
                        <span className='nick'></span>
                        <span className='total-score'><b>TOTAL</b></span>
                        <span className='score'><b>RECON</b></span>
                        <span className='score'><b>CRYPTO</b></span>
                        <span className='score'><b>STEGO</b></span>
                        <span className='score'><b>WEB</b></span>
                        <span className='score'><b>PPC</b></span>
                        <span className='score'><b>MISC</b></span>
                    </div>
                    <hr/>

                    {
                        listOfNames.map(nick => {
                            return (
                                <div className='score-line'>
                                    <span className='nick'>{nick}</span>
                                    <span className='total-score'>{usersInfo[nick]['TOTAL']}</span>

                                    {categories.map(cat => {
                                        return (
                                            <span className='score'>{usersInfo[nick][cat]}</span>
                                        );
                                    })}
                                </div>
                            );
                        })
                    }
                </div>
                <img src={'giphy' + (GetRandomInt(7) + 1) + '.gif'} className='score-img'/>
            </div>
        );
    }

    else {
        return (
            <div className='scb-wrapper'>
                <div className='big-tabel'>
                    <div className='score-line-names'>
                        <span className='nick'></span>
                        <span className='total-score'><b>TOTAL</b></span>
                        <span className='score'><b>RECON</b></span>
                        <span className='score'><b>CRYPTO</b></span>
                        <span className='score'><b>STEGO</b></span>
                        <span className='score'><b>WEB</b></span>
                        <span className='score'><b>PPC</b></span>
                        <span className='score'><b>MISC</b></span>
                        <span className='score'><b>GAME</b></span>
                    </div>
                    <hr/>
                </div>
                <img src={'giphy' + (GetRandomInt(7) + 1) + '.gif'} className='score-img'/>
            </div>
        );
    }
    
}