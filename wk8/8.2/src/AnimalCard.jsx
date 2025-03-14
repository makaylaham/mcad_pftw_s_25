export default function AnimalCard({animalName, deleteFn, focusFn}) {
    return (
        <div>
            <h3>{animalName}</h3>
            <div>
                <button className="focus" onClick={() => {
                    focusFn(animalName)
                }}>Focus</button>
                <button className="delete" onClick={() => {
                    deleteFn(animalName)
                }}>Delete</button>
            </div>
        </div>
    )
}