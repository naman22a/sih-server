export interface FieldError {
    field: string;
    message: string;
}

export interface PredictionResponse {
    data: string;
    errors?: FieldError[];
}
