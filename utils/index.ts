import { CarProps } from "@/components/CarCard";

export interface FilterProps {
    manufacturer: string;
    model: string;
    year?: number;
    limit?: number;
    fuel: string;
}

export async function fetchCars(filters: FilterProps) {
    const { manufacturer, model, year, limit, fuel } = filters;
    const headers = {
        'X-RapidAPI-Key': '6e36f96110msh374c3247fdc1f24p1cfffbjsnce0c54a71634',
        'X-RapidAPI-Host': 'cars-by-api-ninjas.p.rapidapi.com'
    };

    try {
        // const response = await fetch(`https://cars-by-api-ninjas.p.rapidapi.com/v1/cars?make=${manufacturer}&year=${year}&model=${model}&limit=${limit}&fuel_type=${fuel}`, { headers: headers });
        // const result = await response.json();
        // return result;
        throw new Error("soemthign")
    } catch (e) {
        console.log(e);
        return sampleResult;
    }

    return [];
}

export const calculateCarRent = (city_mpg: number, year: number) => {
    const basePricePerDay = 50; // Base rental price per day in dollars
    const mileageFactor = 0.1; // Additional rate per mile driven
    const ageFactor = 0.05; // Additional rate per year of vehicle age

    // Calculate additional rate based on mileage and age
    const mileageRate = city_mpg * mileageFactor;
    const ageRate = (new Date().getFullYear() - year) * ageFactor;

    // Calculate total rental rate per day
    const rentalRatePerDay = basePricePerDay + mileageRate + ageRate;

    return rentalRatePerDay.toFixed(0);
};

export const generateCarImageUrl = (car: CarProps, angle?: string) => {
    const url = new URL('https://cdn.imagin.studio/getimage');

    const { make, year, model } = car;
    url.searchParams.append('customer', 'hrjavascript-mastery');
    url.searchParams.append('make', make);
    url.searchParams.append('modelFamily', model.split(' ')[0]);
    url.searchParams.append('zoomType', 'fullscreen');
    url.searchParams.append('modelYear', `${year}`);
    url.searchParams.append('angle', `${angle}`);

    return `${url}`;
}

export const updateSearchParams = (type: string, value: string) => {
    const newSearchParam = new URLSearchParams(window.location.search);
    newSearchParam.set(type, value);

    return `${window.location.pathname}?${newSearchParam.toString()}`;
}

const sampleResult = [
    {
        city_mpg: 15,
        class: 'sport utility vehicle',
        combination_mpg: 17,
        cylinders: 6,
        displacement: 3.5,
        drive: 'rwd',
        fuel_type: 'gas',
        highway_mpg: 22,
        make: 'infiniti',
        model: 'fx35 2wd',
        transmission: 'a',
        year: 2003
    },
    {
        city_mpg: 15,
        class: 'sport utility vehicle',
        combination_mpg: 17,
        cylinders: 6,
        displacement: 3.5,
        drive: 'awd',
        fuel_type: 'gas',
        highway_mpg: 20,
        make: 'infiniti',
        model: 'fx35 awd',
        transmission: 'a',
        year: 2003
    },
    {
        city_mpg: 15,
        class: 'sport utility vehicle',
        combination_mpg: 17,
        cylinders: 6,
        displacement: 3.5,
        drive: 'rwd',
        fuel_type: 'gas',
        highway_mpg: 22,
        make: 'infiniti',
        model: 'fx35 rwd',
        transmission: 'a',
        year: 2004
    },
    {
        city_mpg: 15,
        class: 'sport utility vehicle',
        combination_mpg: 18,
        cylinders: 6,
        displacement: 2.5,
        drive: 'awd',
        fuel_type: 'gas',
        highway_mpg: 22,
        make: 'bmw',
        model: 'x3',
        transmission: 'm',
        year: 2004
    },
    {
        city_mpg: 15,
        class: 'sport utility vehicle',
        combination_mpg: 17,
        cylinders: 6,
        displacement: 2.5,
        drive: 'awd',
        fuel_type: 'gas',
        highway_mpg: 22,
        make: 'bmw',
        model: 'x3',
        transmission: 'a',
        year: 2004
    }
]