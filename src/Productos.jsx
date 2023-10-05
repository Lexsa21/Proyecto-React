import kendrick from './assets/imageVinilo/img1.jpg'
import childish from './assets/imageVinilo/img2.jpg'
import jungle from './assets/imageVinilo/img3.jpg'
import cte from './assets/imageVinilo/img4.jpg'
import kanye from './assets/imageVinilo/cd1.jpg'
import gorillaz from './assets/imageVinilo/cd2.jpg'
import kl from './assets/imageVinilo/cd3.jpg'
import strokes from './assets/imageVinilo/cd4.jpg'
import audio1 from './assets/imageVinilo/tocadiscos1.jpg'
import audio2 from './assets/imageVinilo/tocadiscos2.jpg'
import audio3 from './assets/imageVinilo/tocadiscos3.jpg'



export default[
    {
        'id': 1,
        'title':'To Pimp a Butterfly',
        'price': 1,
        image: kendrick,
        category:'vinyl',
        description: 'Hola soy la descripción',
        stock: 10
    },
    {
        id: 2,
        title:'Awaken my Love',
        price: 2,
        'image': childish,
        category:'vinyl',
        description: 'Hola soy la descripción',
        stock: 10
    },
    {
        id: 3,
        title:'Volcano',
        price: 3,
        'image': jungle,
        category:'vinyl',
        description: 'Hola soy la descripción',
        stock: 10
    },
    {
        id: 4,
        title:'Social Cues',
        price: 4,
        'image': cte,
        category:'vinyl',
        description: 'Hola soy la descripción',
        stock: 10
    },
    
    {
        id: 5,
        title:'Yeezus',
        price: 5,
        'image': kanye,
        category:'cds',
        description: 'Hola soy la descripción',
        stock: 10
    },
    {
        id: 6,
        title:'Plastic Beach',
        price: 6,
        'image': gorillaz,
        'category':'cds',
        description: 'Hola soy la descripción',
        stock: 10
    },
    {
        id: 7,
        title:'Good Kid Mad City',
        price: 7,
        'image': kl,
        category:'cds',
        description: 'Hola soy la descripción',
        stock: 10
    },
    {
        id: 8,
        title:'Is This It',
        price: 8,
        'image': strokes,
        category:'cds',
        description: 'Hola soy la descripción',
        stock: 10
    },
    {
        id: 9,
        title:'AudioTecnical 200',
        price: 9,
        'image': audio1,
        category:'bandejas',
        description: 'Hola soy la descripción',
        stock: 10
    },
    {
        id: 10,
        title:'AudioTecnical 100',
        price: 10,
        'image': audio2,
        category:'bandejas',
        description: 'Hola soy la descripción',
        stock: 10
    },
    {
        id: 11,
        title:'AudioTecnical 300',
        price: 11,
        'image': audio3,
        category:'bandejas',
        description: 'Hola soy la descripción',
        stock: 10
    },
]

/*si le saco el comentario se rompe la visualizacion, fijarme si cuando importe esta todo bien*/
