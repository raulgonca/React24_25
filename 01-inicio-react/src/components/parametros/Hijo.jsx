function Hijo(params) {
    const { handlerClickSumar } = params;

  return (
    <>
        <br />
        <hr />
        <div>Hijo</div>
        <div>
            <button onClick={ handlerClickSumar }>Aumentar edad desde el hijo</button>
        </div>
        
    </>
  )
}

export default Hijo