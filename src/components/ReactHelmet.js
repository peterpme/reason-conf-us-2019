import React from 'react'
import {Helmet} from 'react-helmet'

const ReactHelmet= () => {
    return (
        <Helmet>
            <link href="https://fonts.googleapis.com/css?family=Montserrat&display=swap" rel="stylesheet" />
            <style>{'body { display: flex; flex-direction: column; align-items:center; background-color: #000000; }'}</style>
        </Helmet>
    )
}

export default ReactHelmet