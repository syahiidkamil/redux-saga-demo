import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Card, CardBody, CardHeader, Input } from "@nextui-org/react";

import { searchRequest } from "../redux/actions/searchActions";
import SearchIcon from "./Icons/SearchIcon.component";
import styles from "./SearchBarPage.styles";

const SearchBarPage = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const dispatch = useDispatch();
  // @ts-ignore
  const results = useSelector((state) => state.search.results);

  useEffect(() => {
    if (searchTerm) {
      dispatch(searchRequest(searchTerm));
    }
  }, [searchTerm, dispatch]);

  const onValueChange = (e) => {
    setSearchTerm(e.target.value);
  };

  const onClear = () => {
    setSearchTerm("");
  };

  return (
    <Card className={styles.container}>
      <CardHeader className="flex-col items-center justify-center">
        <h4 className="font-bold text-large">Frontend Radio</h4>
      </CardHeader>
      <CardBody className={styles.cardContainer}>
        <Input
          value={searchTerm}
          onChange={onValueChange}
          label="Search"
          isClearable
          radius="lg"
          placeholder="Type to search..."
          onClear={onClear}
          startContent={<SearchIcon className={styles.searchIcon} />}
        />
        {results.map((fruit) => (
          <p key={fruit.id}>{fruit.name}</p>
        ))}
      </CardBody>
    </Card>
  );
};

export default SearchBarPage;
