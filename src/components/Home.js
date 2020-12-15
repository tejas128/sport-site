import React, { useState, useEffect } from 'react'
import fb from '../images/fb.jpg'
import axios from 'axios'
import Spinner from './Spinner'
function Home() {
    const [articles, setarticles] = useState([])
    const [isLoading, setisLoading] = useState(true)
    useEffect(() => {
        const fetchnews = async () => {
            const newsdata = await axios('http://newsapi.org/v2/top-headlines?' +
                'country=us&' +
                'apiKey=dde2683a470440e9bd55e6eb6e1e8f3b')
            console.log(newsdata.data.articles)
            setarticles(newsdata.data.articles)
            setisLoading(false)
        }
        fetchnews()


    }, [])
    return (

        <div id="carouselExampleFade" class="carousel slide carousel-fade" data-ride="carousel">
            <ol class="carousel-indicators">
                <li data-target="#carouselExampleCaptions" data-slide-to="0" class="active"></li>
                <li data-target="#carouselExampleCaptions" data-slide-to="1"></li>
                <li data-target="#carouselExampleCaptions" data-slide-to="2"></li>
                <li data-target="#carouselExampleCaptions" data-slide-to="3"></li>
                <li data-target="#carouselExampleCaptions" data-slide-to="4"></li>
            </ol>
            <div class="carousel-inner">
                <div class="carousel-item active">
                    <img src="https://source.unsplash.com/1400x400/?tennis" class="d-block w-100" alt="..."></img>
                </div>
                <div class="carousel-item">
                    <img src="https://source.unsplash.com/1400x400/?rugby" class="d-block w-100" alt="..."></img>
                </div>
                <div class="carousel-item">
                    <img src="https://source.unsplash.com/1400x400/?swimming" class="d-block w-100" alt="..."></img>
                </div>
                <div class="carousel-item">
                    <img src="https://source.unsplash.com/1400x400/?cycling" class="d-block w-100" alt="..."></img>
                </div>
                <div class="carousel-item">
                    <img src="https://source.unsplash.com/1400x400/?football" class="d-block w-100" alt="..."></img>
                </div>
            </div>
            <a class="carousel-control-prev" href="#carouselExampleFade" role="button" data-slide="prev">
                <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                <span class="sr-only">Previous</span>
            </a>
            <a class="carousel-control-next" href="#carouselExampleFade" role="button" data-slide="next">
                <span class="carousel-control-next-icon" aria-hidden="true"></span>
                <span class="sr-only">Next</span>
            </a>
            
            <div class="container my-4">
                <div class="row mb-2">
                
                        {  
                            isLoading?(<Spinner/>):articles.map((article) => (
                                <div class="col-md-6">
                                    <div class="row no-gutters border rounded overflow-hidden flex-md-row mb-4 shadow-sm h-md-250 position-relative">
                                        <div class="col p-4 d-flex flex-column position-static">
                                            <strong class="d-inline-block mb-2 text-primary">{article.author}</strong>
                                            <h3 class="mb-0">{article.title}</h3>
                                            <div class="mb-1 text-muted">{article.publishedAt}</div>
                                            <p class="card-text mb-auto">{article.description}</p>
                                            <a href={article.url} class="stretched-link">Continue reading</a>
                                        </div>
                                        <div class="col-auto d-none d-lg-block">
                                            <img class="bd-placeholder-img" width="200" height="250" src={article.urlToImage} alt=""></img>
                                        </div>
                                    </div>
                                </div>
                            ))
                        }

                    </div>
                </div>
            </div>

    )
}

export default Home
