
const Card = ({ id, short, title, icon_url }) => {
  return (
    <>
      <div className="card">
        <h3>{id}</h3>
        <strong>{short}</strong>
        <p>{title}</p>
        <img width={75} src={icon_url} />
      </div>

      <style jsx>
        {`
          .card {
            margin: 1rem;
            flex-basis: 45%;
            padding: 1.5rem;
            text-align: left;
            color: inherit;
            text-decoration: none;
            border: 1px solid #eaeaea;
            border-radius: 10px;
            transition: color 0.15s ease, border-color 0.15s ease;
          }
        `}
      </style>
    </>
  )
}

export default Card