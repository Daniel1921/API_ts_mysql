import { Request, Response } from 'express';
import User from '../models/userModel';

export const getUsers = async(req: Request, res: Response) => {


    const users = await User.findAll();


    res.json({
        ok: true,
        users
    })

}


export const getUser = async(req: Request, res: Response) => {


    const {id} = req.params;

    const user = await User.findByPk(id);

    if(user){
        res.json({
            ok: true,
            id,
            user
        })
    }else {
        res.status(404).json({
            ok: false,
            msg: 'No existe ningun usuario por este ID'
        })
    }

  

}


export const createUser = async (req: Request, res: Response) => {

    const { body } = req;
  
    try {
        
        const user = await User.create(body) ;

        res.json({
            ok: true,
            body,
            msg: 'User Create!',
            user
        })
    
    } catch (error) {
        console.log(error);
        res.status(500).json({
            msg: 'comuniquese con el admin'
        })
    }
  
}


export const updateUser = async (req: Request, res: Response) => {

    const { id } = req.params;
    const { body } = req;

    try {

        const user = await User.findByPk(id);

        if(!user) {

           return res.status(404).json({
                ok: false,
                msg: ' No Encontro ningun usuario con ese id '
            })

        }

        await user.update(body);

        

        res.json({
            ok: true,
            id,
            msg: 'user Update with succesful',
            user
        })
    
    } catch (error) {
        
    }

   
}

export const deleteUser = async (req: Request, res: Response) => {

    const { id } = req.params;


        try {

            
        const user = await User.findByPk(id);

        if(!user) {

           return res.status(404).json({
                ok: false,
                msg: ' No Encontro ningun usuario con ese id '
            })

        }

        // eliminación permanente
        //await user.destroy();

        await user.update({ state: false });

        res.json({
            ok: true,
            id,
            msg: 'user has been deleted ',
            user
        })
    
            
        } catch (error) {
            
        }


}
