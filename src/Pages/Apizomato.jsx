import React, {useEffect, useState} from 'react';
import {
    Card, CardImg, CardText, CardBody,
    CardTitle, CardSubtitle, Button
  } from 'reactstrap';
import Axios from 'axios'

const token = 'ee5c7a59d5aad08f786511d7d86253d6'

const Apizomato = () => {
    const [categories, setCateg] = useState([])
    const [restaurants, setRest] = useState([])

    useEffect(()=> {
        Axios.get('https://developers.zomato.com/api/v2.1/categories',
        {
            headers: {
                'user-key':`${token}`
            }
        }).then((res)=> {
            console.log(res.data.categories)
            Axios.get('https://developers.zomato.com/api/v2.1/search?start=1&count=15&sort=rating',
            {
                headers: {
                    'user-key':`${token}`
                }
            }).then((res2)=>{
                console.log(res2.data.restaurants)
                setCateg(res.data.categories)
                setRest(res2.data.restaurants)
            }).catch((err)=> {
                console.log(err)
            })
        }).catch(err => {
            console.log(err)
        })
    },[])

    const renderCategories = () => {
        if(categories.length === 0){
            return (
                <option>Loading...</option>
            )
        }
        return categories.map((val,ind) => {
            return (
                <option key={ind} value={val.categories.id}>{val.categories.name}</option>
            )
        })
    }

    const renderCards = () => {
        return restaurants.map((val, ind) => {
            return (
                <div key={ind} className='col-md-4 mb-4'>
                    <Card>
                        <CardImg top width="100%" height={'200'} src={val.restaurant.featured_image} alt="Card image cap" />
                        <CardBody>
                            <CardTitle>{val.restaurant.name}</CardTitle>
                            <CardSubtitle>Card subtitle</CardSubtitle>
                            <CardText>Some quick example text to build on the card title and make up the bulk of the card's content.</CardText>
                            <a href={val.restaurant.url} target='_blank'>
                                <Button>Button</Button>
                            </a> 
                        </CardBody>
                    </Card>
                </div>
            )  
        })
    }

    return (
    <>
        <select>
            {renderCategories()}
        </select>
        <div className='row m-3'>
            {renderCards()}
        </div>
    </>
    )
}

export default Apizomato