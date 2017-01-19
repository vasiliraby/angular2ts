export interface IWeatherItems {
    name: string;
    main: {
        temp: number;
        humidity: number;
        pressure: number;
    }
    wind: {
        deg: number,
        speed: number;
    }
    weather: [{
        description: string,
        icon: string
    }]
}