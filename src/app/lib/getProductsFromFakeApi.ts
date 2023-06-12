import {faker} from "@faker-js/faker";

const getProductsFromFakeApi = () => {
    faker.seed(666)

    return [
        {
            id: 'Nike Superior Seamless Løbetop Dame',
            title: 'Nike Superior Seamless Løbetop Dame',
            subtitle: faker.commerce.productDescription(),
            price: faker.commerce.price(),
            image_url:
                'https://shop.sport24.dk/_next/image/?url=https%3A%2F%2Fd9k6g0fi21yil.cloudfront.net%2F209-WR6566a_035_21.jpg&w=3840&q=75',
        },
        {
            id: 'Endurance Halen Seamless Løbetop Dame',
            title: 'Endurance Halen Seamless Løbetop Dame',
            subtitle: faker.commerce.productDescription(),
            price: faker.commerce.price(),
            image_url:
                'https://shop.sport24.dk/_next/image/?url=https%3A%2F%2Fd9k6g0fi21yil.cloudfront.net%2F414-E231451_1011_21.jpg&w=3840&q=75',
        },
        {
            id: 'Nike Pro Dri-FIT Crop Træningstop Dame',
            title: 'Nike Pro Dri-FIT Crop Træningstop Dame',
            subtitle: faker.commerce.productDescription(),
            price: faker.commerce.price(),
            image_url:
                'https://shop.sport24.dk/_next/image/?url=https%3A%2F%2Fd9k6g0fi21yil.cloudfront.net%2F3B-DX0061_010_21.jpg&w=3840&q=75',
        },
    ]
}

export default getProductsFromFakeApi