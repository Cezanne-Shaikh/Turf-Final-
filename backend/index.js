import express from 'express'
import bodyParser from 'body-parser'
import mongoose from 'mongoose'
import cors from 'cors'
import adminRoutes from './routes/admin.js'
import userRoutes from './routes/auth.js'
import bookRoutes from './routes/booking.js'
import contactRoutes from './routes/contact.js'
import reviewRoutes from './routes/review.js'
import profileRoutes from './routes/profiles.js'
import corporateRoutes from './routes/corporate.js'
import paymentRoutes from './routes/payment.js'
import Stripe from 'stripe'

const app = express()

app.use(cors())
const stripe = Stripe(`sk_test_51MpUY0SDkFtgPQdnkB3sGhPu4yZV0nCou9iEfCumptR97LWs0b0t7AdghWBpQ2mGFZsNbU3bmipmGRZD5TCfByo000Jna0KEm0`)

app.use(bodyParser.json({ limit:'50mb', extended: true}));
app.use(bodyParser.urlencoded({ limit:'50mb', extended: true}));
app.use(express.json())

app.use('/users', userRoutes)
app.use('/admin', adminRoutes)
app.use('/booking', bookRoutes)
app.use('/contact', contactRoutes)
app.use('/reviews', reviewRoutes)
app.use('/profile', profileRoutes)
app.use('/corporate-booking', corporateRoutes)
app.use("/api/payment/", paymentRoutes);



const PORT = process.env.PORT || 4001

const CONNECTION_URL = 'mongodb+srv://cezanne:251436@cluster0.zrik7m6.mongodb.net/?retryWrites=true&w=majority'

app.listen(PORT, ()=> console.log(`http://localhost:${PORT}`))

mongoose.connect(CONNECTION_URL, {useNewUrlParser: true, useUnifiedTopology: true},
 ()=> console.log('connected to Database'))