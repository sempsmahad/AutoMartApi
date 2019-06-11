import express from 'express';
import bodyParser from 'body-parser';
import carRoutes from './server/routes/carRoutes';
import flagRoutes from './server/routes/flagRoutes';
import userRoutes from './server/routes/userRoutes';
import orderRoutes from './server/routes/orderRoutes';

const app = express();
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

app.use('/api/v1', carRoutes);
app.use('/api/v1/flags', flagRoutes);
app.use('/api/v1/auth', userRoutes);
app.use('/api/v1/orders', orderRoutes);

// when a random route is inputed
app.get('*', (req, res) => res.status(200).send({
  message: 'Welcome to this API.'
}));
const port = process.env.PORT || 5000;
app.listen(port, () => {
  console.log(`Server is running on PORT ${port}`);
});
export default app;
