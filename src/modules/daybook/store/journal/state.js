export default ()=>({
    isLoading : true,
    entries:
    [
        {
            id:new Date().getTime(),
            date: new Date().toDateString(),
            text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellendus magnam iste iure vel sequi enim, praesentium natus aut neque ad fugiat atque officiis dolorem doloribus quod veniam dolor tenetur pariatur.',
            picture: null
        },
        {
            id:new Date().getTime()+1000,
            date: new Date().toDateString(),
            text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellendus magnam iste iure vel sequi enim, praesentium natus aut neque ad fugiat atque officiis dolorem doloribus quod veniam dolor tenetur pariatur.',
            picture: null
        },
        {
            id:new Date().getTime()+2000,
            date: new Date().toDateString(),
            text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellendus magnam iste iure vel sequi enim, praesentium natus aut neque ad fugiat atque officiis dolorem doloribus quod veniam dolor tenetur pariatur.',
            picture: null
        }
    ]
})