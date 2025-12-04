const express = require('express');
const errorHandler = require('./src/middlewares/error.middleware');
require('dotenv').config();
// const cors = require('cors');
const vendorRoutes = require('./src/routes/vendor.routes');
const rpfRoutes = require('./src/routes/Rpf.routes');
const adminRouter = require('./src/routes/admin.routes');
const app = express()

const PORT = process.env.PORT || 8000
app.use(express.json());

app.get('/health', (req, res) => {
  res.json({ status: 'ok' });
});
// app.use(cors)
app.use('/vendor', vendorRoutes)
app.use('/rpf', rpfRoutes)
app.use('/admin', adminRouter)
app.use(errorHandler)
app.listen(PORT, () => console.log("Server runnnig on PORT", PORT))