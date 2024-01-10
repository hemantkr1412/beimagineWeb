import Client from "./Client";
import { Typography } from '@mui/material';
import './Client.css'

const box1 = [
    "https://static.wixstatic.com/media/db9fa2_c52a14b04473405eb02e148b413b4f3a~mv2.png/v1/fill/w_213,h_213,al_c,q_85,usm_0.66_1.00_0.01,enc_auto/3.png",
    "https://static.wixstatic.com/media/db9fa2_977c8ba635364449bdf3251801d1ec5a~mv2.png/v1/fill/w_213,h_213,al_c,q_85,usm_0.66_1.00_0.01,enc_auto/6.png",
];
const box2 = [
    "https://static.wixstatic.com/media/db9fa2_64114ab84ca3430ba49643c4b5766dfa~mv2.png/v1/fill/w_213,h_213,al_c,q_85,usm_0.66_1.00_0.01,enc_auto/2.png",
    "https://static.wixstatic.com/media/db9fa2_8e97a7e1fbef4f54a32d7fc4f75a6dca~mv2.png/v1/fill/w_213,h_213,al_c,q_85,usm_0.66_1.00_0.01,enc_auto/4.png://picsum.photos/200",

]
const box3 = [
    "https://static.wixstatic.com/media/db9fa2_db6c9a85df2840d59afb8ccc0f99a63e~mv2.jpeg/v1/fill/w_213,h_213,al_c,q_80,usm_0.66_1.00_0.01,enc_auto/WhatsApp%20Image%202022-12-16%20at%202_38_58%20PM.jpeg",
    "https://static.wixstatic.com/media/db9fa2_6fae67742c5d48c5aece327c77114f4f~mv2.png/v1/fill/w_213,h_213,al_c,q_85,usm_0.66_1.00_0.01,enc_auto/1.png"
]
const box4 = [
    'https://static.wixstatic.com/media/db9fa2_04a9ba97a0f94982a56cc44be31dace6~mv2.jpeg/v1/fill/w_213,h_213,al_c,q_80,usm_0.66_1.00_0.01,enc_auto/WhatsApp%20Image%202022-12-16%20at%202_38_52%20PM.jpeg',
    'https://static.wixstatic.com/media/db9fa2_cde4128dcea24d9aaa221454af1806a2~mv2.jpeg/v1/fill/w_213,h_213,al_c,q_80,usm_0.66_1.00_0.01,enc_auto/WhatsApp%20Image%202022-12-16%20at%202_38_54%20PM.jpeg'
]
const box5 = [
    'https://static.wixstatic.com/media/db9fa2_d3906bb58c0942699e275f39fa14add6~mv2.jpeg/v1/fill/w_213,h_213,al_c,q_80,usm_0.66_1.00_0.01,enc_auto/WhatsApp%20Image%202022-12-16%20at%202_38_53%20PM.jpeg',
    'https://static.wixstatic.com/media/db9fa2_ed28e8e894cf4aeeb29f71a63423f261~mv2.jpeg/v1/fill/w_213,h_213,al_c,q_80,usm_0.66_1.00_0.01,enc_auto/WhatsApp%20Image%202022-12-16%20at%202_38_56%20PM.jpeg'
]

const ClientContainer = () => {
    return (
        <>
            <div className='title'>
                <Typography variant='h2'>Our Clients</Typography>
            </div>
            <div className="boxes">
                <Client images={box1} />
                <Client images={box2} />
                <Client images={box3} />
                <Client images={box4} />
                <Client images={box5} />
            </div>
        </>
    )
}

export default ClientContainer;