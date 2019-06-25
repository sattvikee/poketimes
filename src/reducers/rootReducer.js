const initState = {
    posts: [
        {
            "id": 1,
            "title": "title1 sunt aut facere repellat provident occaecati excepturi optio reprehenderit",
            "body": "b1 quia et suscipit\nsuscipit recusandae consequuntur expedita et cum\nreprehenderit molestiae ut ut quas totam\nnostrum rerum est autem sunt rem eveniet architecto"
        },
        {
            "id": 2,
            "title": "title2 qui est esse",
            "body": "b2 est rerum tempore vitae\nsequi sint nihil reprehenderit dolor beatae ea dolores neque\nfugiat blanditiis voluptate porro vel nihil molestiae ut reiciendis\nqui aperiam non debitis possimus qui neque nisi nulla"
        },
        {
            "id": 3,
            "title": "title3 ea molestias quasi exercitationem repellat qui ipsa sit aut",
            "body": "b3 et iusto sed quo iure\nvoluptatem occaecati omnis eligendi aut ad\nvoluptatem doloribus vel accusantium quis pariatur\nmolestiae porro eius odio et labore et velit aut"
        }
    ]
}

const rootReducer = (state = initState, action) => {
    if (action.type === 'DELETE_POST') {
        return {
            ...state,
            posts: state.posts.filter(post => {
                return post.id != action.id
            })
        }
    }
    return state;
}

export default rootReducer