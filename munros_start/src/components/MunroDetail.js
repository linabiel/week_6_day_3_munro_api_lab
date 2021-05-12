const MunroDetail = ({munro}) => {

    return(
        <div>
            <h3>{munro.name}</h3>
            <p>Height: {munro.height}</p>
            <p>Meaning: {munro.meaning}</p>
        </div>
    )
}

export default MunroDetail;