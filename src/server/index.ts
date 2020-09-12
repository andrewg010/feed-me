import express from 'express'
import cors from 'cors'
import { getFilteredFoodItems } from './getFilteredItems'

const app = express()

const port = process.env.PORT || 8080

app.use(cors())
app.use(express.static('dist'))

app.get('/api/items', (req, res) => {
  const { filter } = req.query
  const items = getFilteredFoodItems(filter as string)
  return res.send({ items })
})

app.listen(port, () => console.log(`Listening on port ${port}!`))
