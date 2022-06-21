/* CATEGORIAS

1 = CASA
2 = BAÑO
3 = COCINA
4 = MUEBLES */

const dataItems = [
  {
    id: 1,
    name: "Mesa Tom Baja Blanca",
    price: 11806,
    description:
      "Mesa ratona romeo rectangular blanca. Construida en melamina blanca de 18mm de espesor con los cantos invertidos a 45º grados.",
    categoria: "4",
    stock: 10,
    img: [
      "https://www.morph.com.ar/pub/media/catalog/product/cache/c249fbb42cf583b1a8cf6f6bd1b7b4b4/3/6/368471_a_mesabajatom_1.jpg",
    ],
  },
  {
    id: 2,
    name: "Mesa Anne Blanca Y Roble 60cm",
    price: 8491,
    description:
      "Mesa construida en melamina blanca y roble de 18 mm de espesor. Posee los cantos invertidos a 45° grados. Se ensambla por encastre y requiere destornillador. Se entrega embalada en caja de cartón a medida. Es ideal para ser utilizada como mesa ratona de living.",
    categoria: "4",
    stock: 4,
    img: [
      "https://www.morph.com.ar/pub/media/catalog/product/cache/c249fbb42cf583b1a8cf6f6bd1b7b4b4/3/6/367538_a_mesacombinadaanne60cm.jpg",
      "https://www.morph.com.ar/pub/media/catalog/product/cache/c249fbb42cf583b1a8cf6f6bd1b7b4b4/3/6/367538_b_mesacombinadaanne60cm.jpg",
      "https://www.morph.com.ar/pub/media/catalog/product/cache/c249fbb42cf583b1a8cf6f6bd1b7b4b4/3/6/367538_c_mesacombinadaanne60cm.jpg",
    ],
  },
  {
    id: 3,
    name: "Comoda Airin",
    price: 67991,
    description:
      "La Comoda Alanis, posee un diseño de origen Nórdico con estilo minimalista y cuenta con 2 cajones de madera grandes y 2 puertas súper cómodas para que puedas guardar de todo. Los muebles de la colección Alanis son ideales para livings, dormitorios y comedores. Posee terminaciones redondeadas y de máxima calidad. Color Madera Natural y Blanco.",
    categoria: "4",
    stock: 6,
    img: [
      "https://www.morph.com.ar/pub/media/catalog/product/cache/c249fbb42cf583b1a8cf6f6bd1b7b4b4/3/6/365323_a_comodaairin.jpg",
      "https://www.morph.com.ar/pub/media/catalog/product/cache/c249fbb42cf583b1a8cf6f6bd1b7b4b4/3/6/365323_b_comodaairin.jpg",
      "https://www.morph.com.ar/pub/media/catalog/product/cache/c249fbb42cf583b1a8cf6f6bd1b7b4b4/3/6/365323_c_comodaairin.jpg",
    ],
  },
  {
    id: 4,
    name: "Tapa Y Tabla Inodoro Marfil",
    price: 10791,
    description:
      "Tabla y tapa de inodoro estampadas. Por dentro replica el diseño que tiene por fuera. Fabricada en MDF de alta densidad, y herrajes de acero inoxidable. Medida universal, por lo que se adapta a casi todos los inodoros. Incluye accesorios de montaje e instrucciones para su colocación.",
    categoria: "2",
    stock: 14,
    img: [
      "https://www.morph.com.ar/pub/media/catalog/product/cache/c249fbb42cf583b1a8cf6f6bd1b7b4b4/3/7/370171_a_tapaasientoclassicparainodoromarfil.jpg",
    ],
  },
  {
    id: 5,
    name: "Tapa Y Tabla Inodoro Madera Vintage",
    price: 10791,
    description:
      "Tabla y tapa de inodoro estampadas. Por dentro replica el diseño que tiene por fuera. Fabricada en MDF de alta densidad, y herrajes de acero inoxidable. Medida universal, por lo que se adapta a casi todos los inodoros. Incluye accesorios de montaje e instrucciones para su colocación.",
    categoria: "2",
    stock: 18,
    img: [
      "https://www.morph.com.ar/pub/media/catalog/product/cache/c249fbb42cf583b1a8cf6f6bd1b7b4b4/3/7/370171_a_tapaasientoclassicparainodoromaderaclaravintage.jpg",
    ],
  },
  {
    id: 6,
    name: "Tapa Y Tabla Inodoro Dog",
    price: 11891,
    description:
      "Tabla y tapa de inodoro estampadas. Por dentro replica el diseño que tiene por fuera. Fabricada en MDF de alta densidad, y herrajes de acero inoxidable. Medida universal, por lo que se adapta a casi todos los inodoros. Incluye accesorios de montaje e instrucciones para su colocación. ",
    categoria: "2",
    stock: 42,
    img: [
      "https://www.morph.com.ar/pub/media/catalog/product/cache/c249fbb42cf583b1a8cf6f6bd1b7b4b4/3/7/370172_a_tapaasientodesingparainodorodog.jpg",
    ],
  },
  {
    id: 7,
    name: "Fuente Cerámica Rectangular",
    price: 7990,
    description:
      "Fuente de cerámica esmaltada en 2 dos colores, ideal para el horno y llevar directamente a la mesa.",
    categoria: "3",
    stock: 24,
    img: [
      "https://www.morph.com.ar/pub/media/catalog/product/cache/c249fbb42cf583b1a8cf6f6bd1b7b4b4/3/7/373736_a_fuentegdestaubrectangular39x26x7_5cm.jpg",
    ],
  },
  {
    id: 8,
    name: "Especiero Blacky Soporte 6 Frascos",
    price: 6490,
    description:
      " Especiero de metal con 6 frascos cuadrados de vidrio, cada frasco tiene una capacidad de 50ml con tapa de plástico.",
    categoria: "3",
    stock: 11,
    img: [
      "https://www.morph.com.ar/pub/media/catalog/product/cache/c249fbb42cf583b1a8cf6f6bd1b7b4b4/3/7/372295_a_especieroblackycsoporte.jpg",
      "https://www.morph.com.ar/pub/media/catalog/product/cache/c249fbb42cf583b1a8cf6f6bd1b7b4b4/3/7/372295_b_especieroblackycsoporte.jpg",
      "https://www.morph.com.ar/pub/media/catalog/product/cache/c249fbb42cf583b1a8cf6f6bd1b7b4b4/3/7/372295_c_especieroblackycsoporte.jpg",
    ],
  },
  {
    id: 9,
    name: "Tabla Pizza Bamboo Con Accesorio",
    price: 5590,
    description:
      " Tabla para pizza de bamboo con manija, incluye cortante para pizza",
    categoria: "3",
    stock: 7,
    img: [
      "https://www.morph.com.ar/pub/media/catalog/product/cache/c249fbb42cf583b1a8cf6f6bd1b7b4b4/3/7/373127_a_tablapizzabamboocaccesorio.jpg",
    ],
  },
  {
    id: 10,
    name: "Portarretratos Hepta Madera",
    price: 6490,
    description:
      "Única pieza compuesta por 7 portarretratos de madera con vidrio.",
    categoria: "1",
    stock: 18,
    img: [
      "https://www.morph.com.ar/pub/media/catalog/product/cache/c249fbb42cf583b1a8cf6f6bd1b7b4b4/3/3/337746_a_portaretratoshepta.jpg",
    ],
  },
  {
    id: 11,
    name: "Reloj Mirror Min",
    price: 3990,
    description: "Espejo estampado, agujas metálicas",
    categoria: "1",
    stock: 23,
    img: [
      "https://www.morph.com.ar/pub/media/catalog/product/cache/c249fbb42cf583b1a8cf6f6bd1b7b4b4/3/3/337434_a_relojminaok.jpg",
      "https://www.morph.com.ar/pub/media/catalog/product/cache/c249fbb42cf583b1a8cf6f6bd1b7b4b4/3/3/337434_a_relojmin-a.jpg",
    ],
  },
  {
    id: 12,
    name: "Reloj Mirror Full",
    price: 3990,
    description: "Espejo estampado, agujas metálicas.",
    categoria: "1",
    stock: 17,
    img: [
      "https://www.morph.com.ar/pub/media/catalog/product/cache/c249fbb42cf583b1a8cf6f6bd1b7b4b4/3/3/337432_a_relojmirrorfullok.jpg",
      "https://www.morph.com.ar/pub/media/catalog/product/cache/c249fbb42cf583b1a8cf6f6bd1b7b4b4/3/3/337432_a_relojmirrorfull.jpg",
    ],
  },
];

export default dataItems;
