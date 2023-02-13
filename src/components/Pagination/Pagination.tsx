import { RandomData } from "../../data";

type PaginationProps = {
  paginationState: {
    actualPageIdx: number;
    lastPageIdx: number;
    entriesOnSelectedPage: RandomData[];
    isBusy: boolean;
  };
  paginationActions: {
    goToFirstPage: () => void;
    goToPrevPage: () => void;
    goToPage: (arg0: number) => void;
    goToNextPage: () => void;
    goToLastPage: () => void;
  };
};

export const Pagination = ({
  paginationState,
  paginationActions,
}: PaginationProps) => (
  <div>
    <button
      type="button"
      onClick={paginationActions.goToFirstPage}
      disabled={paginationState.actualPageIdx === 0}
    >
      First page
    </button>
    <button
      type="button"
      onClick={paginationActions.goToPrevPage}
      disabled={paginationState.actualPageIdx === 0}
    >
      Prev
    </button>
    {Array.from(Array(paginationState.lastPageIdx).keys()).map((item) => (
      <button
        type="button"
        onClick={() => paginationActions.goToPage(item)}
        disabled={paginationState.actualPageIdx === item}
        key={`button${item}`}
      >
        {item + 1}
      </button>
    ))}
    <button
      type="button"
      onClick={paginationActions.goToNextPage}
      disabled={
        paginationState.actualPageIdx === paginationState.lastPageIdx - 1
      }
    >
      Next
    </button>
    <button
      type="button"
      onClick={paginationActions.goToLastPage}
      disabled={
        paginationState.actualPageIdx === paginationState.lastPageIdx - 1
      }
    >
      LastPage
    </button>
    <p>
      Page {paginationState.actualPageIdx + 1} / {paginationState.lastPageIdx}
    </p>
  </div>
);
