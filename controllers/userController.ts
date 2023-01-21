import { Request, Response } from 'express';

export const getUsers = (req: Request, res: Response) => {

    res.json({
        ok: true,
        msg: 'get Users BD'
    })

}


export const getUser = (req: Request, res: Response) => {

    const {id} = req.params;

    res.json({
        ok: true,
        id,
        msg: 'get a User BD'
    })

}


export const createUser = (req: Request, res: Response) => {

    const { body } = req;

    res.json({
        ok: true,
        body,
        msg: 'User Create!'
    })

}


export const updateUser = (req: Request, res: Response) => {

    const { id } = req.params;
    const { body } = req;

    res.json({
        ok: true,
        id,
        msg: 'user Update with succesful'
    })

}

export const deleteUser = (req: Request, res: Response) => {

    const { id } = req.params;


    res.json({
        ok: true,
        id,
        msg: 'user has been deleted '
    })

}
