import {NextApiRequest, NextApiResponse} from 'next'

import prismadb from '@/lib/prismadb'
import serverAuth from '@/lib/serverAuth'

export default async function handler(req:NextApiRequest,res:NextApiResponse){
    if(req.method !== 'GET'){
        return res.status(405).end();
    }

    try {
        await serverAuth(req,res)

        const {movieId} = req.query;

        if(typeof movieId !== 'string'){
            throw new Error('Invalid movie id')
        }

        if(!movieId){
            throw new Error('Invalid ID')
        }

        //find movie
        const movie = await prismadb.movie.findUnique({
            where:{
                id:movieId
            }
        })

        if(!movie){
            throw new Error('Invalid ID')
        }

        // console.log(">> movie lay duoc: ",movie)

        return res.status(200).json(movie)
    } catch (error) {
        console.log(">> co loi khi truy cap view  movie: ",error)
        return res.status(400).end();
    }
}