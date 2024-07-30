const dotenv = require('dotenv')
const express =  require('express');
const mongoose = require('mongoose');


const adminRoutes = require('./routes/adminRoutes.js');
const hodrouter = require('./routes/hodRoutes');
const teacherrouter = require('./routes/teacherRoutes');
const studentRoutes = require('./routes/studentRoutes.js');





const app = express();
app.use(express.json());
dotenv.config();

mongoose.connect(process.env.MONGO_URL)
.then(() => console.log('MongoDB connected'))
.catch(err => console.error('MongoDB connection error:', err));

app.use('/api', adminRoutes);
app.use('/api', hodrouter);
app.use('/api', teacherrouter);
app.use('/api', studentRoutes);


const PORT = process.env.PORT || 3200;
//console.log(PORT)
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
