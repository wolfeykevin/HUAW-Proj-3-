const SaveData = (props) => {

  return (
    <>
      {(props.gameData === undefined || Object.keys(props.gameData).length === 0) ? <></> :
      <div className="save-data-container">
        <div className="save-title">{props.gameData.player_name}</div>
        <div className="save-data">
          <div>
            <p>{`Game ID: ${props.player_game_id}`}</p>
            <p>{`Level: ${props.gameData.level}`}</p>
            <p>{`Class: ${props.gameData.player.name}`}</p>
          </div>
          <img className="save-image" src={`/assets/AFSC/${props.gameData.player.name}.png`}/>
        </div>
      </div>
      }
    </>
  )
}

export default SaveData;