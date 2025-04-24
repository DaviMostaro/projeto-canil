import {Request, Response} from 'express';

import { Pet } from '../models/pet';
import {createMenuObject} from '../helpers/createMenuObject';

export const search = (req : Request, res : Response) => {
    if(!req.query.q) {
        return res.redirect('/');
    }
    res.render('pages/page', {
        menu: createMenuObject(''),
        list: Pet.getFromName(req.query.q as string)
    })
}