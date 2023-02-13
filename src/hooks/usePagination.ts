import { useState, useEffect } from "react";
import { RandomData } from "../data";

export const usePagination = (
  dataEntries: RandomData[],
  elementsOnPage = 50
) => {
  const [actualPageIdx, setActualPageIdx] = useState<number>(2);
  const [lastPageIdx, setLastPageIdx] = useState<number>(0);
  const [entriesOnSelectedPage, setEntriesOnSelectedPage] = useState<
    RandomData[]
  >([]);
  const [isBusy, setIsBusy] = useState<boolean>(false);

  const wait = () => {
    setIsBusy(true);
    setTimeout(() => setIsBusy(false), 333);
  };

  const goToPage = (page: number) => {
    wait();
    setActualPageIdx(page);
  };

  const goToFirstPage = () => {
    wait();
    setActualPageIdx(0);
  };
  const goToPrevPage = () => {
    wait();
    setActualPageIdx((prev) => prev - 1);
  };
  const goToNextPage = () => {
    wait();
    setActualPageIdx((prev) => prev + 1);
  };
  const goToLastPage = () => {
    wait();
    setActualPageIdx(0);
  };

  useEffect(() => {
    setLastPageIdx(Math.ceil(dataEntries.length / elementsOnPage));
  }, []);

  useEffect(() => {
    const newEntries = dataEntries.slice(
      actualPageIdx * lastPageIdx,
      actualPageIdx * lastPageIdx + elementsOnPage
    );
    setEntriesOnSelectedPage(newEntries);
  }, [actualPageIdx, lastPageIdx]);

  const paginationState = {
    actualPageIdx,
    lastPageIdx,
    entriesOnSelectedPage,
    isBusy,
  };
  const paginationActions = {
    goToFirstPage,
    goToPrevPage,
    goToPage,
    goToNextPage,
    goToLastPage,
  };

  return { paginationState, paginationActions };
};
