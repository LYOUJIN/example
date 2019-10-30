import React from 'react';

export const Stats = (props) => {
    const totalPlayers = props.players.length;
    let totalScore = 0;
    props.players.forEach(player => totalScore += player.scope);

    return(
        <table className="stats">
            <tr>
                <td>Players:</td>
                <td>{totalScore}</td>
            </tr>
            <tr>
            <tr>
                <td>Total Players:</td>
                <td>{totalScore}</td>
            </tr>
            </tr>
        </table>
    );
};