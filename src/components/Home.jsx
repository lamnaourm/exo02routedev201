import React from 'react'
import articles from './ArticlesData'
import { useNavigate } from 'react-router-dom'

export default function Home() {

    const navigate = useNavigate()
  return (
    <div className='list'>
        {
            articles.map(art => 
                <div className='article'>
                    <img src={art.image} alt={art.title} />
                    <h3>{art.title}</h3>
                    <button onClick={() => navigate('/article/'+art.id)}>Details Article</button>
                </div>
                )
        }
    </div>
  )
}
