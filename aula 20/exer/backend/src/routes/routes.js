import express from 'express'
import user from './estoque.js'

export default function(app){
    app
    .use(express.json())
    .use('/estoque', user)
}