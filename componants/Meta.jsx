import React from 'react'
import Head from 'next/head'
const Meta = ({title,keyword,description}) => {
  return (
    <Head>
        
        <meta name= "keyword" content={keyword}/>
        <meta name= "description" content={description}/>
        <meta charSet='utf-8'/>
        <link rel="icon" href="/favicon.ico"/>
        <title>{title}</title>
    </Head>
  )
}
Meta.defaultProps ={
    title:"home",
    keyword:"sfgfdhsgjhgdjgdj",
    description:"loram test name"
}

export default Meta