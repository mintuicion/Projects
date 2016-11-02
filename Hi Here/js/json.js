var marcadores = [
    
    ['Bar Barretti', 37.361487, -5.985941, 'Bellavista-La Palmera', 'Sevilla', 'Barato (€)', 'Av. de la Reina Mercedes, 19, 41012 Sevilla'],
    ['Terraza Cáliz', 37.326793, -5.966451, 'Bellavista-La Palmera', 'Sevilla', 'Barato (€)', 'Avenida de Jerez, 16, 41014 Sevilla'],
    ['Casa Moreno', 37.324582, -5.969201, 'Bellavista-La Palmera', 'Sevilla', 'Barato (€)', 'Calle Gaspar Calderas, 1, 41014 Sevilla'],

    ['Red House', 37.393996, -5.994787, 'Casco Antiguo', 'Sevilla', 'Barato (€)', 'Calle Amor de Dios, 7, 41002 Sevilla'],
    ['Dulce Trazo', 37.389861, -5.996520, 'Casco Antiguo', 'Sevilla', 'Barato (€)', 'Calle Méndez Núñez, 7, 41001 Sevilla'],
    ['Virgin Coffee', 37.393985, -5.991771, 'Casco Antiguo', 'Sevilla', 'Barato (€)', 'Calle Regina, 1, 41003 Sevilla'],
    ['Torch Coffee Roasters', 37.381882, -5.995359, 'Casco Antiguo', 'Sevilla', 'Barato (€)', 'Avenida Paseo de las Delicias, 3, 41001 Sevilla'],

    ['Casablanca', 37.383817, -5.994164, 'Casco Antiguo', 'Sevilla', 'Moderado (€€)', 'Calle Adolfo Rodríguez Jurado, 12, 41001 Sevilla'],
    ['Boheme', 37.385884, -5.995902, 'Casco Antiguo', 'Sevilla', 'Moderado (€€)', 'Calle Arfe, 24, 41001 Sevilla'],
    ['Ochoa', 37.391190, -5.994519, 'Casco Antiguo', 'Sevilla', 'Moderado (€€)', 'Calle Sierpes, 45, 41004 Sevilla'],

    ['Doña Francisquita', 37.387190, -5.993081, 'Casco Antiguo', 'Sevilla', 'Caro (€€€)', 'Calle Álvarez Quintero, 43, 41004 Sevilla'],
    ['Manolete', 37.386819, -5.993659, 'Casco Antiguo', 'Sevilla', 'Caro (€€€)', 'Calle Alemanes, 9, 41004 Sevilla'],

    ['Cafetería Parrilla', 37.386073, -5.945054, 'Cerro-Amate', 'Sevilla', 'Barato (€)', 'Calle Amor, 4, 41006 Sevilla'],
    ['Polvillo', 37.372339, -5.952718, 'Cerro-Amate', 'Sevilla', 'Barato (€)', 'Calle Coimbra, 34, 41006 Sevilla'],

    ['El Fogón de Sergio', 37.392988, -5.919924, 'Este-Alcosa', 'Sevilla', 'Barato (€)', 'Avenida de las Ciencias, 12, 41020 Sevilla'],
    ['La Ciencia', 37.400170, -5.927349, 'Este-Alcosa', 'Sevilla', 'Barato (€)', 'Avenida de las Ciencias, 53, 41020 Sevilla'],
    ['Imagine', 37.401585, -5.923940, 'Este-Alcosa', 'Sevilla', 'Barato (€)', 'Calle Donantes de Sangre, 10, 41020 Sevilla'],    
    ['ADN', 37.402501, -5.924932, 'Este-Alcosa', 'Sevilla', 'Barato (€)', 'Calle Japón, 6, 41020 Sevilla'],

    ['Sala The Box', 37.406233, -5.930771, 'Este-Alcosa', 'Sevilla', 'Barato (€)', 'Av. de la Innovación, s/n, 41020 Sevilla'],
    ['Los Artesanos', 37.397491, -5.922728, 'Este-Alcosa', 'Sevilla', 'Barato (€)', 'Avenida de las Ciencias, 22, 41020 Sevilla'],    
    ['Abades Air Sevilla', 37.420287, -5.892993, 'Este-Alcosa', 'Sevilla', 'Barato (€)', 'A-4, Km. 532, 41020 Sevilla'],

    ['Café del Valle', 37.377456, -5.998404, 'Los Remedios', 'Sevilla', 'Barato (€)', 'Calle Virgen del Valle, 8, 41011 Sevilla'],
    ['La Prensa', 37.371687, -6.001390, 'Los Remedios', 'Sevilla', 'Barato (€)', 'Avenida Flota de Indias, 20, 41011 Sevilla'],

    ['Bar Los Remedios', 37.377849, -6.000539, 'Los Remedios', 'Sevilla', 'Moderado (€€)', 'Calle Niebla, 14, 41011 Sevilla'],
    ['Ochoa', 37.377759, -6.001406, 'Los Remedios', 'Sevilla', 'Moderado (€€)', 'Av. de la República Argentina, 21, 41011 Sevilla'],

    ['Metropolitan', 37.410015, -5.984887, 'Macarena', 'Sevilla', 'Barato (€)', 'Calle Dr. Fedriani, 25, 41009 Sevilla'],
    ['Huerta del Hierro', 37.401603, -5.980361, 'Macarena', 'Sevilla', 'Barato (€)', 'Calle Albaida, 22, 41008 Sevilla'],
    ['Bodeguita Palmera', 37.413309, -5.974751, 'Macarena', 'Sevilla', 'Barato (€)', 'Grupo los Príncipes P IV, 1, 41008 Sevilla'],

    ['Kphé', 37.410745, -5.989845, 'Macarena', 'Sevilla', 'Moderado (€€)', 'Avenida del Concejal Alberto Jiménez-Becerril, 2, 41009 Sevilla'],
    ['Velvet', 37.407849, -5.991829, 'Macarena', 'Sevilla', 'Moderado (€€)', 'Avenida Concejal Alberto Jiménez-Becerril, 3-13, 41009 Sevilla'],

    ['La Gallina en el Diván', 37.384168, -5.963932, 'Nervión', 'Sevilla', 'Barato (€)', 'Calle Alejandro Collantes, 38, 41005 Sevilla'],
    ['Lalita Café', 37.384217, -5.969414, 'Nervión', 'Sevilla', 'Barato (€)', 'Calle José Luis de Casso, 38, 41005 Sevilla'],
    ['Panamá', 37.376040, -5.975868, 'Nervión', 'Sevilla', 'Barato (€)', 'Av. de Diego Martínez Barrio, 4, 41013 Sevilla'],
    ['Coffee Corner', 37.380190, -5.979031, 'Nervión', 'Sevilla', 'Barato (€)', 'Calle José Recuerda Rubio, 1, 41018 Sevilla'],

    ['Cachet', 37.385413, -5.978880, 'Nervión', 'Sevilla', 'Moderado (€€)', 'Av. de la Buhaira, 10, 41018 Sevilla'],
    ['Gabbana', 37.385396, -5.979126, 'Nervión', 'Sevilla', 'Moderado (€€)', 'Av. de la Buhaira, 8, 41016 Sevilla'],

    ['Bambú', 37.416546, -5.972149, 'Norte', 'Sevilla', 'Barato (€)', 'Calle Parque de Grazalema, 1, 41015 Sevilla'],
    ['El Indio', 37.427308, -5.960951, 'Norte', 'Sevilla', 'Barato (€)', 'Calle Cortijo de las Casillas, 16, 41015 Sevilla'],
    ['El Jarrillo', 37.413612, -5.967284, 'Norte', 'Sevilla', 'Barato (€)', 'Calle San Diego Nuevo, 10, 41015 Sevilla'],
    ['El Capricho', 37.429513, -5.967681, 'Norte', 'Sevilla', 'Barato (€)', 'Calle Estrella Canopus, 3, 41015 Sevilla'],

    ['Envidia', 37.390931, -5.979396, 'San Pablo-Santa Justa', 'Sevilla', 'Barato (€)', 'Calle Juan Antonio Cavestany, 33, 41003 Sevilla'],
    ['Bordha', 37.399296, -5.974385, 'San Pablo-Santa Justa', 'Sevilla', 'Barato (€)', 'Calle de José María de Mena, 4, 41008 Sevilla'],
    ['Vincent', 37.399628, -5.969320, 'San Pablo-Santa Justa', 'Sevilla', 'Barato (€)', 'Avenida Alcalde Manuel del Valle, 5, 41008 Sevilla'],

    ['Cafetería Yavoy', 37.401694, -5.970168, 'San Pablo-Santa Justa', 'Sevilla', 'Moderado (€€)', 'Calle Rafael Alberti, 10, 41008 Sevilla'],

    ['Horno San Tomás', 37.376680, -5.980128, 'Sur', 'Sevilla', 'Barato (€)', 'Calle del Doctor Pedro Castro, 10 41004 Sevilla'],
    ['Isolde Café', 37.369621, -5.978456, 'Sur', 'Sevilla', 'Barato (€)', 'Calle Cardenal Bueno Monreal, 18, 41013 Sevilla'],
    ['Huerta de la Salud', 37.376936, -5.981965, 'Sur', 'Sevilla', 'Barato (€)', 'Calle Fernando Villalón, 2, 41004 Sevilla'],

    ['La Buhaira', 37.377601, -5.980098, 'Sur', 'Sevilla', 'Moderado (€€)', 'Calle Doctor Ordóñez de la Barrera, s/n, 41004 Sevilla'],

    ['Café de la Prensa', 37.384995, -6.002229, 'Triana', 'Sevilla', 'Barato (€)', 'Calle Betis, 8, 41010 Sevilla'],
    ['Casablanca Dreams', 37.381844, -6.007954, 'Triana', 'Sevilla', 'Barato (€)', 'Calle San Jacinto, 94, 41010 Sevilla'],
    ['Java', 37.384046, -6.004637, 'Triana', 'Sevilla', 'Barato (€)', 'Calle San Jacinto, 31, 41010 Sevilla'],
    ['Abacería Salvatierra', 37.377251, -6.006781, 'Triana', 'Sevilla', 'Barato (€)', 'Lopez de Gomara, 20, 41010 Sevilla'],

    ['Kahawa', 37.379628, -6.008324, 'Triana', 'Sevilla', 'Moderado (€€)', 'Calle Gijón, 16, 41010 Sevilla']
];