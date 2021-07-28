import React from 'react';
import Tasks from './Tasks.js';
import Render from './index.js';

export default function TasksPage() {
    let aNames = [
        'RECON',
        'CRYPTO',
        'STEGO',
        'WEB',
        'PPC',
        'MISC'
    ]

    let isAvailable = {
        'RECON': localStorage.getItem('recon'),
        'CRYPTO': localStorage.getItem('crypto'),
        'STEGO': localStorage.getItem('stego'),
        'WEB': localStorage.getItem('web'),
        'PPC': localStorage.getItem('ppc'),
        'MISC': localStorage.getItem('misc')
    }

    let type = '';
    if (localStorage.getItem('type') != null) {
        type = localStorage.getItem('type');
    }


    function updateT (s) {
        localStorage.setItem('type', s);
        Render();
    }
    
    
    return (
        <div> 
            <div className='big-tasks-wrapper'>
                {aNames.map(name => {
                    if (name === type && isAvailable[name] == '1')
                        return (
                            <div className='task-type-choosed' onClick={() => updateT(name)}>
                                <h1>{name}</h1>
                            </div>
                        );
                    else if (isAvailable[name] == '1')
                        return (
                            <div className='task-type-wrapper' onClick={() => updateT(name)}>
                                <h1>{name}</h1>
                            </div>
                        );
                    else {
                        return (
                            <div className='task-type-closed'>
                                <h1>{name}</h1>
                            </div>
                        );
                    }
                })}
            </div>
            <div>{Tasks(type)}</div>
        </div>
        
        
    );
}