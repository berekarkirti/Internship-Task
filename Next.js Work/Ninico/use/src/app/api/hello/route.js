'use server'

import axios from 'axios';

export async function GET() 
{
  try 
  {
    const response = await axios.get('https://jsonplaceholder.typicode.com/posts');

    return new Response(JSON.stringify(response.data), 
    {
      status: 200,
      headers: 
      {
        'Content-Type': 'application/json',
      },
    });
  } 
  catch (error) 
  {
    console.error("Error fetching data: ", error);
    return new Response(JSON.stringify({ error: 'Failed to fetch data' }), 
    {
      status: 500,
      headers: {
        'Content-Type': 'application/json',
      },
    });
  }
}
