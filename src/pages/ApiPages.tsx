import axios from "axios";
import React, { useEffect, useState } from "react";
import ApiItem from "../components/ApiItem";
import List from "../components/List";
import { IApi } from "../types/types";

const ApiPages = () => {
  const [infor, setInfor] = useState<IApi[]>([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [fetching, setFetching] = useState(true);

  useEffect(() => {
    if (fetching) {
      axios
        .get<IApi[]>(
          `https://jsonplaceholder.typicode.com/photos?_limit=200&_page=${currentPage}`
        )
        .then((response) => {
          setInfor([...infor, ...response.data]);
          setCurrentPage((prevState) => prevState + 1);
        })
        .finally(() => setFetching(false));
    }
  }, [fetching]);

  useEffect(() => {
    let apiList = document.querySelector(".apiList");
    apiList?.addEventListener("scroll", scrollHandler);
    return function () {
      apiList?.removeEventListener("scroll", scrollHandler);
    };
  }, []);

  const scrollHandler = () => {
    let apiList = document.querySelector(".apiList");
    if (
      apiList!.scrollHeight - (apiList!.scrollTop + window.innerHeight) <
      200
    ) {
      setFetching(true);
    }
  };

  return (
    <List
      items={infor}
      renderItems={(info: IApi) => <ApiItem info={info} key={info.id} />}
    />
  );
};

export default ApiPages;
