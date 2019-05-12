import {
    Doctor
} from './doctors';
import {
    Hospital
} from './hospital';


export const HOSPITALS: Hospital[] = [{
        h_id: 99901,
        name: "vayodha Hospitals Pvt. Ltd.",
        location: "Balkhu Chowk",
        phoneNumber: "01-423555",
        d_associated: [88811, 88804, 88805]
    },
    {
        h_id: 99902,
        name: "Bir Hospital",
        location: "Ratna park",
        phoneNumber: "01-423555",
        d_associated: [88804, 88802, 88803]
    },
    {
        h_id: 99903,
        name: "Grande International Hospital",
        location: "Dhapasi",
        phoneNumber: "01-423455",
        d_associated: [88806, 88802, 88812]
    },
    {
        h_id: 99904,
        name : 'Kathmandu Model Hospital',
        location : 'Adwait Marg Kathmandu',
        phoneNumber : "01-4469064",
        d_associated: [88801, 88807, 88808]
    },
    {
        h_id: 99905,
        name: "Tilganga Eye Hospital",
        location: "Ring Road,Ktm",
        phoneNumber: "01-423655",
        d_associated: [88806, 88803, 88810]
    }
];