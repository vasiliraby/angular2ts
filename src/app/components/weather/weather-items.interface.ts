export interface IWeatherItems {
    name: string;
    main: {
        temp: number;
        humidity: number;
        pressure: number;
    }
}