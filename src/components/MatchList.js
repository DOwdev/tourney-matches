import Match from './Match';

export default function MatchList(){
    return(
        <section className="PlayerList MatchList">
        <h1>Match list</h1>
        <Match/>
        {/* Matches will be shown here */}
    </section>
  
    );
}