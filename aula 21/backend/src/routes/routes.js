import express from 'express'
import user from './control.js'

export default function(app){
    app
    .use(express.json())
    .use('/control', user)
}