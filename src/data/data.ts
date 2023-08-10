interface IProperties {
    title: string
    price: string
}

export const propertiesData: IProperties[] = [
    {
        title: 'Casa de lujo con 3 cuartos',
        price: '$ 1,200,000.00'
    }, {
        title: 'Casa de lujo con 8 cuartos',
        price: '$ 6,000,000.00'
    }, {
        title: 'Casa de lujo con 2 cuartos',
        price: '$ 1,000,000.00'
    }, {
        title: 'Casa de lujo con 4 cuartos',
        price: '$ 2,500,000.00'
    }, {
        title: 'Casa de lujo con 9 cuartos',
        price: '$ 8,800,000.00'
    }, {
        title: 'Casa de lujo con 7 cuartos',
        price: '$ 5,500,000.00'
    }
]

interface ITestimonial {
    title: string
    fecha: string
}

export const testimonialsData: ITestimonial[] = [
    {
        title: 'Estupendo',
        fecha: '10 de agosto, 2023'
    }, {
        title: 'Alta gama',
        fecha: '20 de septiembre, 2023'
    }, {
        title: 'Titulo',
        fecha: '30 de noviembre, 2023'
    }
]