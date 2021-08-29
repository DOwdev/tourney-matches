import Player from './Player';

export default function PlayerList(props){
    const { parsedPlayerArray } = props;
    const playerNewArray = parsedPlayerArray.map(player => <Player key={player.gamerTag} {...player} />);

    return(
        <section className="PlayerList">
    <h1>Current participating players</h1>
    {playerNewArray}
  </section>
    );
}