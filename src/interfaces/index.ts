export interface FieldError {
    field: string;
    message: string;
}

export interface PredictionResponse {
    data: PlantDetails | null;
    errors?: FieldError[];
}

export interface PlantDetails {
    name: string;
    origin: string;
    uses: string[];
}
