


function Animal({animal}){

return (
    <div>
        <div>{animal.name} ,
        {animal.kind},

        {animal.age}살</div>
    </div>


);

}

function AnimalsList() {
    const animals = [
        {
            id : 1,
            name : "Bang",
            kind : "KoShort",
            age : 15 
        },
        {
            id : 2,
            name : "Ong",
            kind : "Norwayforest",
            age : 10 
        },
        {
            id : 2,
            name : "Chocho",
            kind : "Shih Tzu",
            age : 16 
        }
    ];



    return(
        <div>
            <Animal animal={animals[0]} />
            <Animal animal={animals[1]} />
            <Animal animal={animals[2]} />


        </div>

    );
}
export default AnimalsList;