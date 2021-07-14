import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import PostCard from '../../../components/PostCard';

const useStyles = makeStyles((theme) => ({
    root:{

    }
}));

const posts = [
    {
        id: 1, 
        author: {
            id: 1,
            name: 'Lucas Nhimi',
            username: 'lucasnhimi',
            avatar: '/images/avatars/avatar_1.jpeg'
        },
        title: "Criando um App do zero utilizando React.js",
        date: "April 7, 2020",
        description: 'Fala pessoal! Qual o framework favorito de voces?',
        hashtags: "#dotnet, #javascript, #reactjs, #developer",
        image: "images/posts/post9.jpeg"
    },
    {
        id: 2, 
        author: {
            id: 1,
            name: 'Lucas Nhimi',
            username: 'lucasnhimi',
            avatar: '/images/avatars/avatar_1.jpeg'
        },
        title: "Comparativo entre React.js e Vue.js - Performance",
        date: "April 1, 2020",
        description: 'Quero criar um bootcamp gratuito para passar um pouco de conhecimento',
        hashtags: "#framework, #javascript, #reactjs, #vue",
        image: "images/posts/post8.png"
    }
];

function Feed(){
    const classes = useStyles();
     
    return (
        <div className={classes.root}>
            {   /*como vou ter o msm elemento sendo criado varias vezes
                para nao ter problema ai uso um identificador unico para
                cada elemento*/
                posts.map(post => (
                <PostCard key={post.id} post={post} />
                ))
            }
        </div>
    );
}

export default Feed;