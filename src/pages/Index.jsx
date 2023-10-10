import React from 'react'
import { useLoaderData, Link } from 'react-router-dom'

const Index = () => {
    const data = useLoaderData();
    console.log(data, 'from index js hellooooo')
  return (
    <div>Index</div>
  )
}

export default Index