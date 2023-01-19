import React from 'react'
import "./Banner.css"
import { db } from "../../config/firebaseConfig"
import { getDocs, collection, query, orderBy, limit } from "firebase/firestore"

const Banner = () => {
    //get data from articles collection to display when this
    //component loads

    const [mainArticle, setMainArticle] = React.useState('')
    const [otherArticles, setOtherArticles] = React.useState([])

    React.useEffect(
        () => {
            //create a reference to articles
            const articleRef = collection(db, 'articles')

            //get the docs from this collection

            //set up query to filter the data
            const q= query(articleRef, orderBy('createdAt', 'desc'), limit(5))
            getDocs(q, articleRef)
            //to use the query
            // getDocs(articleRef)
                .then(res => {
                    console.log(res)
                    //get data and store in an array
                    const articles = res.docs.map(item => (
                        {
                            id: item.id,
                            ...item.data()
                        }

                    ))
                    console.log(articles)
                    // store the first article in the mainArticle
                    setMainArticle(articles[0])

                    // Put the rest in otherArticles
                    setOtherArticles(articles.splice(1))
                })
                .catch(err => console.log(err))
        }, []
    )
    return (
        <div className='banner-container'>
            <div className='main-article-container' style={{ backgroundImage: `url(${mainArticle?.imageUrl})` }}>
                <div className='banner-info'>
                    <h2>{mainArticle?.title}</h2>
                    <div className='main-article-info'>
                        <p>{mainArticle?.createdAt?.toDate().toDateString()}</p>
                    </div>
                </div>
            </div>
            <div className='other-articles-container'>
                {
                    otherArticles.map(item => (
                        <div className='other-article-item' style={{ backgroundImage: `url(${item?.imageUrl})` }}>
                            <div className='banner-info'>
                                <h3>{item.title}</h3>
                                <p>{item?.createdAt?.toDate().toDateString()}</p>
                            </div>
                        </div>
                    ))
                }
            </div>
        </div>
    )
}

export default Banner