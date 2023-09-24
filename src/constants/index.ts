import { FieldError, PlantDetails } from '../interfaces';

export const __prod__ = process.env.NODE_ENV === 'production';
export const INTERNAL_SERVER_ERROR: FieldError = {
    field: 'server',
    message: 'internal server error'
};

export const plants = [
    'maclura_pomifera',
    'ulmus_rubra',
    'prunus_virginiana',
    'acer_rubrum',
    'broussonettia_papyrifera',
    'prunus_sargentii',
    'ptelea_trifoliata',
    'ulmus_pumila',
    'abies_concolor',
    'asimina_triloba',
    'diospyros_virginiana',
    'quercus_montana',
    'ilex_opaca',
    'liriodendron_tulipifera',
    'acer_negundo',
    'styrax_japonica',
    'quercus_muehlenbergii',
    'aesculus_pavi',
    'juglans_cinerea',
    'chionanthus_virginicus',
    'catalpa_bignonioides',
    'cercis_canadensis',
    'ulmus_americana',
    'cryptomeria_japonica',
    'staphylea_trifolia',
    'acer_palmatum',
    'ostrya_virginiana',
    'fraxinus_nigra',
    'carya_cordiformis',
    'gleditsia_triacanthos',
    'tilia_cordata',
    'salix_nigra',
    'koelreuteria_paniculata',
    'catalpa_speciosa',
    'eucommia_ulmoides',
    'tsuga_canadensis',
    'platanus_occidentalis',
    'acer_saccharinum',
    'zelkova_serrata',
    'acer_saccharum',
    'magnolia_denudata',
    'carpinus_caroliniana',
    'pinus_cembra',
    'magnolia_virginiana',
    'carya_glabra',
    'quercus_marilandica',
    'taxodium_distichum',
    'cornus_florida',
    'quercus_alba',
    'pinus_bungeana',
    'malus_pumila',
    'pyrus_calleryana',
    'carya_tomentosa',
    'quercus_velutina',
    'quercus_stellata',
    'chamaecyparis_pisifera',
    'metasequoia_glyptostroboides',
    'pinus_parviflora',
    'salix_babylonica',
    'pinus_flexilis',
    'pinus_resinosa',
    'cladrastis_lutea',
    'picea_pungens',
    'quercus_acutissima',
    'picea_abies',
    'salix_caroliniana',
    'prunus_subhirtella',
    'quercus_michauxii',
    'magnolia_stellata',
    'oxydendrum_arboreum',
    'cedrus_libani',
    'populus_deltoides',
    'liquidambar_styraciflua',
    'salix_matsudana',
    'crataegus_viridis',
    'stewartia_pseudocamellia',
    'pinus_virginiana',
    'ulmus_parvifolia',
    'quercus_virginiana',
    'ficus_carica',
    'chamaecyparis_thyoides',
    'cornus_mas',
    'quercus_macrocarpa',
    'pinus_densiflora',
    'pinus_rigida',
    'nyssa_sylvatica',
    'aesculus_glabra',
    'quercus_nigra',
    'picea_orientalis',
    'pinus_taeda',
    'juglans_nigra',
    'populus_grandidentata',
    'pinus_echinata',
    'populus_tremuloides',
    'castanea_dentata',
    'pinus_nigra',
    'pinus_koraiensis',
    'pinus_peucea',
    'pinus_wallichiana',
    'ulmus_glabra',
    'tilia_americana',
    'cedrus_atlantica',
    'abies_nordmanniana',
    'pinus_pungens',
    'quercus_shumardii',
    'amelanchier_canadensis',
    'carya_ovata',
    'acer_pensylvanicum',
    'malus_baccata',
    'crataegus_pruinosa',
    'fagus_grandifolia',
    'pseudolarix_amabilis',
    'malus_hupehensis',
    'pinus_sylvestris',
    'magnolia_tripetala',
    'betula_alleghaniensis',
    'acer_ginnala',
    'malus_floribunda',
    'amelanchier_laevis',
    'malus_coronaria',
    'prunus_pensylvanica',
    'larix_decidua',
    'prunus_serotina',
    'magnolia_acuminata',
    'celtis_tenuifolia',
    'gymnocladus_dioicus',
    'phellodendron_amurense',
    'betula_populifolia',
    'quercus_bicolor',
    'robinia_pseudo-acacia',
    'tilia_tomentosa',
    'magnolia_macrophylla',
    'albizia_julibrissin',
    'acer_campestre',
    'halesia_tetraptera',
    'chionanthus_retusus',
    'crataegus_laevigata',
    'quercus_imbricaria',
    'quercus_robur',
    'morus_alba',
    'crataegus_phaenopyrum',
    'betula_jacqemontii',
    'cercidiphyllum_japonicum',
    'quercus_coccinea',
    'paulownia_tomentosa',
    'ginkgo_biloba',
    'acer_platanoides',
    'pinus_strobus',
    'betula_nigra',
    'platanus_acerifolia',
    'morus_rubra',
    'aesculus_hippocastamon',
    'prunus_yedoensis',
    'quercus_cerris',
    'tilia_europaea',
    'fraxinus_pennsylvanica',
    'magnolia_grandiflora',
    'cornus_kousa',
    'carpinus_betulus',
    'acer_pseudoplatanus',
    'quercus_palustris',
    'prunus_serrulata',
    'quercus_phellos',
    'celtis_occidentalis',
    'sassafras_albidum',
    'betula_lenta',
    'aesculus_flava',
    'amelanchier_arborea',
    'pinus_thunbergii',
    'acer_griseum',
    'ulmus_procera',
    'cedrus_deodara',
    'ailanthus_altissima',
    'crataegus_crus-galli',
    'evodia_daniellii',
    'juniperus_virginiana'
];

export const plantsMap: Record<string, PlantDetails> = {
    ulmus_rubra: {
        name: 'Slippery elm',
        origin: 'North America',
        uses: [
            'Leaves - raw or cooked. Used as a potherb',
            'Inner bark - cooked. It can be dried and made into noodles',
            'The dried inner bark can also be ground into a powder and then used as a thickener in soups or added to cereal flours when making bread etc.'
        ]
    },
    ulmus_pumila: {
        name: 'Ulmus Pumlia',
        origin: 'China',
        uses: [
            'Skin conditions: Slippery Elm is believed to be able to treat various skin conditions when applied topically',
            'Sore throat: Due to its natural demulcent properties, Slippery Elm is thought to soothe a sore throat by coating the lining of the throat and esophagus.',
            'Constipation: Slippery Elm may help relieve constipation.'
        ]
    },
    acer_rubrum: {
        name: 'Red Maple',
        origin: 'United States and Canada',
        uses: [
            'Anti-Inflammatory: The bark of Acer rubrum has been traditionally used in herbal medicine for its anti-inflammatory properties',
            'Antioxidant: Red Maple leaves contain compounds like phenolic acids and flavonoids, which have antioxidant properties.',
            'Astringent: The astringent properties of Red Maple can be attributed to its tannin content. Astringents have the ability to tighten and constrict tissues, which can be useful for reducing bleeding and treating minor wounds or skin conditions.'
        ]
    },
    broussonettia_papyrifera: {
        name: 'Paper Mulberry',
        origin: 'China',
        uses: [
            'Anti-Inflammatory: The leaves and bark of Paper Mulberry contain compounds with anti-inflammatory properties',
            'Analgesic: Some traditional herbal remedies use Paper Mulberry extracts for their potential analgesic (pain-relieving) properties.',
            'Antioxidant: Broussonettia papyrifera contains antioxidants like flavonoids and polyphenols, which can help combat oxidative stress and reduce cellular damage caused by free radicals.'
        ]
    },
    ptelea_trifoliata: {
        name: 'Common Hoptree',
        origin: 'United States',
        uses: [
            'Digestive Aid: The bark and fruit of Ptelea trifoliata have been traditionally used in herbal medicine as a digestive aid.',
            'Antispasmodic: Common Hoptree is known for its antispasmodic properties, which means it can help relieve muscle spasms and cramps.',
            'Antibacterial: Some studies suggest that extracts from Ptelea trifoliata may possess antibacterial properties.'
        ]
    },
    liriodendron_tulipifera: {
        name: 'Tulip Tree',
        origin: 'United States',
        uses: [
            'Traditional Medicine: Liriodendron tulipifera has a history of use in traditional medicine. Various parts of the tree, including the bark, leaves, and flowers, have been used for their potential medicinal properties.',
            'Anti-Inflammatory: Some traditional remedies utilize extracts from the Tulip Tree for their anti-inflammatory properties, which may help reduce inflammation and related discomfort.',
            'Aromatic and Timber Uses: Besides its potential medicinal uses, the Tulip Tree is valued for its aromatic properties and high-quality timber, which is used in woodworking and construction.'
        ]
    },
    quercus_marilandica: {
        name: 'Blackjack Oak',
        origin: 'United States',
        uses: [
            'Traditional Medicine: Quercus marilandica has a history of use in traditional medicine. Various parts of the tree, including the bark and leaves, have been used for their potential medicinal properties.',
            'Astringent: The bark of the Blackjack Oak is known for its astringent properties. Astringents can tighten and constrict tissues and have been used topically for conditions like minor wounds.',
            'Wildlife Habitat: In addition to its potential medicinal uses, the tree serves as a valuable habitat and food source for wildlife.'
        ]
    },
    picea_abies: {
        name: 'Norway Spruce',
        origin: 'Norway, Sweden, and Finland',
        uses: [
            'Traditional Medicine: Picea abies has a history of use in traditional medicine. Various parts of the tree, including the bark and needles, have been used for their potential medicinal properties.',
            'Respiratory Health: The needles of the Norway Spruce can be used to make teas or inhalations that may support respiratory health and alleviate symptoms of coughs and colds.',
            'Aromatic and Timber Uses: Besides its potential medicinal uses, the Norway Spruce is valued for its aromatic properties and high-quality timber, commonly used in construction and woodworking.'
        ]
    },
    magnolia_stellata: {
        name: 'Star Magnolia',
        origin: 'Japan',
        uses: [
            'Traditional Medicine: Magnolia stellata has a history of use in traditional medicine. Various parts of the plant, including the bark and flowers, have been used for their potential medicinal properties.',
            'Anti-Inflammatory: Some traditional remedies utilize extracts from the Star Magnolia for their anti-inflammatory properties, which may help reduce inflammation and related discomfort.',
            'Ornamental Beauty: Beyond its potential medicinal uses, the Star Magnolia is highly prized for its stunning and fragrant flowers, making it a popular ornamental plant in gardens and landscapes.'
        ]
    },
    oxydendrum_arboreum: {
        name: 'Sourwood',
        origin: 'United States',
        uses: [
            'Traditional Medicine: Oxydendrum arboreum has been used in traditional medicine for its potential health benefits. Various parts of the plant, including the leaves and bark, have been used.',
            'Honey Production: The nectar from Sourwood flowers is highly valued by beekeepers and is used to produce a distinctive and flavorful Sourwood honey.',
            'Ornamental Beauty: Sourwood is also appreciated for its attractive foliage and late-summer blooms, making it a popular ornamental tree.'
        ]
    },
    cedrus_libani: {
        name: 'Cedar of Lebanon',
        origin: 'Lebanon',
        uses: [
            'Traditional Uses: Cedrus libani has a history of use in traditional medicine. Various parts of the tree, including the resin, have been used for their potential medicinal properties.',
            'Timber and Aromatic Wood: The wood of Cedar of Lebanon is highly valued for its durability and aromatic properties. It has been used in construction and woodworking for centuries.',
            'Symbolic and Cultural Significance: Cedar of Lebanon is of great cultural and symbolic significance in various cultures, often representing strength and endurance.'
        ]
    },
    populus_deltoides: {
        name: 'Eastern Cottonwood',
        origin: 'United States',
        uses: [
            'Traditional Medicine: Populus deltoides has been used in traditional medicine for its potential medicinal properties. Various parts of the tree, including the bark and buds, have been utilized.',
            'Shelter and Erosion Control: The rapid growth of Eastern Cottonwood makes it useful for providing shade and windbreaks. Its roots also help stabilize soil along riverbanks.',
            'Wood and Pulp: The wood of Eastern Cottonwood is used in various applications, including furniture and paper production.'
        ]
    },
    liquidambar_styraciflua: {
        name: 'Sweetgum',
        origin: 'United States',
        uses: [
            'Traditional Medicine: Liquidambar styraciflua has a history of use in traditional medicine. Various parts of the tree, including the resin, have been used for their potential health benefits.',
            'Gum Production: The resin of Sweetgum is known as "sweet gum" and has been used for chewing gum and other products.',
            'Ornamental and Timber Uses: Sweetgum is also valued for its colorful autumn foliage and is used for timber in woodworking and construction.'
        ]
    },
    salix_matsudana: {
        name: 'Chinese Willow',
        origin: 'China',
        uses: [
            'Traditional Medicine: Salix matsudana has a history of use in traditional medicine. Various parts of the tree, including the bark and leaves, have been used for their potential medicinal properties.',
            'Erosion Control: Chinese Willow is often planted for erosion control along riverbanks and other areas prone to soil erosion.',
            'Ornamental and Willow Cultivation: The plant is also grown for its attractive weeping branches and is sometimes used in willow cultivation.'
        ]
    },
    chamaecyparis_thyoides: {
        name: 'Atlantic White Cedar',
        origin: 'United States',
        uses: [
            'Traditional Medicine: Chamaecyparis thyoides has been used in traditional medicine for its potential medicinal properties. Various parts of the tree, including the leaves and wood, have been utilized.',
            'Wetland Ecosystems: Atlantic White Cedar plays a crucial role in wetland ecosystems, helping to improve water quality and providing habitat for wildlife.',
            'Timber and Aromatic Wood: The wood of Atlantic White Cedar is valued for its durability and aromatic qualities, making it suitable for various construction and woodworking applications.'
        ]
    },
    cornus_mas: {
        name: 'Cornelian Cherry',
        origin: 'Europe',
        uses: [
            'Traditional Medicine: Cornus mas has a history of use in traditional medicine. The fruit and bark have been used for their potential medicinal properties.',
            'Edible Fruit: The fruit of the Cornelian Cherry is edible and is often used in jams, preserves, and beverages due to its tart flavor.',
            'Ornamental and Hedge Plant: In addition to its potential medicinal uses, Cornus mas is valued for its ornamental qualities and is sometimes used as a hedge plant.'
        ]
    },
    quercus_macrocarpa: {
        name: 'Bur Oak',
        origin: 'United States',
        uses: [
            'Traditional Medicine: Quercus macrocarpa has been used in traditional medicine. Various parts of the tree, including the bark and acorns, have been used for their potential medicinal properties.',
            'Wildlife Habitat: Bur Oak provides valuable habitat and food for wildlife, including deer and various bird species.',
            'Timber and Shade: The wood of Bur Oak is used for timber, and the tree is appreciated for its broad canopy that provides shade in landscapes.'
        ]
    },
    pinus_densiflora: {
        name: 'Japanese Red Pine',
        origin: 'Japan',
        uses: [
            'Traditional Medicine: Pinus densiflora has a history of use in traditional medicine. Various parts of the tree, including the resin and needles, have been used for their potential medicinal properties.',
            'Ornamental and Bonsai: Japanese Red Pine is highly valued for its ornamental appearance and is often used in landscaping and for bonsai cultivation.',
            'Timber and Charcoal: The wood of Japanese Red Pine is used for timber and charcoal production.'
        ]
    },
    pinus_rigida: {
        name: 'Pitch Pine',
        origin: 'United States',
        uses: [
            'Traditional Medicine: Pinus rigida has been used in traditional medicine. Various parts of the tree, including the resin, have been used for their potential medicinal properties.',
            'Timber and Naval Use: Pitch Pine wood was historically used in shipbuilding, particularly for its resinous properties. It was a valuable source of pitch and tar.',
            'Wildlife Habitat: The tree also provides habitat and food for various wildlife species.'
        ]
    },
    nyssa_sylvatica: {
        name: 'Black Gum',
        origin: 'United States',
        uses: [
            'Traditional Medicine: Nyssa sylvatica has a history of use in traditional medicine. Various parts of the tree, including the bark, leaves, and twigs, have been used for their potential medicinal properties.',
            'Wildlife Habitat: Black Gum is important for wildlife habitat and provides food for birds and other wildlife species.',
            'Ornamental: The tree is also valued for its attractive fall foliage and is sometimes used in landscaping for its ornamental qualities.'
        ]
    },
    aesculus_glabra: {
        name: 'Ohio Buckeye',
        origin: 'United States',
        uses: [
            'Traditional Medicine: Aesculus glabra has been used in traditional medicine. Various parts of the tree, including the bark and seeds, have been used for their potential medicinal properties.',
            'Ornamental and Shade: Ohio Buckeye is appreciated for its ornamental value and is sometimes planted for its shade-providing canopy.',
            'Wildlife Attraction: The tree attracts wildlife, including squirrels, which feed on its seeds.'
        ]
    },
    quercus_nigra: {
        name: 'Water Oak',
        origin: 'United States',
        uses: [
            'Traditional Medicine: Quercus nigra has been used in traditional medicine. Various parts of the tree, including the bark and leaves, have been used for their potential medicinal properties.',
            'Lumber and Wood Products: The wood of Water Oak is used in various applications, including furniture and flooring.',
            'Wildlife Habitat: The tree provides habitat and food for wildlife, including deer and birds.'
        ]
    },
    pinus_pungens: {
        name: 'Table Mountain Pine',
        origin: 'Canada',
        uses: [
            'Traditional Medicine: Pinus pungens has been used in traditional medicine. Various parts of the tree, including the resin and needles, have been used for their potential medicinal properties.',
            'Wildlife Habitat: Table Mountain Pine provides important wildlife habitat and food for various wildlife species.',
            'Conservation: Some varieties of Table Mountain Pine are of conservation concern due to their limited distribution.'
        ]
    },
    quercus_shumardii: {
        name: 'Shumard Oak',
        origin: 'North Korea',
        uses: [
            'Traditional Medicine: Quercus shumardii has been used in traditional medicine. Various parts of the tree, including the bark and acorns, have been used for their potential medicinal properties.',
            'Timber and Shade: Shumard Oak is appreciated for its timber value and is also planted for its shade-providing canopy.',
            'Wildlife Attraction: The tree attracts wildlife, including birds and squirrels, which feed on its acorns.'
        ]
    },
    amelanchier_canadensis: {
        name: 'Canadian Serviceberry',
        origin: 'Canada',
        uses: [
            'Traditional Medicine: Amelanchier canadensis has a history of use in traditional medicine. The fruit and bark have been used for their potential medicinal properties.',
            'Edible Fruit: The fruit of the Canadian Serviceberry is edible and is used in various culinary applications, including pies and jams.',
            'Ornamental: The tree is also valued for its ornamental qualities and is sometimes used in landscaping.'
        ]
    },
    carya_ovata: {
        name: 'Shagbark Hickory',
        origin: 'United States',
        uses: [
            'Traditional Medicine: Carya ovata has been used in traditional medicine. Various parts of the tree, including the bark and nuts, have been used for their potential medicinal properties.',
            'Edible Nuts: Shagbark Hickory produces edible nuts that are sometimes used in cooking and baking.',
            'Timber and Wood Products: The wood of Shagbark Hickory is valued for its strength and is used in various woodworking applications.'
        ]
    },
    acer_pensylvanicum: {
        name: 'Moosewood',
        origin: 'Finland',
        uses: [
            'Traditional Medicine: Acer pensylvanicum has been used in traditional medicine. Various parts of the tree, including the bark and leaves, have been used for their potential medicinal properties.',
            'Ornamental: Moosewood is valued for its ornamental qualities and is sometimes used in landscaping.',
            'Wildlife Habitat: The tree provides habitat for various wildlife species.'
        ]
    }
};
