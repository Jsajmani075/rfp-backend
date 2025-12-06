const express = require('express');
const errorHandler = require('./src/middlewares/error.middleware');
require('dotenv').config();
const cors = require('cors');
const vendorRoutes = require('./src/routes/vendor.routes');
const rpfRoutes = require('./src/routes/Rpf.routes');
const proposalRoutes = require('./src/routes/proposal.routes');
const app = express()

const PORT = process.env.PORT || 8000
app.use(express.json());

app.get('/health', (req, res) => {
  res.json({ status: 'ok' });
});
app.use(cors({
  origin: process.env.ALLOWED_ORIGINS,
  methods: "GET,POST,PUT,DELETE",
  credentials: true
}));

app.use('/vendor', vendorRoutes)
app.use('/rpf', rpfRoutes)
app.use('/proposal', proposalRoutes)
app.use(errorHandler)
app.listen(PORT, () => console.log("Server runnnig on PORT", PORT))