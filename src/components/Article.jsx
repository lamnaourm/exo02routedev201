import React from 'react'
import { Link, useParams } from 'react-router-dom'
import articles from './ArticlesData'

export default function Article() {

    const {id} = useParams()

    const article = articles.find(a => a.id==id)
  return (
    <div className='detail'>
        <img src={article.image} alt="" />
        <div>
            <h1>Titre : {article.title}</h1>
            <h3>Stock : {article.stock}</h3>
            <p>description : {article.description}</p>

            <Link to='/home'>To home</Link>
        </div>
    </div>
  )
}
