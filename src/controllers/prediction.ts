import { Request, Response } from 'express';

interface FieldError {
    field: string;
    message: string;
}

interface PredictionResponse {
    data: string;
    errors?: FieldError[];
}

export const postPrediction = async (req: Request, res: Response) => {
    try {
        const file = req.file;
        if (!file) {
            return res.send({
                data: '',
                errors: [{ field: 'image', message: 'Please upload an image' }]
            } satisfies PredictionResponse);
        }

        // TODO: do model prediction
        const prediction = 'Pyrus Malus(Apple)';

        return res.send({
            data: prediction
        } satisfies PredictionResponse);
    } catch (error) {
        console.error(error);
        return res.send({
            data: ''
        } satisfies PredictionResponse);
    }
};
