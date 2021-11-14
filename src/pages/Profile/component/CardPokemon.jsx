import Button from "../../../components/Button";

const index = (props) => {
  const { imagePokemon, nickname, name, handleReleasePokemon, types, currentPokemon } = props;

  return (
    <div className="card-my-pokemon">
      <div className="row">
        <div className="col-4 pr-my-pokemon-image">
          <div className="box-my-pokemon">
            <img src={imagePokemon} alt="" />
          </div>
        </div>
        <div className="col-8 pl-my-pokemon-desc">
          <div className="box-my-desc-pokemon">
            <div className="row align-items-center text-start">
              <div className="col-4"><h6 className="text-muted">Nickname</h6></div>
              <div className="col-8"><h5>{`: ${nickname}`}</h5></div>
              <div className="col-4"><h6 className="text-muted">Name</h6></div>
              <div className="col-8"><p>:<i>{` ${name}`}</i></p></div>
              <div className="col-4"><h6 className="text-muted">Types</h6></div>
              <div className="col-8"><h6>:<i>{` ${types}`}</i></h6></div>
            </div>
            <div className="text-end me-2">
              <Button type="danger" size="small" onClick={() => handleReleasePokemon(currentPokemon)}>
                Release
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default index;