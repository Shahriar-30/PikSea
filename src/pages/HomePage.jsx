import React, { useState } from 'react'
import MyButtom from '../components/MyButton'

function HomePage() {
    let [loading, setLoading] = useState(false)
    let click = ()=> {
        setLoading(true)
        setTimeout(() => {
        setLoading(false)
        }, 1000);
    }
  return (
    <>
    <MyButtom txt={'Good'} disabled={loading} onClick={click} size={'lg'} startIcon={'😘'} />
    </>
  )
}

export default HomePage