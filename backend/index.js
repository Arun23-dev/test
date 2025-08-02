const express = require('express');
const axios = require('axios');
const cors = require('cors');


const app = express();
const corsOptions = {
  origin: 'https://swiggyfrontend.onrender.com',
  credentials:true,
};
app.use(cors(corsOptions));



const PORT =  5000;

app.get('/resturants', async (req, res) => {

  const offset = req.query.offset || 0;
  try {

      const swiggyURL = `https://www.swiggy.com/dapi/restaurants/list/v5?lat=28.7040592&lng=77.10249019999999&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING&offset=${offset}`;
    const response = await axios.get(
    swiggyURL,
      {
        headers: {
          'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64)',
          'Accept': 'application/json',
        },
      }
    );

    const data = response.data;
    res.send(data);
  } catch (err) {
    console.error('Error:', err.message);
    res.status(500).json({ error: 'Error fetching data', details: err.message });
  }
});




app.get('/city/delhi/:id', async (req, res) => {
  const  {id}=req.params;
  try {
    const response = await axios.get(
      `https://www.swiggy.com/dapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=28.7040592&lng=77.10249019999999&restaurantId=${id}&catalog_qa=undefined&submitAction=ENTER`,
      {
        headers: {
          'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64)',
          'Accept': 'application/json',
        },
      }
    );

    const data = response.data;
    res.send(data);
  } catch (err) {
    console.error('Error:', err.message);
    res.status(500).json({ error: 'Error fetching data', details: err.message });
  }
});


app.listen(PORT, () => {
  console.log(`Proxy server running on :${PORT}`);
});
// module.exports=app;