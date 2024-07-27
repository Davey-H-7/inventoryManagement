import Part from './Part';

const PartList = ({parts}) => {


    if(parts.length === 0){
        return <h2>No parts found! Try adding one</h2>
    }
  
    const partNodes = parts.map((part) => {
         return <Part part = {part} key ={part.id}/>
    })



    return(
        <div className='partList'>
            <h1> All Parts </h1>
                <ul>
                    {partNodes}
                </ul>
        </div>

    )
}

export default PartList;