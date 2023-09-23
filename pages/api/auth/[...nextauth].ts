import NextAuth from "next-auth";
import Credentials from "next-auth/providers/credentials";
import {compare} from 'bcrypt'

import GithubProvider from 'next-auth/providers/github'
import GoogleProvider from 'next-auth/providers/google'

import prismadb from '@/lib/prismadb'

// sua loi cho mongodb
import { MongoDBAdapter } from "@auth/mongodb-adapter"
import clientPromise from "@/lib/mongodb"

export default NextAuth({
    providers: [
        // phuc vu login Github vs Google
        GithubProvider({
            clientId:process.env.GITHUB_ID as string,
            clientSecret:process.env.GITHUB_SECRET as string
        }),
        GoogleProvider({
            clientId:process.env.GOOGLE_CLIENT_ID as string,
            clientSecret:process.env.GOOGLE_CLIENT_SECRET as string
        }),
        Credentials({
            id:'credentials',
            name:'Credentials',
            credentials:{
                email:{
                    label:'Email',
                    type:'text',
                },
                password:{
                    label:'Password',
                    type:'password',
                }},
                async authorize(credentials){
                    if(!credentials?.email || ! credentials?.password){
                        throw new Error('Email and password is required')
                    }

                    const user = await prismadb.user.findUnique({
                        where:{
                            email:credentials.email
                        }
                    });

                    if(!user || !user.hashedPassword){
                        throw new Error('Email does not exist')
                    }

                    const isCorrectPassword = await compare(credentials.password,user.hashedPassword)

                    if(!isCorrectPassword){
                        throw new Error('Incorrect password')
                    }

                    return user;
                }
        })
    ],
    pages:{
        signIn:'/auth',
    },
    debug: process.env.NODE_ENV === 'development',
    // adapter: PrismaAdapter(prisma),
    adapter: MongoDBAdapter(clientPromise),
    session:{
        strategy:'jwt'
    },
    jwt:{
        secret:process.env.NEXTAUTH_JWT_SECRET,
    },
    secret:process.env.NEXTAUTH_SECRET
})

