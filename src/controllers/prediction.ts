import { Request, Response } from 'express';
import * as tf from '@tensorflow/tfjs-node';
import { PredictionResponse } from '../interfaces';
import { maxArgs, formatName } from '../utils';
import { INTERNAL_SERVER_ERROR, plants, plantsMap } from '../constants';

let model: tf.LayersModel | undefined;
const MODEL_PATH = `file://src/ai/model/model.json`;

(async () => {
    try {
        model = await tf.loadLayersModel(MODEL_PATH);
    } catch (error) {
        console.error(error);
    }
})();

export const postPrediction = async (req: Request, res: Response) => {
    try {
        // check if image does not exist
        const image = req.file;
        if (!image) {
            return res.send({
                data: null,
                errors: [{ field: 'image', message: 'Please upload an image' }]
            } satisfies PredictionResponse);
        }

        // check if model does not exist
        if (!model) throw new Error('Model not loaded yet');

        // convert image into tensor image
        const tfImage = tf.node.decodeImage(image.buffer);

        // resize image to 224x224 dimensions
        const resizedImage = tf.expandDims(
            tf.image.resizeNearestNeighbor(tfImage, [224, 224]),
            0
        );

        // predict the value
        const output = model.predict(resizedImage) as any;

        // convert tensor to javascript array
        const indices = Array.from(output.dataSync()) as Array<number>;

        // find the highest probability ans index
        const maxIndex = maxArgs(indices);

        // get the string from plants array by passing the index
        const name = plants[maxIndex];

        // get plant details
        const data = plantsMap[name];

        // if plants details not found then
        if (!data) {
            return res.send({
                data: {
                    name: formatName(name),
                    origin: 'Unknown',
                    uses: []
                }
            } satisfies PredictionResponse);
        }

        return res.send({
            data: { ...data, name: `${formatName(name)}(${data.name})` }
        } satisfies PredictionResponse);
    } catch (error) {
        console.error(error);
        return res.send({
            data: null,
            errors: [INTERNAL_SERVER_ERROR]
        } satisfies PredictionResponse);
    }
};
