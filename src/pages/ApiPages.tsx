import axios from "axios";
import React, { useEffect, useState } from "react";
import ApiItem from "../components/ApiItem";
import List from "../components/List";
import { IApi } from "../types/types";

const ApiPages = () => {
  const [infor, setInfor] = useState<IApi[]>([]);

  useEffect(() => {
    fetchInfor();
  }, []);

  async function fetchInfor() {
    try {
      const response = await axios.get<IApi[]>(
        "https://jsonplaceholder.typicode.com/photos?_limit=200&_page=1"
      );
      setInfor(response.data);
    } catch (e) {
      alert(e);
    }
  }

  return (
    <List
      items={infor}
      renderItems={(info: IApi) => <ApiItem info={info} key={info.id} />}
    />
  );
};

export default ApiPages;
