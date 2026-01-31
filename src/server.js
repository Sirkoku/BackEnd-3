import mongoose from 'mongoose';
import app from './app.js';

const PORT = process.env.PORT || 8080;

mongoose.connect('mongodb+srv://faucrivelli_db_user:MdQ3u6IlUcaXivdw@cluster3.szsmcyn.mongodb.net/'
)
.then(() => {
    console.log('DB connected');
    app.listen(PORT, () => {
    console.log(`Listening on ${PORT}`);
});
})
.catch(err => {
console.log('DB connection error:', err);
});
