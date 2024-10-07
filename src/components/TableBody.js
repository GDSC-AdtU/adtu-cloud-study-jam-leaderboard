import React from "react";
import TableRow from "./TableRow";

function TableBody({ Participationdata, setParticipationdata }) {
  // console.log(Participationdata)

  // Sort Participationdata by "# of Skill Badges Completed" in descending order
  const sortedData = [...Participationdata].sort((a, b) => b["# of Skill Badges Completed"] - a["# of Skill Badges Completed"]);
  let rank = 1;

  return (
    <tbody className="text-xs ">
      {sortedData.length > 0 ? (
        sortedData.map((participant, index) => {
          return (
            <TableRow
              key={participant["User Email"] || 1}
              participant={participant} rank={sortedData.length == "145" ? rank++ : "⚡"}
            />
          );
        })
      ) : (
        <div className="text-lg">No User Found</div>
      )}
    </tbody>
  );
}

export default TableBody;
