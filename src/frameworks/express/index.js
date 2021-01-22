import express from 'express'
import middlewares from './middlewares'
export default middlewares(express())
