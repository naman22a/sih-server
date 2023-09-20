import { FieldError } from '../interfaces';

export const __prod__ = process.env.NODE_ENV === 'production';
export const INTERNAL_SERVER_ERROR: FieldError = {
    field: 'server',
    message: 'internal server error'
};

export const plants = [
    'Alpinia Galanga (Rasna)',
    'Amaranthus Viridis (Arive-Dantu)',
    'Artocarpus Heterophyllus (Jackfruit)',
    'Azadirachta Indica (Neem)',
    'Basella Alba (Basale)',
    'Brassica Juncea (Indian Mustard)',
    'Carissa Carandas (Karanda)',
    'Citrus Limon (Lemon)',
    'Ficus Auriculata (Roxburgh fig)',
    'Ficus Religiosa (Peepal Tree)',
    'Hibiscus Rosa-sinensis',
    'Jasminum (Jasmine)',
    'Mangifera Indica (Mango)',
    'Mentha (Mint)',
    'Moringa Oleifera (Drumstick)',
    'Muntingia Calabura (Jamaica Cherry-Gasagase)',
    'Murraya Koenigii (Curry)',
    'Nerium Oleander (Oleander)',
    'Nyctanthes Arbor-tristis (Parijata)',
    'Ocimum Tenuiflorum (Tulsi)',
    'Piper Betle (Betel)',
    'Plectranthus Amboinicus (Mexican Mint)',
    'Pongamia Pinnata (Indian Beech)',
    'Psidium Guajava (Guava)',
    'Punica Granatum (Pomegranate)',
    'Santalum Album (Sandalwood)',
    'Syzygium Cumini (Jamun)',
    'Syzygium Jambos (Rose Apple)',
    'Tabernaemontana Divaricata (Crape Jasmine)',
    'Trigonella Foenum-graecum (Fenugreek)'
];
