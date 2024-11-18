import axios from 'axios';

axios.post('http://localhost:3000/api/v1/books/byTitle', 
    {
        title: "Node.js Design Patterns"
    }
)
  .then(response => {
    console.log('Books:', response.data);
  })
  .catch(error => {
    console.error('There was an error with the request:', error);
  });
