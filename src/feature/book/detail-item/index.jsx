import "./detail.css";

export function DetailItem({ item }){

    return(
        <article className="wrapper">
            <div>
                <img  src={item.photo} alt={item.title}/>
            </div>
            <div className="content-description">
                <strong>{item.title}</strong>
                <small  className="small-author">{item.author}</small>
                <span>Temática: { item.genre}</span>
                <span>Numero paginas: {item.numPages}</span>
                <small>Sinopsis de: {item.title}</small>
                <p>{item.description}</p>
            </div>
        </article>
    );
}