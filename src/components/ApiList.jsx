import React, { useContext } from 'react'
import { Crude } from '../Crude'
import ApiItems from './ApiItems'

const ApiList = () => {
    let{myapi, setmyApi} = useContext(Crude)
    console.log(myapi)

  return (
    <div>
        {myapi.map((x) => (
            <ApiItems key={x.id} segun={x} />

        ))}
        ApiList
    </div>
  )
}

export default ApiList