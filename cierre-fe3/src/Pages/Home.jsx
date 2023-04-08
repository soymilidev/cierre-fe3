import React from 'react'
import Card from '../components/Card'
import { useContextGlobal } from "../components/utils/global.context";


const Home = () => {
  const { dentists } = useContextGlobal();

  if (!dentists) {
    return <h2>Error</h2>;
  }

  return (
    <>
      <h1>Home</h1>
      <div className='card-grid'>
        {dentists?.map(dentist =>
          <Card key={dentist.id} dentist={dentist} />
        )}
      </div>
    </>
  )
}

export default Home