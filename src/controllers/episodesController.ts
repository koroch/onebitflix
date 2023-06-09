import { Request, Response } from "express";
import { episodeServices } from "../services/episodeService";

export const episodesController = {
    stream: async (req: Request, res: Response) => {
        const { videoUrl } = req.query;

        try {
            if (typeof videoUrl !== 'string') throw new Error('videoUrl param must be of type string');
            
            const range = req.headers.range;

            episodeServices.streamEpisodeToResponse(res, videoUrl, range);
            
        } catch (err) {
            if(err instanceof Error) {
                return res.status(400).json({message: err.message});
            }
        }
    }

}