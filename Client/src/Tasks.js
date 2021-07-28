import Crypto from './Crypto.js';
import Stego from './Stego.js';
import Web from './Web.js';
import Recon from './Recon.js';
import Misc from './Misc.js';
import PPC from './PPC.js';

export default function Tasks(type) {
    if (type === 'CRYPTO') return Crypto();
    if (type === 'STEGO') return Stego();
    if (type === 'WEB') return Web();
    if (type === 'RECON') return Recon();
    if (type === 'MISC') return Misc();
    if (type === 'PPC') return PPC();
}