import { RandomData } from "../../data";
import { usePagination } from "../../hooks/usePagination";
import { Pagination } from "../Pagination/Pagination";

type PaginatedTableProps = {
  dataEntries: RandomData[];
};

export const PaginatedTable = ({ dataEntries }: PaginatedTableProps) => {
  const { paginationState, paginationActions } = usePagination(dataEntries, 5);
  return (
    <div>
      {paginationState.isBusy ? (
        <div>Loading...</div>
      ) : (
        <table>
          <thead>
            <tr>
              {Object.keys(dataEntries[0]).map((item) => (
                <th key={item}>{item}</th>
              ))}
            </tr>
          </thead>
          <tbody>
            {paginationState.entriesOnSelectedPage.map((item) => (
              <tr key={`${item.name}-${item.country}`}>
                {Object.values(item).map((cell) => (
                  <td key={cell}>{cell}</td>
                ))}
              </tr>
            ))}
          </tbody>
        </table>
      )}

      <Pagination
        paginationState={paginationState}
        paginationActions={paginationActions}
      />
    </div>
  );
};
